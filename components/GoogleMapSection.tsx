"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: typeof google;
  }
}

export function GoogleMapSection() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Custom map style - dark green background, beige roads, white icons
    const mapStyle: google.maps.MapTypeStyle[] = [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#12351c" }, { weight: 2 }]
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [{ visibility: "on" }]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#12351c" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#0c2614" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "road.local",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f4f0e6" }, { lightness: 20 }]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e8ddd0" }]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#12351c" }, { weight: "bold" }]
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ffffff" }, { weight: 3 }]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "administrative",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#12351c" }, { weight: 2 }]
      }
    ];

      // Get API key from environment variable
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || process.env.GOOGLE_API_KEY || "";

      if (!apiKey) {
        console.warn("Google Maps API key not found. Please add GOOGLE_API_KEY or NEXT_PUBLIC_GOOGLE_API_KEY to .env.local");
        if (mapRef.current) {
          mapRef.current.innerHTML = '<div class="flex h-full items-center justify-center text-white">Google Maps API key not configured</div>';
        }
        return;
      }

      // Check if Google Maps is already loaded
      if (window.google && window.google.maps) {
        initMap();
      } else {
        // Load Google Maps script
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;

        script.onload = initMap;
        document.head.appendChild(script);
      }

    function initMap() {
      if (!window.google?.maps || !mapRef.current) return;

      // New location coordinates
      const locationLat = 49.68691003853103;
      const locationLng = 18.34788446156904;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: locationLat, lng: locationLng },
        zoom: 15,
        styles: mapStyle,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true
      });

      // Add marker at the specified location
      new window.google.maps.Marker({
        position: { lat: locationLat, lng: locationLng },
        map,
        title: "Lokalita"
      });
    }
  }, []);

  return (
    <section className="border-t border-neutral-100 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Klientské centrum – Mapa
        </h2>
        <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
          <div
            ref={mapRef}
            className="h-[450px] w-full bg-[#12351c]"
            style={{ minHeight: "450px" }}
          />
        </div>
        <p className="mt-4 text-sm text-neutral-600">
          Missouri Park, Karolinská 707/7, 186 00 Praha 8 - Karlín
        </p>
      </div>
    </section>
  );
}

