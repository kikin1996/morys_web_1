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
                  className={`lh-zone cursor-pointer ${
                    selectedHouseId === "1" ? "opacity-100" : "hover:opacity-80"
                  }`}
                  data-house-id="1"
                  onClick={() => onSelectHouse && onSelectHouse("1")}
                  points="275,478 652,337 652,277 275,410 78,323 78,368"
                />
                <text className="lh-zone-label" x="450" y="760">
                  1. NP
                </text>
              </g>

              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${
                    selectedHouseId === "2" ? "opacity-100" : "hover:opacity-80"
                  }`}
                  data-house-id="2"
                  onClick={() => onSelectHouse && onSelectHouse("2")}
                  points="275,410 652,277 656,225 275,352 78,268 78,323"
                />
                <text className="lh-zone-label" x="450" y="630">
                  2. NP
                </text>
              </g>

              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${
                    selectedHouseId === "3" ? "opacity-100" : "hover:opacity-80"
                  }`}
                  data-house-id="3"
                  onClick={() => onSelectHouse && onSelectHouse("3")}
                  points="275,352 656,225 652,154 275,237 78,187 78,268"
                />
                <text className="lh-zone-label" x="450" y="510">
                  3. NP
                </text>
              </g>

              <g className="lh-zone-group">
                <polygon
                  className={`lh-zone cursor-pointer ${
                    selectedHouseId === "4" ? "opacity-100" : "hover:opacity-80"
                  }`}
                  data-house-id="4"
                  onClick={() => onSelectHouse && onSelectHouse("4")}
                  points="275,237 610,166 611,130 637,127 646,114 474,98 155,152 156,147 154,150 158,173 79,186"
                />
                <text className="lh-zone-label" x="600" y="360">
                  4. NP
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}






