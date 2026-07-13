// Auto-generated from data/nypl/** — real recovered PatronIQ content.
window.PATRONIQ_DATA = {
  "library":
{
  "library_slug": "nypl",
  "name": "New York Public Library",
  "system": "New York Public Library System",
  "branch": {
    "id": "nypl-main",
    "name": "Stephen A. Schwarzman Building",
    "address": {
      "street": "476 Fifth Avenue",
      "city": "New York",
      "region": "NY",
      "postal": "10018",
      "country": "US"
    },
    "phone": "917-275-6975",
    "tty": "212-930-0020",
    "text": "917-983-4584",
    "email": "gethelp@nypl.org",
    "website": "https://nypl.example.org",
    "timezone": "America/New_York",
    "coordinates": { "lat": 40.7532, "lng": -73.9822 }
  },
  "hours": {
    "regular_weekly": {
      "mon": { "open": "09:00", "close": "20:00" },
      "tue": { "open": "09:00", "close": "20:00" },
      "wed": { "open": "09:00", "close": "20:00" },
      "thu": { "open": "09:00", "close": "20:00" },
      "fri": { "open": "09:00", "close": "17:00" },
      "sat": { "open": "09:00", "close": "17:00" },
      "sun": { "open": "13:00", "close": "17:00" }
    },
    "today": {
      "date": "2026-05-14",
      "weekday": "thu",
      "open": "09:00",
      "close": "20:00",
      "display": "9:00 AM – 8:00 PM",
      "is_open_now": true,
      "closing_in_minutes": 660
    },
    "upcoming_closures": [
      {
        "date": "2026-05-25",
        "reason": "Memorial Day",
        "all_day": true
      },
      {
        "date": "2026-07-04",
        "reason": "Independence Day",
        "all_day": true
      },
      {
        "date": "2026-06-12",
        "reason": "Staff development — opens at 1:00 PM",
        "all_day": false,
        "open": "13:00",
        "close": "20:00"
      }
    ]
  },
  "wifi": {
    "ssid": "NYPL",
    "password_required": false,
    "captive_portal": false
  },
  "amenities": [
    "wheelchair-accessible",
    "elevator",
    "accessible-restrooms",
    "stroller-friendly",
    "nursing-room",
    "water-fountain",
    "bike-rack",
    "vending-machines"
  ],
  "languages_spoken_at_desk": ["en", "fr", "es", "zh"],
  "parking": {
    "available": true,
    "free": true,
    "lot_capacity": 60,
    "accessible_spots": 4,
    "notes": "Free 2-hour parking in the library lot; street parking metered."
  },
  "contact_for_kiosk_help": {
    "desk": "Information Desk",
    "extension": "0",
    "after_hours_email": "help@nypl.example.org"
  }
}
  ,
  "programs":
{
  "library_slug": "nypl",
  "as_of": "2026-05-14T09:00:00-04:00",
  "timezone": "America/New_York",
  "programs": [
    {
      "id": "storytime-toddlers",
      "title": "Storytime for Toddlers",
      "description": "Songs, stories, and rhymes for ages 1–4.",
      "starts_at": "2026-05-14T10:00:00-04:00",
      "ends_at": "2026-05-14T10:45:00-04:00",
      "time_display": "10:00 AM",
      "duration_minutes": 45,
      "room_id": "childrens-area",
      "room_name": "Children's Area",
      "audience": "Children 1–4 and caregivers",
      "registration": "drop-in",
      "capacity": 30,
      "seats_remaining": 30,
      "presenter": "Ms. Anika (Children's Librarian)",
      "language": "en",
      "tags": ["children", "literacy", "weekly"],
      "recurrence": "weekly:thursday",
      "cancelled": false
    },
    {
      "id": "seed-library-workshop",
      "title": "Seed Library Workshop",
      "description": "Learn crop planning, soil health, and seed starting. Take home free non-GMO, open-pollinated seeds and a seedling growing kit. All skill levels welcome.",
      "starts_at": "2026-05-14T11:00:00-04:00",
      "ends_at": "2026-05-14T12:00:00-04:00",
      "time_display": "11:00 AM",
      "duration_minutes": 60,
      "room_id": "meeting-c",
      "room_name": "Meeting Room C",
      "audience": "All ages",
      "registration": "required",
      "capacity": 18,
      "seats_remaining": 5,
      "presenter": "NYPL Seed Library volunteers",
      "language": "en",
      "tags": ["garden", "sustainability", "workshop", "monthly"],
      "recurrence": "monthly:2nd-thursday",
      "cancelled": false
    },
    {
      "id": "resume-writing",
      "title": "Resume Writing Workshop",
      "description": "Volunteer help to write or update your resume. Drop in, limited seats.",
      "starts_at": "2026-05-14T14:00:00-04:00",
      "ends_at": "2026-05-14T15:30:00-04:00",
      "time_display": "2:00 PM",
      "duration_minutes": 90,
      "room_id": "meeting-b",
      "room_name": "Meeting Room B",
      "audience": "Adults",
      "registration": "drop-in",
      "capacity": 12,
      "seats_remaining": 8,
      "presenter": "Career Connect volunteers",
      "language": "en",
      "tags": ["job-seeker", "adult", "workshop"],
      "recurrence": "weekly:thursday",
      "cancelled": false
    },
    {
      "id": "esl-conversation",
      "title": "ESL Conversation Circle",
      "description": "Practice English in a friendly group. All levels welcome.",
      "starts_at": "2026-05-14T15:30:00-04:00",
      "ends_at": "2026-05-14T16:30:00-04:00",
      "time_display": "3:30 PM",
      "duration_minutes": 60,
      "room_id": "study-a",
      "room_name": "Study Room A",
      "audience": "Adults learning English",
      "registration": "drop-in",
      "capacity": 15,
      "seats_remaining": 11,
      "presenter": "Rotating staff facilitator",
      "language": "en",
      "tags": ["esl", "adult", "weekly"],
      "recurrence": "weekly:thursday",
      "cancelled": false
    },
    {
      "id": "teen-manga-club",
      "title": "Teen Manga & Comics Club",
      "description": "Read, share, and create manga and comics. Ages 12–18.",
      "starts_at": "2026-05-14T16:00:00-04:00",
      "ends_at": "2026-05-14T17:30:00-04:00",
      "time_display": "4:00 PM",
      "duration_minutes": 90,
      "room_id": "teen-zone",
      "room_name": "Teen Zone",
      "audience": "Teens 12–18",
      "registration": "required",
      "capacity": 20,
      "seats_remaining": 4,
      "presenter": "Mx. Jordan (Teen Services)",
      "language": "en",
      "tags": ["teen", "club", "monthly"],
      "recurrence": "monthly:2nd-thursday",
      "cancelled": false
    },
    {
      "id": "digital-literacy-libby",
      "title": "Digital Literacy: Using Libby",
      "description": "Learn how to borrow ebooks and audiobooks using your library card. Bring your device.",
      "starts_at": "2026-05-14T18:00:00-04:00",
      "ends_at": "2026-05-14T19:00:00-04:00",
      "time_display": "6:00 PM",
      "duration_minutes": 60,
      "room_id": "computer-lab",
      "room_name": "Computer Lab",
      "audience": "Adults",
      "registration": "required",
      "capacity": 14,
      "seats_remaining": 0,
      "waitlist_count": 3,
      "presenter": "Mr. Devon (Digital Services Librarian)",
      "language": "en",
      "tags": ["digital-literacy", "adult", "ebooks"],
      "recurrence": "monthly:2nd-thursday",
      "cancelled": false
    },
    {
      "id": "baby-lapsit",
      "title": "Baby Lapsit",
      "description": "Gentle rhymes and bounces for babies up to 12 months.",
      "starts_at": "2026-05-15T10:30:00-04:00",
      "ends_at": "2026-05-15T11:00:00-04:00",
      "time_display": "10:30 AM",
      "duration_minutes": 30,
      "room_id": "childrens-area",
      "room_name": "Children's Area",
      "audience": "Babies 0–12 months and caregivers",
      "registration": "drop-in",
      "capacity": 20,
      "seats_remaining": 20,
      "presenter": "Ms. Anika (Children's Librarian)",
      "language": "en",
      "tags": ["children", "baby", "weekly"],
      "recurrence": "weekly:friday",
      "cancelled": false
    },
    {
      "id": "citizenship-prep",
      "title": "Citizenship Test Prep (Bilingual)",
      "description": "Study session for the U.S. citizenship civics test. Materials in English and Spanish.",
      "starts_at": "2026-05-16T13:00:00-04:00",
      "ends_at": "2026-05-16T14:30:00-04:00",
      "time_display": "1:00 PM",
      "duration_minutes": 90,
      "room_id": "meeting-b",
      "room_name": "Meeting Room B",
      "audience": "Adults",
      "registration": "required",
      "capacity": 18,
      "seats_remaining": 6,
      "presenter": "NYC Adult Learning Center",
      "language": "en,es",
      "tags": ["adult", "civics", "bilingual"],
      "recurrence": "biweekly:saturday",
      "cancelled": false
    },
    {
      "id": "3d-printing-intro",
      "title": "Intro to 3D Printing",
      "description": "Hands-on tour of the Makerspace 3D printers. Bring an STL file or use ours.",
      "starts_at": "2026-05-17T15:00:00-04:00",
      "ends_at": "2026-05-17T16:00:00-04:00",
      "time_display": "3:00 PM",
      "duration_minutes": 60,
      "room_id": "makerspace",
      "room_name": "Makerspace",
      "audience": "Ages 10+",
      "registration": "required",
      "capacity": 8,
      "seats_remaining": 2,
      "presenter": "Maker-in-Residence",
      "language": "en",
      "tags": ["maker", "stem", "family"],
      "recurrence": "monthly:3rd-sunday",
      "cancelled": false
    }
  ]
}
  ,
  "rooms":
{
  "library_slug": "nypl",
  "as_of": "2026-05-14T09:00:00-04:00",
  "timezone": "America/New_York",
  "booking_policy": {
    "max_duration_minutes": 120,
    "max_bookings_per_card_per_day": 1,
    "advance_booking_days": 14,
    "library_card_required": true,
    "no_show_grace_minutes": 15
  },
  "rooms": [
    {
      "id": "study-a",
      "name": "Study Room A",
      "type": "study",
      "capacity": 8,
      "floor": "Upper Level",
      "map_zone": "study-rooms",
      "equipment": ["tv", "whiteboard", "hdmi"],
      "accessible": true,
      "bookable": true,
      "slots_today": [
        { "start": "2026-05-14T12:00:00-04:00", "end": "2026-05-14T13:00:00-04:00", "status": "available" },
        { "start": "2026-05-14T13:00:00-04:00", "end": "2026-05-14T14:00:00-04:00", "status": "booked" },
        { "start": "2026-05-14T14:00:00-04:00", "end": "2026-05-14T15:00:00-04:00", "status": "booked" },
        { "start": "2026-05-14T15:30:00-04:00", "end": "2026-05-14T16:30:00-04:00", "status": "program", "program_id": "esl-conversation" },
        { "start": "2026-05-14T16:00:00-04:00", "end": "2026-05-14T17:00:00-04:00", "status": "available" },
        { "start": "2026-05-14T18:00:00-04:00", "end": "2026-05-14T19:00:00-04:00", "status": "available" }
      ]
    },
    {
      "id": "meeting-b",
      "name": "Meeting Room B",
      "type": "meeting",
      "capacity": 20,
      "floor": "Upper Level",
      "map_zone": "study-rooms",
      "equipment": ["projector", "conference-phone", "hdmi", "whiteboard"],
      "accessible": true,
      "bookable": true,
      "slots_today": [
        { "start": "2026-05-14T09:00:00-04:00", "end": "2026-05-14T10:00:00-04:00", "status": "available" },
        { "start": "2026-05-14T11:00:00-04:00", "end": "2026-05-14T12:00:00-04:00", "status": "available" },
        { "start": "2026-05-14T14:00:00-04:00", "end": "2026-05-14T15:30:00-04:00", "status": "program", "program_id": "resume-writing" },
        { "start": "2026-05-14T16:00:00-04:00", "end": "2026-05-14T17:00:00-04:00", "status": "available" },
        { "start": "2026-05-14T17:00:00-04:00", "end": "2026-05-14T18:00:00-04:00", "status": "booked" }
      ]
    },
    {
      "id": "meeting-c",
      "name": "Meeting Room C",
      "type": "meeting",
      "capacity": 6,
      "floor": "Upper Level",
      "map_zone": "study-rooms",
      "equipment": ["tv", "hdmi"],
      "accessible": true,
      "bookable": true,
      "notes": "Doubles as the Passport Services room — closed during scheduled appointments.",
      "slots_today": [
        { "start": "2026-05-14T09:30:00-04:00", "end": "2026-05-14T11:30:00-04:00", "status": "closed", "reason": "passport-appointments" },
        { "start": "2026-05-14T13:00:00-04:00", "end": "2026-05-14T14:00:00-04:00", "status": "available" },
        { "start": "2026-05-14T15:00:00-04:00", "end": "2026-05-14T16:00:00-04:00", "status": "available" },
        { "start": "2026-05-14T17:00:00-04:00", "end": "2026-05-14T19:00:00-04:00", "status": "available" }
      ]
    },
    {
      "id": "pod-1",
      "name": "Quiet Study Pod 1",
      "type": "pod",
      "capacity": 1,
      "floor": "Main Floor (back)",
      "map_zone": "quiet-pods",
      "equipment": [],
      "accessible": false,
      "bookable": true,
      "slots_today": [
        { "start": "2026-05-14T10:00:00-04:00", "end": "2026-05-14T11:00:00-04:00", "status": "booked" },
        { "start": "2026-05-14T11:00:00-04:00", "end": "2026-05-14T12:00:00-04:00", "status": "booked" },
        { "start": "2026-05-14T15:00:00-04:00", "end": "2026-05-14T16:00:00-04:00", "status": "available" },
        { "start": "2026-05-14T17:00:00-04:00", "end": "2026-05-14T18:00:00-04:00", "status": "available" }
      ]
    },
    {
      "id": "pod-2",
      "name": "Quiet Study Pod 2",
      "type": "pod",
      "capacity": 1,
      "floor": "Main Floor (back)",
      "map_zone": "quiet-pods",
      "equipment": [],
      "accessible": true,
      "bookable": true,
      "slots_today": [
        { "start": "2026-05-14T09:00:00-04:00", "end": "2026-05-14T10:00:00-04:00", "status": "available", "label": "Now" },
        { "start": "2026-05-14T14:00:00-04:00", "end": "2026-05-14T15:00:00-04:00", "status": "available" },
        { "start": "2026-05-14T16:00:00-04:00", "end": "2026-05-14T17:00:00-04:00", "status": "available" }
      ]
    },
    {
      "id": "teen-zone",
      "name": "Teen Zone",
      "type": "drop-in",
      "capacity": 30,
      "floor": "Upper Level",
      "map_zone": "childrens-area",
      "equipment": ["xbox", "switch", "soft-seating"],
      "accessible": true,
      "bookable": false,
      "notes": "Ages 12–18 only. Closes to public during scheduled Teen programs.",
      "slots_today": [
        { "start": "2026-05-14T16:00:00-04:00", "end": "2026-05-14T17:30:00-04:00", "status": "program", "program_id": "teen-manga-club" }
      ]
    },
    {
      "id": "makerspace",
      "name": "Makerspace",
      "type": "lab",
      "capacity": 12,
      "floor": "Lower Level",
      "map_zone": "holds",
      "equipment": ["3d-printer", "sewing-machine", "button-maker", "vinyl-cutter"],
      "accessible": true,
      "bookable": true,
      "notes": "Open Tue–Sat. Equipment orientation required for first-time users.",
      "slots_today": [
        { "start": "2026-05-14T13:00:00-04:00", "end": "2026-05-14T15:00:00-04:00", "status": "available" },
        { "start": "2026-05-14T15:00:00-04:00", "end": "2026-05-14T17:00:00-04:00", "status": "available" }
      ]
    }
  ]
}
  ,
  "services":
{
  "library_slug": "nypl",
  "as_of": "2026-05-14T09:00:00-04:00",
  "services": [
    {
      "id": "printing",
      "name": "Printing",
      "description": "$0.10/page B&W, $0.50 colour. 3 printers available right now.",
      "location": "Left wing, main floor, near Computer Lab",
      "map_zone": "print-area",
      "transaction_intent": "print",
      "available_now": true,
      "child_resource": "printers"
    },
    {
      "id": "computers",
      "name": "Computer Lab",
      "description": "14 PCs available. Sessions up to 45 minutes (1 reservation per day). Library card required.",
      "location": "Left wing, main floor",
      "map_zone": "computer-lab",
      "transaction_intent": null,
      "available_now": true,
      "child_resource": "computers",
      "live_summary": "6 of 14 PCs available"
    },
    {
      "id": "holds",
      "name": "Holds Pickup",
      "description": "Pick up items you reserved online. Bring your library card.",
      "location": "Near entrance, left side",
      "map_zone": "holds",
      "transaction_intent": "holds_pickup",
      "available_now": true,
      "child_resource": "holds",
      "hours_today": "9:00 AM – 8:00 PM"
    },
    {
      "id": "self-check",
      "name": "Self-Check",
      "description": "Check out books on your own, no waiting in line.",
      "location": "Near entrance, right side",
      "map_zone": null,
      "transaction_intent": "self_check",
      "available_now": true,
      "kiosk_count": 3,
      "kiosks_online": 3
    },
    {
      "id": "library-card",
      "name": "Library Card Signup",
      "description": "New library cards are issued at the Information Desk.",
      "location": "Information Desk",
      "map_zone": null,
      "transaction_intent": null,
      "available_now": true,
      "hours_today": "9:00 AM – 8:00 PM",
      "id_required": ["photo-id-with-current-address"]
    },
    {
      "id": "wifi-hotspot",
      "name": "Wi-Fi Hotspot Lending",
      "description": "Borrow a mobile hotspot for up to 2 weeks. Library card required.",
      "location": "Information Desk",
      "map_zone": null,
      "transaction_intent": null,
      "available_now": true,
      "inventory_total": 25,
      "inventory_available": 4,
      "waitlist_count": 9
    },
    {
      "id": "makerspace",
      "name": "Makerspace / 3D Printing",
      "description": "3D printing, sewing machines, button maker. Available Tuesday–Saturday.",
      "location": "Lower Level",
      "map_zone": "holds",
      "transaction_intent": null,
      "available_now": true,
      "hours_today": "1:00 PM – 5:00 PM",
      "orientation_required_for_first_time": true
    },
    {
      "id": "museum-passes",
      "name": "Museum Passes",
      "description": "Free passes to local museums. Reserve at the Information Desk.",
      "location": "Information Desk",
      "map_zone": null,
      "transaction_intent": null,
      "available_now": true,
      "available_passes_today": [
        { "venue": "NYC Children's Museum", "qty_available": 1 },
        { "venue": "Modern Art Gallery", "qty_available": 0 },
        { "venue": "Natural History Museum", "qty_available": 2 }
      ]
    },
    {
      "id": "passport",
      "name": "Passport Services",
      "description": "Apply for or renew a U.S. passport at the library. By appointment.",
      "location": "Room C",
      "map_zone": "study-rooms",
      "transaction_intent": null,
      "available_now": true,
      "appointment_required": true,
      "next_appointment": "2026-05-16T10:00:00-04:00",
      "booking_url": "https://nypl.example.org/passport-appointments"
    },
    {
      "id": "scanner",
      "name": "Document Scanner",
      "description": "Free document scanning to USB or email.",
      "location": "Computer Lab, near PC 01",
      "map_zone": "computer-lab",
      "transaction_intent": null,
      "available_now": true
    },
    {
      "id": "notary",
      "name": "Notary Services",
      "description": "Free notary services for personal documents. Walk-in.",
      "location": "Information Desk",
      "map_zone": null,
      "transaction_intent": null,
      "available_now": false,
      "available_hours": "Tue & Thu, 10:00 AM – 12:00 PM"
    }
  ]
}
  ,
  "resources":
{
  "library_slug": "nypl",
  "as_of": "2026-05-14T09:00:00-04:00",
  "note": "Digital resources are PatronIQ-native (not CloudNine-owned in production). Listed here so the kiosk has one consistent data shape.",
  "resources": [
    {
      "id": "libby",
      "name": "Libby/OverDrive",
      "patron_label": "Borrow ebooks and audiobooks (also sends to Kindle)",
      "category": "ebooks",
      "url": "https://libbyapp.com",
      "library_card_required": true,
      "languages": ["en", "es", "fr", "zh"]
    },
    {
      "id": "cloudlibrary",
      "name": "CloudLibrary",
      "patron_label": "Alternative ebook and audiobook platform from OCLC",
      "category": "ebooks",
      "url": "https://www.yourcloudlibrary.com",
      "library_card_required": true
    },
    {
      "id": "hoopla",
      "name": "Hoopla",
      "patron_label": "Stream movies, music, and comics — no waitlist",
      "category": "streaming",
      "url": "https://hoopla.com",
      "library_card_required": true,
      "daily_checkout_limit": 5
    },
    {
      "id": "kanopy",
      "name": "Kanopy",
      "patron_label": "Stream indie films and documentaries",
      "category": "streaming",
      "url": "https://kanopy.com",
      "library_card_required": true,
      "monthly_play_credits": 10
    },
    {
      "id": "linkedin-learning",
      "name": "LinkedIn Learning",
      "patron_label": "Free courses in business, tech, and creative skills",
      "category": "learning",
      "url": "https://linkedin.com/learning",
      "library_card_required": true
    },
    {
      "id": "ancestry",
      "name": "Ancestry Library Edition",
      "patron_label": "Research your family tree (in-library only)",
      "category": "research",
      "url": "https://ancestrylibrary.com",
      "in_library_only": true
    },
    {
      "id": "brainfuse",
      "name": "Brainfuse HelpNow",
      "patron_label": "Live tutoring and homework help (daily 2–11pm)",
      "category": "learning",
      "url": "https://brainfuse.com",
      "library_card_required": true,
      "available_hours": "Daily 2:00 PM – 11:00 PM",
      "languages": ["en", "es"]
    },
    {
      "id": "pressreader",
      "name": "PressReader",
      "patron_label": "Read 7,000+ newspapers and magazines in 60 languages",
      "category": "news",
      "url": "https://pressreader.com",
      "library_card_required": true
    }
  ]
}
  ,
  "wayfinding":
{
  "library_slug": "nypl",
  "note": "Wayfinding entries match Jacob's POC at workspaces/jacob-young/dist (May 14, 2026). The map is a single PNG (public/floor-map.png) rendered by FloorMap; map_zone is preserved for forward-compat but not used by the current UI.",
  "wayfinding": [
    { "id": "print",    "label": "Print something",          "directions": "Head to the right side of the building — printers are located inside the Technology Zone (Room 150). Follow the signs from the main entrance. 2 printers available; $0.10/page B&W.", "map_zone": null },
    { "id": "study",    "label": "Find a quiet study space", "directions": "Study Rooms 216–219 are along the top of the building — enter from the main floor and follow signs left. The Quiet Room (201) is along the bottom corridor near the lounge. Room 219 is available right now.", "map_zone": null },
    { "id": "holds",    "label": "Pick up my holds",         "directions": "From the lobby entrance, walk straight into the main floor. The Holds/Reserves area is in the center of the building. Look for your last name on the items and bring your library card.", "map_zone": null },
    { "id": "computer", "label": "Use a computer",           "directions": "Head to the right side of the building — the Technology Zone and Public Computers are in Room 150. Follow signs from the main entrance. 14 PCs available; sessions up to 1 hour.", "map_zone": null },
    { "id": "kids",     "label": "Go to the Teen Zone",      "directions": "From the main floor, head toward the upper-right area of the building. Teen Library (Room 215) and Teen Programs (Room 214) are side by side. Teen Manga & Comics Club meets in the Teen Zone at 4:00 PM today.", "map_zone": null },
    { "id": "room",     "label": "Reserve a meeting room",   "directions": "Study Rooms 216–219 are along the top of the building. Tap \"Reserve a room\" on the home screen to book, or ask at the Information Desk. Room 219 is available right now.", "map_zone": null },
    { "id": "restroom", "label": "Find the restrooms",       "directions": "Restrooms are located near the Lobby/Entrance area (Room 207) at the bottom of the building. An accessible and family restroom is available.", "map_zone": null },
    { "id": "fiction",     "label": "Fiction section",         "directions": "Fiction is along the left side of the main floor — novels, mysteries, thrillers, romance, sci-fi, fantasy, horror, and graphic novels are shelved alphabetically by the author's last name. Look for genre spine labels.", "map_zone": null },
    { "id": "collections", "label": "Collections (center stacks)", "directions": "The Collections stacks are in the center of the main floor — magazines, periodicals, large print, and general circulating titles live here. The stacks run north-to-south with aisles between them.", "map_zone": null },
    { "id": "nonfiction",  "label": "Nonfiction section",      "directions": "Nonfiction is in the right-center of the main floor, organized by subject using the Dewey Decimal System. Aisle signs indicate the subject range. Includes biographies, history, cooking, science, self-help, travel, business, and reference.", "map_zone": null },
    { "id": "av",          "label": "A/V & New Material",      "directions": "DVDs, Blu-rays, music CDs, audiobooks (on disc), and new arrivals are in the A/V & New Material area on the right-center of the main floor, just south of Nonfiction. New releases sit on the end caps.", "map_zone": null },
    { "id": "children",    "label": "Children's Room",         "directions": "The Children's Room is in the upper-right corner of the building. Picture books, board books, early readers, juvenile fiction, and juvenile nonfiction are organized by reading level. Storytime mat and play tables inside.", "map_zone": null }
  ],
  "map": {
    "viewbox": "0 0 800 520",
    "you_are_here": { "x": 610, "y": 490 },
    "zones": []
  }
}
  ,
  "branches":
{
  "library_slug": "nypl",
  "system": "New York Public Library",
  "as_of": "2026-05-14T09:00:00-04:00",
  "source": {
    "url": "https://www.nypl.org/locations",
    "fetched_at": "2026-05-14T13:35:00-04:00",
    "note": "Hours captured from the NYPL locations index page reflect the day on which they were fetched (Thursday). Per-weekday schedules and holiday closures are not represented here. Phone numbers and accessibility tags are as listed on the page."
  },
  "summary": {
    "total_branches": 89,
    "by_borough": {
      "manhattan": 40,
      "bronx": 35,
      "staten_island": 14
    },
    "by_category": {
      "neighborhood": 85,
      "research": 2,
      "specialized_research": 2
    },
    "temporarily_closed": 8
  },
  "branches": [
    {
      "id": "125th-street",
      "name": "125th Street Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "224 East 125th Street", "city": "New York", "region": "NY", "postal": "10035", "country": "US" },
      "phone": "+1-212-534-5050",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "53rd-street",
      "name": "53rd Street Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "18 West 53rd Street", "city": "New York", "region": "NY", "postal": "10019", "country": "US" },
      "phone": "+1-212-714-8400",
      "today_hours_display": "11 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "58th-street",
      "name": "58th Street Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "127 East 58th Street", "city": "New York", "region": "NY", "postal": "10022", "country": "US" },
      "phone": "+1-212-759-7358",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "partially-accessible",
      "status": "open"
    },
    {
      "id": "67th-street",
      "name": "67th Street Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "328 East 67th Street", "city": "New York", "region": "NY", "postal": "10065", "country": "US" },
      "phone": "+1-212-734-1717",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "96th-street",
      "name": "96th Street Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "112 East 96th Street", "city": "New York", "region": "NY", "postal": "10128", "country": "US" },
      "phone": "+1-212-289-0908",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "aguilar",
      "name": "Aguilar Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "174 East 110th Street", "city": "New York", "region": "NY", "postal": "10029", "country": "US" },
      "phone": "+1-212-534-2930",
      "today_hours_display": null,
      "accessibility": "fully-accessible",
      "status": "temporarily-closed"
    },
    {
      "id": "andrew-heiskell",
      "name": "Andrew Heiskell Braille and Talking Book Library",
      "borough": "Manhattan",
      "category": "specialized_research",
      "address": { "street": "40 West 20th Street", "city": "New York", "region": "NY", "postal": "10011", "country": "US" },
      "phone": "+1-212-206-5400",
      "today_hours_display": "12 PM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "battery-park-city",
      "name": "Battery Park City Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "175 North End Avenue", "city": "New York", "region": "NY", "postal": "10282", "country": "US" },
      "phone": "+1-212-790-3499",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "chatham-square",
      "name": "Chatham Square Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "33 East Broadway", "city": "New York", "region": "NY", "postal": "10002", "country": "US" },
      "phone": "+1-212-964-6598",
      "today_hours_display": "9 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "columbus",
      "name": "Columbus Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "742 10th Avenue", "city": "New York", "region": "NY", "postal": "10019", "country": "US" },
      "phone": "+1-212-586-5098",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "countee-cullen",
      "name": "Countee Cullen Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "104 West 136th Street", "city": "New York", "region": "NY", "postal": "10030", "country": "US" },
      "phone": "+1-212-491-2070",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "partially-accessible",
      "status": "open"
    },
    {
      "id": "epiphany",
      "name": "Epiphany Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "228 East 23rd Street", "city": "New York", "region": "NY", "postal": "10010", "country": "US" },
      "phone": "+1-212-679-2645",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "fort-washington",
      "name": "Fort Washington Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "535 West 179th Street", "city": "New York", "region": "NY", "postal": "10033", "country": "US" },
      "phone": "+1-212-927-3533",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "george-bruce",
      "name": "George Bruce Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "518 West 125th Street", "city": "New York", "region": "NY", "postal": "10027", "country": "US" },
      "phone": "+1-212-662-9727",
      "today_hours_display": "12 PM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "hamilton-fish-park",
      "name": "Hamilton Fish Park Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "415 East Houston Street", "city": "New York", "region": "NY", "postal": "10002", "country": "US" },
      "phone": "+1-212-673-2290",
      "today_hours_display": null,
      "accessibility": "partially-accessible",
      "status": "temporarily-closed"
    },
    {
      "id": "hamilton-grange",
      "name": "Hamilton Grange Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "503 West 145th Street", "city": "New York", "region": "NY", "postal": "10031", "country": "US" },
      "phone": "+1-212-926-2147",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "harlem",
      "name": "Harlem Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "9 West 124th Street", "city": "New York", "region": "NY", "postal": "10027", "country": "US" },
      "phone": "+1-212-348-5620",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "harry-belafonte-115th",
      "name": "Harry Belafonte 115th Street Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "203 West 115th Street", "city": "New York", "region": "NY", "postal": "10026", "country": "US" },
      "phone": "+1-212-666-9393",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "hudson-park",
      "name": "Hudson Park Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "66 Leroy Street", "city": "New York", "region": "NY", "postal": "10014", "country": "US" },
      "phone": null,
      "today_hours_display": "10 AM–6 PM",
      "accessibility": null,
      "status": "open"
    },
    {
      "id": "inwood",
      "name": "Inwood Library — Joseph and Sheila Rosenblatt Building",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "4790 Broadway", "city": "New York", "region": "NY", "postal": "10034", "country": "US" },
      "phone": "+1-212-942-2445",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "jefferson-market",
      "name": "Jefferson Market Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "425 Avenue of the Americas", "city": "New York", "region": "NY", "postal": "10011", "country": "US" },
      "phone": "+1-212-243-4334",
      "today_hours_display": "10 AM–8 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "kips-bay",
      "name": "Kips Bay Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "446 Third Avenue", "city": "New York", "region": "NY", "postal": "10016", "country": "US" },
      "phone": "+1-212-683-2520",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "macombs-bridge",
      "name": "Macomb's Bridge Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "2633 Adam Clayton Powell, Jr. Blvd.", "city": "New York", "region": "NY", "postal": "10039", "country": "US" },
      "phone": "+1-212-281-4900",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "morningside-heights",
      "name": "Morningside Heights Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "2900 Broadway", "city": "New York", "region": "NY", "postal": "10025", "country": "US" },
      "phone": "+1-212-864-2530",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "muhlenberg",
      "name": "Muhlenberg Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "209 West 23rd Street", "city": "New York", "region": "NY", "postal": "10011", "country": "US" },
      "phone": "+1-212-924-1585",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "mulberry-street",
      "name": "Mulberry Street Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "10 Jersey Street", "city": "New York", "region": "NY", "postal": "10012", "country": "US" },
      "phone": "+1-212-966-3424",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "new-amsterdam",
      "name": "New Amsterdam Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "9 Murray Street", "city": "New York", "region": "NY", "postal": "10007", "country": "US" },
      "phone": "+1-212-732-8186",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "ottendorfer",
      "name": "Ottendorfer Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "135 Second Avenue", "city": "New York", "region": "NY", "postal": "10003", "country": "US" },
      "phone": "+1-212-674-0947",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": null,
      "status": "open"
    },
    {
      "id": "roosevelt-island",
      "name": "Roosevelt Island Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "504 Main Street", "city": "New York", "region": "NY", "postal": "10044", "country": "US" },
      "phone": "+1-212-308-6243",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "seward-park",
      "name": "Seward Park Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "192 East Broadway", "city": "New York", "region": "NY", "postal": "10002", "country": "US" },
      "phone": "+1-212-477-6770",
      "today_hours_display": "10 AM–8 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "st-agnes",
      "name": "St. Agnes Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "444 Amsterdam Avenue", "city": "New York", "region": "NY", "postal": "10024", "country": "US" },
      "phone": "+1-212-621-0619",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "terence-cardinal-cooke",
      "name": "Terence Cardinal Cooke-Cathedral Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "560 Lexington Avenue", "city": "New York", "region": "NY", "postal": "10022", "country": "US" },
      "phone": "+1-212-752-3824",
      "today_hours_display": null,
      "accessibility": "partially-accessible",
      "status": "temporarily-closed"
    },
    {
      "id": "tompkins-square",
      "name": "Tompkins Square Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "331 East 10th Street", "city": "New York", "region": "NY", "postal": "10009", "country": "US" },
      "phone": "+1-212-228-4747",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "washington-heights",
      "name": "Washington Heights Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "1000 St. Nicholas Avenue", "city": "New York", "region": "NY", "postal": "10032", "country": "US" },
      "phone": "+1-212-923-6054",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "webster",
      "name": "Webster Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "1465 York Avenue", "city": "New York", "region": "NY", "postal": "10075", "country": "US" },
      "phone": "+1-212-288-5049",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "yorkville",
      "name": "Yorkville Library",
      "borough": "Manhattan",
      "category": "neighborhood",
      "address": { "street": "222 East 79th Street", "city": "New York", "region": "NY", "postal": "10075", "country": "US" },
      "phone": "+1-212-744-5824",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": null,
      "status": "open"
    },
    {
      "id": "schwarzman",
      "name": "Stephen A. Schwarzman Building",
      "borough": "Manhattan",
      "category": "research",
      "address": { "street": "Fifth Avenue and 42nd Street", "city": "New York", "region": "NY", "postal": "10018", "country": "US" },
      "phone": "+1-917-275-6975",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open",
      "notes": "Major research library with multiple divisions."
    },
    {
      "id": "snfl",
      "name": "Stavros Niarchos Foundation Library (SNFL)",
      "borough": "Manhattan",
      "category": "research",
      "address": { "street": "455 Fifth Avenue", "city": "New York", "region": "NY", "postal": "10016", "country": "US" },
      "phone": "+1-212-340-0863",
      "today_hours_display": "8 AM–9 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "lpa",
      "name": "The New York Public Library for the Performing Arts",
      "borough": "Manhattan",
      "category": "specialized_research",
      "address": { "street": "40 Lincoln Center Plaza", "city": "New York", "region": "NY", "postal": "10023", "country": "US" },
      "phone": "+1-917-275-6975",
      "today_hours_display": "10:30 AM–8 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "schomburg",
      "name": "Schomburg Center for Research in Black Culture",
      "borough": "Manhattan",
      "category": "specialized_research",
      "address": { "street": "515 Malcolm X Boulevard", "city": "New York", "region": "NY", "postal": "10037", "country": "US" },
      "phone": "+1-917-275-6975",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "allerton",
      "name": "Allerton Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "2740 Barnes Avenue", "city": "Bronx", "region": "NY", "postal": "10467", "country": "US" },
      "phone": "+1-718-881-4240",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "baychester",
      "name": "Baychester Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "2049 Asch Loop North", "city": "Bronx", "region": "NY", "postal": "10475", "country": "US" },
      "phone": "+1-718-379-6700",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "belmont",
      "name": "Belmont Library and Enrico Fermi Cultural Center",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "610 East 186th Street", "city": "Bronx", "region": "NY", "postal": "10458", "country": "US" },
      "phone": "+1-718-933-6410",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "bronx-library-center",
      "name": "Bronx Library Center",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "310 East Kingsbridge Road", "city": "Bronx", "region": "NY", "postal": "10458", "country": "US" },
      "phone": "+1-718-579-4244",
      "today_hours_display": "9 AM–9 PM",
      "accessibility": "fully-accessible",
      "status": "open",
      "notes": "Major community library."
    },
    {
      "id": "castle-hill",
      "name": "Castle Hill Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "947 Castle Hill Avenue", "city": "Bronx", "region": "NY", "postal": "10473", "country": "US" },
      "phone": "+1-718-824-3838",
      "today_hours_display": null,
      "accessibility": "fully-accessible",
      "status": "temporarily-closed"
    },
    {
      "id": "city-island",
      "name": "City Island Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "320 City Island Avenue", "city": "Bronx", "region": "NY", "postal": "10464", "country": "US" },
      "phone": "+1-718-885-1703",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "clasons-point",
      "name": "Clason's Point Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "1215 Morrison Avenue", "city": "Bronx", "region": "NY", "postal": "10472", "country": "US" },
      "phone": "+1-718-842-1235",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "eastchester",
      "name": "Eastchester Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "1385 East Gun Hill Road", "city": "Bronx", "region": "NY", "postal": "10469", "country": "US" },
      "phone": "+1-718-653-3292",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "edenwald",
      "name": "Edenwald Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "1255 East 233rd Street", "city": "Bronx", "region": "NY", "postal": "10466", "country": "US" },
      "phone": "+1-718-798-3355",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "francis-martin",
      "name": "Francis Martin Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "2150 University Avenue", "city": "Bronx", "region": "NY", "postal": "10453", "country": "US" },
      "phone": "+1-718-295-5287",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "grand-concourse",
      "name": "Grand Concourse Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "155 East 173rd Street", "city": "Bronx", "region": "NY", "postal": "10457", "country": "US" },
      "phone": "+1-718-583-6611",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "high-bridge",
      "name": "High Bridge Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "78 West 168th Street", "city": "Bronx", "region": "NY", "postal": "10452", "country": "US" },
      "phone": "+1-718-293-7800",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "hunts-point",
      "name": "Hunts Point Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "877 Southern Boulevard", "city": "Bronx", "region": "NY", "postal": "10459", "country": "US" },
      "phone": "+1-718-617-0338",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "jerome-park",
      "name": "Jerome Park Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "118 Eames Place", "city": "Bronx", "region": "NY", "postal": "10468", "country": "US" },
      "phone": "+1-718-549-5200",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "kingsbridge",
      "name": "Kingsbridge Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "291 West 231st Street", "city": "Bronx", "region": "NY", "postal": "10463", "country": "US" },
      "phone": "+1-718-548-5656",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "melrose",
      "name": "Melrose Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "910 Morris Avenue", "city": "Bronx", "region": "NY", "postal": "10451", "country": "US" },
      "phone": "+1-718-588-0110",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "morris-park",
      "name": "Morris Park Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "985 Morris Park Avenue", "city": "Bronx", "region": "NY", "postal": "10462", "country": "US" },
      "phone": "+1-718-931-0636",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "morrisania",
      "name": "Morrisania Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "610 East 169th Street", "city": "Bronx", "region": "NY", "postal": "10456", "country": "US" },
      "phone": "+1-718-589-9268",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "mosholu",
      "name": "Mosholu Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "285 East 205th Street", "city": "Bronx", "region": "NY", "postal": "10467", "country": "US" },
      "phone": "+1-718-882-8239",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "mott-haven",
      "name": "Mott Haven Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "321 East 140th Street", "city": "Bronx", "region": "NY", "postal": "10454", "country": "US" },
      "phone": "+1-718-665-4878",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "parkchester",
      "name": "Parkchester Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "1985 Westchester Avenue", "city": "Bronx", "region": "NY", "postal": "10462", "country": "US" },
      "phone": "+1-718-829-7830",
      "today_hours_display": "10 AM–8 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "pelham-bay",
      "name": "Pelham Bay Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "3060 Middletown Road", "city": "Bronx", "region": "NY", "postal": "10461", "country": "US" },
      "phone": "+1-718-792-6744",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "pelham-parkway-van-nest",
      "name": "Pelham Parkway-Van Nest Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "2147 Barnes Avenue", "city": "Bronx", "region": "NY", "postal": "10462", "country": "US" },
      "phone": "+1-718-829-5864",
      "today_hours_display": null,
      "accessibility": "partially-accessible",
      "status": "temporarily-closed"
    },
    {
      "id": "riverdale",
      "name": "Riverdale Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "5540 Mosholu Avenue", "city": "Bronx", "region": "NY", "postal": "10471", "country": "US" },
      "phone": "+1-718-549-1212",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "sedgwick",
      "name": "Sedgwick Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "1701 Dr. Martin Luther King, Jr. Blvd.", "city": "Bronx", "region": "NY", "postal": "10453", "country": "US" },
      "phone": "+1-718-731-2074",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "soundview",
      "name": "Soundview Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "660 Soundview Avenue", "city": "Bronx", "region": "NY", "postal": "10473", "country": "US" },
      "phone": "+1-718-589-0880",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "partially-accessible",
      "status": "open"
    },
    {
      "id": "spuyten-duyvil",
      "name": "Spuyten Duyvil Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "650 W. 235th St.", "city": "Bronx", "region": "NY", "postal": "10463", "country": "US" },
      "phone": "+1-718-796-1202",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "partially-accessible",
      "status": "open"
    },
    {
      "id": "throgs-neck",
      "name": "Throg's Neck Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "3025 Cross Bronx Expressway", "city": "Bronx", "region": "NY", "postal": "10465", "country": "US" },
      "phone": "+1-718-792-2612",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "tremont",
      "name": "Tremont Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "1866 Washington Avenue", "city": "Bronx", "region": "NY", "postal": "10457", "country": "US" },
      "phone": "+1-718-299-5177",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "van-cortlandt",
      "name": "Van Cortlandt Library — Arline Schwarzman Building",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "3882 Cannon Place", "city": "Bronx", "region": "NY", "postal": "10463", "country": "US" },
      "phone": "+1-718-543-5150",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "wakefield",
      "name": "Wakefield Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "4100 Lowerre Place", "city": "Bronx", "region": "NY", "postal": "10466", "country": "US" },
      "phone": "+1-718-652-4663",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "west-farms",
      "name": "West Farms Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "2085 Honeywell Avenue", "city": "Bronx", "region": "NY", "postal": "10460", "country": "US" },
      "phone": "+1-718-367-5376",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "westchester-square",
      "name": "Westchester Square Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "2521 Glebe Avenue", "city": "Bronx", "region": "NY", "postal": "10461", "country": "US" },
      "phone": "+1-718-863-0436",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": null,
      "status": "open"
    },
    {
      "id": "woodlawn-heights",
      "name": "Woodlawn Heights Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "4355 Katonah Avenue", "city": "Bronx", "region": "NY", "postal": "10470", "country": "US" },
      "phone": "+1-718-519-9627",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "woodstock",
      "name": "Woodstock Library",
      "borough": "Bronx",
      "category": "neighborhood",
      "address": { "street": "761 East 160th Street", "city": "Bronx", "region": "NY", "postal": "10456", "country": "US" },
      "phone": "+1-718-665-6255",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "charleston",
      "name": "Charleston Library",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "225 Bricktown Way", "city": "Staten Island", "region": "NY", "postal": "10309", "country": "US" },
      "phone": "+1-929-284-3660",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "dongan-hills",
      "name": "Dongan Hills Library",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "1617 Richmond Road", "city": "Staten Island", "region": "NY", "postal": "10304", "country": "US" },
      "phone": "+1-718-351-1444",
      "today_hours_display": "11 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "great-kills",
      "name": "Great Kills Library",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "56 Giffords Lane", "city": "Staten Island", "region": "NY", "postal": "10308", "country": "US" },
      "phone": "+1-718-984-6670",
      "today_hours_display": "11 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "huguenot-park",
      "name": "Huguenot Park Library",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "830 Huguenot Avenue", "city": "Staten Island", "region": "NY", "postal": "10312", "country": "US" },
      "phone": "+1-718-984-4636",
      "today_hours_display": null,
      "accessibility": "fully-accessible",
      "status": "temporarily-closed"
    },
    {
      "id": "mariners-harbor",
      "name": "Mariners Harbor Library",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "206 South Avenue", "city": "Staten Island", "region": "NY", "postal": "10303", "country": "US" },
      "phone": "+1-212-621-0690",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "new-dorp",
      "name": "New Dorp Library",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "309 New Dorp Lane", "city": "Staten Island", "region": "NY", "postal": "10306", "country": "US" },
      "phone": "+1-718-351-2977",
      "today_hours_display": null,
      "accessibility": "fully-accessible",
      "status": "temporarily-closed"
    },
    {
      "id": "port-richmond",
      "name": "Port Richmond Library",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "75 Bennett Street", "city": "Staten Island", "region": "NY", "postal": "10302", "country": "US" },
      "phone": "+1-718-442-0158",
      "today_hours_display": "11 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "richmondtown",
      "name": "Richmondtown Library",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "200 Clarke Avenue", "city": "Staten Island", "region": "NY", "postal": "10306", "country": "US" },
      "phone": "+1-718-668-0413",
      "today_hours_display": "10 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "south-beach",
      "name": "South Beach Library",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "41 Father Capodanno Boulevard", "city": "Staten Island", "region": "NY", "postal": "10305", "country": "US" },
      "phone": "+1-718-816-5834",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "st-george",
      "name": "St. George Library Center",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "5 Central Avenue", "city": "Staten Island", "region": "NY", "postal": "10301", "country": "US" },
      "phone": "+1-718-442-8560",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "stapleton",
      "name": "Stapleton Library",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "132 Canal St.", "city": "Staten Island", "region": "NY", "postal": "10304", "country": "US" },
      "phone": "+1-718-727-0427",
      "today_hours_display": "11 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "todt-hill-westerleigh",
      "name": "Todt Hill-Westerleigh Library",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "2550 Victory Boulevard", "city": "Staten Island", "region": "NY", "postal": "10314", "country": "US" },
      "phone": "+1-718-494-1642",
      "today_hours_display": "10 AM–7 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "tottenville",
      "name": "Tottenville Library",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "7430 Amboy Road", "city": "Staten Island", "region": "NY", "postal": "10307", "country": "US" },
      "phone": "+1-718-984-0945",
      "today_hours_display": "11 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    },
    {
      "id": "west-new-brighton",
      "name": "West New Brighton Library",
      "borough": "Staten Island",
      "category": "neighborhood",
      "address": { "street": "976 Castleton Avenue", "city": "Staten Island", "region": "NY", "postal": "10310", "country": "US" },
      "phone": "+1-718-442-1416",
      "today_hours_display": "11 AM–6 PM",
      "accessibility": "fully-accessible",
      "status": "open"
    }
  ]
}
  ,
  "computers":
{
  "library_slug": "nypl",
  "as_of": "2026-05-14T09:00:00-04:00",
  "session_policy": {
    "default_session_minutes": 60,
    "extensions_allowed": 1,
    "extension_minutes": 30,
    "library_card_required": true,
    "guest_pass_minutes": 30
  },
  "summary": {
    "total": 14,
    "available": 6,
    "in_use": 7,
    "out_of_service": 1
  },
  "stations": [
    {
      "id": "pc-lab-01",
      "name": "PC 01",
      "location": "Computer Lab, row 1",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["office", "browser", "adobe-reader", "scanner-attached"],
      "accessible": true,
      "status": "available",
      "session_remaining_minutes": null
    },
    {
      "id": "pc-lab-02",
      "name": "PC 02",
      "location": "Computer Lab, row 1",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["office", "browser"],
      "accessible": false,
      "status": "in-use",
      "session_remaining_minutes": 42
    },
    {
      "id": "pc-lab-03",
      "name": "PC 03",
      "location": "Computer Lab, row 1",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["office", "browser"],
      "accessible": false,
      "status": "available",
      "session_remaining_minutes": null
    },
    {
      "id": "pc-lab-04",
      "name": "PC 04",
      "location": "Computer Lab, row 1",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["office", "browser"],
      "accessible": false,
      "status": "in-use",
      "session_remaining_minutes": 15
    },
    {
      "id": "pc-lab-05",
      "name": "PC 05",
      "location": "Computer Lab, row 2",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["office", "browser"],
      "accessible": false,
      "status": "in-use",
      "session_remaining_minutes": 8
    },
    {
      "id": "pc-lab-06",
      "name": "PC 06",
      "location": "Computer Lab, row 2",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["office", "browser"],
      "accessible": false,
      "status": "available",
      "session_remaining_minutes": null
    },
    {
      "id": "pc-lab-07",
      "name": "PC 07",
      "location": "Computer Lab, row 2",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["office", "browser"],
      "accessible": false,
      "status": "in-use",
      "session_remaining_minutes": 27
    },
    {
      "id": "pc-lab-08",
      "name": "PC 08 (Accessible)",
      "location": "Computer Lab, accessible bay",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["office", "browser", "jaws", "zoomtext", "height-adjustable-desk"],
      "accessible": true,
      "status": "available",
      "session_remaining_minutes": null
    },
    {
      "id": "pc-lab-09",
      "name": "PC 09",
      "location": "Computer Lab, row 3",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["office", "browser"],
      "accessible": false,
      "status": "in-use",
      "session_remaining_minutes": 51
    },
    {
      "id": "pc-lab-10",
      "name": "PC 10",
      "location": "Computer Lab, row 3",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["office", "browser"],
      "accessible": false,
      "status": "available",
      "session_remaining_minutes": null
    },
    {
      "id": "pc-lab-11",
      "name": "PC 11",
      "location": "Computer Lab, row 3",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["office", "browser"],
      "accessible": false,
      "status": "in-use",
      "session_remaining_minutes": 3
    },
    {
      "id": "pc-lab-12",
      "name": "PC 12",
      "location": "Computer Lab, row 3",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["office", "browser"],
      "accessible": false,
      "status": "out-of-service",
      "status_reason": "monitor-replacement-scheduled",
      "session_remaining_minutes": null
    },
    {
      "id": "pc-lab-13",
      "name": "Express PC 13 (15-min)",
      "location": "Computer Lab, express bay near door",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["browser"],
      "express": true,
      "accessible": false,
      "status": "available",
      "session_remaining_minutes": null
    },
    {
      "id": "pc-lab-14",
      "name": "Express PC 14 (15-min)",
      "location": "Computer Lab, express bay near door",
      "map_zone": "computer-lab",
      "floor": "Main Floor",
      "platform": "windows-11",
      "capabilities": ["browser"],
      "express": true,
      "accessible": false,
      "status": "in-use",
      "session_remaining_minutes": 11
    }
  ]
}
  ,
  "holds":
{
  "library_slug": "nypl",
  "as_of": "2026-05-14T09:00:00-04:00",
  "pickup_location": {
    "name": "Holds Pickup Shelves",
    "location": "Near entrance, left side",
    "map_zone": "holds",
    "self_serve": true,
    "shelf_layout": "alphabetical-by-last-name"
  },
  "policy": {
    "shelf_days": 7,
    "library_card_required": true,
    "self_check_required_to_complete_pickup": true
  },
  "summary": {
    "items_on_shelf_total": 187,
    "shelf_capacity": 240,
    "shelf_percent_full": 78
  },
  "alphabetical_buckets": [
    { "bucket": "A–C", "count": 31 },
    { "bucket": "D–F", "count": 22 },
    { "bucket": "G–I", "count": 18 },
    { "bucket": "J–L", "count": 25 },
    { "bucket": "M–O", "count": 27 },
    { "bucket": "P–R", "count": 19 },
    { "bucket": "S–U", "count": 24 },
    { "bucket": "V–Z", "count": 21 }
  ],
  "expiring_today_count": 9,
  "note": "Patron-specific hold details are never sent to the kiosk. Patrons must look up their own holds after authenticating at a self-check or staff desk."
}
  ,
  "printers":
{
  "library_slug": "nypl",
  "as_of": "2026-05-14T09:00:00-04:00",
  "pricing": {
    "currency": "USD",
    "bw_per_page": 0.10,
    "color_per_page": 0.50,
    "free_pages_per_card_per_day": 5,
    "payment_methods": ["library-card-balance", "credit-card", "coin"]
  },
  "release_methods": [
    "kiosk-card-tap",
    "release-station-pin",
    "mobile-upload-printeron"
  ],
  "printers": [
    {
      "id": "prn-mainfloor-bw-1",
      "name": "Print Station 1 (B&W)",
      "model": "HP LaserJet Pro M404n",
      "location": "Left wing, main floor, near Computer Lab",
      "map_zone": "print-area",
      "floor": "Main Floor",
      "capabilities": {
        "color": false,
        "duplex": true,
        "paper_sizes": ["letter", "legal"],
        "max_pages_per_job": 50
      },
      "status": "online",
      "queue_length": 0,
      "estimated_wait_minutes": 0,
      "supplies": {
        "paper_level": "full",
        "toner_level": "ok"
      },
      "accepts_release_methods": ["kiosk-card-tap", "release-station-pin", "mobile-upload-printeron"]
    },
    {
      "id": "prn-mainfloor-bw-2",
      "name": "Print Station 2 (B&W)",
      "model": "HP LaserJet Pro M404n",
      "location": "Left wing, main floor, near Computer Lab",
      "map_zone": "print-area",
      "floor": "Main Floor",
      "capabilities": {
        "color": false,
        "duplex": true,
        "paper_sizes": ["letter", "legal"],
        "max_pages_per_job": 50
      },
      "status": "online",
      "queue_length": 2,
      "estimated_wait_minutes": 3,
      "supplies": {
        "paper_level": "ok",
        "toner_level": "low"
      },
      "accepts_release_methods": ["kiosk-card-tap", "release-station-pin", "mobile-upload-printeron"]
    },
    {
      "id": "prn-mainfloor-color-1",
      "name": "Color Print Station",
      "model": "Canon imageRUNNER ADVANCE C5550i",
      "location": "Left wing, main floor, near Computer Lab",
      "map_zone": "print-area",
      "floor": "Main Floor",
      "capabilities": {
        "color": true,
        "duplex": true,
        "paper_sizes": ["letter", "legal", "tabloid"],
        "max_pages_per_job": 100,
        "scan": true,
        "fax": false
      },
      "status": "online",
      "queue_length": 1,
      "estimated_wait_minutes": 2,
      "supplies": {
        "paper_level": "ok",
        "toner_level": "ok"
      },
      "accepts_release_methods": ["kiosk-card-tap", "release-station-pin", "mobile-upload-printeron"]
    },
    {
      "id": "prn-upper-bw-1",
      "name": "Upper Level Print Station",
      "model": "HP LaserJet Pro M404n",
      "location": "Upper Level, near Study Rooms",
      "map_zone": "study-rooms",
      "floor": "Upper Level",
      "capabilities": {
        "color": false,
        "duplex": true,
        "paper_sizes": ["letter"],
        "max_pages_per_job": 50
      },
      "status": "offline",
      "status_reason": "paper-jam",
      "queue_length": 0,
      "estimated_wait_minutes": null,
      "supplies": {
        "paper_level": "empty",
        "toner_level": "ok"
      },
      "accepts_release_methods": ["kiosk-card-tap", "release-station-pin"]
    },
    {
      "id": "prn-makerspace-3d-1",
      "name": "3D Printer — Prusa MK4 #1",
      "model": "Prusa MK4",
      "location": "Lower Level, Makerspace",
      "map_zone": "holds",
      "floor": "Lower Level",
      "capabilities": {
        "color": false,
        "filament": "PLA",
        "build_volume_mm": "250x210x220",
        "max_job_hours": 4
      },
      "status": "online",
      "queue_length": 1,
      "estimated_wait_minutes": 95,
      "supplies": {
        "filament_level": "ok"
      },
      "accepts_release_methods": ["staff-assisted"]
    },
    {
      "id": "prn-makerspace-3d-2",
      "name": "3D Printer — Prusa MK4 #2",
      "model": "Prusa MK4",
      "location": "Lower Level, Makerspace",
      "map_zone": "holds",
      "floor": "Lower Level",
      "capabilities": {
        "color": false,
        "filament": "PLA",
        "build_volume_mm": "250x210x220",
        "max_job_hours": 4
      },
      "status": "maintenance",
      "status_reason": "scheduled-cleaning",
      "queue_length": 0,
      "estimated_wait_minutes": null,
      "supplies": {
        "filament_level": "low"
      },
      "accepts_release_methods": ["staff-assisted"]
    }
  ]
}
  ,
  "kiosks":
{
  "library_slug": "nypl",
  "kiosks": [
    {
      "id": "kiosk-main-entrance",
      "name": "Main Entrance Kiosk",
      "floor": "Main Floor",
      "location_label": "Just inside the front doors, to the right",
      "map_zone": null,
      "idle_timeout_override_seconds": null,
      "supported_locales": ["en", "es", "zh", "fr", "ar", "ht"],
      "default_locale": "en",
      "voice_input_enabled": true,
      "last_seen_at": "2026-05-14T08:58:11-04:00",
      "status": "online"
    },
    {
      "id": "kiosk-computer-lab",
      "name": "Computer Lab Kiosk",
      "floor": "Main Floor",
      "location_label": "By the entrance to the Computer Lab",
      "map_zone": "computer-lab",
      "idle_timeout_override_seconds": null,
      "supported_locales": ["en", "es", "zh"],
      "default_locale": "en",
      "voice_input_enabled": true,
      "last_seen_at": "2026-05-14T08:57:42-04:00",
      "status": "online"
    },
    {
      "id": "kiosk-childrens-area",
      "name": "Children's Area Kiosk",
      "floor": "Main Floor",
      "location_label": "Near the storytime rug",
      "map_zone": "childrens-area",
      "idle_timeout_override_seconds": 90,
      "supported_locales": ["en", "es"],
      "default_locale": "en",
      "voice_input_enabled": false,
      "last_seen_at": "2026-05-14T08:55:03-04:00",
      "status": "online"
    },
    {
      "id": "kiosk-demo-lobby",
      "name": "Executive Demo Kiosk",
      "floor": "Main Floor",
      "location_label": "Conference Room (executive demos only)",
      "map_zone": null,
      "idle_timeout_override_seconds": 0,
      "supported_locales": ["en", "es", "zh", "fr", "ar", "ht"],
      "default_locale": "en",
      "voice_input_enabled": true,
      "last_seen_at": "2026-05-14T08:30:00-04:00",
      "status": "online",
      "notes": "Privacy auto-clear disabled for demos (idle_timeout_override_seconds=0)."
    }
  ]
}
  ,
  "docs": [
    { "slug": "community-resources", "b64": "IyBDb21tdW5pdHkgUmVzb3VyY2VzCgpTb3VyY2U6IGh0dHBzOi8vd3d3Lm55cGwub3JnL2dldC1oZWxwL2NvbW11bml0eS1yZXNvdXJjZXMKClRoZSBsaWJyYXJ5IGNvbm5lY3RzIE5ldyBZb3JrZXJzIHdpdGggZXNzZW50aWFsIHNlcnZpY2VzLiBCcmFuY2hlcyBjYW4gcmVmZXIgeW91IHRvIG9yIGRpcmVjdGx5IHByb3ZpZGU6CgojIyBTb2NpYWwgd29yayBhc3Npc3RhbmNlCgpCcmFuY2gtYmFzZWQgKipzb2NpYWwgd29ya2VycyoqIGhlbHAgY29ubmVjdCBwYXRyb25zIHdpdGggaG91c2luZywgc2hlbHRlciwgZm9vZCwgaGVhbHRoY2FyZSwgYW5kIGJlbmVmaXRzIG5hdmlnYXRpb24uCgojIyBJbW1pZ3JhbnQgc2VydmljZXMKCi0gKipNdWx0aWxpbmd1YWwgcmVzb3VyY2VzKiog4oCUIGxpYnJhcnkgY2FyZCBhY2Nlc3MsIGNhdGFsb2csIGFuZCBzZXJ2aWNlIGluZm8gaW4gbWFueSBsYW5ndWFnZXMuCi0gKipGcmVlIEVuZ2xpc2ggY2xhc3NlcyoqIGZvciBhZHVsdCBsZWFybmVycy4KLSAqKkFzeWx1bSBzZWVrZXJzLCByZWZ1Z2VlcywgbWlncmFudHMsIGFuZCBpbW1pZ3JhbnRzKiog4oCUIGNvbXByZWhlbnNpdmUgbmF2aWdhdGlvbiBzdXBwb3J0IGZvciBjaXR5IHJlc291cmNlcy4KCiMjIEhlYWx0aCAmIHdlbGxuZXNzCgotICoqQ29tbXVuaXR5IE1lbnRhbCBIZWFsdGggUHJvamVjdCoqIOKAlCBlbW90aW9uYWwgc3VwcG9ydCBmb3IgaW5kaXZpZHVhbHMgYW5kIGZhbWlsaWVzLgotICoqSGVhbHRoICYgV2VsbG5lc3MgUmVzb3VyY2VzKiog4oCUIGdlbmVyYWwgaGVhbHRoIGFuZCB3ZWxsbmVzcyBpbmZvcm1hdGlvbi4KCiMjIEhvdXNpbmcgJiBmaW5hbmNpYWwKCi0gKipIb3VzaW5nICYgdGVuYW50cycgcmlnaHRzKiog4oCUIHRlbmFudCBwcm90ZWN0aW9uIGFuZCBob3VzaW5nIGd1aWRhbmNlLgotICoqRm9vZCBzZWN1cml0eSoqIOKAlCBmb29kIGFjY2VzcyBhbmQgbnV0cml0aW9uIHN1cHBvcnQuCi0gKipGaW5hbmNpYWwgYXNzaXN0YW5jZSoqIOKAlCBlY29ub21pYyBzdXBwb3J0IHJlc291cmNlcy4KLSAqKkZyZWUgaW5jb21lLXRheCBhc3Npc3RhbmNlKiog4oCUIHNlYXNvbmFsIHRheCBwcmVwYXJhdGlvbiBoZWxwLgoKIyMgQ2l2aWMgZW5nYWdlbWVudAoKLSAqKlZvdGVyIGluZm9ybWF0aW9uKiog4oCUIHJlZ2lzdHJhdGlvbiBhbmQgdm90aW5nIHJlc291cmNlcy4KCiMjIENyaW1pbmFsIGp1c3RpY2UKCi0gKipKYWlsICYgUHJpc29uIFNlcnZpY2VzKiog4oCUIGJvb2tzLCBkaXNjdXNzaW9uIGdyb3VwcywgYW5kIHN1cHBvcnQgaW5zaWRlIE5ZQyBqYWlscy4KLSAqKkNvbm5lY3Rpb25zIFJlZW50cnkgR3VpZGUgKDIwMjUpKiog4oCUIGFubnVhbCBmcmVlIGd1aWRlIGZvciBwZW9wbGUgcmV0dXJuaW5nIGhvbWUgYWZ0ZXIgaW5jYXJjZXJhdGlvbi4KLSAqKkJvb2sgZG9uYXRpb25zKiog4oCUIGNvbW11bml0eSBjb250cmlidXRpb25zIHRvIGNvcnJlY3Rpb25hbCBsaWJyYXJpZXMuCgojIyBDdWx0dXJhbCBhY2Nlc3MKCi0gKipDdWx0dXJlIFBhc3MqKiDigJQgZnJlZSBhZG1pc3Npb24gdG8gKioxMDArIE5ZQyBtdXNldW1zLCBnYXJkZW5zLCBhbmQgY3VsdHVyYWwgaW5zdGl0dXRpb25zKiogdXNpbmcgYSBsaWJyYXJ5IGNhcmQuCg==" }
    ,
    { "slug": "contact-us", "b64": "IyBDb250YWN0IE5ZUEwKClNvdXJjZTogaHR0cHM6Ly93d3cubnlwbC5vcmcvZ2V0LWhlbHAvY29udGFjdC11cwoKIyMgUGhvbmUgJiB0ZXh0Cgp8IENoYW5uZWwgICAgICAgIHwgTnVtYmVyICAgICAgICAgICAgICAgfCBOb3RlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKfC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18CnwgTWFpbiBsaW5lICAgICAgfCAqKjkxNy0yNzUtNjk3NSoqICg5MTctQVNLLU5ZUEwpIHwgTW9u4oCTU2F0LCAxMCBBTSDigJMgNiBQTS4gRW5nbGlzaCBhbmQgU3BhbmlzaCBvbiB0aGUgbGluZS4gfAp8IEludGVycHJldGF0aW9uIHwgTGFuZ3VhZ2VMaW5lIOKAlCAyMDArIGxhbmd1YWdlcyBvbiByZXF1ZXN0IHwgQXNrIHRoZSBtYWluIGxpbmUuICAgICAgIHwKfCBUVFkgICAgICAgICAgICB8ICoqMjEyLTkzMC0wMDIwKiogICAgIHwgRm9yIGRlYWYgb3IgaGFyZC1vZi1oZWFyaW5nIHBhdHJvbnMuICAgICB8CnwgVGV4dCAgICAgICAgICAgfCAqKjkxNy05ODMtNDU4NCoqICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAoKIyMgRW1haWwKCi0gKipHZW5lcmFsIHF1ZXN0aW9uczoqKiBodHRwczovL3d3dy5ueXBsLm9yZy9nZXQtaGVscC9jb250YWN0LXVzL2VtYWlsCi0gKipFLWJvb2tzICYgZS1hdWRpb2Jvb2tzOioqIGh0dHBzOi8vd3d3Lm55cGwub3JnL2Jvb2tzLW11c2ljLW1vdmllcy9lYm9va2NlbnRyYWwvaGVscC9lbWFpbC11cwotICoqU3BhbmlzaCBmb3JtOioqIGh0dHBzOi8vbGliYW5zd2Vycy5ueXBsLm9yZy9mb3JtP3F1ZXVlX2lkPTMyNTIKCiMjIExpdmUgY2hhdAoKLSBNb27igJNGcmksIDEwIEFNIOKAkyA2IFBNCi0gaHR0cHM6Ly93d3cubnlwbC5vcmcvZ2V0LWhlbHAvY29udGFjdC11cy9jaGF0CgojIyBDb21tdW5pdHkgZW5nYWdlbWVudAoKLSAqKlJlcXVlc3QgYSBjb21tdW5pdHkgdmlzaXQ6KiogaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTY2tGVGxwSlVOTjVHSC1mWFRDeDk5MzloeFBtbkRDMmhPTEltRk5xTWJCWmdHU1dnL3ZpZXdmb3JtCi0gKipSZWNvbW1lbmQgYSB0aXRsZSB0byBhZGQ6KiogaHR0cHM6Ly93d3cubnlwbC5vcmcvY29sbGVjdGlvbnMvbnlwbC1yZWNvbW1lbmRhdGlvbnMvcmVjb21tZW5kLWJvb2sKLSAqKkNsYXNzIG9yIGdyb3VwIHRvdXI6KiogaHR0cHM6Ly93d3cubnlwbC5vcmcvbG9jYXRpb25zL3JlcXVlc3QtdmlzaXQK" }
    ,
    { "slug": "ebooks-help", "b64": "IyBFLUJvb2tzICYgRS1BdWRpb2Jvb2tzIEhlbHAKClNvdXJjZTogaHR0cHM6Ly93d3cubnlwbC5vcmcvYm9va3MtbXVzaWMtbW92aWVzL2Vib29rY2VudHJhbC9oZWxwLwoKIyMgU3VwcG9ydGVkIGFwcHMKCi0gKipMaWJieSAvIE92ZXJEcml2ZSoqIOKAlCBwcmltYXJ5IG1vYmlsZSArIHRhYmxldCBleHBlcmllbmNlOyBhbHNvIGF2YWlsYWJsZSB2aWEgd2ViIG9uIGRlc2t0b3AuCi0gKipDbG91ZExpYnJhcnkqKiDigJQgT0NMQydzIGUtYm9vayBhbmQgYXVkaW9ib29rIHBsYXRmb3JtIGZvciBQQ3MsIE1hY3MsIGFuZCBtb2JpbGUuCi0gKipBbWF6b24gS2luZGxlKiog4oCUIGZvciBLaW5kbGUgZGV2aWNlcy4KLSAqKkdvb2dsZSBBbmRyb2lkKiogYW5kICoqQXBwbGUgaU9TKiogZGV2aWNlcy4KLSAqKldlYiBicm93c2VycyoqIGZvciBkZXNrdG9wIHJlYWRpbmcuCgo+IFNpbXBseUUgd2FzIGRpc2NvbnRpbnVlZCBvbiAqKkF1Z3VzdCAyOCwgMjAyNSoqOyBleGlzdGluZyBsb2FucyB3ZXJlIG1pZ3JhdGVkIHRvIExpYmJ5IGFuZCBDbG91ZExpYnJhcnkuCgojIyBCb3Jyb3dpbmcgbGltaXRzCgpUaGUgZGVtYW5kIGZvciBOWVBMIHRpdGxlcyBpcyBoaWdoLCBzbyBlYWNoIHBhdHJvbiBpcyBsaW1pdGVkIHRvICoqdGhyZWUgaG9sZHMvY2hlY2tvdXRzIHBlciBkaXN0cmlidXRvcioqIChlLmcuLCB0aHJlZSBMaWJieSBob2xkcyArIHRocmVlIENsb3VkTGlicmFyeSBob2xkcykuCgojIyBSZXR1cm5zCgpObyBmaW5lcyBhcHBseTsgdGl0bGVzIGF1dG8tZXhwaXJlIGF0IHRoZSBkdWUgZGF0ZS4gVG8gcmV0dXJuIGVhcmx5OgoKfCBQbGF0Zm9ybSAgICAgICAgICAgICAgIHwgSG93IHRvIHJldHVybiBlYXJseSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwKfCBMaWJieSAgICAgICAgICAgICAgICAgIHwgU2hlbGYg4oaSIE1hbmFnZSBMb2FuIOKGkiBSZXR1cm4gRWFybHkgICAgICAgICAgICAgICAgICAgICAgICB8CnwgT3ZlckRyaXZlICh3ZWIpICAgICAgICB8IE15IEFjY291bnQg4oaSIExvYW5zIOKGkiBSZXR1cm4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAp8IEtpbmRsZSAgICAgICAgICAgICAgICAgfCBWaXNpdCBgYW1hem9uLmNvbS9teWtgIGFuZCByZXR1cm4gZnJvbSB5b3VyIGxvYW5zIHBhZ2UgICAgfAp8IENsb3VkTGlicmFyeSAgICAgICAgICAgfCBNeSBCb29rcyDihpIgdGhyZWUtZG90IG1lbnUg4oaSIFJldHVybiAgICAgICAgICAgICAgICAgICAgICAgIHwKfCBBZG9iZSBEaWdpdGFsIEVkaXRpb25zIHwgUmlnaHQtY2xpY2sgdGhlIGNvdmVyIOKGkiBSZXR1cm4gQm9ycm93ZWQgSXRlbSAgICAgICAgICAgICAgfAp8IE5ZUEwgQ2F0YWxvZyAgICAgICAgICAgfCBNeSBCb29rc2hlbGYg4oaSIENoZWNrb3V0cyDihpIgUmV0dXJuIEl0ZW0gICAgICAgICAgICAgICAgICAgIHwKCiMjIFRyYXZlbAoKRS1ib29rcyBkb3dubG9hZGVkICoqYmVmb3JlKiogeW91IGxlYXZlIHRoZSBVLlMuIGNhbiBiZSByZWFkIGFsbW9zdCBhbnl3aGVyZTsgc3RyZWFtaW5nIG9yIGRvd25sb2FkaW5nIG5ldyB0aXRsZXMgYWJyb2FkIG1heSBiZSBibG9ja2VkIGJ5IGxpY2Vuc2luZy4KCiMjIE5lZWQgaGVscD8KCi0gRW1haWwgdGhlIGUtYm9va3MgdGVhbTogaHR0cHM6Ly93d3cubnlwbC5vcmcvYm9va3MtbXVzaWMtbW92aWVzL2Vib29rY2VudHJhbC9oZWxwL2VtYWlsLXVzCi0gTWFueSBicmFuY2hlcyBob3N0IGUtYm9vayBjbGFzc2VzIOKAlCBjaGVjayB0aGUgZXZlbnRzIGNhbGVuZGFyLgo=" }
    ,
    { "slug": "get-help", "b64": "IyBOWVBMIEdldCBIZWxwCgpTb3VyY2U6IGh0dHBzOi8vd3d3Lm55cGwub3JnL2dldC1oZWxwCgpUaGUgTllQTCAiR2V0IEhlbHAiIGxhbmRpbmcgcGFnZSBncm91cHMgc3VwcG9ydCBpbnRvIGZpdmUgc2VjdGlvbnMuCgojIyBNYW5hZ2UgeW91ciBsaWJyYXJ5IGNhcmQKCi0gKipBcHBseSBmb3IgYSBjYXJkIG9ubGluZSoqIOKAlCBodHRwczovL3d3dy5ueXBsLm9yZy9saWJyYXJ5LWNhcmQvbmV3IOKAlCBzZWUgYGxpYnJhcnktY2FyZC1hcHBseS5tZGAKLSAqKlJlcGxhY2UgeW91ciBjYXJkKiog4oCUIGh0dHBzOi8vd3d3Lm55cGwub3JnL2hlbHAvbGlicmFyeS1jYXJkI3JlcGxhY2Ug4oCUIHNlZSBgbGlicmFyeS1jYXJkLXJlcGxhY2UtcmVuZXcubWRgCi0gKipSZW5ldyB5b3VyIGNhcmQqKiDigJQgaHR0cHM6Ly93d3cubnlwbC5vcmcvaGVscC9saWJyYXJ5LWNhcmQjcmVuZXcg4oCUIHNlZSBgbGlicmFyeS1jYXJkLXJlcGxhY2UtcmVuZXcubWRgCi0gKipSZXNldCB5b3VyIFBJTioqIOKAlCBodHRwczovL2NhdGFsb2cubnlwbC5vcmcvcGlucmVzZXQg4oCUIHNlZSBgcGluLXJlc2V0Lm1kYAotICoqRmVlIHBvbGljeSoqIOKAlCBodHRwczovL3d3dy5ueXBsLm9yZy9oZWxwL2JvcnJvd2luZy1tYXRlcmlhbHMvbGlicmFyeS1maW5lcy1hbmQtZmVlcyDigJQgc2VlIGBsaWJyYXJ5LWZpbmVzLWFuZC1mZWVzLm1kYAoKIyMgRGlzY292ZXIgYSBsb2NhdGlvbiBuZWFyIHlvdQoKLSAqKkZpbmQgYSBicmFuY2gqKiDigJQgaHR0cHM6Ly93d3cubnlwbC5vcmcvbG9jYXRpb25zCi0gKipHZXQgZnJlZSBXaS1GaSoqIOKAlCBodHRwczovL3d3dy5ueXBsLm9yZy9oZWxwL2NvbXB1dGVycy1pbnRlcm5ldC1hbmQtd2lyZWxlc3MtYWNjZXNzL3dpcmVsZXNzLWludGVybmV0LWFjY2VzcyDigJQgc2VlIGB3aWZpLm1kYAotICoqUmVzZXJ2ZSBhIGNvbXB1dGVyKiog4oCUIGh0dHBzOi8vd3d3Lm55cGwub3JnL2hlbHAvY29tcHV0ZXJzLWludGVybmV0LWFuZC13aXJlbGVzcy1hY2Nlc3MvcmVzZXJ2aW5nLWNvbXB1dGVyIOKAlCBzZWUgYHJlc2VydmluZy1jb21wdXRlci5tZGAKCiMjIEZpbmQgYWRkaXRpb25hbCBzdXBwb3J0CgotICoqSGVscCB3aXRoIGUtYm9va3MgJiBhdWRpb2Jvb2tzKiog4oCUIGh0dHBzOi8vd3d3Lm55cGwub3JnL2Jvb2tzLW11c2ljLW1vdmllcy9lYm9va2NlbnRyYWwvaGVscC8g4oCUIHNlZSBgZWJvb2tzLWhlbHAubWRgCi0gKipSZXBvcnQgYSBkYXRhYmFzZSBpc3N1ZSoqIOKAlCBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNkTzF3OFdYNjNFZHhQaF9kM2JFMDRSdHo0TnkybmNlT1hnbkJXQ19Sc0VIdkZySncvdmlld2Zvcm0gKEdvb2dsZSBGb3JtKQotICoqR2V0IHJlc2VhcmNoIHN1cHBvcnQqKiDigJQgaHR0cHM6Ly93d3cubnlwbC5vcmcvcmVzZWFyY2gvc3VwcG9ydCDigJQgc2VlIGByZXNlYXJjaC1zdXBwb3J0Lm1kYAoKIyMgRXhwbG9yZSBjb21tdW5pdHkgc3VwcG9ydCByZXNvdXJjZXMKCi0gKipDb21tdW5pdHkgcmVzb3VyY2VzKiog4oCUIGh0dHBzOi8vd3d3Lm55cGwub3JnL2dldC1oZWxwL2NvbW11bml0eS1yZXNvdXJjZXMg4oCUIHNlZSBgY29tbXVuaXR5LXJlc291cmNlcy5tZGAKCiMjIENvbnRhY3QgdXMKCi0gKipNb3JlIHdheXMgdG8gY29ubmVjdCoqIOKAlCBodHRwczovL3d3dy5ueXBsLm9yZy9nZXQtaGVscC9jb250YWN0LXVzIOKAlCBzZWUgYGNvbnRhY3QtdXMubWRgCi0gKipFbWFpbCoqIOKAlCBodHRwczovL3d3dy5ueXBsLm9yZy9nZXQtaGVscC9jb250YWN0LXVzL2VtYWlsCi0gKipDb3JyZW8gZWxlY3Ryw7NuaWNvIChTcGFuaXNoKSoqIOKAlCBodHRwczovL3d3dy5ueXBsLm9yZy9nZXQtaGVscC9jb250YWN0LXVzL2VtYWlsLWVzcAo=" }
    ,
    { "slug": "library-card-apply", "b64": "IyBBcHBseSBmb3IgYSBMaWJyYXJ5IENhcmQKClNvdXJjZTogaHR0cHM6Ly93d3cubnlwbC5vcmcvbGlicmFyeS1jYXJkL25ldwoKIyMgV2hvIGNhbiBhcHBseQoKWW91IG1heSBhcHBseSBpZiB5b3UgKipsaXZlLCB3b3JrLCBnbyB0byBzY2hvb2wsIG9yIHBheSBwcm9wZXJ0eSB0YXhlcyBpbiBOZXcgWW9yayBTdGF0ZSoqLgoKLSBNaW5pbXVtIGFnZTogKioxMyoqCi0gWW91IG11c3QgYmUgcGh5c2ljYWxseSBsb2NhdGVkIGluIE5ldyBZb3JrIFN0YXRlIGF0IHRoZSB0aW1lIG9mIGFwcGxpY2F0aW9uLgotIFZpc2l0b3JzIGZyb20gb3RoZXIgVS5TLiBzdGF0ZXMgY2FuIGFwcGx5IGZvciBhICoqdGVtcG9yYXJ5IGNhcmQqKi4KLSBJbnRlcm5hdGlvbmFsIHZpc2l0b3JzIHNob3VsZCB1c2UgYW4gYWx0ZXJuYXRlIGZvcm0uCgpJZiB5b3UgYWxyZWFkeSBoYXZlIGFuIE5ZUEwgYWNjb3VudCBhbmQgeW91ciBjYXJkIGhhcyBleHBpcmVkLCAqKmRvIG5vdCBhcHBseSBmb3IgYSBuZXcgY2FyZCoqIOKAlCBzZWUgYGxpYnJhcnktY2FyZC1yZXBsYWNlLXJlbmV3Lm1kYCBmb3IgcmVuZXdhbCBpbnN0cnVjdGlvbnMuIER1cGxpY2F0ZSByZWNvcmRzIGFyZSBkZWxldGVkLgoKIyMgSG93IHRvIGFwcGx5CgojIyMgT25saW5lIChpbW1lZGlhdGUgZGlnaXRhbCBhY2Nlc3MpCgoxLiBDb21wbGV0ZSB0aGUgb25saW5lIGFwcGxpY2F0aW9uIGZvcm0uCjIuIFlvdSBnYWluICoqaW1tZWRpYXRlIGFjY2VzcyB0byBlLWJvb2tzIGFuZCBvdGhlciBkaWdpdGFsIHJlc291cmNlcyoqIHdpdGggdGhlIHRlbXBvcmFyeSBkaWdpdGFsIGNhcmQuCjMuIFRvIGJvcnJvdyBwaHlzaWNhbCBtYXRlcmlhbHMsIHZpc2l0IGFueSBOWVBMIGxvY2F0aW9uIHRvIHZlcmlmeSB5b3VyIGluZm9ybWF0aW9uIGFuZCByZWNlaXZlIHlvdXIgKipwaHlzaWNhbCBjYXJkKiouCgojIyMgT3V0LW9mLXN0YXRlIHZpc2l0b3JzCgotIENhbiByZXF1ZXN0IHBoeXNpY2FsIG1hdGVyaWFscyBiZWZvcmUgdmlzaXRpbmcuCi0gQ2FuIHNjaGVkdWxlIHJlc2VhcmNoIGFwcG9pbnRtZW50cy4KLSBNdXN0IHZhbGlkYXRlIHRoZSB0ZW1wb3JhcnkgY2FyZCBpbiBwZXJzb24gd2l0aGluICoqMzAgZGF5cyoqLgoKIyMgV2hhdCB0aGUgY2FyZCBnaXZlcyB5b3UKClRoZSBwaHlzaWNhbCBjYXJkIHVubG9ja3M6CgotIFBoeXNpY2FsIGJvb2tzIGFuZCBvdGhlciBjaXJjdWxhdGluZyBtYXRlcmlhbHMKLSAqKkN1bHR1cmUgUGFzcyoqIChmcmVlIHBhc3NlcyB0byAxMDArIE5ZQyBtdXNldW1zIGFuZCBjdWx0dXJhbCBpbnN0aXR1dGlvbnMg4oCUIHNlZSBgY29tbXVuaXR5LXJlc291cmNlcy5tZGApCi0gRXhwYW5kZWQgTllQTCBzZXJ2aWNlcwoKVGhlIG9ubGluZSBjYXJkIGltbWVkaWF0ZWx5IGVuYWJsZXMgZS1ib29rcyBhbmQgZGlnaXRhbCByZXNvdXJjZXMuCgojIyBDb3N0CgpUaGUgbGlicmFyeSBjYXJkIGl0c2VsZiBpcyAqKmZyZWUqKi4gVGhlcmUgaXMgYSAkMS4wMCByZXBsYWNlbWVudCBmZWUgZm9yIGEgbG9zdCBvciBzdG9sZW4gY2FyZCAoc2VlIGBsaWJyYXJ5LWZpbmVzLWFuZC1mZWVzLm1kYCkuCgojIyBUZXJtcwoKQXBwbGljYW50cyBtdXN0IGFncmVlIHRvIHRoZSBDYXJkaG9sZGVyIFRlcm1zIGFuZCBDb25kaXRpb25zLCB0aGUgUnVsZXMgYW5kIFJlZ3VsYXRpb25zLCBhbmQgdGhlIFByaXZhY3kgUG9saWN5Lgo=" }
    ,
    { "slug": "library-card-replace-renew", "b64": "IyBSZXBsYWNlIG9yIFJlbmV3IFlvdXIgTGlicmFyeSBDYXJkCgpTb3VyY2U6IGh0dHBzOi8vd3d3Lm55cGwub3JnL2hlbHAvbGlicmFyeS1jYXJkCgojIyBSZW5ldyB5b3VyIGNhcmQKCk5ZUEwgY2FyZHMgZXhwaXJlIG9uIGEgcGVyaW9kaWMgY3ljbGUuICoqSWYgeW91ciBjYXJkIGhhcyBleHBpcmVkLCBkbyBub3QgYXBwbHkgZm9yIGEgbmV3IGNhcmQqKiDigJQgcmVuZXcgdGhlIGV4aXN0aW5nIG9uZSB0aHJvdWdoIHlvdXIgYnJhbmNoIG9yIHRocm91Z2ggTGlicmFyeSBDYXJkIFN1cHBvcnQgKGR1cGxpY2F0ZSByZWNvcmRzIGFyZSBkZWxldGVkKS4KClRoZSBOWVBMICJHZXQgSGVscCIgbGFuZGluZyBwYWdlIGRlc2NyaWJlcyB0aGUgcmVuZXdhbCBjeWNsZSBhcyBhICoqdGhyZWUteWVhcioqIHJlbmV3YWwgdGhhdCBjYW4gYmUgY29tcGxldGVkIGluIHBlcnNvbiBhdCBhbnkgYnJhbmNoLiBCcmluZyBpZGVudGlmaWNhdGlvbiBtYXRjaGluZyB0aGUgYWRkcmVzcyBvbiBmaWxlLgoKIyMgUmVwbGFjZSBhIGxvc3Qgb3Igc3RvbGVuIGNhcmQKCi0gUmVwb3J0IHRoZSBjYXJkIGxvc3Qgb3Igc3RvbGVuIGJ5IHBob25lLCBieSBlbWFpbCwgb3IgaW4gcGVyc29uIGF0IGFueSBicmFuY2guCi0gQSAqKiQxLjAwIHJlcGxhY2VtZW50IGZlZSoqIGFwcGxpZXMgKHNlZSBgbGlicmFyeS1maW5lcy1hbmQtZmVlcy5tZGApLgotIEEgbmV3IGNhcmQgYW5kIGJhcmNvZGUgd2lsbCBiZSBpc3N1ZWQ7IG91dHN0YW5kaW5nIGZlZXMgb24gdGhlIHByZXZpb3VzIGNhcmQgdHJhbnNmZXIgdG8gdGhlIG5ldyBvbmUuCgojIyBBY2NvdW50IGJsb2NrIHdoaWxlIHJlcGxhY2VtZW50IGlzIHBlbmRpbmcKCkRpZ2l0YWwgYWNjZXNzIChlLWJvb2tzIGFuZCBjb21wdXRlciB1c2UpIGdlbmVyYWxseSByZW1haW5zIGF2YWlsYWJsZSBldmVuIHdoaWxlIGEgcGh5c2ljYWwgY2FyZCBpcyBiZWluZyByZXBsYWNlZCwgcHJvdmlkZWQgeW91ciBhY2NvdW50IGlzIG90aGVyd2lzZSBpbiBnb29kIHN0YW5kaW5nLgoKIyMgTmVlZCBoZWxwPwoKLSBQaG9uZTogKio5MTctMjc1LTY5NzUqKiAoTW9u4oCTU2F0LCAxMCBBTSDigJMgNiBQTSkKLSBFbWFpbDogKipnZXRoZWxwQG55cGwub3JnKioKLSBTZWUgYGNvbnRhY3QtdXMubWRgIGZvciB0aGUgZnVsbCBsaXN0IG9mIGNoYW5uZWxzLgo=" }
    ,
    { "slug": "library-fines-and-fees", "b64": "IyBMaWJyYXJ5IEZpbmVzICYgRmVlcwoKU291cmNlOiBodHRwczovL3d3dy5ueXBsLm9yZy9oZWxwL2JvcnJvd2luZy1tYXRlcmlhbHMvbGlicmFyeS1maW5lcy1hbmQtZmVlcwoKIyMgRmluZS1mcmVlIHBvbGljeQoKKipOWVBMIGRvZXMgbm90IGNoYXJnZSBsYXRlIGZpbmVzIG9uIGFueSBvdmVyZHVlIGNpcmN1bGF0aW5nIG1hdGVyaWFscy4qKiBGZWVzIG9ubHkgYXBwbHkgdG8gbG9zdCwgZGFtYWdlZCwgb3IgaW4tbGlicmFyeS11c2UgaXRlbXMsIGFuZCB0byBsb3N0IGNhcmRzLgoKIyMgTG9zdC1pdGVtIHJlcGxhY2VtZW50IGZlZXMKCi0gUmVwbGFjZW1lbnQgZmVlcyBhcmUgYmFzZWQgb24gdGhlICoqb2ZmaWNpYWwgdmVuZG9yIHByaWNpbmcqKiBvZiB0aGUgbG9zdCBpdGVtIGFuZCB2YXJ5IGJ5IG1hdGVyaWFsIHR5cGUuCi0gQW4gaXRlbSBpcyAqKmRlY2xhcmVkIGxvc3QgYWZ0ZXIgMzAgZGF5cyBvdmVyZHVlKiosIHdoaWNoIHRyaWdnZXJzIHRoZSBmZWUuCi0gSWYgeW91IHJldHVybiB0aGUgaXRlbSBhZnRlciBpdCdzIGJlZW4gZGVjbGFyZWQgbG9zdCwgdGhlIHJlcGxhY2VtZW50IGZlZSBpcyAqKnJlbW92ZWQgZnJvbSB5b3VyIGFjY291bnQqKi4KLSBJZiB5b3UgYWxyZWFkeSBwYWlkIHRoZSByZXBsYWNlbWVudCBmZWUsIHlvdSBjYW4gcmVjZWl2ZSBhICoqcmVmdW5kIGlmIHlvdSByZXR1cm4gdGhlIGl0ZW0gd2l0aGluIDkwIGRheXMgb2YgdGhlIG9yaWdpbmFsIGR1ZSBkYXRlKiouCi0gSXRlbXMgZGVzaWduYXRlZCAqKmluLWxpYnJhcnkgdXNlIG9ubHkqKiBtdXN0IGJlIHBhaWQgZm9yIGlmIG5vdCByZXR1cm5lZCBieSB0aGUgZW5kIG9mIHRoZSBsb2FuIHBlcmlvZC4KLSAqKlJlc2VhcmNoIGxpYnJhcnkqKiByZXBsYWNlbWVudCBjb3N0cyBhcmUgZGV0ZXJtaW5lZCBpbmRpdmlkdWFsbHkgcGVyIGl0ZW0uCgojIyBBY2NvdW50IGJsb2NrcwoKQm9ycm93aW5nIHByaXZpbGVnZXMgZm9yICoqcGh5c2ljYWwqKiBtYXRlcmlhbHMgYXJlIHN1c3BlbmRlZCB3aGVuIHJlcGxhY2VtZW50IGZlZXMgdG90YWwgKiokMTAwIG9yIG1vcmUqKi4KCkRpZ2l0YWwgYWNjZXNzIHN0YXlzIG9wZW46IHlvdSBjYW4gc3RpbGwgdXNlIHlvdXIgY2FyZCBmb3IgKiplLWJvb2tzIGFuZCBjb21wdXRlciBhY2Nlc3MqKiB3aGlsZSBhIGJsb2NrIGlzIGluIHBsYWNlIGZvciBwaHlzaWNhbCBtYXRlcmlhbHMuCgojIyBMb3N0LWNhcmQgcmVwbGFjZW1lbnQgZmVlCgoqKiQxLjAwKiogZm9yIGEgbG9zdCBvciBzdG9sZW4gbGlicmFyeSBjYXJkLgoKIyMgUGF5bWVudCBtZXRob2RzCgp8IENoYW5uZWwgIHwgQWNjZXB0ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKfC0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18CnwgSW4gcGVyc29uIHwgQ2FzaCwgVS5TLiBQb3N0YWwgbW9uZXkgb3JkZXJzLCBwZXJzb25hbCBjaGVja3MgYXQgYW55IGJyYW5jaCB8CnwgT25saW5lICAgIHwgQ3JlZGl0L2RlYml0IGNhcmQgdmlhIHlvdXIgTllQTCBhY2NvdW50IChQYXlQYWwtcHJvY2Vzc2VkOyAqKiQxLjAxIG1pbmltdW0qKikgfAp8IE1haWwgICAgICB8IENoZWNrcyBvciBtb25leSBvcmRlcnMgdG8gUGF0cm9uIEFjY291bnRzIE1hbmFnZW1lbnQ7IHdyaXRlIHlvdXIgY2FyZCBudW1iZXIgaW4gdGhlIG1lbW8gfAoKKipOb3QgYWNjZXB0ZWQ6KiogcGhvbmUgcGF5bWVudHMsIGNyZWRpdCBjYXJkIHBheW1lbnRzIGF0IGJyYW5jaCBkZXNrcy4K" }
    ,
    { "slug": "pin-reset", "b64": "IyBSZXNldCBZb3VyIFBJTiAvIFBhc3N3b3JkCgpTb3VyY2U6IGh0dHBzOi8vY2F0YWxvZy5ueXBsLm9yZy9waW5yZXNldCAocmVkaXJlY3RzIHRvIGh0dHBzOi8vY2F0YWxvZ3NlcnZpY2VzLm55cGwub3JnL3BpbnJlc2V0KQoKIyMgUmVzZXQgYnkgZW1haWwKCjEuIE9wZW4gdGhlIFBJTi1yZXNldCBmb3JtIGFuZCBlbnRlciAqKmVpdGhlcioqIHlvdXIgbGlicmFyeSBjYXJkIGJhcmNvZGUgKipvcioqIHlvdXIgdXNlcm5hbWUuCjIuIENvbmZpcm0gd2hhdCB5b3UgaGF2ZSBlbnRlcmVkICoqYmVmb3JlKiogY2xpY2tpbmcgc3VibWl0LgozLiBBbiBlbWFpbCBpcyBzZW50IHRvIHRoZSBhZGRyZXNzIG9uIGZpbGUgZm9yIHlvdXIgYWNjb3VudC4KNC4gVGhlIGVtYWlsIGNvbnRhaW5zIGEgdGVtcG9yYXJ5IGxpbmsg4oCUIG9wZW4gaXQgYW5kIGNob29zZSBhIG5ldyBQSU4vcGFzc3dvcmQuCgojIyBUcm91Ymxlc2hvb3RpbmcKCi0gSWYgbm8gZW1haWwgYXJyaXZlcywgZG91YmxlLWNoZWNrIHRoZSBiYXJjb2RlL3VzZXJuYW1lIHlvdSBlbnRlcmVkLgotIElmIHRoZSBlbWFpbCBhZGRyZXNzIG9uIGZpbGUgaXMgb3V0IG9mIGRhdGUsIHRoZSBsaW5rIGNhbm5vdCByZWFjaCB5b3Ug4oCUIGNvbnRhY3Qgc3RhZmYgKGJlbG93KSBzbyB0aGV5IGNhbiB1cGRhdGUgaXQuCgojIyBOZWVkIGhlbHA/CgotIFBob25lOiAqKjkxNy0yNzUtNjk3NSoqIChNb27igJNTYXQsIDEwIEFNIOKAkyA2IFBNKQotIEVtYWlsOiAqKmdldGhlbHBAbnlwbC5vcmcqKgoKVGhlIFBJTi1yZXNldCBwYWdlIGRvZXMgbm90IGRvY3VtZW50IGFuIGluLXBlcnNvbiByZXNldCBmbG93OyBicmFuY2ggc3RhZmYgY2FuIGFzc2lzdCBpZiBlbWFpbCByZXNldCBpc24ndCB3b3JraW5nLgo=" }
    ,
    { "slug": "research-support", "b64": "IyBSZXNlYXJjaCBTdXBwb3J0CgpTb3VyY2U6IGh0dHBzOi8vd3d3Lm55cGwub3JnL3Jlc2VhcmNoL3N1cHBvcnQKCk5ZUEwncyByZXNlYXJjaCBzdXBwb3J0IGlzIG9yZ2FuaXNlZCBpbiBmb3VyIHN0YWdlcy4KCiMjIEJlZm9yZSB5b3UgYXJyaXZlCgotIEFwcGx5IGZvciBhIGxpYnJhcnkgY2FyZCAoYGxpYnJhcnktY2FyZC1hcHBseS5tZGApLgotIFNlYXJjaCB0aGUgKipSZXNlYXJjaCBDYXRhbG9nKiouCi0gUmVxdWVzdCBmcmVlIHNjYW5zIG9mIGl0ZW1zIHdoZXJlIGF2YWlsYWJsZS4KLSAqKlJlc2VydmUgbWF0ZXJpYWxzIGluIGFkdmFuY2UqKiBzbyB0aGV5J3JlIHdhaXRpbmcgZm9yIHlvdS4KCiMjIEFzayBOWVBMCgpOWVBMJ3MgdmlydHVhbCByZWZlcmVuY2Ugc2VydmljZSBjb25uZWN0cyB5b3Ugd2l0aCBleHBlcnQgc3RhZmYuIFVzZSBpdCBmcm9tIGFueXdoZXJlOgoKLSAqKlBob25lOioqIDkxNy0yNzUtNjk3NSAoTW9u4oCTU2F0LCAxMCBBTSDigJMgNiBQTSkKLSAqKkVtYWlsIC8gY2hhdDoqKiBzZWUgYGNvbnRhY3QtdXMubWRgCi0gKipSZXNlYXJjaCBndWlkZXM6KiogaHR0cHM6Ly9saWJndWlkZXMubnlwbC5vcmcKLSAqKlNjaGVkdWxlIGEgdmlydHVhbCByZXNlYXJjaCBjb25zdWx0YXRpb246KiogaHR0cHM6Ly9saWJjYWwubnlwbC5vcmcKCiMjIER1cmluZyB5b3VyIHZpc2l0CgotIEZyZWUgV2ktRmkgKGB3aWZpLm1kYCkgYW5kIHJlc2VydmFibGUgY29tcHV0ZXJzIChgcmVzZXJ2aW5nLWNvbXB1dGVyLm1kYCkuCi0gUmVxdWVzdCBpdGVtcyBmcm9tIHRoZSBzdGFja3MgYXQgdGhlIHJlc2VhcmNoIGNlbnRyZXMuCi0gKipBY2Nlc3NpYmlsaXR5OioqIGFsbCByZXNlYXJjaCBjZW50cmVzIGFjY29tbW9kYXRlIHBhdHJvbnMgd2l0aCBkaXNhYmlsaXRpZXM7IGFzayBzdGFmZiBmb3Igc3BlY2lmaWMgYWNjb21tb2RhdGlvbnMuCgojIyBTcGVjaWFsaXNlZCBzZXJ2aWNlcwoKLSAqKkNvcGllcyAmIHJlcHJvZHVjdGlvbnMqKiDigJQgcmVxdWVzdCBoaWdoLXJlc29sdXRpb24gZGlnaXRhbCBmaWxlcyBmcm9tIHRoZSBjb2xsZWN0aW9ucy4KLSAqKkludGVybGlicmFyeSBMb2FuKiog4oCUIGJvcnJvdyBpdGVtcyBOWVBMIGRvZXNuJ3QgaG9sZCBmcm9tIHBhcnRuZXIgbGlicmFyaWVzLgotICoqRWR1Y2F0aW9uYWwgdmlzaXRzKiog4oCUIHVuZGVyZ3JhZHVhdGUgYW5kIGdyYWR1YXRlIGNsYXNzZXMgY2FuIGFycmFuZ2UgY3VyYXRlZCB2aXNpdHMuCgojIyBGZWxsb3dzaGlwcyAmIHJlc2lkZW5jaWVzCgpOWVBMIGFkbWluaXN0ZXJzIHNldmVyYWwgc2Nob2xhci1pbi1yZXNpZGVuY2UgcHJvZ3JhbXM6CgotICoqQ3VsbG1hbiBDZW50ZXIqKiDigJQgc2Nob2xhcnMgYW5kIHdyaXRlcnMuCi0gKipMYXBpZHVzIENlbnRlcioqIOKAlCBzbGF2ZXJ5IGFuZCBhYm9saXRpb24gcmVzZWFyY2guCi0gKipTaG9ydC1UZXJtIEZlbGxvd3NoaXBzKiog4oCUIG91dC1vZi1hcmVhIHNjaG9sYXJzLgotICoqTWFydGluIER1YmVybWFuIFZpc2l0aW5nIEZlbGxvd3NoaXAqKiDigJQgTEdCVFErIHN0dWRpZXMuCi0gKipTY2hvbWJ1cmcgQ2VudGVyIFNjaG9sYXJzLWluLVJlc2lkZW5jZSoqIOKAlCBBZnJpY2FuIGRpYXNwb3JpYyBzdHVkaWVzLgo=" }
    ,
    { "slug": "reserving-computer", "b64": "IyBSZXNlcnZlIGEgRGVza3RvcCBDb21wdXRlcgoKU291cmNlOiBodHRwczovL3d3dy5ueXBsLm9yZy9oZWxwL2NvbXB1dGVycy1pbnRlcm5ldC1hbmQtd2lyZWxlc3MtYWNjZXNzL3Jlc2VydmluZy1jb21wdXRlcgoKIyMgSG93IHRvIHJlc2VydmUKCllvdSBjYW4gcmVzZXJ2ZSBhIGNvbXB1dGVyICoqdGhyZWUgd2F5cyoqOgoKLSAqKk9ubGluZToqKiBodHRwczovL3BjcmVzZXJ2ZS5ueXBsLm9yZwotICoqQnkgcGhvbmU6KiogQ2FsbCB0aGUgYnJhbmNoIHdoZXJlIHlvdSB3YW50IHRoZSBhcHBvaW50bWVudDsgc3RhZmYgd2lsbCBib29rIGl0IGZvciB5b3UuCi0gKipJbiBwZXJzb246KiogQXQgdGhlIGJyYW5jaC4KClNvbWUgYnJhbmNoZXMgYWxzbyBvZmZlciAqKmV4cHJlc3MgY29tcHV0ZXJzKiog4oCUIGZpcnN0LWNvbWUsIGZpcnN0LXNlcnZlZCwgKioxNS1taW51dGUqKiBzZXNzaW9ucy4KCiMjIExpYnJhcnkgY2FyZCByZXF1aXJlbWVudHMKCi0gQSAqKnZhbGlkIGxpYnJhcnkgY2FyZCBpcyByZXF1aXJlZCoqIHRvIHVzZSBhIGNvbXB1dGVyIGF0IGFueSBOWVBMIGxvY2F0aW9uLgotIFlvdSBsb2cgaW4gd2l0aCB5b3VyIGNhcmQgbnVtYmVyIGFuZCBQSU4vcGFzc3dvcmQuCi0gTllQTCBjYXJkcyBhcmUgKipub24tdHJhbnNmZXJhYmxlKio7IHVzaW5nIHNvbWVvbmUgZWxzZSdzIGNhcmQgbWF5IHJlc3VsdCBpbiBzdXNwZW5zaW9uIG9mIGNvbXB1dGVyIHByaXZpbGVnZXMuCgojIyBTZXNzaW9uIHJ1bGVzCgotICoqU2Vzc2lvbiBsZW5ndGg6KiogNDUgbWludXRlcy4KLSAqKkRhaWx5IGxpbWl0OioqIE9uZSBhcHBvaW50bWVudCBwZXIgZGF5IGFjcm9zcyBhbGwgTllQTCBsb2NhdGlvbnMuCi0gKipMb2dpbiB3aW5kb3c6KiogWW91IGhhdmUgKio1IG1pbnV0ZXMqKiBmcm9tIHRoZSBzdGFydCBvZiB5b3VyIGFwcG9pbnRtZW50IHRvIGxvZyBvbiwgb3IgdGhlIHJlc2VydmF0aW9uIGlzIGNhbmNlbGxlZC4KLSAqKlVuYXR0ZW5kZWQgdGltZToqKiBZb3UgY2FuIHN0ZXAgYXdheSB3aXRoIHRoZSBjb21wdXRlciBsb2NrZWQgZm9yIHVwIHRvICoqMTAgbWludXRlcyoqLgotICoqRW5kLW9mLWRheSBjdXRvZmY6KiogVGhlIGxhc3QgY29tcHV0ZXIgc2Vzc2lvbiBvZiB0aGUgZGF5IGVuZHMgKioxNSBtaW51dGVzIGJlZm9yZSB0aGUgbGlicmFyeSBjbG9zZXMqKi4KLSAqKlByaXZhY3kgc2NyZWVucyoqIGluc3RhbGxlZCBvbiBsaWJyYXJ5IFBDcyBtdXN0IG5vdCBiZSByZW1vdmVkLgoKIyMgQWNjZXNzaWJpbGl0eQoKVGhlIHBhZ2UgZG9lc24ndCBlbnVtZXJhdGUgYWNjZXNzaWJpbGl0eSBhY2NvbW1vZGF0aW9uczsgYXNrIGJyYW5jaCBzdGFmZiBmb3IgYXNzaXN0aXZlIHRlY2hub2xvZ3kgb3Igc2NyZWVuLXJlYWRlci1lcXVpcHBlZCBzdGF0aW9ucy4K" }
    ,
    { "slug": "wifi", "b64": "IyBGcmVlIFdpLUZpIGF0IE5ZUEwKClNvdXJjZTogaHR0cHM6Ly93d3cubnlwbC5vcmcvaGVscC9jb21wdXRlcnMtaW50ZXJuZXQtYW5kLXdpcmVsZXNzLWFjY2Vzcy93aXJlbGVzcy1pbnRlcm5ldC1hY2Nlc3MKCiMjIEhvdyB0byBjb25uZWN0CgoxLiBPbiB5b3VyIGRldmljZSwgb3BlbiBXaS1GaSBzZXR0aW5ncyBhbmQgbG9vayBmb3IgdGhlIG5ldHdvcmsgbmFtZWQgKipgTllQTGAqKi4KMi4gU2VsZWN0ICoqYE5ZUExgKiogYW5kIGNvbm5lY3Qg4oCUICoqbm8gcGFzc3dvcmQgaXMgcmVxdWlyZWQqKi4KCiMjIE5ldHdvcmsgZGV0YWlscwoKLSAqKlNTSUQ6KiogYE5ZUExgCi0gKipQYXNzd29yZDoqKiBub25lCi0gKipBdmFpbGFiaWxpdHk6KiogRnJlZSBXaS1GaSBpcyBvZmZlcmVkIGF0ICoqYWxsIE5ZUEwgbG9jYXRpb25zIGluIHB1YmxpYyBhcmVhcywgZHVyaW5nIGFsbCBob3VycyB0aGUgbGlicmFyeSBpcyBvcGVuKiouCi0gKipEZXZpY2UgcmVxdWlyZW1lbnQ6KiogQW55IGRldmljZSB3aXRoIGFuIDgwMi4xMWItY29tcGF0aWJsZSAob3IgbmV3ZXIpIHdpcmVsZXNzIGNhcmQuCgojIyBTZWN1cml0eSB3YXJuaW5nCgpUaGUgbGlicmFyeSdzIFdpLUZpIGlzICoqbm90IHNlY3VyZSoqLiBJbmZvcm1hdGlvbiBzZW50IHRvIG9yIGZyb20geW91ciBkZXZpY2UgY2FuIGJlIGNhcHR1cmVkIGJ5IGFueW9uZSB3aXRoIGEgd2lyZWxlc3MgZGV2aWNlIGFuZCB0aGUgYXBwcm9wcmlhdGUgc29mdHdhcmUgd2l0aGluIH4zMDAgZmVldC4gQXZvaWQgdHJhbnNtaXR0aW5nIHNlbnNpdGl2ZSBpbmZvcm1hdGlvbiB3aXRob3V0IHlvdXIgb3duIGVuZC10by1lbmQgZW5jcnlwdGlvbiAoZS5nLiwgSFRUUFMsIFZQTikuCgojIyBTdXBwb3J0ICYgbGlhYmlsaXR5CgotIExpYnJhcnkgc3RhZmYgY2Fubm90IHByb3ZpZGUgdGVjaG5pY2FsIGFzc2lzdGFuY2UgZm9yIHBlcnNvbmFsIGRldmljZXMuCi0gTm8gZ3VhcmFudGVlIGlzIHByb3ZpZGVkIHRoYXQgYSB3aXJlbGVzcyBjb25uZWN0aW9uIHdpbGwgc3VjY2VlZC4KLSBUaGUgbGlicmFyeSBhc3N1bWVzIG5vIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgc2FmZXR5IG9mIGVxdWlwbWVudCwgbGFwdG9wIGNvbmZpZ3VyYXRpb24sIHNlY3VyaXR5LCBvciBkYXRhIGZpbGVzLgo=" }
  ]
};
