(function () {
  "use strict";

  // 이미지가 다른 차종/트림에 자동 공유되지 않도록 이미지 파일명은 각 항목에서 직접 관리합니다.
  // 파일명에 확장자(.webp 등)를 포함해 주세요. 사진은 아래 폴더에 업로드합니다.
  const IMAGE_DIRECTORY = "images/option-thumbnails/";
  const IMAGE_VERSION = "20261113-grandeur-premium-included-13";

  // [카테고리 전체 표시] true: 표시 / false: 카테고리 메뉴 전체 숨김
  const SHOW_CATEGORIES = true;

  // [카테고리별 표시] enabled 값만 바꾸세요. true: 켜기 / false: 끄기
  // "전체"는 자동으로 맨 앞에 표시됩니다. 아래 목록에 추가할 필요가 없습니다.
  // 카테고리를 꺼도 등록된 옵션은 "전체"에서 계속 볼 수 있습니다.
  const CATEGORIES = [
    { name: "파워트레인/성능", enabled: true },
    { name: "지능형 안전기술", enabled: true },
    { name: "안전", enabled: true },
    { name: "외관", enabled: true },
    { name: "내장", enabled: true },
    { name: "시트", enabled: true },
    { name: "편의", enabled: true },
    { name: "멀티미디어", enabled: true }
  ];

  // [옵션 추가/수정/삭제] "브랜드|차량|세부모델|트림" → 옵션 배열
  // 기본 포함 옵션은 category 값으로 분류합니다. 예: category: "파워트레인/성능"
  // 사용 가능: "파워트레인/성능", "지능형 안전기술", "안전", "외관", "내장", "시트", "편의", "멀티미디어"
  // category를 지정하지 않은 항목도 "전체"에서는 표시됩니다.
  // 이름은 사이트 STEP 01~02의 차량/엔진/트림명과 정확히 일치해야 합니다.
  // 아래 데이터는 기존 사이트 설정을 그대로 옮긴 것입니다.
  const BY_TRIM = {
    // ─── 현대 / 그랜저 ───
    "현대|그랜저|2.5 가솔린|프리미엄": [
      {
        status: "선택 옵션",
        id: "grandeur-premium-cam",
        image: "현대/그랜저/빌트인 캠 2 Plus.webp",
        name: "빌트인 캠 2 Plus",
        price: "650,000원",
        highlight: true,
        description: "주차 녹화와 주행 영상 저장 지원",
        source: "현대 그랜저 가격 페이지 기준 프리미엄 선택품목"
      },
      {
        status: "선택 옵션",
        id: "grandeur-premium-sense1",
        image: "현대/그랜저/현대 스마트센스 I.webp",
        name: "현대 스마트센스 I",
        price: "1,400,000원",
        highlight: true,
        description: "주요 안전 보조 기능 패키지",
        source: "현대 그랜저 가격 페이지 기준 프리미엄 선택품목"
      },
      {
        status: "선택 옵션",
        id: "grandeur-premium-pano",
        image: "현대/그랜저/파노라마 선루프.webp",
        name: "파노라마 선루프",
        price: "1,200,000원",
        description: "개방감을 높여주는 대표 선택 사양",
        source: "현대 그랜저 가격 페이지 기준 프리미엄 선택품목"
      },
      {
        status: "선택 옵션",
        id: "grandeur-premium-parking",
        image: "현대/그랜저/파킹 어시스트.webp",
        name: "파킹 어시스트",
        price: "1,700,000원",
        description: "주차 보조 및 모니터링 중심 편의 패키지",
        source: "현대 그랜저 가격 페이지 기준 프리미엄 선택품목"
      },
      {
        status: "선택 옵션",
        id: "grandeur-premium-choice",
        image: "현대/그랜저/프리미엄 초이스.webp",
        name: "프리미엄 초이스",
        price: "1,200,000원",
        description: "고객 선호 편의품목 중심 패키지",
        source: "현대 그랜저 가격 페이지 기준 프리미엄 선택품목"
      },
      {
        status: "기본 포함",
        id: "grandeur-premium-predictive-shift",
        category: "파워트레인/성능",
        image: "현대/그랜저/전방 예측 변속 시스템.webp",
        name: "전방 예측 변속 시스템",
        price: "기본 포함"
      },
      {
        status: "기본 포함",
        id: "grandeur-premium-drive-mode",
        category: "파워트레인/성능",
        image: "현대/그랜저/통합 주행 모드.webp",
        name: "통합 주행 모드",
        price: "기본 포함"
      },
      {
        status: "기본 포함",
        id: "grandeur-premium-r-mdps",
        category: "파워트레인/성능",
        image: "현대/그랜저/랙구동형 전동식 파워 스티어링(R-MDPS).webp",
        name: "랙구동형 전동식 파워 스티어링(R-MDPS)",
        price: "기본 포함"
      },
      {
        status: "기본 포함",
        id: "grandeur-premium-coasting-control",
        category: "파워트레인/성능",
        image: "현대/그랜저/중립 주행 제어.webp",
        name: "중립 주행 제어",
        price: "기본 포함"
      },
      {
        status: "기본 포함",
        id: "grandeur-premium-8at",
        category: "파워트레인/성능",
        image: "현대/그랜저/8단 자동변속기.webp",
        name: "8단 자동변속기",
        price: "기본 포함"
      },
      {
        status: "기본 포함",
        id: "grandeur-premium-smartstream-25",
        category: "파워트레인/성능",
        image: "현대/그랜저/스마트스트림 가솔린 2.5 엔진.webp",
        name: "스마트스트림 가솔린 2.5 엔진",
        price: "기본 포함"
      },
      {
        status: "기본 포함",
        id: "grandeur-premium-shift-lever",
        category: "파워트레인/성능",
        image: "현대/그랜저/전자식 변속 레버(진동 경고).webp",
        name: "전자식 변속 레버(진동 경고)",
        price: "기본 포함"
      }
    ],
    "현대|그랜저|2.5 가솔린|익스클루시브": [
      {
        status: "기본 포함",
        id: "grandeur-exclusive-sense1",
        image: "driving-assist.webp",
        name: "현대 스마트센스 I",
        price: "기본 포함",
        highlight: true,
        description: "프리미엄에서 선택하던 안전 패키지가 상위 트림에서 기본 포함",
        source: "현대 그랜저 가격 페이지 기준 익스클루시브 기본품목 반영"
      },
      {
        status: "기본 포함",
        id: "grandeur-exclusive-parking",
        image: "parking-assist.webp",
        name: "파킹 어시스트",
        price: "기본 포함",
        description: "주차 편의 중심 사양이 기본 적용",
        source: "현대 그랜저 가격 페이지 기준 익스클루시브 기본품목 반영"
      },
      {
        status: "선택 옵션",
        id: "grandeur-exclusive-pano",
        image: "파노라마 선루프.webp",
        name: "파노라마 선루프",
        price: "1,200,000원",
        description: "상위 트림에서도 선택 가능",
        source: "현대 그랜저 가격 페이지 기준 익스클루시브 선택품목"
      },
      {
        status: "선택 옵션",
        id: "grandeur-exclusive-cam",
        image: "빌트인 캠 2 Plus.webp",
        name: "빌트인 캠 2 Plus",
        price: "650,000원",
        description: "주행/주차 영상 저장",
        source: "현대 그랜저 가격 페이지 기준 익스클루시브 선택품목"
      },
      {
        status: "선택 옵션",
        id: "grandeur-exclusive-seat",
        image: "blind-spot.webp",
        name: "시트 컴포트 플러스",
        price: "1,500,000원",
        description: "시트 중심 편의 강화 패키지",
        source: "현대 그랜저 가격 페이지 기준 익스클루시브 선택품목"
      },
      {
        status: "선택 옵션",
        id: "grandeur-exclusive-roof",
        image: "panoramic-roof.webp",
        name: "스마트 비전 루프",
        price: "1,800,000원",
        description: "파노라마 선루프와 중복 불가",
        source: "현대 그랜저 가격 페이지 기준 익스클루시브 선택품목"
      }
    ],
    "현대|그랜저|2.5 가솔린|캘리그래피": [
      {
        status: "기본 포함",
        id: "grandeur-calli-sense1",
        image: "driving-assist.webp",
        name: "현대 스마트센스 I",
        price: "기본 포함",
        highlight: true,
        description: "상위 트림 기본 포함",
        source: "현대 그랜저 가격 페이지 기준 캘리그래피 기본품목 반영"
      },
      {
        status: "기본 포함",
        id: "grandeur-calli-parking",
        image: "parking-assist.webp",
        name: "파킹 어시스트",
        price: "기본 포함",
        description: "상위 트림 기본 포함",
        source: "현대 그랜저 가격 페이지 기준 캘리그래피 기본품목 반영"
      },
      {
        status: "기본 포함",
        id: "grandeur-calli-seat",
        image: "blind-spot.webp",
        name: "시트 컴포트 플러스",
        price: "기본 포함",
        description: "상위 트림 기본 포함",
        source: "현대 그랜저 가격 페이지 기준 캘리그래피 기본품목 반영"
      },
      {
        status: "선택 옵션",
        id: "grandeur-calli-wheel",
        image: "panoramic-roof.webp",
        name: "20인치 알로이 휠 & 타이어",
        price: "450,000원",
        description: "캘리그래피 전용 선택 가능 사양",
        source: "현대 그랜저 가격 페이지 기준 캘리그래피 선택품목"
      },
      {
        status: "선택 옵션",
        id: "grandeur-calli-cam",
        image: "빌트인 캠 2 Plus.webp",
        name: "빌트인 캠 2 Plus",
        price: "650,000원",
        description: "주행/주차 영상 저장",
        source: "현대 그랜저 가격 페이지 기준 캘리그래피 선택품목"
      },
      {
        status: "선택 옵션",
        id: "grandeur-calli-roof",
        image: "panoramic-roof.webp",
        name: "스마트 비전 루프",
        price: "1,800,000원",
        description: "파노라마 선루프와 중복 불가",
        source: "현대 그랜저 가격 페이지 기준 캘리그래피 선택품목"
      }
    ],
    "현대|그랜저|2.5 가솔린|캘리그래피 블랙 잉크": [
      {
        status: "기본 포함",
        id: "grandeur-blackink-calli",
        image: "blind-spot.webp",
        name: "캘리그래피 고급 편의사양",
        price: "기본 포함",
        highlight: true,
        description: "캘리그래피 기본 구성을 포함한 상위 트림",
        source: "현대 그랜저 가격 페이지 기준 캘리그래피 상위 구성 반영"
      },
      {
        status: "선택 옵션",
        id: "grandeur-blackink-cam",
        image: "빌트인 캠 2 Plus.webp",
        name: "빌트인 캠 2 Plus",
        price: "650,000원",
        description: "주행/주차 영상 저장",
        source: "현대 그랜저 가격 페이지 기준 상위 트림 선택품목"
      },
      {
        status: "선택 옵션",
        id: "grandeur-blackink-roof",
        image: "panoramic-roof.webp",
        name: "스마트 비전 루프",
        price: "1,800,000원",
        description: "파노라마 선루프와 중복 불가",
        source: "현대 그랜저 가격 페이지 기준 상위 트림 선택품목"
      }
    ],

    // ─── 기아 / 스포티지 ───
    "기아|스포티지|1.6 가솔린 터보|프레스티지": [
      {
        status: "선택 옵션",
        id: "sportage-prestige-style",
        image: "panoramic-roof.webp",
        name: "스타일",
        price: "690,000원",
        highlight: true,
        description: "램프·휠 등 외관 중심 대표 옵션",
        source: "기아 스포티지 가격 페이지 기준 프레스티지 선택품목"
      },
      {
        status: "선택 옵션",
        id: "sportage-prestige-comfort1",
        image: "blind-spot.webp",
        name: "컴포트 I",
        price: "1,040,000원",
        description: "시트/편의 중심 패키지",
        source: "기아 스포티지 가격 페이지 기준 프레스티지 선택품목"
      },
      {
        status: "선택 옵션",
        id: "sportage-prestige-cam",
        image: "builtin-cam.webp",
        name: "빌트인 캠 2",
        price: "450,000원",
        description: "빌트인 캠 선택 가능",
        source: "기아 스포티지 가격 페이지 기준 프레스티지 선택품목"
      },
      {
        status: "선택 옵션",
        id: "sportage-prestige-sunroof",
        image: "panoramic-roof.webp",
        name: "파노라마 선루프",
        price: "1,190,000원",
        description: "개방감 강화 옵션",
        source: "기아 스포티지 가격 페이지 기준 프레스티지 선택품목"
      },
      {
        status: "선택 옵션",
        id: "sportage-prestige-awd",
        image: "driving-assist.webp",
        name: "전자식 4WD",
        price: "2,230,000원",
        description: "주행 안정성을 높이는 구동 선택사양",
        source: "기아 스포티지 가격 페이지 기준 프레스티지 선택품목"
      }
    ],
    "기아|스포티지|1.6 가솔린 터보|노블레스": [
      {
        status: "기본 포함",
        id: "sportage-noblesse-style",
        image: "panoramic-roof.webp",
        name: "스타일",
        price: "기본 포함",
        highlight: true,
        description: "하위 트림 대표 외관 패키지가 상위 트림에서 기본 반영된 구성으로 정리",
        source: "기아 스포티지 가격 페이지 및 상위 트림 기본품목 기준 검증"
      },
      {
        status: "선택 옵션",
        id: "sportage-noblesse-comfort",
        image: "blind-spot.webp",
        name: "컴포트",
        price: "선택 가능",
        description: "시트/편의 중심 추가 선택 사양",
        source: "기아 스포티지 가격 페이지 기준 노블레스 대표 선택품목"
      },
      {
        status: "선택 옵션",
        id: "sportage-noblesse-drivewise",
        image: "driving-assist.webp",
        name: "드라이브 와이즈",
        price: "910,000원",
        description: "안전 보조 기능 중심 패키지",
        source: "기아 스포티지 가격 페이지 기준 노블레스 대표 선택품목"
      },
      {
        status: "선택 옵션",
        id: "sportage-noblesse-monitor",
        image: "parking-assist.webp",
        name: "모니터링",
        price: "1,140,000원",
        description: "서라운드/주차 모니터링 중심 사양",
        source: "기아 스포티지 가격 페이지 기준 노블레스 대표 선택품목"
      },
      {
        status: "선택 옵션",
        id: "sportage-noblesse-sunroof",
        image: "panoramic-roof.webp",
        name: "파노라마 선루프",
        price: "1,090,000원",
        description: "개방감 강화 옵션",
        source: "기아 스포티지 가격 페이지 기준 노블레스 대표 선택품목"
      }
    ],
    "기아|스포티지|1.6 가솔린 터보|시그니처": [
      {
        status: "기본 포함",
        id: "sportage-signature-comfort",
        image: "blind-spot.webp",
        name: "컴포트/주요 편의사양",
        price: "기본 포함",
        highlight: true,
        description: "노블레스 이하에서 선택하던 주요 편의사양이 상위 트림 기본 포함",
        source: "기아 스포티지 가격 페이지 기준 시그니처 기본품목 검증"
      },
      {
        status: "선택 옵션",
        id: "sportage-signature-drivewise",
        image: "driving-assist.webp",
        name: "드라이브 와이즈",
        price: "910,000원",
        description: "상위 트림에서도 추가 선택 가능",
        source: "기아 스포티지 가격 페이지 기준 시그니처 선택품목"
      },
      {
        status: "선택 옵션",
        id: "sportage-signature-cam",
        image: "builtin-cam.webp",
        name: "빌트인 캠 2",
        price: "450,000원",
        description: "주행/주차 영상 저장",
        source: "기아 스포티지 가격 페이지 기준 시그니처 선택품목"
      },
      {
        status: "선택 옵션",
        id: "sportage-signature-monitor",
        image: "parking-assist.webp",
        name: "모니터링",
        price: "1,140,000원",
        description: "서라운드/주차 모니터링 중심 사양",
        source: "기아 스포티지 가격 페이지 기준 시그니처 선택품목"
      },
      {
        status: "선택 옵션",
        id: "sportage-signature-krell",
        image: "premium-audio.webp",
        name: "KRELL 프리미엄 사운드",
        price: "590,000원",
        description: "고급 사운드 시스템",
        source: "기아 스포티지 가격 페이지 기준 시그니처 선택품목"
      },
      {
        status: "선택 옵션",
        id: "sportage-signature-sunroof",
        image: "panoramic-roof.webp",
        name: "파노라마 선루프",
        price: "1,090,000원",
        description: "개방감 강화 옵션",
        source: "기아 스포티지 가격 페이지 기준 시그니처 선택품목"
      }
    ],
    "기아|스포티지|1.6 가솔린 터보|시그니처 X-Line": [
      {
        status: "기본 포함",
        id: "sportage-xline-signature-base",
        image: "driving-assist.webp",
        name: "시그니처 주요사양",
        price: "기본 포함",
        highlight: true,
        description: "시그니처 기본품목 포함 + X-Line 전용 디자인",
        source: "기아 스포티지 가격 페이지 기준 시그니처 상위 구성 반영"
      },
      {
        status: "선택 옵션",
        id: "sportage-xline-krell",
        image: "premium-audio.webp",
        name: "KRELL 프리미엄 사운드",
        price: "590,000원",
        description: "고급 사운드 시스템",
        source: "기아 스포티지 가격 페이지 기준 상위 트림 대표 선택품목"
      },
      {
        status: "선택 옵션",
        id: "sportage-xline-sunroof",
        image: "panoramic-roof.webp",
        name: "파노라마 선루프",
        price: "1,090,000원",
        description: "개방감 강화 옵션",
        source: "기아 스포티지 가격 페이지 기준 상위 트림 대표 선택품목"
      }
    ],

    // ─── 제네시스 / G80 ───
    "제네시스|G80|2.5 가솔린 터보|기본모델": [
      {
        status: "선택 옵션",
        id: "g80-popular",
        image: "driving-assist.webp",
        name: "파퓰러 패키지",
        price: "4,300,000원",
        highlight: true,
        description: "드라이빙 어시스턴스 패키지 I·II와 빌트인 캠 패키지 통합",
        source: "제네시스 G80 BTO 기준"
      },
      {
        status: "선택 옵션",
        id: "g80-sunroof",
        image: "panoramic-roof.webp",
        name: "파노라마 선루프",
        price: "1,400,000원",
        description: "대표 선택 사양",
        source: "제네시스 G80 BTO 기준"
      },
      {
        status: "선택 옵션",
        id: "g80-convenience",
        image: "blind-spot.webp",
        name: "컨비니언스 패키지",
        price: "1,300,000원",
        description: "에르고모션 시트·고스트 도어 클로징 등 포함",
        source: "제네시스 G80 BTO 기준"
      },
      {
        status: "선택 옵션",
        id: "g80-drive1",
        image: "driving-assist.webp",
        name: "드라이빙 어시스턴스 패키지 I",
        price: "1,950,000원",
        description: "SVM/BVM/원격 스마트 주차 보조 등 포함",
        source: "제네시스 G80 BTO 기준"
      },
      {
        status: "선택 옵션",
        id: "g80-drive2",
        image: "driving-assist.webp",
        name: "드라이빙 어시스턴스 패키지 II",
        price: "2,000,000원",
        description: "고속도로 주행 보조 2 등 안전 보조 강화",
        source: "제네시스 G80 BTO 기준"
      }
    ],
    "제네시스|G80|2.5 가솔린 터보 AWD|기본모델": [
      {
        status: "선택 옵션",
        id: "g80-awd-popular",
        image: "driving-assist.webp",
        name: "파퓰러 패키지",
        price: "4,300,000원",
        highlight: true,
        description: "AWD 기본모델에서도 선택 가능한 대표 패키지",
        source: "제네시스 G80 BTO 기준"
      },
      {
        status: "선택 옵션",
        id: "g80-awd-sunroof",
        image: "panoramic-roof.webp",
        name: "파노라마 선루프",
        price: "1,400,000원",
        description: "대표 선택 사양",
        source: "제네시스 G80 BTO 기준"
      },
      {
        status: "선택 옵션",
        id: "g80-awd-convenience",
        image: "blind-spot.webp",
        name: "컨비니언스 패키지",
        price: "1,300,000원",
        description: "편의사양 강화",
        source: "제네시스 G80 BTO 기준"
      }
    ],
    "제네시스|G80|2.5 가솔린 터보 AWD|Black": [
      {
        status: "기본 포함",
        id: "g80-black-builtin",
        image: "builtin-cam.webp",
        name: "빌트인 캠 패키지",
        price: "기본 포함",
        highlight: true,
        description: "2026 G80 블랙은 빌트인 캠 패키지 등 고객 선호 사양 기본화",
        source: "제네시스 뉴스룸 2026 G80 Black 안내"
      },
      {
        status: "기본 포함",
        id: "g80-black-popular",
        image: "driving-assist.webp",
        name: "고객 선호 사양 패키지",
        price: "기본 포함",
        description: "블랙 전용 고급 구성 반영",
        source: "제네시스 뉴스룸 2026 G80 Black 안내"
      },
      {
        status: "선택 옵션",
        id: "g80-black-sunroof",
        image: "panoramic-roof.webp",
        name: "파노라마 선루프",
        price: "선택 가능",
        description: "트림/사양 조합에 따라 추가 가능",
        source: "제네시스 BTO 기준 대표 선택 사양"
      }
    ],

    // ─── KGM / 토레스 ───
    "KGM|토레스|1.5 가솔린 터보|T5": [
      {
        status: "선택 옵션",
        id: "torres-t5-valueup",
        image: "blind-spot.webp",
        name: "밸류업 패키지",
        price: "1,200,000원",
        highlight: true,
        description: "대표 편의 사양 패키지",
        source: "KGM 토레스 가격표 기준 T5 선택품목"
      },
      {
        status: "선택 옵션",
        id: "torres-t5-nav",
        image: "driving-assist.webp",
        name: "12.3인치 KGM 링크 내비게이션 패키지 + IACC",
        price: "1,500,000원",
        description: "내비게이션 및 어댑티브 크루즈 포함",
        source: "KGM 토레스 가격표 기준 T5 선택품목"
      },
      {
        status: "선택 옵션",
        id: "torres-t5-deep",
        image: "driving-assist.webp",
        name: "딥 컨트롤 패키지 II + 스마트 파워 테일게이트",
        price: "1,300,000원",
        description: "주행 보조 및 파워 테일게이트 패키지",
        source: "KGM 토레스 가격표 기준 T5 선택품목"
      }
    ],
    "KGM|토레스|1.5 가솔린 터보|T7": [
      {
        status: "기본 포함",
        id: "torres-t7-valueup",
        image: "blind-spot.webp",
        name: "밸류업 패키지",
        price: "기본 포함",
        highlight: true,
        description: "T5 선택품목이 상위 트림에서 기본 포함",
        source: "KGM 토레스 가격표 기준 T7 기본품목"
      },
      {
        status: "기본 포함",
        id: "torres-t7-nav",
        image: "driving-assist.webp",
        name: "12.3인치 KGM 링크 내비게이션 패키지 + IACC",
        price: "기본 포함",
        description: "상위 트림 기본 포함",
        source: "KGM 토레스 가격표 기준 T7 기본품목"
      },
      {
        status: "선택 옵션",
        id: "torres-t7-aroundview",
        image: "parking-assist.webp",
        name: "3D 어라운드 뷰 모니터링 시스템",
        price: "1,100,000원",
        description: "주차/주행 시야 보조",
        source: "KGM 토레스 가격표 기준 T7 선택품목"
      },
      {
        status: "선택 옵션",
        id: "torres-t7-comfort",
        image: "blind-spot.webp",
        name: "하이 컴포트 패키지",
        price: "1,800,000원",
        description: "고급 편의사양 패키지",
        source: "KGM 토레스 가격표 기준 T7 선택품목"
      },
      {
        status: "선택 옵션",
        id: "torres-t7-tailgate",
        image: "driving-assist.webp",
        name: "스마트 파워 테일게이트 패키지",
        price: "750,000원",
        description: "테일게이트 전동 편의 사양",
        source: "KGM 토레스 가격표 기준 T7 선택품목"
      },
      {
        status: "선택 옵션",
        id: "torres-t7-sunroof",
        image: "panoramic-roof.webp",
        name: "파노라마 선루프",
        price: "1,200,000원",
        description: "개방감 강화 옵션",
        source: "KGM 토레스 가격표 기준 T7 선택품목"
      }
    ],

    // ─── 르노 / 그랑 콜레오스 ───
    "르노|그랑 콜레오스|2.0 가솔린|Techno": [
      {
        status: "선택 옵션",
        id: "koleos-techno-passenger",
        image: "parking-assist.webp",
        name: "12.3인치 동승석 디스플레이 + FULL 오토 파킹 보조",
        price: "1,630,000원",
        highlight: true,
        description: "테크노 대표 선택 패키지",
        source: "르노 그랑 콜레오스 가격표 기준"
      }
    ],
    "르노|그랑 콜레오스|2.0 가솔린|Iconic": [
      {
        status: "기본 포함",
        id: "koleos-iconic-signature",
        image: "driving-assist.webp",
        name: "Iconic 상위 기본사양",
        price: "기본 포함",
        highlight: true,
        description: "차음 윈드쉴드 글라스·나파 인조가죽 시트 등 상위 기본사양 반영",
        source: "르노 그랑 콜레오스 공식 모델 페이지 기준"
      },
      {
        status: "선택 옵션",
        id: "koleos-iconic-sunroof",
        image: "panoramic-roof.webp",
        name: "파노라마 선루프",
        price: "1,140,000원",
        description: "대표 선택 옵션",
        source: "르노 그랑 콜레오스 가격표 기준"
      },
      {
        status: "선택 옵션",
        id: "koleos-iconic-bose",
        image: "premium-audio.webp",
        name: "BOSE 프리미엄 사운드 시스템",
        price: "1,330,000원",
        description: "액티브 노이즈 캔슬레이션 포함",
        source: "르노 그랑 콜레오스 가격표 기준"
      },
      {
        status: "선택 옵션",
        id: "koleos-iconic-hud",
        image: "hud-display.webp",
        name: "증강현실 헤드업 디스플레이 패키지",
        price: "1,240,000원",
        description: "AR-HUD + 차음 윈드쉴드 글라스 + 프레임리스 룸미러",
        source: "르노 그랑 콜레오스 가격표 기준"
      },
      {
        status: "선택 옵션",
        id: "koleos-iconic-wheel",
        image: "panoramic-roof.webp",
        name: "20인치 투톤 하이랜드 알로이 휠",
        price: "450,000원",
        description: "디자인/주행감 중심 선택 사양",
        source: "르노 그랑 콜레오스 가격표 기준"
      }
    ],
    "르노|그랑 콜레오스|2.0 가솔린|Esprit Alpine": [
      {
        status: "기본 포함",
        id: "koleos-alpine-alpine",
        image: "driving-assist.webp",
        name: "Esprit Alpine 전용 기본사양",
        price: "기본 포함",
        highlight: true,
        description: "전용 로고, 시트 컬러, 20인치 휠, 동승석 디스플레이가 탑재된 openR 스크린",
        source: "르노 그랑 콜레오스 공식 모델 페이지 기준"
      },
      {
        status: "선택 옵션",
        id: "koleos-alpine-sunroof",
        image: "panoramic-roof.webp",
        name: "파노라마 선루프",
        price: "1,140,000원",
        description: "대표 선택 옵션",
        source: "르노 그랑 콜레오스 가격표 기준"
      },
      {
        status: "선택 옵션",
        id: "koleos-alpine-bose",
        image: "premium-audio.webp",
        name: "BOSE 프리미엄 사운드 시스템",
        price: "1,330,000원",
        description: "액티브 노이즈 캔슬레이션 포함",
        source: "르노 그랑 콜레오스 가격표 기준"
      },
      {
        status: "선택 옵션",
        id: "koleos-alpine-hud",
        image: "hud-display.webp",
        name: "증강현실 헤드업 디스플레이 패키지",
        price: "1,190,000원",
        description: "AR-HUD + 차음 윈드쉴드 글라스",
        source: "르노 그랑 콜레오스 가격표 기준"
      }
    ],

    // ─── 쉐보레 / 트랙스 크로스오버 ───
    "쉐보레|트랙스 크로스오버|1.2 가솔린|LS": [
      {
        status: "기본 포함",
        id: "trax-ls-note",
        image: "driving-assist.webp",
        name: "LS 기본 구성",
        price: "기본 트림",
        highlight: true,
        description: "트랙스는 트림 업그레이드형 구성이 중심이며 별도 선택품목보다 상위 트림 기본 확장이 명확한 편입니다.",
        source: "쉐보레 트랙스 구성 페이지 기준"
      }
    ],
    "쉐보레|트랙스 크로스오버|1.2 가솔린|Redline": [
      {
        status: "기본 포함",
        id: "trax-redline-ls",
        image: "driving-assist.webp",
        name: "LS DELUXE 기본품목",
        price: "기본 포함",
        highlight: true,
        description: "공식 페이지 기준 Redline은 LS DELUXE 기본 품목 포함",
        source: "쉐보레 트랙스 공식 모델/구성 페이지 기준"
      },
      {
        status: "기본 포함",
        id: "trax-redline-redline",
        image: "panoramic-roof.webp",
        name: "레드라인 전용 디자인 사양",
        price: "기본 포함",
        description: "17인치 글로스 블랙 휠, 블랙 보타이, 루프랙 등",
        source: "쉐보레 트랙스 공식 모델/구성 페이지 기준"
      }
    ],
    "쉐보레|트랙스 크로스오버|1.2 가솔린|ACTIV": [
      {
        status: "기본 포함",
        id: "trax-activ-premium",
        image: "driving-assist.webp",
        name: "ACTIV 전용 기본사양",
        price: "기본 포함",
        highlight: true,
        description: "ACTIV 전용 익스테리어와 실용 편의사양 중심 구성",
        source: "쉐보레 트랙스 공식 모델 페이지 기준"
      }
    ],
    "쉐보레|트랙스 크로스오버|1.2 가솔린|RS": [
      {
        status: "기본 포함",
        id: "trax-rs-redline",
        image: "driving-assist.webp",
        name: "Redline 기본품목",
        price: "기본 포함",
        highlight: true,
        description: "공식 페이지 기준 RS는 Redline 기본 품목 포함",
        source: "쉐보레 트랙스 공식 모델 페이지 기준"
      },
      {
        status: "기본 포함",
        id: "trax-rs-rs",
        image: "driving-assist.webp",
        name: "RS 전용 고급사양",
        price: "기본 포함",
        description: "통풍시트, 8way 전동시트, 무선충전, 11인치 스크린 등",
        source: "쉐보레 트랙스 공식 모델 페이지 기준"
      }
    ]
  };


  // 위 설정을 사이트가 읽을 수 있도록 공개합니다. 이 아래는 수정하지 않아도 됩니다.
  window.AUTOGENIE_OPTION_CONFIG = {
    imageDirectory: IMAGE_DIRECTORY,
    imageVersion: IMAGE_VERSION,
    showCategories: SHOW_CATEGORIES,
    categories: CATEGORIES,
    byTrim: BY_TRIM
  };
})();
