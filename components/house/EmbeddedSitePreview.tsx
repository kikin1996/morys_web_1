"use client";

type EmbeddedSitePreviewProps = {
  selectedHouseId: string;
  onSelectHouse: (houseId: string) => void;
};

export default function EmbeddedSitePreview({
  selectedHouseId,
  onSelectHouse
}: EmbeddedSitePreviewProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50">
      {/* Udržujeme stejný poměr stran jako má fotka (742x556),
          aby se nic neořezávalo a souřadnice polygonů seděly přesně. */}
      <div className="w-full aspect-[742/556]">
        {/* Přesný embed mapy z homepage (AvailabilityTable) */}
        <div className="luchnihaj-map-box h-full w-full">
          <div id="interactive-map" className="luchnihaj-map-wrapper h-full w-full">
            <svg
              viewBox="0 0 742 556"
              xmlns="http://www.w3.org/2000/svg"
              className="luchnihaj-map-svg"
            >
              <image
                href="/fotky/fotografie-exterier/drone2.jpg"
                x="0"
                y="0"
                width="742"
                height="556"
                preserveAspectRatio="xMidYMid meet"
              />

              {/* Podlaží 1–4 */}
              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer transition ${
                    selectedHouseId === "1"
                      ? "lh-zone--selected opacity-100"
                      : "opacity-40 hover:opacity-80"
                  }`}
                  data-house-id="1"
                  onClick={() => onSelectHouse && onSelectHouse("1")}
                  points="275,478 652,337 652,277 275,410 78,323 78,368"
                />
              </g>

              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer transition ${
                    selectedHouseId === "2"
                      ? "lh-zone--selected opacity-100"
                      : "opacity-40 hover:opacity-80"
                  }`}
                  data-house-id="2"
                  onClick={() => onSelectHouse && onSelectHouse("2")}
                  points="275,410 652,277 652,225 275,332 78,268 78,323"
                />
              </g>

              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer transition ${
                    selectedHouseId === "3"
                      ? "lh-zone--selected opacity-100"
                      : "opacity-40 hover:opacity-80"
                  }`}
                  data-house-id="3"
                  onClick={() => onSelectHouse && onSelectHouse("3")}
                  points="275,332 652,225 652,154 275,237 78,187 78,268"
                />
              </g>

              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer transition ${
                    selectedHouseId === "4"
                      ? "lh-zone--selected opacity-100"
                      : "opacity-40 hover:opacity-80"
                  }`}
                  data-house-id="4"
                  onClick={() => onSelectHouse && onSelectHouse("4")}
                  points="275,237 610,166 611,130 637,127 637,114 474,98 133,129 133,145 156,147 158,173 78,186"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}






