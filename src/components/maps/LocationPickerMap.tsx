import React, { useEffect, useRef, useState } from 'react';
import { Map, AdvancedMarker, useMap } from '@vis.gl/react-google-maps';
import { MapPin, Check, Crosshair, Loader2, AlertCircle } from 'lucide-react';

interface LocationPickerMapProps {
  initialLat?: number;
  initialLng?: number;
  heightClass?: string;
  autoDetectOnMount?: boolean;
  onLocationSelected: (lat: number, lng: number, addressPreview?: string) => void;
  serviceAreaPolygons?: { lat: number; lng: number }[][];
}

export const LocationPickerMap: React.FC<LocationPickerMapProps> = ({
  initialLat = 22.5350,
  initialLng = 88.3600,
  heightClass = 'h-[320px]',
  autoDetectOnMount = false,
  onLocationSelected
}) => {
  const map = useMap();
  const [markerPos, setMarkerPos] = useState<{ lat: number; lng: number }>({
    lat: initialLat,
    lng: initialLng
  });
  const [isDetectingGPS, setIsDetectingGPS] = useState(false);
  const [gpsStatusMsg, setGpsStatusMsg] = useState<string | null>(null);
  const [gpsErrorMsg, setGpsErrorMsg] = useState<string | null>(null);
  const hasUserInteractedRef = useRef(false);
  const autoDetectedOnceRef = useRef(false);
  const onLocationSelectedRef = useRef(onLocationSelected);
  onLocationSelectedRef.current = onLocationSelected;

  useEffect(() => {
    setMarkerPos({ lat: initialLat, lng: initialLng });
    if (map) {
      map.panTo({ lat: initialLat, lng: initialLng });
    }
  }, [initialLat, initialLng, map]);

  const handleMapClick = (e: any) => {
    if (e.detail?.latLng) {
      hasUserInteractedRef.current = true;
      setGpsErrorMsg(null);
      setGpsStatusMsg(null);
      const lat = e.detail.latLng.lat;
      const lng = e.detail.latLng.lng;
      setMarkerPos({ lat, lng });
      if (map) {
        map.panTo({ lat, lng });
      }
      onLocationSelectedRef.current(lat, lng);
    }
  };

  const applyDetectedPosition = (lat: number, lng: number) => {
    setMarkerPos({ lat, lng });
    if (map) {
      map.panTo({ lat, lng });
      const currentZoom = map.getZoom();
      if (typeof currentZoom === 'number' && currentZoom < 15) {
        map.setZoom(15);
      }
    }
    setGpsErrorMsg(null);
    setGpsStatusMsg('Current location detected');
    onLocationSelectedRef.current(
      lat,
      lng,
      `Near Current Location (${lat.toFixed(4)}, ${lng.toFixed(4)})`
    );
  };

  const handleDetectGPS = (isAuto = false) => {
    if (!navigator.geolocation) {
      setGpsErrorMsg('Geolocation is not supported by your browser (ব্রাউজার জিপিএস সমর্থন করে না)');
      return;
    }

    setIsDetectingGPS(true);
    setGpsErrorMsg(null);
    if (!isAuto) {
      hasUserInteractedRef.current = true;
      setGpsStatusMsg('Detecting your current location...');
    }

    const onSuccess = (pos: GeolocationPosition) => {
      setIsDetectingGPS(false);
      if (isAuto && hasUserInteractedRef.current) return;
      applyDetectedPosition(pos.coords.latitude, pos.coords.longitude);
    };

    const onFinalError = (err: GeolocationPositionError) => {
      setIsDetectingGPS(false);
      setGpsStatusMsg(null);
      if (err.code === err.PERMISSION_DENIED) {
        setGpsErrorMsg('Location permission denied. Please allow location access or tap on the map.');
      } else {
        setGpsErrorMsg('Unable to detect current GPS location. You can tap anywhere on the map.');
      }
    };

    navigator.geolocation.getCurrentPosition(
      onSuccess,
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          onFinalError(err);
          return;
        }
        navigator.geolocation.getCurrentPosition(
          onSuccess,
          onFinalError,
          { enableHighAccuracy: false, timeout: 8000, maximumAge: 30000 }
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  useEffect(() => {
    if (autoDetectOnMount && !autoDetectedOnceRef.current) {
      autoDetectedOnceRef.current = true;
      handleDetectGPS(true);
    }
  }, [autoDetectOnMount]);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
      <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md text-xs font-semibold text-stone-700 flex items-center gap-1.5 max-w-[65%]">
        <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
        <span className="truncate">Tap on map to place pin (ম্যাপে ক্লিক করে পিন বসান)</span>
      </div>

      <button
        type="button"
        onClick={() => handleDetectGPS(false)}
        disabled={isDetectingGPS}
        className="absolute top-3 right-3 z-10 bg-white hover:bg-orange-50 disabled:opacity-70 text-orange-600 border border-orange-200 px-3 py-1.5 rounded-xl shadow-md text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
        title="Detect device GPS"
      >
        {isDetectingGPS ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : (
          <Crosshair className="w-3.5 h-3.5" />
        )}
        <span>{isDetectingGPS ? 'Detecting...' : 'My GPS'}</span>
      </button>

      <div className={`w-full ${heightClass}`}>
        <Map
          defaultCenter={markerPos}
          defaultZoom={15}
          mapId="DEMO_MAP_ID"
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          onClick={handleMapClick}
          gestureHandling="greedy"
          className="w-full h-full"
        >
          <AdvancedMarker position={markerPos}>
            <div className="flex flex-col items-center">
              <div className="bg-orange-600 text-white p-2 rounded-full shadow-2xl border-2 border-white animate-bounce">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="bg-stone-900 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow mt-0.5 whitespace-nowrap">
                Delivery Point
              </div>
            </div>
          </AdvancedMarker>
        </Map>
      </div>

      {(gpsErrorMsg || gpsStatusMsg) && (
        <div
          className={`px-4 py-1.5 text-[11px] font-medium border-t flex items-center gap-1.5 ${
            gpsErrorMsg
              ? 'bg-amber-50 text-amber-900 border-amber-200'
              : 'bg-emerald-50 text-emerald-800 border-emerald-200'
          }`}
        >
          {gpsErrorMsg ? (
            <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          ) : (
            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          )}
          <span>{gpsErrorMsg || gpsStatusMsg}</span>
        </div>
      )}

      <div className="bg-stone-50 px-4 py-2 text-xs text-stone-600 border-t border-stone-200 flex items-center justify-between">
        <div className="font-mono text-[11px]">
          Lat: {markerPos.lat.toFixed(5)}, Lng: {markerPos.lng.toFixed(5)}
        </div>
        <div className="text-emerald-700 font-semibold flex items-center gap-1">
          <Check className="w-3.5 h-3.5" />
          <span>Location Locked</span>
        </div>
      </div>
    </div>
  );
};

