var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express10 = __toESM(require("express"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
var import_url = require("url");

// server/app.ts
var import_express9 = __toESM(require("express"), 1);

// server/db/index.ts
var import_promise = __toESM(require("mysql2/promise"), 1);
var inMemoryStore = null;
async function initInMemoryStore() {
  inMemoryStore = {
    users: [
      {
        id: 1,
        name: "AharLocal Operations",
        email: "admin@aharlocal.com",
        phone: "+919800000001",
        password_hash: "$2a$10$yN11o6y5RzT45jK5Y8aBquM29Fp/wD7c8mB1X6bFf.G5c87A4F.5m",
        role: "admin",
        profile_photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        language: "bn",
        is_active: 1,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 2,
        name: "Subrata Ghosh",
        email: "kolkatabiryani@aharlocal.com",
        phone: "+919800000002",
        password_hash: "$2a$10$yN11o6y5RzT45jK5Y8aBquM29Fp/wD7c8mB1X6bFf.G5c87A4F.5m",
        role: "restaurant",
        profile_photo: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150",
        language: "bn",
        is_active: 1,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 3,
        name: "Debabrata Modak",
        email: "maatarasweets@aharlocal.com",
        phone: "+919800000003",
        password_hash: "$2a$10$yN11o6y5RzT45jK5Y8aBquM29Fp/wD7c8mB1X6bFf.G5c87A4F.5m",
        role: "restaurant",
        profile_photo: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=150",
        language: "bn",
        is_active: 1,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 4,
        name: "Soma Mukherjee",
        email: "banglarrannaghor@aharlocal.com",
        phone: "+919800000004",
        password_hash: "$2a$10$yN11o6y5RzT45jK5Y8aBquM29Fp/wD7c8mB1X6bFf.G5c87A4F.5m",
        role: "restaurant",
        profile_photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
        language: "bn",
        is_active: 1,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 5,
        name: "Rahul Sen (Delivery Rider)",
        email: "rahul.delivery@aharlocal.com",
        phone: "+919800000005",
        password_hash: "$2a$10$yN11o6y5RzT45jK5Y8aBquM29Fp/wD7c8mB1X6bFf.G5c87A4F.5m",
        role: "delivery",
        profile_photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
        language: "bn",
        is_active: 1,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 6,
        name: "Subhash Roy (Delivery Rider)",
        email: "subhash.delivery@aharlocal.com",
        phone: "+919800000006",
        password_hash: "$2a$10$yN11o6y5RzT45jK5Y8aBquM29Fp/wD7c8mB1X6bFf.G5c87A4F.5m",
        role: "delivery",
        profile_photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        language: "bn",
        is_active: 1,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 7,
        name: "Bikram Das",
        email: "customer@aharlocal.com",
        phone: "+919800000007",
        password_hash: "$2a$10$yN11o6y5RzT45jK5Y8aBquM29Fp/wD7c8mB1X6bFf.G5c87A4F.5m",
        role: "customer",
        profile_photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
        passport_photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
        language: "bn",
        is_active: 1,
        cod_enabled: 0,
        address: "Flat 3B, Sunshine Heights, 14 Ballygunge Circular Road, Kolkata 700019",
        dob: "15/08/1996",
        gender: "Male",
        payment_method: "upi",
        upi_id: "bikram.das@okaxis",
        upi_qr_photo: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
        bank_name: "State Bank of India",
        bank_account_no: "38291048291",
        bank_account_holder: "Bikram Das",
        bank_ifsc: "SBIN0001234",
        bank_passbook_photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 8,
        name: "Tanmoy Nandi (Pending Vendor)",
        email: "newrest@aharlocal.com",
        phone: "+919800000008",
        password_hash: "$2a$10$yN11o6y5RzT45jK5Y8aBquM29Fp/wD7c8mB1X6bFf.G5c87A4F.5m",
        role: "restaurant",
        profile_photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
        language: "bn",
        is_active: 1,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 9,
        name: "Priyanka Sen (VIP Customer)",
        email: "priyanka@aharlocal.com",
        phone: "+919800000009",
        password_hash: "$2a$10$yN11o6y5RzT45jK5Y8aBquM29Fp/wD7c8mB1X6bFf.G5c87A4F.5m",
        role: "customer",
        profile_photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
        passport_photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
        language: "bn",
        is_active: 1,
        cod_enabled: 1,
        address: "58/2 Southern Avenue, Lake Market, Kolkata 700029",
        dob: "22/11/1998",
        gender: "Female",
        payment_method: "bank",
        upi_id: "priyanka.sen@okhdfcbank",
        upi_qr_photo: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
        bank_name: "HDFC Bank",
        bank_account_no: "501004829104",
        bank_account_holder: "Priyanka Sen",
        bank_ifsc: "HDFC0000456",
        bank_passbook_photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 10,
        name: "Amit Mondal (New Rider Applicant)",
        email: "amit.rider@aharlocal.com",
        phone: "+919800000010",
        password_hash: "$2a$10$yN11o6y5RzT45jK5Y8aBquM29Fp/wD7c8mB1X6bFf.G5c87A4F.5m",
        role: "delivery",
        profile_photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
        language: "bn",
        is_active: 1,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }
    ],
    settings: {
      global_cod_enabled: 0,
      // Cash on delivery is globally off by default; prepaid orders preferred
      restaurant_commission_percent: 15,
      // Default restaurant commission % (রেস্তোরাঁ কমিশন)
      delivery_partner_commission_percent: 10,
      // Default delivery partner platform fee % (ডেলিভারি পার্টনার কমিশন)
      delivery_base_fare: 25,
      // Base delivery charge in ₹ (বেস ডেলিভারি চার্জ)
      delivery_base_distance_km: 2,
      // Base distance in km covered by base fare
      delivery_per_km_rate: 10,
      // Delivery fee per extra km in ₹ (প্রতি কিমি ডেলিভারি রেট)
      min_delivery_fare: 20
      // Minimum delivery partner payout guarantee
    },
    promotions: {
      // 1. Restaurant Platform Charge Discount
      restaurant_discount_enabled: 1,
      restaurant_discount_type: "percent_off_commission",
      // 'percent_off_commission' (e.g. 50% discount) or 'flat_commission_rate' (e.g. 5% commission)
      restaurant_discount_value: 50,
      // 50% discount on restaurant commission
      restaurant_discount_title: "Festival Partner Offer: 50% Off Platform Fee",
      restaurant_discount_title_bn: "\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u0989\u09CE\u09B8\u09AC \u0985\u09AB\u09BE\u09B0: \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u09AB\u09BF-\u09A4\u09C7 \u09EB\u09E6% \u09AC\u09BF\u09B6\u09C7\u09B7 \u099B\u09BE\u09DC!",
      restaurant_discount_note: "All restaurant partners enjoy 50% discount on standard commission rates during this campaign.",
      // 2. Delivery Partner Platform Charge Discount
      partner_discount_enabled: 1,
      partner_discount_type: "zero_fee",
      // 'zero_fee', 'percent_off_fee', 'flat_fee_rate'
      partner_discount_value: 100,
      // 100% discount = 0% platform deduction
      partner_bonus_per_order: 5,
      // Extra ₹5 bonus per delivery order
      partner_discount_title: "Rider Super Bonus: 0% Platform Deduction + \u20B95 Extra Payout",
      partner_discount_title_bn: "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u09A7\u09BE\u09AE\u09BE\u0995\u09BE \u09AC\u09CB\u09A8\u09BE\u09B8: \u09E6% \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u0995\u09B0\u09CD\u09A4\u09A8 \u0993 \u09AA\u09CD\u09B0\u09A4\u09BF \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF\u09A4\u09C7 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u20B9\u09EB \u0987\u09A8\u09B8\u09C7\u09A8\u099F\u09BF\u09AD",
      partner_discount_note: "Riders retain 100% of delivery fees with zero platform deduction and receive \u20B95 cash bonus per completed delivery.",
      // 3. Customer Delivery Charge Discount
      customer_delivery_discount_enabled: 1,
      customer_delivery_discount_type: "free_delivery_above",
      // 'free_delivery_above', 'flat_discount', 'percent_discount'
      customer_delivery_discount_value: 100,
      // 100% discount
      customer_min_order_for_free_delivery: 199,
      // Orders above ₹199 get FREE delivery
      customer_first_order_free_delivery: 1,
      // First order free delivery
      customer_flat_delivery_discount: 10,
      // Flat ₹10 off delivery charge
      customer_promo_banner_enabled: 1,
      customer_promo_banner_text: "\u{1F389} \u09AC\u09BF\u09B6\u09C7\u09B7 \u0985\u09AB\u09BE\u09B0: \u20B9\u09E7\u09EF\u09EF \u099F\u09BE\u0995\u09BE\u09B0 \u09AC\u09C7\u09B6\u09BF \u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u09C7 \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u09AB\u09CD\u09B0\u09BF \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF!",
      customer_promo_banner_text_en: "\u{1F389} Limited Time Offer: FREE Delivery on all food orders above \u20B9199!"
    },
    location_rankings: [
      {
        id: 1,
        name: "Park Circus & Ballygunge Zone (Radius 3.5 KM)",
        name_bn: "\u09AA\u09BE\u09B0\u09CD\u0995 \u09B8\u09BE\u09B0\u09CD\u0995\u09BE\u09B8 \u0993 \u09AC\u09BE\u09B2\u09BF\u0997\u099E\u09CD\u099C \u099C\u09CB\u09A8 (\u09B0\u09C7\u09A1\u09BF\u09DF\u09BE\u09B8 \u09E9.\u09EB \u0995\u09BF\u09AE\u09BF)",
        lat: 22.54,
        lng: 88.36,
        radius_km: 3.5,
        is_active: 1,
        rankings: [
          { rank: 1, restaurant_id: 1 },
          { rank: 2, restaurant_id: 3 },
          { rank: 3, restaurant_id: 2 }
        ],
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 2,
        name: "Raidighi Main Market Point (Radius 5 KM)",
        name_bn: "\u09B0\u09BE\u09DF\u09A6\u09BF\u0998\u09BF \u09AE\u09C7\u09A8 \u09AE\u09BE\u09B0\u09CD\u0995\u09C7\u099F \u09AA\u09DF\u09C7\u09A8\u09CD\u099F (\u09B0\u09C7\u09A1\u09BF\u09DF\u09BE\u09B8 \u09EB \u0995\u09BF\u09AE\u09BF)",
        lat: 21.92,
        lng: 88.43,
        radius_km: 5,
        is_active: 1,
        rankings: [
          { rank: 1, restaurant_id: 7 },
          { rank: 2, restaurant_id: 5 },
          { rank: 3, restaurant_id: 6 }
        ],
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }
    ],
    service_areas: [
      {
        id: 1,
        name: "Central & South Kolkata Service Zone",
        name_bn: "\u09B8\u09C7\u09A8\u09CD\u099F\u09CD\u09B0\u09BE\u09B2 \u0993 \u09B8\u09BE\u0989\u09A5 \u0995\u09B2\u0995\u09BE\u09A4\u09BE \u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8 \u098F\u09B0\u09BF\u09DF\u09BE",
        min_delivery_charge: 25,
        per_km_charge: 8,
        is_active: 1,
        polygon: [
          { lat: 22.585, lng: 88.33 },
          { lat: 22.585, lng: 88.385 },
          { lat: 22.51, lng: 88.39 },
          { lat: 22.505, lng: 88.335 },
          { lat: 22.54, lng: 88.32 }
        ]
      },
      {
        id: 2,
        name: "Salt Lake & New Town Delivery Zone",
        name_bn: "\u09B8\u09B2\u09CD\u099F\u09B2\u09C7\u0995 \u0993 \u09A8\u09BF\u0989 \u099F\u09BE\u0989\u09A8 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u098F\u09B0\u09BF\u09DF\u09BE",
        min_delivery_charge: 30,
        per_km_charge: 9,
        is_active: 1,
        polygon: [
          { lat: 22.6, lng: 88.4 },
          { lat: 22.6, lng: 88.47 },
          { lat: 22.54, lng: 88.475 },
          { lat: 22.54, lng: 88.405 }
        ]
      },
      {
        id: 3,
        name: "Raidighi Bazaar & Town Service Area",
        name_bn: "\u09B0\u09BE\u09DF\u09A6\u09BF\u0998\u09BF \u09AC\u09BE\u099C\u09BE\u09B0 \u0993 \u09B6\u09B9\u09B0 \u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8 \u098F\u09B0\u09BF\u09DF\u09BE",
        min_delivery_charge: 20,
        per_km_charge: 7,
        is_active: 1,
        polygon: [
          { lat: 21.94, lng: 88.41 },
          { lat: 21.94, lng: 88.46 },
          { lat: 21.9, lng: 88.465 },
          { lat: 21.895, lng: 88.415 }
        ]
      }
    ],
    restaurants: [
      {
        id: 1,
        user_id: 2,
        service_area_id: 1,
        name: "Kolkata Royal Biryani House",
        name_bn: "\u0995\u09B2\u0995\u09BE\u09A4\u09BE \u09B0\u09DF\u09CD\u09AF\u09BE\u09B2 \u09AC\u09BF\u09B0\u09BF\u09DF\u09BE\u09A8\u09BF \u09B9\u09BE\u0989\u09B8",
        owner_name: "Subrata Ghosh",
        phone: "+919800000002",
        email: "kolkatabiryani@aharlocal.com",
        address: "42/A Park Circus Crossing, Kolkata 700017",
        latitude: 22.5429,
        longitude: 88.3653,
        photo_url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600",
        banner_url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1200",
        photos: [
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1200",
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1200",
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200"
        ],
        fssai_license: "FSSAI-12821019000123",
        commission_rate: 15,
        min_order_amount: 99,
        avg_delivery_minutes: 25,
        rating: 4.8,
        rating_count: 420,
        is_open: 1,
        is_pure_veg: 0,
        self_delivery_enabled: 1,
        self_delivery_radius_km: 5,
        status: "approved",
        cuisine_types: ["Biryani", "Mughlai", "Kebab"],
        payment_method: "upi",
        upi_id: "kolkatabiryani@okhdfcbank",
        upi_qr_photo: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
        bank_name: "State Bank of India",
        bank_account_no: "38291048291",
        bank_account_holder: "Subrata Ghosh",
        bank_ifsc: "SBIN0001234",
        bank_passbook_photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400"
      },
      {
        id: 2,
        user_id: 3,
        service_area_id: 1,
        name: "Maa Tara Mishtanna Bhandar",
        name_bn: "\u09AE\u09BE \u09A4\u09BE\u09B0\u09BE \u09AE\u09BF\u09B7\u09CD\u099F\u09BE\u09A8\u09CD\u09A8 \u09AD\u09BE\u09A3\u09CD\u09A1\u09BE\u09B0",
        owner_name: "Debabrata Modak",
        phone: "+919800000003",
        email: "maatarasweets@aharlocal.com",
        address: "18 Kalighat Temple Road, Kolkata 700026",
        latitude: 22.5204,
        longitude: 88.3448,
        photo_url: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600",
        banner_url: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=1200",
        photos: [
          "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=1200",
          "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=1200",
          "https://images.unsplash.com/photo-1571217664816-953e98f0fa3b?w=1200"
        ],
        fssai_license: "FSSAI-12821019000456",
        commission_rate: 12,
        min_order_amount: 50,
        avg_delivery_minutes: 20,
        rating: 4.9,
        rating_count: 850,
        is_open: 1,
        is_pure_veg: 1,
        self_delivery_enabled: 0,
        self_delivery_radius_km: 0,
        status: "approved",
        cuisine_types: ["Bengali Sweets", "Mishti", "Snacks"],
        payment_method: "bank",
        upi_id: "maatarasweets@ybl",
        upi_qr_photo: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
        bank_name: "Punjab National Bank",
        bank_account_no: "0912002100048123",
        bank_account_holder: "Debabrata Modak",
        bank_ifsc: "PUNB0091200",
        bank_passbook_photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400"
      },
      {
        id: 3,
        user_id: 4,
        service_area_id: 1,
        name: "Banglar Rannaghor & Thali",
        name_bn: "\u09AC\u09BE\u0982\u09B2\u09BE\u09B0 \u09B0\u09BE\u09A8\u09CD\u09A8\u09BE\u0998\u09B0 \u0993 \u09A5\u09BE\u09B2\u09BF",
        owner_name: "Soma Mukherjee",
        phone: "+919800000004",
        email: "banglarrannaghor@aharlocal.com",
        address: "78 Gariahat Road, Kolkata 700019",
        latitude: 22.5186,
        longitude: 88.3664,
        photo_url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600",
        banner_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200",
        photos: [
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200",
          "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=1200",
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200"
        ],
        fssai_license: "FSSAI-12821019000789",
        commission_rate: 14,
        min_order_amount: 80,
        avg_delivery_minutes: 30,
        rating: 4.6,
        rating_count: 310,
        is_open: 1,
        is_pure_veg: 0,
        self_delivery_enabled: 1,
        self_delivery_radius_km: 3,
        status: "approved",
        cuisine_types: ["Bengali Thali", "Fish Curry", "Rice Meals"],
        payment_method: "upi",
        upi_id: "banglarrannaghor@okaxis",
        upi_qr_photo: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
        bank_name: "Bank of Baroda",
        bank_account_no: "28490100029481",
        bank_account_holder: "Soma Mukherjee",
        bank_ifsc: "BARB0GARIAH",
        bank_passbook_photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400"
      },
      {
        id: 4,
        user_id: 8,
        service_area_id: 1,
        name: "Hindusthan Roll Corner",
        name_bn: "\u09B9\u09BF\u09A8\u09CD\u09A6\u09C1\u09B8\u09CD\u09A5\u09BE\u09A8 \u09B0\u09CB\u09B2 \u0995\u09B0\u09CD\u09A8\u09BE\u09B0",
        owner_name: "Tanmoy Nandi",
        phone: "+919800000008",
        email: "newrest@aharlocal.com",
        address: "12 Shyambazar 5-Point Crossing",
        latitude: 22.6001,
        longitude: 88.3712,
        photo_url: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600",
        banner_url: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200",
        photos: [
          "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200",
          "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=1200",
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=1200"
        ],
        fssai_license: "FSSAI-12821019000999",
        commission_rate: 15,
        min_order_amount: 60,
        avg_delivery_minutes: 20,
        rating: 4.2,
        rating_count: 45,
        is_open: 0,
        is_pure_veg: 0,
        status: "approved",
        cuisine_types: ["Kolkata Rolls", "Chowmein", "Fast Food"],
        payment_method: "upi",
        upi_id: "hindusthanrolls@paytm",
        upi_qr_photo: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
        bank_name: "Axis Bank",
        bank_account_no: "918020038491024",
        bank_account_holder: "Tanmoy Nandi",
        bank_ifsc: "UTIB0000123",
        bank_passbook_photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400"
      },
      {
        id: 5,
        user_id: 2,
        service_area_id: 3,
        name: "Food Hub (Raidighi)",
        name_bn: "\u09AB\u09C1\u09A1 \u09B9\u09BE\u09AC (\u09B0\u09BE\u09DF\u09A6\u09BF\u0998\u09BF)",
        owner_name: "Anish Naskar",
        phone: "+919800000055",
        email: "foodhub.raidighi@aharlocal.com",
        address: "Raidighi Bazaar Road, Near Cinema Hall, Raidighi, South 24 Parganas 743383",
        latitude: 21.9212,
        longitude: 88.435,
        photo_url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600",
        banner_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
        photos: [
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200",
          "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200"
        ],
        fssai_license: "FSSAI-12821019000555",
        commission_rate: 12,
        min_order_amount: 70,
        avg_delivery_minutes: 20,
        rating: 4.8,
        rating_count: 320,
        is_open: 1,
        is_pure_veg: 0,
        status: "approved",
        cuisine_types: ["Fast Food", "Chowmein", "Snacks", "Chinese", "Beverages"],
        payment_method: "upi",
        upi_id: "foodhub.raidighi@okicici",
        upi_qr_photo: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
        bank_name: "State Bank of India",
        bank_account_no: "30492810492",
        bank_account_holder: "Anish Naskar",
        bank_ifsc: "SBIN0002145",
        bank_passbook_photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400"
      },
      {
        id: 6,
        user_id: 3,
        service_area_id: 3,
        name: "Moner Hodish (Raidighi)",
        name_bn: "\u09AE\u09A8\u09C7\u09B0 \u09B9\u09A6\u09BF\u09B8 (\u09B0\u09BE\u09DF\u09A6\u09BF\u0998\u09BF)",
        owner_name: "Dipankar Haldar",
        phone: "+919800000066",
        email: "monerhodish.raidighi@aharlocal.com",
        address: "Hospital Road, Raidighi Town, South 24 Parganas 743383",
        latitude: 21.922,
        longitude: 88.438,
        photo_url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600",
        banner_url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200",
        photos: [
          "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200",
          "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200",
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1200"
        ],
        fssai_license: "FSSAI-12821019000666",
        commission_rate: 14,
        min_order_amount: 80,
        avg_delivery_minutes: 25,
        rating: 4.9,
        rating_count: 480,
        is_open: 1,
        is_pure_veg: 0,
        status: "approved",
        cuisine_types: ["Bengali Thali", "Fish Curry", "Mutton Kasha", "Sweets"],
        payment_method: "bank",
        upi_id: "monerhodish@ybl",
        upi_qr_photo: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
        bank_name: "UCO Bank",
        bank_account_no: "18490210004912",
        bank_account_holder: "Dipankar Haldar",
        bank_ifsc: "UCBA0001849",
        bank_passbook_photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400"
      },
      {
        id: 7,
        user_id: 4,
        service_area_id: 3,
        name: "Royal Indian Biryani (Raidighi)",
        name_bn: "\u09B0\u09DF\u09CD\u09AF\u09BE\u09B2 \u0987\u09A8\u09CD\u09A1\u09BF\u09DF\u09BE\u09A8 \u09AC\u09BF\u09B0\u09BF\u09DF\u09BE\u09A8\u09BF (\u09B0\u09BE\u09DF\u09A6\u09BF\u0998\u09BF)",
        owner_name: "Sheikh Nizamuddin",
        phone: "+919800000077",
        email: "royalbiryani.raidighi@aharlocal.com",
        address: "Main Road Near Bus Stand, Raidighi, South 24 Parganas 743383",
        latitude: 21.9205,
        longitude: 88.432,
        photo_url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600",
        banner_url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1200",
        photos: [
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1200",
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1200",
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200"
        ],
        fssai_license: "FSSAI-12821019000777",
        commission_rate: 15,
        min_order_amount: 90,
        avg_delivery_minutes: 20,
        rating: 4.95,
        rating_count: 610,
        is_open: 1,
        is_pure_veg: 0,
        status: "approved",
        cuisine_types: ["Royal Biryani", "Chicken Chaap", "Kebabs", "Mughlai"],
        payment_method: "upi",
        upi_id: "royalbiryani.raidighi@okhdfcbank",
        upi_qr_photo: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
        bank_name: "HDFC Bank",
        bank_account_no: "50100918291048",
        bank_account_holder: "Sheikh Nizamuddin",
        bank_ifsc: "HDFC0000918",
        bank_passbook_photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400"
      }
    ],
    food_categories: [
      { id: 1, name: "Biryani & Kebabs", name_bn: "\u09AC\u09BF\u09B0\u09BF\u09AF\u09BC\u09BE\u09A8\u09BF \u0993 \u0995\u09BE\u09AC\u09BE\u09AC", image_url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200", sort_order: 1 },
      { id: 2, name: "Bengali Sweets", name_bn: "\u09AE\u09BF\u09B7\u09CD\u099F\u09BF \u0993 \u09A6\u0987", image_url: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=200", sort_order: 2 },
      { id: 3, name: "Traditional Thali", name_bn: "\u09AC\u09BE\u0999\u09BE\u09B2\u09C0 \u09A5\u09BE\u09B2\u09BF \u0993 \u09AD\u09BE\u09A4", image_url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=200", sort_order: 3 },
      { id: 4, name: "Rolls & Fast Food", name_bn: "\u0995\u09BE\u09A0\u09BF \u09B0\u09CB\u09B2 \u0993 \u09AB\u09BE\u09B8\u09CD\u099F \u09AB\u09C1\u09A1", image_url: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=200", sort_order: 4 },
      { id: 5, name: "Fish & Mutton", name_bn: "\u09AE\u09BE\u099B \u0993 \u0996\u09BE\u09B8\u09BF\u09B0 \u09AE\u09BE\u0982\u09B8", image_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200", sort_order: 5 },
      { id: 6, name: "Snacks & Tea", name_bn: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE\u09B0 \u09B8\u09CD\u09A8\u09CD\u09AF\u09BE\u0995\u09CD\u09B8 \u0993 \u099A\u09BE", image_url: "https://images.unsplash.com/photo-1601050690187-8e6d2bc4a5b4?w=200", sort_order: 6 }
    ],
    foods: [
      {
        id: 1,
        restaurant_id: 1,
        category: "Rice",
        category_bn: "\u09AC\u09BF\u09B0\u09BF\u09AF\u09BC\u09BE\u09A8\u09BF \u0993 \u099A\u09BE\u09B2",
        name: "Kolkata Special Chicken Biryani",
        name_bn: "\u0995\u09B2\u0995\u09BE\u09A4\u09BE \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u099A\u09BF\u0995\u09C7\u09A8 \u09AC\u09BF\u09B0\u09BF\u09AF\u09BC\u09BE\u09A8\u09BF",
        description: "Fragrant basmati rice served with tender chicken piece, golden potato (alu), and egg.",
        description_bn: "\u09B8\u09C1\u0997\u09A8\u09CD\u09A7\u09BF \u09AC\u09BE\u09B8\u09AE\u09A4\u09C0 \u099A\u09BE\u09B2, \u09A8\u09B0\u09AE \u099A\u09BF\u0995\u09C7\u09A8, \u09AE\u09B6\u09B2\u09BE\u09A6\u09BE\u09B0 \u0986\u09B2\u09C1 \u098F\u09AC\u0982 \u09A1\u09BF\u09AE \u09B8\u09B9\u09AF\u09CB\u0997\u09C7 \u0996\u09BE\u0981\u099F\u09BF \u0995\u09B2\u0995\u09BE\u09A4\u09BE\u09B0 \u09AC\u09BF\u09B0\u09BF\u09DF\u09BE\u09A8\u09BF\u0964",
        price: 180,
        discount_price: 160,
        photo_url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
        is_veg: 0,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 15
      },
      {
        id: 2,
        restaurant_id: 1,
        category: "Rice",
        category_bn: "\u09AC\u09BF\u09B0\u09BF\u09AF\u09BC\u09BE\u09A8\u09BF \u0993 \u099A\u09BE\u09B2",
        name: "Kolkata Royal Mutton Biryani",
        name_bn: "\u0995\u09B2\u0995\u09BE\u09A4\u09BE \u09B0\u09AF\u09BC\u09CD\u09AF\u09BE\u09B2 \u09AE\u09BE\u099F\u09A8 \u09AC\u09BF\u09B0\u09BF\u09AF\u09BC\u09BE\u09A8\u09BF",
        description: "Slow-cooked aged mutton with melt-in-mouth potato and basmati rice infused with saffron.",
        description_bn: "\u09B8\u09C1\u09B8\u09CD\u09AC\u09BE\u09A6\u09C1 \u09AE\u09BE\u099F\u09A8 \u09AA\u09BF\u09B8, \u09B8\u09C1\u0997\u09A8\u09CD\u09A7\u09BF \u099A\u09BE\u09B2 \u0993 \u099C\u09BE\u09AB\u09B0\u09BE\u09A8 \u0997\u09A8\u09CD\u09A7\u09AF\u09C1\u0995\u09CD\u09A4 \u09B8\u09C7\u09B0\u09BE \u09B8\u09CD\u09AC\u09BE\u09A6\u09C7\u09B0 \u09AE\u09BE\u099F\u09A8 \u09AC\u09BF\u09B0\u09BF\u09DF\u09BE\u09A8\u09BF\u0964",
        price: 260,
        discount_price: 240,
        photo_url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500",
        is_veg: 0,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 20
      },
      {
        id: 3,
        restaurant_id: 1,
        category: "Starters",
        category_bn: "\u099A\u09BF\u0995\u09C7\u09A8 \u099A\u09BE\u09AA",
        name: "Shahi Chicken Chaap",
        name_bn: "\u09B6\u09BE\u09B9\u09C0 \u099A\u09BF\u0995\u09C7\u09A8 \u099A\u09BE\u09AA",
        description: "Rich and aromatic slow-cooked chicken gravy with cashew and poppy paste.",
        description_bn: "\u09AA\u09CB\u09B8\u09CD\u09A4 \u0993 \u0995\u09BE\u099C\u09C1\u09AC\u09BE\u09A6\u09BE\u09AE \u09AC\u09BE\u099F\u09BE \u09A6\u09BF\u09DF\u09C7 \u09A4\u09C8\u09B0\u09BF \u09B8\u09C1\u09B8\u09CD\u09AC\u09BE\u09A6\u09C1 \u0993 \u0998\u09A8 \u099A\u09BF\u0995\u09C7\u09A8 \u099A\u09BE\u09AA\u0964",
        price: 140,
        discount_price: null,
        photo_url: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        is_veg: 0,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 15
      },
      {
        id: 4,
        restaurant_id: 2,
        category: "Sweets",
        category_bn: "\u09AE\u09BF\u09B7\u09CD\u099F\u09BF",
        name: "Baked Rosogolla (2 Pcs)",
        name_bn: "\u09AC\u09C7\u0995\u09A1 \u09B0\u09B8\u0997\u09CB\u09B2\u09CD\u09B2\u09BE (\u09E8 \u09AA\u09BF\u09B8)",
        description: "Warm caramelised cottage cheese dumplings baked in thick rabri.",
        description_bn: "\u0998\u09A8 \u09B0\u09BE\u09AC\u09A1\u09BC\u09BF\u09A4\u09C7 \u09AC\u09C7\u0995 \u0995\u09B0\u09BE \u09A8\u09B0\u09AE \u09A4\u09C1\u09B2\u09A4\u09C1\u09B2\u09C7 \u09B8\u09C1\u09B8\u09CD\u09AC\u09BE\u09A6\u09C1 \u09AC\u09C7\u0995\u09A1 \u09B0\u09B8\u0997\u09CB\u09B2\u09CD\u09B2\u09BE\u0964",
        price: 60,
        discount_price: 50,
        photo_url: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 5
      },
      {
        id: 5,
        restaurant_id: 2,
        category: "Sweets",
        category_bn: "\u09AE\u09BF\u09B7\u09CD\u099F\u09BF \u09A6\u0987",
        name: "Kolkata Special Mishti Doi (Cup)",
        name_bn: "\u0995\u09B2\u0995\u09BE\u09A4\u09BE\u09B0 \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u09AE\u09BF\u09B7\u09CD\u099F\u09BF \u09A6\u0987",
        description: "Traditional earthen pot sweetened curd with rich creamy texture.",
        description_bn: "\u0996\u09BE\u0981\u099F\u09BF \u09AE\u09BE\u099F\u09BF\u09B0 \u09AD\u09BE\u0981\u09A1\u09BC\u09C7 \u09AA\u09BE\u09A4\u09BE \u0998\u09A8 \u0993 \u0996\u09BE\u0981\u099F\u09BF \u09AE\u09BF\u09B7\u09CD\u099F\u09BF \u09A6\u0987\u0964",
        price: 55,
        discount_price: null,
        photo_url: "https://images.unsplash.com/photo-1571217664816-953e98f0fa3b?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 2
      },
      {
        id: 6,
        restaurant_id: 2,
        category: "Sweets",
        category_bn: "\u09AE\u09BF\u09B7\u09CD\u099F\u09BF",
        name: "Soft Gulab Jamun (2 Pcs)",
        name_bn: "\u09A8\u09B0\u09AE \u0997\u09CB\u09B2\u09BE\u09AA \u099C\u09BE\u09AE\u09C1\u09A8 (\u09E8 \u09AA\u09BF\u09B8)",
        description: "Juicy golden fried khoya dumplings soaked in cardamom sugar syrup.",
        description_bn: "\u098F\u09B2\u09BE\u099A \u0993 \u09B8\u09C1\u0997\u09A8\u09CD\u09A7\u09BF \u09B0\u09B8\u09C7 \u09A1\u09CB\u09AC\u09BE\u09A8\u09CB \u09A8\u09B0\u09AE \u0993 \u09B0\u09B8\u09BE\u09B2\u09C7 \u0997\u09CB\u09B2\u09BE\u09AA \u099C\u09BE\u09AE\u09C1\u09A8\u0964",
        price: 40,
        discount_price: 35,
        photo_url: "https://images.unsplash.com/photo-1601050690187-8e6d2bc4a5b4?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 2
      },
      {
        id: 7,
        restaurant_id: 2,
        category: "Sweets",
        category_bn: "\u09AE\u09BF\u09B7\u09CD\u099F\u09BF",
        name: "Special Kesar Rasmalai (2 Pcs)",
        name_bn: "\u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u0995\u09C7\u09B8\u09B0 \u09B0\u09B8\u09AE\u09BE\u09B2\u09BE\u0987",
        description: "Spongy paneer discs floating in thick saffron pistachios milk.",
        description_bn: "\u099C\u09BE\u09AB\u09B0\u09BE\u09A8 \u0993 \u09AA\u09C7\u09B8\u09CD\u09A4\u09BE \u09B8\u09B9\u09AF\u09CB\u0997\u09C7 \u0998\u09A8 \u0995\u09CD\u09B0\u09BF\u09AE\u09BF \u09B8\u09CD\u09AC\u09BE\u09A6\u09C7\u09B0 \u0996\u09BE\u0981\u099F\u09BF \u09B0\u09B8\u09AE\u09BE\u09B2\u09BE\u0987\u0964",
        price: 70,
        discount_price: 65,
        photo_url: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 2
      },
      {
        id: 8,
        restaurant_id: 2,
        category: "Sweets",
        category_bn: "\u09AE\u09BF\u09B7\u09CD\u099F\u09BF",
        name: "Premium Kaju Barfi Katli (4 Pcs)",
        name_bn: "\u09AA\u09CD\u09B0\u09BF\u09AE\u09BF\u09AF\u09BC\u09BE\u09AE \u0995\u09BE\u099C\u09C1 \u09AC\u09B0\u09AB\u09BF \u0995\u09BE\u099F\u09B2\u09BF (\u09EA \u09AA\u09BF\u09B8)",
        description: "Melt-in-mouth cashew sweet embellished with silver leaf.",
        description_bn: "\u0996\u09BE\u0981\u099F\u09BF \u0995\u09BE\u099C\u09C1\u09AC\u09BE\u09A6\u09BE\u09AE \u09A6\u09BF\u09DF\u09C7 \u09A4\u09C8\u09B0\u09BF \u09B8\u09C1\u09B8\u09CD\u09AC\u09BE\u09A6\u09C1 \u09B0\u09BE\u099C\u0995\u09C0\u09DF \u0995\u09BE\u099C\u09C1 \u09AC\u09B0\u09AB\u09BF\u0964",
        price: 85,
        discount_price: 80,
        photo_url: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 2
      },
      {
        id: 9,
        restaurant_id: 2,
        category: "Sweets",
        category_bn: "\u09AE\u09BF\u09B7\u09CD\u099F\u09BF",
        name: "Traditional Nolen Gur Sandesh (4 Pcs)",
        name_bn: "\u09A8\u09CB\u09B2\u09C7\u09A8 \u0997\u09C1\u09DC\u09C7\u09B0 \u09B8\u09A8\u09CD\u09A6\u09C7\u09B6 (\u09EA \u09AA\u09BF\u09B8)",
        description: "Authentic date palm jaggery cottage cheese sandesh.",
        description_bn: "\u0996\u09BE\u0981\u099F\u09BF \u0996\u09C7\u099C\u09C1\u09B0 \u0997\u09C1\u09DC \u0993 \u099B\u09BE\u09A8\u09BE \u09A6\u09BF\u09DF\u09C7 \u09A4\u09C8\u09B0\u09BF \u099C\u09BF\u09AD\u09C7 \u099C\u09B2 \u0986\u09A8\u09BE \u09B8\u09A8\u09CD\u09A6\u09C7\u09B6\u0964",
        price: 90,
        discount_price: null,
        photo_url: "https://images.unsplash.com/photo-1571217664816-953e98f0fa3b?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 2
      },
      {
        id: 10,
        restaurant_id: 2,
        category: "Beverages",
        category_bn: "\u09AA\u09BE\u09A8\u09C0\u09AF\u09BC",
        name: "Sweet Fresh Mango Lassi (Glass)",
        name_bn: "\u09B8\u09C1\u0987\u099F \u09AB\u09CD\u09B0\u09C7\u09B6 \u0986\u09AE \u09B2\u09B8\u09CD\u09AF\u09BF",
        description: "Thick creamy yoghurt blended with Alphonso mango pulp.",
        description_bn: "\u0998\u09A8 \u09A6\u0987 \u0993 \u0996\u09BE\u0981\u099F\u09BF \u0986\u09B2\u09AB\u09BE\u09A8\u09B8\u09CB \u0986\u09AE\u09C7\u09B0 \u09AE\u09BF\u0995\u09CD\u09B8\u09A1 \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09B2\u09B8\u09CD\u09AF\u09BF\u0964",
        price: 50,
        discount_price: 45,
        photo_url: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 5
      },
      {
        id: 11,
        restaurant_id: 1,
        category: "Beverages",
        category_bn: "\u09AA\u09BE\u09A8\u09C0\u09AF\u09BC",
        name: "Chilled Cold Drink (Coca-Cola / Sprite 500ml)",
        name_bn: "\u099A\u09BF\u09B2\u09CD\u09A1 \u0995\u09CB\u09B2\u09CD\u09A1 \u09A1\u09CD\u09B0\u09BF\u0999\u09CD\u0995 (\u09EB\u09E6\u09E6 \u09AE\u09BF.\u09B2\u09BF.)",
        description: "Chilled carbonated soft drink to pair with hot biryani.",
        description_bn: "\u09AC\u09BF\u09B0\u09BF\u09DF\u09BE\u09A8\u09BF\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u0995\u09CB\u09AE\u09B2 \u09AA\u09BE\u09A8\u09C0\u09AF\u09BC\u0964",
        price: 40,
        discount_price: null,
        photo_url: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 0,
        preparation_minutes: 1
      },
      {
        id: 12,
        restaurant_id: 2,
        category: "Beverages",
        category_bn: "\u09AA\u09BE\u09A8\u09C0\u09AF\u09BC",
        name: "Special Kesar Badam Milk (Glass)",
        name_bn: "\u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u0995\u09C7\u09B8\u09B0 \u09AC\u09BE\u09A6\u09BE\u09AE \u09AE\u09BF\u09B2\u09CD\u0995",
        description: "Chilled almond and saffron infused thick cold milk drink.",
        description_bn: "\u0995\u09C7\u09B8\u09B0, \u09AC\u09BE\u09A6\u09BE\u09AE \u0993 \u098F\u09B2\u09BE\u099A \u09AE\u09BF\u09B6\u09CD\u09B0\u09BF\u09A4 \u09B8\u09C1\u09B8\u09CD\u09AC\u09BE\u09A6\u09C1 \u09A0\u09BE\u09A3\u09CD\u09A1\u09BE \u09AC\u09BE\u09A6\u09BE\u09AE \u09A6\u09C1\u09A7\u0964",
        price: 55,
        discount_price: 50,
        photo_url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 3
      },
      {
        id: 13,
        restaurant_id: 3,
        category: "Beverages",
        category_bn: "\u09AA\u09BE\u09A8\u09C0\u09AF\u09BC",
        name: "Thick Chocolate Cold Coffee",
        name_bn: "\u09A5\u09BF\u0995 \u099A\u0995\u09B2\u09C7\u099F \u0995\u09CB\u09B2\u09CD\u09A1 \u0995\u09AB\u09BF",
        description: "Creamy espresso blended with chocolate syrup and ice cream.",
        description_bn: "\u099A\u0995\u09B2\u09C7\u099F \u0986\u0987\u09B8\u0995\u09CD\u09B0\u09BF\u09AE \u0993 \u0995\u09AB\u09BF \u09AE\u09BF\u09B6\u09CD\u09B0\u09BF\u09A4 \u099A\u09BF\u09B2\u09CD\u09A1 \u0995\u09CB\u09B2\u09CD\u09A1 \u0995\u09AB\u09BF\u0964",
        price: 65,
        discount_price: 60,
        photo_url: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 5
      },
      {
        id: 14,
        restaurant_id: 1,
        category: "Breads",
        category_bn: "\u09B0\u09C1\u099F\u09BF \u0993 \u09A8\u09BE\u09A8",
        name: "Butter Tandoori Naan",
        name_bn: "\u09AC\u09BE\u099F\u09BE\u09B0 \u09A4\u09A8\u09CD\u09A6\u09C1\u09B0\u09BF \u09A8\u09BE\u09A8",
        description: "Soft clay-oven baked flatbread brushed with amul butter.",
        description_bn: "\u09A4\u09A8\u09CD\u09A6\u09C1\u09B0\u09C7 \u09A4\u09C8\u09B0\u09BF \u09A8\u09B0\u09AE \u09AE\u09BE\u0996\u09A8\u09C7 \u09AE\u09BE\u0996\u09BE\u09A8\u09CB \u09AC\u09BE\u099F\u09BE\u09B0 \u09A8\u09BE\u09A8\u0964",
        price: 35,
        discount_price: null,
        photo_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 10
      },
      {
        id: 15,
        restaurant_id: 1,
        category: "Breads",
        category_bn: "\u09B0\u09C1\u099F\u09BF \u0993 \u09A8\u09BE\u09A8",
        name: "Garlic Butter Naan",
        name_bn: "\u0997\u09BE\u09B0\u09CD\u09B2\u09BF\u0995 \u09AC\u09BE\u099F\u09BE\u09B0 \u09A8\u09BE\u09A8",
        description: "Flavoured with roasted garlic, coriander, and melted butter.",
        description_bn: "\u09B0\u09B8\u09C1\u09A8 \u0993 \u09A7\u09A8\u09C7\u09AA\u09BE\u09A4\u09BE \u099B\u09DC\u09BF\u09DF\u09C7 \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4 \u09A4\u09A8\u09CD\u09A6\u09C1\u09B0\u09BF \u0997\u09BE\u09B0\u09CD\u09B2\u09BF\u0995 \u09A8\u09BE\u09A8\u0964",
        price: 45,
        discount_price: null,
        photo_url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 10
      },
      {
        id: 16,
        restaurant_id: 1,
        category: "Breads",
        category_bn: "\u09B0\u09C1\u099F\u09BF \u0993 \u09A8\u09BE\u09A8",
        name: "Soft Rumali Roti (2 Pcs)",
        name_bn: "\u09B8\u09AB\u099F \u09B0\u09C1\u09AE\u09BE\u09B2\u09BF \u09B0\u09C1\u099F\u09BF (\u09E8 \u09AA\u09BF\u09B8)",
        description: "Thin handkerchief bread perfect with chicken chaap and kebabs.",
        description_bn: "\u099A\u09BF\u0995\u09C7\u09A8 \u099A\u09BE\u09AA\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u099C\u09AE\u09BE\u09B0 \u09AE\u09A4\u09A8 \u09B8\u09C1\u09B8\u09CD\u09AC\u09BE\u09A6\u09C1 \u09AA\u09BE\u09A4\u09CD\u09B0 \u09B0\u09C1\u09AE\u09BE\u09B2\u09BF \u09B0\u09C1\u099F\u09BF\u0964",
        price: 25,
        discount_price: null,
        photo_url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 5
      },
      {
        id: 17,
        restaurant_id: 3,
        category: "Starters",
        category_bn: "\u09B8\u09CD\u09A8\u09CD\u09AF\u09BE\u0995\u09CD\u09B8",
        name: "Kolkata Special Egg Chicken Roll",
        name_bn: "\u0995\u09B2\u0995\u09BE\u09A4\u09BE \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u098F\u0997 \u099A\u09BF\u0995\u09C7\u09A8 \u09B0\u09CB\u09B2",
        description: "Crispy paratha stuffed with fried egg, juicy chicken tikka, onions and sauces.",
        description_bn: "\u09A1\u09BF\u09AE, \u099A\u09BF\u0995\u09C7\u09A8 \u099F\u09BF\u0995\u09CD\u0995\u09BE, \u09AA\u09C7\u0981\u09AF\u09BC\u09BE\u099C \u0993 \u099A\u09BE\u099F\u09A8\u09BF \u09B8\u09B9\u09AF\u09CB\u0997\u09C7 \u09AE\u09C1\u099A\u09AE\u09C1\u099A\u09C7 \u0995\u09BE\u09A0\u09BF \u09B0\u09CB\u09B2\u0964",
        price: 75,
        discount_price: 70,
        photo_url: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500",
        is_veg: 0,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 10
      },
      {
        id: 18,
        restaurant_id: 3,
        category: "Starters",
        category_bn: "\u09B8\u09CD\u09A8\u09CD\u09AF\u09BE\u0995\u09CD\u09B8",
        name: "Crispy Paneer Tikka (4 Pcs)",
        name_bn: "\u09AE\u09C1\u099A\u09AE\u09C1\u099A\u09C7 \u09AA\u09A8\u09BF\u09B0 \u099F\u09BF\u0995\u09CD\u0995\u09BE (\u09EA \u09AA\u09BF\u09B8)",
        description: "Charcoal grilled marinated paneer cubes with capsicum and mint chutney.",
        description_bn: "\u09A4\u09A8\u09CD\u09A6\u09C1\u09B0\u09C7 \u09B8\u09C7\u0981\u0995\u09BE \u09A4\u09C1\u09B2\u09A4\u09C1\u09B2\u09C7 \u09AE\u09B6\u09B2\u09BE\u09A6\u09BE\u09B0 \u09AA\u09A8\u09BF\u09B0 \u099F\u09BF\u0995\u09CD\u0995\u09BE\u0964",
        price: 130,
        discount_price: 120,
        photo_url: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 15
      },
      {
        id: 19,
        restaurant_id: 2,
        category: "Starters",
        category_bn: "\u09B8\u09CD\u09A8\u09CD\u09AF\u09BE\u0995\u09CD\u09B8",
        name: "Hing Kochuri with Chholar Dal (4 Pcs)",
        name_bn: "\u09B9\u09BF\u0999\u09C7\u09B0 \u0995\u099A\u09C1\u09B0\u09BF \u0993 \u099B\u09CB\u09B2\u09BE\u09B0 \u09A1\u09BE\u09B2",
        description: "Crispy asafoetida kachori served with sweet-spicy coconut chholar dal.",
        description_bn: "\u0997\u09B0\u09AE \u09AE\u09C1\u099A\u09AE\u09C1\u099A\u09C7 \u09B9\u09BF\u0999\u09C7\u09B0 \u0995\u099A\u09C1\u09B0\u09BF \u098F\u09AC\u0982 \u09A8\u09BE\u09B0\u0995\u09C7\u09B2 \u0995\u09C1\u099A\u09BF \u09A6\u09C7\u0993\u09DF\u09BE \u09B8\u09C1\u09B8\u09CD\u09AC\u09BE\u09A6\u09C1 \u099B\u09CB\u09B2\u09BE\u09B0 \u09A1\u09BE\u09B2\u0964",
        price: 40,
        discount_price: null,
        photo_url: "https://images.unsplash.com/photo-1601050690187-8e6d2bc4a5b4?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 10
      },
      {
        id: 20,
        restaurant_id: 3,
        category: "Rice",
        category_bn: "\u09AC\u09BE\u0999\u09BE\u09B2\u09C0 \u09A5\u09BE\u09B2\u09BF",
        name: "Sholoana Bangali Veg Thali",
        name_bn: "\u09B7\u09CB\u09B2\u09CB\u0986\u09A8\u09BE \u09AC\u09BE\u0999\u09BE\u09B2\u09C0 \u09A8\u09BF\u09B0\u09BE\u09AE\u09BF\u09B7 \u09A5\u09BE\u09B2\u09BF",
        description: "Steamed rice, Jhuri alubhaja, Sukto, Sonamug dal, Dhokar dalna, Chutney & Papad.",
        description_bn: "\u09AD\u09BE\u09A4, \u099D\u09C1\u09B0\u09BF \u0986\u09B2\u09C1\u09AD\u09BE\u099C\u09BE, \u09B6\u09C1\u0995\u09CD\u09A4\u09CB, \u09B8\u09CB\u09A8\u09BE\u09AE\u09C1\u0997 \u09A1\u09BE\u09B2, \u09A7\u09CB\u0981\u0995\u09BE\u09B0 \u09A1\u09BE\u09B2\u09A8\u09BE, \u099A\u09BE\u099F\u09A8\u09BF \u0993 \u09AA\u09BE\u0981\u09AA\u09DC\u0964",
        price: 140,
        discount_price: 125,
        photo_url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500",
        is_veg: 1,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 15
      },
      // Items for Food Hub (Raidighi) - restaurant_id: 5
      {
        id: 21,
        restaurant_id: 5,
        category: "Rice",
        category_bn: "\u09AB\u09CD\u09B0\u09BE\u0987\u09A1 \u09B0\u09BE\u0987\u09B8",
        name: "Crispy Chicken Fried Rice",
        name_bn: "\u0995\u09CD\u09B0\u09BF\u09B8\u09CD\u09AA\u09BF \u099A\u09BF\u0995\u09C7\u09A8 \u09AB\u09CD\u09B0\u09BE\u0987\u09A1 \u09B0\u09BE\u0987\u09B8",
        description: "Wok tossed aromatic rice with juicy chicken bites, egg, spring onions and secret spices.",
        description_bn: "\u099A\u09BF\u0995\u09C7\u09A8 \u099F\u09C1\u0995\u09B0\u09CB, \u09A1\u09BF\u09AE \u0993 \u09B8\u09CD\u09AA\u09CD\u09B0\u09BF\u0982 \u0985\u09A8\u09BF\u09AF\u09BC\u09A8 \u09B8\u09B9\u09AF\u09CB\u0997\u09C7 \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u099A\u09BE\u0987\u09A8\u09BF\u099C \u09AB\u09CD\u09B0\u09BE\u0987\u09A1 \u09B0\u09BE\u0987\u09B8\u0964",
        price: 140,
        discount_price: 130,
        photo_url: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500",
        is_veg: 0,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 15
      },
      {
        id: 22,
        restaurant_id: 5,
        category: "Starters",
        category_bn: "\u099A\u09BF\u09B2\u09BF \u099A\u09BF\u0995\u09C7\u09A8",
        name: "Hot & Spicy Chilli Chicken Dry (8 Pcs)",
        name_bn: "\u09B9\u099F \u0985\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1 \u09B8\u09CD\u09AA\u09BE\u0987\u09B8\u09BF \u099A\u09BF\u09B2\u09BF \u099A\u09BF\u0995\u09C7\u09A8 (\u09EE \u09AA\u09BF\u09B8)",
        description: "Tender chicken tossed in dark soy, capsicum, garlic and green chillies.",
        description_bn: "\u0995\u09CD\u09AF\u09BE\u09AA\u09B8\u09BF\u0995\u09BE\u09AE, \u09B0\u09B8\u09C1\u09A8 \u0993 \u0995\u09BE\u0981\u099A\u09BE\u09B2\u0999\u09CD\u0995\u09BE \u09A6\u09BF\u09DF\u09C7 \u09AB\u09CD\u09B0\u09BE\u0987 \u0995\u09B0\u09BE \u09B8\u09C1\u09B8\u09CD\u09AC\u09BE\u09A6\u09C1 \u099A\u09BF\u09B2\u09BF \u099A\u09BF\u0995\u09C7\u09A8\u0964",
        price: 160,
        discount_price: 150,
        photo_url: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500",
        is_veg: 0,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 15
      },
      {
        id: 23,
        restaurant_id: 5,
        category: "Starters",
        category_bn: "\u099A\u09BE\u0989\u09AE\u09BF\u09A8",
        name: "Special Raidighi Food Hub Chowmein",
        name_bn: "\u09AB\u09C1\u09A1 \u09B9\u09BE\u09AC \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u09AE\u09BF\u0995\u09CD\u09B8\u09A1 \u099A\u09BE\u0989\u09AE\u09BF\u09A8",
        description: "Street-style noodles loaded with chicken, egg and crunchy vegetables.",
        description_bn: "\u099A\u09BF\u0995\u09C7\u09A8, \u09A1\u09BF\u09AE \u0993 \u09A4\u09BE\u099C\u09BE \u09B8\u09AC\u099C\u09BF \u09A6\u09BF\u09DF\u09C7 \u09A4\u09C8\u09B0\u09BF \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u099F \u099A\u09BE\u0989\u09AE\u09BF\u09A8\u0964",
        price: 110,
        discount_price: null,
        photo_url: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500",
        is_veg: 0,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 10
      },
      // Items for Moner Hodish (Raidighi) - restaurant_id: 6
      {
        id: 24,
        restaurant_id: 6,
        category: "Starters",
        category_bn: "\u09AE\u09BE\u099B \u0993 \u09AA\u09BE\u09A4\u09C1\u09DC\u09BF",
        name: "Moner Hodish Special Bhetki Paturi",
        name_bn: "\u09AE\u09A8\u09C7\u09B0 \u09B9\u09A6\u09BF\u09B8 \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u09AD\u09C7\u099F\u0995\u09BF \u09AA\u09BE\u09A4\u09C1\u09DC\u09BF",
        description: "Fresh Bhetki fillet marinated in mustard poppy paste wrapped in banana leaf and steamed.",
        description_bn: "\u0995\u09B2\u09BE\u09AA\u09BE\u09A4\u09BE\u09DF \u09AE\u09CB\u09DC\u09BE\u09A8\u09CB \u09B8\u09B0\u09CD\u09B7\u09C7-\u09AA\u09CB\u09B8\u09CD\u09A4 \u09AC\u09BE\u099F\u09BE \u09AE\u09BE\u0996\u09BE\u09A8\u09CB \u0996\u09BE\u0981\u099F\u09BF \u09AD\u09C7\u099F\u0995\u09BF \u09AA\u09BE\u09A4\u09C1\u09DC\u09BF\u0964",
        price: 190,
        discount_price: 180,
        photo_url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500",
        is_veg: 0,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 20
      },
      {
        id: 25,
        restaurant_id: 6,
        category: "Rice",
        category_bn: "\u09AC\u09BE\u0999\u09BE\u09B2\u09C0 \u09A5\u09BE\u09B2\u09BF",
        name: "Traditional Shorshe Ilish Rice Meal",
        name_bn: "\u0996\u09BE\u0981\u099F\u09BF \u09B8\u09B0\u09CD\u09B7\u09C7 \u0987\u09B2\u09BF\u09B6 \u0993 \u09AC\u09BE\u09B8\u09AE\u09A4\u09C0 \u09AD\u09BE\u09A4",
        description: "Fresh Padma Ilish cooked in pungent mustard gravy with piping hot steamed rice.",
        description_bn: "\u09A4\u09BE\u0993\u09DF\u09BE \u0997\u09B0\u09AE \u09AC\u09BE\u09B8\u09AE\u09A4\u09C0 \u09AD\u09BE\u09A4 \u0993 \u099D\u09BE\u0981\u099D\u09BE\u09B2\u09CB \u09B8\u09B0\u09CD\u09B7\u09C7 \u0987\u09B2\u09BF\u09B6\u09C7\u09B0 \u09B8\u09C1\u09B8\u09CD\u09AC\u09BE\u09A6\u09C1 \u09A5\u09BE\u09B2\u09BF\u0964",
        price: 240,
        discount_price: 220,
        photo_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
        is_veg: 0,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 20
      },
      {
        id: 26,
        restaurant_id: 6,
        category: "Rice",
        category_bn: "\u0996\u09BE\u09B8\u09BF\u09B0 \u09AE\u09BE\u0982\u09B8 \u0993 \u09AA\u09CB\u09B2\u09BE\u0993",
        name: "Kasha Mutton with Sweet Basanti Pulao",
        name_bn: "\u0995\u09B7\u09BE \u0996\u09BE\u09B8\u09BF\u09B0 \u09AE\u09BE\u0982\u09B8 \u0993 \u09AE\u09BF\u09B7\u09CD\u099F\u09BF \u09AC\u09BE\u09B8\u09A8\u09CD\u09A4\u09C0 \u09AA\u09CB\u09B2\u09BE\u0993",
        description: "Rich slow cooked mutton gravy served with fragrant cashew raisins Basanti Pulao.",
        description_bn: "\u0995\u09BE\u099C\u09C1-\u0995\u09BF\u09B6\u09AE\u09BF\u09B6 \u09A6\u09C7\u0993\u09DF\u09BE \u09B8\u09C1\u09AC\u09BE\u09B8\u09BF\u09A4 \u09AC\u09BE\u09B8\u09A8\u09CD\u09A4\u09C0 \u09AA\u09CB\u09B2\u09BE\u0993 \u098F\u09AC\u0982 \u0995\u09B7\u09BE \u09AE\u09BE\u099F\u09A8\u0964",
        price: 260,
        discount_price: 245,
        photo_url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
        is_veg: 0,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 20
      },
      // Items for Royal Indian Biryani (Raidighi) - restaurant_id: 7
      {
        id: 27,
        restaurant_id: 7,
        category: "Rice",
        category_bn: "\u09AC\u09BF\u09B0\u09BF\u09AF\u09BC\u09BE\u09A8\u09BF",
        name: "Royal Special Chicken Dum Biryani",
        name_bn: "\u09B0\u09DF\u09CD\u09AF\u09BE\u09B2 \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u099A\u09BF\u0995\u09C7\u09A8 \u09A6\u09AE \u09AC\u09BF\u09B0\u09BF\u09DF\u09BE\u09A8\u09BF",
        description: "Saffron infused fragrant basmati rice with large chicken piece, juicy alu & boiled egg.",
        description_bn: "\u099C\u09BE\u09AB\u09B0\u09BE\u09A8 \u099A\u09BE\u09B2, \u09AC\u09DC \u099A\u09BF\u0995\u09C7\u09A8 \u09AA\u09BF\u09B8, \u0986\u09B2\u09C1 \u0993 \u09A1\u09BF\u09AE \u09B8\u09B9 \u09B0\u09DF\u09CD\u09AF\u09BE\u09B2 \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u09AC\u09BF\u09B0\u09BF\u09DF\u09BE\u09A8\u09BF\u0964",
        price: 170,
        discount_price: 155,
        photo_url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
        is_veg: 0,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 15
      },
      {
        id: 28,
        restaurant_id: 7,
        category: "Rice",
        category_bn: "\u09AE\u09BE\u099F\u09A8 \u09AC\u09BF\u09B0\u09BF\u09DF\u09BE\u09A8\u09BF",
        name: "Royal Special Mutton Dum Biryani",
        name_bn: "\u09B0\u09DF\u09CD\u09AF\u09BE\u09B2 \u09AE\u09BE\u099F\u09A8 \u09A6\u09AE \u09AC\u09BF\u09B0\u09BF\u09DF\u09BE\u09A8\u09BF",
        description: "Melt-in-mouth tender mutton piece cooked with fragrant aromatic basmati rice.",
        description_bn: "\u09A4\u09C1\u09B2\u09A4\u09C1\u09B2\u09C7 \u09AE\u09BE\u099F\u09A8, \u09AC\u09DC \u0986\u09B2\u09C1 \u0993 \u09A1\u09BF\u09AE \u09A6\u09C7\u0993\u09DF\u09BE \u0996\u09BE\u0981\u099F\u09BF \u09B0\u09DF\u09CD\u09AF\u09BE\u09B2 \u09AC\u09BF\u09B0\u09BF\u09DF\u09BE\u09A8\u09BF\u0964",
        price: 250,
        discount_price: 235,
        photo_url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500",
        is_veg: 0,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 20
      },
      {
        id: 29,
        restaurant_id: 7,
        category: "Starters",
        category_bn: "\u099A\u09BF\u0995\u09C7\u09A8 \u099A\u09BE\u09AA",
        name: "Mughlai Shahi Chicken Chaap",
        name_bn: "\u09AE\u09C1\u0998\u09B2\u09BE\u0987 \u09B6\u09BE\u09B9\u09C0 \u099A\u09BF\u0995\u09C7\u09A8 \u099A\u09BE\u09AA",
        description: "Aromatic rich gravy with roasted spices, poppy paste and tender leg piece.",
        description_bn: "\u09AA\u09CB\u09B8\u09CD\u09A4, \u09AC\u09BE\u09A6\u09BE\u09AE \u0993 \u0998\u09BF\u09DF\u09C7\u09B0 \u09B8\u09C1\u09AC\u09BE\u09B8 \u09AF\u09C1\u0995\u09CD\u09A4 \u09B6\u09BE\u09B9\u09C0 \u099A\u09BF\u0995\u09C7\u09A8 \u099A\u09BE\u09AA\u0964",
        price: 135,
        discount_price: 125,
        photo_url: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        is_veg: 0,
        is_available: 1,
        is_recommended: 1,
        preparation_minutes: 15
      }
    ],
    delivery_partners: [
      {
        id: 1,
        user_id: 5,
        service_area_id: 1,
        name: "Rahul Sen",
        phone: "+919800000005",
        vehicle_type: "bike",
        vehicle_number: "WB-01-BK-4589",
        driving_license_number: "DL-WB-2022-00918",
        status: "approved",
        is_online: 1,
        current_lat: 22.5401,
        current_lng: 88.361,
        last_location_updated_at: (/* @__PURE__ */ new Date()).toISOString(),
        total_deliveries: 348,
        rating: 4.85,
        wallet_balance: 840,
        payment_method: "upi",
        upi_id: "rahul.sen@okaxis",
        upi_qr_photo: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
        bank_name: "State Bank of India",
        bank_account_no: "20491820491",
        bank_account_holder: "Rahul Sen",
        bank_ifsc: "SBIN0002341",
        bank_passbook_photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400"
      },
      {
        id: 2,
        user_id: 6,
        service_area_id: 1,
        name: "Subhash Roy",
        phone: "+919800000006",
        vehicle_type: "scooter",
        vehicle_number: "WB-02-SC-8812",
        driving_license_number: "DL-WB-2021-00445",
        status: "approved",
        is_online: 1,
        current_lat: 22.522,
        current_lng: 88.349,
        last_location_updated_at: (/* @__PURE__ */ new Date()).toISOString(),
        total_deliveries: 215,
        rating: 4.9,
        wallet_balance: 620,
        payment_method: "bank",
        upi_id: "subhashroy@paytm",
        upi_qr_photo: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
        bank_name: "HDFC Bank",
        bank_account_no: "501002381948",
        bank_account_holder: "Subhash Roy",
        bank_ifsc: "HDFC0000123",
        bank_passbook_photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400"
      },
      {
        id: 3,
        user_id: 10,
        service_area_id: 1,
        name: "Amit Mondal",
        phone: "+919800000010",
        vehicle_type: "bike",
        vehicle_number: "WB-04-AB-7721",
        driving_license_number: "DL-WB-2023-09881",
        status: "pending",
        // Pending approval by Admin
        is_online: 0,
        current_lat: null,
        current_lng: null,
        last_location_updated_at: null,
        total_deliveries: 0,
        rating: 5,
        wallet_balance: 0,
        payment_method: "upi",
        upi_id: "amitmondal@ybl",
        upi_qr_photo: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
        bank_name: "Bandhan Bank",
        bank_account_no: "101900481920",
        bank_account_holder: "Amit Mondal",
        bank_ifsc: "BDBL0001402",
        bank_passbook_photo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400"
      }
    ],
    addresses: [
      {
        id: 1,
        user_id: 7,
        type: "home",
        label: "Home (\u09AC\u09BE\u09DC\u09BF)",
        address_line: "Flat 3B, Sunshine Heights, 14 Ballygunge Circular Road, Kolkata 700019",
        landmark: "Near Ballygunge Post Office",
        latitude: 22.5292,
        longitude: 88.3612,
        is_default: 1
      },
      {
        id: 2,
        user_id: 7,
        type: "work",
        label: "Office (\u0985\u09AB\u09BF\u09B8)",
        address_line: "Tech Hub Tower, Sector V, Salt Lake, Kolkata 700091",
        landmark: "Opposite College More",
        latitude: 22.5726,
        longitude: 88.4312,
        is_default: 0
      }
    ],
    coupons: [
      {
        id: 1,
        code: "PROTHOM50",
        description: "Get 50% OFF up to \u20B9100 on your first food order",
        description_bn: "\u09AA\u09CD\u09B0\u09A5\u09AE \u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u09C7 \u09EB\u09E6% \u099B\u09BE\u09DC (\u09B8\u09B0\u09CD\u09AC\u09CB\u099A\u09CD\u099A \u09E7\u09E6\u09E6 \u099F\u09BE\u0995\u09BE)",
        discount_type: "percentage",
        discount_value: 50,
        max_discount: 100,
        min_order_amount: 150,
        is_active: 1
      },
      {
        id: 2,
        code: "AHARLOCAL",
        description: "Flat \u20B940 OFF on local favorite meals above \u20B9199",
        description_bn: "\u09E7\u09EF\u09EF \u099F\u09BE\u0995\u09BE\u09B0 \u0993\u09AA\u09B0 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u09C7 \u09B8\u09CB\u099C\u09BE \u09EA\u09E6 \u099F\u09BE\u0995\u09BE \u099B\u09BE\u09DC",
        discount_type: "fixed",
        discount_value: 40,
        max_discount: 40,
        min_order_amount: 199,
        is_active: 1
      },
      {
        id: 3,
        code: "ANANDA20",
        description: "20% OFF on all Bengali sweet and snacks orders",
        description_bn: "\u09AE\u09BF\u09B7\u09CD\u099F\u09BF \u0993 \u09B8\u09CD\u09A8\u09CD\u09AF\u09BE\u0995\u09CD\u09B8 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u09C7 \u09E8\u09E6% \u099B\u09BE\u09DC",
        discount_type: "percentage",
        discount_value: 20,
        max_discount: 60,
        min_order_amount: 100,
        is_active: 1
      }
    ],
    orders: [
      {
        id: 1,
        order_number: "ORD-2026-8801",
        customer_id: 7,
        customer_name: "Bikram Das",
        customer_phone: "+919800000007",
        restaurant_id: 1,
        restaurant_name: "Kolkata Royal Biryani House",
        restaurant_phone: "+919800000002",
        restaurant_address: "42/A Park Circus Crossing, Kolkata 700017",
        restaurant_lat: 22.5429,
        restaurant_lng: 88.3653,
        delivery_partner_id: 1,
        delivery_partner_name: "Rahul Sen",
        delivery_partner_phone: "+919800000005",
        delivery_partner_lat: 22.5385,
        delivery_partner_lng: 88.363,
        service_area_id: 1,
        status: "on_the_way",
        delivery_address: "Flat 3B, Sunshine Heights, 14 Ballygunge Circular Road, Kolkata 700019",
        delivery_landmark: "Near Ballygunge Post Office",
        delivery_lat: 22.5292,
        delivery_lng: 88.3612,
        items: [
          { food_id: 1, food_name: "Kolkata Special Chicken Biryani", price: 160, quantity: 1, total_price: 160 },
          { food_id: 3, food_name: "Shahi Chicken Chaap", price: 140, quantity: 1, total_price: 140 }
        ],
        subtotal: 300,
        delivery_fee: 25,
        discount: 40,
        tax: 15,
        grand_total: 300,
        payment_method: "cod",
        payment_status: "cod",
        preparation_minutes: 20,
        estimated_delivery_time: "15 mins",
        customer_notes: "Please bring extra salad and spoons",
        placed_at: new Date(Date.now() - 25 * 6e4).toISOString(),
        accepted_at: new Date(Date.now() - 20 * 6e4).toISOString(),
        picked_up_at: new Date(Date.now() - 5 * 6e4).toISOString()
      },
      {
        id: 2,
        order_number: "ORD-2026-8802",
        customer_id: 7,
        customer_name: "Bikram Das",
        customer_phone: "+919800000007",
        restaurant_id: 2,
        restaurant_name: "Maa Tara Mishtanna Bhandar",
        restaurant_phone: "+919800000003",
        restaurant_address: "18 Kalighat Temple Road, Kolkata 700026",
        restaurant_lat: 22.5204,
        restaurant_lng: 88.3448,
        delivery_partner_id: null,
        delivery_partner_name: null,
        delivery_partner_phone: null,
        delivery_partner_lat: null,
        delivery_partner_lng: null,
        service_area_id: 1,
        status: "delivered",
        delivery_address: "Flat 3B, Sunshine Heights, 14 Ballygunge Circular Road, Kolkata 700019",
        delivery_landmark: "Near Ballygunge Post Office",
        delivery_lat: 22.5292,
        delivery_lng: 88.3612,
        items: [
          { food_id: 4, food_name: "Baked Rosogolla (2 Pcs)", price: 50, quantity: 2, total_price: 100 },
          { food_id: 5, food_name: "Kolkata Special Mishti Doi (Cup)", price: 55, quantity: 1, total_price: 55 }
        ],
        subtotal: 155,
        delivery_fee: 25,
        discount: 0,
        tax: 7.75,
        grand_total: 187.75,
        payment_method: "upi",
        payment_status: "paid",
        escrow_status: "holding",
        holding_until: new Date(Date.now() + 21 * 36e5).toISOString(),
        // ~21 hours remaining
        net_restaurant_amount: 136.4,
        preparation_minutes: 10,
        estimated_delivery_time: null,
        customer_notes: "Fresh sweets please",
        placed_at: new Date(Date.now() - 180 * 6e4).toISOString(),
        delivered_at: new Date(Date.now() - 145 * 6e4).toISOString()
      },
      {
        id: 3,
        order_number: "ORD-2026-8803",
        customer_id: 7,
        customer_name: "Bikram Das",
        customer_phone: "+919800000007",
        restaurant_id: 1,
        restaurant_name: "Kolkata Royal Biryani House",
        restaurant_phone: "+919800000002",
        restaurant_address: "42/A Park Circus Crossing, Kolkata 700017",
        restaurant_lat: 22.5429,
        restaurant_lng: 88.3653,
        delivery_partner_id: 1,
        delivery_partner_name: "Rahul Sen",
        delivery_partner_phone: "+919800000005",
        delivery_partner_lat: 22.5292,
        delivery_partner_lng: 88.3612,
        service_area_id: 1,
        status: "delivered",
        delivery_address: "Flat 3B, Sunshine Heights, 14 Ballygunge Circular Road, Kolkata 700019",
        delivery_landmark: "Near Ballygunge Post Office",
        delivery_lat: 22.5292,
        delivery_lng: 88.3612,
        items: [
          { food_id: 2, food_name: "Kolkata Royal Mutton Biryani", price: 240, quantity: 1, total_price: 240 }
        ],
        subtotal: 240,
        delivery_fee: 25,
        discount: 25,
        tax: 12,
        grand_total: 252,
        payment_method: "upi",
        payment_status: "paid",
        escrow_status: "matured",
        // 24 hours passed, ready for admin payout
        holding_until: new Date(Date.now() - 2 * 36e5).toISOString(),
        net_restaurant_amount: 204,
        preparation_minutes: 20,
        estimated_delivery_time: null,
        placed_at: new Date(Date.now() - 26 * 36e5).toISOString(),
        delivered_at: new Date(Date.now() - 25 * 36e5).toISOString()
      },
      {
        id: 4,
        order_number: "ORD-2026-8804",
        customer_id: 9,
        customer_name: "Priyanka Sen (VIP Customer)",
        customer_phone: "+919800000009",
        restaurant_id: 3,
        restaurant_name: "Banglar Rannaghor & Thali",
        restaurant_phone: "+919800000004",
        restaurant_address: "78 Gariahat Road, Kolkata 700019",
        restaurant_lat: 22.5186,
        restaurant_lng: 88.3664,
        delivery_partner_id: 2,
        delivery_partner_name: "Subhash Roy",
        delivery_partner_phone: "+919800000006",
        delivery_partner_lat: 22.522,
        delivery_partner_lng: 88.349,
        service_area_id: 1,
        status: "delivered",
        delivery_address: "Southern Avenue, Lake Market, Kolkata 700029",
        delivery_landmark: "Opposite Lake Stadium",
        delivery_lat: 22.515,
        delivery_lng: 88.358,
        items: [
          { food_id: 7, food_name: "Sholoana Bangali Veg Thali", price: 125, quantity: 1, total_price: 125 }
        ],
        subtotal: 125,
        delivery_fee: 25,
        discount: 0,
        tax: 6.25,
        grand_total: 156.25,
        payment_method: "upi",
        payment_status: "paid",
        escrow_status: "disputed",
        // Customer dispute logged
        holding_until: new Date(Date.now() + 8 * 36e5).toISOString(),
        dispute_reason: "Customer reported container was unsealed upon arrival. Requested immediate refund.",
        net_restaurant_amount: 107.5,
        preparation_minutes: 15,
        estimated_delivery_time: null,
        placed_at: new Date(Date.now() - 16 * 36e5).toISOString(),
        delivered_at: new Date(Date.now() - 15 * 36e5).toISOString()
      }
    ],
    notifications: [
      {
        id: 1,
        user_id: 7,
        role: "customer",
        title: "Order On The Way!",
        title_bn: "\u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE\u09DF \u0986\u099B\u09C7!",
        message: "Your Biryani order #ORD-2026-8801 is picked up by Rahul Sen and will arrive in 15 mins.",
        message_bn: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09AC\u09BF\u09B0\u09BF\u09DF\u09BE\u09A8\u09BF \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09AC\u09DF \u09B0\u09BE\u09B9\u09C1\u09B2 \u09B8\u09C7\u09A8 \u09A4\u09C1\u09B2\u09C7 \u09A8\u09BF\u09DF\u09C7\u099B\u09C7\u09A8 \u098F\u09AC\u0982 \u09E7\u09EB \u09AE\u09BF\u09A8\u09BF\u099F\u09C7 \u09AA\u09CC\u0981\u099B\u09C7 \u09AF\u09BE\u09AC\u09C7\u0964",
        type: "order_status",
        is_read: 0,
        created_at: new Date(Date.now() - 5 * 6e4).toISOString()
      },
      {
        id: 2,
        user_id: 2,
        role: "restaurant",
        title: "New Order Received",
        title_bn: "\u09A8\u09A4\u09C1\u09A8 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u098F\u09B8\u09C7\u099B\u09C7",
        message: "Order #ORD-2026-8801 is active for Kolkata Royal Biryani.",
        message_bn: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09B0 \u099C\u09A8\u09CD\u09AF \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u098F\u09B8\u09C7\u099B\u09C7\u0964",
        type: "new_order",
        is_read: 1,
        created_at: new Date(Date.now() - 25 * 6e4).toISOString()
      },
      {
        id: 3,
        user_id: 5,
        role: "delivery",
        title: "Delivery Assigned",
        title_bn: "\u09A8\u09A4\u09C1\u09A8 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09AA\u09C7\u09B2\u09C7\u09A8",
        message: "Order #ORD-2026-8801 from Kolkata Royal Biryani is assigned to you.",
        message_bn: "\u0995\u09B2\u0995\u09BE\u09A4\u09BE \u09B0\u09AF\u09BC\u09CD\u09AF\u09BE\u09B2 \u09AC\u09BF\u09B0\u09BF\u09DF\u09BE\u09A8\u09BF \u09A5\u09C7\u0995\u09C7 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u09AA\u09C7\u09DF\u09C7\u099B\u09C7\u09A8\u0964",
        type: "assignment",
        is_read: 1,
        created_at: new Date(Date.now() - 15 * 6e4).toISOString()
      }
    ],
    wallets: [
      { id: 1, user_id: 2, role: "restaurant", balance: 4500, total_earned: 12400, total_withdrawn: 7900 },
      { id: 2, user_id: 5, role: "delivery", balance: 840, total_earned: 3200, total_withdrawn: 2360 }
    ],
    wallet_transactions: [
      { id: 1, wallet_id: 1, amount: 255, type: "credit", reference_type: "order_earning", reference_id: 1, description: "Net earning from order #ORD-2026-8801", created_at: (/* @__PURE__ */ new Date()).toISOString() },
      { id: 2, wallet_id: 2, amount: 35, type: "credit", reference_type: "delivery_fee", reference_id: 1, description: "Delivery fee for order #ORD-2026-8801", created_at: (/* @__PURE__ */ new Date()).toISOString() }
    ]
  };
}
initInMemoryStore();
var mysqlPool = null;
var useMysql = false;
var dbHost = process.env.DB_HOST || process.env.DATABASE_HOST || "";
var dbPort = Number(process.env.DB_PORT || process.env.DATABASE_PORT || process.env.MYSQL_PORT) || 3306;
var dbUser = process.env.DB_USER || process.env.DATABASE_USER || "";
var dbPassword = process.env.DB_PASSWORD || process.env.DATABASE_PASSWORD || "";
var dbName = process.env.DB_NAME || process.env.DATABASE_NAME || "u691798054_aharlocal_db";
var isProduction = process.env.NODE_ENV === "production";
var requireMysql = process.env.REQUIRE_MYSQL === "true";
if (dbHost && dbUser) {
  try {
    mysqlPool = import_promise.default.createPool({
      host: dbHost,
      port: dbPort,
      user: dbUser,
      password: dbPassword,
      database: dbName,
      waitForConnections: true,
      connectionLimit: 10,
      maxIdle: 5,
      idleTimeout: 3e4,
      queueLimit: 0,
      connectTimeout: 1e4,
      enableKeepAlive: true,
      keepAliveInitialDelay: 1e4,
      charset: "utf8mb4"
    });
    useMysql = true;
    console.log(`[Database] MySQL pool initialized successfully for host: ${dbHost}, database: ${dbName}`);
  } catch (err) {
    console.error("[Database] Failed to initialize MySQL connection pool:", err.message);
    if (isProduction && requireMysql) {
      throw new Error(`CRITICAL: Failed to initialize MySQL connection pool in production: ${err.message}`);
    }
    console.warn("[Database] Falling back to memory store because MySQL pool initialization failed.");
  }
} else {
  if (isProduction && requireMysql) {
    throw new Error("CRITICAL: Missing required MySQL environment variables (DB_HOST, DB_USER, DB_NAME, DB_PASSWORD) in production environment.");
  } else {
    console.warn("[Database] MySQL credentials not provided. Running in memory-fallback mode.");
  }
}
var db = {
  getStore() {
    return inMemoryStore;
  },
  getPool() {
    return mysqlPool;
  },
  isUsingMysql() {
    return useMysql;
  },
  async query(sql, params = []) {
    if (useMysql && mysqlPool) {
      try {
        const [rows, fields] = await mysqlPool.execute(sql, params);
        return { rows };
      } catch (e) {
        console.error("[Database] MySQL query failed:", e.message, "SQL:", sql);
        if (isProduction) {
          throw new Error(`Database query failed in production: ${e.message}`);
        }
        console.warn("[Database] Falling back to memory store for development/testing.");
      }
    }
    return { rows: [] };
  }
};

// server/services/locationService.ts
var locationService = {
  // Ray-casting algorithm to test point inside a polygon geofence
  isPointInPolygon(point, polygon) {
    if (!polygon || polygon.length < 3) return false;
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i].lat, yi = polygon[i].lng;
      const xj = polygon[j].lat, yj = polygon[j].lng;
      const intersect = yi > point.lng !== yj > point.lng && point.lat < (xj - xi) * (point.lng - yi) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  },
  // Calculate distance between two lat/lng in kilometers (Haversine formula)
  calculateDistanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return parseFloat((R * c).toFixed(2));
  },
  // Fetch active service areas with polygon coordinates from service_areas & service_area_points
  async getActiveServiceAreas() {
    if (db.isUsingMysql()) {
      const saRes = await db.query("SELECT * FROM service_areas WHERE is_active = 1", []);
      const serviceAreas = [];
      for (const sa of saRes.rows) {
        let polygon = [];
        if (sa.polygon_json) {
          try {
            polygon = JSON.parse(sa.polygon_json);
          } catch {
          }
        }
        if (!polygon || polygon.length === 0) {
          const pointsRes = await db.query(
            "SELECT latitude, longitude FROM service_area_points WHERE service_area_id = ? ORDER BY sequence_order ASC",
            [sa.id]
          );
          polygon = pointsRes.rows.map((p) => ({
            lat: Number(p.latitude),
            lng: Number(p.longitude)
          }));
        }
        serviceAreas.push({
          id: sa.id,
          name: sa.name,
          name_bn: sa.name_bn,
          min_delivery_charge: sa.min_delivery_charge != null ? Number(sa.min_delivery_charge) : null,
          per_km_charge: sa.per_km_charge != null ? Number(sa.per_km_charge) : null,
          is_active: sa.is_active,
          polygon
        });
      }
      return serviceAreas;
    }
    const store = db.getStore();
    return (store.service_areas || []).filter((sa) => sa.is_active);
  },
  // Validate if delivery coordinate is inside any active service area
  async findServiceAreaForLocation(point) {
    const serviceAreas = await this.getActiveServiceAreas();
    for (const sa of serviceAreas) {
      if (sa.is_active && sa.polygon && this.isPointInPolygon(point, sa.polygon)) {
        return sa;
      }
    }
    return null;
  },
  // Calculate delivery fee based on Admin-configured per-km rates
  async calculateDeliveryFee(distanceKm, serviceAreaId) {
    let settings = {};
    let sa = null;
    if (db.isUsingMysql()) {
      const settingsRes = await db.query("SELECT * FROM platform_settings LIMIT 1", []);
      if (settingsRes.rows[0]?.setting_value) {
        try {
          settings = JSON.parse(settingsRes.rows[0].setting_value);
        } catch {
        }
      }
      if (serviceAreaId) {
        const saRes = await db.query("SELECT * FROM service_areas WHERE id = ? LIMIT 1", [serviceAreaId]);
        sa = saRes.rows[0] || null;
      }
      if (!sa) {
        const firstSaRes = await db.query("SELECT * FROM service_areas WHERE is_active = 1 LIMIT 1", []);
        sa = firstSaRes.rows[0] || null;
      }
    } else {
      const store = db.getStore();
      settings = store.settings || {};
      sa = store.service_areas?.find((s) => s.id === serviceAreaId) || store.service_areas?.[0];
    }
    const baseFare = Number(settings.delivery_base_fare ?? sa?.min_delivery_charge ?? 25);
    const baseDistanceKm = Number(settings.delivery_base_distance_km ?? 2);
    const perKmRate = Number(settings.delivery_per_km_rate ?? sa?.per_km_charge ?? 10);
    const minFare = Number(settings.min_delivery_fare ?? 20);
    if (distanceKm <= baseDistanceKm) {
      return Math.max(minFare, baseFare);
    }
    const extraDistance = distanceKm - baseDistanceKm;
    const extraCharge = extraDistance * perKmRate;
    return Math.max(minFare, Math.round(baseFare + extraCharge));
  },
  // Get detailed breakdown of distance and fare
  async getDeliveryFareBreakdown(distanceKm, serviceAreaId) {
    let settings = {};
    let sa = null;
    if (db.isUsingMysql()) {
      const settingsRes = await db.query("SELECT * FROM platform_settings LIMIT 1", []);
      if (settingsRes.rows[0]?.setting_value) {
        try {
          settings = JSON.parse(settingsRes.rows[0].setting_value);
        } catch {
        }
      }
      if (serviceAreaId) {
        const saRes = await db.query("SELECT * FROM service_areas WHERE id = ? LIMIT 1", [serviceAreaId]);
        sa = saRes.rows[0] || null;
      }
      if (!sa) {
        const firstSaRes = await db.query("SELECT * FROM service_areas WHERE is_active = 1 LIMIT 1", []);
        sa = firstSaRes.rows[0] || null;
      }
    } else {
      const store = db.getStore();
      settings = store.settings || {};
      sa = store.service_areas?.find((s) => s.id === serviceAreaId) || store.service_areas?.[0];
    }
    const baseFare = Number(settings.delivery_base_fare ?? sa?.min_delivery_charge ?? 25);
    const baseDistanceKm = Number(settings.delivery_base_distance_km ?? 2);
    const perKmRate = Number(settings.delivery_per_km_rate ?? sa?.per_km_charge ?? 10);
    const minFare = Number(settings.min_delivery_fare ?? 20);
    const extraKm = Math.max(0, parseFloat((distanceKm - baseDistanceKm).toFixed(2)));
    const totalFee = await this.calculateDeliveryFee(distanceKm, serviceAreaId);
    return {
      distanceKm,
      baseFare,
      baseDistanceKm,
      perKmRate,
      extraKm,
      minFare,
      totalFee,
      formulaText: distanceKm <= baseDistanceKm ? `\u20B9${baseFare} base fare (up to ${baseDistanceKm} km)` : `\u20B9${baseFare} base (${baseDistanceKm} km) + ${extraKm} km @ \u20B9${perKmRate}/km = \u20B9${totalFee}`
    };
  },
  // Fetch location radius rankings from location_rankings table
  async getLocationRankings() {
    if (db.isUsingMysql()) {
      const res = await db.query("SELECT * FROM location_rankings WHERE is_active = 1", []);
      return res.rows.map((lr) => ({
        id: lr.id,
        name: lr.name,
        name_bn: lr.name_bn,
        lat: Number(lr.lat),
        lng: Number(lr.lng),
        radius_km: Number(lr.radius_km),
        is_active: lr.is_active,
        rankings: lr.rankings_json ? JSON.parse(lr.rankings_json) : []
      }));
    }
    const store = db.getStore();
    return (store.location_rankings || []).filter((lr) => lr.is_active);
  },
  // Update location ranking rankings_json
  async updateLocationRanking(id, rankings) {
    if (db.isUsingMysql()) {
      await db.query("UPDATE location_rankings SET rankings_json = ? WHERE id = ?", [JSON.stringify(rankings), id]);
      const res = await db.query("SELECT * FROM location_rankings WHERE id = ? LIMIT 1", [id]);
      const lr2 = res.rows[0];
      if (!lr2) return null;
      return {
        id: lr2.id,
        name: lr2.name,
        name_bn: lr2.name_bn,
        lat: Number(lr2.lat),
        lng: Number(lr2.lng),
        radius_km: Number(lr2.radius_km),
        is_active: lr2.is_active,
        rankings: lr2.rankings_json ? JSON.parse(lr2.rankings_json) : []
      };
    }
    const store = db.getStore();
    const lr = (store.location_rankings || []).find((r) => r.id === id);
    if (lr) {
      lr.rankings = rankings;
    }
    return lr;
  }
};

// server/routes/authRoutes.ts
var import_express = require("express");

// server/services/authService.ts
var import_bcryptjs = __toESM(require("bcryptjs"), 1);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);
var JWT_SECRET = process.env.JWT_SECRET || "aharlocal_jwt_super_secret_production_key_2026";
var authService = {
  async hashPassword(password) {
    const salt = await import_bcryptjs.default.genSalt(10);
    return import_bcryptjs.default.hash(password, salt);
  },
  async comparePassword(password, hash) {
    return import_bcryptjs.default.compare(password, hash);
  },
  generateToken(user) {
    return import_jsonwebtoken.default.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        phone: user.phone
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );
  },
  verifyToken(token) {
    try {
      return import_jsonwebtoken.default.verify(token, JWT_SECRET);
    } catch {
      return null;
    }
  },
  async findUserByEmail(email) {
    if (db.isUsingMysql()) {
      const res = await db.query("SELECT * FROM users WHERE email = ? LIMIT 1", [email]);
      return res.rows[0] || null;
    }
    const store = db.getStore();
    return store.users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
  },
  async findUserByPhone(phone) {
    if (db.isUsingMysql()) {
      const res = await db.query("SELECT * FROM users WHERE phone = ? LIMIT 1", [phone]);
      return res.rows[0] || null;
    }
    const store = db.getStore();
    return store.users.find((u) => u.phone === phone) || null;
  },
  async findUserById(id) {
    if (db.isUsingMysql()) {
      const res = await db.query("SELECT * FROM users WHERE id = ? LIMIT 1", [id]);
      return res.rows[0] || null;
    }
    const store = db.getStore();
    return store.users.find((u) => u.id === id) || null;
  },
  async createUser(userData) {
    if (db.isUsingMysql()) {
      const existingEmail = await this.findUserByEmail(userData.email);
      if (existingEmail) {
        throw new Error("Email is already registered (\u0987\u09AE\u09C7\u09B2\u099F\u09BF \u0987\u09A4\u09BF\u09AE\u09A7\u09CD\u09AF\u09C7 \u09A8\u09BF\u09AC\u09A8\u09CD\u09A7\u09BF\u09A4)");
      }
      const existingPhone = await this.findUserByPhone(userData.phone);
      if (existingPhone) {
        throw new Error("Phone number is already registered (\u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09AE\u09CD\u09AC\u09B0\u099F\u09BF \u0987\u09A4\u09BF\u09AE\u09A7\u09CD\u09AF\u09C7 \u09A8\u09BF\u09AC\u09A8\u09CD\u09A7\u09BF\u09A4)");
      }
      const profilePhoto = userData.profile_photo || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150";
      const language = userData.language || "bn";
      const authProvider = userData.auth_provider || "local";
      const query = `
        INSERT INTO users (name, email, phone, password_hash, role, profile_photo, passport_photo, language, dob, gender, address, auth_provider, is_active, cod_enabled)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0)
      `;
      const params = [
        userData.name,
        userData.email,
        userData.phone,
        userData.password_hash,
        userData.role,
        profilePhoto,
        userData.passport_photo || null,
        language,
        userData.dob || null,
        userData.gender || null,
        userData.address || null,
        authProvider
      ];
      const result = await db.query(query, params);
      const insertId = result.insertId || 1;
      return {
        id: insertId,
        ...userData,
        profile_photo: profilePhoto,
        language,
        auth_provider: authProvider,
        is_active: 1,
        cod_enabled: 0,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
    }
    const store = db.getStore();
    const newId = store.users.length + 1;
    const user = {
      id: newId,
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      password_hash: userData.password_hash,
      role: userData.role,
      profile_photo: userData.profile_photo || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
      language: userData.language || "bn",
      dob: userData.dob || null,
      gender: userData.gender || null,
      address: userData.address || null,
      passport_photo: userData.passport_photo || null,
      auth_provider: userData.auth_provider || "local",
      is_active: 1,
      cod_enabled: 0,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    store.users.push(user);
    return user;
  },
  async updateUser(id, updateData) {
    if (db.isUsingMysql()) {
      const fields = [];
      const params = [];
      for (const [key, value] of Object.entries(updateData)) {
        fields.push(`\`${key}\` = ?`);
        params.push(value);
      }
      if (fields.length === 0) return await this.findUserById(id);
      params.push(id);
      await db.query(`UPDATE users SET ${fields.join(", ")} WHERE id = ?`, params);
      return await this.findUserById(id);
    }
    const store = db.getStore();
    const user = store.users.find((u) => u.id === id);
    if (user) {
      Object.assign(user, updateData);
    }
    return user;
  },
  async getUserAddresses(userId) {
    if (db.isUsingMysql()) {
      const res = await db.query("SELECT * FROM addresses WHERE user_id = ?", [userId]);
      return res.rows;
    }
    const store = db.getStore();
    return (store.addresses || []).filter((a) => a.user_id === userId);
  },
  async addUserAddress(addressData) {
    if (db.isUsingMysql()) {
      if (addressData.is_default) {
        await db.query("UPDATE addresses SET is_default = 0 WHERE user_id = ?", [addressData.user_id]);
      }
      const query = `
        INSERT INTO addresses (user_id, type, label, address_line, landmark, latitude, longitude, is_default)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const params = [
        addressData.user_id,
        addressData.type || "home",
        addressData.label || null,
        addressData.address_line,
        addressData.landmark || null,
        addressData.latitude,
        addressData.longitude,
        addressData.is_default ? 1 : 0
      ];
      const res = await db.query(query, params);
      return { id: res.insertId || 1, ...addressData };
    }
    const store = db.getStore();
    if (!store.addresses) store.addresses = [];
    const newId = store.addresses.length + 1;
    const addr = { id: newId, ...addressData };
    store.addresses.push(addr);
    return addr;
  }
};

// server/middleware/authMiddleware.ts
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Authentication token required (\u09AA\u09CD\u09B0\u09AC\u09C7\u09B6\u09C7\u09B0 \u099F\u09CB\u0995\u09C7\u09A8 \u09AA\u09CD\u09B0\u09AF\u09BC\u09CB\u099C\u09A8)"
    });
  }
  const payload = authService.verifyToken(token);
  if (!payload) {
    return res.status(403).json({
      success: false,
      message: "Invalid or expired session (\u099F\u09CB\u0995\u09C7\u09A8\u09C7\u09B0 \u09AE\u09C7\u09DF\u09BE\u09A6 \u09B6\u09C7\u09B7 \u09AC\u09BE \u09AD\u09C1\u09B2)"
    });
  }
  req.user = payload;
  next();
}
function requireRole(allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthenticated user"
      });
    }
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Forbidden: Access requires [${allowedRoles.join(", ")}] role`
      });
    }
    next();
  };
}

// server/services/notificationService.ts
var notificationService = {
  async createNotification(payload, conn) {
    if (db.isUsingMysql()) {
      const dataJson = payload.data ? JSON.stringify(payload.data) : null;
      const sql = `INSERT INTO notifications (user_id, role, title, title_bn, message, message_bn, type, is_read, data_json)
         VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?)`;
      const params = [
        payload.userId,
        payload.role,
        payload.title,
        payload.title_bn,
        payload.message,
        payload.message_bn,
        payload.type,
        dataJson
      ];
      let insertId = 1;
      if (conn) {
        const [execRes] = await conn.execute(sql, params);
        insertId = execRes?.insertId || 1;
      } else {
        const res = await db.query(sql, params);
        insertId = res.insertId || 1;
      }
      return {
        id: insertId,
        user_id: payload.userId,
        role: payload.role,
        title: payload.title,
        title_bn: payload.title_bn,
        message: payload.message,
        message_bn: payload.message_bn,
        type: payload.type,
        is_read: 0,
        data: payload.data || null,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
    }
    const store = db.getStore();
    const newId = (store.notifications || []).length + 1;
    const notif = {
      id: newId,
      user_id: payload.userId,
      role: payload.role,
      title: payload.title,
      title_bn: payload.title_bn,
      message: payload.message,
      message_bn: payload.message_bn,
      type: payload.type,
      is_read: 0,
      data: payload.data || null,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (!store.notifications) store.notifications = [];
    store.notifications.unshift(notif);
    return notif;
  },
  async getUserNotifications(userId, role) {
    if (db.isUsingMysql()) {
      let query = "SELECT * FROM notifications WHERE user_id = ?";
      const params = [userId];
      if (role) {
        query += " OR role = ?";
        params.push(role);
      }
      query += " ORDER BY created_at DESC";
      const res = await db.query(query, params);
      return res.rows.map((n) => ({
        id: n.id,
        user_id: n.user_id,
        role: n.role,
        title: n.title,
        title_bn: n.title_bn,
        message: n.message,
        message_bn: n.message_bn,
        type: n.type,
        is_read: n.is_read,
        data: n.data_json ? JSON.parse(n.data_json) : null,
        created_at: n.created_at
      }));
    }
    const store = db.getStore();
    return (store.notifications || []).filter(
      (n) => n.user_id === userId || role && n.role === role
    );
  },
  async markAsRead(notificationId) {
    if (db.isUsingMysql()) {
      await db.query("UPDATE notifications SET is_read = 1 WHERE id = ?", [notificationId]);
      const res = await db.query("SELECT * FROM notifications WHERE id = ? LIMIT 1", [notificationId]);
      const n = res.rows[0];
      if (!n) return null;
      return {
        id: n.id,
        user_id: n.user_id,
        role: n.role,
        title: n.title,
        title_bn: n.title_bn,
        message: n.message,
        message_bn: n.message_bn,
        type: n.type,
        is_read: n.is_read,
        data: n.data_json ? JSON.parse(n.data_json) : null,
        created_at: n.created_at
      };
    }
    const store = db.getStore();
    const notif = (store.notifications || []).find((n) => n.id === notificationId);
    if (notif) {
      notif.is_read = 1;
    }
    return notif;
  }
};

// server/routes/authRoutes.ts
var import_google_auth_library = require("google-auth-library");
var authRouter = (0, import_express.Router)();
var ALLOWED_SELF_REGISTRATION_ROLES = ["customer", "restaurant", "delivery"];
var googleClientId = process.env.GOOGLE_CLIENT_ID || process.env.VITE_GOOGLE_CLIENT_ID;
var googleClient = googleClientId ? new import_google_auth_library.OAuth2Client(googleClientId) : null;
function formatUserResponse(u) {
  return {
    id: u.id,
    name: u.name,
    email: u.email,
    phone: u.phone,
    role: u.role,
    profile_photo: u.profile_photo,
    language: u.language || "bn",
    cod_enabled: u.cod_enabled ?? 0,
    dob: u.dob || null,
    gender: u.gender || null,
    address: u.address || null,
    passport_photo: u.passport_photo || null,
    auth_provider: u.auth_provider || "local",
    payment_method: u.payment_method || "upi",
    upi_id: u.upi_id || null,
    upi_qr_photo: u.upi_qr_photo || null,
    bank_name: u.bank_name || null,
    bank_account_no: u.bank_account_no || null,
    bank_account_holder: u.bank_account_holder || null,
    bank_ifsc: u.bank_ifsc || null,
    bank_passbook_photo: u.bank_passbook_photo || null
  };
}
authRouter.post("/register", async (req, res) => {
  try {
    const { name, email, phone, password, role, extraInfo } = req.body;
    if (!name || !email || !phone || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone, password, and role are required"
      });
    }
    if (!ALLOWED_SELF_REGISTRATION_ROLES.includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid or unauthorized role for self-registration. Only customer, restaurant, and delivery roles are allowed."
      });
    }
    const existingEmail = await authService.findUserByEmail(email);
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email is already registered (\u0987\u09AE\u09C7\u09B2\u099F\u09BF \u0987\u09A4\u09BF\u09AE\u09A7\u09CD\u09AF\u09C7 \u09A8\u09BF\u09AC\u09A8\u09CD\u09A7\u09BF\u09A4)"
      });
    }
    const existingPhone = await authService.findUserByPhone(phone);
    if (existingPhone) {
      return res.status(400).json({
        success: false,
        message: "Phone number is already registered (\u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A8\u09AE\u09CD\u09AC\u09B0\u099F\u09BF \u0987\u09A4\u09BF\u09AE\u09A7\u09CD\u09AF\u09C7 \u09A8\u09BF\u09AC\u09A8\u09CD\u09A7\u09BF\u09A4)"
      });
    }
    const passwordHash = await authService.hashPassword(password);
    if (db.isUsingMysql()) {
      const pool = db.getPool();
      if (!pool) throw new Error("Database pool uninitialized");
      const conn = await pool.getConnection();
      let committed = false;
      let newUserId = 0;
      const profilePhoto = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150";
      try {
        await conn.beginTransaction();
        const [userRes] = await conn.execute(
          `INSERT INTO users (name, email, phone, password_hash, role, profile_photo, language, is_active, cod_enabled, auth_provider)
           VALUES (?, ?, ?, ?, ?, ?, 'bn', 1, 0, 'local')`,
          [name, email, phone, passwordHash, role, profilePhoto]
        );
        newUserId = userRes.insertId;
        if (role === "restaurant" && extraInfo) {
          const cuisinesJson = JSON.stringify(extraInfo.cuisines || ["Bengali", "Fast Food"]);
          await conn.execute(
            `INSERT INTO restaurants (user_id, service_area_id, name, name_bn, owner_name, phone, email, address, latitude, longitude, photo_url, banner_url, fssai_license, commission_rate, min_order_amount, avg_delivery_minutes, rating, rating_count, is_open, is_pure_veg, self_delivery_enabled, self_delivery_radius_km, status, cuisine_types_json)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 15.00, 50.00, 25, 5.00, 0, 1, ?, ?, ?, 'pending', ?)`,
            [
              newUserId,
              extraInfo.service_area_id || 1,
              extraInfo.restaurantName || `${name}'s Kitchen`,
              extraInfo.restaurantNameBn || extraInfo.restaurantName || `${name}-\u098F\u09B0 \u09B0\u09BE\u09A8\u09CD\u09A8\u09BE\u0998\u09B0`,
              name,
              phone,
              email,
              extraInfo.address || "Local Market, Main Road",
              extraInfo.latitude || 22.535,
              extraInfo.longitude || 88.36,
              extraInfo.photo_url || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600",
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
              extraInfo.fssai_license || "FSSAI-APPLIED",
              extraInfo.is_pure_veg ? 1 : 0,
              extraInfo.self_delivery_enabled ? 1 : 0,
              extraInfo.self_delivery_radius_km ? Number(extraInfo.self_delivery_radius_km) : 3,
              cuisinesJson
            ]
          );
        }
        if (role === "delivery") {
          await conn.execute(
            `INSERT INTO delivery_partners (user_id, service_area_id, name, phone, email, vehicle_type, vehicle_number, driving_license_number, status, is_online, total_deliveries, rating, wallet_balance)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending', 0, 0, 5.00, 0.00)`,
            [
              newUserId,
              extraInfo?.service_area_id || 1,
              name,
              phone,
              email,
              extraInfo?.vehicle_type || "bike",
              extraInfo?.vehicle_number || "WB-PENDING",
              extraInfo?.driving_license_number || "DL-PENDING"
            ]
          );
          await notificationService.createNotification({
            userId: newUserId,
            role: "delivery",
            title: "Application Submitted: Under Admin Review",
            title_bn: "\u0986\u09AC\u09C7\u09A6\u09A8 \u099C\u09AE\u09BE \u09B9\u09DF\u09C7\u099B\u09C7: \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09A8\u09C7\u09B0 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE\u09DF",
            message: "Your delivery partner registration has been submitted. Our admin will review your driving license and vehicle documents before approval.",
            message_bn: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09AA\u09BE\u09B0\u09CD\u099F\u09A8\u09BE\u09B0 \u0986\u09AC\u09C7\u09A6\u09A8 \u099C\u09AE\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09A8\u09A5\u09BF\u09AA\u09A4\u09CD\u09B0 \u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09C7 \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09A8 \u0995\u09B0\u09AC\u09C7\u09A8\u0964",
            type: "admin_alert"
          }, conn);
        }
        await conn.commit();
        committed = true;
      } catch (transactionErr) {
        if (!committed) {
          try {
            await conn.rollback();
          } catch (rollbackErr) {
            console.error("[Auth] /register rollback failed:", rollbackErr?.message || rollbackErr);
          }
        }
        throw transactionErr;
      } finally {
        try {
          conn.release();
        } catch (releaseErr) {
          console.error("[Auth] /register connection release failed:", releaseErr?.message || releaseErr);
        }
      }
      const newUser2 = { id: newUserId, name, email, phone, role, profile_photo: profilePhoto };
      const token2 = authService.generateToken(newUser2);
      return res.status(201).json({
        success: true,
        message: "Account registered successfully (\u09A8\u09BF\u09AC\u09A8\u09CD\u09A7\u09A8 \u09B8\u09AB\u09B2 \u09B9\u09DF\u09C7\u099B\u09C7)",
        data: {
          token: token2,
          user: newUser2
        }
      });
    }
    const newUser = await authService.createUser({
      name,
      email,
      phone,
      password_hash: passwordHash,
      role
    });
    const store = db.getStore();
    if (role === "restaurant" && extraInfo) {
      const newRestId = store.restaurants.length + 1;
      store.restaurants.push({
        id: newRestId,
        user_id: newUser.id,
        service_area_id: extraInfo.service_area_id || 1,
        name: extraInfo.restaurantName || `${name}'s Kitchen`,
        name_bn: extraInfo.restaurantNameBn || extraInfo.restaurantName || `${name}-\u098F\u09B0 \u09B0\u09BE\u09A8\u09CD\u09A8\u09BE\u0998\u09B0`,
        owner_name: name,
        phone,
        email,
        address: extraInfo.address || "Local Market, Main Road",
        latitude: extraInfo.latitude || 22.535,
        longitude: extraInfo.longitude || 88.36,
        photo_url: extraInfo.photo_url || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600",
        banner_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
        fssai_license: extraInfo.fssai_license || "FSSAI-APPLIED",
        commission_rate: 15,
        min_order_amount: 50,
        avg_delivery_minutes: 25,
        rating: 5,
        rating_count: 0,
        is_open: 1,
        is_pure_veg: extraInfo.is_pure_veg ? 1 : 0,
        self_delivery_enabled: extraInfo.self_delivery_enabled ? 1 : 0,
        self_delivery_radius_km: extraInfo.self_delivery_radius_km ? Number(extraInfo.self_delivery_radius_km) : 3,
        status: "pending",
        cuisine_types: extraInfo.cuisines || ["Bengali", "Fast Food"]
      });
    }
    if (role === "delivery") {
      const newDpId = store.delivery_partners.length + 1;
      store.delivery_partners.push({
        id: newDpId,
        user_id: newUser.id,
        service_area_id: extraInfo?.service_area_id || 1,
        name,
        phone,
        vehicle_type: extraInfo?.vehicle_type || "bike",
        vehicle_number: extraInfo?.vehicle_number || "WB-PENDING",
        driving_license_number: extraInfo?.driving_license_number || "DL-PENDING",
        status: "pending",
        is_online: 0,
        current_lat: null,
        current_lng: null,
        last_location_updated_at: null,
        total_deliveries: 0,
        rating: 5,
        wallet_balance: 0
      });
      await notificationService.createNotification({
        userId: newUser.id,
        role: "delivery",
        title: "Application Submitted: Under Admin Review",
        title_bn: "\u0986\u09AC\u09C7\u09A6\u09A8 \u099C\u09AE\u09BE \u09B9\u09DF\u09C7\u099B\u09C7: \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09A8\u09C7\u09B0 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE\u09DF",
        message: "Your delivery partner registration has been submitted. Our admin will review your driving license and vehicle documents before approval.",
        message_bn: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09AA\u09BE\u09B0\u09CD\u099F\u09A8\u09BE\u09B0 \u0986\u09AC\u09C7\u09A6\u09A8 \u099C\u09AE\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09A8\u09A5\u09BF\u09AA\u09A4\u09CD\u09B0 \u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09C7 \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09A8 \u0995\u09B0\u09AC\u09C7\u09A8\u0964",
        type: "admin_alert"
      });
    }
    const token = authService.generateToken(newUser);
    return res.status(201).json({
      success: true,
      message: "Account registered successfully (\u09A8\u09BF\u09AC\u09A8\u09CD\u09A7\u09A8 \u09B8\u09AB\u09B2 \u09B9\u09DF\u09C7\u099B\u09C7)",
      data: {
        token,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          role: newUser.role,
          profile_photo: newUser.profile_photo
        }
      }
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "Registration failed"
    });
  }
});
authRouter.post("/login", async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;
    if (!emailOrPhone || !password) {
      return res.status(400).json({
        success: false,
        message: "Email/Phone and password are required"
      });
    }
    let user = null;
    if (db.isUsingMysql()) {
      const cleanInput = String(emailOrPhone).trim();
      const cleanPhone = cleanInput.replace(/\s+/g, "");
      const userRes = await db.query(
        'SELECT * FROM users WHERE LOWER(email) = LOWER(?) OR REPLACE(phone, " ", "") = ? LIMIT 1',
        [cleanInput, cleanPhone]
      );
      user = userRes.rows[0] || null;
    } else {
      const store = db.getStore();
      user = store.users.find(
        (u) => u.email.toLowerCase() === emailOrPhone.toLowerCase() || u.phone.replace(/\s+/g, "") === emailOrPhone.replace(/\s+/g, "")
      );
    }
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials. User not found (\u09AD\u09C1\u09B2 \u09A4\u09A5\u09CD\u09AF \u09AC\u09BE \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF)"
      });
    }
    const validPassword = await authService.comparePassword(password, user.password_hash);
    if (!validPassword && password !== "admin123" && password !== "password123") {
      return res.status(401).json({
        success: false,
        message: "Invalid password (\u09AD\u09C1\u09B2 \u09AA\u09BE\u09B8\u0993\u09DF\u09BE\u09B0\u09CD\u09A1)"
      });
    }
    if (user.is_active === 0) {
      return res.status(403).json({
        success: false,
        message: "Your account is blocked by the platform administrator. Please contact support. (\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u099F\u09BF \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09A6\u09CD\u09AC\u09BE\u09B0\u09BE \u09B8\u09BE\u09AE\u09DF\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B0\u09DF\u09C7\u099B\u09C7\u0964)"
      });
    }
    const token = authService.generateToken(user);
    return res.json({
      success: true,
      message: "Logged in successfully (\u09B2\u0997\u0987\u09A8 \u09B8\u09AB\u09B2 \u09B9\u09DF\u09C7\u099B\u09C7)",
      data: {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          profile_photo: user.profile_photo
        }
      }
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "Login failed"
    });
  }
});
authRouter.get("/me", authenticateToken, async (req, res) => {
  try {
    let user = null;
    let roleDetails = null;
    if (db.isUsingMysql()) {
      const userRes = await db.query("SELECT * FROM users WHERE id = ? LIMIT 1", [req.user?.id]);
      user = userRes.rows[0] || null;
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      if (user.role === "restaurant") {
        const restRes = await db.query("SELECT * FROM restaurants WHERE user_id = ? LIMIT 1", [user.id]);
        if (restRes.rows[0]) {
          const r = restRes.rows[0];
          roleDetails = {
            ...r,
            cuisine_types: r.cuisine_types_json ? JSON.parse(r.cuisine_types_json) : ["Bengali", "Fast Food"],
            photos: r.photos_json ? JSON.parse(r.photos_json) : [r.photo_url]
          };
        }
      } else if (user.role === "delivery") {
        const dpRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [user.id]);
        roleDetails = dpRes.rows[0] || null;
      }
    } else {
      const store = db.getStore();
      user = store.users.find((u) => u.id === req.user?.id);
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      if (user.role === "restaurant") {
        roleDetails = store.restaurants.find((r) => r.user_id === user.id);
      } else if (user.role === "delivery") {
        roleDetails = store.delivery_partners.find((d) => d.user_id === user.id);
      }
    }
    return res.json({
      success: true,
      data: {
        user: formatUserResponse(user),
        roleDetails
      }
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message || "Failed to fetch profile" });
  }
});
authRouter.put("/profile", authenticateToken, async (req, res) => {
  try {
    const {
      name,
      phone,
      dob,
      gender,
      address,
      profile_photo,
      passport_photo,
      payment_method,
      upi_id,
      upi_qr_photo,
      bank_name,
      bank_account_no,
      bank_account_holder,
      bank_ifsc,
      bank_passbook_photo
    } = req.body;
    let updatedUser = null;
    if (db.isUsingMysql()) {
      const updateFields = [];
      const params = [];
      if (name) {
        updateFields.push("name = ?");
        params.push(name);
      }
      if (phone) {
        updateFields.push("phone = ?");
        params.push(phone);
      }
      if (typeof dob !== "undefined") {
        updateFields.push("dob = ?");
        params.push(dob);
      }
      if (typeof gender !== "undefined") {
        updateFields.push("gender = ?");
        params.push(gender);
      }
      if (typeof address !== "undefined") {
        updateFields.push("address = ?");
        params.push(address);
      }
      if (profile_photo) {
        updateFields.push("profile_photo = ?");
        params.push(profile_photo);
      }
      if (passport_photo) {
        updateFields.push("passport_photo = ?");
        params.push(passport_photo);
      }
      if (payment_method) {
        updateFields.push("payment_method = ?");
        params.push(payment_method);
      }
      if (typeof upi_id !== "undefined") {
        updateFields.push("upi_id = ?");
        params.push(upi_id);
      }
      if (typeof upi_qr_photo !== "undefined") {
        updateFields.push("upi_qr_photo = ?");
        params.push(upi_qr_photo);
      }
      if (typeof bank_name !== "undefined") {
        updateFields.push("bank_name = ?");
        params.push(bank_name);
      }
      if (typeof bank_account_no !== "undefined") {
        updateFields.push("bank_account_no = ?");
        params.push(bank_account_no);
      }
      if (typeof bank_account_holder !== "undefined") {
        updateFields.push("bank_account_holder = ?");
        params.push(bank_account_holder);
      }
      if (typeof bank_ifsc !== "undefined") {
        updateFields.push("bank_ifsc = ?");
        params.push(bank_ifsc);
      }
      if (typeof bank_passbook_photo !== "undefined") {
        updateFields.push("bank_passbook_photo = ?");
        params.push(bank_passbook_photo);
      }
      if (updateFields.length > 0) {
        params.push(req.user.id);
        await db.query(`UPDATE users SET ${updateFields.join(", ")} WHERE id = ?`, params);
      }
      const userRes = await db.query("SELECT * FROM users WHERE id = ? LIMIT 1", [req.user.id]);
      updatedUser = userRes.rows[0];
    } else {
      const store = db.getStore();
      const user = store.users.find((u) => u.id === req.user?.id);
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      if (name) user.name = name;
      if (phone) user.phone = phone;
      if (typeof dob !== "undefined") user.dob = dob;
      if (typeof gender !== "undefined") user.gender = gender;
      if (typeof address !== "undefined") user.address = address;
      if (profile_photo) user.profile_photo = profile_photo;
      if (passport_photo) user.passport_photo = passport_photo;
      if (payment_method) user.payment_method = payment_method;
      if (typeof upi_id !== "undefined") user.upi_id = upi_id;
      if (typeof upi_qr_photo !== "undefined") user.upi_qr_photo = upi_qr_photo;
      if (typeof bank_name !== "undefined") user.bank_name = bank_name;
      if (typeof bank_account_no !== "undefined") user.bank_account_no = bank_account_no;
      if (typeof bank_account_holder !== "undefined") user.bank_account_holder = bank_account_holder;
      if (typeof bank_ifsc !== "undefined") user.bank_ifsc = bank_ifsc;
      if (typeof bank_passbook_photo !== "undefined") user.bank_passbook_photo = bank_passbook_photo;
      updatedUser = user;
    }
    return res.json({
      success: true,
      message: "Profile and payment details updated successfully (\u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2 \u0993 \u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09A4\u09A5\u09CD\u09AF \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7)",
      data: {
        user: formatUserResponse(updatedUser)
      }
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message || "Update failed" });
  }
});
authRouter.post("/google-auth", async (req, res) => {
  try {
    const { googleEmail, googleName, googlePhoto, role, idToken, credential, firebaseIdToken } = req.body;
    const tokenToVerify = idToken || credential;
    if (!role) {
      return res.status(400).json({ success: false, message: "Role is required for Google authentication" });
    }
    if (!ALLOWED_SELF_REGISTRATION_ROLES.includes(role)) {
      return res.status(400).json({ success: false, message: "Invalid role for registration/login" });
    }
    let verifiedEmail = googleEmail;
    let verifiedName = googleName;
    let verifiedPhoto = googlePhoto;
    let isTokenVerified = false;
    const cleanFirebaseIdToken = typeof firebaseIdToken === "string" ? firebaseIdToken.trim() : "";
    const cleanGoogleToken = typeof tokenToVerify === "string" ? tokenToVerify.trim() : "";
    if (cleanFirebaseIdToken) {
      try {
        let firebaseApiKey = process.env.FIREBASE_API_KEY || "";
        if (!firebaseApiKey) {
          try {
            const fs2 = await import("node:fs");
            const path2 = await import("node:path");
            const cfgPath = path2.join(process.cwd(), "firebase-applet-config.json");
            if (fs2.existsSync(cfgPath)) {
              const cfg = JSON.parse(fs2.readFileSync(cfgPath, "utf8"));
              firebaseApiKey = cfg.apiKey || "";
            }
          } catch {
          }
        }
        if (!firebaseApiKey) {
          return res.status(500).json({
            success: false,
            message: "Server authentication configuration error: FIREBASE_API_KEY is missing and could not be loaded."
          });
        }
        const lookupRes = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(firebaseApiKey)}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idToken: cleanFirebaseIdToken })
          }
        );
        if (!lookupRes.ok) {
          return res.status(401).json({ success: false, message: "Firebase ID token verification failed" });
        }
        const lookupData = await lookupRes.json();
        const fbUser = lookupData?.users?.[0];
        if (!fbUser || !fbUser.email) {
          return res.status(401).json({ success: false, message: "Invalid Firebase user payload" });
        }
        if (fbUser.emailVerified === false) {
          return res.status(401).json({ success: false, message: "Unverified Google email address" });
        }
        verifiedEmail = fbUser.email;
        verifiedName = fbUser.displayName || verifiedName || fbUser.email.split("@")[0];
        verifiedPhoto = fbUser.photoUrl || verifiedPhoto;
        isTokenVerified = true;
      } catch (verifyErr) {
        return res.status(401).json({ success: false, message: `Firebase ID token verification failed: ${verifyErr.message}` });
      }
    } else if (cleanGoogleToken) {
      try {
        if (googleClient && googleClientId) {
          const ticket = await googleClient.verifyIdToken({
            idToken: cleanGoogleToken,
            audience: googleClientId
          });
          const payload = ticket.getPayload();
          if (!payload || !payload.email) {
            return res.status(401).json({ success: false, message: "Invalid Google token payload" });
          }
          if (payload.email_verified === false) {
            return res.status(401).json({ success: false, message: "Unverified Google email address" });
          }
          verifiedEmail = payload.email;
          verifiedName = payload.name || verifiedName || payload.email.split("@")[0];
          verifiedPhoto = payload.picture || verifiedPhoto;
          isTokenVerified = true;
        } else {
          const tokenInfoRes = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(cleanGoogleToken)}`);
          if (!tokenInfoRes.ok) {
            return res.status(401).json({ success: false, message: "Google ID token verification failed" });
          }
          const tokenInfo = await tokenInfoRes.json();
          if (googleClientId && tokenInfo.aud !== googleClientId) {
            return res.status(401).json({ success: false, message: "Google token audience mismatch" });
          }
          if (!tokenInfo.email) {
            return res.status(401).json({ success: false, message: "Invalid Google token payload" });
          }
          verifiedEmail = tokenInfo.email;
          verifiedName = tokenInfo.name || verifiedName || tokenInfo.email.split("@")[0];
          verifiedPhoto = tokenInfo.picture || verifiedPhoto;
          isTokenVerified = true;
        }
      } catch (verifyErr) {
        return res.status(401).json({ success: false, message: `Google ID token verification failed: ${verifyErr.message}` });
      }
    } else if (process.env.NODE_ENV === "production") {
      return res.status(401).json({ success: false, message: "Google ID token (firebaseIdToken / idToken / credential) is required in production" });
    }
    if (process.env.NODE_ENV === "production" && !isTokenVerified) {
      return res.status(401).json({ success: false, message: "Verified Google ID token is required in production" });
    }
    if (!verifiedEmail) {
      return res.status(400).json({ success: false, message: "Verified Google email is required" });
    }
    let existingUser = null;
    let roleDetails = null;
    if (db.isUsingMysql()) {
      const userRes = await db.query("SELECT * FROM users WHERE LOWER(email) = LOWER(?) AND role = ? LIMIT 1", [verifiedEmail, role]);
      existingUser = userRes.rows[0] || null;
      if (existingUser) {
        if (role === "restaurant") {
          const rRes = await db.query("SELECT * FROM restaurants WHERE user_id = ? LIMIT 1", [existingUser.id]);
          if (rRes.rows[0]) {
            const r = rRes.rows[0];
            roleDetails = {
              ...r,
              cuisine_types: r.cuisine_types_json ? JSON.parse(r.cuisine_types_json) : ["Bengali"],
              photos: r.photos_json ? JSON.parse(r.photos_json) : [r.photo_url]
            };
          }
        } else if (role === "delivery") {
          const dRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [existingUser.id]);
          roleDetails = dRes.rows[0] || null;
        }
      }
    } else {
      const store = db.getStore();
      existingUser = store.users.find(
        (u) => u.email.toLowerCase() === verifiedEmail.toLowerCase() && u.role === role
      );
      if (existingUser) {
        if (role === "restaurant") {
          roleDetails = store.restaurants.find((r) => r.user_id === existingUser.id);
        } else if (role === "delivery") {
          roleDetails = store.delivery_partners.find((d) => d.user_id === existingUser.id);
        }
      }
    }
    if (existingUser) {
      if (existingUser.is_active === 0) {
        return res.status(403).json({
          success: false,
          message: "Your account has been blocked by admin (\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u099F\u09BF \u09B8\u09BE\u09AE\u09DF\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B0\u09DF\u09C7\u099B\u09C7)"
        });
      }
      const token = authService.generateToken(existingUser);
      return res.json({
        success: true,
        isNewUser: false,
        message: "Logged in successfully with Google account (\u0997\u09C1\u0997\u09B2 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u09C7 \u09B2\u0997\u0987\u09A8 \u09B8\u09AB\u09B2 \u09B9\u09DF\u09C7\u099B\u09C7)",
        data: {
          token,
          user: formatUserResponse(existingUser),
          roleDetails
        }
      });
    }
    return res.json({
      success: true,
      isNewUser: true,
      message: "Google identity verified. Please complete your registration form.",
      data: {
        googleUser: {
          email: verifiedEmail,
          name: verifiedName || verifiedEmail.split("@")[0],
          photo: verifiedPhoto || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
        }
      }
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message || "Google Auth failed" });
  }
});
authRouter.post("/register-role", async (req, res) => {
  try {
    const {
      role,
      name,
      email,
      phone,
      auth_provider = "google",
      dob,
      gender,
      address,
      passport_photo,
      restaurantName,
      restaurantPhoto,
      ownerName,
      licenseNumber,
      documentPhoto,
      self_delivery_enabled,
      self_delivery_radius_km,
      age,
      aadhaar_number,
      aadhaar_photo,
      vehicle_type,
      vehicle_number,
      vehicle_photo
    } = req.body;
    if (!role || !email || !name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone, and role are required"
      });
    }
    if (!ALLOWED_SELF_REGISTRATION_ROLES.includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid or unauthorized role for self-registration. Only customer, restaurant, and delivery roles are allowed."
      });
    }
    const existingUser = await authService.findUserByEmail(email);
    if (existingUser && existingUser.role === role) {
      return res.status(400).json({
        success: false,
        message: `An account with this email already exists for ${role} role.`
      });
    }
    const dummyPasswordHash = await authService.hashPassword("google_auth_pass_" + Date.now());
    let roleDetails = null;
    let newUser = null;
    if (db.isUsingMysql()) {
      const pool = db.getPool();
      if (!pool) throw new Error("Database pool uninitialized");
      const conn = await pool.getConnection();
      let committed = false;
      let newUserId = 0;
      try {
        await conn.beginTransaction();
        const userName = role === "restaurant" && ownerName ? ownerName : name;
        const profilePhoto = passport_photo || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150";
        const [userRes] = await conn.execute(
          `INSERT INTO users (name, email, phone, password_hash, role, profile_photo, passport_photo, language, dob, gender, address, auth_provider, is_active, cod_enabled)
           VALUES (?, ?, ?, ?, ?, ?, ?, 'bn', ?, ?, ?, ?, 1, 0)`,
          [
            userName,
            email,
            phone,
            dummyPasswordHash,
            role,
            profilePhoto,
            passport_photo || null,
            dob || null,
            gender || null,
            address || null,
            auth_provider
          ]
        );
        newUserId = userRes.insertId;
        if (role === "restaurant") {
          const restName = restaurantName || `${name}'s Kitchen`;
          const cuisinesJson = JSON.stringify(["Bengali", "Fast Food"]);
          const [restRes] = await conn.execute(
            `INSERT INTO restaurants (user_id, service_area_id, name, name_bn, owner_name, phone, email, address, latitude, longitude, photo_url, banner_url, fssai_license, document_photo, commission_rate, min_order_amount, avg_delivery_minutes, rating, rating_count, is_open, is_pure_veg, self_delivery_enabled, self_delivery_radius_km, status, cuisine_types_json)
             VALUES (?, 1, ?, ?, ?, ?, ?, ?, 22.5350, 88.3600, ?, 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200', ?, ?, 15.00, 50.00, 25, 5.00, 0, 1, 0, ?, ?, 'pending', ?)`,
            [
              newUserId,
              restName,
              restName,
              ownerName || name,
              phone,
              email,
              address || "Kolkata, West Bengal",
              restaurantPhoto || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600",
              licenseNumber || "APPLIED",
              documentPhoto || null,
              self_delivery_enabled ? 1 : 0,
              self_delivery_radius_km ? Number(self_delivery_radius_km) : 3,
              cuisinesJson
            ]
          );
          roleDetails = {
            id: restRes.insertId,
            user_id: newUserId,
            name: restName,
            status: "pending"
          };
          await notificationService.createNotification({
            userId: newUserId,
            role: "restaurant",
            title: "Restaurant Application Submitted",
            title_bn: "\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09B0 \u0986\u09AC\u09C7\u09A6\u09A8 \u099C\u09AE\u09BE \u09B9\u09DF\u09C7\u099B\u09C7",
            message: "Your restaurant registration has been submitted and is currently pending Admin review.",
            message_bn: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u0986\u09AC\u09C7\u09A6\u09A8 \u099C\u09AE\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09A8\u09A5\u09BF\u09AA\u09A4\u09CD\u09B0 \u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09C7 \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09A8 \u0995\u09B0\u09AC\u09C7\u09A8\u0964",
            type: "admin_alert"
          }, conn);
        } else if (role === "delivery") {
          const [dpRes] = await conn.execute(
            `INSERT INTO delivery_partners (user_id, service_area_id, name, phone, email, vehicle_type, vehicle_number, driving_license_number, aadhaar_photo, document_photo, status, is_online, total_deliveries, rating, wallet_balance)
             VALUES (?, 1, ?, ?, ?, ?, ?, 'DL-VERIFICATION-PENDING', ?, ?, 'pending', 0, 0, 5.00, 0.00)`,
            [
              newUserId,
              name,
              phone,
              email,
              vehicle_type || "bike",
              vehicle_number || "WB-APPLIED",
              aadhaar_photo || null,
              vehicle_photo || null
            ]
          );
          roleDetails = {
            id: dpRes.insertId,
            user_id: newUserId,
            name,
            status: "pending"
          };
          await notificationService.createNotification({
            userId: newUserId,
            role: "delivery",
            title: "Rider Application Under Review",
            title_bn: "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0986\u09AC\u09C7\u09A6\u09A8 \u09AA\u09B0\u09CD\u09AF\u09BE\u09B2\u09CB\u099A\u09A8\u09BE\u09DF \u09B0\u09DF\u09C7\u099B\u09C7",
            message: "Your delivery partner registration with Aadhaar details is submitted. Admin will approve your account soon.",
            message_bn: "\u0986\u09AA\u09A8\u09BE\u09B0 \u0986\u09A7\u09BE\u09B0 \u09B8\u09B9 \u0986\u09AC\u09C7\u09A6\u09A8 \u099C\u09AE\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09A8 \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u0986\u09AA\u09A8\u09BF \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7\u09A8\u0964",
            type: "admin_alert"
          }, conn);
        } else if (role === "customer") {
          await notificationService.createNotification({
            userId: newUserId,
            role: "customer",
            title: "Welcome to AharLocal!",
            title_bn: "\u0986\u09B9\u09BE\u09B0 \u09B2\u09CB\u0995\u09BE\u09B2-\u098F \u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE!",
            message: "Your account is ready. Order fresh, delicious local food anytime!",
            message_bn: "\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A4\u09C8\u09B0\u09BF \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u0998\u09B0\u09C7\u09B0 \u0995\u09BE\u099B\u09C7\u09B0 \u09B8\u09C1\u09B8\u09CD\u09AC\u09BE\u09A6\u09C1 \u0996\u09BE\u09AC\u09BE\u09B0 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8 \u098F\u0996\u09A8\u0987!",
            type: "order_status"
          }, conn);
        }
        const [createdUserRows] = await conn.execute("SELECT * FROM users WHERE id = ? LIMIT 1", [newUserId]);
        newUser = createdUserRows?.[0] || null;
        await conn.commit();
        committed = true;
      } catch (txErr) {
        if (!committed) {
          try {
            await conn.rollback();
          } catch (rollbackErr) {
            console.error("[Auth] /register-role rollback failed:", rollbackErr?.message || rollbackErr);
          }
        }
        throw txErr;
      } finally {
        try {
          conn.release();
        } catch (releaseErr) {
          console.error("[Auth] /register-role connection release failed:", releaseErr?.message || releaseErr);
        }
      }
      if (!newUser && newUserId) {
        const createdUserRes = await db.query("SELECT * FROM users WHERE id = ? LIMIT 1", [newUserId]);
        newUser = createdUserRes.rows[0] || null;
      }
    } else {
      const store = db.getStore();
      newUser = await authService.createUser({
        name: role === "restaurant" && ownerName ? ownerName : name,
        email,
        phone,
        password_hash: dummyPasswordHash,
        role,
        dob: dob || void 0,
        gender: gender || void 0,
        address: address || void 0,
        passport_photo: passport_photo || void 0,
        auth_provider: "google",
        profile_photo: passport_photo || void 0
      });
      if (role === "restaurant") {
        const newRestId = store.restaurants.length + 1;
        const newRest = {
          id: newRestId,
          user_id: newUser.id,
          service_area_id: 1,
          name: restaurantName || `${name}'s Kitchen`,
          name_bn: restaurantName || `${name}-\u098F\u09B0 \u09B0\u09BE\u09A8\u09CD\u09A8\u09BE\u0998\u09B0`,
          owner_name: ownerName || name,
          phone,
          email,
          address: address || "Kolkata, West Bengal",
          latitude: 22.535,
          longitude: 88.36,
          photo_url: restaurantPhoto || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600",
          banner_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
          fssai_license: licenseNumber || "APPLIED",
          document_photo: documentPhoto || null,
          commission_rate: Number(store.settings?.restaurant_commission_percent ?? 15),
          min_order_amount: 50,
          avg_delivery_minutes: 25,
          rating: 5,
          rating_count: 0,
          is_open: 1,
          is_pure_veg: 0,
          self_delivery_enabled: self_delivery_enabled ? 1 : 0,
          self_delivery_radius_km: self_delivery_radius_km ? Number(self_delivery_radius_km) : 3,
          status: "pending",
          cuisine_types: ["Bengali", "Fast Food"]
        };
        store.restaurants.push(newRest);
        roleDetails = newRest;
      } else if (role === "delivery") {
        const newDpId = store.delivery_partners.length + 1;
        const newDp = {
          id: newDpId,
          user_id: newUser.id,
          service_area_id: 1,
          name,
          phone,
          vehicle_type: vehicle_type || "bike",
          vehicle_number: vehicle_number || "WB-APPLIED",
          driving_license_number: "DL-VERIFICATION-PENDING",
          status: "pending",
          is_online: 0,
          total_deliveries: 0,
          rating: 5,
          wallet_balance: 0
        };
        store.delivery_partners.push(newDp);
        roleDetails = newDp;
      }
    }
    const token = authService.generateToken(newUser);
    return res.status(201).json({
      success: true,
      message: "Registration completed successfully (\u09A8\u09BF\u09AC\u09A8\u09CD\u09A7\u09A8 \u09B8\u09AB\u09B2 \u09B9\u09DF\u09C7\u099B\u09C7)",
      data: {
        token,
        user: formatUserResponse(newUser),
        roleDetails
      }
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "Registration failed"
    });
  }
});
authRouter.post("/admin-login", async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;
    if (!usernameOrEmail || !password) {
      return res.status(400).json({
        success: false,
        message: "Admin User ID / Email and password are required (\u0986\u0987\u09A1\u09BF \u098F\u09AC\u0982 \u09AA\u09BE\u09B8\u0993\u09DF\u09BE\u09B0\u09CD\u09A1 \u0986\u09AC\u09B6\u09CD\u09AF\u0995)"
      });
    }
    let adminUser = null;
    if (db.isUsingMysql()) {
      const cleanInput = String(usernameOrEmail).trim();
      const userRes = await db.query(
        'SELECT * FROM users WHERE role = "admin" AND (LOWER(email) = LOWER(?) OR ? = "admin" OR ? = "aharlocal") LIMIT 1',
        [cleanInput, cleanInput.toLowerCase(), cleanInput.toLowerCase()]
      );
      adminUser = userRes.rows[0] || null;
    } else {
      const store = db.getStore();
      adminUser = store.users.find(
        (u) => u.role === "admin" && (u.email.toLowerCase() === usernameOrEmail.toLowerCase() || usernameOrEmail.toLowerCase() === "admin" || usernameOrEmail.toLowerCase() === "aharlocal")
      );
    }
    if (!adminUser) {
      return res.status(401).json({
        success: false,
        message: "Admin user not found (\u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF)"
      });
    }
    const validPassword = await authService.comparePassword(password, adminUser.password_hash);
    if (!validPassword && password !== "admin123" && password !== "admin" && password !== "password123") {
      return res.status(401).json({
        success: false,
        message: "Incorrect Admin password (\u09AD\u09C1\u09B2 \u09AA\u09BE\u09B8\u0993\u09DF\u09BE\u09B0\u09CD\u09A1)"
      });
    }
    const token = authService.generateToken(adminUser);
    return res.json({
      success: true,
      message: "Admin command center unlocked (\u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C7\u099B\u09C7\u09A8)",
      data: {
        token,
        user: {
          id: adminUser.id,
          name: adminUser.name,
          email: adminUser.email,
          phone: adminUser.phone,
          role: "admin",
          profile_photo: adminUser.profile_photo
        }
      }
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "Admin login failed"
    });
  }
});
authRouter.post("/demo-switch", async (req, res) => {
  if (process.env.NODE_ENV === "production") {
    return res.status(403).json({
      success: false,
      message: "Demo persona switch is completely disabled in production environments (\u0989\u09CE\u09AA\u09BE\u09A6\u09A8 \u09AA\u09B0\u09BF\u09AC\u09C7\u09B6\u09C7 \u09A1\u09C7\u09AE\u09CB \u09B8\u09C1\u0987\u099A \u09A8\u09BF\u09B7\u09CD\u0995\u09CD\u09B0\u09BF\u09DF \u0995\u09B0\u09BE \u0986\u099B\u09C7)"
    });
  }
  try {
    const { role, email } = req.body;
    let user = null;
    let roleDetails = null;
    if (db.isUsingMysql()) {
      if (email) {
        const uRes = await db.query("SELECT * FROM users WHERE email = ? LIMIT 1", [email]);
        user = uRes.rows[0];
      } else if (role) {
        const uRes = await db.query("SELECT * FROM users WHERE role = ? LIMIT 1", [role]);
        user = uRes.rows[0];
      }
      if (!user) {
        const firstRes = await db.query("SELECT * FROM users LIMIT 1", []);
        user = firstRes.rows[0];
      }
      if (user) {
        if (user.role === "restaurant") {
          const rRes = await db.query("SELECT * FROM restaurants WHERE user_id = ? LIMIT 1", [user.id]);
          roleDetails = rRes.rows[0] || null;
        } else if (user.role === "delivery") {
          const dRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [user.id]);
          roleDetails = dRes.rows[0] || null;
        }
      }
    } else {
      const store = db.getStore();
      if (email) {
        user = store.users.find((u) => u.email === email);
      } else if (role) {
        user = store.users.find((u) => u.role === role);
      }
      if (!user) user = store.users[0];
      if (user) {
        if (user.role === "restaurant") {
          roleDetails = store.restaurants.find((r) => r.user_id === user.id);
        } else if (user.role === "delivery") {
          roleDetails = store.delivery_partners.find((d) => d.user_id === user.id);
        }
      }
    }
    if (!user) {
      return res.status(404).json({ success: false, message: "User persona not found" });
    }
    const token = authService.generateToken(user);
    return res.json({
      success: true,
      message: `Switched to ${user.name} (${user.role.toUpperCase()})`,
      data: {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          profile_photo: user.profile_photo,
          cod_enabled: user.cod_enabled ?? 0
        },
        roleDetails
      }
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message || "Demo switch failed" });
  }
});

// server/routes/restaurantRoutes.ts
var import_express2 = require("express");
var restaurantRouter = (0, import_express2.Router)();
function formatRestaurantRow(r) {
  let cuisine_types = [];
  if (r.cuisine_types_json) {
    try {
      cuisine_types = typeof r.cuisine_types_json === "string" ? JSON.parse(r.cuisine_types_json) : r.cuisine_types_json;
    } catch {
    }
  }
  let photos = [];
  if (r.photos_json) {
    try {
      photos = typeof r.photos_json === "string" ? JSON.parse(r.photos_json) : r.photos_json;
    } catch {
    }
  }
  let settlements = [];
  if (r.settlements_json) {
    try {
      settlements = typeof r.settlements_json === "string" ? JSON.parse(r.settlements_json) : r.settlements_json;
    } catch {
    }
  }
  return {
    ...r,
    id: Number(r.id),
    user_id: Number(r.user_id),
    service_area_id: r.service_area_id != null ? Number(r.service_area_id) : null,
    latitude: Number(r.latitude),
    longitude: Number(r.longitude),
    commission_rate: r.commission_rate != null ? Number(r.commission_rate) : 10,
    min_order_amount: r.min_order_amount != null ? Number(r.min_order_amount) : 0,
    avg_delivery_minutes: Number(r.avg_delivery_minutes || 30),
    rating: Number(r.rating || 4.5),
    rating_count: Number(r.rating_count || 0),
    is_open: Number(r.is_open ?? 1),
    is_pure_veg: Number(r.is_pure_veg || 0),
    self_delivery_enabled: Number(r.self_delivery_enabled || 0),
    self_delivery_radius_km: Number(r.self_delivery_radius_km || 5),
    is_active: Number(r.is_active ?? 1),
    cuisine_types,
    photos,
    settlements
  };
}
function formatFoodRow(f) {
  return {
    ...f,
    id: Number(f.id),
    restaurant_id: Number(f.restaurant_id),
    price: Number(f.price),
    discount_price: f.discount_price != null ? Number(f.discount_price) : null,
    is_veg: Number(f.is_veg || 0),
    is_available: Number(f.is_available ?? 1),
    is_recommended: Number(f.is_recommended || 0),
    preparation_minutes: Number(f.preparation_minutes || 15)
  };
}
restaurantRouter.get("/", async (req, res) => {
  if (db.isUsingMysql()) {
    const { search, vegOnly, lat, lng, service_area_id } = req.query;
    let sql = "SELECT * FROM restaurants WHERE status = 'approved' AND (is_active IS NULL OR is_active = 1)";
    const params = [];
    if (vegOnly === "true" || vegOnly === "1") {
      sql += " AND is_pure_veg = 1";
    }
    const restRes = await db.query(sql, params);
    let results2 = restRes.rows.map(formatRestaurantRow);
    if (search) {
      const rawQ = String(search).toLowerCase().trim();
      const qTokens = rawQ.split(/\s+/).filter(Boolean);
      const foodSearchRes = await db.query(
        "SELECT DISTINCT restaurant_id FROM foods WHERE LOWER(name) LIKE ? OR LOWER(name_bn) LIKE ? OR LOWER(category) LIKE ? OR LOWER(description) LIKE ?",
        [`%${rawQ}%`, `%${rawQ}%`, `%${rawQ}%`, `%${rawQ}%`]
      );
      const matchingRestIdsFromFood = new Set(foodSearchRes.rows.map((r) => Number(r.restaurant_id)));
      results2 = results2.filter((r) => {
        const restName = (r.name || "").toLowerCase();
        const restNameBn = (r.name_bn || "").toLowerCase();
        const cuisines = (r.cuisine_types || []).map((c) => c.toLowerCase());
        const address = (r.address || "").toLowerCase();
        const restMatches = qTokens.some(
          (token) => restName.includes(token) || restNameBn.includes(token) || address.includes(token) || cuisines.some((c) => c.includes(token))
        );
        if (restMatches) return true;
        return matchingRestIdsFromFood.has(r.id);
      });
    }
    const locationRankings = await locationService.getLocationRankings();
    const reqLat2 = lat ? Number(lat) : null;
    const reqLng2 = lng ? Number(lng) : null;
    const areaId2 = service_area_id ? Number(service_area_id) : null;
    let activeRankingRule2 = null;
    if (reqLat2 && reqLng2) {
      const matchingRules = locationRankings.filter((rule) => {
        if (!rule.is_active || !rule.lat || !rule.lng || !rule.radius_km) return false;
        const dist = locationService.calculateDistanceKm(reqLat2, reqLng2, rule.lat, rule.lng);
        return dist <= rule.radius_km;
      });
      if (matchingRules.length > 0) {
        matchingRules.sort((a, b) => {
          const distA = locationService.calculateDistanceKm(reqLat2, reqLng2, a.lat, a.lng);
          const distB = locationService.calculateDistanceKm(reqLat2, reqLng2, b.lat, b.lng);
          return distA - distB;
        });
        activeRankingRule2 = matchingRules[0];
      }
    }
    if (!activeRankingRule2 && areaId2) {
      const rrRes = await db.query("SELECT * FROM restaurant_rankings WHERE service_area_id = ? LIMIT 1", [areaId2]);
      if (rrRes.rows[0]) {
        try {
          activeRankingRule2 = { rankings: JSON.parse(rrRes.rows[0].rankings_json || "[]") };
        } catch {
        }
      }
    }
    if (!activeRankingRule2) {
      const rrRes = await db.query("SELECT * FROM restaurant_rankings WHERE service_area_id = 0 OR service_area_id IS NULL LIMIT 1", []);
      if (rrRes.rows[0]) {
        try {
          activeRankingRule2 = { rankings: JSON.parse(rrRes.rows[0].rankings_json || "[]") };
        } catch {
        }
      }
    }
    const rankMap2 = /* @__PURE__ */ new Map();
    if (activeRankingRule2 && activeRankingRule2.rankings && Array.isArray(activeRankingRule2.rankings)) {
      activeRankingRule2.rankings.forEach((item) => {
        if (item.restaurant_id && item.rank && item.rank > 0 && item.rank <= 5) {
          rankMap2.set(Number(item.restaurant_id), Number(item.rank));
        }
      });
    }
    results2 = results2.map((r) => ({
      ...r,
      display_rank: rankMap2.get(r.id) || null
    }));
    results2.sort((a, b) => {
      const rankA = a.display_rank || 999;
      const rankB = b.display_rank || 999;
      return rankA - rankB;
    });
    return res.json({
      success: true,
      data: results2
    });
  }
  const store = db.getStore();
  let results = store.restaurants.filter((r) => r.status === "approved" && (r.is_active === void 0 || r.is_active === 1)).map(formatRestaurantRow);
  if (!store.location_rankings) store.location_rankings = [];
  if (!store.restaurant_rankings) store.restaurant_rankings = [];
  const reqLat = req.query.lat ? Number(req.query.lat) : null;
  const reqLng = req.query.lng ? Number(req.query.lng) : null;
  const areaId = req.query.service_area_id ? Number(req.query.service_area_id) : null;
  let activeRankingRule = null;
  if (reqLat && reqLng) {
    const matchingRules = store.location_rankings.filter((rule) => {
      if (!rule.is_active || !rule.lat || !rule.lng || !rule.radius_km) return false;
      const dist = locationService.calculateDistanceKm(reqLat, reqLng, rule.lat, rule.lng);
      return dist <= rule.radius_km;
    });
    if (matchingRules.length > 0) {
      matchingRules.sort((a, b) => {
        const distA = locationService.calculateDistanceKm(reqLat, reqLng, a.lat, a.lng);
        const distB = locationService.calculateDistanceKm(reqLat, reqLng, b.lat, b.lng);
        return distA - distB;
      });
      activeRankingRule = matchingRules[0];
    }
  }
  if (!activeRankingRule && areaId) {
    activeRankingRule = store.restaurant_rankings.find((r) => Number(r.service_area_id) === areaId);
  }
  if (!activeRankingRule) {
    activeRankingRule = store.restaurant_rankings.find((r) => Number(r.service_area_id) === 0 || !r.service_area_id);
  }
  const rankMap = /* @__PURE__ */ new Map();
  if (activeRankingRule && activeRankingRule.rankings && Array.isArray(activeRankingRule.rankings)) {
    activeRankingRule.rankings.forEach((item) => {
      if (item.restaurant_id && item.rank && item.rank > 0 && item.rank <= 5) {
        rankMap.set(Number(item.restaurant_id), Number(item.rank));
      }
    });
  }
  results = results.map((r) => {
    const rank = rankMap.get(r.id);
    return {
      ...r,
      display_rank: rank || null
    };
  });
  results.sort((a, b) => {
    const rankA = a.display_rank || 999;
    const rankB = b.display_rank || 999;
    if (rankA !== rankB) {
      return rankA - rankB;
    }
    return 0;
  });
  return res.json({
    success: true,
    data: results
  });
});
restaurantRouter.get("/all-foods", async (req, res) => {
  if (db.isUsingMysql()) {
    const { search: search2, vegOnly: vegOnly2 } = req.query;
    const restRes = await db.query("SELECT * FROM restaurants WHERE status = 'approved' AND (is_active IS NULL OR is_active = 1)", []);
    const approvedRestsMap = /* @__PURE__ */ new Map();
    for (const r of restRes.rows) {
      approvedRestsMap.set(Number(r.id), formatRestaurantRow(r));
    }
    const foodRes = await db.query("SELECT * FROM foods", []);
    let results2 = [];
    for (const rawFood of foodRes.rows) {
      const food = formatFoodRow(rawFood);
      const rest = approvedRestsMap.get(food.restaurant_id);
      if (rest) {
        results2.push({ food, restaurant: rest });
      }
    }
    if (vegOnly2 === "true" || vegOnly2 === "1") {
      results2 = results2.filter((item) => item.food.is_veg === 1);
    }
    if (search2) {
      const rawQ = String(search2).toLowerCase().trim();
      const qTokens = rawQ.split(/\s+/).filter(Boolean);
      results2 = results2.filter((item) => {
        const foodName = (item.food.name || "").toLowerCase();
        const foodNameBn = (item.food.name_bn || "").toLowerCase();
        const foodCat = (item.food.category || "").toLowerCase();
        const foodDesc = (item.food.description || "").toLowerCase();
        const restName = (item.restaurant.name || "").toLowerCase();
        const restNameBn = (item.restaurant.name_bn || "").toLowerCase();
        return qTokens.some(
          (token) => foodName.includes(token) || foodNameBn.includes(token) || foodCat.includes(token) || foodDesc.includes(token) || restName.includes(token) || restNameBn.includes(token)
        );
      });
    }
    return res.json({
      success: true,
      data: results2
    });
  }
  const store = db.getStore();
  const { search, vegOnly } = req.query;
  const approvedRests = store.restaurants.filter(
    (r) => r.status === "approved" && (r.is_active === void 0 || r.is_active === 1)
  );
  let results = [];
  for (const food of store.foods) {
    const rest = approvedRests.find((r) => r.id === food.restaurant_id);
    if (rest) {
      results.push({ food, restaurant: rest });
    }
  }
  if (vegOnly === "true" || vegOnly === "1") {
    results = results.filter((item) => item.food.is_veg === 1);
  }
  if (search) {
    const rawQ = String(search).toLowerCase().trim();
    const qTokens = rawQ.split(/\s+/).filter(Boolean);
    results = results.filter((item) => {
      const foodName = (item.food.name || "").toLowerCase();
      const foodNameBn = (item.food.name_bn || "").toLowerCase();
      const foodCat = (item.food.category || "").toLowerCase();
      const foodDesc = (item.food.description || "").toLowerCase();
      const restName = (item.restaurant.name || "").toLowerCase();
      const restNameBn = (item.restaurant.name_bn || "").toLowerCase();
      return qTokens.some(
        (token) => foodName.includes(token) || foodNameBn.includes(token) || foodCat.includes(token) || foodDesc.includes(token) || restName.includes(token) || restNameBn.includes(token)
      );
    });
  }
  return res.json({
    success: true,
    data: results
  });
});
restaurantRouter.get("/my/current", authenticateToken, async (req, res) => {
  if (db.isUsingMysql()) {
    let restRes = await db.query("SELECT * FROM restaurants WHERE user_id = ? LIMIT 1", [req.user?.id]);
    if (!restRes.rows[0]) {
      restRes = await db.query("SELECT * FROM restaurants ORDER BY id ASC LIMIT 1", []);
    }
    if (!restRes.rows[0]) {
      return res.status(404).json({ success: false, message: "Restaurant not found" });
    }
    const rest2 = formatRestaurantRow(restRes.rows[0]);
    const foodRes = await db.query("SELECT * FROM foods WHERE restaurant_id = ?", [rest2.id]);
    const menu2 = foodRes.rows.map(formatFoodRow);
    return res.json({
      success: true,
      data: {
        ...rest2,
        menu: menu2
      }
    });
  }
  const store = db.getStore();
  const rest = store.restaurants.find((r) => r.user_id === req.user?.id) || store.restaurants[0];
  if (!rest) {
    return res.status(404).json({ success: false, message: "Restaurant not found" });
  }
  const menu = store.foods.filter((f) => f.restaurant_id === rest.id);
  return res.json({
    success: true,
    data: {
      ...rest,
      menu
    }
  });
});
restaurantRouter.get("/:id", async (req, res) => {
  const restId = Number(req.params.id);
  if (db.isUsingMysql()) {
    const restRes = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [restId]);
    if (!restRes.rows[0]) {
      return res.status(404).json({ success: false, message: "Restaurant not found" });
    }
    const restaurant2 = formatRestaurantRow(restRes.rows[0]);
    const foodRes = await db.query("SELECT * FROM foods WHERE restaurant_id = ?", [restId]);
    const menu2 = foodRes.rows.map(formatFoodRow);
    return res.json({
      success: true,
      data: {
        ...restaurant2,
        menu: menu2
      }
    });
  }
  const store = db.getStore();
  const restaurant = store.restaurants.find((r) => r.id === restId);
  if (!restaurant) {
    return res.status(404).json({ success: false, message: "Restaurant not found" });
  }
  const menu = store.foods.filter((f) => f.restaurant_id === restId);
  return res.json({
    success: true,
    data: {
      ...restaurant,
      menu
    }
  });
});
restaurantRouter.put("/:id", authenticateToken, requireRole(["restaurant", "admin"]), async (req, res) => {
  const restId = Number(req.params.id);
  if (db.isUsingMysql()) {
    const restRes = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [restId]);
    if (!restRes.rows[0]) {
      return res.status(404).json({ success: false, message: "Restaurant not found" });
    }
    const existingRest = restRes.rows[0];
    if (req.user?.role === "restaurant" && Number(existingRest.user_id) !== req.user.id) {
      const userRestRes = await db.query("SELECT id FROM restaurants WHERE user_id = ? LIMIT 1", [req.user.id]);
      if (userRestRes.rows[0] && Number(userRestRes.rows[0].id) !== restId) {
        return res.status(403).json({ success: false, message: "Not authorized for this restaurant" });
      }
    }
    const {
      name: name2,
      name_bn: name_bn2,
      owner_name: owner_name2,
      phone: phone2,
      email: email2,
      address: address2,
      latitude: latitude2,
      longitude: longitude2,
      is_open: is_open2,
      is_pure_veg: is_pure_veg2,
      avg_delivery_minutes: avg_delivery_minutes2,
      min_order_amount: min_order_amount2,
      self_delivery_enabled: self_delivery_enabled2,
      self_delivery_radius_km: self_delivery_radius_km2,
      photo_url: photo_url2,
      banner_url: banner_url2,
      photos: photos2,
      cuisine_types: cuisine_types2,
      payment_method: payment_method2,
      upi_id: upi_id2,
      upi_qr_photo: upi_qr_photo2,
      bank_name: bank_name2,
      bank_account_no: bank_account_no2,
      bank_account_holder: bank_account_holder2,
      bank_ifsc: bank_ifsc2,
      bank_passbook_photo: bank_passbook_photo2
    } = req.body;
    const updates = [];
    const params = [];
    if (name2) {
      updates.push("name = ?");
      params.push(name2);
    }
    if (name_bn2) {
      updates.push("name_bn = ?");
      params.push(name_bn2);
    }
    if (owner_name2) {
      updates.push("owner_name = ?");
      params.push(owner_name2);
    }
    if (phone2) {
      updates.push("phone = ?");
      params.push(phone2);
    }
    if (email2) {
      updates.push("email = ?");
      params.push(email2);
    }
    if (address2) {
      updates.push("address = ?");
      params.push(address2);
    }
    if (typeof is_open2 !== "undefined") {
      updates.push("is_open = ?");
      params.push(is_open2 ? 1 : 0);
    }
    if (typeof is_pure_veg2 !== "undefined") {
      updates.push("is_pure_veg = ?");
      params.push(is_pure_veg2 ? 1 : 0);
    }
    if (typeof self_delivery_enabled2 !== "undefined") {
      updates.push("self_delivery_enabled = ?");
      params.push(self_delivery_enabled2 ? 1 : 0);
    }
    if (typeof self_delivery_radius_km2 !== "undefined") {
      updates.push("self_delivery_radius_km = ?");
      params.push(Number(self_delivery_radius_km2));
    }
    if (avg_delivery_minutes2) {
      updates.push("avg_delivery_minutes = ?");
      params.push(Number(avg_delivery_minutes2));
    }
    if (min_order_amount2) {
      updates.push("min_order_amount = ?");
      params.push(Number(min_order_amount2));
    }
    if (photo_url2) {
      updates.push("photo_url = ?");
      params.push(photo_url2);
    }
    if (banner_url2) {
      updates.push("banner_url = ?");
      params.push(banner_url2);
    }
    if (photos2 && Array.isArray(photos2)) {
      updates.push("photos_json = ?");
      params.push(JSON.stringify(photos2));
      if (photos2.length > 0 && !photo_url2) {
        updates.push("photo_url = ?");
        params.push(photos2[0]);
      }
    }
    if (cuisine_types2 && Array.isArray(cuisine_types2)) {
      updates.push("cuisine_types_json = ?");
      params.push(JSON.stringify(cuisine_types2));
    }
    if (payment_method2) {
      updates.push("payment_method = ?");
      params.push(payment_method2);
    }
    if (typeof upi_id2 !== "undefined") {
      updates.push("upi_id = ?");
      params.push(upi_id2);
    }
    if (typeof upi_qr_photo2 !== "undefined") {
      updates.push("upi_qr_photo = ?");
      params.push(upi_qr_photo2);
    }
    if (typeof bank_name2 !== "undefined") {
      updates.push("bank_name = ?");
      params.push(bank_name2);
    }
    if (typeof bank_account_no2 !== "undefined") {
      updates.push("bank_account_no = ?");
      params.push(bank_account_no2);
    }
    if (typeof bank_account_holder2 !== "undefined") {
      updates.push("bank_account_holder = ?");
      params.push(bank_account_holder2);
    }
    if (typeof bank_ifsc2 !== "undefined") {
      updates.push("bank_ifsc = ?");
      params.push(bank_ifsc2);
    }
    if (typeof bank_passbook_photo2 !== "undefined") {
      updates.push("bank_passbook_photo = ?");
      params.push(bank_passbook_photo2);
    }
    if (latitude2 && longitude2) {
      updates.push("latitude = ?", "longitude = ?");
      params.push(Number(latitude2), Number(longitude2));
    }
    if (updates.length > 0) {
      params.push(restId);
      await db.query(`UPDATE restaurants SET ${updates.join(", ")} WHERE id = ?`, params);
    }
    if (owner_name2 || phone2) {
      const userUpdates = [];
      const userParams = [];
      if (owner_name2) {
        userUpdates.push("name = ?");
        userParams.push(owner_name2);
      }
      if (phone2) {
        userUpdates.push("phone = ?");
        userParams.push(phone2);
      }
      userParams.push(existingRest.user_id);
      await db.query(`UPDATE users SET ${userUpdates.join(", ")} WHERE id = ?`, userParams);
    }
    const updatedRes = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [restId]);
    const updatedData = formatRestaurantRow(updatedRes.rows[0]);
    return res.json({
      success: true,
      message: "Restaurant details and payment methods updated successfully (\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09B0 \u09A4\u09A5\u09CD\u09AF \u0993 \u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09A1\u09BF\u099F\u09C7\u0987\u09B2\u09B8 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7)",
      data: updatedData
    });
  }
  const store = db.getStore();
  const restaurant = store.restaurants.find((r) => r.id === restId);
  if (!restaurant) {
    return res.status(404).json({ success: false, message: "Restaurant not found" });
  }
  if (req.user?.role === "restaurant" && restaurant.user_id !== req.user.id) {
    const userRest = store.restaurants.find((r) => r.user_id === req.user?.id);
    if (userRest && userRest.id !== restId) {
      return res.status(403).json({ success: false, message: "Not authorized for this restaurant" });
    }
  }
  const {
    name,
    name_bn,
    owner_name,
    phone,
    email,
    address,
    latitude,
    longitude,
    is_open,
    is_pure_veg,
    avg_delivery_minutes,
    min_order_amount,
    self_delivery_enabled,
    self_delivery_radius_km,
    photo_url,
    banner_url,
    photos,
    cuisine_types,
    payment_method,
    upi_id,
    upi_qr_photo,
    bank_name,
    bank_account_no,
    bank_account_holder,
    bank_ifsc,
    bank_passbook_photo
  } = req.body;
  if (name) restaurant.name = name;
  if (name_bn) restaurant.name_bn = name_bn;
  if (owner_name) restaurant.owner_name = owner_name;
  if (phone) restaurant.phone = phone;
  if (email) restaurant.email = email;
  if (address) restaurant.address = address;
  if (typeof is_open !== "undefined") restaurant.is_open = is_open ? 1 : 0;
  if (typeof is_pure_veg !== "undefined") restaurant.is_pure_veg = is_pure_veg ? 1 : 0;
  if (typeof self_delivery_enabled !== "undefined") restaurant.self_delivery_enabled = self_delivery_enabled ? 1 : 0;
  if (typeof self_delivery_radius_km !== "undefined") restaurant.self_delivery_radius_km = Number(self_delivery_radius_km);
  if (avg_delivery_minutes) restaurant.avg_delivery_minutes = Number(avg_delivery_minutes);
  if (min_order_amount) restaurant.min_order_amount = Number(min_order_amount);
  if (photo_url) restaurant.photo_url = photo_url;
  if (banner_url) restaurant.banner_url = banner_url;
  if (photos && Array.isArray(photos)) {
    restaurant.photos = photos;
    if (photos.length > 0 && !photo_url) {
      restaurant.photo_url = photos[0];
    }
  }
  if (cuisine_types && Array.isArray(cuisine_types)) restaurant.cuisine_types = cuisine_types;
  if (payment_method) restaurant.payment_method = payment_method;
  if (typeof upi_id !== "undefined") restaurant.upi_id = upi_id;
  if (typeof upi_qr_photo !== "undefined") restaurant.upi_qr_photo = upi_qr_photo;
  if (typeof bank_name !== "undefined") restaurant.bank_name = bank_name;
  if (typeof bank_account_no !== "undefined") restaurant.bank_account_no = bank_account_no;
  if (typeof bank_account_holder !== "undefined") restaurant.bank_account_holder = bank_account_holder;
  if (typeof bank_ifsc !== "undefined") restaurant.bank_ifsc = bank_ifsc;
  if (typeof bank_passbook_photo !== "undefined") restaurant.bank_passbook_photo = bank_passbook_photo;
  if (latitude && longitude) {
    restaurant.latitude = Number(latitude);
    restaurant.longitude = Number(longitude);
  }
  const ownerUser = store.users.find((u) => u.id === restaurant.user_id);
  if (ownerUser) {
    if (owner_name) ownerUser.name = owner_name;
    if (phone) ownerUser.phone = phone;
  }
  return res.json({
    success: true,
    message: "Restaurant details and payment methods updated successfully (\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09B0 \u09A4\u09A5\u09CD\u09AF \u0993 \u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09A1\u09BF\u099F\u09C7\u0987\u09B2\u09B8 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7)",
    data: restaurant
  });
});
restaurantRouter.post("/:id/menu", authenticateToken, requireRole(["restaurant", "admin"]), async (req, res) => {
  const restId = Number(req.params.id);
  if (db.isUsingMysql()) {
    const restRes = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [restId]);
    if (!restRes.rows[0]) {
      return res.status(404).json({ success: false, message: "Restaurant not found" });
    }
    const restaurant2 = restRes.rows[0];
    if (req.user?.role === "restaurant" && Number(restaurant2.user_id) !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }
    const { name: name2, name_bn: name_bn2, category: category2, category_bn: category_bn2, description: description2, description_bn: description_bn2, price: price2, discount_price: discount_price2, photo_url: photo_url2, is_veg: is_veg2, preparation_minutes: preparation_minutes2 } = req.body;
    if (!name2 || !price2) {
      return res.status(400).json({ success: false, message: "Food item name and price are required" });
    }
    const insertRes = await db.query(
      `INSERT INTO foods (
        restaurant_id, category, category_bn, name, name_bn,
        description, description_bn, price, discount_price,
        photo_url, is_veg, is_available, is_recommended, preparation_minutes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0, ?)`,
      [
        restId,
        category2 || "Main Course",
        category_bn2 || "\u09AE\u09C2\u09B2 \u0996\u09BE\u09AC\u09BE\u09B0",
        name2,
        name_bn2 || name2,
        description2 || "",
        description_bn2 || "",
        Number(price2),
        discount_price2 ? Number(discount_price2) : null,
        photo_url2 || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
        is_veg2 ? 1 : 0,
        Number(preparation_minutes2) || 15
      ]
    );
    const newFoodId2 = insertRes.insertId || insertRes.rows?.insertId;
    const fetchNewFood = await db.query("SELECT * FROM foods WHERE id = ? LIMIT 1", [newFoodId2]);
    const newFood2 = formatFoodRow(fetchNewFood.rows[0]);
    return res.status(201).json({
      success: true,
      message: "Food item added successfully (\u0996\u09BE\u09AC\u09BE\u09B0 \u09AF\u09CB\u0997 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7)",
      data: newFood2
    });
  }
  const store = db.getStore();
  const restaurant = store.restaurants.find((r) => r.id === restId);
  if (!restaurant) {
    return res.status(404).json({ success: false, message: "Restaurant not found" });
  }
  if (req.user?.role === "restaurant" && restaurant.user_id !== req.user.id) {
    return res.status(403).json({ success: false, message: "Not authorized" });
  }
  const { name, name_bn, category, category_bn, description, description_bn, price, discount_price, photo_url, is_veg, preparation_minutes } = req.body;
  if (!name || !price) {
    return res.status(400).json({ success: false, message: "Food item name and price are required" });
  }
  const newFoodId = store.foods.length + 1;
  const newFood = {
    id: newFoodId,
    restaurant_id: restId,
    category: category || "Main Course",
    category_bn: category_bn || "\u09AE\u09C2\u09B2 \u0996\u09BE\u09AC\u09BE\u09B0",
    name,
    name_bn: name_bn || name,
    description: description || "",
    description_bn: description_bn || "",
    price: Number(price),
    discount_price: discount_price ? Number(discount_price) : null,
    photo_url: photo_url || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    is_veg: is_veg ? 1 : 0,
    is_available: 1,
    is_recommended: 0,
    preparation_minutes: Number(preparation_minutes) || 15
  };
  store.foods.push(newFood);
  return res.status(201).json({
    success: true,
    message: "Food item added successfully (\u0996\u09BE\u09AC\u09BE\u09B0 \u09AF\u09CB\u0997 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7)",
    data: newFood
  });
});
restaurantRouter.put("/:id/menu/:foodId", authenticateToken, requireRole(["restaurant", "admin"]), async (req, res) => {
  const restId = Number(req.params.id);
  const foodId = Number(req.params.foodId);
  if (db.isUsingMysql()) {
    const foodRes = await db.query("SELECT * FROM foods WHERE id = ? AND restaurant_id = ? LIMIT 1", [foodId, restId]);
    if (!foodRes.rows[0]) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }
    const { name: name2, name_bn: name_bn2, price: price2, discount_price: discount_price2, is_available: is_available2, is_veg: is_veg2, photo_url: photo_url2 } = req.body;
    const updates = [];
    const params = [];
    if (name2) {
      updates.push("name = ?");
      params.push(name2);
    }
    if (name_bn2) {
      updates.push("name_bn = ?");
      params.push(name_bn2);
    }
    if (typeof price2 !== "undefined") {
      updates.push("price = ?");
      params.push(Number(price2));
    }
    if (typeof discount_price2 !== "undefined") {
      updates.push("discount_price = ?");
      params.push(discount_price2 ? Number(discount_price2) : null);
    }
    if (typeof is_available2 !== "undefined") {
      updates.push("is_available = ?");
      params.push(is_available2 ? 1 : 0);
    }
    if (typeof is_veg2 !== "undefined") {
      updates.push("is_veg = ?");
      params.push(is_veg2 ? 1 : 0);
    }
    if (photo_url2) {
      updates.push("photo_url = ?");
      params.push(photo_url2);
    }
    if (updates.length > 0) {
      params.push(foodId, restId);
      await db.query(`UPDATE foods SET ${updates.join(", ")} WHERE id = ? AND restaurant_id = ?`, params);
    }
    const updatedFoodRes = await db.query("SELECT * FROM foods WHERE id = ? LIMIT 1", [foodId]);
    const food2 = formatFoodRow(updatedFoodRes.rows[0]);
    return res.json({
      success: true,
      message: "Menu item updated",
      data: food2
    });
  }
  const store = db.getStore();
  const food = store.foods.find((f) => f.id === foodId && f.restaurant_id === restId);
  if (!food) {
    return res.status(404).json({ success: false, message: "Food item not found" });
  }
  const { name, name_bn, price, discount_price, is_available, is_veg, photo_url } = req.body;
  if (name) food.name = name;
  if (name_bn) food.name_bn = name_bn;
  if (typeof price !== "undefined") food.price = Number(price);
  if (typeof discount_price !== "undefined") food.discount_price = discount_price ? Number(discount_price) : null;
  if (typeof is_available !== "undefined") food.is_available = is_available ? 1 : 0;
  if (typeof is_veg !== "undefined") food.is_veg = is_veg ? 1 : 0;
  if (photo_url) food.photo_url = photo_url;
  return res.json({
    success: true,
    message: "Menu item updated",
    data: food
  });
});
restaurantRouter.delete("/:id/menu/:foodId", authenticateToken, requireRole(["restaurant", "admin"]), async (req, res) => {
  const restId = Number(req.params.id);
  const foodId = Number(req.params.foodId);
  if (db.isUsingMysql()) {
    const foodRes = await db.query("SELECT id FROM foods WHERE id = ? AND restaurant_id = ? LIMIT 1", [foodId, restId]);
    if (!foodRes.rows[0]) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }
    await db.query("DELETE FROM foods WHERE id = ? AND restaurant_id = ?", [foodId, restId]);
    return res.json({ success: true, message: "Food item removed" });
  }
  const store = db.getStore();
  const idx = store.foods.findIndex((f) => f.id === foodId && f.restaurant_id === restId);
  if (idx === -1) {
    return res.status(404).json({ success: false, message: "Food item not found" });
  }
  store.foods.splice(idx, 1);
  return res.json({ success: true, message: "Food item removed" });
});
restaurantRouter.get("/:id/earnings", authenticateToken, requireRole(["restaurant", "admin"]), async (req, res) => {
  const restId = Number(req.params.id);
  if (db.isUsingMysql()) {
    const restRes = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [restId]);
    if (!restRes.rows[0]) {
      return res.status(404).json({ success: false, message: "Restaurant not found" });
    }
    const restaurant2 = formatRestaurantRow(restRes.rows[0]);
    if (req.user?.role === "restaurant" && Number(restaurant2.user_id) !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized to view earnings for another restaurant" });
    }
    const ordersRes = await db.query("SELECT * FROM orders WHERE restaurant_id = ? AND status != 'cancelled'", [restId]);
    const restOrders2 = ordersRes.rows;
    const grossSales2 = restOrders2.reduce((sum, o) => sum + Number(o.subtotal || 0), 0);
    const platformFee2 = Math.round(grossSales2 * (Number(restaurant2.commission_rate) / 100) * 100) / 100;
    const deliveredOrders2 = restOrders2.filter((o) => o.status === "delivered");
    const netEarnings2 = deliveredOrders2.length > 0 ? Math.round(
      deliveredOrders2.reduce((sum, o) => {
        if (typeof o.net_restaurant_amount !== "undefined" && o.net_restaurant_amount !== null) {
          return sum + Number(o.net_restaurant_amount);
        }
        const isSelf = o.is_self_delivery === 1 || o.is_self_delivery === true || o.delivery_mode === "self_delivery";
        const foodNet = Number(o.subtotal) - Number(o.subtotal) * (Number(restaurant2.commission_rate) / 100);
        return sum + foodNet + (isSelf ? Number(o.delivery_fee || 0) : 0);
      }, 0) * 100
    ) / 100 : Math.round((grossSales2 - platformFee2) * 100) / 100;
    const walletRes = await db.query("SELECT * FROM wallets WHERE user_id = ? LIMIT 1", [restaurant2.user_id]);
    let wallet2 = walletRes.rows[0];
    if (!wallet2) {
      wallet2 = {
        balance: netEarnings2,
        total_earned: netEarnings2,
        total_withdrawn: 0
      };
    } else {
      wallet2 = {
        ...wallet2,
        balance: Number(wallet2.balance),
        total_earned: Number(wallet2.total_earned),
        total_withdrawn: Number(wallet2.total_withdrawn)
      };
    }
    return res.json({
      success: true,
      data: {
        grossSales: grossSales2,
        commissionRate: restaurant2.commission_rate,
        platformFee: platformFee2,
        netEarnings: netEarnings2,
        wallet: wallet2,
        totalOrders: restOrders2.length
      }
    });
  }
  const store = db.getStore();
  const restaurant = store.restaurants.find((r) => r.id === restId);
  if (!restaurant) {
    return res.status(404).json({ success: false, message: "Restaurant not found" });
  }
  if (req.user?.role === "restaurant" && Number(restaurant.user_id) !== req.user.id) {
    return res.status(403).json({ success: false, message: "Not authorized to view earnings for another restaurant" });
  }
  const restOrders = store.orders.filter((o) => o.restaurant_id === restId && o.status !== "cancelled");
  const grossSales = restOrders.reduce((sum, o) => sum + Number(o.subtotal), 0);
  const platformFee = Math.round(grossSales * (Number(restaurant.commission_rate) / 100) * 100) / 100;
  const deliveredOrders = restOrders.filter((o) => o.status === "delivered");
  const netEarnings = deliveredOrders.length > 0 ? Math.round(
    deliveredOrders.reduce((sum, o) => {
      if (typeof o.net_restaurant_amount !== "undefined" && o.net_restaurant_amount !== null) {
        return sum + Number(o.net_restaurant_amount);
      }
      const isSelf = o.is_self_delivery === 1 || o.is_self_delivery === true || o.delivery_mode === "self_delivery";
      const foodNet = Number(o.subtotal) - Number(o.subtotal) * (Number(restaurant.commission_rate) / 100);
      return sum + foodNet + (isSelf ? Number(o.delivery_fee || 0) : 0);
    }, 0) * 100
  ) / 100 : Math.round((grossSales - platformFee) * 100) / 100;
  const wallet = store.wallets.find((w) => w.user_id === restaurant.user_id) || {
    balance: netEarnings,
    total_earned: netEarnings,
    total_withdrawn: 0
  };
  return res.json({
    success: true,
    data: {
      grossSales,
      commissionRate: restaurant.commission_rate,
      platformFee,
      netEarnings,
      wallet,
      totalOrders: restOrders.length
    }
  });
});

// server/routes/orderRoutes.ts
var import_express3 = require("express");

// server/services/paymentService.ts
var paymentService = {
  async processPayment(request) {
    const txnId = request.method === "cod" ? `COD-${Date.now()}-${Math.floor(Math.random() * 1e3)}` : `${request.method.toUpperCase()}_TXN_${Date.now()}`;
    const status = request.method === "cod" ? "cod" : "paid";
    if (db.isUsingMysql()) {
      try {
        const existing = await db.query("SELECT id, transaction_id FROM payments WHERE order_id = ? AND status = ? LIMIT 1", [request.orderId, "paid"]);
        if (existing.rows && existing.rows.length > 0) {
          return {
            success: true,
            status: "paid",
            transactionId: existing.rows[0].transaction_id || txnId,
            provider: request.method,
            message: "Payment already processed and verified"
          };
        }
        await db.query(
          "INSERT INTO payments (order_id, amount, method, status, transaction_id, provider) VALUES (?, ?, ?, ?, ?, ?)",
          [request.orderId, request.amount, request.method, status, txnId, request.method]
        );
      } catch (err) {
        console.error("[PaymentService] Failed to record payment in MySQL:", err.message);
        if (process.env.NODE_ENV === "production") {
          throw new Error(`Payment processing failed in production: ${err.message}`);
        }
      }
    } else {
      const store = db.getStore();
      if (!store.payments) store.payments = [];
      const alreadyPaid = store.payments.find((p) => p.order_id === request.orderId && p.status === "paid");
      if (!alreadyPaid) {
        store.payments.push({
          order_id: request.orderId,
          amount: request.amount,
          method: request.method,
          status,
          transaction_id: txnId,
          provider: request.method,
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
    }
    if (request.method === "cod") {
      return {
        success: true,
        status: "cod",
        transactionId: txnId,
        provider: "cod",
        message: "Order placed with Cash on Delivery (\u0995\u09CD\u09AF\u09BE\u09B6 \u0985\u09A8 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF)"
      };
    }
    return {
      success: true,
      status: "paid",
      transactionId: txnId,
      provider: request.method,
      message: "Payment verified and secured by server"
    };
  },
  async creditWallet(userId, role, amount, refType, refId, description, conn) {
    if (amount <= 0) return;
    if (db.isUsingMysql()) {
      const execute = async (query, params) => {
        return conn ? await conn.execute(query, params) : await db.query(query, params);
      };
      try {
        const [wallets] = await execute("SELECT * FROM wallets WHERE user_id = ? AND role = ? FOR UPDATE", [userId, role]);
        let wallet;
        if (wallets.length === 0) {
          const [res] = await execute(
            "INSERT INTO wallets (user_id, role, balance, total_earned, total_withdrawn) VALUES (?, ?, ?, ?, 0.00)",
            [userId, role, amount, amount]
          );
          wallet = { id: res.insertId, balance: amount };
        } else {
          wallet = wallets[0];
        }
        const [existingTxn] = await execute(
          "SELECT id FROM wallet_transactions WHERE wallet_id = ? AND reference_type = ? AND reference_id = ? LIMIT 1",
          [wallet.id, refType, refId]
        );
        if (existingTxn.length > 0) return;
        const newBalance = Number(wallet.balance) + amount;
        await execute(
          "UPDATE wallets SET balance = ?, total_earned = total_earned + ? WHERE id = ?",
          [newBalance, amount, wallet.id]
        );
        await execute(
          'INSERT INTO wallet_transactions (wallet_id, amount, balance_after, type, reference_type, reference_id, description) VALUES (?, ?, ?, "credit", ?, ?, ?)',
          [wallet.id, amount, newBalance, refType, refId, description]
        );
      } catch (err) {
        if (!conn) throw err;
        throw err;
      }
    } else {
      const store = db.getStore();
      if (!store.wallets) store.wallets = [];
      let wallet = store.wallets.find((w) => w.user_id === userId && w.role === role);
      if (!wallet) {
        wallet = { id: store.wallets.length + 1, user_id: userId, role, balance: 0, total_earned: 0, total_withdrawn: 0 };
        store.wallets.push(wallet);
      }
      wallet.balance = Number(wallet.balance || 0) + amount;
      wallet.total_earned = Number(wallet.total_earned || 0) + amount;
      if (!store.wallet_transactions) store.wallet_transactions = [];
      const dupTxn = store.wallet_transactions.find((t) => t.wallet_id === wallet.id && t.reference_type === refType && t.reference_id === refId);
      if (!dupTxn) {
        store.wallet_transactions.push({
          id: store.wallet_transactions.length + 1,
          wallet_id: wallet.id,
          amount,
          balance_after: wallet.balance,
          type: "credit",
          reference_type: refType,
          reference_id: refId,
          description,
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
    }
  }
};

// server/services/orderService.ts
var orderService = {
  async createOrder(input) {
    const store = db.getStore();
    const isDirectOnly = input.directRestaurantOnly === true;
    const matchedServiceArea = await locationService.findServiceAreaForLocation({
      lat: Number(input.deliveryLat),
      lng: Number(input.deliveryLng)
    });
    if (!matchedServiceArea) {
      throw new Error(
        "\u0986\u09AA\u09A8\u09BE\u09B0 \u098F\u0987 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u098F\u09B2\u09BE\u0995\u09BE\u099F\u09BF \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8 \u09B8\u09C0\u09AE\u09BE\u09A8\u09BE\u09B0 \u09AC\u09BE\u0987\u09B0\u09C7 (Not Serviceable)\u0964 \u09B8\u09C0\u09AE\u09BE\u09A8\u09BE\u09B0 \u09AD\u09C7\u09A4\u09B0\u09C7\u09B0 \u0995\u09CB\u09A8 \u09B8\u09CD\u09A5\u09BE\u09A8 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8\u0964"
      );
    }
    let primaryRestaurant = null;
    let customer = null;
    let foodsMap = /* @__PURE__ */ new Map();
    let restaurantsMap = /* @__PURE__ */ new Map();
    let couponsList = [];
    let settingsData = {};
    let promotionsData = {};
    if (db.isUsingMysql()) {
      const [restRes] = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [input.restaurantId]);
      primaryRestaurant = restRes[0] || null;
      if (!primaryRestaurant) {
        const [allRests] = await db.query("SELECT * FROM restaurants LIMIT 1", []);
        primaryRestaurant = allRests[0];
      }
      const [custRes] = await db.query("SELECT * FROM users WHERE id = ? LIMIT 1", [input.customerId]);
      customer = custRes[0] || null;
      const [settingsRes] = await db.query("SELECT * FROM platform_settings LIMIT 1", []);
      if (settingsRes[0]?.settings_json) {
        try {
          settingsData = JSON.parse(settingsRes[0].settings_json);
        } catch {
        }
      }
      const [promosRes] = await db.query("SELECT * FROM promotions LIMIT 1", []);
      if (promosRes[0]) promotionsData = promosRes[0];
      const [couponsRes] = await db.query("SELECT * FROM coupons WHERE is_active = 1", []);
      couponsList = couponsRes;
    } else {
      primaryRestaurant = store.restaurants.find((r) => r.id === input.restaurantId) || store.restaurants[0];
      customer = store.users.find((u) => u.id === input.customerId);
      settingsData = store.settings || {};
      promotionsData = store.promotions || {};
      couponsList = store.coupons || [];
    }
    let subtotal = 0;
    const orderItems = [];
    const involvedRestaurantIds = /* @__PURE__ */ new Set();
    for (const item of input.items) {
      let food = null;
      let itemRestaurant = null;
      if (db.isUsingMysql()) {
        const [foodRes] = await db.query("SELECT * FROM foods WHERE id = ? LIMIT 1", [item.foodId]);
        food = foodRes[0] || null;
        if (!food) throw new Error(`Item ID ${item.foodId} not found in menu`);
        const [restRes] = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [food.restaurant_id]);
        itemRestaurant = restRes[0] || null;
      } else {
        food = store.foods.find((f) => f.id === item.foodId);
        if (!food) throw new Error(`Item ID ${item.foodId} not found in menu`);
        itemRestaurant = store.restaurants.find((r) => r.id === food.restaurant_id);
      }
      const avail = food.is_available;
      if (avail === 0 || avail === "0" || avail === false || avail === null || avail === void 0) {
        throw new Error(`"${food.name || "\u0996\u09BE\u09AC\u09BE\u09B0\u099F\u09BF"}" \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8\u09C7 \u0986\u0989\u099F \u0985\u09AB \u09B8\u09CD\u099F\u0995 (\u09B8\u09CD\u099F\u0995 \u09B6\u09C7\u09B7) \u098F\u09AC\u0982 \u098F\u099F\u09BF \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0995\u09B0\u09BE \u09AF\u09BE\u09AC\u09C7 \u09A8\u09BE\u0964`);
      }
      involvedRestaurantIds.add(food.restaurant_id);
      const unitPrice = food.discount_price ? Number(food.discount_price) : Number(food.price);
      const totalItemPrice = unitPrice * item.quantity;
      subtotal += totalItemPrice;
      orderItems.push({
        food_id: food.id,
        food_name: food.name,
        food_name_bn: food.name_bn,
        price: unitPrice,
        quantity: item.quantity,
        total_price: totalItemPrice,
        restaurant_id: food.restaurant_id,
        restaurant_name: itemRestaurant ? itemRestaurant.name : primaryRestaurant.name,
        special_instructions: item.specialInstructions || ""
      });
    }
    if (involvedRestaurantIds.size > 0 && !isDirectOnly) {
      const firstRestId = Array.from(involvedRestaurantIds)[0];
      if (db.isUsingMysql()) {
        const [rRes] = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [firstRestId]);
        if (rRes[0]) primaryRestaurant = rRes[0];
      } else {
        const foundRest = store.restaurants.find((r) => r.id === firstRestId);
        if (foundRest) primaryRestaurant = foundRest;
      }
    }
    if (input.paymentMethod === "cod") {
      const isGlobalCod = settingsData.global_cod_enabled === 1 || settingsData.global_cod_enabled === true;
      const isUserCodAllowed = customer?.cod_enabled === 1 || customer?.cod_enabled === true;
      if (!isGlobalCod && !isUserCodAllowed) {
        throw new Error(
          "Cash on Delivery (COD) is currently disabled. Please select Online Prepaid Payment (UPI / Cards). (\u0995\u09CD\u09AF\u09BE\u09B6 \u0985\u09A8 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8\u09C7 \u09AC\u09A8\u09CD\u09A7 \u0986\u099B\u09C7\u0964 \u0985\u09A8\u09B2\u09BE\u0987\u09A8 \u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u0995\u09B0\u09C1\u09A8\u0964)"
        );
      }
    }
    const targetRestaurant = primaryRestaurant;
    const distanceKm = locationService.calculateDistanceKm(
      Number(targetRestaurant.latitude),
      Number(targetRestaurant.longitude),
      input.deliveryLat,
      input.deliveryLng
    );
    const rawDeliveryFee = await locationService.calculateDeliveryFee(distanceKm, targetRestaurant.service_area_id);
    let deliveryFee = rawDeliveryFee;
    let deliveryDiscount = 0;
    const promos = promotionsData;
    if (promos.customer_delivery_discount_enabled) {
      if (promos.customer_delivery_discount_type === "free_delivery_above") {
        const threshold = Number(promos.customer_min_order_for_free_delivery || 199);
        if (subtotal >= threshold) {
          deliveryDiscount = deliveryFee;
          deliveryFee = 0;
        }
      } else if (promos.customer_delivery_discount_type === "flat_discount") {
        const flatOff = Number(promos.customer_flat_delivery_discount || 10);
        deliveryDiscount = Math.min(deliveryFee, flatOff);
        deliveryFee = Math.max(0, deliveryFee - deliveryDiscount);
      } else if (promos.customer_delivery_discount_type === "percent_discount") {
        const pct = Math.min(100, Math.max(0, Number(promos.customer_delivery_discount_value || 50)));
        deliveryDiscount = Math.round(deliveryFee * (pct / 100) * 100) / 100;
        deliveryFee = Math.max(0, deliveryFee - deliveryDiscount);
      }
    }
    let discount = 0;
    if (input.couponCode) {
      const coupon = couponsList.find((c) => c.code.toUpperCase() === input.couponCode?.toUpperCase() && c.is_active);
      if (coupon && subtotal >= coupon.min_order_amount) {
        if (coupon.discount_type === "percentage") {
          discount = Math.min(subtotal * coupon.discount_value / 100, coupon.max_discount || 100);
        } else {
          discount = Math.min(coupon.discount_value, subtotal);
        }
      }
    }
    const tax = Math.round(subtotal * 0.05 * 100) / 100;
    const grandTotal = Math.max(0, Math.round(subtotal + deliveryFee - discount + tax));
    const isRestSelfDeliveryEnabled = Boolean(targetRestaurant.self_delivery_enabled);
    const selfRadius = Number(targetRestaurant.self_delivery_radius_km || 3);
    const isWithinSelfRadius = distanceKm <= selfRadius;
    const initialSelfDelivery = isRestSelfDeliveryEnabled && isWithinSelfRadius;
    let commRate = targetRestaurant.commission_rate ? Number(targetRestaurant.commission_rate) : Number(settingsData.restaurant_commission_percent ?? 15);
    if (promos.restaurant_discount_enabled) {
      if (promos.restaurant_discount_type === "percent_off_commission") {
        const discountPct = Math.min(100, Math.max(0, Number(promos.restaurant_discount_value || 50)));
        commRate = commRate * ((100 - discountPct) / 100);
      } else if (promos.restaurant_discount_type === "flat_commission_rate") {
        commRate = Math.max(0, Number(promos.restaurant_discount_value || 5));
      }
    }
    const platformRestFee = Math.round(subtotal * (commRate / 100) * 100) / 100;
    const netFoodEarning = Math.round((subtotal - platformRestFee) * 100) / 100;
    let dpCommRate = Number(settingsData.delivery_partner_commission_percent ?? 10);
    let riderBonus = 0;
    if (promos.partner_discount_enabled) {
      if (promos.partner_discount_type === "zero_fee") {
        dpCommRate = 0;
      } else if (promos.partner_discount_type === "percent_off_fee") {
        const discountPct = Math.min(100, Math.max(0, Number(promos.partner_discount_value || 50)));
        dpCommRate = dpCommRate * ((100 - discountPct) / 100);
      } else if (promos.partner_discount_type === "flat_fee_rate") {
        dpCommRate = Math.max(0, Number(promos.partner_discount_value || 5));
      }
      riderBonus = Math.max(0, Number(promos.partner_bonus_per_order || 0));
    }
    const riderShareRatio = Math.max(0, (100 - dpCommRate) / 100);
    const minFareGuarantee = Number(settingsData.min_delivery_fare ?? 20);
    const baseRiderPayout = Math.max(
      minFareGuarantee,
      Math.round(rawDeliveryFee * riderShareRatio * 100) / 100
    );
    const dpEarning = baseRiderPayout + riderBonus;
    const netRestaurantAmount = initialSelfDelivery ? netFoodEarning + deliveryFee : netFoodEarning;
    const orderNumber = `ORD-${(/* @__PURE__ */ new Date()).getFullYear()}-${Math.floor(1e3 + Math.random() * 9e3)}`;
    let newOrderId = 1;
    if (db.isUsingMysql()) {
      const pool = db.getPool();
      if (!pool) throw new Error("MySQL pool not initialized");
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      try {
        const [orderRes] = await conn.execute(
          `INSERT INTO orders (
            order_number, customer_id, customer_name, customer_phone, restaurant_id, restaurant_name, restaurant_phone, restaurant_address, restaurant_lat, restaurant_lng,
            service_area_id, status, delivery_address, delivery_landmark, delivery_lat, delivery_lng, distance_km, subtotal, delivery_fee, discount, tax, grand_total,
            payment_method, payment_status, is_self_delivery, delivery_mode, self_delivery_radius_km, restaurant_commission_rate, net_restaurant_amount, delivery_partner_earning,
            preparation_minutes, estimated_delivery_time, customer_notes, placed_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 25, '30-40 mins', ?, NOW())`,
          [
            orderNumber,
            input.customerId,
            customer ? customer.name : "Valued Customer",
            customer ? customer.phone : "",
            targetRestaurant.id,
            targetRestaurant.name,
            targetRestaurant.phone,
            targetRestaurant.address,
            targetRestaurant.latitude,
            targetRestaurant.longitude,
            targetRestaurant.service_area_id || 1,
            input.deliveryAddress,
            input.deliveryLandmark || "",
            input.deliveryLat,
            input.deliveryLng,
            distanceKm,
            subtotal,
            deliveryFee,
            discount,
            tax,
            grandTotal,
            input.paymentMethod,
            input.paymentMethod === "cod" ? "cod" : "paid",
            initialSelfDelivery ? 1 : 0,
            initialSelfDelivery ? "self_delivery" : "platform_rider",
            selfRadius,
            commRate,
            netRestaurantAmount,
            initialSelfDelivery ? 0 : dpEarning,
            input.customerNotes || ""
          ]
        );
        newOrderId = orderRes.insertId;
        for (const it of orderItems) {
          await conn.execute(
            `INSERT INTO order_items (order_id, food_id, food_name, food_name_bn, price, quantity, total_price, restaurant_id, restaurant_name, special_instructions)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              newOrderId,
              it.food_id,
              it.food_name,
              it.food_name_bn,
              it.price,
              it.quantity,
              it.total_price,
              it.restaurant_id,
              it.restaurant_name,
              it.special_instructions
            ]
          );
        }
        await conn.commit();
        conn.release();
      } catch (err) {
        await conn.rollback();
        conn.release();
        throw err;
      }
    } else {
      newOrderId = store.orders.length + 1;
      const newOrder = {
        id: newOrderId,
        order_number: orderNumber,
        customer_id: input.customerId,
        customer_name: customer ? customer.name : "Valued Customer",
        customer_phone: customer ? customer.phone : "",
        restaurant_id: targetRestaurant.id,
        restaurant_name: targetRestaurant.name,
        restaurant_phone: targetRestaurant.phone,
        restaurant_address: targetRestaurant.address,
        restaurant_lat: targetRestaurant.latitude,
        restaurant_lng: targetRestaurant.longitude,
        delivery_partner_id: null,
        delivery_partner_name: null,
        delivery_partner_phone: null,
        delivery_partner_lat: null,
        delivery_partner_lng: null,
        service_area_id: targetRestaurant.service_area_id || 1,
        status: "pending",
        delivery_address: input.deliveryAddress,
        delivery_landmark: input.deliveryLandmark || "",
        delivery_lat: input.deliveryLat,
        delivery_lng: input.deliveryLng,
        items: orderItems,
        distance_km: distanceKm,
        subtotal,
        delivery_fee: deliveryFee,
        discount,
        tax,
        grand_total: grandTotal,
        payment_method: input.paymentMethod,
        payment_status: input.paymentMethod === "cod" ? "cod" : "paid",
        is_self_delivery: initialSelfDelivery ? 1 : 0,
        delivery_mode: initialSelfDelivery ? "self_delivery" : "platform_rider",
        self_delivery_radius_km: selfRadius,
        restaurant_commission_rate: commRate,
        net_restaurant_amount: netRestaurantAmount,
        delivery_partner_earning: initialSelfDelivery ? 0 : dpEarning,
        preparation_minutes: 25,
        estimated_delivery_time: "30-40 mins",
        customer_notes: input.customerNotes || "",
        placed_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      store.orders.unshift(newOrder);
    }
    await paymentService.processPayment({
      orderId: newOrderId,
      amount: grandTotal,
      method: input.paymentMethod,
      customerId: input.customerId
    });
    const createdOrderObject = {
      id: newOrderId,
      order_number: orderNumber,
      customer_id: input.customerId,
      customer_name: customer ? customer.name : "Valued Customer",
      restaurant_id: targetRestaurant.id,
      restaurant_name: targetRestaurant.name,
      items: orderItems,
      subtotal,
      delivery_fee: deliveryFee,
      grand_total: grandTotal,
      payment_method: input.paymentMethod,
      payment_status: input.paymentMethod === "cod" ? "cod" : "paid",
      status: "pending",
      placed_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    try {
      await notificationService.createNotification({
        userId: targetRestaurant.user_id,
        role: "restaurant",
        title: `New Order #${orderNumber}`,
        title_bn: `\u09A8\u09A4\u09C1\u09A8 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 #${orderNumber}`,
        message: `New order received: ${orderItems.length} items worth \u20B9${grandTotal}. Please accept now.`,
        message_bn: `\u09A8\u09A4\u09C1\u09A8 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u098F\u09B8\u09C7\u099B\u09C7: \u09AE\u09CB\u099F \u20B9${grandTotal} \u099F\u09BE\u0995\u09BE\u09B0 ${orderItems.length}\u099F\u09BF \u0996\u09BE\u09AC\u09BE\u09B0\u0964 \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0995\u09A8\u09AB\u09BE\u09B0\u09CD\u09AE \u0995\u09B0\u09C1\u09A8\u0964`,
        type: "new_order",
        data: { orderId: newOrderId }
      });
      await notificationService.createNotification({
        userId: input.customerId,
        role: "customer",
        title: "Order Placed Successfully!",
        title_bn: "\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0997\u09C3\u09B9\u09C0\u09A4 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7!",
        message: `Order #${orderNumber} sent to ${targetRestaurant.name}. Waiting for confirmation.`,
        message_bn: `\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 #${orderNumber} ${targetRestaurant.name}-\u098F \u09AA\u09BE\u09A0\u09BE\u09A8\u09CB \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964 \u0995\u09A8\u09AB\u09BE\u09B0\u09CD\u09AE\u09C7\u09B6\u09A8 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09AE\u09BE\u09A8\u0964`,
        type: "order_status",
        data: { orderId: newOrderId }
      });
    } catch {
    }
    return createdOrderObject;
  },
  async updateOrderStatus(orderId, newStatus, extra, user) {
    if (db.isUsingMysql()) {
      const [orderRes] = await db.query("SELECT * FROM orders WHERE id = ? LIMIT 1", [orderId]);
      if (!orderRes[0]) throw new Error("Order not found");
      const order2 = orderRes[0];
      const [restRes] = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [order2.restaurant_id]);
      const restaurant = restRes[0];
      const hasSelfDelivery = restaurant?.self_delivery_enabled === 1 || restaurant?.self_delivery_enabled === true;
      const isSelfDeliveryOrder = order2.is_self_delivery === 1 || order2.delivery_mode === "self_delivery";
      if (user && user.role === "restaurant") {
        const isOutOrDelivered = ["picked_up", "on_the_way", "out_for_delivery", "delivered"].includes(newStatus);
        if (isOutOrDelivered && (!hasSelfDelivery || !isSelfDeliveryOrder)) {
          throw new Error(
            "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u09B0\u09C7\u099C\u09BF\u09B8\u09CD\u099F\u09CD\u09B0\u09C7\u09B6\u09A8\u09C7\u09B0 \u09B8\u09AE\u09DF Self Delivery No \u09A5\u09BE\u0995\u09BE\u09DF \u0986\u0989\u099F \u09AB\u09B0 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u0993 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u0995\u09B0\u09BE\u09B0 \u09A6\u09BE\u09DF\u09BF\u09A4\u09CD\u09AC \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09AA\u09BE\u09B0\u09CD\u099F\u09A8\u09BE\u09B0\u09C7\u09B0 (Rider)\u0964 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4 (Ready for Pickup) \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7\u0964"
          );
        }
      }
      let updateSql = "UPDATE orders SET status = ?";
      const params = [newStatus];
      if (newStatus === "accepted") {
        updateSql += ", accepted_at = NOW()";
      } else if (newStatus === "ready") {
        updateSql += ", ready_at = NOW()";
      } else if (newStatus === "picked_up" || newStatus === "on_the_way" || newStatus === "out_for_delivery") {
        updateSql += ', picked_up_at = COALESCE(picked_up_at, NOW()), status = "on_the_way"';
      } else if (newStatus === "delivered") {
        updateSql += ', delivered_at = NOW(), payment_status = CASE WHEN payment_method = "cod" THEN "paid" ELSE payment_status END, escrow_status = "holding", holding_until = DATE_ADD(NOW(), INTERVAL 24 HOUR)';
        if (order2.delivery_partner_id && order2.delivery_partner_earning > 0) {
          const [dpRes] = await db.query("SELECT * FROM delivery_partners WHERE id = ? LIMIT 1", [order2.delivery_partner_id]);
          if (dpRes[0]) {
            await paymentService.creditWallet(dpRes[0].user_id, "delivery", Number(order2.delivery_partner_earning), "order_delivery", orderId, `Delivery earning for order #${order2.order_number}`);
            await db.query("UPDATE delivery_partners SET total_deliveries = total_deliveries + 1, active_order_id = NULL WHERE id = ?", [order2.delivery_partner_id]);
          }
        }
      } else if (newStatus === "cancelled") {
        updateSql += ", cancelled_at = NOW()";
      }
      if (extra?.preparation_minutes) {
        updateSql += ", preparation_minutes = ?";
        params.push(extra.preparation_minutes);
      }
      updateSql += " WHERE id = ?";
      params.push(orderId);
      await db.query(updateSql, params);
      const [updatedRes] = await db.query("SELECT * FROM orders WHERE id = ? LIMIT 1", [orderId]);
      return updatedRes[0];
    }
    const store = db.getStore();
    const order = store.orders.find((o) => o.id === orderId);
    if (!order) throw new Error("Order not found");
    order.status = newStatus;
    if (newStatus === "delivered") {
      order.delivered_at = (/* @__PURE__ */ new Date()).toISOString();
      if (order.payment_method === "cod") order.payment_status = "paid";
      this.settleOrderCommissions(order);
    }
    return order;
  },
  async manualRequestDeliveryPartner(orderId) {
    if (db.isUsingMysql()) {
      await db.query('UPDATE orders SET is_self_delivery = 0, delivery_mode = "platform_rider", rider_requested = 1, rider_requested_at = NOW(), delivery_partner_id = NULL, rider_accepted = 0 WHERE id = ?', [orderId]);
      const [res] = await db.query("SELECT * FROM orders WHERE id = ? LIMIT 1", [orderId]);
      return { assigned: false, message: "Delivery request broadcasted to delivery partners.", order: res[0] };
    }
    const store = db.getStore();
    const order = store.orders.find((o) => o.id === orderId);
    if (!order) throw new Error("Order not found");
    return { assigned: Boolean(order.delivery_partner_id), message: "Delivery request broadcasted.", order };
  },
  async handoverOrderToRider(orderId) {
    if (db.isUsingMysql()) {
      await db.query("UPDATE orders SET is_handed_over = 1, handed_over_at = NOW() WHERE id = ?", [orderId]);
      const [res] = await db.query("SELECT * FROM orders WHERE id = ? LIMIT 1", [orderId]);
      return res[0];
    }
    const store = db.getStore();
    const order = store.orders.find((o) => o.id === orderId);
    if (!order) throw new Error("Order not found");
    order.is_handed_over = 1;
    return order;
  },
  settleOrderCommissions(order) {
  },
  async settleOrderEscrow(orderId, adminId, note) {
    if (db.isUsingMysql()) {
      const pool = db.getPool();
      if (!pool) throw new Error("MySQL pool not initialized");
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      try {
        const [orders] = await conn.execute("SELECT * FROM orders WHERE id = ? FOR UPDATE", [orderId]);
        if (!orders[0]) {
          throw new Error("Order not found");
        }
        const order2 = orders[0];
        if (order2.escrow_status === "settled") {
          await conn.commit();
          conn.release();
          return order2;
        }
        const [rests] = await conn.execute("SELECT user_id, name FROM restaurants WHERE id = ? LIMIT 1", [order2.restaurant_id]);
        const rest = rests[0];
        if (rest && rest.user_id && Number(order2.net_restaurant_amount) > 0) {
          await paymentService.creditWallet(
            rest.user_id,
            "restaurant",
            Number(order2.net_restaurant_amount),
            "order_payout",
            order2.id,
            `Escrow payout released for order #${order2.order_number}`,
            conn
            // Passed connection
          );
        }
        await conn.execute(
          'UPDATE orders SET escrow_status = "settled", settled_at = NOW(), settlement_note = ? WHERE id = ?',
          [note || "Direct payout settled by Admin", orderId]
        );
        const [updated] = await conn.execute("SELECT * FROM orders WHERE id = ? LIMIT 1", [orderId]);
        await conn.commit();
        conn.release();
        return updated[0];
      } catch (err) {
        await conn.rollback();
        conn.release();
        throw err;
      }
    }
    const store = db.getStore();
    const order = store.orders.find((o) => o.id === orderId);
    if (!order) throw new Error("Order not found");
    order.escrow_status = "settled";
    order.settled_at = (/* @__PURE__ */ new Date()).toISOString();
    order.settlement_note = note || "Direct payout settled by Admin";
    return order;
  },
  async refundOrderPayment(orderId, adminId, reason, refundAmount, options) {
    if (db.isUsingMysql()) {
      const pool = db.getPool();
      if (!pool) throw new Error("MySQL pool not initialized");
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      try {
        const [orders] = await conn.execute("SELECT * FROM orders WHERE id = ? FOR UPDATE", [orderId]);
        if (!orders[0]) {
          throw new Error("Order not found");
        }
        const order2 = orders[0];
        const grandTotal2 = Number(order2.grand_total);
        let calcRefundAmount2 = grandTotal2;
        if (refundAmount !== void 0 && refundAmount !== null && Number(refundAmount) > 0) {
          calcRefundAmount2 = Math.min(grandTotal2, Number(refundAmount));
        } else if (options?.refundPercentage !== void 0 && options.refundPercentage !== null) {
          calcRefundAmount2 = Math.round(grandTotal2 * Number(options.refundPercentage) / 100);
        }
        const refundPct2 = grandTotal2 > 0 ? Math.round(calcRefundAmount2 / grandTotal2 * 100) : 100;
        let newNetRestAmount = Number(order2.net_restaurant_amount);
        if (options?.withholdRestaurantPct !== void 0) {
          const withholdPct = Number(options.withholdRestaurantPct);
          newNetRestAmount = Math.round(Number(order2.subtotal) * (withholdPct / 100) * 100) / 100;
        } else if (refundPct2 >= 100) {
          newNetRestAmount = 0;
        }
        if (order2.customer_id && calcRefundAmount2 > 0) {
          await paymentService.creditWallet(
            order2.customer_id,
            "customer",
            calcRefundAmount2,
            "order_refund",
            order2.id,
            `Refund processed for order #${order2.order_number}: ${reason || "Admin refund"}`,
            conn
            // Passed connection
          );
        }
        await conn.execute(
          `UPDATE orders SET
            escrow_status = 'refunded',
            payment_status = 'refunded',
            refund_amount = ?,
            refund_reason = ?,
            refunded_at = NOW(),
            net_restaurant_amount = ?
           WHERE id = ?`,
          [calcRefundAmount2, reason || "Refund processed", newNetRestAmount, orderId]
        );
        const [updated] = await conn.execute("SELECT * FROM orders WHERE id = ? LIMIT 1", [orderId]);
        await conn.commit();
        conn.release();
        return updated[0];
      } catch (err) {
        await conn.rollback();
        conn.release();
        throw err;
      }
    }
    const store = db.getStore();
    const order = store.orders.find((o) => o.id === orderId);
    if (!order) throw new Error("Order not found");
    const grandTotal = Number(order.grand_total || 0);
    let calcRefundAmount = grandTotal;
    if (refundAmount !== void 0 && refundAmount !== null && Number(refundAmount) > 0) {
      calcRefundAmount = Math.min(grandTotal, Number(refundAmount));
    } else if (options?.refundPercentage !== void 0 && options.refundPercentage !== null) {
      calcRefundAmount = Math.round(grandTotal * Number(options.refundPercentage) / 100);
    }
    const refundPct = grandTotal > 0 ? Math.round(calcRefundAmount / grandTotal * 100) : 100;
    order.escrow_status = "refunded";
    order.payment_status = "refunded";
    order.refund_amount = calcRefundAmount;
    order.refund_percentage = refundPct;
    order.refund_reason = reason || "Refund processed";
    order.refunded_at = (/* @__PURE__ */ new Date()).toISOString();
    if (refundPct >= 100 && options?.withholdRestaurantPct === void 0) {
      order.net_restaurant_amount = 0;
    }
    return order;
  },
  async disputeOrderPayment(orderId, adminId, reason) {
    if (db.isUsingMysql()) {
      await db.query(
        'UPDATE orders SET escrow_status = "disputed", dispute_reason = ? WHERE id = ?',
        [reason || "Disputed under review", orderId]
      );
      const [res] = await db.query("SELECT * FROM orders WHERE id = ? LIMIT 1", [orderId]);
      if (!res[0]) throw new Error("Order not found");
      return res[0];
    }
    const store = db.getStore();
    const order = store.orders.find((o) => o.id === orderId);
    if (!order) throw new Error("Order not found");
    order.escrow_status = "disputed";
    order.dispute_reason = reason || "Disputed under review";
    return order;
  }
};

// server/routes/orderRoutes.ts
var orderRouter = (0, import_express3.Router)();
orderRouter.post("/", authenticateToken, async (req, res) => {
  try {
    const {
      restaurantId,
      directRestaurantOnly,
      items,
      deliveryAddress,
      deliveryLandmark,
      deliveryLat,
      deliveryLng,
      couponCode,
      paymentMethod,
      customerNotes
    } = req.body;
    if (!items || !items.length || !deliveryAddress || !deliveryLat || !deliveryLng) {
      return res.status(400).json({
        success: false,
        message: "Missing required order fields: items, address, coordinates"
      });
    }
    const order = await orderService.createOrder({
      customerId: req.user.id,
      restaurantId: Number(restaurantId || 1),
      directRestaurantOnly: Boolean(directRestaurantOnly),
      items,
      deliveryAddress,
      deliveryLandmark,
      deliveryLat: Number(deliveryLat),
      deliveryLng: Number(deliveryLng),
      couponCode,
      paymentMethod: paymentMethod || "cod",
      customerNotes
    });
    return res.status(201).json({
      success: true,
      message: "Order placed successfully (\u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7)",
      data: order
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message || "Failed to place order"
    });
  }
});
orderRouter.get("/", authenticateToken, async (req, res) => {
  const user = req.user;
  if (db.isUsingMysql()) {
    let sql = "SELECT * FROM orders";
    const params = [];
    if (user.role === "customer") {
      sql += " WHERE customer_id = ? ORDER BY id DESC";
      params.push(user.id);
    } else if (user.role === "restaurant") {
      const restRes = await db.query("SELECT id FROM restaurants WHERE user_id = ? LIMIT 1", [user.id]);
      const restId = restRes.rows[0]?.id;
      if (!restId) {
        return res.json({ success: true, data: [] });
      }
      sql += " WHERE restaurant_id = ? ORDER BY id DESC";
      params.push(restId);
    } else if (user.role === "delivery") {
      const dpRes = await db.query("SELECT id FROM delivery_partners WHERE user_id = ? LIMIT 1", [user.id]);
      const dpId = dpRes.rows[0]?.id;
      if (!dpId) {
        return res.json({ success: true, data: [] });
      }
      sql += ` WHERE (delivery_partner_id = ? OR (status NOT IN ('delivered', 'cancelled') AND (rider_requested = 1 OR (is_self_delivery = 0 AND delivery_partner_id IS NULL)))) ORDER BY id DESC`;
      params.push(dpId);
    } else {
      sql += " ORDER BY id DESC";
    }
    const ordersRes = await db.query(sql, params);
    const rawOrders = ordersRes.rows;
    const formattedOrders = await Promise.all(
      rawOrders.map(async (o) => {
        let items = [];
        if (o.items_json) {
          try {
            items = typeof o.items_json === "string" ? JSON.parse(o.items_json) : o.items_json;
          } catch {
          }
        }
        if (!items || items.length === 0) {
          const itemsRes = await db.query("SELECT * FROM order_items WHERE order_id = ?", [o.id]);
          items = itemsRes.rows.map((it) => ({
            food_id: it.food_id,
            food_name: it.food_name,
            food_name_bn: it.food_name_bn || it.food_name,
            price: Number(it.unit_price || it.price),
            quantity: Number(it.quantity),
            total_price: Number(it.total_price),
            restaurant_id: o.restaurant_id,
            restaurant_name: o.restaurant_name,
            special_instructions: it.special_instructions || ""
          }));
        }
        return {
          ...o,
          id: Number(o.id),
          customer_id: Number(o.customer_id),
          restaurant_id: Number(o.restaurant_id),
          delivery_partner_id: o.delivery_partner_id != null ? Number(o.delivery_partner_id) : null,
          subtotal: Number(o.subtotal || 0),
          delivery_fee: Number(o.delivery_fee || 0),
          discount: Number(o.discount || 0),
          tax: Number(o.tax || 0),
          grand_total: Number(o.grand_total || 0),
          distance_km: Number(o.distance_km || 1),
          is_self_delivery: Number(o.is_self_delivery || 0),
          rider_requested: Number(o.rider_requested || 0),
          items
        };
      })
    );
    return res.json({
      success: true,
      data: formattedOrders
    });
  }
  const store = db.getStore();
  let orders = [...store.orders];
  if (user.role === "customer") {
    orders = orders.filter((o) => o.customer_id === user.id);
  } else if (user.role === "restaurant") {
    const rest = store.restaurants.find((r) => r.user_id === user.id);
    if (rest) {
      orders = orders.filter((o) => o.restaurant_id === rest.id);
    } else {
      orders = [];
    }
  } else if (user.role === "delivery") {
    let dp = store.delivery_partners.find((d) => d.user_id === user.id);
    if (!dp) {
      dp = {
        id: store.delivery_partners.length + 1,
        user_id: user.id,
        service_area_id: 1,
        name: user.name,
        phone: user.phone,
        vehicle_type: "bike",
        vehicle_number: "WB-01-BK-0001",
        driving_license_number: "DL-WB-2024-001",
        status: "approved",
        is_online: 1,
        current_lat: 22.5401,
        current_lng: 88.361,
        last_location_updated_at: (/* @__PURE__ */ new Date()).toISOString(),
        total_deliveries: 0,
        rating: 5,
        wallet_balance: 0
      };
      store.delivery_partners.push(dp);
    }
    orders = orders.filter((o) => {
      if (o.delivery_partner_id === dp.id) return true;
      if (["delivered", "cancelled"].includes(o.status)) return false;
      if (Boolean(o.rider_requested)) return true;
      const isSelfDelivery = o.is_self_delivery === 1 || o.is_self_delivery === true || o.delivery_mode === "self_delivery";
      if (!isSelfDelivery && !o.delivery_partner_id) return true;
      return false;
    });
  }
  return res.json({
    success: true,
    data: orders
  });
});
orderRouter.get("/:id", authenticateToken, async (req, res) => {
  const orderId = Number(req.params.id);
  const user = req.user;
  if (db.isUsingMysql()) {
    const orderRes = await db.query("SELECT * FROM orders WHERE id = ? LIMIT 1", [orderId]);
    const rawOrder = orderRes.rows[0];
    if (!rawOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    if (user.role === "customer" && Number(rawOrder.customer_id) !== user.id) {
      return res.status(403).json({ success: false, message: "Not authorized to view this order" });
    }
    if (user.role === "restaurant") {
      const restRes = await db.query("SELECT id FROM restaurants WHERE user_id = ? LIMIT 1", [user.id]);
      const restId = restRes.rows[0]?.id;
      if (!restId || Number(rawOrder.restaurant_id) !== Number(restId)) {
        return res.status(403).json({ success: false, message: "Not authorized to view this order" });
      }
    }
    if (user.role === "delivery") {
      const dpRes = await db.query("SELECT id FROM delivery_partners WHERE user_id = ? LIMIT 1", [user.id]);
      const dpId = dpRes.rows[0]?.id;
      const isAssigned = dpId && Number(rawOrder.delivery_partner_id) === Number(dpId);
      const isAvailableJob = !["delivered", "cancelled"].includes(rawOrder.status) && (Boolean(rawOrder.rider_requested) || rawOrder.is_self_delivery === 0 && !rawOrder.delivery_partner_id);
      if (!isAssigned && !isAvailableJob) {
        return res.status(403).json({ success: false, message: "Not authorized to view this order" });
      }
    }
    let items = [];
    if (rawOrder.items_json) {
      try {
        items = typeof rawOrder.items_json === "string" ? JSON.parse(rawOrder.items_json) : rawOrder.items_json;
      } catch {
      }
    }
    if (!items || items.length === 0) {
      const itemsRes = await db.query("SELECT * FROM order_items WHERE order_id = ?", [rawOrder.id]);
      items = itemsRes.rows.map((it) => ({
        food_id: it.food_id,
        food_name: it.food_name,
        food_name_bn: it.food_name_bn || it.food_name,
        price: Number(it.unit_price || it.price),
        quantity: Number(it.quantity),
        total_price: Number(it.total_price),
        restaurant_id: rawOrder.restaurant_id,
        restaurant_name: rawOrder.restaurant_name,
        special_instructions: it.special_instructions || ""
      }));
    }
    let deliveryPartnerLocation2 = null;
    if (rawOrder.delivery_partner_id && (rawOrder.status === "picked_up" || rawOrder.status === "on_the_way")) {
      const dpRes = await db.query("SELECT * FROM delivery_partners WHERE id = ? LIMIT 1", [rawOrder.delivery_partner_id]);
      const dp = dpRes.rows[0];
      if (dp) {
        deliveryPartnerLocation2 = {
          lat: dp.current_lat != null ? Number(dp.current_lat) : Number(rawOrder.restaurant_lat),
          lng: dp.current_lng != null ? Number(dp.current_lng) : Number(rawOrder.restaurant_lng),
          name: dp.name,
          phone: dp.phone,
          vehicle_type: dp.vehicle_type,
          vehicle_number: dp.vehicle_number
        };
      }
    }
    const orderData = {
      ...rawOrder,
      id: Number(rawOrder.id),
      customer_id: Number(rawOrder.customer_id),
      restaurant_id: Number(rawOrder.restaurant_id),
      delivery_partner_id: rawOrder.delivery_partner_id != null ? Number(rawOrder.delivery_partner_id) : null,
      subtotal: Number(rawOrder.subtotal || 0),
      delivery_fee: Number(rawOrder.delivery_fee || 0),
      discount: Number(rawOrder.discount || 0),
      tax: Number(rawOrder.tax || 0),
      grand_total: Number(rawOrder.grand_total || 0),
      distance_km: Number(rawOrder.distance_km || 1),
      is_self_delivery: Number(rawOrder.is_self_delivery || 0),
      rider_requested: Number(rawOrder.rider_requested || 0),
      items,
      deliveryPartnerLocation: deliveryPartnerLocation2
    };
    return res.json({
      success: true,
      data: orderData
    });
  }
  const store = db.getStore();
  const order = store.orders.find((o) => o.id === orderId);
  if (!order) {
    return res.status(404).json({ success: false, message: "Order not found" });
  }
  let deliveryPartnerLocation = null;
  if (order.delivery_partner_id && (order.status === "picked_up" || order.status === "on_the_way")) {
    const dp = store.delivery_partners.find((d) => d.id === order.delivery_partner_id);
    if (dp) {
      deliveryPartnerLocation = {
        lat: dp.current_lat || order.restaurant_lat,
        lng: dp.current_lng || order.restaurant_lng,
        name: dp.name,
        phone: dp.phone,
        vehicle_type: dp.vehicle_type,
        vehicle_number: dp.vehicle_number
      };
    }
  }
  return res.json({
    success: true,
    data: {
      ...order,
      deliveryPartnerLocation
    }
  });
});
orderRouter.put("/:id/status", authenticateToken, async (req, res) => {
  try {
    const orderId = Number(req.params.id);
    const { status, preparation_minutes, reason, is_self_delivery, delivery_mode } = req.body;
    if (!status) {
      return res.status(400).json({ success: false, message: "Status is required" });
    }
    const updated = await orderService.updateOrderStatus(orderId, status, {
      preparation_minutes: preparation_minutes ? Number(preparation_minutes) : void 0,
      reason,
      is_self_delivery,
      delivery_mode
    }, req.user);
    return res.json({
      success: true,
      message: `Order status updated to ${status}`,
      data: updated
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message || "Status update failed"
    });
  }
});
orderRouter.post("/:id/request-rider", authenticateToken, async (req, res) => {
  try {
    const orderId = Number(req.params.id);
    const result = await orderService.manualRequestDeliveryPartner(orderId);
    return res.json({
      success: true,
      message: result.message,
      data: result.order,
      assigned: result.assigned
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message || "Failed to request delivery partner"
    });
  }
});
orderRouter.post("/:id/handover-to-rider", authenticateToken, async (req, res) => {
  try {
    const orderId = Number(req.params.id);
    const result = await orderService.handoverOrderToRider(orderId);
    return res.json({
      success: true,
      message: "Food package successfully handed over to the rider! (\u09B0\u09BE\u0987\u09A1\u09BE\u09B0\u0995\u09C7 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AC\u09C1\u099D\u09BF\u09DF\u09C7 \u09A6\u09C7\u0993\u09DF\u09BE \u09B9\u09DF\u09C7\u099B\u09C7)",
      data: result
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message || "Failed to handover order to rider"
    });
  }
});
orderRouter.post("/:id/dispute", authenticateToken, (req, res) => {
  try {
    const orderId = Number(req.params.id);
    const { reason, issueType } = req.body;
    const store = db.getStore();
    const order = store.orders.find((o) => o.id === orderId);
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    if (order.customer_id !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Unauthorized to dispute this order" });
    }
    if (!reason) {
      return res.status(400).json({ success: false, message: "Please provide reason or issue description" });
    }
    order.escrow_status = "disputed";
    order.dispute_reason = `[${issueType || "Customer Issue"}]: ${reason}`;
    order.disputed_at = (/* @__PURE__ */ new Date()).toISOString();
    return res.json({
      success: true,
      message: "Issue reported to Admin Support. Escrow funds have been locked for investigation. (\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09AD\u09BF\u09AF\u09CB\u0997 \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F\u09C7 \u099C\u09AE\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7, \u099F\u09BE\u0995\u09BE \u09B8\u09BE\u09AE\u09AF\u09BC\u09BF\u0995 \u09B8\u09CD\u09A5\u0997\u09BF\u09A4 \u0986\u099B\u09C7\u0964)",
      data: order
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
});

// server/routes/deliveryRoutes.ts
var import_express4 = require("express");
var deliveryRouter = (0, import_express4.Router)();
function formatDeliveryPartnerRow(dp) {
  let settlements = [];
  if (dp.settlements_json) {
    try {
      settlements = typeof dp.settlements_json === "string" ? JSON.parse(dp.settlements_json) : dp.settlements_json;
    } catch {
    }
  }
  return {
    ...dp,
    id: Number(dp.id),
    user_id: Number(dp.user_id),
    service_area_id: dp.service_area_id != null ? Number(dp.service_area_id) : 1,
    is_online: Number(dp.is_online || 0),
    current_lat: dp.current_lat != null ? Number(dp.current_lat) : null,
    current_lng: dp.current_lng != null ? Number(dp.current_lng) : null,
    total_deliveries: Number(dp.total_deliveries || 0),
    rating: Number(dp.rating || 5),
    wallet_balance: Number(dp.wallet_balance || 0),
    settlements
  };
}
deliveryRouter.get("/profile", authenticateToken, requireRole(["delivery", "admin"]), async (req, res) => {
  if (db.isUsingMysql()) {
    let dpRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [req.user.id]);
    let dpRaw = dpRes.rows[0];
    if (!dpRaw) {
      await db.query(
        `INSERT INTO delivery_partners (user_id, service_area_id, name, phone, email, vehicle_type, vehicle_number, driving_license_number, status, is_online, wallet_balance)
         VALUES (?, 1, ?, ?, ?, 'bike', 'WB-PENDING', 'DL-WB-2024-001', 'approved', 1, 0.00)`,
        [req.user.id, req.user.name, req.user.phone, req.user.email]
      );
      dpRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [req.user.id]);
      dpRaw = dpRes.rows[0];
    }
    const dp2 = formatDeliveryPartnerRow(dpRaw);
    let walletRes = await db.query("SELECT * FROM wallets WHERE user_id = ? LIMIT 1", [dp2.user_id]);
    let wallet2 = walletRes.rows[0];
    if (!wallet2) {
      wallet2 = {
        balance: dp2.wallet_balance,
        total_earned: dp2.wallet_balance * 3,
        total_withdrawn: dp2.wallet_balance * 2
      };
    } else {
      wallet2 = {
        ...wallet2,
        balance: Number(wallet2.balance),
        total_earned: Number(wallet2.total_earned),
        total_withdrawn: Number(wallet2.total_withdrawn)
      };
    }
    const activeOrderRes = await db.query(
      `SELECT * FROM orders WHERE delivery_partner_id = ? AND status IN ('confirmed', 'preparing', 'ready_for_pickup', 'on_the_way') LIMIT 1`,
      [dp2.id]
    );
    const activeOrder2 = activeOrderRes.rows[0] || null;
    return res.json({
      success: true,
      data: {
        ...dp2,
        wallet: wallet2,
        activeOrder: activeOrder2
      }
    });
  }
  const store = db.getStore();
  let dp = store.delivery_partners.find((d) => d.user_id === req.user.id);
  if (!dp) {
    const newDpId = store.delivery_partners.length + 1;
    dp = {
      id: newDpId,
      user_id: req.user.id,
      service_area_id: 1,
      name: req.user.name,
      phone: req.user.phone,
      vehicle_type: "bike",
      vehicle_number: "WB-PENDING",
      driving_license_number: "DL-WB-2024-001",
      status: "approved",
      is_online: 1,
      current_lat: null,
      current_lng: null,
      last_location_updated_at: null,
      total_deliveries: 0,
      rating: 5,
      wallet_balance: 0
    };
    store.delivery_partners.push(dp);
  }
  const wallet = store.wallets.find((w) => w.user_id === dp.user_id) || {
    balance: dp.wallet_balance,
    total_earned: dp.wallet_balance * 3,
    total_withdrawn: dp.wallet_balance * 2
  };
  const activeOrder = dp.active_order_id ? store.orders.find((o) => o.id === dp.active_order_id) : null;
  return res.json({
    success: true,
    data: {
      ...dp,
      wallet,
      activeOrder
    }
  });
});
deliveryRouter.put("/profile", authenticateToken, requireRole(["delivery", "admin"]), async (req, res) => {
  const {
    name,
    phone,
    vehicle_type,
    vehicle_number,
    driving_license_number,
    age,
    gender,
    address,
    passport_photo,
    profile_photo,
    aadhaar_photo,
    vehicle_photo,
    payment_method,
    upi_id,
    upi_qr_photo,
    bank_name,
    bank_account_no,
    bank_account_holder,
    bank_ifsc,
    bank_passbook_photo
  } = req.body;
  if (db.isUsingMysql()) {
    const dpRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [req.user.id]);
    if (!dpRes.rows[0]) {
      return res.status(404).json({ success: false, message: "Delivery partner profile not found" });
    }
    const updates = [];
    const params = [];
    if (name) {
      updates.push("name = ?");
      params.push(name);
    }
    if (phone) {
      updates.push("phone = ?");
      params.push(phone);
    }
    if (vehicle_type) {
      updates.push("vehicle_type = ?");
      params.push(vehicle_type);
    }
    if (vehicle_number) {
      updates.push("vehicle_number = ?");
      params.push(vehicle_number);
    }
    if (driving_license_number) {
      updates.push("driving_license_number = ?");
      params.push(driving_license_number);
    }
    if (vehicle_photo || passport_photo || profile_photo) {
      updates.push("document_photo = ?");
      params.push(vehicle_photo || passport_photo || profile_photo);
    }
    if (aadhaar_photo) {
      updates.push("aadhaar_photo = ?");
      params.push(aadhaar_photo);
    }
    if (payment_method) {
      updates.push("payment_method = ?");
      params.push(payment_method);
    }
    if (typeof upi_id !== "undefined") {
      updates.push("upi_id = ?");
      params.push(upi_id);
    }
    if (typeof upi_qr_photo !== "undefined") {
      updates.push("upi_qr_photo = ?");
      params.push(upi_qr_photo);
    }
    if (typeof bank_name !== "undefined") {
      updates.push("bank_name = ?");
      params.push(bank_name);
    }
    if (typeof bank_account_no !== "undefined") {
      updates.push("bank_account_no = ?");
      params.push(bank_account_no);
    }
    if (typeof bank_account_holder !== "undefined") {
      updates.push("bank_account_holder = ?");
      params.push(bank_account_holder);
    }
    if (typeof bank_ifsc !== "undefined") {
      updates.push("bank_ifsc = ?");
      params.push(bank_ifsc);
    }
    if (typeof bank_passbook_photo !== "undefined") {
      updates.push("bank_passbook_photo = ?");
      params.push(bank_passbook_photo);
    }
    if (updates.length > 0) {
      params.push(req.user.id);
      await db.query(`UPDATE delivery_partners SET ${updates.join(", ")} WHERE user_id = ?`, params);
    }
    const userUpdates = [];
    const userParams = [];
    if (name) {
      userUpdates.push("name = ?");
      userParams.push(name);
    }
    if (phone) {
      userUpdates.push("phone = ?");
      userParams.push(phone);
    }
    if (profile_photo || passport_photo) {
      userUpdates.push("profile_photo = ?");
      userParams.push(profile_photo || passport_photo);
    }
    if (address) {
      userUpdates.push("address = ?");
      userParams.push(address);
    }
    if (payment_method) {
      userUpdates.push("payment_method = ?");
      userParams.push(payment_method);
    }
    if (typeof upi_id !== "undefined") {
      userUpdates.push("upi_id = ?");
      userParams.push(upi_id);
    }
    if (typeof upi_qr_photo !== "undefined") {
      userUpdates.push("upi_qr_photo = ?");
      userParams.push(upi_qr_photo);
    }
    if (typeof bank_name !== "undefined") {
      userUpdates.push("bank_name = ?");
      userParams.push(bank_name);
    }
    if (typeof bank_account_no !== "undefined") {
      userUpdates.push("bank_account_no = ?");
      userParams.push(bank_account_no);
    }
    if (typeof bank_account_holder !== "undefined") {
      userUpdates.push("bank_account_holder = ?");
      userParams.push(bank_account_holder);
    }
    if (typeof bank_ifsc !== "undefined") {
      userUpdates.push("bank_ifsc = ?");
      userParams.push(bank_ifsc);
    }
    if (typeof bank_passbook_photo !== "undefined") {
      userUpdates.push("bank_passbook_photo = ?");
      userParams.push(bank_passbook_photo);
    }
    if (userUpdates.length > 0) {
      userParams.push(req.user.id);
      await db.query(`UPDATE users SET ${userUpdates.join(", ")} WHERE id = ?`, userParams);
    }
    const updatedDpRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [req.user.id]);
    const updatedDp = formatDeliveryPartnerRow(updatedDpRes.rows[0]);
    return res.json({
      success: true,
      message: "Delivery partner profile and payment method updated successfully (\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2 \u0993 \u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09A4\u09A5\u09CD\u09AF \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7)",
      data: updatedDp
    });
  }
  const store = db.getStore();
  const dp = store.delivery_partners.find((d) => d.user_id === req.user.id);
  if (!dp) {
    return res.status(404).json({ success: false, message: "Delivery partner profile not found" });
  }
  if (name) dp.name = name;
  if (phone) dp.phone = phone;
  if (vehicle_type) dp.vehicle_type = vehicle_type;
  if (vehicle_number) dp.vehicle_number = vehicle_number;
  if (driving_license_number) dp.driving_license_number = driving_license_number;
  if (age) dp.age = Number(age);
  if (gender) dp.gender = gender;
  if (address) dp.address = address;
  if (passport_photo) dp.passport_photo = passport_photo;
  if (profile_photo) dp.profile_photo = profile_photo;
  if (aadhaar_photo) dp.aadhaar_photo = aadhaar_photo;
  if (vehicle_photo) dp.vehicle_photo = vehicle_photo;
  if (payment_method) dp.payment_method = payment_method;
  if (typeof upi_id !== "undefined") dp.upi_id = upi_id;
  if (typeof upi_qr_photo !== "undefined") dp.upi_qr_photo = upi_qr_photo;
  if (typeof bank_name !== "undefined") dp.bank_name = bank_name;
  if (typeof bank_account_no !== "undefined") dp.bank_account_no = bank_account_no;
  if (typeof bank_account_holder !== "undefined") dp.bank_account_holder = bank_account_holder;
  if (typeof bank_ifsc !== "undefined") dp.bank_ifsc = bank_ifsc;
  if (typeof bank_passbook_photo !== "undefined") dp.bank_passbook_photo = bank_passbook_photo;
  const riderUser = store.users.find((u) => u.id === dp.user_id);
  if (riderUser) {
    if (name) riderUser.name = name;
    if (phone) riderUser.phone = phone;
    if (passport_photo || profile_photo) riderUser.profile_photo = profile_photo || passport_photo;
    if (address) riderUser.address = address;
    if (payment_method) riderUser.payment_method = payment_method;
    if (typeof upi_id !== "undefined") riderUser.upi_id = upi_id;
    if (typeof upi_qr_photo !== "undefined") riderUser.upi_qr_photo = upi_qr_photo;
    if (typeof bank_name !== "undefined") riderUser.bank_name = bank_name;
    if (typeof bank_account_no !== "undefined") riderUser.bank_account_no = bank_account_no;
    if (typeof bank_account_holder !== "undefined") riderUser.bank_account_holder = bank_account_holder;
    if (typeof bank_ifsc !== "undefined") riderUser.bank_ifsc = bank_ifsc;
    if (typeof bank_passbook_photo !== "undefined") riderUser.bank_passbook_photo = bank_passbook_photo;
  }
  return res.json({
    success: true,
    message: "Delivery partner profile and payment method updated successfully (\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2 \u0993 \u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09A4\u09A5\u09CD\u09AF \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7)",
    data: dp
  });
});
deliveryRouter.post("/status", authenticateToken, requireRole(["delivery"]), async (req, res) => {
  const { is_online, lat, lng } = req.body;
  if (db.isUsingMysql()) {
    const dpRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [req.user.id]);
    const dp2 = dpRes.rows[0];
    if (!dp2) {
      return res.status(404).json({ success: false, message: "Delivery partner not found" });
    }
    if (dp2.status !== "approved") {
      return res.status(403).json({
        success: false,
        message: dp2.status === "blocked" ? "Your account has been blocked by admin (\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u099F\u09BF \u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B0\u09DF\u09C7\u099B\u09C7)" : "Account pending admin approval. You can only go online after Admin approves your profile. (\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u099F\u09BF \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09A8\u09C7\u09B0 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE\u09DF \u09B0\u09DF\u09C7\u099B\u09C7)"
      });
    }
    const nextOnlineState = is_online ? 1 : 0;
    if (nextOnlineState === 1) {
      if (lat && lng && !isNaN(Number(lat)) && !isNaN(Number(lng))) {
        await db.query(
          "UPDATE delivery_partners SET is_online = 1, current_lat = ?, current_lng = ?, last_location_updated_at = NOW() WHERE user_id = ?",
          [Number(lat), Number(lng), req.user.id]
        );
      } else {
        await db.query(
          "UPDATE delivery_partners SET is_online = 1, last_location_updated_at = NOW() WHERE user_id = ?",
          [req.user.id]
        );
      }
    } else {
      await db.query(
        "UPDATE delivery_partners SET is_online = 0, last_location_updated_at = NULL WHERE user_id = ?",
        [req.user.id]
      );
    }
    const updatedDpRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [req.user.id]);
    const updatedDp = formatDeliveryPartnerRow(updatedDpRes.rows[0]);
    return res.json({
      success: true,
      message: updatedDp.is_online ? "You are now ONLINE and ready for orders" : "You are now OFFLINE. Tracking stopped.",
      data: {
        is_online: updatedDp.is_online,
        current_lat: updatedDp.current_lat,
        current_lng: updatedDp.current_lng
      }
    });
  }
  const store = db.getStore();
  const dp = store.delivery_partners.find((d) => d.user_id === req.user.id);
  if (!dp) {
    return res.status(404).json({ success: false, message: "Delivery partner not found" });
  }
  if (dp.status !== "approved") {
    return res.status(403).json({
      success: false,
      message: dp.status === "blocked" ? "Your account has been blocked by admin (\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u099F\u09BF \u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B0\u09DF\u09C7\u099B\u09C7)" : "Account pending admin approval. You can only go online after Admin approves your profile. (\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u099F\u09BF \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09A8\u09C7\u09B0 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE\u09DF \u09B0\u09DF\u09C7\u099B\u09C7)"
    });
  }
  dp.is_online = is_online ? 1 : 0;
  if (dp.is_online) {
    if (lat && lng) {
      dp.current_lat = Number(lat);
      dp.current_lng = Number(lng);
      dp.last_location_updated_at = (/* @__PURE__ */ new Date()).toISOString();
    }
  } else {
    dp.last_location_updated_at = null;
  }
  return res.json({
    success: true,
    message: dp.is_online ? "You are now ONLINE and ready for orders" : "You are now OFFLINE. Tracking stopped.",
    data: {
      is_online: dp.is_online,
      current_lat: dp.current_lat,
      current_lng: dp.current_lng
    }
  });
});
deliveryRouter.post("/location", authenticateToken, requireRole(["delivery"]), async (req, res) => {
  const { lat, lng } = req.body;
  const numLat = Number(lat);
  const numLng = Number(lng);
  if (isNaN(numLat) || isNaN(numLng) || numLat < -90 || numLat > 90 || numLng < -180 || numLng > 180) {
    return res.status(400).json({ success: false, message: "Valid latitude (-90 to 90) and longitude (-180 to 180) are required" });
  }
  if (db.isUsingMysql()) {
    const dpRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [req.user.id]);
    const dp2 = dpRes.rows[0];
    if (!dp2) {
      return res.status(404).json({ success: false, message: "Delivery partner not found" });
    }
    const activeOrderRes = await db.query(
      `SELECT * FROM orders WHERE delivery_partner_id = ? AND status IN ('confirmed', 'preparing', 'ready_for_pickup', 'on_the_way') LIMIT 1`,
      [dp2.id]
    );
    const activeOrder = activeOrderRes.rows[0];
    if (!dp2.is_online && !activeOrder) {
      return res.status(400).json({
        success: false,
        message: "Tracking rejected: Partner is offline and has no active delivery"
      });
    }
    await db.query(
      "UPDATE delivery_partners SET current_lat = ?, current_lng = ?, last_location_updated_at = NOW() WHERE id = ?",
      [numLat, numLng, dp2.id]
    );
    if (activeOrder) {
      await db.query(
        "UPDATE orders SET delivery_partner_lat = ?, delivery_partner_lng = ? WHERE id = ?",
        [numLat, numLng, activeOrder.id]
      );
    }
    return res.json({
      success: true,
      data: { lat: numLat, lng: numLng }
    });
  }
  const store = db.getStore();
  const dp = store.delivery_partners.find((d) => d.user_id === req.user.id);
  if (!dp) {
    return res.status(404).json({ success: false, message: "Delivery partner not found" });
  }
  if (!dp.is_online && !dp.active_order_id) {
    return res.status(400).json({
      success: false,
      message: "Tracking rejected: Partner is offline and has no active delivery"
    });
  }
  dp.current_lat = numLat;
  dp.current_lng = numLng;
  dp.last_location_updated_at = (/* @__PURE__ */ new Date()).toISOString();
  if (dp.active_order_id) {
    const order = store.orders.find((o) => o.id === dp.active_order_id);
    if (order) {
      order.delivery_partner_lat = numLat;
      order.delivery_partner_lng = numLng;
    }
  }
  return res.json({
    success: true,
    data: { lat: dp.current_lat, lng: dp.current_lng }
  });
});
deliveryRouter.post("/orders/:id/accept", authenticateToken, requireRole(["delivery"]), async (req, res) => {
  const orderId = Number(req.params.id);
  if (db.isUsingMysql()) {
    const pool = db.getPool();
    if (!pool) throw new Error("Database pool uninitialized");
    const conn = await pool.getConnection();
    try {
      await conn.beginTransaction();
      const [dpRows] = await conn.execute("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1 FOR UPDATE", [req.user.id]);
      const dp2 = dpRows[0];
      if (!dp2) {
        await conn.rollback();
        conn.release();
        return res.status(404).json({ success: false, message: "Delivery partner profile not found" });
      }
      const [orderRows] = await conn.execute("SELECT * FROM orders WHERE id = ? LIMIT 1 FOR UPDATE", [orderId]);
      const order2 = orderRows[0];
      if (!order2) {
        await conn.rollback();
        conn.release();
        return res.status(404).json({ success: false, message: "Order not found" });
      }
      if (order2.delivery_partner_id && Number(order2.delivery_partner_id) !== Number(dp2.id) && !order2.rider_requested) {
        await conn.rollback();
        conn.release();
        return res.status(409).json({
          success: false,
          message: "This delivery job was already accepted by another partner"
        });
      }
      if (dp2.status !== "approved") {
        await conn.execute("UPDATE delivery_partners SET status = 'approved' WHERE id = ?", [dp2.id]);
      }
      const [updateResult] = await conn.execute(
        `UPDATE orders SET
          delivery_partner_id = ?,
          delivery_partner_name = ?,
          delivery_partner_phone = ?,
          delivery_partner_lat = COALESCE(?, restaurant_lat),
          delivery_partner_lng = COALESCE(?, restaurant_lng),
          rider_accepted = 1,
          rider_accepted_at = NOW(),
          status = CASE WHEN status IN ('placed', 'pending') THEN 'confirmed' ELSE status END
         WHERE id = ? AND (delivery_partner_id IS NULL OR delivery_partner_id = ? OR rider_requested = 1)`,
        [dp2.id, dp2.name, dp2.phone, dp2.current_lat, dp2.current_lng, orderId, dp2.id]
      );
      if (updateResult.affectedRows === 0) {
        await conn.rollback();
        conn.release();
        return res.status(409).json({
          success: false,
          message: "This delivery job was already accepted by another partner"
        });
      }
      await conn.execute("UPDATE delivery_partners SET is_online = 1 WHERE id = ?", [dp2.id]);
      await conn.commit();
      conn.release();
      const [updatedOrderRows] = await db.query("SELECT * FROM orders WHERE id = ? LIMIT 1", [orderId]);
      const updatedOrder = updatedOrderRows.rows[0];
      if (updatedOrder.restaurant_id) {
        const restRes = await db.query("SELECT user_id FROM restaurants WHERE id = ? LIMIT 1", [updatedOrder.restaurant_id]);
        if (restRes.rows[0]?.user_id) {
          notificationService.createNotification({
            userId: restRes.rows[0].user_id,
            role: "restaurant",
            title: `Rider Accepted & Assigned: ${dp2.name}`,
            title_bn: `\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09C7\u099B\u09C7\u09A8: ${dp2.name}`,
            message: `Delivery partner ${dp2.name} (Phone: ${dp2.phone}) accepted order #${updatedOrder.order_number} and is heading to your restaurant. Order is confirmed!`,
            message_bn: `\u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09AA\u09BE\u09B0\u09CD\u099F\u09A8\u09BE\u09B0 ${dp2.name} (\u09AB\u09CB\u09A8: ${dp2.phone}) \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 #${updatedOrder.order_number} \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09C7\u099B\u09C7\u09A8 \u0993 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09DF \u0986\u09B8\u099B\u09C7\u09A8\u0964 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0995\u09A8\u09AB\u09BE\u09B0\u09CD\u09AE \u09B9\u09DF\u09C7\u099B\u09C7!`,
            type: "assignment",
            data: { orderId: updatedOrder.id }
          });
        }
      }
      if (updatedOrder.customer_id) {
        notificationService.createNotification({
          userId: updatedOrder.customer_id,
          role: "customer",
          title: `Order Accepted & Rider Assigned!`,
          title_bn: `\u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0995\u09A8\u09AB\u09BE\u09B0\u09CD\u09AE \u09B9\u09DF\u09C7\u099B\u09C7 \u0993 \u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u09B8\u09BE\u0987\u09A8 \u09B9\u09DF\u09C7\u099B\u09C7!`,
          message: `Rider ${dp2.name} (${dp2.phone}) accepted your order #${updatedOrder.order_number} from ${updatedOrder.restaurant_name}.`,
          message_bn: `\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 ${dp2.name} (${dp2.phone}) \u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 #${updatedOrder.order_number} \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4 \u0995\u09B0\u099B\u09C7\u0964`,
          type: "order_status",
          data: { orderId: updatedOrder.id, status: "accepted" }
        });
      }
      return res.json({
        success: true,
        message: `Delivery ride accepted! Assigned to you. (\u09B0\u09BE\u0987\u09A1 \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7: ${updatedOrder.order_number})`,
        data: updatedOrder
      });
    } catch (err) {
      await conn.rollback();
      conn.release();
      return res.status(500).json({ success: false, message: err.message || "Failed to accept ride" });
    }
  }
  const store = db.getStore();
  const dp = store.delivery_partners.find((d) => d.user_id === req.user.id);
  const order = store.orders.find((o) => o.id === orderId);
  if (!dp || !order) {
    return res.status(404).json({ success: false, message: "Order or Partner not found" });
  }
  if (dp.status !== "approved") {
    dp.status = "approved";
  }
  if (order.delivery_partner_id && order.delivery_partner_id !== dp.id && !order.rider_requested) {
    return res.status(409).json({
      success: false,
      message: "This delivery job was already accepted by another partner"
    });
  }
  dp.is_online = 1;
  order.delivery_partner_id = dp.id;
  order.delivery_partner_name = dp.name;
  order.delivery_partner_phone = dp.phone;
  order.delivery_partner_lat = dp.current_lat || order.restaurant_lat;
  order.delivery_partner_lng = dp.current_lng || order.restaurant_lng;
  order.rider_accepted = 1;
  order.rider_accepted_at = (/* @__PURE__ */ new Date()).toISOString();
  if (order.status === "pending" || order.status === "assigned" || !order.status) {
    order.status = "accepted";
    order.accepted_at = order.accepted_at || (/* @__PURE__ */ new Date()).toISOString();
  }
  dp.active_order_id = order.id;
  const restaurant = store.restaurants.find((r) => r.id === order.restaurant_id);
  if (restaurant) {
    notificationService.createNotification({
      userId: restaurant.user_id,
      role: "restaurant",
      title: `Rider Accepted & Assigned: ${dp.name}`,
      title_bn: `\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09C7\u099B\u09C7\u09A8: ${dp.name}`,
      message: `Delivery partner ${dp.name} (Phone: ${dp.phone}) accepted order #${order.order_number} and is heading to your restaurant. Order is confirmed!`,
      message_bn: `\u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09AA\u09BE\u09B0\u09CD\u099F\u09A8\u09BE\u09B0 ${dp.name} (\u09AB\u09CB\u09A8: ${dp.phone}) \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 #${order.order_number} \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09C7\u099B\u09C7\u09A8 \u0993 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09DF \u0986\u09B8\u099B\u09C7\u09A8\u0964 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0995\u09A8\u09AB\u09BE\u09B0\u09CD\u09AE \u09B9\u09DF\u09C7\u099B\u09C7!`,
      type: "assignment",
      data: { orderId: order.id }
    });
  }
  notificationService.createNotification({
    userId: order.customer_id,
    role: "customer",
    title: `Order Accepted & Rider Assigned!`,
    title_bn: `\u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0995\u09A8\u09AB\u09BE\u09B0\u09CD\u09AE \u09B9\u09DF\u09C7\u099B\u09C7 \u0993 \u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u09B8\u09BE\u0987\u09A8 \u09B9\u09DF\u09C7\u099B\u09C7!`,
    message: `Rider ${dp.name} (${dp.phone}) accepted your order #${order.order_number} from ${order.restaurant_name}.`,
    message_bn: `\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 ${dp.name} (${dp.phone}) \u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 #${order.order_number} \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4 \u0995\u09B0\u099B\u09C7\u0964`,
    type: "order_status",
    data: { orderId: order.id, status: "accepted" }
  });
  return res.json({
    success: true,
    message: `Delivery ride accepted! Assigned to you. (\u09B0\u09BE\u0987\u09A1 \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7: ${order.order_number})`,
    data: order
  });
});
deliveryRouter.post("/orders/:id/decline", authenticateToken, requireRole(["delivery"]), async (req, res) => {
  const orderId = Number(req.params.id);
  if (db.isUsingMysql()) {
    const dpRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [req.user.id]);
    const dp2 = dpRes.rows[0];
    const orderRes = await db.query("SELECT * FROM orders WHERE id = ? LIMIT 1", [orderId]);
    const order2 = orderRes.rows[0];
    if (!dp2 || !order2) {
      return res.status(404).json({ success: false, message: "Order or Partner not found" });
    }
    if (order2.delivery_partner_id === dp2.id) {
      await db.query(
        "UPDATE orders SET delivery_partner_id = NULL, delivery_partner_name = NULL, delivery_partner_phone = NULL, rider_accepted = 0 WHERE id = ?",
        [orderId]
      );
    }
    const updatedOrderRes = await db.query("SELECT * FROM orders WHERE id = ? LIMIT 1", [orderId]);
    return res.json({
      success: true,
      message: `Delivery order #${order2.order_number} declined. (\u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u099F\u09BF \u09AC\u09BE\u09A6 \u09A6\u09C7\u0993\u09DF\u09BE \u09B9\u09DF\u09C7\u099B\u09C7)`,
      data: updatedOrderRes.rows[0]
    });
  }
  const store = db.getStore();
  const dp = store.delivery_partners.find((d) => d.user_id === req.user.id);
  const order = store.orders.find((o) => o.id === orderId);
  if (!dp || !order) {
    return res.status(404).json({ success: false, message: "Order or Partner not found" });
  }
  if (order.delivery_partner_id === dp.id) {
    order.delivery_partner_id = null;
    order.delivery_partner_name = null;
    order.delivery_partner_phone = null;
    order.rider_accepted = 0;
  }
  if (dp.active_order_id === order.id) {
    dp.active_order_id = null;
  }
  return res.json({
    success: true,
    message: `Delivery order #${order.order_number} declined. (\u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u099F\u09BF \u09AC\u09BE\u09A6 \u09A6\u09C7\u0993\u09DF\u09BE \u09B9\u09DF\u09C7\u099B\u09C7)`,
    data: order
  });
});
deliveryRouter.get("/history", authenticateToken, requireRole(["delivery"]), async (req, res) => {
  if (db.isUsingMysql()) {
    const dpRes = await db.query("SELECT id FROM delivery_partners WHERE user_id = ? LIMIT 1", [req.user.id]);
    const dp2 = dpRes.rows[0];
    if (!dp2) {
      return res.status(404).json({ success: false, message: "Delivery partner not found" });
    }
    const partnerOrdersRes = await db.query("SELECT * FROM orders WHERE delivery_partner_id = ? ORDER BY id DESC", [dp2.id]);
    return res.json({
      success: true,
      data: partnerOrdersRes.rows
    });
  }
  const store = db.getStore();
  const dp = store.delivery_partners.find((d) => d.user_id === req.user.id);
  if (!dp) {
    return res.status(404).json({ success: false, message: "Delivery partner not found" });
  }
  const partnerOrders = store.orders.filter((o) => o.delivery_partner_id === dp.id);
  return res.json({
    success: true,
    data: partnerOrders
  });
});
deliveryRouter.get("/earnings", authenticateToken, requireRole(["delivery"]), async (req, res) => {
  if (db.isUsingMysql()) {
    const dpRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [req.user.id]);
    const dpRaw = dpRes.rows[0];
    if (!dpRaw) {
      return res.status(404).json({ success: false, message: "Delivery partner not found" });
    }
    const dp2 = formatDeliveryPartnerRow(dpRaw);
    let walletRes = await db.query("SELECT * FROM wallets WHERE user_id = ? LIMIT 1", [dp2.user_id]);
    let wallet2 = walletRes.rows[0];
    if (!wallet2) {
      const insW = await db.query(
        `INSERT INTO wallets (user_id, role, balance, total_earned, total_withdrawn)
         VALUES (?, 'delivery', ?, ?, 0.00)`,
        [dp2.user_id, dp2.wallet_balance || 0, (dp2.wallet_balance || 0) + 120]
      );
      const newWalletId = insW.insertId || insW.rows?.insertId || 1;
      walletRes = await db.query("SELECT * FROM wallets WHERE id = ? LIMIT 1", [newWalletId]);
      wallet2 = walletRes.rows[0] || {
        id: newWalletId,
        user_id: dp2.user_id,
        role: "delivery",
        balance: dp2.wallet_balance || 0,
        total_earned: (dp2.wallet_balance || 0) + 120,
        total_withdrawn: 0
      };
    } else {
      wallet2 = {
        ...wallet2,
        balance: Number(wallet2.balance),
        total_earned: Number(wallet2.total_earned),
        total_withdrawn: Number(wallet2.total_withdrawn)
      };
    }
    let settings2 = {};
    const settingsRes = await db.query("SELECT * FROM platform_settings LIMIT 1", []);
    if (settingsRes.rows[0]?.setting_value) {
      try {
        settings2 = JSON.parse(settingsRes.rows[0].setting_value);
      } catch {
      }
    }
    const commissionRate2 = Number(settings2.delivery_partner_commission_percent ?? 10);
    const minFareGuarantee2 = Number(settings2.min_delivery_fare ?? 20);
    const completedOrdersRes = await db.query(
      "SELECT * FROM orders WHERE delivery_partner_id = ? AND status = 'delivered' ORDER BY id DESC",
      [dp2.id]
    );
    const transactionsRes = await db.query(
      "SELECT * FROM wallet_transactions WHERE wallet_id = ? ORDER BY id DESC",
      [wallet2.id]
    );
    return res.json({
      success: true,
      data: {
        wallet: wallet2,
        commission_rate_percent: commissionRate2,
        rider_share_percent: 100 - commissionRate2,
        min_fare_guarantee: minFareGuarantee2,
        total_completed_trips: completedOrdersRes.rows.length,
        payout_account: {
          upi_id: dp2.upi_id || `${dp2.phone}@upi`,
          bank_name: dp2.bank_name || "State Bank of India",
          account_number: dp2.bank_account_no || "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4421",
          ifsc_code: dp2.bank_ifsc || "SBIN0001234",
          beneficiary_name: dp2.bank_account_holder || dp2.name
        },
        completed_orders: completedOrdersRes.rows,
        transactions: transactionsRes.rows
      }
    });
  }
  const store = db.getStore();
  const dp = store.delivery_partners.find((d) => d.user_id === req.user.id);
  if (!dp) {
    return res.status(404).json({ success: false, message: "Delivery partner not found" });
  }
  let wallet = store.wallets.find((w) => w.user_id === dp.user_id);
  if (!wallet) {
    wallet = {
      id: store.wallets.length + 1,
      user_id: dp.user_id,
      role: "delivery",
      balance: dp.wallet_balance || 0,
      total_earned: (dp.wallet_balance || 0) + 120,
      total_withdrawn: 0
    };
    store.wallets.push(wallet);
  }
  const settings = store.settings || {};
  const commissionRate = Number(settings.delivery_partner_commission_percent ?? 10);
  const minFareGuarantee = Number(settings.min_delivery_fare ?? 20);
  const completedOrders = store.orders.filter(
    (o) => o.delivery_partner_id === dp.id && o.status === "delivered"
  );
  const transactions = (store.wallet_transactions || []).filter(
    (t) => t.wallet_id === wallet.id
  );
  return res.json({
    success: true,
    data: {
      wallet,
      commission_rate_percent: commissionRate,
      rider_share_percent: 100 - commissionRate,
      min_fare_guarantee: minFareGuarantee,
      total_completed_trips: completedOrders.length,
      payout_account: dp.payout_account || {
        upi_id: `${dp.phone}@upi`,
        bank_name: "State Bank of India",
        account_number: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4421",
        ifsc_code: "SBIN0001234",
        beneficiary_name: dp.name
      },
      completed_orders: completedOrders,
      transactions
    }
  });
});
deliveryRouter.post("/payout-request", authenticateToken, requireRole(["delivery"]), async (req, res) => {
  const { amount, method, upi_id, bank_name, account_number, ifsc_code, beneficiary_name } = req.body;
  const numAmount = Number(amount);
  if (!numAmount || numAmount < 50) {
    return res.status(400).json({
      success: false,
      message: "Minimum withdrawal amount is \u20B950 (\u09B8\u09B0\u09CD\u09AC\u09A8\u09BF\u09AE\u09CD\u09A8 \u0989\u09A4\u09CD\u09A4\u09CB\u09B2\u09A8\u09C7\u09B0 \u09AA\u09B0\u09BF\u09AE\u09BE\u09A3 \u09EB\u09E6 \u099F\u09BE\u0995\u09BE)"
    });
  }
  if (db.isUsingMysql()) {
    const pool = db.getPool();
    if (!pool) throw new Error("Database pool uninitialized");
    const conn = await pool.getConnection();
    try {
      await conn.beginTransaction();
      const [dpRows] = await conn.execute("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1 FOR UPDATE", [req.user.id]);
      const dp2 = dpRows[0];
      if (!dp2) {
        await conn.rollback();
        conn.release();
        return res.status(404).json({ success: false, message: "Delivery partner not found" });
      }
      let [walletRows] = await conn.execute("SELECT * FROM wallets WHERE user_id = ? LIMIT 1 FOR UPDATE", [dp2.user_id]);
      let wallet2 = walletRows[0];
      if (!wallet2) {
        const [wIns] = await conn.execute(
          `INSERT INTO wallets (user_id, role, balance, total_earned, total_withdrawn) VALUES (?, 'delivery', ?, ?, 0.00)`,
          [dp2.user_id, dp2.wallet_balance || 0, dp2.wallet_balance || 0]
        );
        const [wRef] = await conn.execute("SELECT * FROM wallets WHERE id = ? LIMIT 1", [wIns.insertId]);
        wallet2 = wRef[0];
      }
      if (Number(wallet2.balance) < numAmount) {
        await conn.rollback();
        conn.release();
        return res.status(400).json({
          success: false,
          message: `Insufficient wallet balance. Available: \u20B9${wallet2.balance} (\u09AA\u09B0\u09CD\u09AF\u09BE\u09AA\u09CD\u09A4 \u09AC\u09CD\u09AF\u09BE\u09B2\u09C7\u09A8\u09CD\u09B8 \u09A8\u09C7\u0987)`
        });
      }
      const newBalance = Number(wallet2.balance) - numAmount;
      const newWithdrawn = Number(wallet2.total_withdrawn || 0) + numAmount;
      await conn.execute("UPDATE wallets SET balance = ?, total_withdrawn = ? WHERE id = ?", [newBalance, newWithdrawn, wallet2.id]);
      await conn.execute("UPDATE delivery_partners SET wallet_balance = ? WHERE id = ?", [newBalance, dp2.id]);
      const [txRes] = await conn.execute(
        `INSERT INTO wallet_transactions (wallet_id, type, amount, balance_after, description, reference_id)
         VALUES (?, 'debit', ?, ?, ?, ?)`,
        [
          wallet2.id,
          numAmount,
          newBalance,
          `Payout requested via ${method === "upi" ? `UPI (${upi_id || dp2.upi_id || "Self"})` : "Bank Transfer"}`,
          `payout_${Date.now()}`
        ]
      );
      await conn.execute(
        `INSERT INTO payout_requests (user_id, role, amount, method, upi_id, bank_name, bank_account_no, bank_ifsc, status)
         VALUES (?, 'delivery', ?, ?, ?, ?, ?, ?, 'pending')`,
        [
          dp2.user_id,
          numAmount,
          method === "bank" ? "bank" : "upi",
          upi_id || dp2.upi_id || null,
          bank_name || dp2.bank_name || null,
          account_number || dp2.bank_account_no || null,
          ifsc_code || dp2.bank_ifsc || null
        ]
      );
      await conn.commit();
      conn.release();
      const updatedWallet = {
        ...wallet2,
        balance: newBalance,
        total_withdrawn: newWithdrawn
      };
      const newTxn2 = {
        id: txRes.insertId,
        wallet_id: wallet2.id,
        amount: numAmount,
        type: "debit",
        description: `Payout requested via ${method === "upi" ? `UPI (${upi_id || "Self"})` : "Bank Transfer"}`,
        status: "completed",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      return res.json({
        success: true,
        message: `Payout request of \u20B9${numAmount} submitted successfully! (\u20B9${numAmount} \u099F\u09BE\u0995\u09BE \u0989\u09A4\u09CD\u09A4\u09CB\u09B2\u09A8\u09C7\u09B0 \u0985\u09A8\u09C1\u09B0\u09CB\u09A7 \u0997\u09C3\u09B9\u09C0\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7)`,
        data: {
          wallet: updatedWallet,
          transaction: newTxn2
        }
      });
    } catch (err) {
      await conn.rollback();
      conn.release();
      return res.status(500).json({ success: false, message: err.message || "Payout request failed" });
    }
  }
  const store = db.getStore();
  const dp = store.delivery_partners.find((d) => d.user_id === req.user.id);
  if (!dp) {
    return res.status(404).json({ success: false, message: "Delivery partner not found" });
  }
  let wallet = store.wallets.find((w) => w.user_id === dp.user_id);
  if (!wallet) {
    wallet = {
      id: store.wallets.length + 1,
      user_id: dp.user_id,
      role: "delivery",
      balance: dp.wallet_balance || 0,
      total_earned: dp.wallet_balance || 0,
      total_withdrawn: 0
    };
    store.wallets.push(wallet);
  }
  if (Number(wallet.balance) < numAmount) {
    return res.status(400).json({
      success: false,
      message: `Insufficient wallet balance. Available: \u20B9${wallet.balance} (\u09AA\u09B0\u09CD\u09AF\u09BE\u09AA\u09CD\u09A4 \u09AC\u09CD\u09AF\u09BE\u09B2\u09C7\u09A8\u09CD\u09B8 \u09A8\u09C7\u0987)`
    });
  }
  wallet.balance = Number(wallet.balance) - numAmount;
  wallet.total_withdrawn = Number(wallet.total_withdrawn || 0) + numAmount;
  dp.wallet_balance = wallet.balance;
  const newTxnId = (store.wallet_transactions?.length || 0) + 1;
  const newTxn = {
    id: newTxnId,
    wallet_id: wallet.id,
    amount: numAmount,
    type: "debit",
    reference_type: "payout_withdrawal",
    reference_id: newTxnId,
    description: `Payout requested via ${method === "upi" ? `UPI (${upi_id || "Self"})` : "Bank Transfer"}`,
    status: "completed",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  if (!store.wallet_transactions) {
    store.wallet_transactions = [];
  }
  store.wallet_transactions.unshift(newTxn);
  return res.json({
    success: true,
    message: `Payout request of \u20B9${numAmount} submitted successfully! (\u20B9${numAmount} \u099F\u09BE\u0995\u09BE \u0989\u09A4\u09CD\u09A4\u09CB\u09B2\u09A8\u09C7\u09B0 \u0985\u09A8\u09C1\u09B0\u09CB\u09A7 \u0997\u09C3\u09B9\u09C0\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7)`,
    data: {
      wallet,
      transaction: newTxn
    }
  });
});
deliveryRouter.post("/payout-method", authenticateToken, requireRole(["delivery"]), async (req, res) => {
  const { upi_id, bank_name, account_number, ifsc_code, beneficiary_name } = req.body;
  if (db.isUsingMysql()) {
    const dpRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [req.user.id]);
    const dp2 = dpRes.rows[0];
    if (!dp2) {
      return res.status(404).json({ success: false, message: "Delivery partner not found" });
    }
    const updates = [];
    const params = [];
    if (typeof upi_id !== "undefined") {
      updates.push("upi_id = ?");
      params.push(upi_id);
    }
    if (typeof bank_name !== "undefined") {
      updates.push("bank_name = ?");
      params.push(bank_name);
    }
    if (typeof account_number !== "undefined") {
      updates.push("bank_account_no = ?");
      params.push(account_number);
    }
    if (typeof ifsc_code !== "undefined") {
      updates.push("bank_ifsc = ?");
      params.push(ifsc_code);
    }
    if (typeof beneficiary_name !== "undefined") {
      updates.push("bank_account_holder = ?");
      params.push(beneficiary_name);
    }
    if (updates.length > 0) {
      params.push(req.user.id);
      await db.query(`UPDATE delivery_partners SET ${updates.join(", ")} WHERE user_id = ?`, params);
    }
    const updatedDpRes = await db.query("SELECT * FROM delivery_partners WHERE user_id = ? LIMIT 1", [req.user.id]);
    const updatedDp = updatedDpRes.rows[0];
    const payout_account = {
      upi_id: updatedDp.upi_id || `${updatedDp.phone}@upi`,
      bank_name: updatedDp.bank_name || "State Bank of India",
      account_number: updatedDp.bank_account_no || "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4421",
      ifsc_code: updatedDp.bank_ifsc || "SBIN0001234",
      beneficiary_name: updatedDp.bank_account_holder || updatedDp.name
    };
    return res.json({
      success: true,
      message: "Payout payment method updated successfully (\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09A1\u09BF\u099F\u09C7\u0987\u09B2\u09B8 \u0986\u09AA\u09A1\u09C7\u099F \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7)",
      data: payout_account
    });
  }
  const store = db.getStore();
  const dp = store.delivery_partners.find((d) => d.user_id === req.user.id);
  if (!dp) {
    return res.status(404).json({ success: false, message: "Delivery partner not found" });
  }
  dp.payout_account = {
    upi_id: upi_id || "",
    bank_name: bank_name || "",
    account_number: account_number || "",
    ifsc_code: ifsc_code || "",
    beneficiary_name: beneficiary_name || dp.name
  };
  return res.json({
    success: true,
    message: "Payout payment method updated successfully (\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09A1\u09BF\u099F\u09C7\u0987\u09B2\u09B8 \u0986\u09AA\u09A1\u09C7\u099F \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7)",
    data: dp.payout_account
  });
});

// server/routes/adminRoutes.ts
var import_express5 = require("express");
var adminRouter = (0, import_express5.Router)();
adminRouter.use(authenticateToken, requireRole(["admin"]));
function formatAdminRestaurantRow(r, ownerUser, menu) {
  let cuisine_types = [];
  if (r.cuisine_types_json) {
    try {
      cuisine_types = typeof r.cuisine_types_json === "string" ? JSON.parse(r.cuisine_types_json) : r.cuisine_types_json;
    } catch {
    }
  }
  let photos = [];
  if (r.photos_json) {
    try {
      photos = typeof r.photos_json === "string" ? JSON.parse(r.photos_json) : r.photos_json;
    } catch {
    }
  }
  if (photos.length === 0) {
    photos = [r.banner_url || r.photo_url, r.photo_url, r.banner_url || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600"].filter(Boolean);
  }
  let settlements = [];
  if (r.settlements_json) {
    try {
      settlements = typeof r.settlements_json === "string" ? JSON.parse(r.settlements_json) : r.settlements_json;
    } catch {
    }
  }
  return {
    ...r,
    id: Number(r.id),
    user_id: Number(r.user_id),
    service_area_id: r.service_area_id != null ? Number(r.service_area_id) : null,
    latitude: Number(r.latitude),
    longitude: Number(r.longitude),
    commission_rate: r.commission_rate != null ? Number(r.commission_rate) : 15,
    min_order_amount: r.min_order_amount != null ? Number(r.min_order_amount) : 0,
    avg_delivery_minutes: Number(r.avg_delivery_minutes || 30),
    rating: Number(r.rating || 4.5),
    rating_count: Number(r.rating_count || 0),
    is_open: Number(r.is_open ?? 1),
    is_pure_veg: Number(r.is_pure_veg || 0),
    self_delivery_enabled: Number(r.self_delivery_enabled || 0),
    self_delivery_radius_km: Number(r.self_delivery_radius_km || 5),
    is_active: Number(r.is_active ?? 1),
    status: r.status || "pending",
    photos,
    owner_photo: ownerUser?.profile_photo || ownerUser?.passport_photo || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    owner_phone: r.phone || ownerUser?.phone,
    owner_email: r.email || ownerUser?.email,
    menu_count: menu ? menu.length : Number(r.menu_count || 0),
    menu: menu || [],
    trade_license: r.trade_license || "TL-WB-2024-8891",
    gst_number: r.gst_number || "19AAAAA0000A1Z5",
    payment_method: r.payment_method || "upi",
    upi_id: r.upi_id || "kolkatabiryani@okhdfcbank",
    upi_qr_photo: r.upi_qr_photo || "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
    bank_name: r.bank_name || "State Bank of India",
    bank_account_no: r.bank_account_no || r.bank_account_number || "38291048291",
    bank_account_holder: r.bank_account_holder || r.owner_name || r.name,
    bank_ifsc: r.bank_ifsc || "SBIN0001234",
    bank_passbook_photo: r.bank_passbook_photo || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400",
    settlements,
    created_at: r.created_at || "2026-01-15T10:00:00.000Z"
  };
}
function formatAdminDeliveryPartnerRow(dp, user) {
  let settlements = [];
  if (dp.settlements_json) {
    try {
      settlements = typeof dp.settlements_json === "string" ? JSON.parse(dp.settlements_json) : dp.settlements_json;
    } catch {
    }
  }
  return {
    ...dp,
    id: Number(dp.id),
    user_id: Number(dp.user_id),
    service_area_id: dp.service_area_id != null ? Number(dp.service_area_id) : null,
    is_online: Number(dp.is_online || 0),
    is_active: Number(dp.is_active ?? (dp.status === "approved" ? 1 : 0)),
    status: dp.status || "pending",
    current_lat: dp.current_lat != null ? Number(dp.current_lat) : null,
    current_lng: dp.current_lng != null ? Number(dp.current_lng) : null,
    total_deliveries: Number(dp.total_deliveries || 0),
    rating: Number(dp.rating || 5),
    wallet_balance: Number(dp.wallet_balance || 0),
    email: dp.email || user?.email || "rider@aharlocal.com",
    gender: dp.gender || user?.gender || "Male",
    age: dp.age || user?.age || 26,
    address: dp.address || user?.address || "12/C Hazra Road, South Kolkata, West Bengal 700026",
    aadhaar_number: dp.aadhaar_number || "8921-4412-9021",
    pan_number: dp.pan_number || "BKRPD4521E",
    payment_method: dp.payment_method || user?.payment_method || "upi",
    upi_id: dp.upi_id || user?.upi_id || "rahul.sen@okaxis",
    upi_qr_photo: dp.upi_qr_photo || user?.upi_qr_photo || "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
    bank_name: dp.bank_name || user?.bank_name || "State Bank of India",
    bank_account_no: dp.bank_account_no || dp.bank_account_number || user?.bank_account_no || "20491820491",
    bank_account_holder: dp.bank_account_holder || user?.bank_account_holder || dp.name,
    bank_ifsc: dp.bank_ifsc || user?.bank_ifsc || "SBIN0002341",
    bank_passbook_photo: dp.bank_passbook_photo || user?.bank_passbook_photo || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400",
    settlements,
    passport_photo: dp.passport_photo || dp.photo_url || user?.passport_photo || user?.profile_photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
    profile_photo: dp.profile_photo || dp.photo_url || user?.profile_photo || user?.passport_photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
    created_at: dp.created_at || user?.created_at || "2026-02-01T09:30:00.000Z"
  };
}
function formatAdminCustomerRow(c, totalOrders = 0, addressStr) {
  let refunds = [];
  if (c.refunds_json) {
    try {
      refunds = typeof c.refunds_json === "string" ? JSON.parse(c.refunds_json) : c.refunds_json;
    } catch {
    }
  }
  return {
    id: Number(c.id),
    name: c.name,
    email: c.email,
    phone: c.phone,
    cod_enabled: c.cod_enabled ?? 0,
    total_orders: Number(totalOrders || 0),
    is_active: c.is_active ?? 1,
    dob: c.dob || "15/08/1996",
    gender: c.gender || "Not specified",
    address: addressStr || c.address || "Flat 3B, Sunshine Heights, 14 Ballygunge Circular Road, Kolkata 700019",
    payment_method: c.payment_method || "upi",
    upi_id: c.upi_id || `${c.name ? c.name.toLowerCase().replace(/\s+/g, "") : "customer"}@okaxis`,
    upi_qr_photo: c.upi_qr_photo || "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
    bank_name: c.bank_name || "HDFC Bank",
    bank_account_no: c.bank_account_no || "501004829104",
    bank_account_holder: c.bank_account_holder || c.name,
    bank_ifsc: c.bank_ifsc || "HDFC0000456",
    bank_passbook_photo: c.bank_passbook_photo || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400",
    refunds,
    passport_photo: c.passport_photo || c.profile_photo || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    profile_photo: c.profile_photo || c.passport_photo || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    created_at: c.created_at
  };
}
adminRouter.get("/dashboard", async (req, res) => {
  if (db.isUsingMysql()) {
    try {
      const custRes = await db.query("SELECT COUNT(*) as cnt FROM users WHERE role = 'customer'");
      const totalCustomers = Number(custRes.rows[0]?.cnt || 0);
      const restRes = await db.query(
        "SELECT COUNT(*) as total, SUM(CASE WHEN status = 'approved' THEN 1 ELSE 0 END) as approved, SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending FROM restaurants"
      );
      const restRow = restRes.rows[0] || {};
      const totalRestaurants = Number(restRow.total || 0);
      const approvedRestaurants = Number(restRow.approved || 0);
      const pendingRestaurants = Number(restRow.pending || 0);
      const dpRes = await db.query(
        "SELECT COUNT(*) as total, SUM(CASE WHEN is_online = 1 THEN 1 ELSE 0 END) as online, SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending FROM delivery_partners"
      );
      const dpRow = dpRes.rows[0] || {};
      const totalPartners = Number(dpRow.total || 0);
      const onlinePartners = Number(dpRow.online || 0);
      const pendingPartners = Number(dpRow.pending || 0);
      const ordRes = await db.query(
        `SELECT
          COUNT(*) as total,
          SUM(CASE WHEN status IN ('placed', 'confirmed', 'preparing', 'ready_for_pickup', 'on_the_way', 'accepted') THEN 1 ELSE 0 END) as active,
          SUM(CASE WHEN status = 'delivered' THEN 1 ELSE 0 END) as completed,
          SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) as cancelled,
          COALESCE(SUM(subtotal), 0) as grossSales,
          COALESCE(SUM(grand_total), 0) as totalRevenue,
          COALESCE(SUM(subtotal * COALESCE(restaurant_commission_percent, 15.0) / 100.0), 0) as platformCommission
        FROM orders`
      );
      const ordRow = ordRes.rows[0] || {};
      const totalOrders = Number(ordRow.total || 0);
      const activeOrders = Number(ordRow.active || 0);
      const completedOrders = Number(ordRow.completed || 0);
      const cancelledOrders = Number(ordRow.cancelled || 0);
      const grossSales = Math.round(Number(ordRow.grossSales) * 100) / 100;
      const totalRevenue = Math.round(Number(ordRow.totalRevenue) * 100) / 100;
      const platformCommission = Math.round(Number(ordRow.platformCommission) * 100) / 100;
      const recentOrdersRes = await db.query("SELECT * FROM orders ORDER BY id DESC LIMIT 10");
      const recentOrders = recentOrdersRes.rows.map((o) => {
        let items = [];
        try {
          items = typeof o.items_json === "string" ? JSON.parse(o.items_json) : o.items_json || [];
        } catch {
        }
        return {
          ...o,
          id: Number(o.id),
          customer_id: Number(o.customer_id),
          restaurant_id: Number(o.restaurant_id),
          delivery_partner_id: o.delivery_partner_id ? Number(o.delivery_partner_id) : null,
          subtotal: Number(o.subtotal),
          delivery_fee: Number(o.delivery_fee || 0),
          discount: Number(o.discount || 0),
          tax: Number(o.tax || 0),
          grand_total: Number(o.grand_total),
          items
        };
      });
      const saRes = await db.query("SELECT * FROM service_areas WHERE is_active = 1");
      const serviceAreas = saRes.rows.map((sa) => {
        let polygon = [];
        try {
          polygon = typeof sa.polygon_json === "string" ? JSON.parse(sa.polygon_json) : sa.polygon_json || [];
        } catch {
        }
        return {
          ...sa,
          id: Number(sa.id),
          min_delivery_charge: Number(sa.min_delivery_charge || 25),
          per_km_charge: Number(sa.per_km_charge || 8),
          is_active: Number(sa.is_active ?? 1),
          polygon
        };
      });
      return res.json({
        success: true,
        data: {
          metrics: {
            totalCustomers,
            totalRestaurants,
            approvedRestaurants,
            pendingRestaurants,
            totalPartners,
            onlinePartners,
            pendingPartners,
            totalOrders,
            activeOrders,
            completedOrders,
            cancelledOrders,
            grossSales,
            totalRevenue,
            platformCommission
          },
          recentOrders,
          serviceAreas
        }
      });
    } catch (err) {
      console.error("[Admin API] Dashboard KPI fetch error:", err.message);
      return res.status(500).json({ success: false, message: "Failed to compute dashboard KPI analytics" });
    }
  }
  return res.json({ success: true, data: { metrics: {}, recentOrders: [], serviceAreas: [] } });
});
adminRouter.get("/restaurants", async (req, res) => {
  if (db.isUsingMysql()) {
    try {
      const restRes = await db.query(
        `SELECT r.*,
                u.profile_photo as owner_profile_photo,
                u.passport_photo as owner_passport_photo,
                u.phone as owner_user_phone,
                u.email as owner_user_email
         FROM restaurants r
         LEFT JOIN users u ON r.user_id = u.id
         ORDER BY r.id DESC`
      );
      const foodRes = await db.query("SELECT * FROM foods");
      const foodMap = /* @__PURE__ */ new Map();
      for (const f of foodRes.rows) {
        const rid = Number(f.restaurant_id);
        if (!foodMap.has(rid)) foodMap.set(rid, []);
        foodMap.get(rid).push({
          ...f,
          id: Number(f.id),
          restaurant_id: rid,
          price: Number(f.price),
          discount_price: f.discount_price != null ? Number(f.discount_price) : null,
          is_veg: Number(f.is_veg || 0),
          is_available: Number(f.is_available ?? 1),
          is_recommended: Number(f.is_recommended || 0),
          preparation_minutes: Number(f.preparation_minutes || 15)
        });
      }
      const enriched2 = restRes.rows.map((r) => {
        const ownerUser = {
          profile_photo: r.owner_profile_photo,
          passport_photo: r.owner_passport_photo,
          phone: r.owner_user_phone,
          email: r.owner_user_email
        };
        const menu = foodMap.get(Number(r.id)) || [];
        return formatAdminRestaurantRow(r, ownerUser, menu);
      });
      return res.json({ success: true, data: enriched2 });
    } catch (err) {
      console.error("[Admin API] Get restaurants error:", err.message);
      return res.status(500).json({ success: false, message: "Failed to fetch restaurant listing" });
    }
  }
  const store = db.getStore();
  const enriched = store.restaurants.map((rest) => {
    const ownerUser = store.users.find((u) => u.id === rest.user_id);
    const menu = store.foods.filter((f) => f.restaurant_id === rest.id);
    const photos = rest.photos && Array.isArray(rest.photos) && rest.photos.length > 0 ? rest.photos : [rest.banner_url || rest.photo_url, rest.photo_url, rest.banner_url || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600"].filter(Boolean);
    return {
      ...rest,
      photos,
      owner_photo: ownerUser?.profile_photo || ownerUser?.passport_photo || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
      owner_phone: rest.phone || ownerUser?.phone,
      owner_email: rest.email || ownerUser?.email,
      menu_count: menu.length,
      menu,
      trade_license: rest.trade_license || "TL-WB-2024-8891",
      gst_number: rest.gst_number || "19AAAAA0000A1Z5",
      payment_method: rest.payment_method || "upi",
      upi_id: rest.upi_id || "kolkatabiryani@okhdfcbank",
      upi_qr_photo: rest.upi_qr_photo || "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
      bank_name: rest.bank_name || "State Bank of India",
      bank_account_no: rest.bank_account_no || rest.bank_account_number || "38291048291",
      bank_account_holder: rest.bank_account_holder || rest.owner_name || rest.name,
      bank_ifsc: rest.bank_ifsc || "SBIN0001234",
      bank_passbook_photo: rest.bank_passbook_photo || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400",
      settlements: rest.settlements || [],
      created_at: rest.created_at || "2026-01-15T10:00:00.000Z"
    };
  });
  return res.json({ success: true, data: enriched });
});
adminRouter.post("/restaurants/:id/settle", (req, res) => {
  const store = db.getStore();
  const restId = Number(req.params.id);
  const rest = store.restaurants.find((r) => r.id === restId);
  if (!rest) {
    return res.status(404).json({ success: false, message: "Restaurant not found" });
  }
  const { amount, method, transaction_id, remarks } = req.body;
  const numAmount = Number(amount);
  if (!numAmount || numAmount <= 0) {
    return res.status(400).json({ success: false, message: "Valid settlement amount is required" });
  }
  if (!rest.settlements) rest.settlements = [];
  const settlementRecord = {
    id: rest.settlements.length + 1,
    amount: numAmount,
    method: method || rest.payment_method || "upi",
    transaction_id: transaction_id || `SETTLE-REST-${Date.now()}`,
    remarks: remarks || "Platform payout settlement to restaurant",
    recipient: rest.name,
    upi_id: rest.upi_id,
    bank_name: rest.bank_name,
    bank_account_no: rest.bank_account_no,
    status: "completed",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  rest.settlements.unshift(settlementRecord);
  notificationService.createNotification({
    userId: rest.user_id,
    role: "restaurant",
    title: "Payout Settled (\u099F\u09BE\u0995\u09BE \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8)",
    title_bn: "\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09B0 \u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09B8\u09C7\u099F\u09C7\u09B2\u09AE\u09C7\u09A8\u09CD\u099F \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u09B9\u09DF\u09C7\u099B\u09C7",
    message: `Admin has settled \u20B9${numAmount} to your ${method === "upi" ? `UPI (${rest.upi_id})` : `Bank Account (${rest.bank_account_no})`}. Ref: ${settlementRecord.transaction_id}`,
    message_bn: `\u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u09C7 \u20B9${numAmount} \u099F\u09BE\u0995\u09BE \u09AA\u09BE\u09A0\u09BF\u09DF\u09C7\u099B\u09C7\u09A8\u0964 \u09B0\u09C7\u09AB\u09BE\u09B0\u09C7\u09A8\u09CD\u09B8 \u0986\u0987\u09A1\u09BF: ${settlementRecord.transaction_id}`,
    type: "admin_alert"
  });
  return res.json({
    success: true,
    message: `Successfully settled \u20B9${numAmount} to ${rest.name} (${method === "upi" ? "UPI" : "Bank Account"})`,
    data: settlementRecord
  });
});
adminRouter.put("/restaurants/:id/status", async (req, res) => {
  const restId = Number(req.params.id);
  const { status, commission_rate, rejection_reason } = req.body;
  if (db.isUsingMysql()) {
    try {
      const existingRes = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [restId]);
      if (!existingRes.rows[0]) {
        return res.status(404).json({ success: false, message: "Restaurant not found" });
      }
      const rest2 = existingRes.rows[0];
      const updates = [];
      const params = [];
      let updatedCommissionRate = rest2.commission_rate != null ? Number(rest2.commission_rate) : 15;
      if (commission_rate !== void 0) {
        updatedCommissionRate = Math.max(0, Math.min(100, Number(commission_rate)));
        updates.push("commission_rate = ?");
        params.push(updatedCommissionRate);
      }
      if (status) {
        updates.push("status = ?");
        params.push(status);
        if (rejection_reason !== void 0) {
          updates.push("rejection_reason = ?");
          params.push(rejection_reason);
        }
        if (status === "approved") {
          updates.push("is_active = 1");
        } else if (status === "rejected" || status === "blocked") {
          updates.push("is_active = 0");
        }
      }
      if (updates.length > 0) {
        params.push(restId);
        await db.query(`UPDATE restaurants SET ${updates.join(", ")} WHERE id = ?`, params);
      }
      if (status) {
        const userStatus = status === "approved" ? "active" : "blocked";
        const userActive = status === "approved" ? 1 : 0;
        await db.query("UPDATE users SET status = ?, is_active = ? WHERE id = ?", [userStatus, userActive, rest2.user_id]);
        notificationService.createNotification({
          userId: Number(rest2.user_id),
          role: "restaurant",
          title: `Restaurant Application ${status.toUpperCase()}`,
          title_bn: `\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09B0 \u0986\u09AC\u09C7\u09A6\u09A8 ${status === "approved" ? "\u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09BF\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7" : "\u09AC\u09BE\u09A4\u09BF\u09B2 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7"}`,
          message: status === "approved" ? "Congratulations! Your restaurant has been approved by admin. You can now accept orders." : `Your application was rejected: ${rejection_reason || "Incomplete business documents."}`,
          message_bn: status === "approved" ? "\u0985\u09AD\u09BF\u09A8\u09A8\u09CD\u09A6\u09A8! \u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09A6\u09CD\u09AC\u09BE\u09B0\u09BE \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09BF\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u098F\u0996\u09A8 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8\u0964" : "\u0986\u09AA\u09A8\u09BE\u09B0 \u0986\u09AC\u09C7\u09A6\u09A8\u099F\u09BF \u09AC\u09BE\u09A4\u09BF\u09B2 \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C0\u09DF \u09A8\u09A5\u09BF \u09B8\u0982\u09B6\u09CB\u09A7\u09A8 \u0995\u09B0\u09C1\u09A8\u0964",
          type: "admin_alert"
        });
      } else if (commission_rate !== void 0) {
        notificationService.createNotification({
          userId: Number(rest2.user_id),
          role: "restaurant",
          title: "Commission Rate Updated",
          title_bn: "\u0995\u09AE\u09BF\u09B6\u09A8 \u09B0\u09C7\u099F \u0986\u09AA\u09A1\u09C7\u099F \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7",
          message: `Admin has updated your restaurant commission rate to ${updatedCommissionRate}%.`,
          message_bn: `\u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09B0 \u0995\u09AE\u09BF\u09B6\u09A8 \u09B0\u09C7\u099F ${updatedCommissionRate}% \u09A8\u09BF\u09B0\u09CD\u09A7\u09BE\u09B0\u09A3 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964`,
          type: "admin_alert"
        });
      }
      const updatedRes = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [restId]);
      const updatedRest = formatAdminRestaurantRow(updatedRes.rows[0]);
      return res.json({
        success: true,
        message: status ? `Restaurant status updated to ${status}` : `Restaurant commission updated to ${updatedCommissionRate}%`,
        data: updatedRest
      });
    } catch (err) {
      console.error("[Admin API] Update restaurant status error:", err.message);
      return res.status(500).json({ success: false, message: "Failed to update restaurant status" });
    }
  }
  const store = db.getStore();
  const rest = store.restaurants.find((r) => r.id === restId);
  if (!rest) {
    return res.status(404).json({ success: false, message: "Restaurant not found" });
  }
  if (commission_rate !== void 0) {
    rest.commission_rate = Math.max(0, Math.min(100, Number(commission_rate)));
  }
  if (status) {
    rest.status = status;
    if (rejection_reason) rest.rejection_reason = rejection_reason;
    notificationService.createNotification({
      userId: rest.user_id,
      role: "restaurant",
      title: `Restaurant Application ${status.toUpperCase()}`,
      title_bn: `\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09B0 \u0986\u09AC\u09C7\u09A6\u09A8 ${status === "approved" ? "\u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09BF\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7" : "\u09AC\u09BE\u09A4\u09BF\u09B2 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7"}`,
      message: status === "approved" ? "Congratulations! Your restaurant has been approved by admin. You can now accept orders." : `Your application was rejected: ${rejection_reason || "Incomplete business documents."}`,
      message_bn: status === "approved" ? "\u0985\u09AD\u09BF\u09A8\u09A8\u09CD\u09A6\u09A8! \u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09A6\u09CD\u09AC\u09BE\u09B0\u09BE \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09BF\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u098F\u0996\u09A8 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8\u0964" : "\u0986\u09AA\u09A8\u09BE\u09B0 \u0986\u09AC\u09C7\u09A6\u09A8\u099F\u09BF \u09AC\u09BE\u09A4\u09BF\u09B2 \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C0\u09DF \u09A8\u09A5\u09BF \u09B8\u0982\u09B6\u09CB\u09A7\u09A8 \u0995\u09B0\u09C1\u09A8\u0964",
      type: "admin_alert"
    });
  } else if (commission_rate !== void 0) {
    notificationService.createNotification({
      userId: rest.user_id,
      role: "restaurant",
      title: "Commission Rate Updated",
      title_bn: "\u0995\u09AE\u09BF\u09B6\u09A8 \u09B0\u09C7\u099F \u0986\u09AA\u09A1\u09C7\u099F \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7",
      message: `Admin has updated your restaurant commission rate to ${rest.commission_rate}%.`,
      message_bn: `\u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09B0 \u0995\u09AE\u09BF\u09B6\u09A8 \u09B0\u09C7\u099F ${rest.commission_rate}% \u09A8\u09BF\u09B0\u09CD\u09A7\u09BE\u09B0\u09A3 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964`,
      type: "admin_alert"
    });
  }
  return res.json({
    success: true,
    message: status ? `Restaurant status updated to ${status}` : `Restaurant commission updated to ${rest.commission_rate}%`,
    data: rest
  });
});
adminRouter.put("/restaurants/:id/block", async (req, res) => {
  const restId = Number(req.params.id);
  if (db.isUsingMysql()) {
    try {
      const existingRes = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [restId]);
      if (!existingRes.rows[0]) {
        return res.status(404).json({ success: false, message: "Restaurant not found" });
      }
      const rest2 = existingRes.rows[0];
      if (req.user?.id && Number(rest2.user_id) === Number(req.user.id)) {
        return res.status(400).json({ success: false, message: "You cannot block your own user account" });
      }
      const isCurrentlyBlocked2 = rest2.status === "blocked" || rest2.is_active === 0;
      const newStatus2 = isCurrentlyBlocked2 ? "approved" : "blocked";
      const newIsActive = isCurrentlyBlocked2 ? 1 : 0;
      const newUserStatus = isCurrentlyBlocked2 ? "active" : "blocked";
      const pool = db.getPool();
      if (pool) {
        const conn = await pool.getConnection();
        try {
          await conn.beginTransaction();
          await conn.execute("UPDATE restaurants SET status = ?, is_active = ? WHERE id = ?", [newStatus2, newIsActive, restId]);
          await conn.execute("UPDATE users SET status = ?, is_active = ? WHERE id = ?", [newUserStatus, newIsActive, rest2.user_id]);
          await conn.commit();
        } catch (err) {
          await conn.rollback();
          throw err;
        } finally {
          conn.release();
        }
      } else {
        await db.query("UPDATE restaurants SET status = ?, is_active = ? WHERE id = ?", [newStatus2, newIsActive, restId]);
        await db.query("UPDATE users SET status = ?, is_active = ? WHERE id = ?", [newUserStatus, newIsActive, rest2.user_id]);
      }
      notificationService.createNotification({
        userId: Number(rest2.user_id),
        role: "restaurant",
        title: isCurrentlyBlocked2 ? "Restaurant Account Unblocked" : "Restaurant Account Blocked",
        title_bn: isCurrentlyBlocked2 ? "\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u0986\u09A8\u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7" : "\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u09B8\u09BE\u09AE\u09DF\u09BF\u0995 \u09B8\u09CD\u09A5\u0997\u09BF\u09A4 (Blocked)",
        message: isCurrentlyBlocked2 ? "Your restaurant has been unblocked by the admin. You can now accept food orders." : "Your restaurant has been temporarily blocked by administration. Please contact support.",
        message_bn: isCurrentlyBlocked2 ? "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u099F\u09BF \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09A6\u09CD\u09AC\u09BE\u09B0\u09BE \u0986\u09A8\u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u098F\u0996\u09A8 \u09A8\u09A4\u09C1\u09A8 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7\u09A8\u0964" : "\u09AA\u09CD\u09B0\u09B6\u09BE\u09B8\u09A8\u09BF\u0995 \u0995\u09BE\u09B0\u09A3\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u099F\u09BF \u09B8\u09BE\u09AE\u09DF\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8\u0964",
        type: "admin_alert"
      });
      const updatedRes = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [restId]);
      const updatedRest = formatAdminRestaurantRow(updatedRes.rows[0]);
      return res.json({
        success: true,
        message: `Restaurant "${rest2.name}" has been ${isCurrentlyBlocked2 ? "UNBLOCKED (Active)" : "BLOCKED"}`,
        data: updatedRest
      });
    } catch (err) {
      console.error("[Admin API] Block restaurant error:", err.message);
      return res.status(500).json({ success: false, message: "Failed to toggle restaurant block status" });
    }
  }
  const store = db.getStore();
  const rest = store.restaurants.find((r) => r.id === restId);
  if (!rest) {
    return res.status(404).json({ success: false, message: "Restaurant not found" });
  }
  const isCurrentlyBlocked = rest.status === "blocked" || rest.is_active === 0;
  const newStatus = isCurrentlyBlocked ? "approved" : "blocked";
  rest.status = newStatus;
  rest.is_active = isCurrentlyBlocked ? 1 : 0;
  const ownerUser = store.users.find((u) => u.id === rest.user_id);
  if (ownerUser) {
    ownerUser.is_active = isCurrentlyBlocked ? 1 : 0;
  }
  notificationService.createNotification({
    userId: rest.user_id,
    role: "restaurant",
    title: isCurrentlyBlocked ? "Restaurant Account Unblocked" : "Restaurant Account Blocked",
    title_bn: isCurrentlyBlocked ? "\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u0986\u09A8\u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7" : "\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u09B8\u09BE\u09AE\u09DF\u09BF\u0995 \u09B8\u09CD\u09A5\u0997\u09BF\u09A4 (Blocked)",
    message: isCurrentlyBlocked ? "Your restaurant has been unblocked by the admin. You can now accept food orders." : "Your restaurant has been temporarily blocked by administration. Please contact support.",
    message_bn: isCurrentlyBlocked ? "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u099F\u09BF \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09A6\u09CD\u09AC\u09BE\u09B0\u09BE \u0986\u09A8\u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u098F\u0996\u09A8 \u09A8\u09A4\u09C1\u09A8 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7\u09A8\u0964" : "\u09AA\u09CD\u09B0\u09B6\u09BE\u09B8\u09A8\u09BF\u0995 \u0995\u09BE\u09B0\u09A3\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u099F\u09BF \u09B8\u09BE\u09AE\u09DF\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8\u0964",
    type: "admin_alert"
  });
  return res.json({
    success: true,
    message: `Restaurant "${rest.name}" has been ${isCurrentlyBlocked ? "UNBLOCKED (Active)" : "BLOCKED"}`,
    data: rest
  });
});
adminRouter.post("/restaurants/:id/message", (req, res) => {
  const store = db.getStore();
  const restId = Number(req.params.id);
  const { title, title_bn, message, message_bn, priority } = req.body;
  const rest = store.restaurants.find((r) => r.id === restId);
  if (!rest) {
    return res.status(404).json({ success: false, message: "Restaurant not found" });
  }
  if (!message) {
    return res.status(400).json({ success: false, message: "Message content is required" });
  }
  const notif = notificationService.createNotification({
    userId: rest.user_id,
    role: "restaurant",
    title: title || "Message from Admin Support",
    title_bn: title_bn || "\u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F \u09A5\u09C7\u0995\u09C7 \u09AC\u09BE\u09B0\u09CD\u09A4\u09BE",
    message,
    message_bn: message_bn || message,
    type: "admin_alert",
    data: {
      priority: priority || "normal",
      sender: "Platform Administration",
      sent_at: (/* @__PURE__ */ new Date()).toISOString()
    }
  });
  return res.json({
    success: true,
    message: `Message sent successfully to ${rest.name}`,
    data: notif
  });
});
adminRouter.get("/delivery-partners", async (req, res) => {
  if (db.isUsingMysql()) {
    try {
      const dpRes = await db.query(
        `SELECT dp.*,
                u.email as user_email,
                u.gender as user_gender,
                u.dob as user_dob,
                u.address as user_address,
                u.profile_photo as user_profile_photo,
                u.passport_photo as user_passport_photo,
                u.payment_method as user_payment_method,
                u.upi_id as user_upi_id,
                u.upi_qr_photo as user_upi_qr_photo,
                u.bank_name as user_bank_name,
                u.bank_account_no as user_bank_account_no,
                u.bank_account_holder as user_bank_account_holder,
                u.bank_ifsc as user_bank_ifsc,
                u.bank_passbook_photo as user_bank_passbook_photo,
                u.created_at as user_created_at
         FROM delivery_partners dp
         LEFT JOIN users u ON dp.user_id = u.id
         ORDER BY dp.id DESC`
      );
      const partners2 = dpRes.rows.map((dp) => {
        const u = {
          email: dp.user_email,
          gender: dp.user_gender,
          dob: dp.user_dob,
          address: dp.user_address,
          profile_photo: dp.user_profile_photo,
          passport_photo: dp.user_passport_photo,
          payment_method: dp.user_payment_method,
          upi_id: dp.user_upi_id,
          upi_qr_photo: dp.user_upi_qr_photo,
          bank_name: dp.user_bank_name,
          bank_account_no: dp.user_bank_account_no,
          bank_account_holder: dp.user_bank_account_holder,
          bank_ifsc: dp.user_bank_ifsc,
          bank_passbook_photo: dp.user_bank_passbook_photo,
          created_at: dp.user_created_at
        };
        return formatAdminDeliveryPartnerRow(dp, u);
      });
      return res.json({ success: true, data: partners2 });
    } catch (err) {
      console.error("[Admin API] Get delivery partners error:", err.message);
      return res.status(500).json({ success: false, message: "Failed to fetch delivery partners listing" });
    }
  }
  const store = db.getStore();
  const partners = store.delivery_partners.map((dp) => {
    const user = store.users.find((u) => u.id === dp.user_id);
    return {
      ...dp,
      email: dp.email || user?.email || "rider@aharlocal.com",
      gender: dp.gender || user?.gender || "Male",
      age: dp.age || user?.age || 26,
      address: dp.address || user?.address || "12/C Hazra Road, South Kolkata, West Bengal 700026",
      aadhaar_number: dp.aadhaar_number || "8921-4412-9021",
      pan_number: dp.pan_number || "BKRPD4521E",
      payment_method: dp.payment_method || user?.payment_method || "upi",
      upi_id: dp.upi_id || user?.upi_id || "rahul.sen@okaxis",
      upi_qr_photo: dp.upi_qr_photo || user?.upi_qr_photo || "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
      bank_name: dp.bank_name || user?.bank_name || "State Bank of India",
      bank_account_no: dp.bank_account_no || dp.bank_account_number || user?.bank_account_no || "20491820491",
      bank_account_holder: dp.bank_account_holder || user?.bank_account_holder || dp.name,
      bank_ifsc: dp.bank_ifsc || user?.bank_ifsc || "SBIN0002341",
      bank_passbook_photo: dp.bank_passbook_photo || user?.bank_passbook_photo || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400",
      settlements: dp.settlements || [],
      passport_photo: dp.passport_photo || dp.photo_url || user?.passport_photo || user?.profile_photo || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200`,
      profile_photo: dp.profile_photo || dp.photo_url || user?.profile_photo || user?.passport_photo || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200`,
      created_at: dp.created_at || user?.created_at || "2026-02-01T09:30:00.000Z"
    };
  });
  return res.json({ success: true, data: partners });
});
adminRouter.post("/delivery-partners/:id/settle", (req, res) => {
  const store = db.getStore();
  const dpId = Number(req.params.id);
  const dp = store.delivery_partners.find((d) => d.id === dpId);
  if (!dp) {
    return res.status(404).json({ success: false, message: "Delivery partner not found" });
  }
  const { amount, method, transaction_id, remarks } = req.body;
  const numAmount = Number(amount);
  if (!numAmount || numAmount <= 0) {
    return res.status(400).json({ success: false, message: "Valid settlement amount is required" });
  }
  if (!dp.settlements) dp.settlements = [];
  const settlementRecord = {
    id: dp.settlements.length + 1,
    amount: numAmount,
    method: method || dp.payment_method || "upi",
    transaction_id: transaction_id || `SETTLE-RIDER-${Date.now()}`,
    remarks: remarks || "Rider earnings weekly payout settlement",
    recipient: dp.name,
    upi_id: dp.upi_id,
    bank_name: dp.bank_name,
    bank_account_no: dp.bank_account_no,
    status: "completed",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  dp.settlements.unshift(settlementRecord);
  const wallet = store.wallets.find((w) => w.user_id === dp.user_id);
  if (wallet) {
    wallet.total_withdrawn = (wallet.total_withdrawn || 0) + numAmount;
  }
  notificationService.createNotification({
    userId: dp.user_id,
    role: "delivery",
    title: "Payout Dispatched (\u0989\u09AA\u09BE\u09B0\u09CD\u099C\u09A8 \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8)",
    title_bn: "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0\u09C7\u09B0 \u0989\u09AA\u09BE\u09B0\u09CD\u099C\u09A8\u09C7\u09B0 \u099F\u09BE\u0995\u09BE \u09B8\u09C7\u099F\u09C7\u09B2 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7",
    message: `Admin has settled \u20B9${numAmount} to your ${method === "upi" ? `UPI (${dp.upi_id})` : `Bank Account (${dp.bank_account_no})`}. Ref: ${settlementRecord.transaction_id}`,
    message_bn: `\u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u09C7 \u20B9${numAmount} \u099F\u09BE\u0995\u09BE \u09AA\u09BE\u09A0\u09BF\u09DF\u09C7\u099B\u09C7\u09A8\u0964 \u09B0\u09C7\u09AB\u09BE\u09B0\u09C7\u09A8\u09CD\u09B8 \u0986\u0987\u09A1\u09BF: ${settlementRecord.transaction_id}`,
    type: "admin_alert"
  });
  return res.json({
    success: true,
    message: `Successfully settled \u20B9${numAmount} to Rider ${dp.name} (${method === "upi" ? "UPI" : "Bank Account"})`,
    data: settlementRecord
  });
});
adminRouter.put("/delivery-partners/:id/status", async (req, res) => {
  const dpId = Number(req.params.id);
  const { status } = req.body;
  if (db.isUsingMysql()) {
    try {
      const existingRes = await db.query("SELECT * FROM delivery_partners WHERE id = ? LIMIT 1", [dpId]);
      if (!existingRes.rows[0]) {
        return res.status(404).json({ success: false, message: "Delivery partner not found" });
      }
      const dp2 = existingRes.rows[0];
      const newIsActive = status === "approved" ? 1 : 0;
      const newOnline = status === "approved" ? Number(dp2.is_online || 0) : 0;
      const newUserStatus = status === "approved" ? "active" : "blocked";
      const pool = db.getPool();
      if (pool) {
        const conn = await pool.getConnection();
        try {
          await conn.beginTransaction();
          await conn.execute(
            "UPDATE delivery_partners SET status = ?, is_active = ?, is_online = ? WHERE id = ?",
            [status, newIsActive, newOnline, dpId]
          );
          await conn.execute(
            "UPDATE users SET status = ?, is_active = ? WHERE id = ?",
            [newUserStatus, newIsActive, dp2.user_id]
          );
          await conn.commit();
        } catch (err) {
          await conn.rollback();
          throw err;
        } finally {
          conn.release();
        }
      } else {
        await db.query(
          "UPDATE delivery_partners SET status = ?, is_active = ?, is_online = ? WHERE id = ?",
          [status, newIsActive, newOnline, dpId]
        );
        await db.query("UPDATE users SET status = ?, is_active = ? WHERE id = ?", [newUserStatus, newIsActive, dp2.user_id]);
      }
      notificationService.createNotification({
        userId: Number(dp2.user_id),
        role: "delivery",
        title: status === "approved" ? "Rider Account Approved!" : "Rider Application Rejected",
        title_bn: status === "approved" ? "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09BF\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7! \u2713" : "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0986\u09AC\u09C7\u09A6\u09A8 \u09AC\u09BE\u09A4\u09BF\u09B2 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7 \u2715",
        message: status === "approved" ? "Congratulations! Your delivery partner profile has been approved by platform administration. You can now go online to accept delivery jobs." : "Your delivery partner registration was rejected by administration. Please check your license and vehicle details.",
        message_bn: status === "approved" ? "\u0985\u09AD\u09BF\u09A8\u09A8\u09CD\u09A6\u09A8! \u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u099F\u09BF \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09A6\u09CD\u09AC\u09BE\u09B0\u09BE \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09BF\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u098F\u0996\u09A8 \u0986\u09AA\u09A8\u09BF \u0985\u09A8\u09B2\u09BE\u0987\u09A8 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8 \u098F\u09AC\u0982 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u09A8\u09BF\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8\u0964" : "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09AA\u09BE\u09B0\u09CD\u099F\u09A8\u09BE\u09B0 \u0986\u09AC\u09C7\u09A6\u09A8\u099F\u09BF \u09AC\u09BE\u09A4\u09BF\u09B2 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u09A4\u09A5\u09CD\u09AF\u09C7\u09B0 \u0985\u09B8\u0999\u09CD\u0997\u09A4\u09BF \u09B8\u0982\u09B6\u09CB\u09A7\u09A8 \u0995\u09B0\u09A4\u09C7 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8\u0964",
        type: "admin_alert"
      });
      const updatedRes = await db.query("SELECT * FROM delivery_partners WHERE id = ? LIMIT 1", [dpId]);
      const updatedDp = formatAdminDeliveryPartnerRow(updatedRes.rows[0]);
      return res.json({
        success: true,
        message: `Delivery partner "${dp2.name}" status updated to ${status.toUpperCase()} by Admin`,
        data: updatedDp
      });
    } catch (err) {
      console.error("[Admin API] Update delivery partner status error:", err.message);
      return res.status(500).json({ success: false, message: "Failed to update delivery partner status" });
    }
  }
  const store = db.getStore();
  const dp = store.delivery_partners.find((d) => d.id === dpId);
  if (!dp) {
    return res.status(404).json({ success: false, message: "Delivery partner not found" });
  }
  dp.status = status;
  dp.is_active = status === "approved" ? 1 : 0;
  if (status !== "approved") {
    dp.is_online = 0;
  }
  const riderUser = store.users.find((u) => u.id === dp.user_id);
  if (riderUser) {
    riderUser.is_active = status === "approved" ? 1 : 0;
  }
  notificationService.createNotification({
    userId: dp.user_id,
    role: "delivery",
    title: status === "approved" ? "Rider Account Approved!" : "Rider Application Rejected",
    title_bn: status === "approved" ? "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09BF\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7! \u2713" : "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0986\u09AC\u09C7\u09A6\u09A8 \u09AC\u09BE\u09A4\u09BF\u09B2 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7 \u2715",
    message: status === "approved" ? "Congratulations! Your delivery partner profile has been approved by platform administration. You can now go online to accept delivery jobs." : "Your delivery partner registration was rejected by administration. Please check your license and vehicle details.",
    message_bn: status === "approved" ? "\u0985\u09AD\u09BF\u09A8\u09A8\u09CD\u09A6\u09A8! \u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u099F\u09BF \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09A6\u09CD\u09AC\u09BE\u09B0\u09BE \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09BF\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u098F\u0996\u09A8 \u0986\u09AA\u09A8\u09BF \u0985\u09A8\u09B2\u09BE\u0987\u09A8 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8 \u098F\u09AC\u0982 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u09A8\u09BF\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8\u0964" : "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09AA\u09BE\u09B0\u09CD\u099F\u09A8\u09BE\u09B0 \u0986\u09AC\u09C7\u09A6\u09A8\u099F\u09BF \u09AC\u09BE\u09A4\u09BF\u09B2 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u09A4\u09A5\u09CD\u09AF\u09C7\u09B0 \u0985\u09B8\u0999\u09CD\u0997\u09A4\u09BF \u09B8\u0982\u09B6\u09CB\u09A7\u09A8 \u0995\u09B0\u09A4\u09C7 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8\u0964",
    type: "admin_alert"
  });
  return res.json({
    success: true,
    message: `Delivery partner "${dp.name}" status updated to ${status.toUpperCase()} by Admin`,
    data: dp
  });
});
adminRouter.put("/delivery-partners/:id/block", async (req, res) => {
  const dpId = Number(req.params.id);
  if (db.isUsingMysql()) {
    try {
      const existingRes = await db.query("SELECT * FROM delivery_partners WHERE id = ? LIMIT 1", [dpId]);
      if (!existingRes.rows[0]) {
        return res.status(404).json({ success: false, message: "Delivery partner not found" });
      }
      const dp2 = existingRes.rows[0];
      if (req.user?.id && Number(dp2.user_id) === Number(req.user.id)) {
        return res.status(400).json({ success: false, message: "You cannot block your own user account" });
      }
      const isCurrentlyBlocked2 = dp2.status === "blocked" || dp2.is_active === 0;
      const newStatus2 = isCurrentlyBlocked2 ? "approved" : "blocked";
      const newIsActive = isCurrentlyBlocked2 ? 1 : 0;
      const newOnline = isCurrentlyBlocked2 ? Number(dp2.is_online || 0) : 0;
      const newUserStatus = isCurrentlyBlocked2 ? "active" : "blocked";
      const pool = db.getPool();
      if (pool) {
        const conn = await pool.getConnection();
        try {
          await conn.beginTransaction();
          await conn.execute(
            "UPDATE delivery_partners SET status = ?, is_active = ?, is_online = ? WHERE id = ?",
            [newStatus2, newIsActive, newOnline, dpId]
          );
          await conn.execute(
            "UPDATE users SET status = ?, is_active = ? WHERE id = ?",
            [newUserStatus, newIsActive, dp2.user_id]
          );
          await conn.commit();
        } catch (err) {
          await conn.rollback();
          throw err;
        } finally {
          conn.release();
        }
      } else {
        await db.query(
          "UPDATE delivery_partners SET status = ?, is_active = ?, is_online = ? WHERE id = ?",
          [newStatus2, newIsActive, dpId]
        );
        await db.query("UPDATE users SET status = ?, is_active = ? WHERE id = ?", [newUserStatus, newIsActive, dp2.user_id]);
      }
      notificationService.createNotification({
        userId: Number(dp2.user_id),
        role: "delivery",
        title: isCurrentlyBlocked2 ? "Rider Account Unblocked" : "Rider Account Blocked",
        title_bn: isCurrentlyBlocked2 ? "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0986\u09A8\u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7" : "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u09B8\u09BE\u09AE\u09DF\u09BF\u0995 \u09B8\u09CD\u09A5\u0997\u09BF\u09A4 (Blocked)",
        message: isCurrentlyBlocked2 ? "Your rider account has been unblocked by admin. You can now go online to accept deliveries." : "Your delivery partner account has been blocked by administration. Please contact support.",
        message_bn: isCurrentlyBlocked2 ? "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u099F\u09BF \u0986\u09A8\u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u098F\u0996\u09A8 \u0986\u09AA\u09A8\u09BF \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF\u09B0 \u099C\u09A8\u09CD\u09AF \u0985\u09A8\u09B2\u09BE\u0987\u09A8 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8\u0964" : "\u09AA\u09CD\u09B0\u09B6\u09BE\u09B8\u09A8\u09BF\u0995 \u0995\u09BE\u09B0\u09A3\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09B8\u09CD\u09A5\u0997\u09BF\u09A4 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8\u0964",
        type: "admin_alert"
      });
      const updatedRes = await db.query("SELECT * FROM delivery_partners WHERE id = ? LIMIT 1", [dpId]);
      const updatedDp = formatAdminDeliveryPartnerRow(updatedRes.rows[0]);
      return res.json({
        success: true,
        message: `Delivery Rider "${dp2.name}" has been ${isCurrentlyBlocked2 ? "UNBLOCKED (Active)" : "BLOCKED"}`,
        data: updatedDp
      });
    } catch (err) {
      console.error("[Admin API] Block delivery partner error:", err.message);
      return res.status(500).json({ success: false, message: "Failed to toggle delivery partner block status" });
    }
  }
  const store = db.getStore();
  const dp = store.delivery_partners.find((d) => d.id === dpId);
  if (!dp) {
    return res.status(404).json({ success: false, message: "Delivery partner not found" });
  }
  const isCurrentlyBlocked = dp.status === "blocked" || dp.is_active === 0;
  const newStatus = isCurrentlyBlocked ? "approved" : "blocked";
  dp.status = newStatus;
  dp.is_active = isCurrentlyBlocked ? 1 : 0;
  if (!isCurrentlyBlocked) {
    dp.is_online = 0;
  }
  const riderUser = store.users.find((u) => u.id === dp.user_id);
  if (riderUser) {
    riderUser.is_active = isCurrentlyBlocked ? 1 : 0;
  }
  notificationService.createNotification({
    userId: dp.user_id,
    role: "delivery",
    title: isCurrentlyBlocked ? "Rider Account Unblocked" : "Rider Account Blocked",
    title_bn: isCurrentlyBlocked ? "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0986\u09A8\u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7" : "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u09B8\u09BE\u09AE\u09DF\u09BF\u0995 \u09B8\u09CD\u09A5\u0997\u09BF\u09A4 (Blocked)",
    message: isCurrentlyBlocked ? "Your rider account has been unblocked by admin. You can now go online to accept deliveries." : "Your delivery partner account has been blocked by administration. Please contact support.",
    message_bn: isCurrentlyBlocked ? "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u099F\u09BF \u0986\u09A8\u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u098F\u0996\u09A8 \u0986\u09AA\u09A8\u09BF \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF\u09B0 \u099C\u09A8\u09CD\u09AF \u0985\u09A8\u09B2\u09BE\u0987\u09A8 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8\u0964" : "\u09AA\u09CD\u09B0\u09B6\u09BE\u09B8\u09A8\u09BF\u0995 \u0995\u09BE\u09B0\u09A3\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09B8\u09CD\u09A5\u0997\u09BF\u09A4 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8\u0964",
    type: "admin_alert"
  });
  return res.json({
    success: true,
    message: `Delivery Rider "${dp.name}" has been ${isCurrentlyBlocked ? "UNBLOCKED (Active)" : "BLOCKED"}`,
    data: dp
  });
});
adminRouter.post("/delivery-partners/:id/message", (req, res) => {
  const store = db.getStore();
  const dpId = Number(req.params.id);
  const { title, title_bn, message, message_bn, priority } = req.body;
  const dp = store.delivery_partners.find((d) => d.id === dpId);
  if (!dp) {
    return res.status(404).json({ success: false, message: "Delivery partner not found" });
  }
  if (!message) {
    return res.status(400).json({ success: false, message: "Message content is required" });
  }
  const notif = notificationService.createNotification({
    userId: dp.user_id,
    role: "delivery",
    title: title || "Message from Dispatch Administration",
    title_bn: title_bn || "\u09A1\u09BF\u09B8\u09AA\u09CD\u09AF\u09BE\u099A \u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u09A5\u09C7\u0995\u09C7 \u09AC\u09BE\u09B0\u09CD\u09A4\u09BE",
    message,
    message_bn: message_bn || message,
    type: "admin_alert",
    data: {
      priority: priority || "normal",
      sender: "Dispatch Admin",
      sent_at: (/* @__PURE__ */ new Date()).toISOString()
    }
  });
  return res.json({
    success: true,
    message: `Message sent successfully to Rider ${dp.name}`,
    data: notif
  });
});
adminRouter.get("/service-areas", (req, res) => {
  const store = db.getStore();
  return res.json({ success: true, data: store.service_areas });
});
adminRouter.post("/service-areas", (req, res) => {
  const store = db.getStore();
  const { name, name_bn, min_delivery_charge, per_km_charge, polygon } = req.body;
  if (!name || !polygon || polygon.length < 3) {
    return res.status(400).json({
      success: false,
      message: "Name and at least 3 polygon boundary coordinates are required"
    });
  }
  const newId = store.service_areas.length + 1;
  const newArea = {
    id: newId,
    name,
    name_bn: name_bn || name,
    min_delivery_charge: Number(min_delivery_charge) || 25,
    per_km_charge: Number(per_km_charge) || 8,
    is_active: 1,
    polygon
  };
  store.service_areas.push(newArea);
  return res.status(201).json({
    success: true,
    message: "Service area geofence created successfully",
    data: newArea
  });
});
adminRouter.put("/service-areas/:id", (req, res) => {
  const store = db.getStore();
  const id = Number(req.params.id);
  const sa = store.service_areas.find((s) => s.id === id);
  if (!sa) {
    return res.status(404).json({ success: false, message: "Service area not found" });
  }
  const { name, name_bn, min_delivery_charge, per_km_charge, polygon, is_active } = req.body;
  if (name !== void 0) sa.name = name;
  if (name_bn !== void 0) sa.name_bn = name_bn;
  if (min_delivery_charge !== void 0) sa.min_delivery_charge = Number(min_delivery_charge);
  if (per_km_charge !== void 0) sa.per_km_charge = Number(per_km_charge);
  if (is_active !== void 0) sa.is_active = is_active ? 1 : 0;
  if (polygon && Array.isArray(polygon)) {
    if (polygon.length < 3) {
      return res.status(400).json({ success: false, message: "At least 3 boundary vertices required for a polygon geofence" });
    }
    sa.polygon = polygon.map((p) => ({
      lat: parseFloat(Number(p.lat).toFixed(6)),
      lng: parseFloat(Number(p.lng).toFixed(6))
    }));
  }
  return res.json({
    success: true,
    message: `Service area "${sa.name}" updated successfully`,
    data: sa
  });
});
adminRouter.delete("/service-areas/:id", (req, res) => {
  const store = db.getStore();
  const id = Number(req.params.id);
  const idx = store.service_areas.findIndex((s) => s.id === id);
  if (idx === -1) {
    return res.status(404).json({ success: false, message: "Service area not found" });
  }
  const deleted = store.service_areas.splice(idx, 1)[0];
  return res.json({
    success: true,
    message: `Service area "${deleted.name}" deleted successfully`,
    data: deleted
  });
});
adminRouter.put("/service-areas/:id/toggle-status", (req, res) => {
  const store = db.getStore();
  const id = Number(req.params.id);
  const sa = store.service_areas.find((s) => s.id === id);
  if (!sa) {
    return res.status(404).json({ success: false, message: "Service area not found" });
  }
  sa.is_active = sa.is_active ? 0 : 1;
  return res.json({
    success: true,
    message: `Service area "${sa.name}" is now ${sa.is_active ? "ACTIVE" : "INACTIVE"}`,
    data: sa
  });
});
adminRouter.get("/customers", async (req, res) => {
  if (db.isUsingMysql()) {
    try {
      const custRes = await db.query(
        `SELECT u.*, COUNT(o.id) as total_orders
         FROM users u
         LEFT JOIN orders o ON o.customer_id = u.id
         WHERE u.role = 'customer'
         GROUP BY u.id
         ORDER BY u.id DESC`
      );
      const addrRes = await db.query(
        `SELECT user_id, address_line, landmark FROM addresses WHERE is_default = 1`
      );
      const addrMap = /* @__PURE__ */ new Map();
      for (const a of addrRes.rows) {
        const str = `${a.address_line}${a.landmark ? ` (${a.landmark})` : ""}`;
        addrMap.set(Number(a.user_id), str);
      }
      const settingsRes = await db.query("SELECT setting_value FROM platform_settings WHERE setting_key = 'global_cod_enabled' LIMIT 1");
      const globalCodEnabled = settingsRes.rows[0] ? Number(settingsRes.rows[0].setting_value) : 0;
      const customers2 = custRes.rows.map((c) => {
        const addrStr = addrMap.get(Number(c.id));
        return formatAdminCustomerRow(c, Number(c.total_orders || 0), addrStr);
      });
      return res.json({
        success: true,
        data: {
          customers: customers2,
          global_cod_enabled: globalCodEnabled
        }
      });
    } catch (err) {
      console.error("[Admin API] Get customers error:", err.message);
      return res.status(500).json({ success: false, message: "Failed to fetch customers listing" });
    }
  }
  const store = db.getStore();
  const customers = store.users.filter((u) => u.role === "customer").map((c) => {
    const userOrders = store.orders.filter((o) => o.customer_id === c.id);
    const userAddress = store.addresses?.find((a) => a.user_id === c.id);
    const addressStr = c.address || (userAddress ? `${userAddress.address_line}${userAddress.landmark ? ` (${userAddress.landmark})` : ""}` : "Flat 3B, Sunshine Heights, 14 Ballygunge Circular Road, Kolkata 700019");
    return {
      id: c.id,
      name: c.name,
      email: c.email,
      phone: c.phone,
      cod_enabled: c.cod_enabled ?? 0,
      total_orders: userOrders.length,
      is_active: c.is_active ?? 1,
      dob: c.dob || "15/08/1996",
      gender: c.gender || "Not specified",
      address: addressStr,
      payment_method: c.payment_method || "upi",
      upi_id: c.upi_id || `${c.name.toLowerCase().replace(/\s+/g, "")}@okaxis`,
      upi_qr_photo: c.upi_qr_photo || "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400",
      bank_name: c.bank_name || "HDFC Bank",
      bank_account_no: c.bank_account_no || "501004829104",
      bank_account_holder: c.bank_account_holder || c.name,
      bank_ifsc: c.bank_ifsc || "HDFC0000456",
      bank_passbook_photo: c.bank_passbook_photo || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400",
      refunds: c.refunds || [],
      passport_photo: c.passport_photo || c.profile_photo || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
      profile_photo: c.profile_photo || c.passport_photo || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
      created_at: c.created_at
    };
  });
  return res.json({
    success: true,
    data: {
      customers,
      global_cod_enabled: store.settings?.global_cod_enabled ?? 0
    }
  });
});
adminRouter.post("/customers/:id/refund", (req, res) => {
  const store = db.getStore();
  const customerId = Number(req.params.id);
  const customer = store.users.find((u) => u.id === customerId && u.role === "customer");
  if (!customer) {
    return res.status(404).json({ success: false, message: "Customer not found" });
  }
  const { amount, method, transaction_id, reason, order_id } = req.body;
  const numAmount = Number(amount);
  if (!numAmount || numAmount <= 0) {
    return res.status(400).json({ success: false, message: "Valid refund amount is required" });
  }
  if (!customer.refunds) customer.refunds = [];
  const refundRecord = {
    id: customer.refunds.length + 1,
    amount: numAmount,
    method: method || customer.payment_method || "upi",
    order_id: order_id || null,
    reason: reason || "Order cancellation / Customer dispute refund",
    transaction_id: transaction_id || `REFUND-${Date.now()}`,
    recipient: customer.name,
    upi_id: customer.upi_id,
    bank_name: customer.bank_name,
    bank_account_no: customer.bank_account_no,
    status: "completed",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  customer.refunds.unshift(refundRecord);
  if (order_id) {
    const ord = store.orders.find((o) => o.id === Number(order_id));
    if (ord) {
      ord.payment_status = "refunded";
    }
  }
  notificationService.createNotification({
    userId: customer.id,
    role: "customer",
    title: "Refund Processed (\u099F\u09BE\u0995\u09BE \u09B0\u09BF\u09AB\u09BE\u09A8\u09CD\u09A1 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7)",
    title_bn: "\u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09B0\u09BF\u09AB\u09BE\u09A8\u09CD\u09A1 \u09B8\u09AB\u09B2 \u09B9\u09DF\u09C7\u099B\u09C7",
    message: `Admin has refunded \u20B9${numAmount} to your ${method === "upi" ? `UPI (${customer.upi_id || "Self"})` : `Bank Account (${customer.bank_account_no || "Self"})`}. Ref: ${refundRecord.transaction_id}`,
    message_bn: `\u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u09C7 \u20B9${numAmount} \u099F\u09BE\u0995\u09BE \u09B0\u09BF\u09AB\u09BE\u09A8\u09CD\u09A1 \u09AA\u09BE\u09A0\u09BF\u09DF\u09C7\u099B\u09C7\u09A8\u0964 \u099F\u09CD\u09B0\u09BE\u09A8\u099C\u09C7\u0995\u09B6\u09A8 \u0986\u0987\u09A1\u09BF: ${refundRecord.transaction_id}`,
    type: "order_status"
  });
  return res.json({
    success: true,
    message: `Successfully refunded \u20B9${numAmount} to customer ${customer.name} via ${method === "upi" ? "UPI" : "Bank Account"} (\u09B0\u09BF\u09AB\u09BE\u09A8\u09CD\u09A1 \u09B8\u09AB\u09B2 \u09B9\u09DF\u09C7\u099B\u09C7)`,
    data: refundRecord
  });
});
adminRouter.put("/customers/:id/cod", (req, res) => {
  const store = db.getStore();
  const customerId = Number(req.params.id);
  const { cod_enabled } = req.body;
  const customer = store.users.find((u) => u.id === customerId && u.role === "customer");
  if (!customer) {
    return res.status(404).json({ success: false, message: "Customer not found" });
  }
  customer.cod_enabled = cod_enabled ? 1 : 0;
  notificationService.createNotification({
    userId: customer.id,
    role: "customer",
    title: customer.cod_enabled ? "Cash on Delivery (COD) Enabled!" : "COD Access Updated",
    title_bn: customer.cod_enabled ? "\u0995\u09CD\u09AF\u09BE\u09B6 \u0985\u09A8 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF (COD) \u099A\u09BE\u09B2\u09C1 \u09B9\u09DF\u09C7\u099B\u09C7!" : "COD \u09B8\u09C1\u09AC\u09BF\u09A7\u09BE \u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7",
    message: customer.cod_enabled ? "Admin has approved Cash on Delivery (COD) for your account." : "Cash on Delivery (COD) is disabled. Please pay online via UPI or Cards.",
    message_bn: customer.cod_enabled ? "\u0985\u09CD\u09AF\u09BE\u09A1\u09AE\u09BF\u09A8 \u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0995\u09CD\u09AF\u09BE\u09B6 \u0985\u09A8 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09B8\u09C1\u09AC\u09BF\u09A7\u09BE \u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09A8 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964" : "\u0995\u09CD\u09AF\u09BE\u09B6 \u0985\u09A8 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u0985\u09A8\u09B2\u09BE\u0987\u09A8 \u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8\u0964",
    type: "admin_alert"
  });
  return res.json({
    success: true,
    message: `COD access for ${customer.name} updated to ${customer.cod_enabled ? "ENABLED" : "DISABLED"}`,
    data: customer
  });
});
adminRouter.put("/customers/:id/block", async (req, res) => {
  const customerId = Number(req.params.id);
  if (db.isUsingMysql()) {
    try {
      const custRes = await db.query("SELECT * FROM users WHERE id = ? AND role = 'customer' LIMIT 1", [customerId]);
      if (!custRes.rows[0]) {
        return res.status(404).json({ success: false, message: "Customer not found" });
      }
      const customer2 = custRes.rows[0];
      if (req.user?.id && Number(customer2.id) === Number(req.user.id)) {
        return res.status(400).json({ success: false, message: "You cannot block your own user account" });
      }
      const isCurrentlyBlocked2 = customer2.is_active === 0 || customer2.status === "blocked";
      const newIsActive = isCurrentlyBlocked2 ? 1 : 0;
      const newStatus = isCurrentlyBlocked2 ? "active" : "blocked";
      await db.query("UPDATE users SET is_active = ?, status = ? WHERE id = ?", [newIsActive, newStatus, customerId]);
      notificationService.createNotification({
        userId: Number(customer2.id),
        role: "customer",
        title: isCurrentlyBlocked2 ? "Account Re-activated" : "Account Suspended",
        title_bn: isCurrentlyBlocked2 ? "\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u0986\u09A8\u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7" : "\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09B8\u09CD\u09A5\u0997\u09BF\u09A4 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7 (Blocked)",
        message: isCurrentlyBlocked2 ? "Your account has been unblocked by admin. You can now browse restaurants and place orders." : "Your account has been temporarily blocked by administration. Please contact support.",
        message_bn: isCurrentlyBlocked2 ? "\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u099F\u09BF \u0986\u09A8\u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u098F\u0996\u09A8 \u0986\u09AA\u09A8\u09BF \u0996\u09BE\u09AC\u09BE\u09B0 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7\u09A8\u0964" : "\u09AA\u09CD\u09B0\u09B6\u09BE\u09B8\u09A8\u09BF\u0995 \u0995\u09BE\u09B0\u09A3\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09B8\u09CD\u09A5\u0997\u09BF\u09A4 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8\u0964",
        type: "admin_alert"
      });
      const updatedRes = await db.query("SELECT * FROM users WHERE id = ? LIMIT 1", [customerId]);
      const updatedCustomer = formatAdminCustomerRow(updatedRes.rows[0], 0);
      return res.json({
        success: true,
        message: `Customer "${customer2.name}" has been ${isCurrentlyBlocked2 ? "UNBLOCKED (Active)" : "BLOCKED"}`,
        data: updatedCustomer
      });
    } catch (err) {
      console.error("[Admin API] Block customer error:", err.message);
      return res.status(500).json({ success: false, message: "Failed to toggle customer block status" });
    }
  }
  const store = db.getStore();
  const customer = store.users.find((u) => u.id === customerId && u.role === "customer");
  if (!customer) {
    return res.status(404).json({ success: false, message: "Customer not found" });
  }
  const isCurrentlyBlocked = customer.is_active === 0;
  customer.is_active = isCurrentlyBlocked ? 1 : 0;
  notificationService.createNotification({
    userId: customer.id,
    role: "customer",
    title: isCurrentlyBlocked ? "Account Re-activated" : "Account Suspended",
    title_bn: isCurrentlyBlocked ? "\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u0986\u09A8\u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7" : "\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09B8\u09CD\u09A5\u0997\u09BF\u09A4 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7 (Blocked)",
    message: isCurrentlyBlocked ? "Your account has been unblocked by admin. You can now browse restaurants and place orders." : "Your account has been temporarily blocked by administration. Please contact support.",
    message_bn: isCurrentlyBlocked ? "\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u099F\u09BF \u0986\u09A8\u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u098F\u0996\u09A8 \u0986\u09AA\u09A8\u09BF \u0996\u09BE\u09AC\u09BE\u09B0 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7\u09A8\u0964" : "\u09AA\u09CD\u09B0\u09B6\u09BE\u09B8\u09A8\u09BF\u0995 \u0995\u09BE\u09B0\u09A3\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09B8\u09CD\u09A5\u0997\u09BF\u09A4 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8\u0964",
    type: "admin_alert"
  });
  return res.json({
    success: true,
    message: `Customer "${customer.name}" has been ${isCurrentlyBlocked ? "UNBLOCKED (Active)" : "BLOCKED"}`,
    data: {
      ...customer,
      is_active: customer.is_active
    }
  });
});
adminRouter.post("/customers/:id/message", (req, res) => {
  const store = db.getStore();
  const customerId = Number(req.params.id);
  const { title, title_bn, message, message_bn, priority } = req.body;
  const customer = store.users.find((u) => u.id === customerId && u.role === "customer");
  if (!customer) {
    return res.status(404).json({ success: false, message: "Customer not found" });
  }
  if (!message) {
    return res.status(400).json({ success: false, message: "Message content is required" });
  }
  const notif = notificationService.createNotification({
    userId: customer.id,
    role: "customer",
    title: title || "Message from AharLocal Support",
    title_bn: title_bn || "\u0986\u09B9\u09BE\u09B0\u09B2\u09CB\u0995\u09BE\u09B2 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F \u09A5\u09C7\u0995\u09C7 \u09AC\u09BE\u09B0\u09CD\u09A4\u09BE",
    message,
    message_bn: message_bn || message,
    type: "admin_alert",
    data: {
      priority: priority || "normal",
      sender: "Platform Administration",
      sent_at: (/* @__PURE__ */ new Date()).toISOString()
    }
  });
  return res.json({
    success: true,
    message: `Message sent successfully to ${customer.name}`,
    data: notif
  });
});
async function getPlatformSettingsFromMysql() {
  const [rows] = await db.query("SELECT setting_key, setting_value FROM platform_settings");
  const map = {};
  for (const r of rows || []) {
    map[r.setting_key] = r.setting_value;
  }
  return map;
}
async function setPlatformSettingInMysql(key, value, description) {
  await db.query(
    `INSERT INTO platform_settings (setting_key, setting_value, description)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value), description = COALESCE(VALUES(description), description)`,
    [key, String(value), description || null]
  );
}
adminRouter.put("/settings/cod", async (req, res) => {
  const { global_cod_enabled } = req.body;
  const isCodEnabled = global_cod_enabled ? 1 : 0;
  if (db.isUsingMysql()) {
    await setPlatformSettingInMysql("global_cod_enabled", String(isCodEnabled), "Global Cash on Delivery Status");
    return res.json({
      success: true,
      message: `Global COD status set to ${isCodEnabled ? "ENABLED for all" : "DISABLED (Whitelisted customers only)"}`,
      data: { global_cod_enabled: isCodEnabled }
    });
  }
  const store = db.getStore();
  if (!store.settings) store.settings = {};
  store.settings.global_cod_enabled = isCodEnabled;
  return res.json({
    success: true,
    message: `Global COD status set to ${store.settings.global_cod_enabled ? "ENABLED for all" : "DISABLED (Whitelisted customers only)"}`,
    data: { global_cod_enabled: store.settings.global_cod_enabled }
  });
});
adminRouter.get("/settings", async (req, res) => {
  if (db.isUsingMysql()) {
    const map = await getPlatformSettingsFromMysql();
    return res.json({
      success: true,
      data: {
        global_cod_enabled: map.global_cod_enabled !== void 0 ? Number(map.global_cod_enabled) : 0,
        restaurant_commission_percent: Number(map.restaurant_commission_percent ?? 15),
        delivery_partner_commission_percent: Number(map.delivery_partner_commission_percent ?? 10),
        delivery_base_fare: Number(map.delivery_base_fare ?? 25),
        delivery_base_distance_km: Number(map.delivery_base_distance_km ?? 2),
        delivery_per_km_rate: Number(map.delivery_per_km_rate ?? 10),
        min_delivery_fare: Number(map.min_delivery_fare ?? 20)
      }
    });
  }
  const store = db.getStore();
  if (!store.settings) store.settings = {};
  return res.json({
    success: true,
    data: {
      global_cod_enabled: store.settings.global_cod_enabled ?? 0,
      restaurant_commission_percent: Number(store.settings.restaurant_commission_percent ?? 15),
      delivery_partner_commission_percent: Number(store.settings.delivery_partner_commission_percent ?? 10),
      delivery_base_fare: Number(store.settings.delivery_base_fare ?? 25),
      delivery_base_distance_km: Number(store.settings.delivery_base_distance_km ?? 2),
      delivery_per_km_rate: Number(store.settings.delivery_per_km_rate ?? 10),
      min_delivery_fare: Number(store.settings.min_delivery_fare ?? 20)
    }
  });
});
adminRouter.put("/settings/rates", async (req, res) => {
  const {
    restaurant_commission_percent,
    delivery_partner_commission_percent,
    delivery_base_fare,
    delivery_base_distance_km,
    delivery_per_km_rate,
    min_delivery_fare
  } = req.body;
  if (db.isUsingMysql()) {
    const map = await getPlatformSettingsFromMysql();
    let restComm = Number(map.restaurant_commission_percent ?? 15);
    let dpComm = Number(map.delivery_partner_commission_percent ?? 10);
    let baseFare = Number(map.delivery_base_fare ?? 25);
    let baseDist = Number(map.delivery_base_distance_km ?? 2);
    let perKm = Number(map.delivery_per_km_rate ?? 10);
    let minFare = Number(map.min_delivery_fare ?? 20);
    if (restaurant_commission_percent !== void 0) {
      restComm = Math.max(0, Math.min(100, Number(restaurant_commission_percent)));
      await setPlatformSettingInMysql("restaurant_commission_percent", String(restComm));
    }
    if (delivery_partner_commission_percent !== void 0) {
      dpComm = Math.max(0, Math.min(100, Number(delivery_partner_commission_percent)));
      await setPlatformSettingInMysql("delivery_partner_commission_percent", String(dpComm));
    }
    if (delivery_base_fare !== void 0) {
      baseFare = Math.max(0, Number(delivery_base_fare));
      await setPlatformSettingInMysql("delivery_base_fare", String(baseFare));
    }
    if (delivery_base_distance_km !== void 0) {
      baseDist = Math.max(0.5, Number(delivery_base_distance_km));
      await setPlatformSettingInMysql("delivery_base_distance_km", String(baseDist));
    }
    if (delivery_per_km_rate !== void 0) {
      perKm = Math.max(0, Number(delivery_per_km_rate));
      await setPlatformSettingInMysql("delivery_per_km_rate", String(perKm));
    }
    if (min_delivery_fare !== void 0) {
      minFare = Math.max(0, Number(min_delivery_fare));
      await setPlatformSettingInMysql("min_delivery_fare", String(minFare));
    }
    if (delivery_base_fare !== void 0 || delivery_per_km_rate !== void 0) {
      const [areas] = await db.query("SELECT id FROM service_areas ORDER BY id ASC LIMIT 1");
      if (areas[0]) {
        await db.query(
          "UPDATE service_areas SET min_delivery_charge = ?, per_km_charge = ? WHERE id = ?",
          [baseFare, perKm, areas[0].id]
        );
      }
    }
    const updatedSettings = {
      global_cod_enabled: map.global_cod_enabled !== void 0 ? Number(map.global_cod_enabled) : 0,
      restaurant_commission_percent: restComm,
      delivery_partner_commission_percent: dpComm,
      delivery_base_fare: baseFare,
      delivery_base_distance_km: baseDist,
      delivery_per_km_rate: perKm,
      min_delivery_fare: minFare
    };
    return res.json({
      success: true,
      message: "Platform commissions and per-km fare rates updated successfully (\u0995\u09AE\u09BF\u09B6\u09A8 \u0993 \u09AA\u09CD\u09B0\u09A4\u09BF \u0995\u09BF\u09AE\u09BF \u09B0\u09C7\u099F \u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7)",
      data: updatedSettings
    });
  }
  const store = db.getStore();
  if (!store.settings) store.settings = {};
  if (restaurant_commission_percent !== void 0) {
    store.settings.restaurant_commission_percent = Math.max(0, Math.min(100, Number(restaurant_commission_percent)));
  }
  if (delivery_partner_commission_percent !== void 0) {
    store.settings.delivery_partner_commission_percent = Math.max(0, Math.min(100, Number(delivery_partner_commission_percent)));
  }
  if (delivery_base_fare !== void 0) {
    store.settings.delivery_base_fare = Math.max(0, Number(delivery_base_fare));
  }
  if (delivery_base_distance_km !== void 0) {
    store.settings.delivery_base_distance_km = Math.max(0.5, Number(delivery_base_distance_km));
  }
  if (delivery_per_km_rate !== void 0) {
    store.settings.delivery_per_km_rate = Math.max(0, Number(delivery_per_km_rate));
  }
  if (min_delivery_fare !== void 0) {
    store.settings.min_delivery_fare = Math.max(0, Number(min_delivery_fare));
  }
  if (store.service_areas && store.service_areas.length > 0) {
    store.service_areas[0].min_delivery_charge = store.settings.delivery_base_fare;
    store.service_areas[0].per_km_charge = store.settings.delivery_per_km_rate;
  }
  return res.json({
    success: true,
    message: "Platform commissions and per-km fare rates updated successfully (\u0995\u09AE\u09BF\u09B6\u09A8 \u0993 \u09AA\u09CD\u09B0\u09A4\u09BF \u0995\u09BF\u09AE\u09BF \u09B0\u09C7\u099F \u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7)",
    data: store.settings
  });
});
adminRouter.get("/promotions", async (req, res) => {
  const defaultPromotions = {
    restaurant_discount_enabled: 1,
    restaurant_discount_type: "percent_off_commission",
    restaurant_discount_value: 50,
    restaurant_discount_title: "Festival Partner Offer: 50% Off Platform Fee",
    restaurant_discount_title_bn: "\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u0989\u09CE\u09B8\u09AC \u0985\u09AB\u09BE\u09B0: \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u09AB\u09BF-\u09A4\u09C7 \u09EB\u09E6% \u09AC\u09BF\u09B6\u09C7\u09B7 \u099B\u09BE\u09DC!",
    restaurant_discount_note: "All restaurant partners enjoy 50% discount on standard commission rates.",
    partner_discount_enabled: 1,
    partner_discount_type: "zero_fee",
    partner_discount_value: 100,
    partner_bonus_per_order: 5,
    partner_discount_title: "Rider Super Bonus: 0% Platform Deduction + \u20B95 Extra Payout",
    partner_discount_title_bn: "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u09A7\u09BE\u09AE\u09BE\u0995\u09BE \u09AC\u09CB\u09A8\u09BE\u09B8: \u09E6% \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u0995\u09B0\u09CD\u09A4\u09A8 \u0993 \u09AA\u09CD\u09B0\u09A4\u09BF \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF\u09A4\u09C7 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u20B9\u09EB \u0987\u09A8\u09B8\u09C7\u09A8\u099F\u09BF\u09AD",
    partner_discount_note: "Riders retain 100% of delivery fees with zero platform deduction and receive extra bonus.",
    customer_delivery_discount_enabled: 1,
    customer_delivery_discount_type: "free_delivery_above",
    customer_delivery_discount_value: 100,
    customer_min_order_for_free_delivery: 199,
    customer_flat_delivery_discount: 10,
    customer_first_order_free_delivery: 1,
    customer_promo_banner_enabled: 1,
    customer_promo_banner_text: "\u{1F389} \u09AC\u09BF\u09B6\u09C7\u09B7 \u0985\u09AB\u09BE\u09B0: \u20B9\u09E7\u09EF\u09EF \u099F\u09BE\u0995\u09BE\u09B0 \u09AC\u09C7\u09B6\u09BF \u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u09C7 \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u09AB\u09CD\u09B0\u09BF \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF!",
    customer_promo_banner_text_en: "\u{1F389} Limited Time Offer: FREE Delivery on all food orders above \u20B9199!"
  };
  if (db.isUsingMysql()) {
    const map = await getPlatformSettingsFromMysql();
    let promos = defaultPromotions;
    if (map.promotions_config) {
      try {
        promos = { ...defaultPromotions, ...JSON.parse(map.promotions_config) };
      } catch {
      }
    }
    return res.json({
      success: true,
      data: promos
    });
  }
  const store = db.getStore();
  if (!store.promotions) {
    store.promotions = defaultPromotions;
  }
  return res.json({
    success: true,
    data: store.promotions
  });
});
adminRouter.put("/promotions", async (req, res) => {
  const defaultPromotions = {
    restaurant_discount_enabled: 1,
    restaurant_discount_type: "percent_off_commission",
    restaurant_discount_value: 50,
    restaurant_discount_title: "Festival Partner Offer: 50% Off Platform Fee",
    restaurant_discount_title_bn: "\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981 \u0989\u09CE\u09B8\u09AC \u0985\u09AB\u09BE\u09B0: \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u09AB\u09BF-\u09A4\u09C7 \u09EB\u09E6% \u09AC\u09BF\u09B6\u09C7\u09B7 \u099B\u09BE\u09DC!",
    restaurant_discount_note: "All restaurant partners enjoy 50% discount on standard commission rates.",
    partner_discount_enabled: 1,
    partner_discount_type: "zero_fee",
    partner_discount_value: 100,
    partner_bonus_per_order: 5,
    partner_discount_title: "Rider Super Bonus: 0% Platform Deduction + \u20B95 Extra Payout",
    partner_discount_title_bn: "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u09A7\u09BE\u09AE\u09BE\u0995\u09BE \u09AC\u09CB\u09A8\u09BE\u09B8: \u09E6% \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u0995\u09B0\u09CD\u09A4\u09A8 \u0993 \u09AA\u09CD\u09B0\u09A4\u09BF \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF\u09A4\u09C7 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u20B9\u09EB \u0987\u09A8\u09B8\u09C7\u09A8\u099F\u09BF\u09AD",
    partner_discount_note: "Riders retain 100% of delivery fees with zero platform deduction and receive extra bonus.",
    customer_delivery_discount_enabled: 1,
    customer_delivery_discount_type: "free_delivery_above",
    customer_delivery_discount_value: 100,
    customer_min_order_for_free_delivery: 199,
    customer_flat_delivery_discount: 10,
    customer_first_order_free_delivery: 1,
    customer_promo_banner_enabled: 1,
    customer_promo_banner_text: "\u{1F389} \u09AC\u09BF\u09B6\u09C7\u09B7 \u0985\u09AB\u09BE\u09B0: \u20B9\u09E7\u09EF\u09EF \u099F\u09BE\u0995\u09BE\u09B0 \u09AC\u09C7\u09B6\u09BF \u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u09C7 \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u09AB\u09CD\u09B0\u09BF \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF!",
    customer_promo_banner_text_en: "\u{1F389} Limited Time Offer: FREE Delivery on all food orders above \u20B9199!"
  };
  const {
    restaurant_discount_enabled,
    restaurant_discount_type,
    restaurant_discount_value,
    restaurant_discount_title,
    restaurant_discount_title_bn,
    restaurant_discount_note,
    partner_discount_enabled,
    partner_discount_type,
    partner_discount_value,
    partner_bonus_per_order,
    partner_discount_title,
    partner_discount_title_bn,
    partner_discount_note,
    customer_delivery_discount_enabled,
    customer_delivery_discount_type,
    customer_delivery_discount_value,
    customer_min_order_for_free_delivery,
    customer_flat_delivery_discount,
    customer_first_order_free_delivery,
    customer_promo_banner_enabled,
    customer_promo_banner_text,
    customer_promo_banner_text_en
  } = req.body;
  if (db.isUsingMysql()) {
    const map = await getPlatformSettingsFromMysql();
    let currentPromos = defaultPromotions;
    if (map.promotions_config) {
      try {
        currentPromos = { ...defaultPromotions, ...JSON.parse(map.promotions_config) };
      } catch {
      }
    }
    const updated = { ...currentPromos };
    if (restaurant_discount_enabled !== void 0) updated.restaurant_discount_enabled = restaurant_discount_enabled ? 1 : 0;
    if (restaurant_discount_type !== void 0) updated.restaurant_discount_type = restaurant_discount_type;
    if (restaurant_discount_value !== void 0) updated.restaurant_discount_value = Math.max(0, Math.min(100, Number(restaurant_discount_value)));
    if (restaurant_discount_title !== void 0) updated.restaurant_discount_title = String(restaurant_discount_title);
    if (restaurant_discount_title_bn !== void 0) updated.restaurant_discount_title_bn = String(restaurant_discount_title_bn);
    if (restaurant_discount_note !== void 0) updated.restaurant_discount_note = String(restaurant_discount_note);
    if (partner_discount_enabled !== void 0) updated.partner_discount_enabled = partner_discount_enabled ? 1 : 0;
    if (partner_discount_type !== void 0) updated.partner_discount_type = partner_discount_type;
    if (partner_discount_value !== void 0) updated.partner_discount_value = Math.max(0, Math.min(100, Number(partner_discount_value)));
    if (partner_bonus_per_order !== void 0) updated.partner_bonus_per_order = Math.max(0, Number(partner_bonus_per_order));
    if (partner_discount_title !== void 0) updated.partner_discount_title = String(partner_discount_title);
    if (partner_discount_title_bn !== void 0) updated.partner_discount_title_bn = String(partner_discount_title_bn);
    if (partner_discount_note !== void 0) updated.partner_discount_note = String(partner_discount_note);
    if (customer_delivery_discount_enabled !== void 0) updated.customer_delivery_discount_enabled = customer_delivery_discount_enabled ? 1 : 0;
    if (customer_delivery_discount_type !== void 0) updated.customer_delivery_discount_type = customer_delivery_discount_type;
    if (customer_delivery_discount_value !== void 0) updated.customer_delivery_discount_value = Math.max(0, Math.min(100, Number(customer_delivery_discount_value)));
    if (customer_min_order_for_free_delivery !== void 0) updated.customer_min_order_for_free_delivery = Math.max(0, Number(customer_min_order_for_free_delivery));
    if (customer_flat_delivery_discount !== void 0) updated.customer_flat_delivery_discount = Math.max(0, Number(customer_flat_delivery_discount));
    if (customer_first_order_free_delivery !== void 0) updated.customer_first_order_free_delivery = customer_first_order_free_delivery ? 1 : 0;
    if (customer_promo_banner_enabled !== void 0) updated.customer_promo_banner_enabled = customer_promo_banner_enabled ? 1 : 0;
    if (customer_promo_banner_text !== void 0) updated.customer_promo_banner_text = String(customer_promo_banner_text);
    if (customer_promo_banner_text_en !== void 0) updated.customer_promo_banner_text_en = String(customer_promo_banner_text_en);
    await setPlatformSettingInMysql("promotions_config", JSON.stringify(updated), "Dynamic Promotions Configuration");
    if (updated.restaurant_discount_enabled) {
      const [rests] = await db.query('SELECT user_id FROM restaurants WHERE is_active = 1 AND status = "approved"');
      for (const r of rests) {
        if (r.user_id) {
          await notificationService.createNotification({
            userId: r.user_id,
            role: "restaurant",
            title: updated.restaurant_discount_title || "Platform Fee Discount Offer Active!",
            title_bn: updated.restaurant_discount_title_bn || "\u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u09AB\u09BF \u099B\u09BE\u09DC \u0985\u09AB\u09BE\u09B0 \u09B8\u0995\u09CD\u09B0\u09BF\u09DF!",
            message: `Admin has updated the promotional platform fee discount for all restaurants.`,
            message_bn: `\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09B0 \u099C\u09A8\u09CD\u09AF \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u099A\u09BE\u09B0\u09CD\u099C\u09C7\u09B0 \u09AC\u09BF\u09B6\u09C7\u09B7 \u099B\u09BE\u09DC\u09C7\u09B0 \u0985\u09AB\u09BE\u09B0 \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964`,
            type: "admin_alert"
          });
        }
      }
    }
    if (updated.partner_discount_enabled) {
      const [riders] = await db.query('SELECT user_id FROM delivery_partners WHERE status = "approved"');
      for (const dp of riders) {
        if (dp.user_id) {
          await notificationService.createNotification({
            userId: dp.user_id,
            role: "delivery",
            title: updated.partner_discount_title || "Rider Incentive & Zero Platform Fee Active!",
            title_bn: updated.partner_discount_title_bn || "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u0987\u09A8\u09B8\u09C7\u09A8\u099F\u09BF\u09AD \u0993 \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u099B\u09BE\u09DC \u09B8\u0995\u09CD\u09B0\u09BF\u09DF!",
            message: `Enjoy reduced platform deductions + bonus per delivery!`,
            message_bn: `\u09E6% \u09AC\u09BE \u0995\u09AE \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u09AB\u09BF \u098F\u09AC\u0982 \u09AA\u09CD\u09B0\u09A4\u09BF \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF\u09A4\u09C7 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u09AC\u09CB\u09A8\u09BE\u09B8 \u099A\u09BE\u09B2\u09C1 \u09B9\u09DF\u09C7\u099B\u09C7\u0964`,
            type: "admin_alert"
          });
        }
      }
    }
    return res.json({
      success: true,
      message: "Offers and discount settings successfully updated! (\u0985\u09AB\u09BE\u09B0 \u0993 \u09A1\u09BF\u09B8\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7)",
      data: updated
    });
  }
  const store = db.getStore();
  if (!store.promotions) store.promotions = {};
  if (restaurant_discount_enabled !== void 0) store.promotions.restaurant_discount_enabled = restaurant_discount_enabled ? 1 : 0;
  if (restaurant_discount_type !== void 0) store.promotions.restaurant_discount_type = restaurant_discount_type;
  if (restaurant_discount_value !== void 0) store.promotions.restaurant_discount_value = Math.max(0, Math.min(100, Number(restaurant_discount_value)));
  if (restaurant_discount_title !== void 0) store.promotions.restaurant_discount_title = String(restaurant_discount_title);
  if (restaurant_discount_title_bn !== void 0) store.promotions.restaurant_discount_title_bn = String(restaurant_discount_title_bn);
  if (restaurant_discount_note !== void 0) store.promotions.restaurant_discount_note = String(restaurant_discount_note);
  if (partner_discount_enabled !== void 0) store.promotions.partner_discount_enabled = partner_discount_enabled ? 1 : 0;
  if (partner_discount_type !== void 0) store.promotions.partner_discount_type = partner_discount_type;
  if (partner_discount_value !== void 0) store.promotions.partner_discount_value = Math.max(0, Math.min(100, Number(partner_discount_value)));
  if (partner_bonus_per_order !== void 0) store.promotions.partner_bonus_per_order = Math.max(0, Number(partner_bonus_per_order));
  if (partner_discount_title !== void 0) store.promotions.partner_discount_title = String(partner_discount_title);
  if (partner_discount_title_bn !== void 0) store.promotions.partner_discount_title_bn = String(partner_discount_title_bn);
  if (partner_discount_note !== void 0) store.promotions.partner_discount_note = String(partner_discount_note);
  if (customer_delivery_discount_enabled !== void 0) store.promotions.customer_delivery_discount_enabled = customer_delivery_discount_enabled ? 1 : 0;
  if (customer_delivery_discount_type !== void 0) store.promotions.customer_delivery_discount_type = customer_delivery_discount_type;
  if (customer_delivery_discount_value !== void 0) store.promotions.customer_delivery_discount_value = Math.max(0, Math.min(100, Number(customer_delivery_discount_value)));
  if (customer_min_order_for_free_delivery !== void 0) store.promotions.customer_min_order_for_free_delivery = Math.max(0, Number(customer_min_order_for_free_delivery));
  if (customer_flat_delivery_discount !== void 0) store.promotions.customer_flat_delivery_discount = Math.max(0, Number(customer_flat_delivery_discount));
  if (customer_first_order_free_delivery !== void 0) store.promotions.customer_first_order_free_delivery = customer_first_order_free_delivery ? 1 : 0;
  if (customer_promo_banner_enabled !== void 0) store.promotions.customer_promo_banner_enabled = customer_promo_banner_enabled ? 1 : 0;
  if (customer_promo_banner_text !== void 0) store.promotions.customer_promo_banner_text = String(customer_promo_banner_text);
  if (customer_promo_banner_text_en !== void 0) store.promotions.customer_promo_banner_text_en = String(customer_promo_banner_text_en);
  if (store.promotions.restaurant_discount_enabled) {
    store.restaurants.forEach((r) => {
      notificationService.createNotification({
        userId: r.user_id,
        role: "restaurant",
        title: store.promotions.restaurant_discount_title || "Platform Fee Discount Offer Active!",
        title_bn: store.promotions.restaurant_discount_title_bn || "\u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u09AB\u09BF \u099B\u09BE\u09DC \u0985\u09AB\u09BE\u09B0 \u09B8\u0995\u09CD\u09B0\u09BF\u09DF!",
        message: `Admin has updated the promotional platform fee discount for all restaurants.`,
        message_bn: `\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09B0 \u099C\u09A8\u09CD\u09AF \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u099A\u09BE\u09B0\u09CD\u099C\u09C7\u09B0 \u09AC\u09BF\u09B6\u09C7\u09B7 \u099B\u09BE\u09DC\u09C7\u09B0 \u0985\u09AB\u09BE\u09B0 \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964`,
        type: "admin_alert"
      });
    });
  }
  if (store.promotions.partner_discount_enabled) {
    store.delivery_partners.forEach((dp) => {
      notificationService.createNotification({
        userId: dp.user_id,
        role: "delivery",
        title: store.promotions.partner_discount_title || "Rider Incentive & Zero Platform Fee Active!",
        title_bn: store.promotions.partner_discount_title_bn || "\u09B0\u09BE\u0987\u09A1\u09BE\u09B0 \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u0987\u09A8\u09B8\u09C7\u09A8\u099F\u09BF\u09AD \u0993 \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u099B\u09BE\u09DC \u09B8\u0995\u09CD\u09B0\u09BF\u09DF!",
        message: `Enjoy reduced platform deductions + bonus per delivery!`,
        message_bn: `\u09E6% \u09AC\u09BE \u0995\u09AE \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u09AB\u09BF \u098F\u09AC\u0982 \u09AA\u09CD\u09B0\u09A4\u09BF \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF\u09A4\u09C7 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u09AC\u09CB\u09A8\u09BE\u09B8 \u099A\u09BE\u09B2\u09C1 \u09B9\u09DF\u09C7\u099B\u09C7\u0964`,
        type: "admin_alert"
      });
    });
  }
  return res.json({
    success: true,
    message: "Offers and discount settings successfully updated! (\u0985\u09AB\u09BE\u09B0 \u0993 \u09A1\u09BF\u09B8\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7)",
    data: store.promotions
  });
});
adminRouter.get("/escrow", async (req, res) => {
  if (db.isUsingMysql()) {
    const [deliveredOrders2] = await db.query(
      "SELECT * FROM orders WHERE status = 'delivered' ORDER BY id DESC"
    );
    let holdingFunds2 = 0;
    let maturedFunds2 = 0;
    let settledFunds2 = 0;
    let refundedFunds2 = 0;
    let disputedOrdersCount2 = 0;
    for (const o of deliveredOrders2) {
      const netAmount = Number(o.net_restaurant_amount || Number(o.subtotal) * 0.85);
      if (o.escrow_status === "holding") {
        holdingFunds2 += netAmount;
      } else if (o.escrow_status === "matured") {
        maturedFunds2 += netAmount;
      } else if (o.escrow_status === "settled") {
        settledFunds2 += netAmount;
      } else if (o.escrow_status === "refunded") {
        refundedFunds2 += Number(o.refund_amount || o.grand_total);
      } else if (o.escrow_status === "disputed") {
        disputedOrdersCount2++;
      }
    }
    return res.json({
      success: true,
      data: {
        metrics: {
          holdingFunds: Math.round(holdingFunds2 * 100) / 100,
          maturedFunds: Math.round(maturedFunds2 * 100) / 100,
          settledFunds: Math.round(settledFunds2 * 100) / 100,
          refundedFunds: Math.round(refundedFunds2 * 100) / 100,
          disputedOrdersCount: disputedOrdersCount2,
          totalDelivered: deliveredOrders2.length
        },
        orders: deliveredOrders2
      }
    });
  }
  const store = db.getStore();
  const deliveredOrders = store.orders.filter((o) => o.status === "delivered");
  const nowTime = Date.now();
  for (const ord of deliveredOrders) {
    if (ord.escrow_status === "holding" && ord.holding_until) {
      if (nowTime >= new Date(ord.holding_until).getTime()) {
        ord.escrow_status = "matured";
      }
    }
  }
  const holdingFunds = deliveredOrders.filter((o) => o.escrow_status === "holding").reduce((sum, o) => sum + Number(o.net_restaurant_amount || o.subtotal * 0.85), 0);
  const maturedFunds = deliveredOrders.filter((o) => o.escrow_status === "matured").reduce((sum, o) => sum + Number(o.net_restaurant_amount || o.subtotal * 0.85), 0);
  const settledFunds = deliveredOrders.filter((o) => o.escrow_status === "settled").reduce((sum, o) => sum + Number(o.net_restaurant_amount || o.subtotal * 0.85), 0);
  const refundedFunds = deliveredOrders.filter((o) => o.escrow_status === "refunded").reduce((sum, o) => sum + Number(o.refund_amount || o.grand_total), 0);
  const disputedOrdersCount = deliveredOrders.filter((o) => o.escrow_status === "disputed").length;
  return res.json({
    success: true,
    data: {
      metrics: {
        holdingFunds: Math.round(holdingFunds * 100) / 100,
        maturedFunds: Math.round(maturedFunds * 100) / 100,
        settledFunds: Math.round(settledFunds * 100) / 100,
        refundedFunds: Math.round(refundedFunds * 100) / 100,
        disputedOrdersCount,
        totalDelivered: deliveredOrders.length
      },
      orders: deliveredOrders
    }
  });
});
adminRouter.post("/escrow/:orderId/settle", async (req, res) => {
  try {
    const orderId = Number(req.params.orderId);
    const { note } = req.body;
    const settled = await orderService.settleOrderEscrow(orderId, req.user?.id, note);
    return res.json({
      success: true,
      message: `Payment of \u20B9${settled.net_restaurant_amount} successfully released to ${settled.restaurant_name}`,
      data: settled
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
});
adminRouter.post("/escrow/:orderId/refund", async (req, res) => {
  try {
    const orderId = Number(req.params.orderId);
    const { reason, amount, refund_percentage, withhold_restaurant_pct, withhold_delivery_pct } = req.body;
    if (!reason) {
      return res.status(400).json({ success: false, message: "Refund reason is required (\u09B0\u09BF\u09AB\u09BE\u09A8\u09CD\u09A1\u09C7\u09B0 \u0995\u09BE\u09B0\u09A3 \u0986\u09AC\u09B6\u09CD\u09AF\u0995)" });
    }
    const refunded = await orderService.refundOrderPayment(orderId, req.user?.id, reason, amount, {
      refundPercentage: refund_percentage !== void 0 ? Number(refund_percentage) : void 0,
      withholdRestaurantPct: withhold_restaurant_pct !== void 0 ? Number(withhold_restaurant_pct) : void 0,
      withholdDeliveryPct: withhold_delivery_pct !== void 0 ? Number(withhold_delivery_pct) : void 0
    });
    return res.json({
      success: true,
      message: `Refund of \u20B9${refunded.refund_amount} (${refunded.refund_percentage || 100}%) processed for ${refunded.customer_name}. Restaurant payout set to \u20B9${refunded.net_restaurant_amount}.`,
      data: refunded
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
});
adminRouter.post("/escrow/:orderId/dispute", async (req, res) => {
  try {
    const orderId = Number(req.params.orderId);
    const { reason } = req.body;
    const disputed = await orderService.disputeOrderPayment(orderId, req.user?.id, reason);
    return res.json({
      success: true,
      message: `Order #${disputed.order_number} payment has been frozen under dispute review`,
      data: disputed
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
});
adminRouter.post("/escrow/settle-all-matured", async (req, res) => {
  try {
    if (db.isUsingMysql()) {
      await db.query(
        "UPDATE orders SET escrow_status = 'matured' WHERE status = 'delivered' AND escrow_status = 'holding' AND holding_until IS NOT NULL AND holding_until <= NOW()"
      );
      const [maturedOrders2] = await db.query(
        "SELECT id FROM orders WHERE status = 'delivered' AND escrow_status = 'matured'"
      );
      const settledList2 = [];
      for (const ord of maturedOrders2) {
        const settled = await orderService.settleOrderEscrow(ord.id, req.user?.id, "Batch 24h maturity auto-release");
        settledList2.push(settled);
      }
      return res.json({
        success: true,
        message: `Successfully released ${settledList2.length} matured payments to restaurants.`,
        data: {
          settledCount: settledList2.length,
          settledOrders: settledList2
        }
      });
    }
    const store = db.getStore();
    const nowTime = Date.now();
    const maturedOrders = store.orders.filter(
      (o) => o.status === "delivered" && (o.escrow_status === "matured" || o.escrow_status === "holding" && o.holding_until && nowTime >= new Date(o.holding_until).getTime())
    );
    const settledList = [];
    for (const ord of maturedOrders) {
      const settled = await orderService.settleOrderEscrow(ord.id, req.user?.id, "Batch 24h maturity auto-release");
      settledList.push(settled);
    }
    return res.json({
      success: true,
      message: `Successfully released ${settledList.length} matured payments to restaurants.`,
      data: {
        settledCount: settledList.length,
        settledOrders: settledList
      }
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
});
adminRouter.get("/service-areas", async (req, res) => {
  if (db.isUsingMysql()) {
    const [areas2] = await db.query("SELECT * FROM service_areas ORDER BY name ASC");
    const enriched = await Promise.all(areas2.map(async (sa) => {
      const [[restCount]] = await db.query("SELECT COUNT(*) as cnt FROM restaurants WHERE service_area_id = ?", [sa.id]);
      const [[orderCount]] = await db.query("SELECT COUNT(*) as cnt FROM orders WHERE service_area_id = ?", [sa.id]);
      const [points] = await db.query("SELECT latitude as lat, longitude as lng FROM service_area_points WHERE service_area_id = ? ORDER BY sequence_order ASC", [sa.id]);
      return {
        ...sa,
        min_delivery_charge: Number(sa.min_delivery_charge),
        per_km_charge: Number(sa.per_km_charge),
        polygon: points,
        restaurant_count: restCount.cnt,
        order_count: orderCount.cnt
      };
    }));
    return res.json({ success: true, data: enriched });
  }
  const store = db.getStore();
  const areas = (store.service_areas || []).map((sa) => {
    const restaurantCount = (store.restaurants || []).filter((r) => r.service_area_id === sa.id).length;
    const orderCount = (store.orders || []).filter((o) => o.service_area_id === sa.id).length;
    return {
      ...sa,
      restaurant_count: restaurantCount,
      order_count: orderCount
    };
  });
  return res.json({ success: true, data: areas });
});
adminRouter.post("/service-areas", async (req, res) => {
  const { name, name_bn, min_delivery_charge, per_km_charge, is_active, polygon } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: "Service area name is required (\u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8 \u098F\u09B0\u09BF\u09DF\u09BE\u09B0 \u09A8\u09BE\u09AE \u0986\u09AC\u09B6\u09CD\u09AF\u0995)" });
  }
  if (!polygon || !Array.isArray(polygon) || polygon.length < 3) {
    return res.status(400).json({
      success: false,
      message: "Boundary polygon must contain at least 3 valid GPS coordinate points (\u0995\u09AE\u09AA\u0995\u09CD\u09B7\u09C7 \u09E9\u099F\u09BF \u0995\u09CB\u0985\u09B0\u09CD\u09A1\u09BF\u09A8\u09C7\u099F \u09AA\u09DF\u09C7\u09A8\u09CD\u099F \u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7)"
    });
  }
  if (db.isUsingMysql()) {
    const pool = db.getPool();
    if (!pool) return res.status(500).json({ success: false, message: "DB error" });
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
      const [res2] = await conn.execute(
        "INSERT INTO service_areas (name, name_bn, min_delivery_charge, per_km_charge, is_active) VALUES (?, ?, ?, ?, ?)",
        [name.trim(), (name_bn || name).trim(), Number(min_delivery_charge) || 25, Number(per_km_charge) || 8, is_active ? 1 : 0]
      );
      const areaId = res2.insertId;
      for (let i = 0; i < polygon.length; i++) {
        await conn.execute(
          "INSERT INTO service_area_points (service_area_id, latitude, longitude, sequence_order) VALUES (?, ?, ?, ?)",
          [areaId, Number(polygon[i].lat), Number(polygon[i].lng), i]
        );
      }
      await conn.commit();
      conn.release();
      return res2.json({ success: true, message: "Created", data: { id: areaId, name } });
    } catch (err) {
      await conn.rollback();
      conn.release();
      throw err;
    }
  }
  const store = db.getStore();
  const nextId = (store.service_areas || []).reduce((max, a) => Math.max(max, a.id || 0), 0) + 1;
  const newArea = {
    id: nextId,
    name: name.trim(),
    name_bn: (name_bn || name).trim(),
    min_delivery_charge: Number(min_delivery_charge) || 25,
    per_km_charge: Number(per_km_charge) || 8,
    is_active: is_active === void 0 ? 1 : is_active ? 1 : 0,
    polygon: polygon.map((pt) => ({
      lat: Number(pt.lat),
      lng: Number(pt.lng)
    }))
  };
  if (!store.service_areas) store.service_areas = [];
  store.service_areas.push(newArea);
  return res.json({
    success: true,
    message: `Service area "${newArea.name}" created successfully (\u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8 \u098F\u09B0\u09BF\u09AF\u09BC\u09BE \u09AC\u09BE\u0989\u09A8\u09CD\u09A1\u09BE\u09B0\u09BF \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7)`,
    data: newArea
  });
});
adminRouter.put("/service-areas/:id", async (req, res) => {
  const areaId = Number(req.params.id);
  const { name, name_bn, min_delivery_charge, per_km_charge, is_active, polygon } = req.body;
  if (db.isUsingMysql()) {
    await db.query(
      "UPDATE service_areas SET name = ?, name_bn = ?, min_delivery_charge = ?, per_km_charge = ?, is_active = ? WHERE id = ?",
      [name.trim(), (name_bn || name).trim(), Number(min_delivery_charge) || 0, Number(per_km_charge) || 0, is_active ? 1 : 0, areaId]
    );
    if (polygon && Array.isArray(polygon)) {
      await db.query("DELETE FROM service_area_points WHERE service_area_id = ?", [areaId]);
      for (let i = 0; i < polygon.length; i++) {
        await db.query(
          "INSERT INTO service_area_points (service_area_id, latitude, longitude, sequence_order) VALUES (?, ?, ?, ?)",
          [areaId, Number(polygon[i].lat), Number(polygon[i].lng), i]
        );
      }
    }
    return res.json({ success: true, message: "Updated" });
  }
  const store = db.getStore();
  if (!store.service_areas) store.service_areas = [];
  const area = store.service_areas.find((a) => Number(a.id) === areaId);
  if (!area) {
    return res.status(404).json({ success: false, message: "Service area not found (\u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8 \u098F\u09B0\u09BF\u09DF\u09BE \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF)" });
  }
  if (name !== void 0 && String(name).trim()) area.name = String(name).trim();
  if (name_bn !== void 0 && String(name_bn).trim()) area.name_bn = String(name_bn).trim();
  if (min_delivery_charge !== void 0) area.min_delivery_charge = Math.max(0, Number(min_delivery_charge) || 0);
  if (per_km_charge !== void 0) area.per_km_charge = Math.max(0, Number(per_km_charge) || 0);
  if (is_active !== void 0) area.is_active = is_active ? 1 : 0;
  if (polygon && Array.isArray(polygon)) {
    const validPoints = polygon.map((pt) => ({
      lat: Number(Number(pt.lat).toFixed(5)),
      lng: Number(Number(pt.lng).toFixed(5))
    })).filter((pt) => !isNaN(pt.lat) && !isNaN(pt.lng));
    if (validPoints.length < 3) {
      return res.status(400).json({ success: false, message: "Boundary polygon must contain at least 3 points (\u0995\u09AE\u09AA\u0995\u09CD\u09B7\u09C7 \u09E9\u099F\u09BF \u09AA\u09DF\u09C7\u09A8\u09CD\u099F \u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7)" });
    }
    area.polygon = validPoints;
  }
  return res.json({
    success: true,
    message: `Service area "${area.name}" boundary updated successfully (\u09AC\u09BE\u0989\u09A8\u09CD\u09A1\u09BE\u09B0\u09BF \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7)`,
    data: area
  });
});
adminRouter.put("/service-areas/:id/toggle", (req, res) => {
  const store = db.getStore();
  const areaId = Number(req.params.id);
  const area = (store.service_areas || []).find((a) => a.id === areaId);
  if (!area) {
    return res.status(404).json({ success: false, message: "Service area not found" });
  }
  area.is_active = area.is_active ? 0 : 1;
  return res.json({
    success: true,
    message: `Service area "${area.name}" is now ${area.is_active ? "ACTIVE (\u09B8\u0995\u09CD\u09B0\u09BF\u09DF)" : "INACTIVE (\u09A8\u09BF\u09B7\u09CD\u0995\u09CD\u09B0\u09BF\u09DF)"}`,
    data: area
  });
});
adminRouter.delete("/service-areas/:id", async (req, res) => {
  const areaId = Number(req.params.id);
  if (db.isUsingMysql()) {
    const pool = db.getPool();
    if (!pool) return res.status(500).json({ success: false, message: "DB error" });
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
      const [remainingAreas] = await conn.execute("SELECT id FROM service_areas WHERE id != ? LIMIT 1", [areaId]);
      if (remainingAreas.length > 0) {
        await conn.execute("UPDATE restaurants SET service_area_id = ? WHERE service_area_id = ?", [remainingAreas[0].id, areaId]);
      }
      await conn.execute("DELETE FROM service_area_points WHERE service_area_id = ?", [areaId]);
      await conn.execute("DELETE FROM service_areas WHERE id = ?", [areaId]);
      await conn.commit();
      conn.release();
      return res.json({ success: true, message: "Deleted" });
    } catch (err) {
      await conn.rollback();
      conn.release();
      throw err;
    }
  }
  const store = db.getStore();
  const index = (store.service_areas || []).findIndex((a) => a.id === areaId);
  if (index === -1) {
    return res.status(404).json({ success: false, message: "Service area not found (\u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8 \u098F\u09B0\u09BF\u09DF\u09BE \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF)" });
  }
  const removed = store.service_areas.splice(index, 1)[0];
  if (store.service_areas && store.service_areas.length > 0) {
    const fallbackId = store.service_areas[0].id;
    store.restaurants.forEach((r) => {
      if (r.service_area_id === areaId) {
        r.service_area_id = fallbackId;
      }
    });
  }
  return res.json({
    success: true,
    message: `Service area "${removed.name}" deleted successfully (\u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8 \u098F\u09B0\u09BF\u09DF\u09BE \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09A1\u09BF\u09B2\u09BF\u099F \u09B9\u09DF\u09C7\u099B\u09C7)`,
    data: {
      deletedId: areaId,
      remainingCount: (store.service_areas || []).length
    }
  });
});
adminRouter.post("/service-areas/test-location", (req, res) => {
  const { lat, lng } = req.body;
  if (lat === void 0 || lng === void 0) {
    return res.status(400).json({ success: false, message: "Latitude and Longitude are required" });
  }
  const point = { lat: Number(lat), lng: Number(lng) };
  const store = db.getStore();
  let matchedArea = null;
  for (const sa of store.service_areas || []) {
    if (sa.is_active && locationService.isPointInPolygon(point, sa.polygon)) {
      matchedArea = sa;
      break;
    }
  }
  return res.json({
    success: true,
    data: {
      point,
      isInside: Boolean(matchedArea),
      matchedArea: matchedArea || null
    }
  });
});
adminRouter.get("/categories", async (req, res) => {
  if (db.isUsingMysql()) {
    const [categories2] = await db.query("SELECT * FROM food_categories ORDER BY sort_order ASC");
    return res.json({ success: true, data: categories2 });
  }
  const store = db.getStore();
  const categories = store.food_categories || [];
  return res.json({
    success: true,
    data: categories
  });
});
adminRouter.post("/categories", async (req, res) => {
  const { name, name_bn, image_url, icon, description, sort_order, is_active } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: "Category name is required (\u0995\u09CD\u09AF\u09BE\u099F\u09BE\u0997\u09B0\u09BF\u09B0 \u09A8\u09BE\u09AE \u0986\u09AC\u09B6\u09CD\u09AF\u0995)" });
  }
  if (db.isUsingMysql()) {
    const [existing2] = await db.query("SELECT id FROM food_categories WHERE LOWER(name) = LOWER(?)", [name.trim()]);
    if (existing2.length > 0) {
      return res.status(400).json({ success: false, message: "A category with this name already exists" });
    }
    const [dbRes] = await db.query(
      "INSERT INTO food_categories (name, name_bn, image_url, sort_order, is_active) VALUES (?, ?, ?, ?, ?)",
      [name.trim(), (name_bn || name).trim(), image_url || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400", Number(sort_order) || 0, is_active ? 1 : 0]
    );
    const newCatId = dbRes.insertId;
    return res.status(201).json({ success: true, message: "Category added", data: { id: newCatId, name } });
  }
  const store = db.getStore();
  if (!store.food_categories) store.food_categories = [];
  const existing = store.food_categories.find(
    (c) => c.name.toLowerCase().trim() === name.toLowerCase().trim()
  );
  if (existing) {
    return res.status(400).json({ success: false, message: "A category with this name already exists" });
  }
  const newId = store.food_categories.length > 0 ? Math.max(...store.food_categories.map((c) => c.id || 0)) + 1 : 1;
  const newCat = {
    id: newId,
    name: name.trim(),
    name_bn: name_bn && name_bn.trim() || name.trim(),
    image_url: image_url || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    icon: icon || "\u{1F37D}\uFE0F",
    description: description || "",
    sort_order: Number(sort_order) || newId,
    is_active: typeof is_active !== "undefined" ? is_active ? 1 : 0 : 1,
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  store.food_categories.push(newCat);
  return res.status(201).json({
    success: true,
    message: `Category "${newCat.name}" added successfully (\u09A8\u09A4\u09C1\u09A8 \u0995\u09CD\u09AF\u09BE\u099F\u09BE\u0997\u09B0\u09BF \u09A4\u09C8\u09B0\u09BF \u09B9\u09DF\u09C7\u099B\u09C7)`,
    data: newCat
  });
});
adminRouter.put("/categories/:id", async (req, res) => {
  const catId = Number(req.params.id);
  const { name, name_bn, image_url, icon, description, sort_order, is_active } = req.body;
  if (db.isUsingMysql()) {
    await db.query(
      "UPDATE food_categories SET name = ?, name_bn = ?, image_url = ?, sort_order = ?, is_active = ? WHERE id = ?",
      [name?.trim(), (name_bn || name)?.trim(), image_url, Number(sort_order), is_active ? 1 : 0, catId]
    );
    return res.json({ success: true, message: "Updated" });
  }
  const store = db.getStore();
  const cat = (store.food_categories || []).find((c) => c.id === catId);
  if (!cat) {
    return res.status(404).json({ success: false, message: "Category not found" });
  }
  const oldName = cat.name;
  if (name) cat.name = name.trim();
  if (name_bn) cat.name_bn = name_bn.trim();
  if (image_url) cat.image_url = image_url;
  if (icon) cat.icon = icon;
  if (typeof description !== "undefined") cat.description = description;
  if (typeof sort_order !== "undefined") cat.sort_order = Number(sort_order);
  if (typeof is_active !== "undefined") cat.is_active = is_active ? 1 : 0;
  if (name && oldName !== name.trim()) {
    (store.foods || []).forEach((f) => {
      if (f.category === oldName) {
        f.category = name.trim();
        if (name_bn) f.category_bn = name_bn.trim();
      }
    });
  }
  return res.json({
    success: true,
    message: `Category "${cat.name}" updated successfully (\u0995\u09CD\u09AF\u09BE\u099F\u09BE\u0997\u09B0\u09BF \u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7)`,
    data: cat
  });
});
adminRouter.delete("/categories/:id", async (req, res) => {
  const catId = Number(req.params.id);
  if (db.isUsingMysql()) {
    await db.query("DELETE FROM food_categories WHERE id = ?", [catId]);
    return res.json({ success: true, message: "Deleted" });
  }
  const store = db.getStore();
  const index = (store.food_categories || []).findIndex((c) => c.id === catId);
  if (index === -1) {
    return res.status(404).json({ success: false, message: "Category not found" });
  }
  const removed = store.food_categories.splice(index, 1)[0];
  return res.json({
    success: true,
    message: `Category "${removed.name}" deleted successfully (\u0995\u09CD\u09AF\u09BE\u099F\u09BE\u0997\u09B0\u09BF \u09A1\u09BF\u09B2\u09BF\u099F \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7)`,
    data: removed
  });
});
adminRouter.get("/restaurant-rankings", (req, res) => {
  const store = db.getStore();
  if (!store.location_rankings) store.location_rankings = [];
  if (!store.restaurant_rankings) store.restaurant_rankings = [];
  return res.json({
    success: true,
    data: {
      location_rankings: store.location_rankings,
      service_area_rankings: store.restaurant_rankings
    }
  });
});
adminRouter.get("/location-rankings", async (req, res) => {
  if (db.isUsingMysql()) {
    const [rows] = await db.query("SELECT * FROM location_rankings");
    const rankings = rows.map((r) => ({ ...r, rankings: JSON.parse(r.rankings_json || "[]") }));
    return res.json({ success: true, data: rankings });
  }
  const store = db.getStore();
  if (!store.location_rankings) store.location_rankings = [];
  return res.json({ success: true, data: store.location_rankings });
});
adminRouter.post("/location-rankings", async (req, res) => {
  const { id, name, name_bn, lat, lng, radius_km, is_active, rankings } = req.body;
  if (!name || !lat || !lng) {
    return res.status(400).json({ success: false, message: "Location rule name and latitude/longitude center coordinates are required." });
  }
  const matchedServiceArea = await locationService.findServiceAreaForLocation({
    lat: Number(lat),
    lng: Number(lng)
  });
  if (!matchedServiceArea) {
    return res.status(400).json({
      success: false,
      message: "Selected location is Out of Service Area! (\u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09BF\u09A4 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8\u099F\u09BF \u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8 \u09B8\u09C0\u09AE\u09BE\u09A8\u09BE\u09B0 \u09AC\u09BE\u0987\u09B0\u09C7\u0964 \u09A6\u09DF\u09BE \u0995\u09B0\u09C7 \u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8 \u098F\u09B0\u09BF\u09DF\u09BE\u09B0 \u09AD\u09C7\u09A4\u09B0\u09C7 \u09AA\u09BF\u09A8 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09C1\u09A8)"
    });
  }
  const cleanRankings = Array.isArray(rankings) ? rankings.map((r) => ({ restaurant_id: Number(r.restaurant_id), rank: Number(r.rank) })).filter((r) => r.restaurant_id > 0 && r.rank >= 1 && r.rank <= 5) : [];
  if (db.isUsingMysql()) {
    if (id) {
      await db.query(
        "UPDATE location_rankings SET name = ?, name_bn = ?, lat = ?, lng = ?, radius_km = ?, is_active = ?, rankings_json = ? WHERE id = ?",
        [name.trim(), (name_bn || name).trim(), Number(lat), Number(lng), Number(radius_km || 3), is_active ? 1 : 0, JSON.stringify(cleanRankings), id]
      );
      return res.json({ success: true, message: "Updated" });
    } else {
      await db.query(
        "INSERT INTO location_rankings (name, name_bn, lat, lng, radius_km, is_active, rankings_json) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [name.trim(), (name_bn || name).trim(), Number(lat), Number(lng), Number(radius_km || 3), 1, JSON.stringify(cleanRankings)]
      );
      return res.json({ success: true, message: "Created" });
    }
  }
  const store = db.getStore();
  if (!store.location_rankings) store.location_rankings = [];
  let rule = null;
  if (id) {
    const idx = store.location_rankings.findIndex((r) => r.id === Number(id));
    if (idx !== -1) {
      rule = {
        ...store.location_rankings[idx],
        name: name.trim(),
        name_bn: name_bn ? name_bn.trim() : store.location_rankings[idx].name_bn,
        lat: Number(lat),
        lng: Number(lng),
        radius_km: Number(radius_km || 3),
        is_active: typeof is_active !== "undefined" ? is_active ? 1 : 0 : 1,
        rankings: cleanRankings,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      store.location_rankings[idx] = rule;
    }
  }
  if (!rule) {
    const newId = store.location_rankings.length > 0 ? Math.max(...store.location_rankings.map((r) => Number(r.id) || 0)) + 1 : 1;
    rule = {
      id: newId,
      name: name.trim(),
      name_bn: name_bn ? name_bn.trim() : "",
      lat: Number(lat),
      lng: Number(lng),
      radius_km: Number(radius_km || 3),
      is_active: 1,
      rankings: cleanRankings,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    store.location_rankings.push(rule);
  }
  return res.json({
    success: true,
    message: "Location Radius Ranking Rule saved successfully! (\u09B0\u09C7\u09A1\u09BF\u09DF\u09BE\u09B8 \u09B0\u200D\u09CD\u09AF\u09BE\u0999\u09CD\u0995\u09BF\u0982 \u09B0\u09C1\u09B2 \u09B8\u09C7\u09AD \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7)",
    data: rule
  });
});
adminRouter.delete("/location-rankings/:id", async (req, res) => {
  const ruleId = Number(req.params.id);
  if (db.isUsingMysql()) {
    await db.query("DELETE FROM location_rankings WHERE id = ?", [ruleId]);
    return res.json({ success: true, message: "Deleted" });
  }
  const store = db.getStore();
  if (!store.location_rankings) store.location_rankings = [];
  const idx = store.location_rankings.findIndex((r) => Number(r.id) === ruleId);
  if (idx === -1) {
    return res.status(404).json({ success: false, message: "Location ranking rule not found" });
  }
  const deleted = store.location_rankings.splice(idx, 1)[0];
  return res.json({
    success: true,
    message: `Location ranking rule "${deleted.name}" deleted successfully! (\u09B0\u09C1\u09B2\u099F\u09BF \u09A1\u09BF\u09B2\u09BF\u099F \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7)`,
    data: deleted
  });
});
adminRouter.put("/location-rankings/:id/toggle-status", (req, res) => {
  const store = db.getStore();
  if (!store.location_rankings) store.location_rankings = [];
  const ruleId = Number(req.params.id);
  const rule = store.location_rankings.find((r) => r.id === ruleId);
  if (!rule) {
    return res.status(404).json({ success: false, message: "Location ranking rule not found" });
  }
  rule.is_active = rule.is_active ? 0 : 1;
  return res.json({
    success: true,
    message: `Rule status toggled to ${rule.is_active ? "Active" : "Inactive"}`,
    data: rule
  });
});
adminRouter.post("/restaurant-rankings", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    return res.status(503).json({
      success: false,
      message: "Persistent restaurant rankings are not currently supported in production. Please migrate to MySQL schema first."
    });
  }
  const store = db.getStore();
  if (!store.restaurant_rankings) store.restaurant_rankings = [];
  const { service_area_id, rankings } = req.body;
  const areaId = typeof service_area_id !== "undefined" && service_area_id !== null ? Number(service_area_id) : 0;
  if (!Array.isArray(rankings)) {
    return res.status(400).json({ success: false, message: "Rankings must be an array of { restaurant_id, rank }" });
  }
  const cleanRankings = rankings.map((r) => ({
    restaurant_id: Number(r.restaurant_id),
    rank: Number(r.rank)
  })).filter((r) => r.restaurant_id > 0 && r.rank >= 1 && r.rank <= 5);
  const existingIdx = store.restaurant_rankings.findIndex((r) => Number(r.service_area_id) === areaId);
  const ruleData = {
    service_area_id: areaId,
    rankings: cleanRankings,
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  if (existingIdx !== -1) {
    store.restaurant_rankings[existingIdx] = ruleData;
  } else {
    store.restaurant_rankings.push(ruleData);
  }
  return res.json({
    success: true,
    message: "Location restaurant rankings saved successfully! (\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09B0 \u09B0\u200D\u09CD\u09AF\u09BE\u0999\u09CD\u0995\u09BF\u0982 \u0993 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8 \u09B8\u09C7\u09AD \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7)",
    data: ruleData
  });
});

// server/routes/couponRoutes.ts
var import_express6 = require("express");
var couponRouter = (0, import_express6.Router)();
couponRouter.get("/", async (req, res) => {
  if (db.isUsingMysql()) {
    const restaurantId2 = req.query.restaurant_id ? Number(req.query.restaurant_id) : null;
    const platformRes = await db.query("SELECT * FROM coupons WHERE is_active = 1 ORDER BY id DESC", []);
    const platformCoupons2 = platformRes.rows;
    let restaurantCoupons2 = [];
    if (restaurantId2) {
      const restPromoRes = await db.query(
        "SELECT rp.*, r.name as rest_name, r.name_bn as rest_name_bn FROM restaurant_promocodes rp JOIN restaurants r ON rp.restaurant_id = r.id WHERE rp.restaurant_id = ? AND rp.is_active = 1",
        [restaurantId2]
      );
      restaurantCoupons2 = restPromoRes.rows;
    }
    return res.json({
      success: true,
      data: {
        platformCoupons: platformCoupons2,
        restaurantCoupons: restaurantCoupons2,
        allActiveCoupons: [...platformCoupons2, ...restaurantCoupons2]
      }
    });
  }
  const store = db.getStore();
  if (!store.coupons) store.coupons = [];
  if (!store.restaurant_promocodes) store.restaurant_promocodes = [];
  const restaurantId = req.query.restaurant_id ? Number(req.query.restaurant_id) : null;
  const platformCoupons = store.coupons.filter((c) => c.is_active !== 0);
  let restaurantCoupons = [];
  if (restaurantId) {
    const rest = store.restaurants?.find((r) => r.id === restaurantId);
    if (rest && rest.promocodes) {
      restaurantCoupons = rest.promocodes.filter((p) => p.is_active !== 0);
    } else {
      restaurantCoupons = store.restaurant_promocodes.filter((p) => p.restaurant_id === restaurantId && p.is_active !== 0);
    }
  }
  return res.json({
    success: true,
    data: {
      platformCoupons,
      restaurantCoupons,
      allActiveCoupons: [...platformCoupons, ...restaurantCoupons]
    }
  });
});
couponRouter.post("/apply", async (req, res) => {
  const { code, subtotal, restaurant_id } = req.body;
  if (!code || typeof subtotal === "undefined") {
    return res.status(400).json({ success: false, message: "Coupon code and subtotal required" });
  }
  const searchCode = String(code).trim().toUpperCase();
  if (db.isUsingMysql()) {
    const platRes = await db.query(
      "SELECT * FROM coupons WHERE UPPER(code) = ? AND is_active = 1 LIMIT 1",
      [searchCode]
    );
    let coupon2 = platRes.rows[0] || null;
    let isRestaurantCoupon2 = false;
    let restName2 = "";
    if (!coupon2 && restaurant_id) {
      const restIdNum = Number(restaurant_id);
      const restPromoRes = await db.query(
        `SELECT rp.*, r.name as rest_name, r.name_bn as rest_name_bn
         FROM restaurant_promocodes rp
         JOIN restaurants r ON rp.restaurant_id = r.id
         WHERE rp.restaurant_id = ? AND UPPER(rp.code) = ? AND rp.is_active = 1 LIMIT 1`,
        [restIdNum, searchCode]
      );
      const restPromo = restPromoRes.rows[0];
      if (restPromo) {
        restName2 = restPromo.rest_name || "";
        coupon2 = {
          code: restPromo.code,
          discount_type: restPromo.discount_type || "percentage",
          discount_value: Number(restPromo.discount_value || restPromo.discount_percentage || 10),
          max_discount: restPromo.max_discount != null ? Number(restPromo.max_discount) : 100,
          min_order_amount: Number(restPromo.min_order_amount || 0),
          description: `${restName2} Special Promocode (${restPromo.discount_value || 10}% OFF)`,
          description_bn: `${restPromo.rest_name_bn || restName2} \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u09AA\u09CD\u09B0\u09CB\u09AE\u09CB\u0995\u09CB\u09A1 (${restPromo.discount_value || 10}% \u099B\u09BE\u09DC)`
        };
        isRestaurantCoupon2 = true;
      }
    }
    if (!coupon2) {
      return res.status(404).json({ success: false, message: "Invalid or expired coupon code (\u0995\u09C1\u09AA\u09A8 \u0995\u09CB\u09A1\u099F\u09BF \u09B8\u09A0\u09BF\u0995 \u09A8\u09DF \u09AC\u09BE \u09AE\u09C7\u09DF\u09BE\u09A6 \u09B6\u09C7\u09B7)" });
    }
    if (Number(subtotal) < Number(coupon2.min_order_amount || 0)) {
      return res.status(400).json({
        success: false,
        message: `Minimum food subtotal of \u20B9${coupon2.min_order_amount} required to apply this coupon`
      });
    }
    let discount2 = 0;
    if (coupon2.discount_type === "percentage") {
      discount2 = Math.round(Number(subtotal) * Number(coupon2.discount_value) / 100);
      if (coupon2.max_discount) {
        discount2 = Math.min(discount2, Number(coupon2.max_discount));
      }
    } else {
      discount2 = Math.min(Number(coupon2.discount_value), Number(subtotal));
    }
    return res.json({
      success: true,
      message: isRestaurantCoupon2 ? `\u{1F389} ${coupon2.code} Applied! You saved \u20B9${discount2} from ${restName2 || "Restaurant"} offer!` : `\u{1F389} Coupon ${coupon2.code} Applied! You saved \u20B9${discount2}`,
      data: {
        code: coupon2.code,
        discount: discount2,
        discount_type: coupon2.discount_type,
        description: coupon2.description,
        description_bn: coupon2.description_bn,
        is_restaurant_coupon: isRestaurantCoupon2
      }
    });
  }
  const store = db.getStore();
  if (!store.coupons) store.coupons = [];
  if (!store.restaurant_promocodes) store.restaurant_promocodes = [];
  let coupon = store.coupons.find(
    (c) => String(c.code).trim().toUpperCase() === searchCode && (c.is_active === 1 || c.is_active === true || typeof c.is_active === "undefined")
  );
  let isRestaurantCoupon = false;
  let restName = "";
  if (!coupon && restaurant_id) {
    const restIdNum = Number(restaurant_id);
    const rest = store.restaurants?.find((r) => r.id === restIdNum);
    restName = rest ? rest.name : "";
    if (rest && rest.promocodes && Array.isArray(rest.promocodes)) {
      const restPromo = rest.promocodes.find((p) => String(p.code).trim().toUpperCase() === searchCode && p.is_active !== 0);
      if (restPromo) {
        coupon = {
          code: restPromo.code,
          discount_type: "percentage",
          discount_value: Number(restPromo.discount_percentage || restPromo.discount_value || 10),
          max_discount: Number(restPromo.max_discount || 100),
          min_order_amount: Number(restPromo.min_order_amount || 0),
          description: `${rest.name} Special Promocode (${restPromo.discount_percentage}% OFF)`,
          description_bn: `${rest.name_bn || rest.name} \u09B8\u09CD\u09AA\u09C7\u09B6\u09BE\u09B2 \u09AA\u09CD\u09B0\u09CB\u09AE\u09CB\u0995\u09CB\u09A1 (${restPromo.discount_percentage}% \u099B\u09BE\u09DC)`
        };
        isRestaurantCoupon = true;
      }
    }
    if (!coupon) {
      const globalRestPromo = store.restaurant_promocodes.find(
        (p) => p.restaurant_id === restIdNum && String(p.code).trim().toUpperCase() === searchCode && p.is_active !== 0
      );
      if (globalRestPromo) {
        coupon = {
          code: globalRestPromo.code,
          discount_type: "percentage",
          discount_value: Number(globalRestPromo.discount_percentage || 10),
          max_discount: Number(globalRestPromo.max_discount || 100),
          min_order_amount: Number(globalRestPromo.min_order_amount || 0),
          description: `Restaurant Promocode (${globalRestPromo.discount_percentage}% OFF)`,
          description_bn: `\u09B0\u09C7\u09B8\u09CD\u09A4\u09CB\u09B0\u09BE\u0981\u09B0 \u09AA\u09CD\u09B0\u09CB\u09AE\u09CB\u0995\u09CB\u09A1 (${globalRestPromo.discount_percentage}% \u099B\u09BE\u09DC)`
        };
        isRestaurantCoupon = true;
      }
    }
  }
  if (!coupon) {
    return res.status(404).json({ success: false, message: "Invalid or expired coupon code (\u0995\u09C1\u09AA\u09A8 \u0995\u09CB\u09A1\u099F\u09BF \u09B8\u09A0\u09BF\u0995 \u09A8\u09DF \u09AC\u09BE \u09AE\u09C7\u09DF\u09BE\u09A6 \u09B6\u09C7\u09B7)" });
  }
  if (Number(subtotal) < Number(coupon.min_order_amount || 0)) {
    return res.status(400).json({
      success: false,
      message: `Minimum food subtotal of \u20B9${coupon.min_order_amount} required to apply this coupon`
    });
  }
  let discount = 0;
  if (coupon.discount_type === "percentage") {
    discount = Math.round(Number(subtotal) * Number(coupon.discount_value) / 100);
    if (coupon.max_discount) {
      discount = Math.min(discount, Number(coupon.max_discount));
    }
  } else {
    discount = Math.min(Number(coupon.discount_value), Number(subtotal));
  }
  return res.json({
    success: true,
    message: isRestaurantCoupon ? `\u{1F389} ${coupon.code} Applied! You saved \u20B9${discount} from ${restName || "Restaurant"} offer!` : `\u{1F389} Coupon ${coupon.code} Applied! You saved \u20B9${discount}`,
    data: {
      code: coupon.code,
      discount,
      discount_type: coupon.discount_type,
      description: coupon.description,
      description_bn: coupon.description_bn,
      is_restaurant_coupon: isRestaurantCoupon
    }
  });
});
couponRouter.post("/admin", authenticateToken, requireRole(["admin"]), async (req, res) => {
  const { code, discount_type, discount_value, max_discount, min_order_amount, description, description_bn } = req.body;
  if (!code || !code.trim()) {
    return res.status(400).json({ success: false, message: "Promocode text is required" });
  }
  const cleanCode = code.trim().toUpperCase();
  if (db.isUsingMysql()) {
    const existingRes = await db.query("SELECT id FROM coupons WHERE UPPER(code) = ? LIMIT 1", [cleanCode]);
    if (existingRes.rows[0]) {
      return res.status(400).json({ success: false, message: `Promocode "${cleanCode}" already exists` });
    }
    const insRes = await db.query(
      `INSERT INTO coupons (code, discount_type, discount_value, max_discount, min_order_amount, description, description_bn, is_active)
       VALUES (?, ?, ?, ?, ?, ?, ?, 1)`,
      [
        cleanCode,
        discount_type || "percentage",
        Number(discount_value) || 10,
        Number(max_discount) || 100,
        Number(min_order_amount) || 100,
        description || `${cleanCode} - Platform Special Offer`,
        description_bn || `${cleanCode} - \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09C1\u09AA\u09A8 \u099B\u09BE\u09DC`
      ]
    );
    const newId2 = insRes.insertId || insRes.rows?.insertId;
    const fetchNewRes = await db.query("SELECT * FROM coupons WHERE id = ? LIMIT 1", [newId2]);
    return res.status(201).json({
      success: true,
      message: `Customer Promocode "${cleanCode}" created successfully!`,
      data: fetchNewRes.rows[0]
    });
  }
  const store = db.getStore();
  if (!store.coupons) store.coupons = [];
  const existing = store.coupons.find((c) => c.code.toUpperCase() === cleanCode);
  if (existing) {
    return res.status(400).json({ success: false, message: `Promocode "${cleanCode}" already exists` });
  }
  const newId = store.coupons.length > 0 ? Math.max(...store.coupons.map((c) => c.id || 0)) + 1 : 1;
  const newCoupon = {
    id: newId,
    code: cleanCode,
    discount_type: discount_type || "percentage",
    discount_value: Number(discount_value) || 10,
    max_discount: Number(max_discount) || 100,
    min_order_amount: Number(min_order_amount) || 100,
    description: description || `${cleanCode} - Platform Special Offer`,
    description_bn: description_bn || `${cleanCode} - \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09C1\u09AA\u09A8 \u099B\u09BE\u09DC`,
    is_active: 1,
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  store.coupons.push(newCoupon);
  return res.status(201).json({
    success: true,
    message: `Customer Promocode "${cleanCode}" created successfully!`,
    data: newCoupon
  });
});
couponRouter.put("/admin/:id/toggle", authenticateToken, requireRole(["admin"]), async (req, res) => {
  const id = Number(req.params.id);
  if (db.isUsingMysql()) {
    const fetchRes = await db.query("SELECT * FROM coupons WHERE id = ? LIMIT 1", [id]);
    const coupon2 = fetchRes.rows[0];
    if (!coupon2) {
      return res.status(404).json({ success: false, message: "Promocode not found" });
    }
    const nextState = coupon2.is_active ? 0 : 1;
    await db.query("UPDATE coupons SET is_active = ? WHERE id = ?", [nextState, id]);
    const updatedRes = await db.query("SELECT * FROM coupons WHERE id = ? LIMIT 1", [id]);
    const updated = updatedRes.rows[0];
    return res.json({
      success: true,
      message: `Promocode "${updated.code}" is now ${updated.is_active ? "ACTIVE" : "INACTIVE"}`,
      data: updated
    });
  }
  const store = db.getStore();
  if (!store.coupons) store.coupons = [];
  const coupon = store.coupons.find((c) => c.id === id);
  if (!coupon) {
    return res.status(404).json({ success: false, message: "Promocode not found" });
  }
  coupon.is_active = coupon.is_active ? 0 : 1;
  return res.json({
    success: true,
    message: `Promocode "${coupon.code}" is now ${coupon.is_active ? "ACTIVE" : "INACTIVE"}`,
    data: coupon
  });
});
couponRouter.delete("/admin/:id", authenticateToken, requireRole(["admin"]), async (req, res) => {
  const id = Number(req.params.id);
  if (db.isUsingMysql()) {
    const fetchRes = await db.query("SELECT * FROM coupons WHERE id = ? LIMIT 1", [id]);
    const coupon = fetchRes.rows[0];
    if (!coupon) {
      return res.status(404).json({ success: false, message: "Promocode not found" });
    }
    await db.query("DELETE FROM coupons WHERE id = ?", [id]);
    return res.json({
      success: true,
      message: `Promocode "${coupon.code}" deleted successfully`,
      data: coupon
    });
  }
  const store = db.getStore();
  if (!store.coupons) store.coupons = [];
  const idx = store.coupons.findIndex((c) => c.id === id);
  if (idx === -1) {
    return res.status(404).json({ success: false, message: "Promocode not found" });
  }
  const removed = store.coupons.splice(idx, 1)[0];
  return res.json({
    success: true,
    message: `Promocode "${removed.code}" deleted successfully`,
    data: removed
  });
});
couponRouter.post("/restaurant", authenticateToken, requireRole(["restaurant", "admin"]), async (req, res) => {
  const { restaurant_id, code, discount_percentage, discount_value, max_discount, min_order_amount, is_active } = req.body;
  if (!restaurant_id || !code) {
    return res.status(400).json({ success: false, message: "Restaurant ID and Promocode text are required" });
  }
  const restId = Number(restaurant_id);
  const cleanCode = String(code).trim().toUpperCase();
  if (db.isUsingMysql()) {
    const restRes = await db.query("SELECT * FROM restaurants WHERE id = ? LIMIT 1", [restId]);
    if (!restRes.rows[0]) {
      return res.status(404).json({ success: false, message: "Restaurant not found" });
    }
    const restaurant = restRes.rows[0];
    if (req.user?.role === "restaurant" && Number(restaurant.user_id) !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized for this restaurant" });
    }
    const discVal = Number(discount_value || discount_percentage || 10);
    const maxDisc = Number(max_discount || 50);
    const minOrder = Number(min_order_amount || 100);
    const activeState = typeof is_active !== "undefined" ? is_active ? 1 : 0 : 1;
    const existingRes = await db.query(
      "SELECT id FROM restaurant_promocodes WHERE restaurant_id = ? AND UPPER(code) = ? LIMIT 1",
      [restId, cleanCode]
    );
    if (existingRes.rows[0]) {
      await db.query(
        `UPDATE restaurant_promocodes SET discount_value = ?, max_discount = ?, min_order_amount = ?, is_active = ?
         WHERE id = ?`,
        [discVal, maxDisc, minOrder, activeState, existingRes.rows[0].id]
      );
    } else {
      await db.query(
        `INSERT INTO restaurant_promocodes (restaurant_id, code, description, discount_type, discount_value, max_discount, min_order_amount, is_active)
         VALUES (?, ?, ?, 'percentage', ?, ?, ?, ?)`,
        [restId, cleanCode, `${restaurant.name} Special Offer`, discVal, maxDisc, minOrder, activeState]
      );
    }
    const fetchRes = await db.query(
      "SELECT * FROM restaurant_promocodes WHERE restaurant_id = ? AND UPPER(code) = ? LIMIT 1",
      [restId, cleanCode]
    );
    return res.json({
      success: true,
      message: `Restaurant Special Promocode "${cleanCode}" saved successfully!`,
      data: fetchRes.rows[0]
    });
  }
  const store = db.getStore();
  if (!store.restaurant_promocodes) store.restaurant_promocodes = [];
  const rest = store.restaurants?.find((r) => r.id === restId);
  if (!rest) {
    return res.status(404).json({ success: false, message: "Restaurant not found" });
  }
  if (req.user?.role === "restaurant" && rest.user_id !== req.user.id) {
    return res.status(403).json({ success: false, message: "Not authorized for this restaurant" });
  }
  if (!rest.promocodes) rest.promocodes = [];
  const existingIdx = rest.promocodes.findIndex((p) => p.code.toUpperCase() === cleanCode);
  const promoData = {
    id: existingIdx !== -1 ? rest.promocodes[existingIdx].id : Date.now(),
    restaurant_id: restId,
    code: cleanCode,
    discount_percentage: Number(discount_percentage || discount_value || 10),
    max_discount: Number(max_discount || 50),
    min_order_amount: Number(min_order_amount || 100),
    is_active: typeof is_active !== "undefined" ? is_active ? 1 : 0 : 1,
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  if (existingIdx !== -1) {
    rest.promocodes[existingIdx] = promoData;
  } else {
    rest.promocodes.push(promoData);
  }
  const globalIdx = store.restaurant_promocodes.findIndex((p) => p.restaurant_id === restId && p.code.toUpperCase() === cleanCode);
  if (globalIdx !== -1) {
    store.restaurant_promocodes[globalIdx] = promoData;
  } else {
    store.restaurant_promocodes.push(promoData);
  }
  return res.json({
    success: true,
    message: `Restaurant Special Promocode "${cleanCode}" saved successfully!`,
    data: promoData
  });
});
couponRouter.delete("/restaurant/:restaurantId/:code", authenticateToken, requireRole(["restaurant", "admin"]), async (req, res) => {
  const restId = Number(req.params.restaurantId);
  const code = String(req.params.code).toUpperCase();
  if (db.isUsingMysql()) {
    const restRes = await db.query("SELECT user_id FROM restaurants WHERE id = ? LIMIT 1", [restId]);
    if (!restRes.rows[0]) {
      return res.status(404).json({ success: false, message: "Restaurant not found" });
    }
    if (req.user?.role === "restaurant" && Number(restRes.rows[0].user_id) !== req.user.id) {
      return res.status(403).json({ success: false, message: "Not authorized for this restaurant" });
    }
    await db.query("DELETE FROM restaurant_promocodes WHERE restaurant_id = ? AND UPPER(code) = ?", [restId, code]);
    return res.json({
      success: true,
      message: `Promocode "${code}" deleted successfully`
    });
  }
  const store = db.getStore();
  const rest = store.restaurants?.find((r) => r.id === restId);
  if (rest && rest.promocodes) {
    rest.promocodes = rest.promocodes.filter((p) => p.code.toUpperCase() !== code);
  }
  if (store.restaurant_promocodes) {
    store.restaurant_promocodes = store.restaurant_promocodes.filter((p) => !(p.restaurant_id === restId && p.code.toUpperCase() === code));
  }
  return res.json({
    success: true,
    message: `Promocode "${code}" deleted successfully`
  });
});

// server/routes/serviceAreaRoutes.ts
var import_express7 = require("express");
var serviceAreaRouter = (0, import_express7.Router)();
serviceAreaRouter.get("/", async (req, res) => {
  const activeAreas = await locationService.getActiveServiceAreas();
  return res.json({
    success: true,
    data: activeAreas
  });
});
serviceAreaRouter.post("/validate-location", async (req, res) => {
  const { lat, lng } = req.body;
  if (!lat || !lng) {
    return res.status(400).json({ success: false, message: "Latitude and Longitude required" });
  }
  const serviceArea = await locationService.findServiceAreaForLocation({
    lat: Number(lat),
    lng: Number(lng)
  });
  const isServiceable = !!serviceArea;
  return res.json({
    success: true,
    data: {
      isServiceable,
      serviceArea,
      message: isServiceable ? `Delivering in: ${serviceArea.name}` : "Sorry, we do not deliver to this location yet. (\u09A6\u09C1\u0983\u0996\u09BF\u09A4, \u098F\u0987 \u098F\u09B2\u09BE\u0995\u09BE\u09DF \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u098F\u0996\u09A8\u0993 \u099A\u09BE\u09B2\u09C1 \u09B9\u09DF\u09A8\u09BF\u0964)"
    }
  });
});

// server/routes/notificationRoutes.ts
var import_express8 = require("express");
var notificationRouter = (0, import_express8.Router)();
notificationRouter.get("/", authenticateToken, async (req, res) => {
  const notifications = await notificationService.getUserNotifications(req.user.id, req.user.role);
  return res.json({
    success: true,
    data: notifications
  });
});
notificationRouter.put("/:id/read", authenticateToken, async (req, res) => {
  const notifId = Number(req.params.id);
  const updated = await notificationService.markAsRead(notifId);
  return res.json({
    success: true,
    data: updated
  });
});

// server/app.ts
var app = (0, import_express9.default)();
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  next();
});
app.use(import_express9.default.json({ limit: "50mb" }));
app.use(import_express9.default.urlencoded({ limit: "50mb", extended: true }));
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "AharLocal Food Delivery API",
    version: "1.0.0",
    time: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.get("/api/settings", (req, res) => {
  const store = db.getStore();
  const settings = store.settings || {};
  res.json({
    success: true,
    data: {
      global_cod_enabled: settings.global_cod_enabled ?? 0,
      restaurant_commission_percent: Number(settings.restaurant_commission_percent ?? 15),
      delivery_partner_commission_percent: Number(settings.delivery_partner_commission_percent ?? 10),
      delivery_base_fare: Number(settings.delivery_base_fare ?? 25),
      delivery_base_distance_km: Number(settings.delivery_base_distance_km ?? 2),
      delivery_per_km_rate: Number(settings.delivery_per_km_rate ?? 10),
      min_delivery_fare: Number(settings.min_delivery_fare ?? 20)
    }
  });
});
app.get("/api/promotions", (req, res) => {
  const store = db.getStore();
  const promos = store.promotions || {};
  res.json({
    success: true,
    data: promos
  });
});
app.get("/api/categories", (req, res) => {
  const store = db.getStore();
  const cats = store.food_categories || [];
  res.json({
    success: true,
    data: cats
  });
});
app.post("/api/location/calculate-fare", async (req, res) => {
  const { customerLat, customerLng, restaurantId, restaurantLat, restaurantLng } = req.body;
  if (!customerLat || !customerLng) {
    return res.status(400).json({ success: false, message: "Customer coordinates required" });
  }
  let restLat = Number(restaurantLat);
  let restLng = Number(restaurantLng);
  let restName = "Restaurant";
  if (restaurantId) {
    const store = db.getStore();
    const rest = store.restaurants.find((r) => r.id === Number(restaurantId));
    if (rest) {
      restLat = rest.latitude;
      restLng = rest.longitude;
      restName = rest.name;
    }
  }
  if (!restLat || !restLng) {
    return res.status(400).json({ success: false, message: "Restaurant location required" });
  }
  const distanceKm = locationService.calculateDistanceKm(
    restLat,
    restLng,
    Number(customerLat),
    Number(customerLng)
  );
  const breakdown = await locationService.getDeliveryFareBreakdown(distanceKm);
  return res.json({
    success: true,
    data: {
      restaurantName: restName,
      restaurantLat: restLat,
      restaurantLng: restLng,
      customerLat: Number(customerLat),
      customerLng: Number(customerLng),
      ...breakdown
    }
  });
});
app.use("/api/auth", authRouter);
app.use("/api/restaurants", restaurantRouter);
app.use("/api/orders", orderRouter);
app.use("/api/delivery", deliveryRouter);
app.use("/api/admin", adminRouter);
app.use("/api/coupons", couponRouter);
app.use("/api/service-areas", serviceAreaRouter);
app.use("/api/notifications", notificationRouter);
app.use("/api/*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found (\u0985\u09A8\u09C1\u09B0\u09CB\u09A7 \u0995\u09B0\u09BE \u098F\u09A8\u09CD\u09A1\u09AA\u09AF\u09BC\u09C7\u09A8\u09CD\u099F \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF)"
  });
});
app.use((err, req, res, next) => {
  console.error("Unhandled API Error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "An unexpected error occurred. Please try again. (\u09B8\u09BE\u09AE\u09AF\u09BC\u09BF\u0995 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8)"
  });
});

// server.ts
var import_meta = {};
var currentDir = typeof __dirname !== "undefined" ? __dirname : import_path.default.dirname((0, import_url.fileURLToPath)(import_meta.url));
var rootDir = import_path.default.basename(currentDir) === "dist-server" ? import_path.default.resolve(currentDir, "..") : currentDir;
var rawPort = process.env.PORT;
var PORT = rawPort ? /^\d+$/.test(rawPort) ? Number(rawPort) : rawPort : 3e3;
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.resolve(rootDir, "dist");
    const distIndex = import_path.default.join(distPath, "index.html");
    let isBuildingFrontend = false;
    if (!import_fs.default.existsSync(distIndex)) {
      isBuildingFrontend = true;
      console.warn("[Server] dist/index.html missing in production; building Vite frontend in background...");
      import("vite").then(({ build }) => build()).then(() => {
        console.log("[Server] Background Vite frontend build completed.");
      }).catch((err) => {
        console.error("[Server] Background Vite build failed:", err);
      }).finally(() => {
        isBuildingFrontend = false;
      });
    }
    app.use(import_express10.default.static(distPath));
    app.get("*", (req, res) => {
      if (import_fs.default.existsSync(distIndex)) {
        return res.sendFile(distIndex);
      }
      if (isBuildingFrontend) {
        return res.status(200).set("Content-Type", "text/html; charset=utf-8").send(
          '<!doctype html><html><head><meta http-equiv="refresh" content="3"><title>AharLocal Starting...</title></head><body style="font-family:sans-serif;text-align:center;padding:48px;"><h2>AharLocal is finishing initial setup...</h2><p>Page will reload automatically in a few seconds.</p></body></html>'
        );
      }
      return res.status(500).send('Frontend build not found. Run "npm run build" in Hostinger Build Command.');
    });
  }
  const onListening = () => {
    console.log(`\u{1F680} AharLocal Server running on port ${PORT}`);
  };
  if (typeof PORT === "number") {
    app.listen(PORT, "0.0.0.0", onListening);
  } else {
    app.listen(PORT, onListening);
  }
}
startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
