/*
 * Copyright (c) 2026@박주가리교감 All rights reserved.
 * 모듈: 문맥 추론용 JSON 데이터베이스 (학년별 인지 발달 맞춤형 커리큘럼 적용)
 */

const vocabDatabase = [
    // --- [Level 1 (1~2학년 수준): 기초한자, 숫자, 자연, 일상표현] ---
    {
        id: "v_101", word: "일월", level: 1, subject: "자연",
        context: "하늘에 떠서 낮을 밝히는 해와 밤을 밝히는 달을 함께 묶어서 [ ? ](이)라고 부릅니다.",
        morphemes: [ { hanja: "日", meaning: "날(해) 일" }, { hanja: "月", meaning: "달 월" } ]
    },
    {
        id: "v_102", word: "산천", level: 1, subject: "자연",
        context: "높게 솟아오른 뫼와 맑은 물이 흐르는 내를 합쳐서 자연의 풍경인 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "山", meaning: "뫼 산" }, { hanja: "川", meaning: "내 천" } ]
    },
    {
        id: "v_103", word: "수목", level: 1, subject: "자연",
        context: "생물이 살아가는 데 꼭 필요한 물과 산에서 자라나는 나무를 합쳐서 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "水", meaning: "물 수" }, { hanja: "木", meaning: "나무 목" } ]
    },
    {
        id: "v_104", word: "남녀", level: 1, subject: "일상",
        context: "사내아이와 여자아이, 즉 성별이 다른 두 사람을 함께 묶어서 [ ? ](이)라고 부릅니다.",
        morphemes: [ { hanja: "男", meaning: "사내 남" }, { hanja: "女", meaning: "계집 녀" } ]
    },
    {
        id: "v_105", word: "상하", level: 1, subject: "기초",
        context: "물건이 놓인 위치를 말할 때, 기준보다 높은 위와 낮은 아래를 합쳐서 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "上", meaning: "윗 상" }, { hanja: "下", meaning: "아래 하" } ]
    },

    // --- [Level 2 (3~4학년 수준): 학교생활, 간단한 복합어, 음/뜻 조합] ---
    {
        id: "v_201", word: "학교", level: 2, subject: "학교생활",
        context: "학생들이 모여서 선생님에게 새로운 지식을 배우고 익히는 교육 공간을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "學", meaning: "배울 학" }, { hanja: "校", meaning: "학교 교" } ]
    },
    {
        id: "v_202", word: "교실", level: 2, subject: "학교생활",
        context: "학교 안에서 선생님이 학생들을 가르치고, 학생들이 모여서 공부를 하는 방을 [ ? ](이)라고 부릅니다.",
        morphemes: [ { hanja: "教", meaning: "가르칠 교" }, { hanja: "室", meaning: "방 실" } ]
    },
    {
        id: "v_203", word: "선생", level: 2, subject: "학교생활",
        context: "학문이나 지식을 나보다 먼저 깨우쳐서, 학교에서 나를 가르쳐 주시는 분을 [ ? ](이)라고 부릅니다.",
        morphemes: [ { hanja: "先", meaning: "먼저 선" }, { hanja: "生", meaning: "날 생" } ]
    },
    {
        id: "v_204", word: "학습", level: 2, subject: "학교생활",
        context: "새로운 지식을 배우고, 배운 것을 내 것으로 만들기 위해 반복해서 익히는 과정을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "學", meaning: "배울 학" }, { hanja: "習", meaning: "익힐 습" } ]
    },
    {
        id: "v_205", word: "독서", level: 2, subject: "학교생활",
        context: "새로운 지식이나 감동을 얻기 위해 책에 적힌 글을 소리 내거나 눈으로 읽는 활동을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "讀", meaning: "읽을 독" }, { hanja: "書", meaning: "글 서" } ]
    },

    // --- [Level 3 (5~6학년 수준): 문맥 속 의미 파악, 고사성어 및 교과 전문 용어] ---
    {
        id: "v_301", word: "일거양득", level: 3, subject: "한자성어",
        context: "한 번 들어서 두 가지를 얻는다는 뜻으로, 한 가지 일을 하여 두 가지 이익을 얻는 상황을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "一", meaning: "한 일" }, { hanja: "擧", meaning: "들 거" }, { hanja: "兩", meaning: "두 양" }, { hanja: "得", meaning: "얻을 득" } ]
    },
    {
        id: "v_302", word: "어부지리", level: 3, subject: "한자성어",
        context: "도요새와 조개가 다투는 틈을 타서 어부가 둘 다 잡았다는 뜻으로, 두 사람이 다투는 사이에 엉뚱한 제3자가 이익을 챙기는 상황을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "漁", meaning: "고기잡을 어" }, { hanja: "夫", meaning: "지아비 부" }, { hanja: "之", meaning: "갈 지" }, { hanja: "利", meaning: "이로울 리" } ]
    },
    {
        id: "v_303", word: "조삼모사", level: 3, subject: "한자성어",
        context: "아침에 세 개, 저녁에 네 개라는 뜻으로, 눈앞의 차이만 알고 결과가 같은 것을 모르는 어리석음을 비유하거나 얄팍한 꾀로 남을 속이는 상황을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "朝", meaning: "아침 조" }, { hanja: "三", meaning: "석 삼" }, { hanja: "暮", meaning: "저물 모" }, { hanja: "四", meaning: "넉 사" } ]
    },
    {
        id: "v_304", word: "매립지", level: 3, subject: "사회교과",
        context: "쓰레기나 폐기물 따위를 파묻는 땅이나, 강이나 바다를 흙으로 메워서 새로 만들어 낸 토지를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "埋", meaning: "묻을 매" }, { hanja: "立", meaning: "설 립" }, { hanja: "地", meaning: "땅 지" } ]
    },
    {
        id: "v_305", word: "자급자족", level: 3, subject: "사회교과",
        context: "다른 사람이나 나라에 의존하지 않고, 자기에게 필요한 물건이나 식량을 스스로 생산하여 충당하는 것을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "自", meaning: "스스로 자" }, { hanja: "給", meaning: "공급할 급" }, { hanja: "自", meaning: "스스로 자" }, { hanja: "足", meaning: "만족할 족" } ]
    },
    {
        id: "v_206", word: "교장", level: 2, subject: "학교생활",
        context: "학교를 대표하며, 학교의 모든 일과 선생님들을 이끌어 가시는 가장 어른이 되는 분을 [ ? ] 선생님(이)라고 합니다.",
        morphemes: [ { hanja: "教", meaning: "가르칠 교" }, { hanja: "長", meaning: "어른 장" } ]
    },
    {
        id: "v_207", word: "운동", level: 2, subject: "학교생활",
        context: "건강을 기르기 위해 몸을 단련하거나, 체육 시간에 규칙을 지키며 몸을 활발하게 움직이는 활동을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "運", meaning: "움직일 운" }, { hanja: "動", meaning: "움직일 동" } ]
    },
    {
        id: "v_208", word: "미술", level: 2, subject: "교과목",
        context: "그림을 그리거나 물건을 만들면서 아름다움을 표현하는 재주를 배우는 교과목을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "美", meaning: "아름다울 미" }, { hanja: "術", meaning: "재주 술" } ]
    },
    {
        id: "v_209", word: "음악", level: 2, subject: "교과목",
        context: "목소리나 악기에서 나는 소리를 통해 박자와 가락의 아름다움을 즐기고 배우는 교과목을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "音", meaning: "소리 음" }, { hanja: "樂", meaning: "노래 악(즐거울 락)" } ]
    },
    {
        id: "v_210", word: "과학", level: 2, subject: "교과목",
        context: "자연에서 일어나는 여러 가지 현상을 관찰하고 실험을 통해 그 원리를 체계적으로 배우는 학문을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "科", meaning: "과목 과" }, { hanja: "學", meaning: "배울 학" } ]
    },
    {
        id: "v_211", word: "수학", level: 2, subject: "교과목",
        context: "숫자를 계산하거나 도형의 성질을 논리적으로 따져서 문제를 해결하는 방법을 배우는 학문을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "數", meaning: "셈 수" }, { hanja: "學", meaning: "배울 학" } ]
    },
    {
        id: "v_212", word: "친구", level: 2, subject: "학교생활",
        context: "학교나 동네에서 오래전부터 가깝게 어울려 지내며 정이 든 사람을 [ ? ](이)라고 부릅니다.",
        morphemes: [ { hanja: "親", meaning: "친할 친" }, { hanja: "舊", meaning: "옛 구" } ]
    },
    {
        id: "v_213", word: "일기", level: 2, subject: "학교생활",
        context: "매일매일 하루 동안 겪은 일이나 그때의 생각과 느낌을 날짜와 함께 기록하는 글을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "日", meaning: "날 일" }, { hanja: "記", meaning: "기록할 기" } ]
    },
    {
        id: "v_214", word: "급식", level: 2, subject: "학교생활",
        context: "학교나 단체에서 사람들에게 필요한 식사를 마련하여 나누어 주는 것을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "給", meaning: "줄 급" }, { hanja: "食", meaning: "밥 식" } ]
    },
    {
        id: "v_215", word: "방학", level: 2, subject: "학교생활",
        context: "여름이나 겨울에 일정한 기간 동안 학교의 수업을 잠시 쉬고 학생들을 풀어주는 기간을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "放", meaning: "놓을 방" }, { hanja: "學", meaning: "배울 학" } ]
    },
    {
        id: "v_216", word: "체육", level: 2, subject: "교과목",
        context: "몸을 튼튼하게 단련하고 여러 가지 운동 규칙을 배우는 교과목을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "體", meaning: "몸 체" }, { hanja: "育", meaning: "기를 육" } ]
    },
    {
        id: "v_217", word: "등교", level: 2, subject: "학교생활",
        context: "아침에 일어나서 공부를 하기 위해 학교로 향해 가는 것을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "登", meaning: "오를 등" }, { hanja: "校", meaning: "학교 교" } ]
    },
    {
        id: "v_218", word: "하교", level: 2, subject: "학교생활",
        context: "학교에서 그날의 공부를 모두 마치고 집으로 돌아가는 것을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "下", meaning: "아래 하" }, { hanja: "校", meaning: "학교 교" } ]
    },
    {
        id: "v_219", word: "출석", level: 2, subject: "학교생활",
        context: "학교나 회의 같은 어떤 자리에 정해진 시간에 맞추어 나아가는 것을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "出", meaning: "날 출" }, { hanja: "席", meaning: "자리 석" } ]
    },
    {
        id: "v_220", word: "질문", level: 2, subject: "학습태도",
        context: "모르거나 의심나는 점을 알아내기 위해 선생님이나 친구에게 묻는 것을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "質", meaning: "바탕 질" }, { hanja: "問", meaning: "물을 문" } ]
    },
    {
        id: "v_221", word: "대답", level: 2, subject: "학습태도",
        context: "누군가 부르거나 묻는 말에 대하여 자신의 생각이나 정답을 말하는 것을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "對", meaning: "대답할 대" }, { hanja: "答", meaning: "대답할 답" } ]
    },
    {
        id: "v_222", word: "집중", level: 2, subject: "학습태도",
        context: "수업 시간에 딴생각을 하지 않고 마음이나 주의를 한 곳으로 모으는 것을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "集", meaning: "모을 집" }, { hanja: "中", meaning: "가운데 중" } ]
    },
    {
        id: "v_223", word: "노력", level: 2, subject: "학습태도",
        context: "어떤 목적을 이루기 위하여 몸과 마음을 다하여 힘을 쓰는 것을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "努", meaning: "힘쓸 노" }, { hanja: "力", meaning: "힘 력" } ]
    },
    {
        id: "v_224", word: "협동", level: 2, subject: "학교생활",
        context: "체육대회나 모둠 활동에서 서로 마음과 힘을 하나로 합쳐서 돕는 것을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "協", meaning: "화합할 협" }, { hanja: "同", meaning: "한가지 동" } ]
    },
    {
        id: "v_225", word: "질서", level: 2, subject: "학교생활",
        context: "복도에서 우측통행을 하거나 급식을 받을 때 차례를 지키는 등 여럿이 함께 지켜야 할 순서를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "秩", meaning: "차례 질" }, { hanja: "序", meaning: "차례 서" } ]
    },
    {
        id: "v_306", word: "민주주의", level: 3, subject: "사회교과",
        context: "국가의 주권이 국민에게 있고 국민을 위하여 정치를 행하는 제도를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "民", meaning: "백성 민" }, { hanja: "主", meaning: "주인 주" }, { hanja: "主", meaning: "주인 주" }, { hanja: "義", meaning: "옳을 의" } ]
    },
    {
        id: "v_307", word: "광합성", level: 3, subject: "과학교과",
        context: "식물이 빛 에너지를 이용하여 이산화 탄소와 물로부터 스스로 양분을 만들어 내는 과정을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "光", meaning: "빛 광" }, { hanja: "合", meaning: "합할 합" }, { hanja: "成", meaning: "이룰 성" } ]
    },
    {
        id: "v_308", word: "생태계", level: 3, subject: "과학교과",
        context: "어떤 지역 안에 사는 생물들이 자연환경과 서로 영향을 주고받으며 얽혀 있는 하나의 거대한 시스템을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "生", meaning: "날 생" }, { hanja: "態", meaning: "모양 태" }, { hanja: "界", meaning: "지경 계" } ]
    },
    {
        id: "v_309", word: "화석", level: 3, subject: "과학교과",
        context: "아주 오래전 지질 시대에 살던 동식물의 유해나 흔적이 지층 속에 단단하게 굳어져 남아 있는 것을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "化", meaning: "될 화" }, { hanja: "石", meaning: "돌 석" } ]
    },
    {
        id: "v_310", word: "문화재", level: 3, subject: "사회교과",
        context: "조상들이 남긴 건축물이나 예술품처럼 문화적 가치가 뛰어나 후손에게 물려주기 위해 보호해야 할 재산을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "文", meaning: "글월 문" }, { hanja: "化", meaning: "될 화" }, { hanja: "財", meaning: "재물 재" } ]
    },
    {
        id: "v_311", word: "선거", level: 3, subject: "사회교과",
        context: "국민이나 지역 주민이 자신들을 대표하여 국가나 지역의 일을 맡아할 사람을 투표로 뽑는 행위를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "選", meaning: "가릴 선" }, { hanja: "擧", meaning: "들 거" } ]
    },
    {
        id: "v_312", word: "권리", level: 3, subject: "사회교과",
        context: "개인이 어떤 일을 자유롭게 행하거나 타인에게 당연하게 요구할 수 있는 법적인 힘이나 자격을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "權", meaning: "권세 권" }, { hanja: "利", meaning: "이로울 리" } ]
    },
    {
        id: "v_313", word: "의무", level: 3, subject: "사회교과",
        context: "사람으로서 마땅히 해야 할 일이나, 법적으로 반드시 지켜서 따라야만 하는 구속을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "義", meaning: "옳을 의" }, { hanja: "務", meaning: "힘쓸 무" } ]
    },
    {
        id: "v_314", word: "화산", level: 3, subject: "과학교과",
        context: "땅속 깊은 곳에 있던 뜨거운 마그마가 지각의 얇고 약한 틈을 뚫고 지표면 위로 분출하여 만들어진 산을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "火", meaning: "불 화" }, { hanja: "山", meaning: "뫼 산" } ]
    },
    {
        id: "v_315", word: "지진", level: 3, subject: "과학교과",
        context: "지구 내부에 쌓여 있던 에너지가 갑자기 밖으로 나오면서 땅이 갈라지거나 심하게 흔들리는 자연재해를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "地", meaning: "땅 지" }, { hanja: "震", meaning: "떨 진" } ]
    },
    {
        id: "v_316", word: "다수결", level: 3, subject: "사회교과",
        context: "회의에서 의견이 여러 개로 나뉘어 합의가 어려울 때, 더 많은 사람이 찬성하는 쪽으로 결정을 내리는 원칙을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "多", meaning: "많을 다" }, { hanja: "數", meaning: "셈 수" }, { hanja: "決", meaning: "결단할 결" } ]
    },
    {
        id: "v_317", word: "마이동풍", level: 3, subject: "한자성어",
        context: "말의 귀에 동풍이 분다는 뜻으로, 남의 의견이나 충고를 전혀 귀담아듣지 않고 흘려버리는 태도를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "馬", meaning: "말 마" }, { hanja: "耳", meaning: "귀 이" }, { hanja: "東", meaning: "동녘 동" }, { hanja: "風", meaning: "바람 풍" } ]
    },
    {
        id: "v_318", word: "결초보은", level: 3, subject: "한자성어",
        context: "풀을 묶어서 은혜를 갚는다는 뜻으로, 죽어서라도 잊지 않고 기어이 은혜를 갚는다는 굳은 마음을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "結", meaning: "맺을 결" }, { hanja: "草", meaning: "풀 초" }, { hanja: "報", meaning: "갚을 보" }, { hanja: "恩", meaning: "은혜 은" } ]
    },
    {
        id: "v_319", word: "대기권", level: 3, subject: "과학교과",
        context: "지구를 둘러싸고 있는 공기층으로, 생명체가 숨을 쉬고 구름이나 비 같은 날씨 변화가 일어나는 범위를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "大", meaning: "큰 대" }, { hanja: "氣", meaning: "기운 기" }, { hanja: "圈", meaning: "우리 권" } ]
    },
    {
        id: "v_320", word: "태양계", level: 3, subject: "과학교과",
        context: "태양의 중력에 이끌려 태양을 중심으로 돌고 있는 행성, 위성, 혜성 등의 수많은 천체 무리를 통틀어 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "太", meaning: "클 태" }, { hanja: "陽", meaning: "볕 양" }, { hanja: "系", meaning: "이를 계(이어질 계)" } ]
    },
    {
        id: "v_321", word: "인권", level: 3, subject: "사회교과",
        context: "사람이라면 누구나 태어날 때부터 당연하게 누려야 할 존엄성과 기본적 권리를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "人", meaning: "사람 인" }, { hanja: "權", meaning: "권세 권" } ]
    },
    {
        id: "v_322", word: "경제", level: 3, subject: "사회교과",
        context: "인간 생활에 필요한 재화나 서비스를 생산하고, 이를 분배하며 소비하는 모든 물질적 활동을 통틀어 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "經", meaning: "다스릴 경" }, { hanja: "濟", meaning: "구할 제" } ]
    },
    {
        id: "v_323", word: "수출", level: 3, subject: "사회교과",
        context: "우리나라에서 만든 물건이나 기술을 다른 나라의 시장에 내다 파는 경제 활동을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "輸", meaning: "보낼 수" }, { hanja: "出", meaning: "날 출" } ]
    },
    {
        id: "v_324", word: "수입", level: 3, subject: "사회교과",
        context: "다른 나라에서 만든 물건이나 기술, 자원 등을 우리나라로 사들여 오는 경제 활동을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "輸", meaning: "보낼 수" }, { hanja: "入", meaning: "들 입" } ]
    },
    {
        id: "v_325", word: "증발", level: 3, subject: "과학교과",
        context: "물의 표면에서 물질이 액체 상태에서 기체 상태로 변하여 공기 중으로 날아가는 현상을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "蒸", meaning: "찔 증" }, { hanja: "發", meaning: "필 발" } ]
    },
    {
        id: "v_326", word: "헌법", level: 3, subject: "사회교과",
        context: "국가의 통치 조직과 운영 원리를 정하고 국민의 기본권을 보장하는, 한 나라의 최고 상위 법을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "憲", meaning: "법 헌" }, { hanja: "法", meaning: "법 법" } ]
    },
    {
        id: "v_327", word: "주권", level: 3, subject: "사회교과",
        context: "국가의 의사를 최종적으로 결정하는 절대적이고 독립적인 권력으로, 민주주의 국가에서는 국민에게 있는 이 권리를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "主", meaning: "주인 주" }, { hanja: "權", meaning: "권세 권" } ]
    },
    {
        id: "v_328", word: "국회", level: 3, subject: "사회교과",
        context: "국민이 선거를 통해 뽑은 대표들이 모여서 나라의 법을 만들고 중요한 정책을 결정하는 국가 기관을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "國", meaning: "나라 국" }, { hanja: "會", meaning: "모일 회" } ]
    },
    {
        id: "v_329", word: "평등", level: 3, subject: "사회교과",
        context: "신분, 성별, 재산 등의 조건에 의해 차별받지 않고 모든 사람의 권리나 대우가 고르고 한결같은 상태를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "平", meaning: "평평할 평" }, { hanja: "等", meaning: "무리 등(같을 등)" } ]
    },
    {
        id: "v_330", word: "외교", level: 3, subject: "사회교과",
        context: "국가의 이익을 위해 평화적인 방법으로 다른 나라와 정치적, 경제적, 문화적 관계를 맺는 활동을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "外", meaning: "바깥 외" }, { hanja: "交", meaning: "사귈 교" } ]
    },
    {
        id: "v_331", word: "연소", level: 3, subject: "과학교과",
        context: "물질이 산소와 빠르게 결합하면서 스스로 빛과 열을 내며 타는 화학 반응 현상을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "燃", meaning: "탈 연" }, { hanja: "燒", meaning: "탈 소" } ]
    },
    {
        id: "v_332", word: "용해", level: 3, subject: "과학교과",
        context: "소금이 물에 녹는 것처럼, 두 가지 이상의 물질이 고르게 섞여서 투명한 액체 상태로 변하는 현상을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "溶", meaning: "녹을 용" }, { hanja: "解", meaning: "풀 해" } ]
    },
    {
        id: "v_333", word: "지층", level: 3, subject: "과학교과",
        context: "오랜 시간 동안 자갈, 모래, 진흙 등이 물과 바람에 의해 운반되어 바닥에 층층이 쌓여 굳어진 암석의 나열을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "地", meaning: "땅 지" }, { hanja: "層", meaning: "층 층" } ]
    },
    {
        id: "v_334", word: "해류", level: 3, subject: "과학교과",
        context: "바닷물이 일정한 방향과 속도를 가지고 바다 위를 마치 강물처럼 끊임없이 이동하는 현상을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "海", meaning: "바다 해" }, { hanja: "流", meaning: "흐를 류" } ]
    },
    {
        id: "v_335", word: "기압", level: 3, subject: "과학교과",
        context: "지구를 둘러싸고 있는 공기가 무게로 인해 지표면의 모든 방향으로 누르고 있는 힘을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "氣", meaning: "기운 기" }, { hanja: "壓", meaning: "누를 압" } ]
    },
    {
        id: "v_336", word: "자력", level: 3, subject: "과학교과",
        context: "자석의 양극 사이에서 서로 끌어당기거나 밀어내며 쇠붙이를 달라붙게 만드는 보이지 않는 힘을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "磁", meaning: "자석 자" }, { hanja: "力", meaning: "힘 력" } ]
    },
    {
        id: "v_337", word: "유비무환", level: 3, subject: "한자성어",
        context: "미리 준비가 되어 있으면 나중에 근심할 일이 없다는 뜻으로, 다가올 위험을 사전에 철저히 대비하는 태도를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "有", meaning: "있을 유" }, { hanja: "備", meaning: "갖출 비" }, { hanja: "無", meaning: "없을 무" }, { hanja: "患", meaning: "근심 환" } ]
    },
    {
        id: "v_338", word: "역지사지", level: 3, subject: "한자성어",
        context: "처지를 서로 바꾸어 생각한다는 뜻으로, 자기 중심적인 생각에서 벗어나 상대방의 입장에서 상황을 헤아려보는 것을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "易", meaning: "바꿀 역" }, { hanja: "地", meaning: "땅 지" }, { hanja: "思", meaning: "생각할 사" }, { hanja: "之", meaning: "갈 지" } ]
    },
    {
        id: "v_339", word: "동문서답", level: 3, subject: "한자성어",
        context: "동쪽을 묻는데 서쪽을 대답한다는 뜻으로, 묻는 말의 요지를 파악하지 못하고 전혀 엉뚱한 대답을 하는 상황을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "東", meaning: "동녘 동" }, { hanja: "問", meaning: "물을 문" }, { hanja: "西", meaning: "서녘 서" }, { hanja: "答", meaning: "대답할 답" } ]
    },
    {
        id: "v_340", word: "다다익선", level: 3, subject: "한자성어",
        context: "많으면 많을수록 더욱 좋다는 뜻으로, 물건이나 사람의 수가 부족한 것보다 풍부한 것이 유리함을 뜻하는 말을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "多", meaning: "많을 다" }, { hanja: "多", meaning: "많을 다" }, { hanja: "益", meaning: "더할 익" }, { hanja: "善", meaning: "착할 선(좋을 선)" } ]
    },
    {
        id: "v_341", word: "이심전심", level: 3, subject: "한자성어",
        context: "마음과 마음으로 서로 뜻이 통한다는 뜻으로, 굳이 말이나 글로 표현하지 않아도 서로의 생각을 깊이 이해하는 상태를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "以", meaning: "써 이" }, { hanja: "心", meaning: "마음 심" }, { hanja: "傳", meaning: "전할 전" }, { hanja: "心", meaning: "마음 심" } ]
    },
    {
        id: "v_342", word: "온고지신", level: 3, subject: "한자성어",
        context: "옛것을 익히고 그것을 미루어 새것을 안다는 뜻으로, 과거의 전통과 역사에서 교훈을 얻어 새로운 지혜를 창조하는 태도를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "溫", meaning: "따뜻할 온(익힐 온)" }, { hanja: "故", meaning: "옛 고" }, { hanja: "知", meaning: "알 지" }, { hanja: "新", meaning: "새 신" } ]
    },
    {
        id: "v_343", word: "새옹지마", level: 3, subject: "한자성어",
        context: "변방에 사는 노인의 말이라는 뜻으로, 인생의 좋은 일과 나쁜 일은 변화가 많아 미리 예측할 수 없음을 비유하는 말을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "塞", meaning: "변방 새" }, { hanja: "翁", meaning: "늙은이 옹" }, { hanja: "之", meaning: "갈 지" }, { hanja: "馬", meaning: "말 마" } ]
    },
    {
        id: "v_344", word: "대기만성", level: 3, subject: "한자성어",
        context: "큰 그릇은 늦게 이루어진다는 뜻으로, 크게 될 인물은 오랜 시간 동안 많은 시련과 노력을 거친 후에야 비로소 뛰어난 성과를 이룬다는 것을 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "大", meaning: "큰 대" }, { hanja: "器", meaning: "그릇 기" }, { hanja: "晩", meaning: "늦을 만" }, { hanja: "成", meaning: "이룰 성" } ]
    },
    {
        id: "v_345", word: "인과응보", level: 3, subject: "한자성어",
        context: "원인과 결과가 서로 호응하여 갚는다는 뜻으로, 좋은 일을 하면 좋은 결과가 오고 나쁜 일을 하면 나쁜 결과가 따른다는 자연의 이치를 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "因", meaning: "인할 인" }, { hanja: "果", meaning: "열매 과" }, { hanja: "應", meaning: "응할 응" }, { hanja: "報", meaning: "갚을 보" } ]
    }






,
// --- [추가 확장 문항: 품(무학년제/기초) + 꿈(교과연계)] ---
{
    id: "pum_add_001", word: "수량", level: 1, subject: "숫자/양",
    context: "상자에 들어 있는 연필의 [ ? ]을(를) 세어 보자.",
    morphemes: [ { hanja: "數", meaning: "셀 수" }, { hanja: "量", meaning: "헤아릴 량" } ]
},
{
    id: "pum_add_002", word: "합계", level: 1, subject: "숫자/양",
    context: "여러 번 더한 값의 [ ? ]을(를) 구해 보자.",
    morphemes: [ { hanja: "合", meaning: "합할 합" }, { hanja: "計", meaning: "셀 계" } ]
},
{
    id: "pum_add_003", word: "평균", level: 1, subject: "숫자/양",
    context: "여러 수를 똑같이 나눈 값은 [ ? ]이라고 해.",
    morphemes: [ { hanja: "平", meaning: "평평할 평" }, { hanja: "均", meaning: "고를 균" } ]
},
{
    id: "pum_add_004", word: "비교", level: 1, subject: "숫자/양",
    context: "두 수의 크기를 [ ? ]해 보면 어느 쪽이 큰지 알 수 있어.",
    morphemes: [ { hanja: "比", meaning: "견줄 비" }, { hanja: "較", meaning: "견줄 교" } ]
},
{
    id: "pum_add_005", word: "차이", level: 1, subject: "숫자/양",
    context: "두 값의 [ ? ]를 알아보면 얼마나 다른지 알 수 있어.",
    morphemes: [ { hanja: "差", meaning: "다를 차" }, { hanja: "異", meaning: "다를 이" } ]
},
{
    id: "pum_add_006", word: "증가", level: 1, subject: "숫자/양",
    context: "사람 수가 점점 [ ? ]하고 있어.",
    morphemes: [ { hanja: "增", meaning: "더할 증" }, { hanja: "加", meaning: "더할 가" } ]
},
{
    id: "pum_add_007", word: "감소", level: 1, subject: "숫자/양",
    context: "비가 그치자 물이 조금씩 [ ? ]했어.",
    morphemes: [ { hanja: "減", meaning: "덜 감" }, { hanja: "少", meaning: "적을 소" } ]
},
{
    id: "pum_add_008", word: "자연", level: 1, subject: "자연/날씨",
    context: "산과 들처럼 사람이 만들지 않은 것은 [ ? ]이야.",
    morphemes: [ { hanja: "自", meaning: "스스로 자" }, { hanja: "然", meaning: "그럴 연" } ]
},
{
    id: "pum_add_009", word: "계절", level: 1, subject: "자연/날씨",
    context: "봄·여름·가을·겨울을 합쳐 [ ? ]이라고 해.",
    morphemes: [ { hanja: "季", meaning: "철 계" }, { hanja: "節", meaning: "마디 절" } ]
},
{
    id: "pum_add_010", word: "약속", level: 1, subject: "학교생활",
    context: "시간을 지키기로 한 [ ? ]을(를) 꼭 지켜야 해.",
    morphemes: [ { hanja: "約", meaning: "맺을 약" }, { hanja: "束", meaning: "묶을 속" } ]
},
{
    id: "pum_add_011", word: "안전", level: 1, subject: "학교생활",
    context: "횡단보도를 건널 때 [ ? ]이(가) 가장 중요해.",
    morphemes: [ { hanja: "安", meaning: "편안할 안" }, { hanja: "全", meaning: "온전할 전" } ]
},
{
    id: "pum_add_012", word: "정리", level: 1, subject: "학교생활",
    context: "수업이 끝나면 책상을 [ ? ]하자.",
    morphemes: [ { hanja: "整", meaning: "가지런할 정" }, { hanja: "理", meaning: "다스릴 리" } ]
},
{
    id: "kkum_add_001", word: "관찰", level: 2, subject: "과학",
    context: "돋보기로 잎의 모양을 자세히 보는 것은 [ ? ]이야.",
    morphemes: [ { hanja: "觀", meaning: "볼 관" }, { hanja: "察", meaning: "살필 찰" } ]
},
{
    id: "kkum_add_002", word: "실험", level: 2, subject: "과학",
    context: "가설이 맞는지 확인하기 위해 [ ? ]을(를) 했어.",
    morphemes: [ { hanja: "實", meaning: "열매 실" }, { hanja: "驗", meaning: "시험할 험" } ]
},
{
    id: "kkum_add_003", word: "결과", level: 2, subject: "과학",
    context: "씨앗을 심고 난 뒤 생긴 [ ? ]를 기록했어.",
    morphemes: [ { hanja: "結", meaning: "맺을 결" }, { hanja: "果", meaning: "열매 과" } ]
},
{
    id: "kkum_add_004", word: "원인", level: 2, subject: "과학",
    context: "문제가 생긴 [ ? ]을(를) 찾아보자.",
    morphemes: [ { hanja: "原", meaning: "근원 원" }, { hanja: "因", meaning: "인할 인" } ]
},
{
    id: "kkum_add_005", word: "변화", level: 2, subject: "과학",
    context: "얼음이 물로 바뀌는 것은 상태의 [ ? ]야.",
    morphemes: [ { hanja: "變", meaning: "변할 변" }, { hanja: "化", meaning: "될 화" } ]
},
{
    id: "kkum_add_006", word: "문화", level: 2, subject: "사회",
    context: "나라와 지역마다 다른 생활 모습을 [ ? ]라고 해.",
    morphemes: [ { hanja: "文", meaning: "글월 문" }, { hanja: "化", meaning: "될 화" } ]
},
{
    id: "kkum_add_007", word: "규칙", level: 2, subject: "사회",
    context: "운동장에서는 [ ? ]을(를) 지켜야 모두가 안전해.",
    morphemes: [ { hanja: "規", meaning: "법 규" }, { hanja: "則", meaning: "법칙 칙" } ]
},
{
    id: "kkum_add_008", word: "협력", level: 2, subject: "사회",
    context: "함께 힘을 모으는 것을 [ ? ]이라고 해.",
    morphemes: [ { hanja: "協", meaning: "도울 협" }, { hanja: "力", meaning: "힘 력" } ]
},
{
    id: "kkum_add_009", word: "책임", level: 2, subject: "도덕",
    context: "맡은 일을 끝까지 하는 것은 [ ? ]이야.",
    morphemes: [ { hanja: "責", meaning: "꾸짖을 책" }, { hanja: "任", meaning: "맡길 임" } ]
},
{
    id: "kkum_add_010", word: "해결", level: 2, subject: "국어",
    context: "문제를 스스로 [ ? ]하려고 노력했어.",
    morphemes: [ { hanja: "解", meaning: "풀 해" }, { hanja: "決", meaning: "결단할 결" } ]
}

];


/* =========================
 * PKHDATABASE (Schema v3) — 확장 가능한 코스웨어 DB
 * - 기존 vocabDatabase를 유지하면서, 새 구조(window.PKHDATABASE)를 함께 제공합니다.
 * - 엔진은 PKHDATABASE가 있으면 이를 우선 사용합니다.
 * ========================= */
(function buildPKHDatabase(){
  const today = "2026-02-20";
  const mapLevelKey = (n) => (n===1?"pum":(n===2?"kkum":"him"));

  const subjectToPack = (levelKey, subject) => {
    const s = String(subject||"").trim();
    if (levelKey==="pum") {
      if (/(숫자|양|수학)/.test(s)) return "pum-num";
      if (/(자연|날씨)/.test(s)) return "pum-nat";
      if (/(학교|생활)/.test(s)) return "pum-life";
      return "pum-mix";
    }
    if (levelKey==="kkum") {
      if (/(과학)/.test(s)) return "kkum-sci";
      if (/(사회)/.test(s)) return "kkum-soc";
      if (/(도덕)/.test(s)) return "kkum-mor";
      return "kkum-lang";
    }
    if (/(사회)/.test(s)) return "him-soc";
    if (/(과학)/.test(s)) return "him-sci";
    if (/(국어|언어|사고)/.test(s)) return "him-think";
    return "him-mix";
  };

  const normHanja = (h) => {
    const map = { "敎":"教", "兩":"兩" };
    return String(h||"").split("").map(ch => map[ch] || ch).join("");
  };

  const lexicon = {};
  (Array.isArray(vocabDatabase) ? vocabDatabase : []).forEach(it => {
    (it.morphemes||[]).forEach(m => {
      const hj = normHanja(m.hanja);
      if (!hj) return;
      if (!lexicon[hj]) {
        lexicon[hj] = { hanja: hj, meaning: m.meaning || "", reading: "", gradeHint: "" };
      } else if (!lexicon[hj].meaning && m.meaning) {
        lexicon[hj].meaning = m.meaning;
      }
    });
  });

  const levels = {
    pum: { key:"pum", label:"품", gradeBand:"무학년~2", minLen:10, maxLen:16, targetItems:150 },
    kkum:{ key:"kkum",label:"꿈", gradeBand:"3~4",   minLen:14, maxLen:22, targetItems:180 },
    him: { key:"him", label:"힘", gradeBand:"5~6",   minLen:18, maxLen:30, targetItems:180 }
  };

  const packs = [
    { id:"pum-num", level:"pum", title:"품-숫자/양", tags:["number","quantity"] },
    { id:"pum-nat", level:"pum", title:"품-자연/날씨", tags:["nature","weather"] },
    { id:"pum-life",level:"pum", title:"품-학교/생활", tags:["school","life"] },
    { id:"pum-mix", level:"pum", title:"품-기초 혼합", tags:["mixed"] },
    { id:"kkum-sci", level:"kkum", title:"꿈-과학", tags:["science"] },
    { id:"kkum-soc", level:"kkum", title:"꿈-사회", tags:["social"] },
    { id:"kkum-mor", level:"kkum", title:"꿈-도덕", tags:["moral"] },
    { id:"kkum-lang",level:"kkum", title:"꿈-국어/표현", tags:["language"] },
    { id:"him-sci", level:"him", title:"힘-과학/기술", tags:["science","tech"] },
    { id:"him-soc", level:"him", title:"힘-사회/공동체", tags:["social","civics"] },
    { id:"him-think",level:"him", title:"힘-사고/논리", tags:["thinking","abstract"] },
    { id:"him-mix", level:"him", title:"힘-심화 혼합", tags:["mixed"] },
  ,
// --- [v3.3 확장 문항: 품(저학년) 1글자 한자어(숫자/자연)] ---
{
    id: "pum_num_001", word: "일", level: 1, subject: "숫자(1글자)",
    context: "수 세기에서 가장 처음 오는 수는 [ ? ]이야.",
    morphemes: [ { hanja: "一", meaning: "한 일" } ]
},
{
    id: "pum_num_002", word: "이", level: 1, subject: "숫자(1글자)",
    context: "[ ? ]는 하나 다음에 오는 수야.",
    morphemes: [ { hanja: "二", meaning: "두 이" } ]
},
{
    id: "pum_num_003", word: "삼", level: 1, subject: "숫자(1글자)",
    context: "[ ? ]은(는) 둘 다음에 오는 수야.",
    morphemes: [ { hanja: "三", meaning: "석 삼" } ]
},
{
    id: "pum_num_004", word: "사", level: 1, subject: "숫자(1글자)",
    context: "[ ? ]는 셋 다음에 오는 수야.",
    morphemes: [ { hanja: "四", meaning: "넉 사" } ]
},
{
    id: "pum_num_005", word: "오", level: 1, subject: "숫자(1글자)",
    context: "손가락은 한 손에 [ ? ]개가 있어.",
    morphemes: [ { hanja: "五", meaning: "다섯 오" } ]
},
{
    id: "pum_num_006", word: "육", level: 1, subject: "숫자(1글자)",
    context: "주사위의 가장 큰 눈은 [ ? ]이야.",
    morphemes: [ { hanja: "六", meaning: "여섯 육" } ]
},
{
    id: "pum_num_007", word: "칠", level: 1, subject: "숫자(1글자)",
    context: "일주일은 [ ? ]일이야.",
    morphemes: [ { hanja: "七", meaning: "일곱 칠" } ]
},
{
    id: "pum_num_008", word: "팔", level: 1, subject: "숫자(1글자)",
    context: "거미는 다리가 [ ? ]개야.",
    morphemes: [ { hanja: "八", meaning: "여덟 팔" } ]
},
{
    id: "pum_num_009", word: "구", level: 1, subject: "숫자(1글자)",
    context: "열 바로 전의 수는 [ ? ]야.",
    morphemes: [ { hanja: "九", meaning: "아홉 구" } ]
},
{
    id: "pum_num_010", word: "십", level: 1, subject: "숫자(1글자)",
    context: "[ ? ]은 한 자리 수 중 가장 큰 수야.",
    morphemes: [ { hanja: "十", meaning: "열 십" } ]
},
{
    id: "pum_num_011", word: "백", level: 1, subject: "숫자(1글자)",
    context: "[ ? ]은 100을 뜻해.",
    morphemes: [ { hanja: "百", meaning: "일백 백" } ]
},
{
    id: "pum_num_012", word: "천", level: 1, subject: "숫자(1글자)",
    context: "[ ? ]은 1000을 뜻해.",
    morphemes: [ { hanja: "千", meaning: "일천 천" } ]
},
{
    id: "pum_num_013", word: "만", level: 1, subject: "숫자(1글자)",
    context: "[ ? ]은 10000을 뜻해.",
    morphemes: [ { hanja: "萬", meaning: "일만 만" } ]
},
{
    id: "pum_nat_001", word: "산", level: 1, subject: "자연(1글자)",
    context: "높게 솟아 있는 땅을 [ ? ]이라고 해.",
    morphemes: [ { hanja: "山", meaning: "뫼 산" } ]
},
{
    id: "pum_nat_002", word: "물", level: 1, subject: "자연(1글자)",
    context: "목이 마를 때 마시는 것은 [ ? ]이야.",
    morphemes: [ { hanja: "水", meaning: "물 수" } ]
},
{
    id: "pum_nat_003", word: "비", level: 1, subject: "자연(1글자)",
    context: "하늘에서 물방울이 떨어지는 것을 [ ? ]라고 해.",
    morphemes: [ { hanja: "雨", meaning: "비 우" } ]
},
{
    id: "pum_nat_004", word: "눈", level: 1, subject: "자연(1글자)",
    context: "겨울에 하늘에서 하얗게 내리는 것은 [ ? ]이야.",
    morphemes: [ { hanja: "雪", meaning: "눈 설" } ]
},
{
    id: "pum_nat_005", word: "바람", level: 1, subject: "자연(1글자)",
    context: "나뭇잎이 흔들리는 건 [ ? ] 때문이야.",
    morphemes: [ { hanja: "風", meaning: "바람 풍" } ]
},
{
    id: "pum_nat_006", word: "불", level: 1, subject: "자연(1글자)",
    context: "따뜻하게 해 주고 밝게 비추는 것은 [ ? ]이야.",
    morphemes: [ { hanja: "火", meaning: "불 화" } ]
},
{
    id: "pum_nat_007", word: "나무", level: 1, subject: "자연(1글자)",
    context: "숲에 많은 식물을 [ ? ]라고 해.",
    morphemes: [ { hanja: "木", meaning: "나무 목" } ]
},
{
    id: "pum_nat_008", word: "흙", level: 1, subject: "자연(1글자)",
    context: "식물이 자라기 위해 필요한 땅은 [ ? ]이야.",
    morphemes: [ { hanja: "土", meaning: "흙 토" } ]
},
{
    id: "pum_nat_009", word: "하늘", level: 1, subject: "자연(1글자)",
    context: "구름과 새가 있는 곳은 [ ? ]이야.",
    morphemes: [ { hanja: "天", meaning: "하늘 천" } ]
},
{
    id: "pum_nat_010", word: "땅", level: 1, subject: "자연(1글자)",
    context: "우리가 서 있는 곳은 [ ? ]야.",
    morphemes: [ { hanja: "地", meaning: "땅 지" } ]
},
{
    id: "pum_nat_011", word: "해", level: 1, subject: "자연(1글자)",
    context: "낮에 하늘을 밝히는 것은 [ ? ]야.",
    morphemes: [ { hanja: "日", meaning: "해 일" } ]
},
{
    id: "pum_nat_012", word: "달", level: 1, subject: "자연(1글자)",
    context: "밤하늘에서 밝게 보이는 것은 [ ? ]이야.",
    morphemes: [ { hanja: "月", meaning: "달 월" } ]
},
{
    id: "pum_nat_013", word: "별", level: 1, subject: "자연(1글자)",
    context: "밤하늘에 반짝이는 것은 [ ? ]이야.",
    morphemes: [ { hanja: "星", meaning: "별 성" } ]
},
{
    id: "pum_nat_014", word: "숲", level: 1, subject: "자연(1글자)",
    context: "나무가 많이 모인 곳을 [ ? ]이라고 해.",
    morphemes: [ { hanja: "林", meaning: "수풀 림" } ]
}

];

  const items = (Array.isArray(vocabDatabase)? vocabDatabase: []).map((it, idx) => {
    const levelKey = mapLevelKey(it.level);
    const packId = subjectToPack(levelKey, it.subject);
    const mor = (it.morphemes||[]).map(m => {
      const hj = normHanja(m.hanja);
      return hj ? { ref: hj } : { hanja:"", meaning:"" };
    }).filter(x => x.ref || x.hanja);

    const inferredHanja = (it.morphemes||[]).map(m => normHanja(m.hanja)).join("");
    const explainShort = (it.morphemes||[]).length
      ? (it.morphemes||[]).map(m => `${normHanja(m.hanja)}(${m.meaning||""})`).join(" + ")
      : "";

    return {
      id: it.id || (`legacy_${idx}`),
      legacyId: it.id || (`legacy_${idx}`),
      level: levelKey,
      packId,
      word: { ko: it.word || "", hanja: inferredHanja || "" },
      difficulty: Math.min(5, Math.max(1, Number(it.level)||1)),
      tags: [String(it.subject||"").trim()].filter(Boolean),
      skills: ["문맥추론","한자구조인식"],
      passage: { text: String(it.context||"").replace("[ ? ]","{ }"), blankPolicy:"hint" },
      morphemes: mor,
      answer: { accept: [String(it.word||"").trim()].filter(Boolean), aliases: [], reject: [] },
      explain: { short: explainShort ? (explainShort + " → 의미를 문맥에서 추론해요.") : "", examples: [] },
      source: { type:"legacy", note: String(it.subject||"") }
    };
  });

  window.PKHDATABASE = {
    meta: {
      schemaVersion: 3,
      contentVersion: "3.0.0",
      updatedAt: today,
      copyright: "2026@박주가리교감",
      description: "독해력 향상을 위한 한자어 문맥 추론 코스웨어 DB"
    },
    levels,
    packs,
    lexicon,
    items
  };
})();
