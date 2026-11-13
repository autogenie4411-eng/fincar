/*
 * 오토지니 할부용 옵션 선택 데이터 (2026-11 시안)
 * 차량명은 js/script.js의 vehicleCatalog와 정확하게 일치해야 합니다.
 * 가격이 없으면 null -> '가격 상담 시 확인'으로 표시합니다 (임의 금액 금지).
 * supports: 확인된 차종·트림만 표시, 다른 차종은 상담 요청으로 진행.
 * 출처: 제조사 공식 가격/견적 페이지 / 최신 연식·세부 구동 방식 확인 필요.
 */
(() => {
  "use strict";
  const Hyundai = 'https://www.hyundai.com/kr/ko/e/vehicles/the-new-grandeur/price';
  const Kia = 'https://www.kia.com/kr/vehicles/sportage/price/';
  const Genesis = 'https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g80/bto/packages?code=BDBBCGG&packages=PP1';
  const GenesisEV = 'https://www.genesis.com/kr/ko/shop/build/electrified-g80?code=BBBBBB&packages=DA1DA2';
  const Kgm = 'https://allways.kg-mobility.com/%EB%89%B4-%ED%86%A0%EB%A0%88%EC%8A%A4-%EA%B0%80%EC%86%94%EB%A6%B0%EA%B3%BC-%ED%95%98%EC%9D%B4%EB%B8%8C%EB%A6%AC%EB%93%9C%EB%82%98%EC%97%90%EA%B2%8C-%EC%96%B4%EC%9A%B8%EB%A6%AC%EB%8A%94/';
  const Renault = 'https://cdn.renault.co.kr/ko/model/koleos_overview.jsp';
  const Chevrolet = 'https://www.chevrolet.co.kr/content/dam/chevrolet/as/kr/ko/index/finance/type-price/2026/05-pdfs/2026%EB%85%84-5%EC%9B%94-%EC%A0%84%EC%B0%A8%EC%A2%85-%EA%B0%80%EA%B2%A9%ED%91%9C.pdf';
  const o = (id, name, cat, description, price=null, art='general', extra={}) => ({id,name,category:cat,description,price,art,...extra});
  const database = {
    '현대|그랜저': {
      source: Hyundai, sourceDate:'2026-10-01',
      match: ({trim,subTrim}) => trim.includes('2.5 가솔린') && ['프리미엄','익스클루시브','캘리그래피','캘리그래피 블랙 잉크'].includes(subTrim),
      options: ({subTrim}) => {
        const premium = subTrim === '프리미엄', exclusive = subTrim === '익스클루시브';
        const result = [
          o('gr-sunroof','파노라마 선루프','외관','넓은 글라스 루프로 실내 채광과 개방감을 높입니다.',1200000,'sunroof'),
          o('gr-cam','빌트인 캠 2 Plus','편의','차량에 통합된 전·후방 주행 기록 기능입니다.',650000,'camera')
        ];
        if(premium) result.push(
          o('gr-smart1','현대 스마트센스Ⅰ','안전','현대자동차 공식 가격표에 등록된 주행 안전 보조 패키지입니다.',1400000,'safety'),
          o('gr-parking','파킹 어시스트','안전','주차를 편리하게 돕는 보조 기능 패키지입니다.',1700000,'parking'),
          o('gr-choice','프리미엄 초이스','편의','트림에 추가 가능한 편의 패키지입니다.',1200000,'seat')
        );
        if(exclusive) result.push(
          o('gr-smart2','현대 스마트센스Ⅱ','안전','해당 트림 전용 스마트 안전 보조 패키지입니다.',1400000,'safety'),
          o('gr-bose','BOSE 프리미엄 사운드 패키지','편의','차량 실내 감상 환경을 강화하는 오디오 패키지입니다.',1200000,'sound'),
          o('gr-comfort','시트 컴포트Ⅰ','편의','탑승 편의를 높이는 시트 패키지입니다.',1200000,'seat')
        );
        if(!premium && !exclusive) result.push(
          o('gr-vision','스마트 비전 루프','외관','파노라마 선루프와 동시에 적용할 수 없는 루프 선택품목입니다.',1800000,'sunroof',{exclusiveGroup:'gr-roof'}),
          o('gr-seatplus','시트 컴포트 플러스','편의','추가 시트 편의 기능을 제공하는 패키지입니다.',1500000,'seat')
        );
        result.find(x=>x.id==='gr-sunroof').exclusiveGroup='gr-roof';
        return result;
      }
    },
    '기아|스포티지': {
      source:Kia, sourceDate:'제조사 온라인 가격표 (트림·파워트레인별 상이)',
      match:({subTrim})=>['프레스티지','노블레스','시그니처','시그니처 X-Line'].includes(subTrim),
      options:({subTrim})=>{
        const common=[
          o('sp-camera','빌트인 캠 2','편의','기아 공식 가격표에 안내된 빌트인 영상 기록 장치입니다.',null,'camera'),
          o('sp-sunroof','파노라마 선루프','외관','개방감 있는 실내를 만드는 루프 옵션입니다.',null,'sunroof'),
          o('sp-style','스타일','외관','차량 외관을 꾸미는 트림별 스타일 패키지입니다.',null,'wheel')
        ];
        if(subTrim!=='프레스티지') common.push(
          o('sp-driving','드라이브 와이즈','안전','기아의 첨단 운전자 보조 기술을 묶은 패키지입니다.',null,'safety'),
          o('sp-monitor','모니터링','안전','차량 주변 상황 확인과 주차 편의를 위한 패키지입니다.',null,'parking')
        );
        if(subTrim==='노블레스'||subTrim==='시그니처'||subTrim==='시그니처 X-Line') common.push(
          o('sp-krell','KRELL 프리미엄 사운드','편의','프리미엄 차량 오디오 시스템입니다.',null,'sound')
        );
        return common;
      },
      included:[o('sp-heat','1열 열선시트','편의','공식 가격표의 기본 사양입니다.',0,'seat')]
    },
    '제네시스|G80': {
      source:Genesis, sourceDate:'제네시스 공식 G80 BTO 예시 구성',
      match:({trim,subTrim})=>trim.includes('2.5 가솔린') && subTrim==='기본모델',
      options:()=>[
        o('g80-popular','파퓰러 패키지','편의','드라이빙 어시스턴스Ⅰ·Ⅱ 및 빌트인 캠 패키지를 묶은 구성입니다. 다른 개별 패키지와 중복 선택 불가.',4300000,'package',{includes:['g80-da1','g80-da2','g80-cam']}),
        o('g80-da1','드라이빙 어시스턴스 패키지 Ⅰ','안전','서라운드 뷰, 후측방 모니터, 주차거리 경고(측방), 원격 스마트 주차 보조 2 등을 포함합니다.',null,'parking',{coveredBy:'g80-popular'}),
        o('g80-da2','드라이빙 어시스턴스 패키지 Ⅱ','안전','고속도로 주행 보조 2, 전방 충돌방지 보조 2 등 주행 보조 기능을 지원합니다.',null,'safety',{coveredBy:'g80-popular'}),
        o('g80-cam','빌트인 캠 패키지','편의','차량 통합형 주행 영상 기록 패키지입니다.',null,'camera',{coveredBy:'g80-popular'}),
        o('g80-roof','파노라마 선루프','외관','실내 채광과 개방감을 더하는 루프 선택 사양입니다.',null,'sunroof')
      ]
    },
    '제네시스|일렉트리파이드 G80': {
      source:GenesisEV, sourceDate:'제네시스 공식 일렉트리파이드 G80 견적 페이지',
      match:()=>true,
      options:()=>[
        o('eg80-popular','파퓰러 패키지','편의','헤드업 디스플레이, 드라이빙 어시스턴스Ⅰ·Ⅱ, 빌트인 캠 패키지가 포함됩니다.',5400000,'package',{includes:['eg80-hud','eg80-da1','eg80-da2','eg80-cam']}),
        o('eg80-hud','헤드업 디스플레이','편의','주행 정보를 전방 시야에 표시합니다.',1300000,'display',{coveredBy:'eg80-popular'}),
        o('eg80-da1','드라이빙 어시스턴스 패키지 Ⅰ','안전','서라운드 뷰, 후측방 모니터, 주차 거리 경고 및 원격 스마트 주차 보조 등이 포함됩니다.',1950000,'parking',{coveredBy:'eg80-popular'}),
        o('eg80-da2','드라이빙 어시스턴스 패키지 Ⅱ','안전','전방 충돌방지 보조 2 및 고속도로 주행 보조 2 등 주행 보조 기능입니다.',2000000,'safety',{coveredBy:'eg80-popular'}),
        o('eg80-cam','빌트인 캠 패키지','편의','빌트인 캠 2 및 증강현실 내비게이션을 묶은 패키지입니다.',850000,'camera',{coveredBy:'eg80-popular'}),
        o('eg80-2row','2열 컴포트 패키지','편의','뒷좌석 전동·통풍 시트 및 뒷좌석 편의 사양을 강화합니다.',4500000,'seat')
      ]
    },
    'KGM|토레스': {
      source:Kgm, sourceDate:'KGM 공식 블로그, 2026 뉴 토레스 사양 안내',
      match:({subTrim})=>['T5','T7'].includes(subTrim),
      options:({subTrim})=>subTrim==='T5' ? [
        o('torres-nav','IACC·12.3인치 KGM 링크 내비게이션 패키지','안전','인텔리전트 어댑티브 크루즈 컨트롤과 내비게이션을 묶은 패키지입니다. 최신 T5 선택 가능 여부는 담당자가 확인합니다.',null,'safety'),
        o('torres-control','딥 컨트롤Ⅱ·스마트 파워 테일게이트 패키지','편의','후측방 경고·안전 하차 경고 및 스마트 파워 테일게이트를 묶은 구성입니다.',null,'trunk')
      ]:[
        o('torres-around','3D 어라운드 뷰 모니터링 시스템','안전','주변 상황을 시각적으로 확인하여 주차를 지원합니다.',null,'parking'),
        o('torres-sunroof','파노라마 선루프','외관','실내 개방감을 높이는 루프 선택 품목입니다.',null,'sunroof'),
        o('torres-conv','컨비니언스 패키지Ⅱ','편의','듀얼 휴대폰 무선충전, 디지털 키, 스마트 파워테일게이트 등을 포함합니다.',null,'trunk'),
        o('torres-interior','인테리어 패키지','외관','그레이 투톤 또는 브라운 인테리어 선택을 요청할 수 있습니다.',null,'seat')
      ]
    },
    'KGM|토레스 하이브리드': {
      source:Kgm, sourceDate:'KGM 공식 블로그 (사양 확인 후 최종 확정)',
      match:({subTrim})=>['T5','T7'].includes(subTrim),
      options:({subTrim})=>subTrim==='T5' ? [
        o('torresh-nav','IACC·12.3인치 KGM 링크 내비게이션 패키지','안전','어댑티브 크루즈 컨트롤과 내비게이션 사양을 상담 요청합니다.',null,'safety'),
        o('torresh-control','딥 컨트롤Ⅱ·스마트 파워 테일게이트 패키지','편의','주행 안전 보조와 테일게이트 편의 사양을 묶은 패키지입니다.',null,'trunk')
      ]:[
        o('torresh-around','3D 어라운드 뷰 모니터링 시스템','안전','차량 주변 주차 상황을 확인하는 옵션입니다.',null,'parking'),
        o('torresh-sunroof','파노라마 선루프','외관','채광과 실내 개방감을 높이는 루프 품목입니다.',null,'sunroof')
      ]
    },
    '르노|그랑 콜레오스 하이브리드 E-Tech': {
      source:Renault, sourceDate:'르노 공식 2026-06 가격 자료 / 차량 안내',
      match:({subTrim})=>['Iconic','Esprit Alpine'].includes(subTrim),
      options:({subTrim})=>[
        o('kol-sunroof','파노라마 선루프','외관','루프 글라스를 통한 개방감과 채광을 제공합니다.',1140000,'sunroof'),
        o('kol-bose','BOSE 프리미엄 사운드 + 액티브 노이즈 캔슬레이션','편의','10스피커 BOSE 시스템과 노이즈 캔슬레이션 기능을 묶었습니다.',1330000,'sound'),
        o('kol-hud','증강현실 헤드업 디스플레이 패키지','편의','AR-HUD 및 차음 윈드실드 글라스 등이 포함되며 트림에 따라 구성 차이가 있습니다.',subTrim==='Iconic'?1240000:1190000,'display')
      ]
    },
    '쉐보레|트랙스 크로스오버': {
      source:Chevrolet, sourceDate:'쉐보레 2026-05 공식 가격표 (세제 적용 가격)',
      match:({subTrim})=>['LS','Redline','ACTIV','RS'].includes(subTrim),
      options:({subTrim})=>{
        if(subTrim==='LS') return [o('tr-acc','어댑티브 크루즈 컨트롤','안전','앞차의 속도 변화에 따라 차간거리를 유지하며 주행을 보조합니다.',440000,'safety')];
        if(subTrim==='Redline') return [
          o('tr-red-acc','어댑티브 크루즈 컨트롤','안전','앞차와의 거리를 조절하는 운전자 보조 기능입니다.',440000,'safety'),
          o('tr-display','11인치 디스플레이 패키지','편의','8인치 컬러 클러스터와 11인치 터치스크린, 6스피커를 구성합니다.',690000,'display')
        ];
        const r=[
          o('tr-tech','테크놀로지 패키지','안전','어댑티브 크루즈 컨트롤과 파워 리프트게이트를 포함합니다.',790000,'safety'),
          o('tr-roof','선루프','외관','선루프를 추가하는 선택 사양입니다.',690000,'sunroof')
        ];
        if(subTrim==='RS') r.push(
          o('tr-ignite','이그나이트 에디션','외관','카본룩 외장 및 올웨더 라이너 등 GM 순정 액세서리 구성입니다.',350000,'wheel',{exclusiveGroup:'tr-edition'}),
          o('tr-midnight','미드나잇 에디션','외관','블랙 외장 디자인, 18인치 휠 및 주행 편의 옵션으로 구성됩니다.',790000,'wheel',{exclusiveGroup:'tr-edition'})
        );
        return r;
      },
      included:[o('tr-default','차체 자세 제어 및 전방 충돌 경고','안전','해당 차량에 기본으로 포함되는 안전 기능입니다.',0,'safety')]
    }
  };
  const artPaths={
    safety:'<path d="m32 9 20 8v13c0 14-9 23-20 29-11-6-20-15-20-29V17z"/><path d="m23 34 6 6 13-15"/>',
    parking:'<rect x="12" y="17" width="40" height="30" rx="7"/><path d="M18 17l5-9h18l5 9M12 30h40M20 47v7m24-7v7"/><circle cx="22" cy="38" r="2"/><circle cx="42" cy="38" r="2"/>',
    camera:'<rect x="12" y="19" width="40" height="28" rx="6"/><circle cx="32" cy="33" r="9"/><path d="M20 19l4-8h16l4 8M51 26h5"/>',
    sunroof:'<path d="M10 21 21 10h22l11 11v30H10z"/><path d="M21 10v28h22V10M10 38h44"/>',
    seat:'<path d="M21 12v19c0 6 5 10 11 10h20v7H22c-10 0-14-8-14-17V13M22 48v8M47 48v8"/>',
    sound:'<rect x="12" y="8" width="40" height="48" rx="5"/><circle cx="32" cy="38" r="12"/><circle cx="32" cy="19" r="4"/><circle cx="32" cy="38" r="4"/>',
    wheel:'<circle cx="32" cy="32" r="23"/><circle cx="32" cy="32" r="8"/><path d="M32 9v15m0 16v15M9 32h15m16 0h15M16 16l10 10m12 12 10 10M48 16 38 26M26 38 16 48"/>',
    display:'<rect x="7" y="14" width="50" height="35" rx="5"/><path d="M15 40l10-13 9 7 8-12 7 5M21 55h22"/>',
    trunk:'<path d="M12 22c1-6 5-9 12-9h16c7 0 11 3 12 9l4 21H8zM8 35h48M18 44v7m28-7v7M22 24h20"/>',
    package:'<rect x="11" y="15" width="42" height="39" rx="7"/><path d="M22 15v-4h20v4M21 30h22M32 20v21M26 34l5 5 9-10"/>',
    general:'<circle cx="32" cy="32" r="21"/><path d="M25 32l5 5 10-12"/>'
  };
  function picture(art='general'){
    return `<svg viewBox="0 0 64 64" role="img" aria-label="옵션 기능 아이콘" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5">${artPaths[art]||artPaths.general}</svg>`;
  }
  function get(selection){
    const key=`${selection.brandName||''}|${selection.carName||''}`;
    const entry=database[key];
    if(!entry || !selection.trim || !selection.subTrim || (entry.match && !entry.match(selection))) return {available: false, options: [], included:[], source: null};
    return {available:true, options:entry.options(selection), included:entry.included||[], source:entry.source, sourceDate:entry.sourceDate};
  }
  window.AutoGenieOptionCatalog = Object.freeze({get,picture});
})();
