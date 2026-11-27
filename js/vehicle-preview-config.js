(function () {
  "use strict";

  // 차량 리스트 대표이미지 테스트 설정입니다. 색상 선택 순서와 실제 선택값은 변경하지 않습니다.
  // 원래 대표이미지로 복원: 아래 enabled를 false로 변경합니다. 현재 결과를 유지하려면 true로 둡니다.
  // 차종별 선호색 테스트: 블랙·화이트를 기본으로 하되, 인기 있는 카키·베이지·그레이도 반영합니다.
  // 실제 판매 1위로 단정하지 않습니다. 아래 출처의 견적 선호도·과거 계약 선호도를 참고합니다.
  // 캐스퍼 카키: 현대차그룹 초기 예약 분석(2021년), 현재 판매 순위와는 구분합니다.
  // https://www.hyundaimotorgroup.com/ko/story/CONT0000000000004492
  // 겟차 2026년 11월 견적 선택 통계(출고 판매량 아님), 아래 모델별 게시글 참고:
  // https://web.getcha.kr/blog/color-option-hyundai-sonata-859 (녹턴 그레이 40%)
  // https://web.getcha.kr/blog/color-option-kia-k8-hybrid-964 (인터스텔라 그레이 34%)
  // https://web.getcha.kr/blog/color-option-tesla-model-3-755 (스텔스 그레이 49%)
  // https://web.getcha.kr/blog/color-option-tesla-model-y-954 (스텔스 그레이 38%)
  // https://web.getcha.kr/blog/color-option-kia-morning-490 (밀키 베이지 2위, 26%)
  // https://web.getcha.kr/blog/color-option-kia-ev3-1065 (셰일 그레이 2위, 20%)
  // https://web.getcha.kr/blog/color-option-kia-sportage-501 (울프 그레이 2위, 22%)
  // 쏘나타·스포티지 하이브리드는 동일 차체의 선호색을 공유한 테스트 선택입니다.
  // 등록된 이미지 안에서만 선택하며, 색상 선택 화면의 순서·기본 선택은 유지합니다.
  window.AUTOGENIE_VEHICLE_PREVIEW = {
    enabled: true,
    imageVersion: "20261127-vehicle-preview-variety-21",
    byCar: {
      // 현대
      "현대|그랜저": "paint-390", // 어비스 블랙 펄
      "현대|그랜저 하이브리드": "paint-521", // 어비스 블랙 펄
      "현대|베뉴": "paint-397", // 아틀라스 화이트
      "현대|스타리아": "paint-405", // 크리미 화이트
      "현대|스타리아 하이브리드": "paint-529", // 크리미 화이트
      "현대|싼타페": "paint-411", // 크리미 화이트 펄
      "현대|싼타페 하이브리드": "paint-535", // 크리미 화이트 펄
      "현대|쏘나타": "paint-413", // 녹턴 그레이 메탈릭
      "현대|쏘나타 하이브리드": "paint-537", // 녹턴 그레이 메탈릭
      "현대|아반떼": "paint-423", // 아틀라스 화이트
      "현대|아반떼 하이브리드": "paint-547", // 아틀라스 화이트
      "현대|아이오닉5": "paint-431", // 아틀라스 화이트
      "현대|아이오닉6": "paint-438", // 세레니티 화이트 펄
      "현대|아이오닉9": "paint-443", // 세레니티 화이트 펄
      "현대|캐스퍼": "paint-451", // 톰보이 카키
      "현대|캐스퍼 일렉트릭": "paint-550", // 아틀라스 화이트
      "현대|코나": "paint-455", // 아틀라스 화이트
      "현대|코나 하이브리드": "paint-557", // 아틀라스 화이트
      "현대|코나 일렉트릭": "paint-564", // 아틀라스 화이트
      "현대|투싼": "paint-612", // 세레니티 화이트 펄
      "현대|투싼 하이브리드": "paint-617", // 세레니티 화이트 펄
      "현대|팰리세이드": "paint-470", // 크리미 화이트 펄
      "현대|팰리세이드 하이브리드": "paint-579", // 크리미 화이트 펄
      "현대|포터2": "paint-477", // 크리미 화이트
      "현대|포터2 일렉트릭": "paint-474", // 크리미 화이트
      // 제네시스
      "제네시스|GV90": "paint-601", // 우유니 화이트
      "제네시스|G70": "paint-322", // 우유니 화이트
      "제네시스|G80": "paint-336", // 비크 블랙
      "제네시스|일렉트리파이드 G80": "paint-328", // 비크 블랙
      "제네시스|G90": "paint-344", // 비크 블랙
      "제네시스|GV60": "paint-355", // 우유니 화이트
      "제네시스|GV70": "paint-373", // 우유니 화이트
      "제네시스|일렉트리파이드 GV70": "paint-364", // 우유니 화이트
      "제네시스|GV80": "paint-383", // 우유니 화이트
      // 기아
      "기아|EV3": "paint-81", // 셰일 그레이
      "기아|EV4": "paint-91", // 스노우 화이트 펄
      "기아|EV5": "paint-98", // 스노우 화이트 펄
      "기아|EV6": "paint-107", // 스노우 화이트 펄
      "기아|EV9": "paint-112", // 스노우 화이트 펄
      "기아|K5": "paint-119", // 스노우 화이트 펄
      "기아|K5 하이브리드": "paint-478", // 스노우 화이트 펄
      "기아|K8": "paint-127", // 오로라 블랙 펄
      "기아|K8 하이브리드": "paint-488", // 인터스텔라 그레이
      "기아|K9": "paint-131", // 오로라 블랙 펄
      "기아|PV5 카고": "paint-136", // 클리어 화이트
      "기아|니로 하이브리드": "paint-137", // 스노우 화이트 펄
      "기아|레이": "paint-147", // 클리어 화이트
      "기아|레이 EV": "paint-153", // 클리어 화이트
      "기아|모닝": "paint-154", // 밀키 베이지
      "기아|봉고3": "paint-162", // 클리어 화이트
      "기아|셀토스": "paint-165", // 스노우 화이트 펄
      "기아|셀토스 하이브리드": "paint-495", // 스노우 화이트 펄
      "기아|스포티지": "paint-173", // 울프 그레이
      "기아|스포티지 하이브리드": "paint-503", // 울프 그레이
      "기아|쏘렌토": "paint-177", // 스노우 화이트 펄
      "기아|쏘렌토 하이브리드": "paint-507", // 스노우 화이트 펄
      "기아|카니발": "paint-181", // 스노우 화이트 펄
      "기아|카니발 하이브리드": "paint-511", // 스노우 화이트 펄
      // KGM
      "KGM|무쏘": "paint-24", // 그랜드 화이트
      "KGM|무쏘 EV": "paint-31", // 그랜드 화이트
      "KGM|액티언": "paint-43", // 그랜드 화이트 원톤
      "KGM|액티언 하이브리드": "paint-36", // 그랜드 화이트 원톤
      "KGM|토레스": "paint-60", // 그랜드 화이트 원톤
      "KGM|토레스 하이브리드": "paint-50", // 그랜드 화이트 원톤
      "KGM|토레스 EVX": "paint-70", // 그랜드 화이트 원톤
      "KGM|티볼리": "paint-76", // 그랜드 화이트 원톤
      // 르노
      "르노|그랑 콜레오스": "paint-188", // 새틴 유니버스 화이트
      "르노|그랑 콜레오스 하이브리드 E-Tech": "paint-585", // 새틴 유니버스 화이트
      "르노|아르카나": "paint-192", // 어반 그레이
      "르노|아르카나 하이브리드": "paint-589", // 어반 그레이
      "르노|필랑트 하이브리드 E-Tech": "paint-195", // 새틴 유니버스 화이트
      // 쉐보레
      "쉐보레|트랙스 크로스오버": "paint-267", // 퓨어 화이트
      "쉐보레|트레일블레이저": "paint-271", // 스노우 화이트 펄
      // BMW
      "BMW|1시리즈": "paint-add-0184", // 알파인 화이트
      "BMW|2시리즈": "paint-add-0190", // 알파인 화이트
      "BMW|3시리즈": "paint-4", // 알파인 화이트
      "BMW|4시리즈": "paint-add-0194", // 알파인 화이트
      "BMW|5시리즈": "paint-6", // M 카본 블랙 메탈릭
      "BMW|7시리즈": "paint-add-0198", // 블랙 사파이어 메탈릭
      "BMW|8시리즈": "paint-add-0200", // 블랙 사파이어 메탈릭
      "BMW|i4": "paint-add-0205", // 알파인 화이트
      "BMW|i5": "paint-add-0208", // 블랙 사파이어 메탈릭
      "BMW|i7": "paint-add-0214", // 블랙 사파이어 메탈릭
      "BMW|iX1": "paint-add-0219", // 알파인 화이트
      "BMW|iX2": "paint-add-0224", // 알파인 화이트
      "BMW|iX3": "paint-add-0228", // 알파인 화이트
      "BMW|IX": "paint-add-0232", // 미네랄 화이트 메탈릭
      "BMW|X1": "paint-add-0237", // 알파인 화이트
      "BMW|X2": "paint-add-0242", // 알파인 화이트
      "BMW|X3": "paint-15", // 알파인 화이트
      "BMW|X4": "paint-add-0247", // 알파인 화이트
      "BMW|X5": "paint-17", // 미네랄 화이트 메탈릭
      "BMW|X6": "paint-add-0251", // 미네랄 화이트 메탈릭
      "BMW|X7": "paint-add-0255", // 미네랄 화이트 메탈릭
      "BMW|XM": "paint-add-0259", // 미네랄 화이트 메탈릭
      // 벤츠
      "벤츠|A클래스 해치백": "paint-add-0005", // 폴라 화이트
      "벤츠|C클래스 아방가르드": "paint-benz-cclass-avantgarde-polar-white", // 폴라 화이트
      "벤츠|E클래스 아방가르드": "paint-benz-e-avantgarde-obsidian-black", // 옵시디안 블랙
      "벤츠|E클래스 익스클루시브": "paint-benz-e-exclusive-obsidian-black", // 옵시디안 블랙
      "벤츠|S클래스": "paint-benz-sclass-black", // 블랙
      "벤츠|G클래스": "paint-benz-gclass-polar-white", // 폴라 화이트
      "벤츠|AMG SL 로드스터": "paint-add-0051", // MANUFAKTUR 오팔라이트 화이트 브라이트
      "벤츠|EQA": "paint-add-0066", // 폴라 화이트
      "벤츠|EQB": "paint-add-0073", // 폴라 화이트
      "벤츠|EQE": "paint-add-0076", // 블랙
      "벤츠|EQS": "paint-add-0084", // 블랙
      "벤츠|AMG GT 43 쿠페": "paint-benz-amggt43-manufaktur-opalite-white-metallic", // MANUFAKTUR 오팔라이트 화이트 메탈릭
      "벤츠|AMG GT 55 쿠페": "paint-benz-amggt55-manufaktur-opalite-white-metallic", // MANUFAKTUR 오팔라이트 화이트 메탈릭
      "벤츠|AMG GT 63 S E 쿠페": "paint-benz-amggt63se-manufaktur-opalite-white-metallic", // MANUFAKTUR 오팔라이트 화이트 메탈릭
      "벤츠|CLA": "paint-add-0110", // 코스모스 블랙
      "벤츠|CLE AMG 카브리올레": "paint-benz-cle-amg-cabriolet-manufaktur-opalite-white-v2", // MANUFAKTUR 오팔라이트 화이트
      "벤츠|CLE AMG 쿠페": "paint-benz-cle-amg-coupe-manufaktur-opalite-white", // MANUFAKTUR 오팔라이트 화이트
      "벤츠|GLA": "paint-add-0113", // 폴라 화이트
      "벤츠|GLB": "paint-add-0119", // 폴라 화이트
      "벤츠|GLC": "paint-benz-glc-polar-white", // 폴라 화이트
      "벤츠|GLC 쿠페": "paint-benz-glc-coupe-avantgarde-polar-white", // 폴라 화이트
      "벤츠|GLE": "paint-add-0124", // MANUFAKTUR 오팔라이트 화이트 브라이트
      "벤츠|GLS": "paint-add-0134", // 폴라 화이트
      "벤츠|마이바흐 S클래스": "paint-add-0152", // 블랙
      "벤츠|마이바흐 GLS": "paint-add-0159", // MANUFAKTUR 오팔라이트 화이트 브라이트
      "벤츠|마이바흐 SL 모노그램 시리즈": "paint-add-0165", // MANUFAKTUR 가넷 레드 메탈릭
      "벤츠|마이바흐 EQS": "paint-add-0167", // MANUFAKTUR 오팔라이트 화이트
      // 아우디
      "아우디|A3": "paint-add-0262", // 글레이셔 화이트 메탈릭
      "아우디|A5": "paint-274", // 글레이셔 화이트 메탈릭
      "아우디|A6": "paint-286", // 미토스 블랙 메탈릭
      "아우디|Q3": "paint-add-0271", // 글레이셔 화이트 메탈릭
      "아우디|Q4 e-tron": "paint-add-0281", // 글레이셔 화이트 메탈릭
      "아우디|Q5": "paint-292", // 글레이셔 화이트 메탈릭
      "아우디|Q6 e-tron": "paint-add-0288", // 글레이셔 화이트 메탈릭
      "아우디|Q7": "paint-add-0294", // 글레이셔 화이트 메탈릭
      "아우디|SQ7": "paint-add-0303", // 글레이셔 화이트 메탈릭
      "아우디|Q8": "paint-add-0312", // 글레이셔 화이트 메탈릭
      "아우디|RS Q8": "paint-add-0321", // 글레이셔 화이트 메탈릭
      "아우디|e-tron": "paint-add-0333", // 카라라 화이트
      // 볼보
      "볼보|XC40 하이브리드": "paint-add-0359", // 크리스탈 화이트
      "볼보|XC60 하이브리드": "paint-254", // 크리스탈 화이트
      "볼보|XC90 하이브리드": "paint-262", // 크리스탈 화이트
      "볼보|S90": "paint-add-0341", // 오닉스 블랙
      "볼보|EX30": "paint-add-0345", // 크리스탈 화이트
      "볼보|EX90": "paint-add-0353", // 크리스탈 화이트
      // 테슬라
      "테슬라|모델3": "paint-302", // 스텔스 그레이
      "테슬라|모델Y": "paint-312", // 스텔스 그레이
      "테슬라|모델Y L": "paint-309", // 펄 화이트 멀티코트
      // 랜드로버
      "랜드로버|더 뉴 레인지로버": "paint-lr-01-15", // 아이시 화이트 글로스 피니시
      "랜드로버|디펜더 90": "paint-lr-04-06", // 후지 화이트
      "랜드로버|디펜더 110": "paint-lr-02-06", // 후지 화이트
      "랜드로버|디펜더 130": "paint-lr-03-06", // 후지 화이트
      // 폭스바겐
      "폭스바겐|ID.4": "paint-vw-01-02", // 글레이셔 화이트 메탈릭&블랙
      "폭스바겐|ID.5": "paint-vw-02-02", // 글레이셔 화이트 메탈릭
    }
  };
})();
