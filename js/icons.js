// ==========================================================================
// LAKOTA CULTURAL ICONS — Geometric traditional style
// Matching the bold angular thunderbird aesthetic
// ==========================================================================

const LakotaIcons = {

  // Red Road — Čhaŋkú Lúta (winding path with moccasin prints)
  redRoad(size = 42) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <!-- Winding road path -->
        <path d="M42,92 C42,92 30,72 38,58 C46,44 62,48 58,32 C54,16 44,12 50,4" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M58,92 C58,92 46,74 54,60 C62,46 78,50 74,34 C70,18 60,14 66,6" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.5"/>
        <!-- Moccasin footprints walking the path -->
        <!-- Bottom pair -->
        <ellipse cx="46" cy="84" rx="3.5" ry="5" opacity="0.9"/>
        <ellipse cx="54" cy="80" rx="3.5" ry="5" opacity="0.9"/>
        <!-- Middle pair -->
        <ellipse cx="44" cy="58" rx="3" ry="4.5" opacity="0.65"/>
        <ellipse cx="52" cy="54" rx="3" ry="4.5" opacity="0.65"/>
        <!-- Upper pair -->
        <ellipse cx="58" cy="34" rx="2.5" ry="4" opacity="0.4"/>
        <ellipse cx="66" cy="30" rx="2.5" ry="4" opacity="0.4"/>
        <!-- Distant single -->
        <ellipse cx="54" cy="12" rx="2" ry="3" opacity="0.2"/>
        <!-- Horizon star -->
        <polygon points="58,2 59.5,5.5 63,5.5 60,8 61,12 58,9.5 55,12 56,8 53,5.5 56.5,5.5" opacity="0.35" transform="scale(0.8) translate(12,-1)"/>
      </g>
    </svg>`;
  },

  // Module 1: First Steps — Camp Circle (entering the community)
  moccasin(size = 42) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <!-- Outer camp circle -->
        <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="5" fill="none"/>
        <!-- Tipis around the circle — small angular shapes -->
        <!-- Top -->
        <polygon points="50,12 46,22 54,22"/>
        <!-- Top right -->
        <polygon points="76,22 68,30 76,32"/>
        <!-- Right -->
        <polygon points="86,50 78,46 78,54"/>
        <!-- Bottom right -->
        <polygon points="76,78 68,70 76,68"/>
        <!-- Bottom -->
        <polygon points="50,88 46,78 54,78"/>
        <!-- Bottom left -->
        <polygon points="24,78 32,70 24,68"/>
        <!-- Left -->
        <polygon points="14,50 22,46 22,54"/>
        <!-- Top left -->
        <polygon points="24,22 32,30 24,32"/>
        <!-- Center fire -->
        <circle cx="50" cy="50" r="6"/>
        <!-- Entry gap at the east (right side) — opening in the circle -->
        <line x1="90" y1="44" x2="90" y2="56" stroke="var(--night, #06091a)" stroke-width="8"/>
        <!-- Person entering — small figure walking in -->
        <circle cx="96" cy="50" r="3"/>
        <line x1="96" y1="53" x2="96" y2="62" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="93" y1="57" x2="99" y2="57" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </g>
    </svg>`;
  },

  // Module 2: Family & Kinship — Tipi
  tipi(size = 42) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <!-- Tipi body -->
        <path d="M50 6 L18 88 L36 88 L36 68 Q36 62 42 62 L58 62 Q64 62 64 68 L64 88 L82 88 Z"/>
        <!-- Lodge poles extending above -->
        <line x1="50" y1="6" x2="42" y2="2" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <line x1="50" y1="6" x2="58" y2="2" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <line x1="50" y1="6" x2="50" y2="1" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <!-- Door cutout -->
        <path d="M42 88 L42 70 Q42 66 46 66 L54 66 Q58 66 58 70 L58 88" fill="var(--night, #06091a)"/>
        <!-- Decorative band -->
        <path d="M34 48 L50 14 L66 48" fill="none" stroke="var(--night, #06091a)" stroke-width="2.5" opacity="0.4"/>
        <!-- Smoke flap lines -->
        <path d="M50 6 L38 24" stroke="var(--night, #06091a)" stroke-width="1.5" opacity="0.3"/>
        <path d="M50 6 L62 24" stroke="var(--night, #06091a)" stroke-width="1.5" opacity="0.3"/>
      </g>
    </svg>`;
  },

  // Module 3: A Day in the Life — Morning Star (Aŋpétu Wičháȟpi)
  morningStar(size = 42) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <!-- Central star -->
        <circle cx="50" cy="50" r="12"/>
        <!-- Four main points — cardinal directions -->
        <polygon points="50,4 44,36 56,36"/>
        <polygon points="50,96 44,64 56,64"/>
        <polygon points="4,50 36,44 36,56"/>
        <polygon points="96,50 64,44 64,56"/>
        <!-- Four diagonal points -->
        <polygon points="18,18 34,40 40,34"/>
        <polygon points="82,18 66,40 60,34"/>
        <polygon points="18,82 34,60 40,66"/>
        <polygon points="82,82 66,60 60,66"/>
        <!-- Inner ring cutout for detail -->
        <circle cx="50" cy="50" r="7" fill="var(--night, #06091a)"/>
        <circle cx="50" cy="50" r="3" fill="currentColor"/>
      </g>
    </svg>`;
  },

  // Module 4: The Land & The Thunder — Medicine Wheel / Four Directions
  medicineWheel(size = 42) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <!-- Outer ring -->
        <circle cx="50" cy="50" r="42" stroke="currentColor" stroke-width="6" fill="none"/>
        <!-- Cross / four directions -->
        <line x1="50" y1="8" x2="50" y2="92" stroke="currentColor" stroke-width="6"/>
        <line x1="8" y1="50" x2="92" y2="50" stroke="currentColor" stroke-width="6"/>
        <!-- Quadrant fills — each direction -->
        <path d="M50 8 A42 42 0 0 1 92 50 L50 50 Z" fill="currentColor" opacity="0.9"/>
        <path d="M8 50 A42 42 0 0 1 50 8 L50 50 Z" fill="currentColor" opacity="0.5"/>
        <path d="M50 92 A42 42 0 0 1 8 50 L50 50 Z" fill="currentColor" opacity="0.7"/>
        <path d="M92 50 A42 42 0 0 1 50 92 L50 50 Z" fill="currentColor" opacity="0.35"/>
        <!-- Center circle -->
        <circle cx="50" cy="50" r="8" fill="currentColor"/>
        <circle cx="50" cy="50" r="4" fill="var(--night, #06091a)"/>
      </g>
    </svg>`;
  },

  // Module 5: Food & Hospitality — Buffalo head front-facing (Tȟatȟáŋka)
  buffalo(size = 42) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Wheat stalk — simple, elegant -->
      <g fill="currentColor" stroke="currentColor">
        <!-- Main stem -->
        <line x1="50" y1="92" x2="50" y2="20" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Grain pairs — bottom to top, getting smaller -->
        <path d="M50,62 Q38,56 36,48" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M50,62 Q62,56 64,48" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M50,52 Q40,46 38,38" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M50,52 Q60,46 62,38" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M50,42 Q42,36 40,28" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M50,42 Q58,36 60,28" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M50,32 Q44,26 44,20" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M50,32 Q56,26 56,20" stroke-width="2" fill="none" stroke-linecap="round"/>
        <!-- Top grain kernels -->
        <ellipse cx="35" cy="47" rx="3" ry="6" transform="rotate(-20 35 47)" opacity="0.85"/>
        <ellipse cx="65" cy="47" rx="3" ry="6" transform="rotate(20 65 47)" opacity="0.85"/>
        <ellipse cx="37" cy="37" rx="2.5" ry="5.5" transform="rotate(-15 37 37)" opacity="0.75"/>
        <ellipse cx="63" cy="37" rx="2.5" ry="5.5" transform="rotate(15 63 37)" opacity="0.75"/>
        <ellipse cx="39" cy="27" rx="2.5" ry="5" transform="rotate(-10 39 27)" opacity="0.6"/>
        <ellipse cx="61" cy="27" rx="2.5" ry="5" transform="rotate(10 61 27)" opacity="0.6"/>
        <ellipse cx="43" cy="19" rx="2" ry="4" transform="rotate(-5 43 19)" opacity="0.45"/>
        <ellipse cx="57" cy="19" rx="2" ry="4" transform="rotate(5 57 19)" opacity="0.45"/>
        <!-- Tip -->
        <path d="M50,20 L48,10" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.4"/>
        <path d="M50,20 L52,10" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.4"/>
        <path d="M50,20 L50,8" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5"/>
      </g>
    </svg>`;
  },

  // Module 6: Prayer & Sacred Language — Sacred Pipe (Čhaŋnúŋpa)
  sacredPipe(size = 42) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <!-- Pipe bowl -->
        <path d="M22 36 L22 56 Q22 64 30 64 L36 64 L36 56 L30 56 L30 44 L36 44 Z"/>
        <!-- Pipe stem -->
        <rect x="36" y="42" width="52" height="8" rx="2"/>
        <!-- Bowl interior -->
        <path d="M26 36 L26 42 L32 42 L32 36 Z" fill="var(--night, #06091a)" opacity="0.5"/>
        <!-- Stem decorative wrappings -->
        <rect x="48" y="40" width="3" height="12" rx="1" opacity="0.4" fill="var(--night, #06091a)"/>
        <rect x="56" y="40" width="3" height="12" rx="1" opacity="0.4" fill="var(--night, #06091a)"/>
        <rect x="64" y="40" width="3" height="12" rx="1" opacity="0.4" fill="var(--night, #06091a)"/>
        <!-- Feathers hanging from stem -->
        <path d="M72 50 L72 62 L68 72 L72 68 L76 74 L72 64 L72 50" opacity="0.8"/>
        <path d="M78 50 L78 58 L74 66 L78 62 L82 68 L78 60 L78 50" opacity="0.6"/>
        <!-- Sacred smoke rising -->
        <path d="M26 32 Q24 24 28 18 Q30 14 26 8" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
        <path d="M32 34 Q34 26 30 20 Q28 16 32 10" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.35"/>
      </g>
    </svg>`;
  },

  // Module 7: Conversation & Flow — Eagle feather with speech lines
  twoFeathers(size = 42) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <!-- Feather — large, bold, central -->
        <!-- Left vane -->
        <path d="M48 10 Q32 16 26 30 Q20 44 22 58 Q24 70 30 78 L36 84 L42 78 Q38 68 38 56 Q38 42 42 30 Q44 22 48 16 Z"/>
        <!-- Right vane -->
        <path d="M52 10 Q68 16 74 30 Q80 44 78 58 Q76 70 70 78 L64 84 L58 78 Q62 68 62 56 Q62 42 58 30 Q56 22 52 16 Z"/>
        <!-- Center spine / rachis -->
        <line x1="50" y1="8" x2="50" y2="96" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <!-- Quill base -->
        <path d="M46 88 L50 96 L54 88 Q54 84 50 84 Q46 84 46 88 Z"/>
        <!-- Split at tip (eagle feather detail) -->
        <path d="M48 10 L50 4 L52 10" fill="var(--night, #06091a)" opacity="0.6"/>
        <!-- Feather barb texture -->
        <path d="M30 40 L48 34 M24 54 L46 48 M28 68 L44 62" stroke="var(--night, #06091a)" stroke-width="1" opacity="0.2"/>
        <path d="M70 40 L52 34 M76 54 L54 48 M72 68 L56 62" stroke="var(--night, #06091a)" stroke-width="1" opacity="0.2"/>
        
        <!-- Speech / voice lines radiating from feather tip -->
        <path d="M36 22 Q28 18 20 20" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6"/>
        <path d="M32 32 Q22 30 14 34" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.45"/>
        <path d="M30 44 Q20 44 12 48" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.3"/>
        
        <path d="M64 22 Q72 18 80 20" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6"/>
        <path d="M68 32 Q78 30 86 34" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.45"/>
        <path d="M70 44 Q80 44 88 48" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.3"/>
      </g>
    </svg>`;
  },

  // Module 8: Sundance Ready — Dancing figure with arms raised (Wiwáŋyaŋg Wačhípi)
  sundanceSun(size = 42) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <!-- Sun above the dancer -->
        <circle cx="50" cy="14" r="10"/>
        <!-- Sun rays -->
        <line x1="50" y1="1" x2="50" y2="0" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <line x1="60" y1="5" x2="64" y2="2" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="64" y1="14" x2="68" y2="14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="60" y1="23" x2="64" y2="26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="40" y1="5" x2="36" y2="2" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="36" y1="14" x2="32" y2="14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="40" y1="23" x2="36" y2="26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        
        <!-- Dancer head -->
        <circle cx="50" cy="38" r="6"/>
        
        <!-- Dancer body -->
        <line x1="50" y1="44" x2="50" y2="70" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
        
        <!-- Arms raised to the sky — reaching toward the sun -->
        <path d="M50 52 L34 34 L28 28" stroke="currentColor" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M50 52 L66 34 L72 28" stroke="currentColor" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        
        <!-- Hands open -->
        <path d="M28 28 L24 24 M28 28 L24 30 M28 28 L22 28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M72 28 L76 24 M72 28 L76 30 M72 28 L78 28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        
        <!-- Legs in dance stance — wide, grounded -->
        <path d="M50 70 L36 90 L32 94" stroke="currentColor" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M50 70 L64 90 L68 94" stroke="currentColor" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        
        <!-- Prayer ties / sage at waist -->
        <path d="M44 62 L40 68 M46 62 L44 70 M54 62 L56 70 M56 62 L60 68" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
        
        <!-- Connection line from dancer to sun (the sacred bond) -->
        <line x1="50" y1="24" x2="50" y2="32" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2" opacity="0.35"/>
      </g>
    </svg>`;
  },
};
