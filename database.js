/*
 * Copyright (c) 2026@박주가리교감 All rights reserved.
 * 모듈: 문맥 추론용 JSON 데이터베이스 (학년별 인지 발달 맞춤형 커리큘럼 적용 및 정규화 완료)
 */

const vocabDatabase = [
    // ==========================================
    // --- [Level 1 (1~2학년 수준): 기초한자, 숫자, 자연, 일상표현] ---
    // ==========================================
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
        context: "남자아이와 여자아이, 즉 성별이 다른 두 사람을 함께 묶어서 [ ? ](이)라고 부릅니다.",
        morphemes: [ { hanja: "男", meaning: "사내 남" }, { hanja: "女", meaning: "여자 녀" } ]
    },
    {
        id: "v_105", word: "상하", level: 1, subject: "기초",
        context: "물건이 놓인 위치를 말할 때, 기준보다 높은 위와 낮은 아래를 합쳐서 [ ? ](이)라고 합니다.",
        morphemes: [ { hanja: "上", meaning: "윗 상" }, { hanja: "下", meaning: "아래 하" } ]
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
    },

    // ==========================================
    // --- [Level 2 (3~4학년 수준): 학교생활, 간단한 복합어, 음/뜻 조합] ---
    // ==========================================
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
    },
    // 상향 조정된 수학/추상 어휘 (Level 1 -> 2)
    {
        id: "pum_add_001", word: "수량", level: 2, subject: "숫자/양",
        context: "상자에 들어 있는 연필의 [ ? ]을(를) 세어 보자.",
        morphemes: [ { hanja: "數", meaning: "셀 수" }, { hanja: "量", meaning: "헤아릴 량" } ]
    },
    {
        id: "pum_add_002", word: "합계", level: 2, subject: "숫자/양",
        context: "여러 번 더한 값의 [ ? ]을(를) 구해 보자.",
        morphemes: [ { hanja: "合", meaning: "합할 합" }, { hanja: "計", meaning: "셀 계" } ]
    },
    {
        id: "pum_add_004", word: "비교", level: 2, subject: "숫자/양",
        context: "두 수의 크기를 [ ? ]해 보면 어느 쪽이 큰지 알 수 있어.",
        morphemes: [ { hanja: "比", meaning: "견줄 비" }, { hanja: "較", meaning: "견줄 교" } ]
    },
    {
        id: "pum_add_005", word: "차이", level: 2, subject: "숫자/양",
        context: "두 값의 [ ? ]를 알아보면 얼마나 다른지 알 수 있어.",
        morphemes: [ { hanja: "差", meaning: "다를 차" }, { hanja: "異", meaning: "다를 이" } ]
    },

    // ==========================================
    // --- [Level 3 (5~6학년 수준): 문맥 속 의미 파악, 고사성어 및 교과 전문 용어] ---
    // ==========================================
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
    },
    // 상향 조정된 수학 어휘 (Level 1 -> 3)
    {
        id: "pum_add_003", word: "평균", level: 3, subject: "숫자/양",
        context: "여러 수를 똑같이 나눈 값은 [ ? ]이라고 해.",
        morphemes: [ { hanja: "平", meaning: "평평할 평" }, { hanja: "均", meaning: "고를 균" } ]
    },
    {
        id: "pum_add_006", word: "증가", level: 3, subject: "숫자/양",
        context: "사람 수가 점점 [ ? ]하고 있어.",
        morphemes: [ { hanja: "增", meaning: "더할 증" }, { hanja: "加", meaning: "더할 가" } ]
    },
    {
        id: "pum_add_007", word: "감소", level: 3, subject: "숫자/양",
        context: "비가 그치자 물이 조금씩 [ ? ]했어.",
        morphemes: [ { hanja: "減", meaning: "덜 감" }, { hanja: "少", meaning: "적을 소" } ]
    },
    {
        id: "tb_0001", word: "자상", level: 2, subject: "국어",
        context: "선생님의 [ ? ]한 설명을 들으니 쉽게 이해되었습니다.",
        morphemes: [ { hanja: "仔", meaning: "자세할 자" }, { hanja: "詳", meaning: "자세할 상" } ]
    },
    {
        id: "tb_0002", word: "작품", level: 2, subject: "국어",
        context: "미술시간에 찰흙으로 여러 가지 [ ? ]을 만들었습니다.",
        morphemes: [ { hanja: "作", meaning: "만들 작" }, { hanja: "品", meaning: "물건 품" } ]
    },
    {
        id: "tb_0003", word: "상상", level: 2, subject: "국어",
        context: "옛날에는 인간이 우주를 여행하리라고는 [ ? ]도 못하였습니다.",
        morphemes: [ { hanja: "想", meaning: "생각할 상" }, { hanja: "像", meaning: "모습 상" } ]
    },
    {
        id: "tb_0004", word: "흔적", level: 2, subject: "국어",
        context: "냉장고에 있던 내 아이스크림이 [ ? ]도 없이 사라졌습니다.",
        morphemes: [ { hanja: "痕", meaning: "흉터 흔" }, { hanja: "迹", meaning: "자취 적" } ]
    },
    {
        id: "tb_0005", word: "오색", level: 2, subject: "국어",
        context: "비단에 [ ? ] 실로 수를 놓았습니다.",
        morphemes: [ { hanja: "五", meaning: "다섯 오" }, { hanja: "色", meaning: "색깔 색" } ]
    },
    {
        id: "tb_0006", word: "파악", level: 2, subject: "국어",
        context: "낱말의 뜻을 [ ? ]하여 봅시다.",
        morphemes: [ { hanja: "把", meaning: "잡을 파" }, { hanja: "握", meaning: "잡을 악" } ]
    },
    {
        id: "tb_0007", word: "의지", level: 2, subject: "국어",
        context: "할머니와 할아버지는 서로 [ ? ]하며 오래오래 살았답니다.",
        morphemes: [ { hanja: "依", meaning: "기댈 의" }, { hanja: "支", meaning: "지탱할 지" } ]
    },
    {
        id: "tb_0008", word: "인정", level: 2, subject: "국어",
        context: "흥부는 마음씨가 착하고 [ ? ]이 많습니다.",
        morphemes: [ { hanja: "人", meaning: "사람 인" }, { hanja: "情", meaning: "마음 정" } ]
    },
    {
        id: "tb_0009", word: "성격", level: 2, subject: "국어",
        context: "놀부는 [ ? ]이 고약하여 마을 사람들이 미워하였습니다.",
        morphemes: [ { hanja: "性", meaning: "성품 성" }, { hanja: "格", meaning: "품격 격" } ]
    },
    {
        id: "tb_0010", word: "사전", level: 2, subject: "국어",
        context: "어려운 낱말의 뜻을 [ ? ]에서 찾아보았습니다.",
        morphemes: [ { hanja: "辭", meaning: "말씀 사" }, { hanja: "典", meaning: "책 전" } ]
    },
    {
        id: "tb_0011", word: "습기", level: 2, subject: "국어",
        context: "여름에는 [ ? ]가 많아서 몸이 끈적끈적합니다.",
        morphemes: [ { hanja: "濕", meaning: "축축할 습" }, { hanja: "氣", meaning: "기운 기" } ]
    },
    {
        id: "tb_0012", word: "체감", level: 2, subject: "국어",
        context: "겨울에 바람이 불면 [ ? ] 온도는 더욱 낮아집니다.",
        morphemes: [ { hanja: "體", meaning: "몸 체" }, { hanja: "感", meaning: "느낄 감" } ]
    },
    {
        id: "tb_0013", word: "사용", level: 2, subject: "국어",
        context: "올바른 국어[ ? ]을 위해 맞춤법을 개정하였습니다.",
        morphemes: [ { hanja: "使", meaning: "부릴 사" }, { hanja: "用", meaning: "쓸 용" } ]
    },
    {
        id: "tb_0014", word: "국립", level: 2, subject: "국어",
        context: "설악산은 [ ? ]공원으로 지정되어 있습니다.",
        morphemes: [ { hanja: "國", meaning: "나라 국" }, { hanja: "立", meaning: "세울 립" } ]
    },
    {
        id: "tb_0015", word: "오염", level: 2, subject: "국어",
        context: "환경[ ? ]을 막기 위해 다 같이 노력합시다.",
        morphemes: [ { hanja: "汚", meaning: "더러울 오" }, { hanja: "染", meaning: "물들일 염" } ]
    },
    {
        id: "tb_0016", word: "위기", level: 2, subject: "국어",
        context: "호랑이의 공격으로 아기 사슴에게 [ ? ]가 닥쳐왔습니다.",
        morphemes: [ { hanja: "危", meaning: "위험할 위" }, { hanja: "機", meaning: "때 기" } ]
    },
    {
        id: "tb_0017", word: "멸종", level: 2, subject: "국어",
        context: "인간이 [ ? ]된 다음에는 침팬지나 수달이 지구를 지배할까?",
        morphemes: [ { hanja: "滅", meaning: "없앨 멸" }, { hanja: "種", meaning: "씨 종" } ]
    },
    {
        id: "tb_0018", word: "목록", level: 2, subject: "국어",
        context: "내가 읽을 책의 [ ? ]을 작성하였습니다.",
        morphemes: [ { hanja: "目", meaning: "눈, 조목 목" }, { hanja: "錄", meaning: "기록할 록" } ]
    },
    {
        id: "tb_0019", word: "과정", level: 2, subject: "국어",
        context: "일의 결과보다 [ ? ]이 더욱 중요합니다.",
        morphemes: [ { hanja: "過", meaning: "지날 과" }, { hanja: "程", meaning: "정도 정" } ]
    },
    {
        id: "tb_0020", word: "성분", level: 2, subject: "국어",
        context: "우유의 [ ? ]을 조사하여 봅시다.",
        morphemes: [ { hanja: "成", meaning: "이룰 성" }, { hanja: "分", meaning: "부분 분" } ]
    },
    {
        id: "tb_0021", word: "분해", level: 2, subject: "국어",
        context: "아버지께서는 장난감을 [ ? ]하셨습니다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "解", meaning: "가를 해" } ]
    },
    {
        id: "tb_0022", word: "번식", level: 2, subject: "국어",
        context: "여름에는 세균들의 [ ? ]이 활발하여 음식물이 잘 상합니다.",
        morphemes: [ { hanja: "繁", meaning: "많을 번" }, { hanja: "殖", meaning: "불어날 식" } ]
    },
    {
        id: "tb_0023", word: "잡균", level: 2, subject: "국어",
        context: "어머니는 부엌 구석구석을 소독하여 [ ? ]을 없애셨습니다.",
        morphemes: [ { hanja: "雜", meaning: "섞일 잡" }, { hanja: "菌", meaning: "세균 균" } ]
    },
    {
        id: "tb_0024", word: "제거", level: 2, subject: "국어",
        context: "선생님과 함께 화단의 잡초를 [ ? ]하였습니다.",
        morphemes: [ { hanja: "除", meaning: "덜 제" }, { hanja: "去", meaning: "버릴 거" } ]
    },
    {
        id: "tb_0025", word: "표현", level: 2, subject: "국어",
        context: "곤충들은 소리나 냄새로 사랑을 [ ? ]합니다.",
        morphemes: [ { hanja: "表", meaning: "겉 표" }, { hanja: "現", meaning: "나타낼 현" } ]
    },
    {
        id: "tb_0026", word: "결승", level: 2, subject: "국어",
        context: "이번에 승리하면 [ ? ]에 진출합니다.",
        morphemes: [ { hanja: "決", meaning: "결정할 결" }, { hanja: "勝", meaning: "승리 승" } ]
    },
    {
        id: "tb_0027", word: "내용", level: 2, subject: "국어",
        context: "이 동화의 [ ? ]은 정말 감동적입니다.",
        morphemes: [ { hanja: "內", meaning: "안 내" }, { hanja: "容", meaning: "담을 용" } ]
    },
    {
        id: "tb_0028", word: "교탁", level: 2, subject: "국어",
        context: "청소 당번이 [ ? ]을 깨끗이 닦았습니다.",
        morphemes: [ { hanja: "敎", meaning: "가르칠 교" }, { hanja: "卓", meaning: "탁자 탁" } ]
    },
    {
        id: "tb_0029", word: "수상", level: 2, subject: "국어",
        context: "[ ? ]한 사람을 보면 경찰에 신고해야 합니다.",
        morphemes: [ { hanja: "殊", meaning: "다를 수" }, { hanja: "常", meaning: "일상 상" } ]
    },
    {
        id: "tb_0030", word: "화분", level: 2, subject: "국어",
        context: "[ ? ]에 강낭콩을 심어서 교실 창가에 두었습니다.",
        morphemes: [ { hanja: "花", meaning: "꽃 화" }, { hanja: "盆", meaning: "항아리 분" } ]
    },
    {
        id: "tb_0031", word: "의견", level: 2, subject: "국어",
        context: "자신의 [ ? ]을 큰 소리로 발표합시다.",
        morphemes: [ { hanja: "意", meaning: "뜻 의" }, { hanja: "見", meaning: "생각할 견" } ]
    },
    {
        id: "tb_0032", word: "소중", level: 2, subject: "국어",
        context: "서로 돕는 마음은 우리의 [ ? ]한 재산입니다.",
        morphemes: [ { hanja: "所", meaning: "바, 것 소" }, { hanja: "重", meaning: "중요할 중" } ]
    },
    {
        id: "tb_0033", word: "냉장", level: 2, subject: "국어",
        context: "채소를 [ ? ] 보관하면 더 오랫동안 먹을 수 있습니다.",
        morphemes: [ { hanja: "冷", meaning: "찰 랭" }, { hanja: "藏", meaning: "보관할 장" } ]
    },
    {
        id: "tb_0034", word: "분수", level: 2, subject: "국어",
        context: "시원스럽게 내뿜는 [ ? ]를 보니 기분이 정말 상쾌합니다.",
        morphemes: [ { hanja: "噴", meaning: "뿜을 분" }, { hanja: "水", meaning: "물 수" } ]
    },
    {
        id: "tb_0035", word: "작동", level: 2, subject: "국어",
        context: "내가 만든 로봇이 제대로 [ ? ]하니 정말 기뻤습니다.",
        morphemes: [ { hanja: "作", meaning: "만들다, 시작할 작" }, { hanja: "動", meaning: "움직일 동" } ]
    },
    {
        id: "tb_0036", word: "부분", level: 2, subject: "국어",
        context: "각 [ ? ]이 모여서 전체를 이룹니다.",
        morphemes: [ { hanja: "部", meaning: "나눌 부" }, { hanja: "分", meaning: "구별할 분" } ]
    },
    {
        id: "tb_0037", word: "체조", level: 2, subject: "국어",
        context: "나는 텔레비전에서 국가 대표 선수들의 [ ? ] 경기를 보았습니다.",
        morphemes: [ { hanja: "體", meaning: "몸 체" }, { hanja: "操", meaning: "움직일 조" } ]
    },
    {
        id: "tb_0038", word: "반복", level: 2, subject: "국어",
        context: "영호는 컴퓨터 타자를 [ ? ]하여 연습하였습니다.",
        morphemes: [ { hanja: "反", meaning: "되돌릴 반" }, { hanja: "復", meaning: "돌아올 복" } ]
    },
    {
        id: "tb_0039", word: "생일", level: 2, subject: "국어",
        context: "내 [ ? ]에 친구들을 초대하기로 하였습니다.",
        morphemes: [ { hanja: "生", meaning: "태어날 생" }, { hanja: "日", meaning: "날 일" } ]
    },
    {
        id: "tb_0040", word: "포장", level: 2, subject: "국어",
        context: "부모님께 드릴 선물을 정성껏 [ ? ]하였습니다.",
        morphemes: [ { hanja: "包", meaning: "쌀 포" }, { hanja: "裝", meaning: "꾸밀 장" } ]
    },
    {
        id: "tb_0041", word: "양면", level: 2, subject: "국어",
        context: "색종이의 [ ? ]에 풀칠을 하였습니다.",
        morphemes: [ { hanja: "兩", meaning: "두 량" }, { hanja: "面", meaning: "낯 면" } ]
    },
    {
        id: "tb_0042", word: "청소", level: 2, subject: "국어",
        context: "주말에 집안 구석구석을 [ ? ]하였습니다.",
        morphemes: [ { hanja: "淸", meaning: "맑을 청" }, { hanja: "掃", meaning: "쓸 소" } ]
    },
    {
        id: "tb_0043", word: "흡입", level: 2, subject: "국어",
        context: "숲에서 맑은 공기를 [ ? ]하면 머리가 맑아집니다.",
        morphemes: [ { hanja: "吸", meaning: "빨 흡" }, { hanja: "入", meaning: "들 입" } ]
    },
    {
        id: "tb_0044", word: "압정", level: 2, subject: "국어",
        context: "[ ? ]은 자석에 잘 달라붙습니다.",
        morphemes: [ { hanja: "押", meaning: "누를 압" }, { hanja: "釘", meaning: "못 정" } ]
    },
    {
        id: "tb_0045", word: "감전", level: 2, subject: "국어",
        context: "젖은 손으로 플러그를 만지면 [ ? ]되기 쉽습니다.",
        morphemes: [ { hanja: "感", meaning: "느낄 감" }, { hanja: "電", meaning: "전기 전" } ]
    },
    {
        id: "tb_0046", word: "전원", level: 2, subject: "국어",
        context: "[ ? ]을 연결하자 로봇이 작동하였습니다.",
        morphemes: [ { hanja: "電", meaning: "전기 전" }, { hanja: "源", meaning: "근원 원" } ]
    },
    {
        id: "tb_0047", word: "본체", level: 2, subject: "국어",
        context: "우리 집 컴퓨터의 [ ? ]가 고장이 났습니다.",
        morphemes: [ { hanja: "本", meaning: "기본 본" }, { hanja: "體", meaning: "몸 체" } ]
    },
    {
        id: "tb_0048", word: "구분", level: 2, subject: "국어",
        context: "우리 학급은 남녀 [ ? ] 없이 사이좋게 잘 지냅니다.",
        morphemes: [ { hanja: "區", meaning: "지경 구" }, { hanja: "分", meaning: "나눌 분" } ]
    },
    {
        id: "tb_0049", word: "종류", level: 2, subject: "국어",
        context: "문구점에는 여러 [ ? ]의 학용품이 있습니다.",
        morphemes: [ { hanja: "種", meaning: "갈래 종" }, { hanja: "類", meaning: "무리 류" } ]
    },
    {
        id: "tb_0050", word: "감탄", level: 2, subject: "국어",
        context: "요리사 아저씨의 빠른 손놀림에 모두가 [ ? ]하였습니다.",
        morphemes: [ { hanja: "感", meaning: "감동할 감" }, { hanja: "歎", meaning: "읊을 탄" } ]
    },
    {
        id: "tb_0051", word: "조화", level: 2, subject: "국어",
        context: "종이로 만든 꽃도 [ ? ], 플라스틱으로 만든 꽃도 조화구나!",
        morphemes: [ { hanja: "造", meaning: "만들 조" }, { hanja: "花", meaning: "꽃 화" } ]
    },
    {
        id: "tb_0052", word: "권유", level: 2, subject: "국어",
        context: "관리인이 사람들에게 잔디밭 밖으로 나가도록 [ ? ]하였습니다.",
        morphemes: [ { hanja: "勸", meaning: "권할 권" }, { hanja: "誘", meaning: "유도할 유" } ]
    },
    {
        id: "tb_0053", word: "예보", level: 2, subject: "국어",
        context: "눈이 많이 오겠다던 [ ? ]가 빗나갔습니다.",
        morphemes: [ { hanja: "豫", meaning: "미리 예" }, { hanja: "報", meaning: "알릴 보" } ]
    },
    {
        id: "tb_0054", word: "구별", level: 2, subject: "국어",
        context: "요즘 옷은 남녀의 [ ? ]이 없는 것이 많습니다.",
        morphemes: [ { hanja: "區", meaning: "나눌 구" }, { hanja: "別", meaning: "나눌 별" } ]
    },
    {
        id: "tb_0055", word: "낭비", level: 2, subject: "국어",
        context: "텔레비전을 너무 오래 보는 것은 시간 [ ? ]입니다.",
        morphemes: [ { hanja: "浪", meaning: "물결 낭" }, { hanja: "費", meaning: "쓸 비" } ]
    },
    {
        id: "tb_0056", word: "대상", level: 2, subject: "국어",
        context: "동요는 어린 아이들을 [ ? ]으로 한 노래입니다.",
        morphemes: [ { hanja: "對", meaning: "대할 대" }, { hanja: "象", meaning: "모습 상" } ]
    },
    {
        id: "tb_0057", word: "표지", level: 2, subject: "국어",
        context: "일기장의 [ ? ]를 예쁘게 꾸몄습니다.",
        morphemes: [ { hanja: "表", meaning: "겉 표" }, { hanja: "紙", meaning: "종이 지" } ]
    },
    {
        id: "tb_0058", word: "식량", level: 2, subject: "국어",
        context: "흥부는 [ ? ]을 구하러 형님을 찾아갔습니다.",
        morphemes: [ { hanja: "食", meaning: "먹을 식" }, { hanja: "糧", meaning: "양식 량" } ]
    },
    {
        id: "tb_0059", word: "용맹", level: 2, subject: "국어",
        context: "장군의 [ ? ]스런 모습에 병사들도 힘을 내었습니다.",
        morphemes: [ { hanja: "勇", meaning: "용감할 용" }, { hanja: "猛", meaning: "사나울 맹" } ]
    },
    {
        id: "tb_0060", word: "최선", level: 2, subject: "국어",
        context: "몸이 불편한 친구들을 돕기 위해 [ ? ]을 다했습니다.",
        morphemes: [ { hanja: "最", meaning: "가장 최" }, { hanja: "善", meaning: "좋을 선" } ]
    },
    {
        id: "tb_0061", word: "정직", level: 2, subject: "국어",
        context: "선생님께 나의 잘못을 [ ? ]하게 말씀드렸습니다.",
        morphemes: [ { hanja: "正", meaning: "바를 정" }, { hanja: "直", meaning: "곧을 직" } ]
    },
    {
        id: "tb_0062", word: "기호", level: 2, subject: "국어",
        context: "전화 번호 사이에는 ‘-’ [ ? ]를 붙입니다.",
        morphemes: [ { hanja: "記", meaning: "기록할 기" }, { hanja: "號", meaning: "부호 호" } ]
    },
    {
        id: "tb_0063", word: "만화", level: 2, subject: "국어",
        context: "요즘은 어려운 내용을 [ ? ]로 만들어 읽기 쉽게 한 책들이 매우 인기가 높습니다.",
        morphemes: [ { hanja: "漫", meaning: "마음대로 할 만" }, { hanja: "畵", meaning: "그림 화" } ]
    },
    {
        id: "tb_0064", word: "외식", level: 2, subject: "국어",
        context: "[ ? ]을 자주 하면 건강에 해롭습니다.",
        morphemes: [ { hanja: "外", meaning: "바깥 외" }, { hanja: "食", meaning: "먹을 식" } ]
    },
    {
        id: "tb_0065", word: "소풍", level: 2, subject: "국어",
        context: "우리 가족은 오는 일요일에 대공원으로 [ ? ]을 가기로 하였습니다.",
        morphemes: [ { hanja: "逍", meaning: "거닐 소" }, { hanja: "風", meaning: "바람 풍" } ]
    },
    {
        id: "tb_0066", word: "배낭", level: 2, subject: "국어",
        context: "아버지께서 멋진 등산 [ ? ]을 사오셨습니다.",
        morphemes: [ { hanja: "背", meaning: "등 배" }, { hanja: "囊", meaning: "주머니 낭" } ]
    },
    {
        id: "tb_0067", word: "수선", level: 2, subject: "국어",
        context: "어머니는 낡은 옷을 예쁘게 [ ? ]하셨습니다.",
        morphemes: [ { hanja: "修", meaning: "고칠 수" }, { hanja: "繕", meaning: "기울 선" } ]
    },
    {
        id: "tb_0068", word: "장기", level: 2, subject: "국어",
        context: "두더지의 [ ? ]는 땅굴파기입니다.",
        morphemes: [ { hanja: "長", meaning: "잘할 장" }, { hanja: "技", meaning: "재주 기" } ]
    },
    {
        id: "tb_0069", word: "망신", level: 2, subject: "국어",
        context: "수학을 동생보다도 못하다니 이게 무슨 [ ? ]이니?",
        morphemes: [ { hanja: "亡", meaning: "망할 망" }, { hanja: "身", meaning: "몸 신" } ]
    },
    {
        id: "tb_0070", word: "각오", level: 2, subject: "국어",
        context: "오늘의 [ ? ]를 잊지 말고 열심히 노력합시다.",
        morphemes: [ { hanja: "覺", meaning: "깨달을 각" }, { hanja: "悟", meaning: "깨달을 오" } ]
    },
    {
        id: "tb_0071", word: "명단", level: 2, subject: "국어",
        context: "언니는 합격자 [ ? ]에 있는 이름을 가리키며 기뻐하였습니다.",
        morphemes: [ { hanja: "名", meaning: "이름 명" }, { hanja: "單", meaning: "홑, 표 단" } ]
    },
    {
        id: "tb_0072", word: "소동", level: 2, subject: "국어",
        context: "갑자기 비가 쏟아져 한바탕 [ ? ]이 벌어졌습니다.",
        morphemes: [ { hanja: "騷", meaning: "떠들 소" }, { hanja: "動", meaning: "움직일 동" } ]
    },
    {
        id: "tb_0073", word: "세배", level: 2, subject: "국어",
        context: "설날 아침 부모님께 [ ? ]를 드렸습니다.",
        morphemes: [ { hanja: "歲", meaning: "해 세" }, { hanja: "拜", meaning: "절 배" } ]
    },
    {
        id: "tb_0074", word: "전설", level: 2, subject: "국어",
        context: "이 연못에는 선녀가 내려와 목욕을 했다는 [ ? ]이 내려옵니다.",
        morphemes: [ { hanja: "傳", meaning: "전할 전" }, { hanja: "說", meaning: "이야기 설" } ]
    },
    {
        id: "tb_0075", word: "의원", level: 2, subject: "국어",
        context: "우리 동네 병원의 [ ? ]님은 환자를 잘 치료하십니다.",
        morphemes: [ { hanja: "醫", meaning: "치료할 의" }, { hanja: "員", meaning: "사람 원" } ]
    },
    {
        id: "tb_0076", word: "매사", level: 2, subject: "국어",
        context: "우리 모두 [ ? ]에 성실하게 최선을 다합시다.",
        morphemes: [ { hanja: "每", meaning: "모두 매" }, { hanja: "事", meaning: "일 사" } ]
    },
    {
        id: "tb_0077", word: "신중", level: 2, subject: "국어",
        context: "개구쟁이 철수도 시험 시간에는 매우 [ ? ]합니다.",
        morphemes: [ { hanja: "愼", meaning: "삼갈 신" }, { hanja: "重", meaning: "무거울 중" } ]
    },
    {
        id: "tb_0078", word: "확보", level: 2, subject: "국어",
        context: "우리나라가 월드컵 출전권을 [ ? ]하였습니다.",
        morphemes: [ { hanja: "確", meaning: "확실할 확" }, { hanja: "保", meaning: "지킬 보" } ]
    },
    {
        id: "tb_0079", word: "노인", level: 2, subject: "국어",
        context: "길에서 만난 [ ? ]의 짐을 들어드렸습니다.",
        morphemes: [ { hanja: "老", meaning: "늙을 노" }, { hanja: "人", meaning: "사람 인" } ]
    },
    {
        id: "tb_0080", word: "답사", level: 2, subject: "사회",
        context: "우리 고장 주변의 문화재를 [ ? ]하기로 하였습니다.",
        morphemes: [ { hanja: "踏", meaning: "밟을 답" }, { hanja: "査", meaning: "조사할 사" } ]
    },
    {
        id: "tb_0081", word: "교류", level: 2, subject: "사회",
        context: "남북한의 [ ? ]를 확대하여야겠습니다.",
        morphemes: [ { hanja: "交", meaning: "서로 교" }, { hanja: "流", meaning: "흐를 류" } ]
    },
    {
        id: "tb_0082", word: "필요", level: 2, subject: "사회",
        context: "옛날 사람들은 생활에 [ ? ]한 물건을 스스로 만들었습니다.",
        morphemes: [ { hanja: "必", meaning: "반드시 필" }, { hanja: "要", meaning: "요구할 요" } ]
    },
    {
        id: "tb_0083", word: "여가", level: 2, subject: "사회",
        context: "어머니께서는 [ ? ]를 활용하여 봉사활동에 참여하셨습니다.",
        morphemes: [ { hanja: "餘", meaning: "남을 여" }, { hanja: "暇", meaning: "겨를 가" } ]
    },
    {
        id: "tb_0084", word: "재래", level: 2, subject: "사회",
        context: "그 물건은 몇몇 [ ? ]시장에서만 구할 수 있습니다.",
        morphemes: [ { hanja: "在", meaning: "있을 재" }, { hanja: "來", meaning: "올 래" } ]
    },
    {
        id: "tb_0085", word: "위치", level: 2, subject: "사회",
        context: "물이 높은 [ ? ]에서 떨어지는 힘을 이용해 전기를 일으킵니다.",
        morphemes: [ { hanja: "位", meaning: "자리 위" }, { hanja: "置", meaning: "놓아둘 치" } ]
    },
    {
        id: "tb_0086", word: "가전", level: 2, subject: "사회",
        context: "이렇게 멋진 [ ? ]제품을 우리나라 회사가 만들었다는 것이 자랑스럽습니다.",
        morphemes: [ { hanja: "家", meaning: "집 가" }, { hanja: "電", meaning: "전기 전" } ]
    },
    {
        id: "tb_0087", word: "체험", level: 2, subject: "사회",
        context: "과천 과학관으로 [ ? ] 학습을 다녀왔습니다.",
        morphemes: [ { hanja: "體", meaning: "몸 체" }, { hanja: "驗", meaning: "경험할 험" } ]
    },
    {
        id: "tb_0088", word: "행정", level: 2, subject: "사회",
        context: "정부의 여러 기관에서는 [ ? ] 제도를 간단하게 만들기 위해 노력합니다.",
        morphemes: [ { hanja: "行", meaning: "행할 행" }, { hanja: "政", meaning: "정치 정" } ]
    },
    {
        id: "tb_0089", word: "이동", level: 2, subject: "사회",
        context: "요즈음에는 도시 사람들이 농촌으로 [ ? ]하는 경우가 많아지고 있습니다.",
        morphemes: [ { hanja: "移", meaning: "옮길 이" }, { hanja: "動", meaning: "움직일 동" } ]
    },
    {
        id: "tb_0090", word: "의사", level: 2, subject: "사회",
        context: "민주주의는 국민의 [ ? ]를 존중합니다.",
        morphemes: [ { hanja: "意", meaning: "뜻 의" }, { hanja: "思", meaning: "생각 사" } ]
    },
    {
        id: "tb_0091", word: "수단", level: 2, subject: "사회",
        context: "비행기는 먼 외국을 오가는데 아주 편리한 교통[ ? ]입니다.",
        morphemes: [ { hanja: "手", meaning: "손, 솜씨 수" }, { hanja: "段", meaning: "단계 단" } ]
    },
    {
        id: "tb_0092", word: "정보", level: 2, subject: "사회",
        context: "우리 가족의 주말여행을 위해 필요한 [ ? ]를 인터넷으로 찾아 보았습니다.",
        morphemes: [ { hanja: "情", meaning: "사정 정" }, { hanja: "報", meaning: "알릴 보" } ]
    },
    {
        id: "tb_0093", word: "사례", level: 2, subject: "사회",
        context: "선생님께서는 구체적인 [ ? ]를 들어가며 안전한 물놀이 방법에 대해 설명해주셨습니다.",
        morphemes: [ { hanja: "事", meaning: "일 사" }, { hanja: "例", meaning: "보기 례" } ]
    },
    {
        id: "tb_0094", word: "택배", level: 2, subject: "사회",
        context: "백화점에서는 손님들을 위해 무료 [ ? ] 서비스를 실시했습니다.",
        morphemes: [ { hanja: "宅", meaning: "집 택" }, { hanja: "配", meaning: "배달할 배" } ]
    },
    {
        id: "tb_0095", word: "수집", level: 2, subject: "사회",
        context: "보고서 작성을 위해 관계되는 정보를 [ ? ]하였습니다.",
        morphemes: [ { hanja: "蒐", meaning: "모을 수" }, { hanja: "集", meaning: "모일 집" } ]
    },
    {
        id: "tb_0096", word: "교환", level: 2, subject: "사회",
        context: "고장 난 카메라를 새로운 제품으로 [ ? ]하였습니다.",
        morphemes: [ { hanja: "交", meaning: "서로 교" }, { hanja: "換", meaning: "바꿀 환" } ]
    },
    {
        id: "tb_0097", word: "채취", level: 2, subject: "사회",
        context: "할아버지께서 산에서 버섯과 약초를 [ ? ]하셨습니다.",
        morphemes: [ { hanja: "採", meaning: "캘 채" }, { hanja: "取", meaning: "가질 취" } ]
    },
    {
        id: "tb_0098", word: "수상", level: 2, subject: "사회",
        context: "[ ? ] 가옥에서 생활하는 사람들의 모습이 신기했습니다.",
        morphemes: [ { hanja: "水", meaning: "물 수" }, { hanja: "上", meaning: "위 상" } ]
    },
    {
        id: "tb_0099", word: "운하", level: 2, subject: "사회",
        context: "임금님은 [ ? ]를 만들어 배를 타고 여러 지방의 생활 모습을 살펴 보았습니다.",
        morphemes: [ { hanja: "運", meaning: "옮길 운" }, { hanja: "河", meaning: "물 하" } ]
    },
    {
        id: "tb_0100", word: "건조", level: 2, subject: "사회",
        context: "요즘은 날씨가 [ ? ]하여 빨래가 잘 마릅니다.",
        morphemes: [ { hanja: "乾", meaning: "마를 건" }, { hanja: "燥", meaning: "마를 조" } ]
    },
    {
        id: "tb_0101", word: "해저", level: 2, subject: "사회",
        context: "부산과 제주도를 연결하는 [ ? ] 터널을 만들 수 있었으면 좋겠습니다.",
        morphemes: [ { hanja: "海", meaning: "바다 해" }, { hanja: "底", meaning: "밑 저" } ]
    },
    {
        id: "tb_0102", word: "개발", level: 2, subject: "사회",
        context: "우리 회사는 새로운 제품을 [ ? ]하기 위해 끊임없이 노력하고 있습니다.",
        morphemes: [ { hanja: "開", meaning: "열 개" }, { hanja: "發", meaning: "드러날 발" } ]
    },
    {
        id: "tb_0103", word: "파괴", level: 2, subject: "사회",
        context: "전쟁으로 만은 문화재가 [ ? ]되었습니다.",
        morphemes: [ { hanja: "破", meaning: "깨뜨릴 파" }, { hanja: "壞", meaning: "무너질 괴" } ]
    },
    {
        id: "tb_0104", word: "미래", level: 2, subject: "사회",
        context: "우리나라의 [ ? ]는 어린이들에게 달려있습니다.",
        morphemes: [ { hanja: "未", meaning: "아닐 미" }, { hanja: "來", meaning: "올 래" } ]
    },
    {
        id: "tb_0105", word: "상상", level: 2, subject: "사회",
        context: "이렇게 멋진 생각을 하리라고는 [ ? ]도 못했습니다.",
        morphemes: [ { hanja: "想", meaning: "생각할 상" }, { hanja: "像", meaning: "모습 상" } ]
    },
    {
        id: "tb_0106", word: "변신", level: 2, subject: "사회",
        context: "여우가 예쁜 처녀로 [ ? ]하는 이야기를 읽었습니다.",
        morphemes: [ { hanja: "變", meaning: "변할 변" }, { hanja: "身", meaning: "몸, 모습 신" } ]
    },
    {
        id: "tb_0107", word: "의례", level: 2, subject: "사회",
        context: "지금부터 국민[ ? ]가 있겠습니다.",
        morphemes: [ { hanja: "儀", meaning: "예의 의" }, { hanja: "禮", meaning: "예도 례" } ]
    },
    {
        id: "tb_0108", word: "촌락", level: 2, subject: "사회",
        context: "강의 주변에는 많은 [ ? ]이 자리 잡고 있습니다.",
        morphemes: [ { hanja: "村", meaning: "시골 촌" }, { hanja: "落", meaning: "마을 락" } ]
    },
    {
        id: "tb_0109", word: "사악", level: 2, subject: "사회",
        context: "[ ? ]한 무리들이 임금님을 헤치려고 몰래 궁궐로 들어왔습니다.",
        morphemes: [ { hanja: "邪", meaning: "간사할 사" }, { hanja: "惡", meaning: "악할 악" } ]
    },
    {
        id: "tb_0110", word: "신비", level: 2, subject: "사회",
        context: "우주의 [ ? ]를 말로 표현할 수 있을까요?",
        morphemes: [ { hanja: "神", meaning: "신기할 신" }, { hanja: "秘", meaning: "비밀 비" } ]
    },
    {
        id: "tb_0111", word: "신성", level: 2, subject: "사회",
        context: "인도에서는 소를 매우 [ ? ]한 동물이라고 생각합니다.",
        morphemes: [ { hanja: "神", meaning: "귀신 신" }, { hanja: "聖", meaning: "성스러울 성" } ]
    },
    {
        id: "tb_0112", word: "궁중", level: 2, subject: "사회",
        context: "누나는 [ ? ] 무용을 공부하고 있습니다.",
        morphemes: [ { hanja: "宮", meaning: "궁궐 궁" }, { hanja: "中", meaning: "가운데 중" } ]
    },
    {
        id: "tb_0113", word: "혼례", level: 2, subject: "사회",
        context: "한옥 마을에서 전통 [ ? ] 모습을 구경하였습니다.",
        morphemes: [ { hanja: "婚", meaning: "결혼할 혼" }, { hanja: "禮", meaning: "예도 례" } ]
    },
    {
        id: "tb_0114", word: "제례", level: 2, subject: "사회",
        context: "임금님께서는 나라의 평안을 비는 [ ? ] 의식을 실시하셨습니다.",
        morphemes: [ { hanja: "祭", meaning: "제사 제" }, { hanja: "禮", meaning: "예도 례" } ]
    },
    {
        id: "tb_0115", word: "상여", level: 2, subject: "사회",
        context: "마을 사람들이 슬퍼하며 [ ? ]의 뒤를 따랐습니다.",
        morphemes: [ { hanja: "喪", meaning: "죽을 상" }, { hanja: "輿", meaning: "수레 여" } ]
    },
    {
        id: "tb_0116", word: "안녕", level: 2, subject: "사회",
        context: "임금님은 나라의 안전과 백성들의 [ ? ]을 위해 힘썼습니다.",
        morphemes: [ { hanja: "安", meaning: "편안 안" }, { hanja: "寧", meaning: "편안 녕" } ]
    },
    {
        id: "tb_0117", word: "행군", level: 2, subject: "사회",
        context: "끝없는 [ ? ]에 병사들은 지쳐 쓰러졌습니다.",
        morphemes: [ { hanja: "行", meaning: "행진할 행" }, { hanja: "軍", meaning: "군사 군" } ]
    },
    {
        id: "tb_0118", word: "제단", level: 2, subject: "사회",
        context: "농부들은 잘 익은 곡식들을 가득 담아 [ ? ]에 바쳤습니다.",
        morphemes: [ { hanja: "祭", meaning: "제사 제" }, { hanja: "壇", meaning: "단 단" } ]
    },
    {
        id: "tb_0119", word: "적응", level: 2, subject: "사회",
        context: "갑자기 어두운 곳으로 들어가면 눈이 [ ? ]하는데 시간이 걸립니다.",
        morphemes: [ { hanja: "適", meaning: "맞을 적" }, { hanja: "應", meaning: "응할 응" } ]
    },
    {
        id: "tb_0120", word: "성묘", level: 2, subject: "사회",
        context: "우리 가족은 차례를 지내고 나서 [ ? ]를 하였습니다.",
        morphemes: [ { hanja: "省", meaning: "살필 성" }, { hanja: "墓", meaning: "무덤 묘" } ]
    },
    {
        id: "tb_0121", word: "불행", level: 2, subject: "사회",
        context: "교통질서를 잘 지켜서 교통사고로 생기는 [ ? ]을 막아냅시다.",
        morphemes: [ { hanja: "不", meaning: "아니 불" }, { hanja: "幸", meaning: "행복할 행" } ]
    },
    {
        id: "tb_0122", word: "행운", level: 2, subject: "사회",
        context: "7을 [ ? ]의 숫자라고 합니다.",
        morphemes: [ { hanja: "幸", meaning: "다행 행" }, { hanja: "運", meaning: "운수 운" } ]
    },
    {
        id: "tb_0123", word: "인품", level: 2, subject: "사회",
        context: "그 사람은 [ ? ]과 학문이 뛰어나 백성들의 존경을 받았습니다.",
        morphemes: [ { hanja: "人", meaning: "사람 인" }, { hanja: "品", meaning: "품격 품" } ]
    },
    {
        id: "tb_0124", word: "편견", level: 2, subject: "사회",
        context: "인종에 대한 [ ? ]을 갖는 것은 옳지 못합니다.",
        morphemes: [ { hanja: "偏", meaning: "치우칠 편" }, { hanja: "見", meaning: "생각 견" } ]
    },
    {
        id: "tb_0125", word: "계산", level: 2, subject: "수학",
        context: "혼합 [ ? ]을 바르게 하여봅시다.",
        morphemes: [ { hanja: "計", meaning: "셀 계" }, { hanja: "算", meaning: "셀 산" } ]
    },
    {
        id: "tb_0126", word: "모형", level: 2, subject: "수학",
        context: "[ ? ] 항공기 대회에 참가하였습니다.",
        morphemes: [ { hanja: "模", meaning: "모양 모" }, { hanja: "型", meaning: "거푸집 형" } ]
    },
    {
        id: "tb_0127", word: "필산", level: 2, subject: "수학",
        context: "[ ? ]을 바르게 했는지 꼼꼼히 살펴봅시다.",
        morphemes: [ { hanja: "筆", meaning: "붓 필" }, { hanja: "算", meaning: "셈할 산" } ]
    },
    {
        id: "tb_0128", word: "확인", level: 2, subject: "수학",
        context: "책을 세 번 읽고 부모님께 [ ? ]을 받아오세요.",
        morphemes: [ { hanja: "確", meaning: "확실할 확" }, { hanja: "認", meaning: "인정할 인" } ]
    },
    {
        id: "tb_0129", word: "예상", level: 2, subject: "수학",
        context: "기상청의 자료를 가지고 태풍의 이동 방향을 [ ? ]할 수 있습니다.",
        morphemes: [ { hanja: "豫", meaning: "미리 예" }, { hanja: "想", meaning: "생각할 상" } ]
    },
    {
        id: "tb_0130", word: "공책", level: 2, subject: "수학",
        context: "문구점에서 [ ? ]을 5권 샀습니다.",
        morphemes: [ { hanja: "空", meaning: "빌 공" }, { hanja: "冊", meaning: "책 책" } ]
    },
    {
        id: "tb_0131", word: "중심", level: 2, subject: "수학",
        context: "지구는 태양을 [ ? ]으로 일 년에 한 바퀴씩 돕니다.",
        morphemes: [ { hanja: "中", meaning: "가운데 중" }, { hanja: "心", meaning: "가운데 심" } ]
    },
    {
        id: "tb_0132", word: "특성", level: 2, subject: "수학",
        context: "고양이의 행동 [ ? ]을 관찰해봅시다.",
        morphemes: [ { hanja: "特", meaning: "특별할 특" }, { hanja: "性", meaning: "성질 성" } ]
    },
    {
        id: "tb_0133", word: "활용", level: 2, subject: "수학",
        context: "동생과 나는 폐품을 [ ? ]하여 작품을 만들었습니다.",
        morphemes: [ { hanja: "活", meaning: "살 활" }, { hanja: "用", meaning: "쓸 용" } ]
    },
    {
        id: "tb_0134", word: "검산", level: 2, subject: "수학",
        context: "계산이 바른지 [ ? ]해 보세요.",
        morphemes: [ { hanja: "檢", meaning: "검사할 검" }, { hanja: "算", meaning: "셈할 산" } ]
    },
    {
        id: "tb_0135", word: "설명", level: 2, subject: "수학",
        context: "공부시간에는 선생님의 [ ? ]을 잘 듣습니다.",
        morphemes: [ { hanja: "說", meaning: "말씀 설" }, { hanja: "明", meaning: "분명할 명" } ]
    },
    {
        id: "tb_0136", word: "수확", level: 2, subject: "수학",
        context: "곡식을 [ ? ]하는 농부 아저씨의 얼굴이 행복해보입니다.",
        morphemes: [ { hanja: "收", meaning: "거둘 수" }, { hanja: "穫", meaning: "거둘 확" } ]
    },
    {
        id: "tb_0137", word: "투명", level: 2, subject: "수학",
        context: "연못의 물이 맑고 [ ? ]하여 기분이 정말 좋았습니다.",
        morphemes: [ { hanja: "透", meaning: "통할 투" }, { hanja: "明", meaning: "밝을 명" } ]
    },
    {
        id: "tb_0138", word: "제시", level: 2, subject: "수학",
        context: "친구간의 따돌림을 해결할 수 있는 멋진 방법을 [ ? ]하였습니다.",
        morphemes: [ { hanja: "提", meaning: "들 제" }, { hanja: "示", meaning: "보일 시" } ]
    },
    {
        id: "tb_0139", word: "분수", level: 2, subject: "수학",
        context: "[ ? ]를 소수로 나타내는 방법을 알아봅시다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "數", meaning: "숫자 수" } ]
    },
    {
        id: "tb_0140", word: "소수", level: 2, subject: "수학",
        context: "[ ? ]의 덧셈을 계산하여 봅시다.",
        morphemes: [ { hanja: "小", meaning: "작을 소" }, { hanja: "數", meaning: "숫자 수" } ]
    },
    {
        id: "tb_0141", word: "폐품", level: 2, subject: "수학",
        context: "[ ? ]을 모으면 소중한 자원이 됩니다.",
        morphemes: [ { hanja: "廢", meaning: "버릴 폐" }, { hanja: "品", meaning: "물건 품" } ]
    },
    {
        id: "tb_0142", word: "수확", level: 2, subject: "수학",
        context: "곡식을 [ ? ]하는 농부 아저씨의 얼굴이 행복해보입니다.",
        morphemes: [ { hanja: "收", meaning: "거둘 수" }, { hanja: "穫", meaning: "거둘 확" } ]
    },
    {
        id: "tb_0143", word: "구별", level: 2, subject: "수학",
        context: "병아리의 암컷과 수컷은 어떻게 [ ? ]하나요?",
        morphemes: [ { hanja: "區", meaning: "나눌 구" }, { hanja: "別", meaning: "나눌 별" } ]
    },
    {
        id: "tb_0144", word: "도형", level: 2, subject: "수학",
        context: "여러 가지 [ ? ]들의 넓이를 구하는 방법을 생각해 봅시다.",
        morphemes: [ { hanja: "圖", meaning: "그림 도" }, { hanja: "形", meaning: "모양 형" } ]
    },
    {
        id: "tb_0145", word: "배열", level: 2, subject: "수학",
        context: "도형의 [ ? ] 방식을 달리하여 새로운 모양을 만들어 봅시다.",
        morphemes: [ { hanja: "排", meaning: "늘어설 배" }, { hanja: "列", meaning: "벌일 렬" } ]
    },
    {
        id: "tb_0146", word: "측정", level: 2, subject: "과학",
        context: "눈이 내린 양을 [ ? ]하려면 어떻게 할까요?",
        morphemes: [ { hanja: "測", meaning: "헤아릴 측" }, { hanja: "定", meaning: "정할 정" } ]
    },
    {
        id: "tb_0147", word: "유성", level: 2, subject: "과학",
        context: "표지에는 [ ? ] 사인펜으로 이름을 쓰는 것이 좋습니다.",
        morphemes: [ { hanja: "油", meaning: "기름 유" }, { hanja: "性", meaning: "성질 성" } ]
    },
    {
        id: "tb_0148", word: "계량", level: 2, subject: "과학",
        context: "음식을 만들 때에는 [ ? ]컵을 사용하면 좋습니다.",
        morphemes: [ { hanja: "計", meaning: "잴 계" }, { hanja: "量", meaning: "분량 량" } ]
    },
    {
        id: "tb_0149", word: "혼란", level: 2, subject: "과학",
        context: "법과 규칙을 지키지 않으면 사회가 [ ? ]에 빠집니다.",
        morphemes: [ { hanja: "混", meaning: "섞일 혼" }, { hanja: "亂", meaning: "어지러울 난" } ]
    },
    {
        id: "tb_0150", word: "공용", level: 2, subject: "과학",
        context: "이 옷은 남녀 [ ? ]입니다.",
        morphemes: [ { hanja: "共", meaning: "함께 공" }, { hanja: "用", meaning: "쓸 용" } ]
    },
    {
        id: "tb_0151", word: "혼동", level: 2, subject: "과학",
        context: "쌍둥이들은 얼굴이 비슷하여 형과 동생을 [ ? ]하기가 쉽습니다.",
        morphemes: [ { hanja: "混", meaning: "섞일 혼" }, { hanja: "同", meaning: "한 가지 동" } ]
    },
    {
        id: "tb_0152", word: "탐사", level: 2, subject: "과학",
        context: "바다 깊은 곳을 [ ? ]하기 위한 노력이 계속되고 있습니다.",
        morphemes: [ { hanja: "探", meaning: "찾을 탐" }, { hanja: "査", meaning: "조사할 사" } ]
    },
    {
        id: "tb_0153", word: "궤도", level: 2, subject: "과학",
        context: "인공위성이 정상 [ ? ]를 따라 움직이고 있습니다.",
        morphemes: [ { hanja: "軌", meaning: "바큇자국 궤" }, { hanja: "道", meaning: "길 도" } ]
    },
    {
        id: "tb_0154", word: "진입", level: 2, subject: "과학",
        context: "자동차가 너무 많아서 고속도로 [ ? ]이 어렵습니다.",
        morphemes: [ { hanja: "進", meaning: "나아갈 진" }, { hanja: "入", meaning: "들 입" } ]
    },
    {
        id: "tb_0155", word: "대기", level: 2, subject: "과학",
        context: "비는 [ ? ] 중의 수증기가 찬 기운을 만나서 땅으로 떨어지는 것입니다.",
        morphemes: [ { hanja: "大", meaning: "큰 대" }, { hanja: "氣", meaning: "공기 기" } ]
    },
    {
        id: "tb_0156", word: "마찰", level: 2, subject: "과학",
        context: "자동차 바퀴가 도로와 [ ? ]하는 소리가 요란합니다.",
        morphemes: [ { hanja: "摩", meaning: "갈 마" }, { hanja: "擦", meaning: "비빌 찰" } ]
    },
    {
        id: "tb_0157", word: "항공", level: 2, subject: "과학",
        context: "아버지께서는 [ ? ] 회사에 근무하고 계십니다.",
        morphemes: [ { hanja: "航", meaning: "건널 항" }, { hanja: "空", meaning: "하늘 공" } ]
    },
    {
        id: "tb_0158", word: "교훈", level: 2, subject: "과학",
        context: "책을 많이 읽으면 즐거움과 [ ? ]을 얻을 수 있습니다.",
        morphemes: [ { hanja: "敎", meaning: "가르칠 교" }, { hanja: "訓", meaning: "가르칠 훈" } ]
    },
    {
        id: "tb_0159", word: "통일", level: 2, subject: "과학",
        context: "김유신 장군은 삼국을 [ ? ]하는데 큰 공을 세웠습니다.",
        morphemes: [ { hanja: "統", meaning: "거느릴 통" }, { hanja: "一", meaning: "한 일" } ]
    },
    {
        id: "tb_0160", word: "수조", level: 2, subject: "과학",
        context: "유리병이 들어있는 [ ? ] 속을 자세히 살펴봅시다.",
        morphemes: [ { hanja: "水", meaning: "물 수" }, { hanja: "槽", meaning: "통 조" } ]
    },
    {
        id: "tb_0161", word: "공간", level: 2, subject: "과학",
        context: "좁은 [ ? ]을 잘 이용할 수 있는 방법을 생각해봅시다.",
        morphemes: [ { hanja: "空", meaning: "빌 공" }, { hanja: "間", meaning: "사이 간" } ]
    },
    {
        id: "tb_0162", word: "충격", level: 2, subject: "과학",
        context: "유리는 [ ? ]을 받으면 깨지기 쉽습니다.",
        morphemes: [ { hanja: "衝", meaning: "부딪칠 충" }, { hanja: "擊", meaning: "부딪칠 격" } ]
    },
    {
        id: "tb_0163", word: "압축", level: 2, subject: "과학",
        context: "파일을 [ ? ]해서 저장하였습니다.",
        morphemes: [ { hanja: "壓", meaning: "누를 압" }, { hanja: "縮", meaning: "줄어들 축" } ]
    },
    {
        id: "tb_0164", word: "진공", level: 2, subject: "과학",
        context: "[ ? ] 상태를 이용한 놀이와 실험 방법을 알아봅시다.",
        morphemes: [ { hanja: "眞", meaning: "참 진" }, { hanja: "空", meaning: "빌 공" } ]
    },
    {
        id: "tb_0165", word: "고체", level: 2, subject: "과학",
        context: "[ ? ] 상태인 얼음이 녹으면 액체 상태의 물로 변합니다.",
        morphemes: [ { hanja: "固", meaning: "굳을 고" }, { hanja: "體", meaning: "모습 체" } ]
    },
    {
        id: "tb_0166", word: "번식", level: 2, subject: "과학",
        context: "여름철에는 세균이 지나치게 많이 [ ? ]하는 것을 막아야 합니다.",
        morphemes: [ { hanja: "繁", meaning: "많을 번" }, { hanja: "殖", meaning: "번성할 식" } ]
    },
    {
        id: "tb_0167", word: "분류", level: 2, subject: "과학",
        context: "사는 장소에 따라 동물을 [ ? ]해 봅시다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "類", meaning: "종류 류" } ]
    },
    {
        id: "tb_0168", word: "해마", level: 2, subject: "과학",
        context: "물고기와 [ ? ]의 다른 점을 조사하여 봅시다.",
        morphemes: [ { hanja: "海", meaning: "바다 해" }, { hanja: "馬", meaning: "말 마" } ]
    },
    {
        id: "tb_0169", word: "부화", level: 2, subject: "과학",
        context: "이제 막 [ ? ]한 노란 병아리가 정말 귀엽습니다.",
        morphemes: [ { hanja: "孵", meaning: "알깔 부" }, { hanja: "化", meaning: "될 화" } ]
    },
    {
        id: "tb_0170", word: "무인", level: 2, subject: "과학",
        context: "빌딩 곳곳에는 [ ? ] 감시 카메라가 있습니다.",
        morphemes: [ { hanja: "無", meaning: "없을 무" }, { hanja: "人", meaning: "사람 인" } ]
    },
    {
        id: "tb_0171", word: "타조", level: 2, subject: "과학",
        context: "[ ? ] 알은 단단하고 매우 큽니다.",
        morphemes: [ { hanja: "駝", meaning: "낙타 타" }, { hanja: "鳥", meaning: "새 조" } ]
    },
    {
        id: "tb_0172", word: "애완", level: 2, subject: "과학",
        context: "동물원의 사육사는 호랑이를 [ ? ]동물처럼 잘 다룹니다.",
        morphemes: [ { hanja: "愛", meaning: "사랑 애" }, { hanja: "玩", meaning: "장난할 완" } ]
    },
    {
        id: "tb_0173", word: "야생", level: 2, subject: "과학",
        context: "이곳은 [ ? ] 동물 보호구역입니다.",
        morphemes: [ { hanja: "野", meaning: "들 야" }, { hanja: "生", meaning: "날 생" } ]
    },
    {
        id: "tb_0174", word: "생존", level: 2, subject: "과학",
        context: "증조할아버지께서 아직 [ ? ]해 계십니다.",
        morphemes: [ { hanja: "生", meaning: "살 생" }, { hanja: "存", meaning: "있을 존" } ]
    },
    {
        id: "tb_0175", word: "토종", level: 2, subject: "과학",
        context: "진돗개는 한국의 대표적인 [ ? ]개입니다.",
        morphemes: [ { hanja: "土", meaning: "흙 토" }, { hanja: "種", meaning: "씨 종" } ]
    },
    {
        id: "tb_0176", word: "멸종", level: 2, subject: "과학",
        context: "공룡의 [ ? ] 원인을 알아내기 위해 연구가 계속되고 있습니다.",
        morphemes: [ { hanja: "滅", meaning: "없어질 멸" }, { hanja: "種", meaning: "씨 종" } ]
    },
    {
        id: "tb_0177", word: "선정", level: 2, subject: "과학",
        context: "선생님께서는 우수 작품을 [ ? ]하셨습니다.",
        morphemes: [ { hanja: "選", meaning: "고를 선" }, { hanja: "定", meaning: "정할 정" } ]
    },
    {
        id: "tb_0178", word: "애정", level: 2, subject: "과학",
        context: "철수는 [ ? ]을 가지고 강아지를 돌보았습니다.",
        morphemes: [ { hanja: "愛", meaning: "사랑 애" }, { hanja: "情", meaning: "마음 정" } ]
    },
    {
        id: "tb_0179", word: "광산", level: 2, subject: "과학",
        context: "강원도 곳곳에 [ ? ]이 있습니다.",
        morphemes: [ { hanja: "鑛", meaning: "광물 광" }, { hanja: "山", meaning: "산 산" } ]
    },
    {
        id: "tb_0180", word: "철골", level: 2, subject: "과학",
        context: "우선 [ ? ]을 사용하여 건물의 기둥을 세웠습니다.",
        morphemes: [ { hanja: "鐵", meaning: "쇠 철" }, { hanja: "骨", meaning: "뼈 골" } ]
    },
    {
        id: "tb_0181", word: "분리", level: 2, subject: "과학",
        context: "쌀과 좁쌀의 혼합물을 [ ? ]하여 봅시다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "離", meaning: "떼어놓을 리" } ]
    },
    {
        id: "tb_0182", word: "부착", level: 2, subject: "과학",
        context: "건물 꼭대기에 광고판을 [ ? ]하였습니다.",
        morphemes: [ { hanja: "附", meaning: "붙을 부" }, { hanja: "着", meaning: "붙을 착" } ]
    },
    {
        id: "tb_0183", word: "유출", level: 2, subject: "과학",
        context: "다른 나라로 [ ? ]된 우리 문화재를 되찾아야 합니다.",
        morphemes: [ { hanja: "流", meaning: "흐를 류" }, { hanja: "出", meaning: "날 출" } ]
    },
    {
        id: "tb_0184", word: "오염", level: 2, subject: "과학",
        context: "강물이 [ ? ]되어 마실 물조차 구하기가 힘들었습니다.",
        morphemes: [ { hanja: "汚", meaning: "더러울 오" }, { hanja: "染", meaning: "물들을 염" } ]
    },
    {
        id: "tb_0185", word: "양분", level: 2, subject: "과학",
        context: "뱃속의 아기는 엄마에게 [ ? ]을 공급받습니다.",
        morphemes: [ { hanja: "養", meaning: "기를 양" }, { hanja: "分", meaning: "성분 분" } ]
    },
    {
        id: "tb_0186", word: "조명", level: 2, subject: "과학",
        context: "실내[ ? ]을 밝게 하니 기분도 밝아지는 느낌입니다.",
        morphemes: [ { hanja: "照", meaning: "비칠 조" }, { hanja: "明", meaning: "밝을 명" } ]
    },
    {
        id: "tb_0187", word: "광원", level: 2, subject: "과학",
        context: "[ ? ]의 위치를 달리하면서 그림자의 크기를 관찰하여 봅시다.",
        morphemes: [ { hanja: "光", meaning: "빛 광" }, { hanja: "源", meaning: "근원 원" } ]
    },
    {
        id: "tb_0188", word: "반사", level: 2, subject: "과학",
        context: "거울에 햇빛이 [ ? ]되어 눈이 부셨습니다.",
        morphemes: [ { hanja: "反", meaning: "되돌릴 반" }, { hanja: "射", meaning: "쏠 사" } ]
    },
    {
        id: "tb_0189", word: "분출", level: 2, subject: "과학",
        context: "아주 옛날에 한라산에서 용암이 [ ? ]되었다고 합니다.",
        morphemes: [ { hanja: "噴", meaning: "뿜을 분" }, { hanja: "出", meaning: "날 출" } ]
    },
    {
        id: "tb_0190", word: "암막", level: 2, subject: "과학",
        context: "시청각실에서 [ ? ]을 치고 영화를 관람하였습니다.",
        morphemes: [ { hanja: "暗", meaning: "어두울 암" }, { hanja: "幕", meaning: "막 막" } ]
    },
    {
        id: "tb_0191", word: "투명", level: 2, subject: "과학",
        context: "물은 색깔이 없고 [ ? ]합니다.",
        morphemes: [ { hanja: "透", meaning: "통할 투" }, { hanja: "明", meaning: "밝을 명" } ]
    },
    {
        id: "tb_0192", word: "백열", level: 2, subject: "과학",
        context: "예전에는 가정에서 [ ? ]전구를 많이 사용하였습니다.",
        morphemes: [ { hanja: "白", meaning: "흰 백" }, { hanja: "熱", meaning: "뜨거울 열" } ]
    },
    {
        id: "tb_0193", word: "전구", level: 2, subject: "과학",
        context: "오징어잡이 배의 [ ? ]에서 나오는 불빛이 바다를 환하게 밝혔습니다.",
        morphemes: [ { hanja: "電", meaning: "전기 전" }, { hanja: "球", meaning: "공 구" } ]
    },
    {
        id: "tb_0194", word: "발광", level: 2, subject: "과학",
        context: "반딧불은 스스로 [ ? ]을 하여 시골의 풀숲을 밝힙니다.",
        morphemes: [ { hanja: "發", meaning: "쏠 발" }, { hanja: "光", meaning: "빛 광" } ]
    },
    {
        id: "tb_0195", word: "직진", level: 2, subject: "과학",
        context: "큰 건물이 보일 때까지 계속 [ ? ]하세요.",
        morphemes: [ { hanja: "直", meaning: "곧을 직" }, { hanja: "進", meaning: "나아갈 진" } ]
    },
    {
        id: "tb_0196", word: "야경", level: 2, subject: "과학",
        context: "남산 위에서 바라보는 서울의 [ ? ]이 정말 아름답습니다.",
        morphemes: [ { hanja: "夜", meaning: "밤 야" }, { hanja: "景", meaning: "경치 경" } ]
    },
    {
        id: "tb_0197", word: "실감", level: 2, subject: "과학",
        context: "주인공이 실제로 말하는 것처럼 [ ? ]나게 교과서를 읽어봅시다.",
        morphemes: [ { hanja: "實", meaning: "실제 실" }, { hanja: "感", meaning: "느낄 감" } ]
    },
    {
        id: "tb_0198", word: "속도", level: 2, subject: "과학",
        context: "자동차의 [ ? ]를 줄이면 안전하게 달릴 수 있습니다.",
        morphemes: [ { hanja: "速", meaning: "빠를 속" }, { hanja: "度", meaning: "정도 도" } ]
    },
    {
        id: "tb_0199", word: "실물", level: 2, subject: "과학",
        context: "공룡의 모습을 [ ? ] 크기로 만들어 놓은 것을 보니 크기가 엄청납니다.",
        morphemes: [ { hanja: "實", meaning: "실제 실" }, { hanja: "物", meaning: "물건 물" } ]
    },
    {
        id: "tb_0200", word: "분야", level: 2, subject: "과학",
        context: "자신이 관심 있는 [ ? ]를 찾아 공부해봅시다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "野", meaning: "범위 야" } ]
    },
    {
        id: "tb_0201", word: "일종", level: 2, subject: "과학",
        context: "닭도 새의 [ ? ]입니까?",
        morphemes: [ { hanja: "一", meaning: "한 일" }, { hanja: "種", meaning: "종류 종" } ]
    },
    {
        id: "tb_0202", word: "통과", level: 2, subject: "과학",
        context: "두 개의 터널을 [ ? ]하여 목적지에 도착하였습니다.",
        morphemes: [ { hanja: "通", meaning: "통할 통" }, { hanja: "過", meaning: "지날 과" } ]
    },
    {
        id: "tb_0203", word: "승객", level: 2, subject: "과학",
        context: "지하철은 많은 [ ? ]들로 발을 디딜 틈이 없었습니다.",
        morphemes: [ { hanja: "乘", meaning: "탈 승" }, { hanja: "客", meaning: "손님 객" } ]
    },
    {
        id: "tb_0204", word: "금지", level: 2, subject: "과학",
        context: "여기는 물이 깊어 수영이 [ ? ]되어 있습니다.",
        morphemes: [ { hanja: "禁", meaning: "금할 금" }, { hanja: "止", meaning: "발 지" } ]
    },
    {
        id: "tb_0205", word: "장면", level: 2, subject: "국어",
        context: "동화를 읽고 인상적인 [ ? ]을 발표해 봅시다.",
        morphemes: [ { hanja: "場", meaning: "마당 장" }, { hanja: "面", meaning: "낯 면" } ]
    },
    {
        id: "tb_0206", word: "등장", level: 2, subject: "국어",
        context: "[ ? ]인물의 역할을 정하여 연극을 해 봅시다.",
        morphemes: [ { hanja: "登", meaning: "오를 등" }, { hanja: "場", meaning: "마당 장" } ]
    },
    {
        id: "tb_0207", word: "요소", level: 2, subject: "국어",
        context: "시의 분위기와 이야기의 구성[ ? ]를 생각하며 읽어봅시다.",
        morphemes: [ { hanja: "要", meaning: "중요할 요" }, { hanja: "素", meaning: "성분 소" } ]
    },
    {
        id: "tb_0208", word: "표현", level: 2, subject: "국어",
        context: "시를 읽은 느낌을 글과 그림으로 [ ? ]하여 봅시다.",
        morphemes: [ { hanja: "表", meaning: "겉 표" }, { hanja: "現", meaning: "나타날 현" } ]
    },
    {
        id: "tb_0209", word: "낭송", level: 2, subject: "국어",
        context: "시의 분위기를 살려 [ ? ]해봅니다.",
        morphemes: [ { hanja: "朗", meaning: "밝을 랑" }, { hanja: "誦", meaning: "욀 송" } ]
    },
    {
        id: "tb_0210", word: "시화", level: 2, subject: "국어",
        context: "자신의 시에 그림을 그려 [ ? ]전시회를 열었습니다.",
        morphemes: [ { hanja: "詩", meaning: "시 시" }, { hanja: "畵", meaning: "그림 화" } ]
    },
    {
        id: "tb_0211", word: "배경", level: 2, subject: "국어",
        context: "산을 [ ? ]으로 사진을 찍습니다.",
        morphemes: [ { hanja: "背", meaning: "등 배" }, { hanja: "景", meaning: "경치 경" } ]
    },
    {
        id: "tb_0212", word: "인물", level: 2, subject: "국어",
        context: "너는 큰 [ ? ]이 될 것이다.",
        morphemes: [ { hanja: "人", meaning: "사람 인" }, { hanja: "物", meaning: "물건 물" } ]
    },
    {
        id: "tb_0213", word: "사건", level: 2, subject: "국어",
        context: "[ ? ]이 일어난 차례대로 이야기를 간추려 봅시다.",
        morphemes: [ { hanja: "事", meaning: "일 사" }, { hanja: "件", meaning: "일 건" } ]
    },
    {
        id: "tb_0214", word: "애완", level: 2, subject: "국어",
        context: "내가 기를 수 있는 [ ? ]동물은 무엇이 있을까요?",
        morphemes: [ { hanja: "愛", meaning: "사랑 애" }, { hanja: "玩", meaning: "노리개 완" } ]
    },
    {
        id: "tb_0215", word: "치장", level: 2, subject: "국어",
        context: "연주회에 발표자들이 곱게 [ ? ]하고 무대에 올랐습니다.",
        morphemes: [ { hanja: "治", meaning: "다스릴 치" }, { hanja: "粧", meaning: "단장할 장" } ]
    },
    {
        id: "tb_0216", word: "동정", level: 2, subject: "국어",
        context: "어려운 사람을 보면 [ ? ]심이 절로 생깁니다.",
        morphemes: [ { hanja: "同", meaning: "같을 동" }, { hanja: "情", meaning: "마음 정" } ]
    },
    {
        id: "tb_0217", word: "서당", level: 2, subject: "국어",
        context: "옛날 어린이들은 [ ? ]에서 천자문, 사자소학 등을 공부하였습니다.",
        morphemes: [ { hanja: "書", meaning: "글 서" }, { hanja: "堂", meaning: "집 당" } ]
    },
    {
        id: "tb_0218", word: "수묵", level: 2, subject: "국어",
        context: "미술시간에 먹으로 한지에 [ ? ]화를 그렸습니다.",
        morphemes: [ { hanja: "水", meaning: "물 수" }, { hanja: "墨", meaning: "먹 묵" } ]
    },
    {
        id: "tb_0219", word: "담채", level: 2, subject: "국어",
        context: "먹물의 농도를 연하게 하여 [ ? ]화를 그립니다.",
        morphemes: [ { hanja: "淡", meaning: "묽을 담" }, { hanja: "彩", meaning: "색칠할 채" } ]
    },
    {
        id: "tb_0220", word: "제례", level: 2, subject: "국어",
        context: "종묘에서 해마다 조선 시대 임금의 제사를 지내는 종묘[ ? ]를 합니다.",
        morphemes: [ { hanja: "祭", meaning: "제사 제" }, { hanja: "禮", meaning: "예도 례" } ]
    },
    {
        id: "tb_0221", word: "민중", level: 2, subject: "국어",
        context: "동학농민운동은 [ ? ]의 지지를 얻어 들불처럼 번져갔습니다.",
        morphemes: [ { hanja: "民", meaning: "백성 민" }, { hanja: "衆", meaning: "무리 중" } ]
    },
    {
        id: "tb_0222", word: "성행", level: 2, subject: "국어",
        context: "온 국민에게 번진 과소비의 [ ? ]은 우리에게 경각심을 불러일으킵니다.",
        morphemes: [ { hanja: "盛", meaning: "성할 성" }, { hanja: "行", meaning: "행할 행" } ]
    },
    {
        id: "tb_0223", word: "어진", level: 2, subject: "국어",
        context: "세종대왕 기념관에서 임금의 초상화인 [ ? ]을 보았습니다.",
        morphemes: [ { hanja: "御", meaning: "임금 어" }, { hanja: "眞", meaning: "참 진" } ]
    },
    {
        id: "tb_0224", word: "대가", level: 2, subject: "국어",
        context: "미술의 [ ? ] 이중섭과 박수근은 생전에 매우 가난하게 살았습니다.",
        morphemes: [ { hanja: "大", meaning: "큰 대" }, { hanja: "家", meaning: "사람 가" } ]
    },
    {
        id: "tb_0225", word: "훈장", level: 2, subject: "국어",
        context: "방학 때 서당교실에서 [ ? ]님께 천자문을 배웠습니다.",
        morphemes: [ { hanja: "訓", meaning: "가르칠 훈" }, { hanja: "長", meaning: "어른 장" } ]
    },
    {
        id: "tb_0226", word: "천연", level: 2, subject: "국어",
        context: "[ ? ] 염색을 한 옷감이 매우 아름다운 빛을 냅니다.",
        morphemes: [ { hanja: "天", meaning: "하늘 천" }, { hanja: "然", meaning: "그러할 연" } ]
    },
    {
        id: "tb_0227", word: "규제", level: 2, subject: "국어",
        context: "학교에서 휴대전화의 사용을 [ ? ]하기도 합니다.",
        morphemes: [ { hanja: "規", meaning: "법 규" }, { hanja: "制", meaning: "억제할 제" } ]
    },
    {
        id: "tb_0228", word: "화전", level: 2, subject: "국어",
        context: "천주교인들은 박해를 피해 산으로 숨어들어 [ ? ]민으로 살기도 하였습니다.",
        morphemes: [ { hanja: "火", meaning: "불 화" }, { hanja: "田", meaning: "밭 전" } ]
    },
    {
        id: "tb_0229", word: "보존", level: 2, subject: "국어",
        context: "우리의 문화유산을 잘 [ ? ]하여 후대에 길이 물려줍니다.",
        morphemes: [ { hanja: "保", meaning: "지킬 보" }, { hanja: "存", meaning: "있을 존" } ]
    },
    {
        id: "tb_0230", word: "훼손", level: 2, subject: "국어",
        context: "부모님께서 주신 우리 몸을 [ ? ]하지 않는 것이 효도의 시작입니다.",
        morphemes: [ { hanja: "毁", meaning: "허물 훼" }, { hanja: "損", meaning: "상할 손" } ]
    },
    {
        id: "tb_0231", word: "적절", level: 2, subject: "국어",
        context: "[ ? ]한 비유를 들어 표현합니다.",
        morphemes: [ { hanja: "適", meaning: "맞을 적" }, { hanja: "切", meaning: "꼭 절" } ]
    },
    {
        id: "tb_0232", word: "위인", level: 2, subject: "국어",
        context: "[ ? ]들의 전기를 읽으며 나의 꿈을 설계해봅니다.",
        morphemes: [ { hanja: "偉", meaning: "클 위" }, { hanja: "人", meaning: "사람 인" } ]
    },
    {
        id: "tb_0233", word: "후세", level: 2, subject: "국어",
        context: "자연환경은 [ ? ]에 물려줄 인류의 재산입니다.",
        morphemes: [ { hanja: "後", meaning: "뒤 후" }, { hanja: "世", meaning: "대 세" } ]
    },
    {
        id: "tb_0234", word: "기여", level: 2, subject: "국어",
        context: "사회를 아름답게 가꾸는 데 [ ? ]한 공이 인정되어 상장을 받았습니다.",
        morphemes: [ { hanja: "寄", meaning: "부칠 기" }, { hanja: "與", meaning: "줄 여" } ]
    },
    {
        id: "tb_0235", word: "야생", level: 2, subject: "국어",
        context: "숲에는 갖가지 [ ? ]화가 아름답게 피어 있습니다.",
        morphemes: [ { hanja: "野", meaning: "들 야" }, { hanja: "生", meaning: "날 생" } ]
    },
    {
        id: "tb_0236", word: "토종", level: 2, subject: "국어",
        context: "우리나라에서 자란 [ ? ] 생물이 맛이 있습니다.",
        morphemes: [ { hanja: "土", meaning: "흙 토" }, { hanja: "種", meaning: "씨 종" } ]
    },
    {
        id: "tb_0237", word: "폭우", level: 2, subject: "국어",
        context: "갑자기 쏟아진 [ ? ]로 강이 넘쳤습니다.",
        morphemes: [ { hanja: "暴", meaning: "사나울 폭" }, { hanja: "雨", meaning: "비 우" } ]
    },
    {
        id: "tb_0238", word: "반성", level: 2, subject: "국어",
        context: "공자님께서는 매일 자신을 [ ? ]해 보자고 하셨습니다.",
        morphemes: [ { hanja: "反", meaning: "돌이킬 반" }, { hanja: "省", meaning: "살필 성" } ]
    },
    {
        id: "tb_0239", word: "대화", level: 2, subject: "국어",
        context: "부모님께서도 우리와 [ ? ]를 나누고 싶어 하십니다.",
        morphemes: [ { hanja: "對", meaning: "마주할 대" }, { hanja: "話", meaning: "말할 화" } ]
    },
    {
        id: "tb_0240", word: "거대", level: 2, subject: "국어",
        context: "무덤을 [ ? ]하게 만들어 자신의 힘을 과시하였습니다.",
        morphemes: [ { hanja: "巨", meaning: "클 거" }, { hanja: "大", meaning: "큰 대" } ]
    },
    {
        id: "tb_0241", word: "유래", level: 2, subject: "국어",
        context: "이 민속 행사의 [ ? ]는 신라 때로 거슬러 올라갑니다.",
        morphemes: [ { hanja: "由", meaning: "말미암을 유" }, { hanja: "來", meaning: "올 래" } ]
    },
    {
        id: "tb_0242", word: "숭배", level: 2, subject: "국어",
        context: "그는 주위 사람으로부터 [ ? ]를 받았습니다.",
        morphemes: [ { hanja: "崇", meaning: "높을 숭" }, { hanja: "拜", meaning: "공경할 배" } ]
    },
    {
        id: "tb_0243", word: "판단", level: 2, subject: "국어",
        context: "어느 쪽을 택해야 할지 [ ? ]이 서지 않습니다.",
        morphemes: [ { hanja: "判", meaning: "판가름할 판" }, { hanja: "斷", meaning: "결단할 단" } ]
    },
    {
        id: "tb_0244", word: "감명", level: 2, subject: "국어",
        context: "나는 어린왕자를 [ ? ] 깊게 읽었습니다.",
        morphemes: [ { hanja: "感", meaning: "느낄 감" }, { hanja: "銘", meaning: "새길 명" } ]
    },
    {
        id: "tb_0245", word: "약초", level: 2, subject: "국어",
        context: "할아버지는 산에서 [ ? ]를 캐며 살았습니다.",
        morphemes: [ { hanja: "藥", meaning: "약 약" }, { hanja: "草", meaning: "풀 초" } ]
    },
    {
        id: "tb_0246", word: "방해", level: 2, subject: "국어",
        context: "공사 때문에 교통을 [ ? ]해서 죄송합니다.",
        morphemes: [ { hanja: "妨", meaning: "거리낄 방" }, { hanja: "害", meaning: "해할 해" } ]
    },
    {
        id: "tb_0247", word: "승낙", level: 2, subject: "국어",
        context: "방학에 자전거 여행을 해도 된다는 부모님의 [ ? ]을 받아 내었습니다.",
        morphemes: [ { hanja: "承", meaning: "받들 승" }, { hanja: "諾", meaning: "허락할 낙" } ]
    },
    {
        id: "tb_0248", word: "이용", level: 2, subject: "국어",
        context: "인터넷 검색을 [ ? ]하여 정보를 매우 빠르게 찾습니다.",
        morphemes: [ { hanja: "利", meaning: "이로울 리" }, { hanja: "用", meaning: "쓸 용" } ]
    },
    {
        id: "tb_0249", word: "정보", level: 2, subject: "국어",
        context: "오늘날은 [ ? ]의 홍수시대라 할 만큼 정보가 빠르게 전해집니다.",
        morphemes: [ { hanja: "情", meaning: "사정 정" }, { hanja: "報", meaning: "알릴 보" } ]
    },
    {
        id: "tb_0250", word: "섭취", level: 2, subject: "국어",
        context: "균형 잡힌 영양분을 [ ? ]하여야 합니다.",
        morphemes: [ { hanja: "攝", meaning: "빨아들일 섭" }, { hanja: "取", meaning: "가질 취" } ]
    },
    {
        id: "tb_0251", word: "보약", level: 2, subject: "국어",
        context: "밥이 [ ? ]이라는 말이 있습니다.",
        morphemes: [ { hanja: "補", meaning: "도울 보" }, { hanja: "藥", meaning: "약 약" } ]
    },
    {
        id: "tb_0252", word: "검색", level: 2, subject: "국어",
        context: "요즘은 자료를 [ ? ]하기가 매우 편리해졌습니다.",
        morphemes: [ { hanja: "檢", meaning: "검사할 검" }, { hanja: "索", meaning: "찾을 색" } ]
    },
    {
        id: "tb_0253", word: "조류", level: 2, subject: "국어",
        context: "야생 [ ? ]를 연구하는 학자가 될 것입니다.",
        morphemes: [ { hanja: "鳥", meaning: "새 조" }, { hanja: "類", meaning: "무리 류" } ]
    },
    {
        id: "tb_0254", word: "체험", level: 2, subject: "국어",
        context: "현장 [ ? ] 학습을 통하여 직접 다양한 체험을 하였습니다.",
        morphemes: [ { hanja: "體", meaning: "몸 체" }, { hanja: "驗", meaning: "경험할 험" } ]
    },
    {
        id: "tb_0255", word: "기사", level: 2, subject: "국어",
        context: "원자력 발전소와 관련한 특집 [ ? ]를 읽었습니다.",
        morphemes: [ { hanja: "記", meaning: "기록할 기" }, { hanja: "事", meaning: "일 사" } ]
    },
    {
        id: "tb_0256", word: "강타", level: 2, subject: "국어",
        context: "상대 팀은 우리 선수들의 [ ? ]에 속수무책이었습니다.",
        morphemes: [ { hanja: "强", meaning: "강할 강" }, { hanja: "打", meaning: "때릴 타" } ]
    },
    {
        id: "tb_0257", word: "예상", level: 2, subject: "국어",
        context: "[ ? ]보다 일이 빠르게 진행되고 있습니다.",
        morphemes: [ { hanja: "豫", meaning: "미리 예" }, { hanja: "想", meaning: "생각 상" } ]
    },
    {
        id: "tb_0258", word: "해적", level: 2, subject: "국어",
        context: "바다에서는 [ ? ]이 온갖 횡포를 부리고 있었다.",
        morphemes: [ { hanja: "海", meaning: "바다 해" }, { hanja: "賊", meaning: "도둑 적" } ]
    },
    {
        id: "tb_0259", word: "호위", level: 2, subject: "국어",
        context: "장군은 어둠을 타서 [ ? ]군의 호위 아래 전투장을 빠져나갔다.",
        morphemes: [ { hanja: "護", meaning: "보호할 호" }, { hanja: "衛", meaning: "지킬 위" } ]
    },
    {
        id: "tb_0260", word: "거점", level: 2, subject: "국어",
        context: "만주, 연해주 등지를 [ ? ]으로 삼아 독립운동을 전개했다.",
        morphemes: [ { hanja: "據", meaning: "의지할 거" }, { hanja: "點", meaning: "점 점" } ]
    },
    {
        id: "tb_0261", word: "토의", level: 2, subject: "국어",
        context: "그는 [ ? ] 주제와는 관련이 없는 이야기를 하고 있습니다.",
        morphemes: [ { hanja: "討", meaning: "검토할 토" }, { hanja: "議", meaning: "의논할 의" } ]
    },
    {
        id: "tb_0262", word: "안심", level: 2, subject: "국어",
        context: "[ ? ]하고 학교에 다닐 수 있는 길을 만들어 주세요.",
        morphemes: [ { hanja: "安", meaning: "편안할 안" }, { hanja: "心", meaning: "마음 심" } ]
    },
    {
        id: "tb_0263", word: "다양", level: 2, subject: "국어",
        context: "우리는 [ ? ]한 의견들을 발표하였습니다.",
        morphemes: [ { hanja: "多", meaning: "많을 다" }, { hanja: "樣", meaning: "모양 양" } ]
    },
    {
        id: "tb_0264", word: "통학", level: 2, subject: "국어",
        context: "[ ? ]버스를 타고 학교에 다닙니다.",
        morphemes: [ { hanja: "通", meaning: "통할 통" }, { hanja: "學", meaning: "배울 학" } ]
    },
    {
        id: "tb_0265", word: "항의", level: 2, subject: "국어",
        context: "일본 정부에 독도 문제에 대한 [ ? ] 편지를 보냈다.",
        morphemes: [ { hanja: "抗", meaning: "대항할 항" }, { hanja: "議", meaning: "의논할 의" } ]
    },
    {
        id: "tb_0266", word: "제안", level: 2, subject: "국어",
        context: "우리 시에 자전거 도로를 만들어 달라고 [ ? ]합니다.",
        morphemes: [ { hanja: "提", meaning: "끌 제" }, { hanja: "案", meaning: "생각 안" } ]
    },
    {
        id: "tb_0267", word: "의견", level: 2, subject: "국어",
        context: "[ ? ]을 제시할 때는 그 까닭도 제시하여야 설득력이 있습니다.",
        morphemes: [ { hanja: "意", meaning: "뜻 의" }, { hanja: "見", meaning: "생각할 견" } ]
    },
    {
        id: "tb_0268", word: "제시", level: 2, subject: "국어",
        context: "정치 참여 방법에는 투표, 인터넷을 통한 의견 [ ? ] 등이 있습니다.",
        morphemes: [ { hanja: "提", meaning: "들 제" }, { hanja: "示", meaning: "보일 시" } ]
    },
    {
        id: "tb_0269", word: "인기", level: 2, subject: "국어",
        context: "최고의 [ ? ]를 끄는 연예인이 되고 싶어 하는 아이들도 있습니다.",
        morphemes: [ { hanja: "人", meaning: "사람 인" }, { hanja: "氣", meaning: "기운 기" } ]
    },
    {
        id: "tb_0270", word: "외투", level: 2, subject: "국어",
        context: "어린 슈바이처는 친구를 위해 [ ? ]를 벗어 주었습니다.",
        morphemes: [ { hanja: "外", meaning: "밖 외" }, { hanja: "套", meaning: "덮개 투" } ]
    },
    {
        id: "tb_0271", word: "다정", level: 2, subject: "국어",
        context: "전화기를 통해 들려오는 친구의 [ ? ]한 목소리에 행복한 느낌이 들었습니다.",
        morphemes: [ { hanja: "多", meaning: "많을 다" }, { hanja: "情", meaning: "뜻 정" } ]
    },
    {
        id: "tb_0272", word: "특성", level: 2, subject: "국어",
        context: "곤충의 [ ? ]에 대해 조사해보았습니다.",
        morphemes: [ { hanja: "特", meaning: "특별할 특" }, { hanja: "性", meaning: "성품 성" } ]
    },
    {
        id: "tb_0273", word: "명당", level: 2, subject: "국어",
        context: "우리 선조들은 [ ? ]을 찾아 조상의 묘를 썼습니다.",
        morphemes: [ { hanja: "明", meaning: "밝을 명" }, { hanja: "堂", meaning: "집 당" } ]
    },
    {
        id: "tb_0274", word: "순산", level: 2, subject: "국어",
        context: "이모가 조카를 [ ? ]하였다는 소식을 듣고 모두 기뻐하였습니다.",
        morphemes: [ { hanja: "順", meaning: "순할 순" }, { hanja: "産", meaning: "낳을 산" } ]
    },
    {
        id: "tb_0275", word: "왜적", level: 2, subject: "국어",
        context: "남해안 일대에는 [ ? ]의 노략질이 끊이지 않았습니다.",
        morphemes: [ { hanja: "倭", meaning: "일본 왜" }, { hanja: "賊", meaning: "도둑 적" } ]
    },
    {
        id: "tb_0276", word: "의병", level: 2, subject: "국어",
        context: "[ ? ]은 산성에서 왜병들과 맞서 싸웠습니다.",
        morphemes: [ { hanja: "義", meaning: "옳을 의" }, { hanja: "兵", meaning: "병사 병" } ]
    },
    {
        id: "tb_0277", word: "살생", level: 2, subject: "국어",
        context: "불교에서는 [ ? ]을 금지합니다.",
        morphemes: [ { hanja: "殺", meaning: "죽일 살" }, { hanja: "生", meaning: "생명 생" } ]
    },
    {
        id: "tb_0278", word: "차례", level: 2, subject: "국어",
        context: "나는 책을 펴면 [ ? ]부터 읽습니다.",
        morphemes: [ { hanja: "次", meaning: "순서 차" }, { hanja: "例", meaning: "법식 례" } ]
    },
    {
        id: "tb_0279", word: "상상", level: 2, subject: "국어",
        context: "시에 담긴 마음을 [ ? ]하여 봅시다.",
        morphemes: [ { hanja: "想", meaning: "" }, { hanja: "像", meaning: "" } ]
    },
    {
        id: "tb_0280", word: "사용", level: 2, subject: "국어",
        context: "여럿이 함께 [ ? ]하는 공공시설은 더욱 더 아끼고 사랑해야 합니다.",
        morphemes: [ { hanja: "使", meaning: "부릴 사" }, { hanja: "用", meaning: "쓸 용" } ]
    },
    {
        id: "tb_0281", word: "관련", level: 2, subject: "국어",
        context: "흡연은 폐암과 밀접한 [ ? ]이 있습니다.",
        morphemes: [ { hanja: "關", meaning: "관계할 관" }, { hanja: "聯", meaning: "잇닿을 련" } ]
    },
    {
        id: "tb_0282", word: "관심", level: 2, subject: "국어",
        context: "친구들의 [ ? ]을 모으기 위해 어떤 행동을 해야 할까?",
        morphemes: [ { hanja: "關", meaning: "관계할 관" }, { hanja: "心", meaning: "마음 심" } ]
    },
    {
        id: "tb_0283", word: "평범", level: 2, subject: "국어",
        context: "그는 반에서 그다지 눈에 잘 띄지 않는 [ ? ]한 학생일 뿐이다.",
        morphemes: [ { hanja: "平", meaning: "보통 평" }, { hanja: "凡", meaning: "범상할 범" } ]
    },
    {
        id: "tb_0284", word: "현명", level: 2, subject: "사회",
        context: "[ ? ]한 선택, 알뜰한 생활의 첫 걸음!",
        morphemes: [ { hanja: "賢", meaning: "어질 현" }, { hanja: "明", meaning: "밝을 명" } ]
    },
    {
        id: "tb_0285", word: "한정", level: 2, subject: "사회",
        context: "사고 싶은 것은 많지만 쓸 돈은 [ ? ]되어 있으니 어떻게 해야 할까요?",
        morphemes: [ { hanja: "限", meaning: "한계 한" }, { hanja: "定", meaning: "정할 정" } ]
    },
    {
        id: "tb_0286", word: "생산", level: 2, subject: "사회",
        context: "그 회사는 최근 소형 자동차 쪽으로 [ ? ]을 늘리고 있습니다.",
        morphemes: [ { hanja: "生", meaning: "날 생" }, { hanja: "産", meaning: "낳을 산" } ]
    },
    {
        id: "tb_0287", word: "이윤", level: 2, subject: "사회",
        context: "이것은 [ ? ]을 안 남기고 파는 것입니다.",
        morphemes: [ { hanja: "利", meaning: "이득 리" }, { hanja: "潤", meaning: "이득 윤" } ]
    },
    {
        id: "tb_0288", word: "임업", level: 2, subject: "사회",
        context: "그곳은 숲이 우거져 [ ? ]이 주요한 산업을 이루고 있다.",
        morphemes: [ { hanja: "林", meaning: "수풀 림" }, { hanja: "業", meaning: "업 업" } ]
    },
    {
        id: "tb_0289", word: "어업", level: 2, subject: "사회",
        context: "먼 바다에 나가서 고기잡이하는 일을 원양[ ? ]이라 합니다.",
        morphemes: [ { hanja: "漁", meaning: "고기잡을 어" }, { hanja: "業", meaning: "업 업" } ]
    },
    {
        id: "tb_0290", word: "가상", level: 2, subject: "사회",
        context: "게임에 몰두하면 현실과 [ ? ]세계를 구별하기 어려워지기도 합니다.",
        morphemes: [ { hanja: "假", meaning: "거짓 가" }, { hanja: "想", meaning: "생각 상" } ]
    },
    {
        id: "tb_0291", word: "비용", level: 2, subject: "사회",
        context: "여행[ ? ]을 마련하기 위하여 매월 저축을 합니다.",
        morphemes: [ { hanja: "費", meaning: "쓸 비" }, { hanja: "用", meaning: "쓸 용" } ]
    },
    {
        id: "tb_0292", word: "소득", level: 2, subject: "사회",
        context: "부모님께서는 해마다 연말에 월급에 대한 [ ? ]신고를 합니다.",
        morphemes: [ { hanja: "所", meaning: "바 소" }, { hanja: "得", meaning: "얻을 득" } ]
    },
    {
        id: "tb_0293", word: "가계", level: 2, subject: "사회",
        context: "[ ? ] 빚이 생기지 않도록 살림살이를 계획적으로 합니다.",
        morphemes: [ { hanja: "家", meaning: "집 가" }, { hanja: "計", meaning: "셀 계" } ]
    },
    {
        id: "tb_0294", word: "대출", level: 2, subject: "사회",
        context: "은행에서 사업자금을 [ ? ]받았습니다.",
        morphemes: [ { hanja: "貸", meaning: "빌릴 대" }, { hanja: "出", meaning: "날 출" } ]
    },
    {
        id: "tb_0295", word: "합리", level: 2, subject: "사회",
        context: "이치를 따져 생각하고 [ ? ]적인 결정을 내립니다.",
        morphemes: [ { hanja: "合", meaning: "합할 합" }, { hanja: "理", meaning: "이치 리" } ]
    },
    {
        id: "tb_0296", word: "절약", level: 2, subject: "사회",
        context: "에너지를 [ ? ]하여 낭비하지 않도록 합니다.",
        morphemes: [ { hanja: "節", meaning: "조절할 절" }, { hanja: "約", meaning: "아낄 약" } ]
    },
    {
        id: "tb_0297", word: "권익", level: 2, subject: "사회",
        context: "노동자들의 [ ? ]을 보호하고자 법으로 정하였습니다.",
        morphemes: [ { hanja: "權", meaning: "권세 권" }, { hanja: "益", meaning: "더할 익" } ]
    },
    {
        id: "tb_0298", word: "환불", level: 2, subject: "사회",
        context: "배달된 물건이 불량품이어서 [ ? ]을 요구하였습니다.",
        morphemes: [ { hanja: "還", meaning: "돌아올 환" }, { hanja: "拂", meaning: "지불할 불" } ]
    },
    {
        id: "tb_0299", word: "요구", level: 2, subject: "사회",
        context: "근로자들이 월급을 많이 [ ? ]하여 회사와 갈등을 빚고 있습니다.",
        morphemes: [ { hanja: "要", meaning: "구할 요" }, { hanja: "求", meaning: "구할 구" } ]
    },
    {
        id: "tb_0300", word: "분쟁", level: 2, subject: "사회",
        context: "우리나라와 일본 간의 [ ? ]이 끊임없이 계속되었다.",
        morphemes: [ { hanja: "紛", meaning: "어지러워질 분" }, { hanja: "爭", meaning: "다툴 쟁" } ]
    },
    {
        id: "tb_0301", word: "촌락", level: 2, subject: "사회",
        context: "강의 주변에는 [ ? ]이 형성되어 있다.",
        morphemes: [ { hanja: "村", meaning: "마을 촌" }, { hanja: "落", meaning: "떨어질 락" } ]
    },
    {
        id: "tb_0302", word: "농촌", level: 2, subject: "사회",
        context: "우리 [ ? ]에는 젊은이가 별로 없고 주로 노인들이 농사를 짓고 있습니다.",
        morphemes: [ { hanja: "農", meaning: "농사 농" }, { hanja: "村", meaning: "마을 촌" } ]
    },
    {
        id: "tb_0303", word: "평야", level: 2, subject: "사회",
        context: "너른 [ ? ]에서 벼가 누렇게 익어가고 있습니다.",
        morphemes: [ { hanja: "平", meaning: "평평할 평" }, { hanja: "野", meaning: "들 야" } ]
    },
    {
        id: "tb_0304", word: "하천", level: 2, subject: "사회",
        context: "[ ? ]에는 1급수에 자라는 물고기가 있습니다.",
        morphemes: [ { hanja: "河", meaning: "강 하" }, { hanja: "川", meaning: "내 천" } ]
    },
    {
        id: "tb_0305", word: "양식", level: 2, subject: "사회",
        context: "남해바다에서는 김과 굴을 [ ? ]합니다.",
        morphemes: [ { hanja: "養", meaning: "기를 양" }, { hanja: "殖", meaning: "기를 식" } ]
    },
    {
        id: "tb_0306", word: "재배", level: 2, subject: "사회",
        context: "산에서 약초와 버섯을 [ ? ]하여 소득을 올립니다.",
        morphemes: [ { hanja: "栽", meaning: "심을 재" }, { hanja: "培", meaning: "북돋울 배" } ]
    },
    {
        id: "tb_0307", word: "축제", level: 2, subject: "사회",
        context: "청계천에서는 등에 불을 밝힌 등[ ? ]가 열립니다.",
        morphemes: [ { hanja: "祝", meaning: "빌 축" }, { hanja: "祭", meaning: "제사 제" } ]
    },
    {
        id: "tb_0308", word: "풍어", level: 2, subject: "사회",
        context: "어촌에서는 물고기가 많이 잡히기를 기원하며 [ ? ]제를 올립니다.",
        morphemes: [ { hanja: "豊", meaning: "풍성할 풍" }, { hanja: "漁", meaning: "고기잡을 어" } ]
    },
    {
        id: "tb_0309", word: "귀농", level: 2, subject: "사회",
        context: "해마다 [ ? ]인구가 늘어나고 있습니다.",
        morphemes: [ { hanja: "歸", meaning: "돌아갈 귀" }, { hanja: "農", meaning: "농사 농" } ]
    },
    {
        id: "tb_0310", word: "지형", level: 2, subject: "사회",
        context: "우리나라 [ ? ]을 보면 동쪽에는 산지가 많고 서쪽으로는 강과 평야가 많습니다.",
        morphemes: [ { hanja: "地", meaning: "땅 지" }, { hanja: "形", meaning: "모양 형" } ]
    },
    {
        id: "tb_0311", word: "평지", level: 2, subject: "사회",
        context: "산지보다 [ ? ]에 도시가 발달합니다.",
        morphemes: [ { hanja: "平", meaning: "평평할 평" }, { hanja: "地", meaning: "땅 지" } ]
    },
    {
        id: "tb_0312", word: "확대", level: 2, subject: "사회",
        context: "서울은 조선시대에 비해 매우 [ ? ]되었습니다.",
        morphemes: [ { hanja: "擴", meaning: "넓힐 확" }, { hanja: "大", meaning: "큰 대" } ]
    },
    {
        id: "tb_0313", word: "인구", level: 2, subject: "사회",
        context: "수도권을 중심으로 [ ? ]가 집중되고 있습니다.",
        morphemes: [ { hanja: "人", meaning: "사람 인" }, { hanja: "口", meaning: "입 구" } ]
    },
    {
        id: "tb_0314", word: "이동", level: 2, subject: "사회",
        context: "인구 [ ? ]의 이유는 매우 다양합니다.",
        morphemes: [ { hanja: "移", meaning: "옮길 이" }, { hanja: "動", meaning: "움직일 동" } ]
    },
    {
        id: "tb_0315", word: "발생", level: 2, subject: "사회",
        context: "도시에 있는 많은 자동차에서 배기가스가 [ ? ]합니다.",
        morphemes: [ { hanja: "發", meaning: "쏠 발" }, { hanja: "生", meaning: "날 생" } ]
    },
    {
        id: "tb_0316", word: "오염", level: 2, subject: "사회",
        context: "도시와 촌락에서 환경이 [ ? ]되는 원인을 살펴봅시다.",
        morphemes: [ { hanja: "汚", meaning: "더러울 오" }, { hanja: "染", meaning: "물들일 염" } ]
    },
    {
        id: "tb_0317", word: "고령", level: 2, subject: "사회",
        context: "의학의 발달로 평균 수명이 연장되고 인구의 [ ? ]화 문제가 발생하고 있습니다.",
        morphemes: [ { hanja: "高", meaning: "높을 고" }, { hanja: "齡", meaning: "나이 령" } ]
    },
    {
        id: "tb_0318", word: "폐교", level: 2, subject: "사회",
        context: "[ ? ]를 활용하여 도자기 문화 체험 장소를 만들었습니다.",
        morphemes: [ { hanja: "廢", meaning: "폐할 폐" }, { hanja: "校", meaning: "학교 교" } ]
    },
    {
        id: "tb_0319", word: "상승", level: 2, subject: "사회",
        context: "날마다 치솟는 물가[ ? ]으로 가정의 경제가 어려워지고 있습니다.",
        morphemes: [ { hanja: "上", meaning: "위 상" }, { hanja: "昇", meaning: "오를 승" } ]
    },
    {
        id: "tb_0320", word: "토양", level: 2, subject: "사회",
        context: "[ ? ]이 기름져서 농사가 잘 된다.",
        morphemes: [ { hanja: "土", meaning: "흙 토" }, { hanja: "壤", meaning: "흙 양" } ]
    },
    {
        id: "tb_0321", word: "수질", level: 2, subject: "사회",
        context: "우리 동네 약수터는 정기적으로 [ ? ]검사를 합니다.",
        morphemes: [ { hanja: "水", meaning: "물 수" }, { hanja: "質", meaning: "바탕 질" } ]
    },
    {
        id: "tb_0322", word: "요금", level: 2, subject: "사회",
        context: "교통 카드의 사용으로 교통[ ? ] 지불이 매우 편리해졌습니다.",
        morphemes: [ { hanja: "料", meaning: "헤아릴 요" }, { hanja: "金", meaning: "쇠 금" } ]
    },
    {
        id: "tb_0323", word: "대처", level: 2, subject: "사회",
        context: "그는 상황에 [ ? ]하는 능력이 뛰어납니다.",
        morphemes: [ { hanja: "對", meaning: "대할 대" }, { hanja: "處", meaning: "처리할 처" } ]
    },
    {
        id: "tb_0324", word: "양성", level: 2, subject: "사회",
        context: "성에 따른 차별을 받지 않고 자신의 능력에 따라 동등한 기회를 누리는 것을 [ ? ]평등이라고 합니다.",
        morphemes: [ { hanja: "兩", meaning: "두 량" }, { hanja: "性", meaning: "성품 성" } ]
    },
    {
        id: "tb_0325", word: "약자", level: 2, subject: "사회",
        context: "버스나 지하철의 노[ ? ]석은 노인과 약한 사람을 위한 자리로 마련한 것입니다.",
        morphemes: [ { hanja: "弱", meaning: "약할 약" }, { hanja: "者", meaning: "사람 자" } ]
    },
    {
        id: "tb_0326", word: "공존", level: 2, subject: "사회",
        context: "인간은 지구상의 다른 생물들과 [ ? ]하며 살아가고 있습니다.",
        morphemes: [ { hanja: "共", meaning: "함께 공" }, { hanja: "存", meaning: "있을 존" } ]
    },
    {
        id: "tb_0327", word: "출산", level: 2, subject: "사회",
        context: "다자녀 가족을 위한 배려는 [ ? ]을 장려하는 방법입니다.",
        morphemes: [ { hanja: "出", meaning: "날 출" }, { hanja: "産", meaning: "낳을 산" } ]
    },
    {
        id: "tb_0328", word: "입양", level: 2, subject: "사회",
        context: "[ ? ]으로 생긴 동생도 내 가족입니다.",
        morphemes: [ { hanja: "入", meaning: "들 입" }, { hanja: "養", meaning: "기를 양" } ]
    },
    {
        id: "tb_0329", word: "제한", level: 2, subject: "사회",
        context: "자연을 보호하기 위해 개발[ ? ]구역을 정하였습니다.",
        morphemes: [ { hanja: "制", meaning: "억제할 제" }, { hanja: "限", meaning: "한정 한" } ]
    },
    {
        id: "tb_0330", word: "차별", level: 2, subject: "사회",
        context: "부모님은 우리 형제를 [ ? ] 없이 똑같이 사랑하십니다.",
        morphemes: [ { hanja: "差", meaning: "다를 차" }, { hanja: "別", meaning: "구별할 별" } ]
    },
    {
        id: "tb_0331", word: "동등", level: 2, subject: "사회",
        context: "우리 사회는 누구에게나 [ ? ]한 기회와 권리를 주었습니다.",
        morphemes: [ { hanja: "同", meaning: "한 가지 동" }, { hanja: "等", meaning: "같을 등" } ]
    },
    {
        id: "tb_0332", word: "노동", level: 2, subject: "사회",
        context: "5월1일은 [ ? ]자를 위한 근로자의 날입니다.",
        morphemes: [ { hanja: "勞", meaning: "일할 로" }, { hanja: "動", meaning: "움직일 동" } ]
    },
    {
        id: "tb_0333", word: "부양", level: 2, subject: "사회",
        context: "아버지는 [ ? ]가족을 위해 열심히 일하십니다.",
        morphemes: [ { hanja: "扶", meaning: "도울 부" }, { hanja: "養", meaning: "기를 양" } ]
    },
    {
        id: "tb_0334", word: "희망", level: 2, subject: "사회",
        context: "장래 [ ? ]에 대해 생각해 보았습니다.",
        morphemes: [ { hanja: "希", meaning: "바랄 희" }, { hanja: "望", meaning: "바랄 망" } ]
    },
    {
        id: "tb_0335", word: "보육", level: 2, subject: "사회",
        context: "맞벌이 부모의 아이를 돌보기 위한 [ ? ]교실이 학교에도 생겼습니다.",
        morphemes: [ { hanja: "保", meaning: "도울 보" }, { hanja: "育", meaning: "기를 육" } ]
    },
    {
        id: "tb_0336", word: "육아", level: 2, subject: "사회",
        context: "어머니는 동생을 기르기 위해 [ ? ] 휴직 중입니다.",
        morphemes: [ { hanja: "育", meaning: "기를 육" }, { hanja: "兒", meaning: "아이 아" } ]
    },
    {
        id: "tb_0337", word: "휴직", level: 2, subject: "사회",
        context: "이모는 공부를 하기 위해 [ ? ]하였습니다.",
        morphemes: [ { hanja: "休", meaning: "쉴 휴" }, { hanja: "職", meaning: "직분 직" } ]
    },
    {
        id: "tb_0338", word: "정년", level: 2, subject: "사회",
        context: "할아버지께서는 [ ? ]퇴임을 하셨습니다.",
        morphemes: [ { hanja: "停", meaning: "멈출 정" }, { hanja: "年", meaning: "나이 년" } ]
    },
    {
        id: "tb_0339", word: "연장", level: 2, subject: "사회",
        context: "해가 긴 여름철에는 근무 시간을 [ ? ]합니다.",
        morphemes: [ { hanja: "延", meaning: "끌 연" }, { hanja: "長", meaning: "길 장" } ]
    },
    {
        id: "tb_0340", word: "선진", level: 2, subject: "사회",
        context: "[ ? ]국의 대처 방안을 살펴보고 우리의 문제도 해결책을 찾아봅니다.",
        morphemes: [ { hanja: "先", meaning: "먼저 선" }, { hanja: "進", meaning: "나아갈 진" } ]
    },
    {
        id: "tb_0341", word: "유익", level: 2, subject: "사회",
        context: "책을 통해 [ ? ]한 정보를 많이 얻습니다.",
        morphemes: [ { hanja: "有", meaning: "있을 유" }, { hanja: "益", meaning: "더할 익" } ]
    },
    {
        id: "tb_0342", word: "여가", level: 2, subject: "사회",
        context: "[ ? ]시간에 편하게 쉬기도 하고 여행을 가기도 합니다.",
        morphemes: [ { hanja: "餘", meaning: "남을 여" }, { hanja: "暇", meaning: "겨를 가" } ]
    },
    {
        id: "tb_0343", word: "면담", level: 2, subject: "사회",
        context: "교장선생님을 [ ? ]하였습니다.",
        morphemes: [ { hanja: "面", meaning: "낯 면" }, { hanja: "談", meaning: "말씀 담" } ]
    },
    {
        id: "tb_0344", word: "부당", level: 2, subject: "사회",
        context: "외국인 근로자들이 [ ? ]하게 대우받지 않도록 돕고 있습니다.",
        morphemes: [ { hanja: "不", meaning: "아닐 부" }, { hanja: "當", meaning: "마땅할 당" } ]
    },
    {
        id: "tb_0345", word: "편견", level: 2, subject: "사회",
        context: "다른 문화를 가진 사람들을 [ ? ] 없이 인정해주는 태도가 필요하겠지요.",
        morphemes: [ { hanja: "偏", meaning: "치우칠 편" }, { hanja: "見", meaning: "볼 견" } ]
    },
    {
        id: "tb_0346", word: "탈북", level: 2, subject: "사회",
        context: "[ ? ]자들이 편하고 안정되게 잘 살 수 있도록 돌보아줍니다.",
        morphemes: [ { hanja: "脫", meaning: "벗어날 탈" }, { hanja: "北", meaning: "북녘 북" } ]
    },
    {
        id: "tb_0347", word: "정착", level: 2, subject: "사회",
        context: "이제 떠돌이를 그만 하고 [ ? ]해서 살아야지.",
        morphemes: [ { hanja: "定", meaning: "정할 정" }, { hanja: "着", meaning: "붙을 착" } ]
    },
    {
        id: "tb_0348", word: "소수", level: 2, subject: "사회",
        context: "[ ? ]자들이 차별을 당하는 까닭은 무엇일까요?",
        morphemes: [ { hanja: "少", meaning: "적을 소" }, { hanja: "數", meaning: "셈 수" } ]
    },
    {
        id: "tb_0349", word: "분수", level: 2, subject: "수학",
        context: "[ ? ]에는 분모와 분자가 있습니다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "數", meaning: "셈 수" } ]
    },
    {
        id: "tb_0350", word: "분모", level: 2, subject: "수학",
        context: "[ ? ]가 분자보다 큰 분수를 진분수라고 합니다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "母", meaning: "어머니 모" } ]
    },
    {
        id: "tb_0351", word: "계산", level: 2, subject: "수학",
        context: "그는 숫자 감각이 있어서인지 [ ? ]의 속도가 빠르다.",
        morphemes: [ { hanja: "計", meaning: "셈 계" }, { hanja: "算", meaning: "셀 산" } ]
    },
    {
        id: "tb_0352", word: "필산", level: 2, subject: "수학",
        context: "종이에 적으며 [ ? ]으로 하였습니다.",
        morphemes: [ { hanja: "筆", meaning: "붓 필" }, { hanja: "算", meaning: "셀 산" } ]
    },
    {
        id: "tb_0353", word: "등산", level: 2, subject: "수학",
        context: "일요일에 온 가족이 [ ? ]을 하였습니다.",
        morphemes: [ { hanja: "登", meaning: "오를 등" }, { hanja: "山", meaning: "산 산" } ]
    },
    {
        id: "tb_0354", word: "야영", level: 2, subject: "수학",
        context: "우리는 산에서 [ ? ]을 하였다.",
        morphemes: [ { hanja: "野", meaning: "들 야" }, { hanja: "營", meaning: "진영 영" } ]
    },
    {
        id: "tb_0355", word: "직각", level: 2, subject: "수학",
        context: "[ ? ]삼각형은 한 각이 90도입니다.",
        morphemes: [ { hanja: "直", meaning: "곧을 직" }, { hanja: "角", meaning: "뿔 각" } ]
    },
    {
        id: "tb_0356", word: "수직", level: 2, subject: "수학",
        context: "[ ? ]과 수선을 넣어 문장을 만들어 보시오.",
        morphemes: [ { hanja: "垂", meaning: "드리울 수" }, { hanja: "直", meaning: "곧을 직" } ]
    },
    {
        id: "tb_0357", word: "평행", level: 2, subject: "수학",
        context: "서로 만나지 않는 두 직선을 [ ? ]하다고 합니다.",
        morphemes: [ { hanja: "平", meaning: "나란할 평" }, { hanja: "行", meaning: "갈 행" } ]
    },
    {
        id: "tb_0358", word: "사각", level: 2, subject: "수학",
        context: "직[ ? ]형의 여러 가지 성질을 알아봅시다.",
        morphemes: [ { hanja: "四", meaning: "넉 사" }, { hanja: "角", meaning: "뿔 각" } ]
    },
    {
        id: "tb_0359", word: "도형", level: 2, subject: "수학",
        context: "여러 가지 [ ? ]을 만들어 봅시다.",
        morphemes: [ { hanja: "圖", meaning: "그림 도" }, { hanja: "形", meaning: "모양 형" } ]
    },
    {
        id: "tb_0360", word: "선분", level: 2, subject: "수학",
        context: "삼각형은 세 개의 [ ? ]으로 이루어져 있다.",
        morphemes: [ { hanja: "線", meaning: "줄 선" }, { hanja: "分", meaning: "나눌 분" } ]
    },
    {
        id: "tb_0361", word: "평면", level: 2, subject: "수학",
        context: "바닥을 [ ? ]으로 하여 비가 오면 늘 물이 굅니다.",
        morphemes: [ { hanja: "平", meaning: "평평할 평" }, { hanja: "面", meaning: "낯 면" } ]
    },
    {
        id: "tb_0362", word: "거실", level: 2, subject: "수학",
        context: "우리 가족은 저녁에 [ ? ]에서 대화를 나눕니다.",
        morphemes: [ { hanja: "居", meaning: "살 거" }, { hanja: "室", meaning: "집 실" } ]
    },
    {
        id: "tb_0363", word: "이상", level: 2, subject: "수학",
        context: "투표를 할 수 있는 나이는 19세 [ ? ]입니다.",
        morphemes: [ { hanja: "以", meaning: "부터 이" }, { hanja: "上", meaning: "위 상" } ]
    },
    {
        id: "tb_0364", word: "이하", level: 2, subject: "수학",
        context: "키 120cm [ ? ]의 어린이는 이 놀이기구를 탈 수 없습니다.",
        morphemes: [ { hanja: "以", meaning: "부터 이" }, { hanja: "下", meaning: "아래 하" } ]
    },
    {
        id: "tb_0365", word: "다독", level: 2, subject: "수학",
        context: "수빈이가 가장 많은 책을 읽어 [ ? ]상을 받았습니다.",
        morphemes: [ { hanja: "多", meaning: "많을 다" }, { hanja: "讀", meaning: "읽을 독" } ]
    },
    {
        id: "tb_0366", word: "초과", level: 2, subject: "수학",
        context: "이번 관광 유람선 사고는 정원을 [ ? ]해 운행하던 중 일어난 것으로 밝혀졌습니다.",
        morphemes: [ { hanja: "超", meaning: "넘을 초" }, { hanja: "過", meaning: "지날 과" } ]
    },
    {
        id: "tb_0367", word: "미만", level: 2, subject: "수학",
        context: "하루 염분 섭취량을 10그램 [ ? ]으로 제한하는 것이 건강에 좋습니다.",
        morphemes: [ { hanja: "未", meaning: "아닐 미" }, { hanja: "滿", meaning: "찰 만" } ]
    },
    {
        id: "tb_0368", word: "체급", level: 2, subject: "수학",
        context: "그 선수는 이번 경기에 [ ? ]을 올려 출전합니다.",
        morphemes: [ { hanja: "體", meaning: "몸 체" }, { hanja: "級", meaning: "등급 급" } ]
    },
    {
        id: "tb_0369", word: "연속", level: 2, subject: "수학",
        context: "어머니께서는 [ ? ]극을 재미있게 보십니다.",
        morphemes: [ { hanja: "連", meaning: "잇닿을 련" }, { hanja: "續", meaning: "이을 속" } ]
    },
    {
        id: "tb_0370", word: "체온", level: 2, subject: "수학",
        context: "[ ? ]이 변하는 동물을 변온동물이라고 합니다.",
        morphemes: [ { hanja: "體", meaning: "몸 체" }, { hanja: "溫", meaning: "따뜻할 온" } ]
    },
    {
        id: "tb_0371", word: "과정", level: 2, subject: "수학",
        context: "자동차의 생산[ ? ]을 자세히 살펴 보았습니다.",
        morphemes: [ { hanja: "過", meaning: "지날 과" }, { hanja: "程", meaning: "정도 정" } ]
    },
    {
        id: "tb_0372", word: "조건", level: 2, subject: "수학",
        context: "오늘의 토론 주제는 좋은 글의 [ ? ]이 무엇인가에 대한 것입니다.",
        morphemes: [ { hanja: "條", meaning: "가지 조" }, { hanja: "件", meaning: "사건 건" } ]
    },
    {
        id: "tb_0373", word: "화분", level: 2, subject: "과학",
        context: "[ ? ]에 꽃씨를 심었더니 어느 새 파릇파릇 잎이 돋았습니다.",
        morphemes: [ { hanja: "花", meaning: "꽃 화" }, { hanja: "盆", meaning: "동이 분" } ]
    },
    {
        id: "tb_0374", word: "식물", level: 2, subject: "과학",
        context: "어머니는 정원에 다양한 종류의 [ ? ]을 심어 가꾸십니다.",
        morphemes: [ { hanja: "植", meaning: "심을 식" }, { hanja: "物", meaning: "만물 물" } ]
    },
    {
        id: "tb_0375", word: "추측", level: 2, subject: "과학",
        context: "이야기의 원인과 결과를 살펴 뒷이야기를 [ ? ]합니다.",
        morphemes: [ { hanja: "推", meaning: "밀 추" }, { hanja: "測", meaning: "헤아릴 측" } ]
    },
    {
        id: "tb_0376", word: "표시", level: 2, subject: "과학",
        context: "오누이는 돌아오는 길을 [ ? ]하기 위해 빵조각을 잘라 던졌습니다.",
        morphemes: [ { hanja: "標", meaning: "표기할 표" }, { hanja: "示", meaning: "보일 시" } ]
    },
    {
        id: "tb_0377", word: "분류", level: 2, subject: "과학",
        context: "식물을 꽃의 색깔에 따라 [ ? ]하여 봅니다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "類", meaning: "무리 류" } ]
    },
    {
        id: "tb_0378", word: "확인", level: 2, subject: "과학",
        context: "숙제를 하고 부모님의 [ ? ]을 받습니다.",
        morphemes: [ { hanja: "確", meaning: "굳을 확" }, { hanja: "認", meaning: "알 인" } ]
    },
    {
        id: "tb_0379", word: "원래", level: 2, subject: "과학",
        context: "그는 [ ? ] 친절한 사람입니다.",
        morphemes: [ { hanja: "原", meaning: "근원 원" }, { hanja: "來", meaning: "올 래" } ]
    },
    {
        id: "tb_0380", word: "배설", level: 2, subject: "과학",
        context: "우리 몸에는 소화기관, 순환기관, [ ? ]기관이 있습니다.",
        morphemes: [ { hanja: "排", meaning: "밀칠 배" }, { hanja: "泄", meaning: "샐 설" } ]
    },
    {
        id: "tb_0381", word: "식충", level: 2, subject: "과학",
        context: "파리지옥은 늪지대에 사는 여러해살이풀로 [ ? ]식물입니다.",
        morphemes: [ { hanja: "食", meaning: "먹을 식" }, { hanja: "蟲", meaning: "벌레 충" } ]
    },
    {
        id: "tb_0382", word: "증명", level: 2, subject: "과학",
        context: "과학자는 자신의 주장을 명백하게 [ ? ]하여 보여줍니다.",
        morphemes: [ { hanja: "證", meaning: "증거 증" }, { hanja: "明", meaning: "밝을 명" } ]
    },
    {
        id: "tb_0383", word: "소화", level: 2, subject: "과학",
        context: "채소는 [ ? ]가 잘 됩니다.",
        morphemes: [ { hanja: "消", meaning: "사라질 소" }, { hanja: "化", meaning: "될 화" } ]
    },
    {
        id: "tb_0384", word: "사막", level: 2, subject: "과학",
        context: "[ ? ]은 밤에 기온이 급격히 떨어집니다.",
        morphemes: [ { hanja: "沙", meaning: "모래 사" }, { hanja: "漠", meaning: "사막 막" } ]
    },
    {
        id: "tb_0385", word: "양분", level: 2, subject: "과학",
        context: "식물은 흙에서 [ ? ]을 얻습니다.",
        morphemes: [ { hanja: "養", meaning: "기를 양" }, { hanja: "分", meaning: "나눌 분" } ]
    },
    {
        id: "tb_0386", word: "기온", level: 2, subject: "과학",
        context: "겨울이 다가오며 [ ? ]이 점점 낮아지고 있습니다.",
        morphemes: [ { hanja: "氣", meaning: "기운 기" }, { hanja: "溫", meaning: "따뜻할 온" } ]
    },
    {
        id: "tb_0387", word: "반사", level: 2, subject: "과학",
        context: "거울은 빛을 [ ? ]합니다.",
        morphemes: [ { hanja: "反", meaning: "돌이길 반" }, { hanja: "射", meaning: "쏠 사" } ]
    },
    {
        id: "tb_0388", word: "표면", level: 2, subject: "과학",
        context: "박물관에서 본 도자기의 [ ? ]은 매우 매끄럽습니다.",
        morphemes: [ { hanja: "表", meaning: "겉 표" }, { hanja: "面", meaning: "낯 면" } ]
    },
    {
        id: "tb_0389", word: "평상", level: 2, subject: "과학",
        context: "느티나무 아래에 놓인 [ ? ]에 마을 사람들이 모여 앉았습니다.",
        morphemes: [ { hanja: "平", meaning: "평평할 평" }, { hanja: "床", meaning: "상 상" } ]
    },
    {
        id: "tb_0390", word: "특허", level: 2, subject: "과학",
        context: "[ ? ]청에서 특허에 관련된 사무를 관리합니다.",
        morphemes: [ { hanja: "特", meaning: "특별할 특" }, { hanja: "許", meaning: "허락할 허" } ]
    },
    {
        id: "tb_0391", word: "건축", level: 2, subject: "과학",
        context: "최근 [ ? ] 기술의 발달로 아름다운 건축물이 많이 생겨나고 있습니다.",
        morphemes: [ { hanja: "建", meaning: "세울 건" }, { hanja: "築", meaning: "쌓을 축" } ]
    },
    {
        id: "tb_0392", word: "조경", level: 2, subject: "과학",
        context: "이번에 새로 만든 공원은 [ ? ]에 특히 신경을 썼습니다.",
        morphemes: [ { hanja: "造", meaning: "지을 조" }, { hanja: "景", meaning: "경치 경" } ]
    },
    {
        id: "tb_0393", word: "목재", level: 2, subject: "과학",
        context: "한옥은 매우 아름답고 살기에 편리한 [ ? ] 건축물입니다.",
        morphemes: [ { hanja: "木", meaning: "나무 목" }, { hanja: "材", meaning: "재목 재" } ]
    },
    {
        id: "tb_0394", word: "암석", level: 2, subject: "과학",
        context: "산이나 바닷가에 가 보면 [ ? ]이 층을 이루며 쌓여 있는 것을 볼 수 있습니다.",
        morphemes: [ { hanja: "巖", meaning: "바위 암" }, { hanja: "石", meaning: "돌 석" } ]
    },
    {
        id: "tb_0395", word: "층리", level: 2, subject: "과학",
        context: "채석강에 가면 책을 쌓아 놓은 듯한 [ ? ]를 잘 볼 수 있습니다.",
        morphemes: [ { hanja: "層", meaning: "층 층" }, { hanja: "理", meaning: "다스릴 리" } ]
    },
    {
        id: "tb_0396", word: "퇴적", level: 2, subject: "과학",
        context: "[ ? ]물은 오랜 시간이 지나면 단단한 암석으로 변합니다.",
        morphemes: [ { hanja: "堆", meaning: "흙더미 퇴" }, { hanja: "積", meaning: "쌓을 적" } ]
    },
    {
        id: "tb_0397", word: "이암", level: 2, subject: "과학",
        context: "[ ? ]은 알갱이가 매우 작고 부드럽습니다.",
        morphemes: [ { hanja: "泥", meaning: "진흙 니" }, { hanja: "巖", meaning: "바위 암" } ]
    },
    {
        id: "tb_0398", word: "사암", level: 2, subject: "과학",
        context: "알갱이의 크기에 따라 이암, [ ? ], 역암 등으로 분류합니다.",
        morphemes: [ { hanja: "砂", meaning: "모래 사" }, { hanja: "巖", meaning: "바위 암" } ]
    },
    {
        id: "tb_0399", word: "생성", level: 2, subject: "과학",
        context: "태양계의 [ ? ] 과정을 밝히기 위한 연구를 계속하고 있습니다.",
        morphemes: [ { hanja: "生", meaning: "날 생" }, { hanja: "成", meaning: "이룰 성" } ]
    },
    {
        id: "tb_0400", word: "발굴", level: 2, subject: "과학",
        context: "이곳에서 선사 시대의 유적이 발견되어 현재 [ ? ]이 진행되고 있습니다.",
        morphemes: [ { hanja: "發", meaning: "드러낼 발" }, { hanja: "掘", meaning: "팔 굴" } ]
    },
    {
        id: "tb_0401", word: "신문", level: 2, subject: "과학",
        context: "[ ? ]은 어떠한 일이 있어도 진실과 사실을 보도해야 합니다.",
        morphemes: [ { hanja: "新", meaning: "새 신" }, { hanja: "聞", meaning: "들을 문" } ]
    },
    {
        id: "tb_0402", word: "탐구", level: 2, subject: "과학",
        context: "방학 중 [ ? ]한 내용을 발표하였습니다.",
        morphemes: [ { hanja: "探", meaning: "찾을 탐" }, { hanja: "究", meaning: "연구할 구" } ]
    },
    {
        id: "tb_0403", word: "멸종", level: 2, subject: "과학",
        context: "그들은 공룡 [ ? ]의 원인을 운석 충돌 때문이라고 보고 있습니다.",
        morphemes: [ { hanja: "滅", meaning: "멸망할 멸" }, { hanja: "種", meaning: "씨 종" } ]
    },
    {
        id: "tb_0404", word: "고체", level: 2, subject: "과학",
        context: "액체 상태의 물이 얼면 [ ? ]인 얼음이 됩니다.",
        morphemes: [ { hanja: "固", meaning: "굳을 고" }, { hanja: "體", meaning: "몸 체" } ]
    },
    {
        id: "tb_0405", word: "전달", level: 2, subject: "과학",
        context: "고체에서 열이 [ ? ]되는 정도는 물질마다 다릅니다.",
        morphemes: [ { hanja: "傳", meaning: "전할 전" }, { hanja: "達", meaning: "이를 달" } ]
    },
    {
        id: "tb_0406", word: "전도", level: 2, subject: "과학",
        context: "단열재는 열을 [ ? ]시키지 못하는 물체입니다.",
        morphemes: [ { hanja: "傳", meaning: "전할 전" }, { hanja: "導", meaning: "이끌 도" } ]
    },
    {
        id: "tb_0407", word: "반숙", level: 2, subject: "과학",
        context: "나는 계란 완숙보다 [ ? ]을 좋아합니다.",
        morphemes: [ { hanja: "半", meaning: "반 반" }, { hanja: "熟", meaning: "익힐 숙" } ]
    },
    {
        id: "tb_0408", word: "온도", level: 2, subject: "과학",
        context: "오늘날의 지구는 공기 오염에 의해 [ ? ]가 급격히 상승하고 있습니다.",
        morphemes: [ { hanja: "溫", meaning: "따뜻할 온" }, { hanja: "度", meaning: "법도 도" } ]
    },
    {
        id: "tb_0409", word: "마술", level: 2, subject: "과학",
        context: "그는 몇 가지 인상적인 [ ? ]로 관객들의 호기심을 사로잡았습니다.",
        morphemes: [ { hanja: "魔", meaning: "마술 마" }, { hanja: "術", meaning: "꾀 술" } ]
    },
    {
        id: "tb_0410", word: "가열", level: 2, subject: "과학",
        context: "보리차를 끓이면 [ ? ]된 물과 함께 보리가 올라갔다 내려갔다 하는 것을 볼 수 있습니다.",
        morphemes: [ { hanja: "加", meaning: "더할 가" }, { hanja: "熱", meaning: "더울 열" } ]
    },
    {
        id: "tb_0411", word: "대류", level: 2, subject: "과학",
        context: "난로는 실내 공기를 [ ? ]에 의하여 순환시켜 두루 따뜻하게 합니다.",
        morphemes: [ { hanja: "對", meaning: "대할 대" }, { hanja: "流", meaning: "흐를 류" } ]
    },
    {
        id: "tb_0412", word: "난방", level: 2, subject: "과학",
        context: "이 전기난로는 우리 사무실에서 [ ? ]을 할 수 있는 유일한 기구입니다.",
        morphemes: [ { hanja: "暖", meaning: "따뜻할 난" }, { hanja: "房", meaning: "방 방" } ]
    },
    {
        id: "tb_0413", word: "복사", level: 2, subject: "과학",
        context: "태양은 [ ? ]열을 보냅니다.",
        morphemes: [ { hanja: "輻", meaning: "바퀴살 복" }, { hanja: "射", meaning: "쏠 사" } ]
    },
    {
        id: "tb_0414", word: "손실", level: 2, subject: "과학",
        context: "해마다 화재로 [ ? ]되는 재산은 엄청나게 큽니다.",
        morphemes: [ { hanja: "損", meaning: "덜 손" }, { hanja: "失", meaning: "잃을 실" } ]
    },
    {
        id: "tb_0415", word: "첨단", level: 2, subject: "과학",
        context: "[ ? ]기술을 도입하였습니다.",
        morphemes: [ { hanja: "尖", meaning: "뾰족할 첨" }, { hanja: "端", meaning: "끝 단" } ]
    },
    {
        id: "tb_0416", word: "보온", level: 2, subject: "과학",
        context: "겨울철에는 추위를 막기 위해 [ ? ]이 잘 되는 옷을 입습니다.",
        morphemes: [ { hanja: "保", meaning: "지킬 보" }, { hanja: "溫", meaning: "따뜻할 온" } ]
    },
    {
        id: "tb_0417", word: "단열", level: 2, subject: "과학",
        context: "요즘은 [ ? ]재를 잘 써서 주택의 열 손실을 막아줍니다.",
        morphemes: [ { hanja: "斷", meaning: "끊을 단" }, { hanja: "熱", meaning: "더울 열" } ]
    },
    {
        id: "tb_0418", word: "방한", level: 2, subject: "과학",
        context: "겨울철 야외 활동을 할 때는 [ ? ]복과 장갑을 준비하는 것이 좋습니다.",
        morphemes: [ { hanja: "防", meaning: "막을 방" }, { hanja: "寒", meaning: "찰 한" } ]
    },
    {
        id: "tb_0419", word: "침구", level: 2, subject: "과학",
        context: "아침에 일어나자마자 반드시 [ ? ]를 정리합니다.",
        morphemes: [ { hanja: "寢", meaning: "잠잘 침" }, { hanja: "具", meaning: "갖출 구" } ]
    },
    {
        id: "tb_0420", word: "냉방", level: 2, subject: "과학",
        context: "여름철 [ ? ]기의 과다한 사용으로 전력난을 겪고 있습니다.",
        morphemes: [ { hanja: "冷", meaning: "찰 냉" }, { hanja: "房", meaning: "방 방" } ]
    },
    {
        id: "tb_0421", word: "소방", level: 2, subject: "과학",
        context: "11월 9일은 [ ? ]의 날입니다.",
        morphemes: [ { hanja: "消", meaning: "사라질 소" }, { hanja: "防", meaning: "막을 방" } ]
    },
    {
        id: "tb_0422", word: "분출", level: 2, subject: "과학",
        context: "어떤 화산은 [ ? ]불이 폭발하듯 솟구쳐 나오기도 합니다.",
        morphemes: [ { hanja: "噴", meaning: "뿜을 분" }, { hanja: "出", meaning: "날 출" } ]
    },
    {
        id: "tb_0423", word: "촉감", level: 2, subject: "과학",
        context: "이불의 [ ? ]이 부드럽습니다.",
        morphemes: [ { hanja: "觸", meaning: "닿을 촉" }, { hanja: "感", meaning: "느낄 감" } ]
    },
    {
        id: "tb_0424", word: "천지", level: 2, subject: "과학",
        context: "백두산 [ ? ]의 날씨는 하루에도 몇 차례씩 변화합니다.",
        morphemes: [ { hanja: "天", meaning: "하늘 천" }, { hanja: "池", meaning: "못 지" } ]
    },
    {
        id: "tb_0425", word: "호수", level: 2, subject: "과학",
        context: "우리 가족은 산정[ ? ]로 가족여행을 갔습니다.",
        morphemes: [ { hanja: "湖", meaning: "호수 호" }, { hanja: "水", meaning: "물 수" } ]
    },
    {
        id: "tb_0426", word: "편광", level: 2, subject: "과학",
        context: "[ ? ]현미경은 한 방향으로만 진동하는 빛을 통하여 암석을 관찰하는 현미경입니다.",
        morphemes: [ { hanja: "偏", meaning: "치우칠 편" }, { hanja: "光", meaning: "빛 광" } ]
    },
    {
        id: "tb_0427", word: "온천", level: 2, subject: "과학",
        context: "할머니는 백암[ ? ]에 다녀오셨습니다.",
        morphemes: [ { hanja: "溫", meaning: "따뜻할 온" }, { hanja: "泉", meaning: "샘 천" } ]
    },
    {
        id: "tb_0428", word: "지열", level: 2, subject: "과학",
        context: "[ ? ] 에너지를 이용한 발전을 합니다.",
        morphemes: [ { hanja: "地", meaning: "땅 지" }, { hanja: "熱", meaning: "더울 열" } ]
    },
    {
        id: "tb_0429", word: "예측", level: 2, subject: "과학",
        context: "경기를 살펴 경제상황을 [ ? ]합니다.",
        morphemes: [ { hanja: "豫", meaning: "미리 예" }, { hanja: "測", meaning: "잴 측" } ]
    },
    {
        id: "tb_0430", word: "단층", level: 2, subject: "과학",
        context: "[ ? ]과 습곡을 관찰해 봅시다.",
        morphemes: [ { hanja: "斷", meaning: "끊을 단" }, { hanja: "層", meaning: "층 층" } ]
    },
    {
        id: "tb_0431", word: "대피", level: 2, subject: "과학",
        context: "지진 [ ? ] 방송을 들으면서 상황을 지켜보는 자세가 필요합니다.",
        morphemes: [ { hanja: "待", meaning: "기다릴 대" }, { hanja: "避", meaning: "피할 피" } ]
    },
    {
        id: "tb_0432", word: "승강", level: 2, subject: "과학",
        context: "[ ? ]기를 타는 대신 계단을 걸어 내려왔습니다.",
        morphemes: [ { hanja: "昇", meaning: "오를 승" }, { hanja: "降", meaning: "내릴 강" } ]
    },
    {
        id: "tb_0433", word: "낙하", level: 2, subject: "과학",
        context: "비행기에서 공군이 [ ? ]산을 펴고 내립니다.",
        morphemes: [ { hanja: "落", meaning: "떨어질 락" }, { hanja: "下", meaning: "아래 하" } ]
    },
    {
        id: "tb_0434", word: "강진", level: 2, subject: "과학",
        context: "세계 여러 나라에 [ ? ]이 발생하여 많은 사람이 목숨을 잃었습니다.",
        morphemes: [ { hanja: "强", meaning: "강할 강" }, { hanja: "震", meaning: "진동할 진" } ]
    },
    {
        id: "tb_0435", word: "탈선", level: 2, subject: "과학",
        context: "이번의 열차 [ ? ]은 장마로 지반이 내려앉아 일어난 사고였다고 합니다.",
        morphemes: [ { hanja: "脫", meaning: "벗을 탈" }, { hanja: "線", meaning: "줄 선" } ]
    },
    {
        id: "tb_0436", word: "가동", level: 2, subject: "과학",
        context: "공장의 기계들은 [ ? ]을 멈추고 기술자들은 손을 놓고 있습니다.",
        morphemes: [ { hanja: "可", meaning: "옳을 가" }, { hanja: "動", meaning: "움직일 동" } ]
    },
    {
        id: "tb_0437", word: "인상", level: 3, subject: "국어",
        context: "철수를 처음 본 [ ? ]은 따듯하고 부드러웠다.",
        morphemes: [ { hanja: "印", meaning: "도장 인" }, { hanja: "象", meaning: "모양 상" } ]
    },
    {
        id: "tb_0438", word: "생동", level: 3, subject: "국어",
        context: "선생님께 내 그림을 보시고 [ ? ]감이 넘친다고 칭찬을 하셨다.",
        morphemes: [ { hanja: "生", meaning: "날,살 생" }, { hanja: "動", meaning: "움직일 동" } ]
    },
    {
        id: "tb_0439", word: "성묘", level: 3, subject: "국어",
        context: "추석을 맞아 아버지와 함께 [ ? ]를 다녀왔다.",
        morphemes: [ { hanja: "省", meaning: "살필 성" }, { hanja: "墓", meaning: "무덤 묘" } ]
    },
    {
        id: "tb_0440", word: "이상", level: 3, subject: "국어",
        context: "오늘은 몸이 다른 날과 다르게 좀 [ ? ]하다.",
        morphemes: [ { hanja: "異", meaning: "다를 이" }, { hanja: "常", meaning: "항상,늘 상" } ]
    },
    {
        id: "tb_0441", word: "산중", level: 3, subject: "국어",
        context: "깊은 [ ? ]에서 길을 잃었다.",
        morphemes: [ { hanja: "山", meaning: "산 산" }, { hanja: "中", meaning: "가운데 중" } ]
    },
    {
        id: "tb_0442", word: "화전", level: 3, subject: "국어",
        context: "이 산에는 예전에 [ ? ]을 가꾸고 사는 사람들이 많았다고 한다.",
        morphemes: [ { hanja: "火", meaning: "불 화" }, { hanja: "田", meaning: "밭 전" } ]
    },
    {
        id: "tb_0443", word: "사정", level: 3, subject: "국어",
        context: "오늘 철수가 학교에 오지 못했는데, 철수에게 무슨 [ ? ]이 있는지 궁금했다.",
        morphemes: [ { hanja: "事", meaning: "일 사" }, { hanja: "情", meaning: "뜻,형편 정" } ]
    },
    {
        id: "tb_0444", word: "분별", level: 3, subject: "국어",
        context: "안개가 많이 끼어서 멀리 있는 건물들이 잘 [ ? ]되지 않는다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "別", meaning: "나눌,다를 별" } ]
    },
    {
        id: "tb_0445", word: "원시", level: 3, subject: "국어",
        context: "아마존에는 [ ? ] 밀림 지대가 형성되어 있다.",
        morphemes: [ { hanja: "原", meaning: "근원,처음 원" }, { hanja: "始", meaning: "처음 시" } ]
    },
    {
        id: "tb_0446", word: "습지", level: 3, subject: "국어",
        context: "갈대는 물가나 [ ? ]에서 잘 자라는 식물이다.",
        morphemes: [ { hanja: "濕", meaning: "축축할 습" }, { hanja: "地", meaning: "땅 지" } ]
    },
    {
        id: "tb_0447", word: "생태", level: 3, subject: "국어",
        context: "환경오염은 동식물의 [ ? ]에 미치는 영향이 크다.",
        morphemes: [ { hanja: "生", meaning: "살 생" }, { hanja: "態", meaning: "모양 태" } ]
    },
    {
        id: "tb_0448", word: "기지", level: 3, subject: "국어",
        context: "북극에도 남극과 같이 과학 [ ? ]를 세울 계획이다.",
        morphemes: [ { hanja: "基", meaning: "터,토개 기" }, { hanja: "地", meaning: "땅,곳 지" } ]
    },
    {
        id: "tb_0449", word: "미지", level: 3, subject: "국어",
        context: "우주는 신비로운 [ ? ]의 세계이다.",
        morphemes: [ { hanja: "未", meaning: "아닐 미" }, { hanja: "知", meaning: "알 지" } ]
    },
    {
        id: "tb_0450", word: "매장", level: 3, subject: "국어",
        context: "석유 [ ? ] 여부를 알아보기 위해 조사를 실시하였다.",
        morphemes: [ { hanja: "埋", meaning: "묻을 매" }, { hanja: "藏", meaning: "간직할 장" } ]
    },
    {
        id: "tb_0451", word: "탐험", level: 3, subject: "국어",
        context: "아프리카 [ ? ]에 대한 책을 정말 재미있게 읽었다.",
        morphemes: [ { hanja: "探", meaning: "찾을 탐" }, { hanja: "險", meaning: "험할 험" } ]
    },
    {
        id: "tb_0452", word: "산괴", level: 3, subject: "국어",
        context: "이 산은 산등성이가 커다란 [ ? ]를 이루고 있어 매우 웅장한 느낌이 든다.",
        morphemes: [ { hanja: "山", meaning: "산 산" }, { hanja: "塊", meaning: "흙덩이 괴" } ]
    },
    {
        id: "tb_0453", word: "상주", level: 3, subject: "국어",
        context: "삼촌은 미국에서 외교관으로 [ ? ]하고 계시다.",
        morphemes: [ { hanja: "常", meaning: "항상 상" }, { hanja: "駐", meaning: "머무를 주" } ]
    },
    {
        id: "tb_0454", word: "전개", level: 3, subject: "국어",
        context: "이 영화는 사건 [ ? ]가 빨리 되어 재미있었다.",
        morphemes: [ { hanja: "展", meaning: "펼 전" }, { hanja: "開", meaning: "열 개" } ]
    },
    {
        id: "tb_0455", word: "시선", level: 3, subject: "국어",
        context: "운동 경기를 보는 내내 선수들에게서 [ ? ]을 뗄 수가 없었다.",
        morphemes: [ { hanja: "視", meaning: "볼 시" }, { hanja: "線", meaning: "줄 선" } ]
    },
    {
        id: "tb_0456", word: "흑인", level: 3, subject: "국어",
        context: "아프리카에는 [ ? ]들이 많이 살고 있다.",
        morphemes: [ { hanja: "黑", meaning: "검을 흑" }, { hanja: "人", meaning: "사람 인" } ]
    },
    {
        id: "tb_0457", word: "치명", level: 3, subject: "국어",
        context: "독사는 [ ? ]적인 독을 가지고 있다.",
        morphemes: [ { hanja: "致", meaning: "이를 치" }, { hanja: "命", meaning: "목숨 명" } ]
    },
    {
        id: "tb_0458", word: "동포", level: 3, subject: "국어",
        context: "미국이나 일본 등 해외에도 우리 [ ? ]들이 많이 살고 있다.",
        morphemes: [ { hanja: "同", meaning: "같을 동" }, { hanja: "胞", meaning: "태보,배 포" } ]
    },
    {
        id: "tb_0459", word: "승강", level: 3, subject: "국어",
        context: "기차가 들어오자 [ ? ]장에 있던 사람들이 탈 준비를 하였다.",
        morphemes: [ { hanja: "乘", meaning: "탈 승" }, { hanja: "降", meaning: "내릴 강" } ]
    },
    {
        id: "tb_0460", word: "선고", level: 3, subject: "국어",
        context: "변호사의 노력으로 무죄가 [ ? ]되었다.",
        morphemes: [ { hanja: "宣", meaning: "펼 선" }, { hanja: "告", meaning: "알릴 고" } ]
    },
    {
        id: "tb_0461", word: "유언", level: 3, subject: "국어",
        context: "할아버지의 [ ? ]에 따라 할아버지의 재산을 사회에 기부하였다.",
        morphemes: [ { hanja: "遺", meaning: "남길 유" }, { hanja: "言", meaning: "말씀 언" } ]
    },
    {
        id: "tb_0462", word: "독립", level: 3, subject: "국어",
        context: "삼촌은 그동안 다니던 회사에서 [ ? ]하여 따로 사업을 하신다.",
        morphemes: [ { hanja: "獨", meaning: "홀로 독" }, { hanja: "立", meaning: "설 립" } ]
    },
    {
        id: "tb_0463", word: "의견", level: 3, subject: "국어",
        context: "우리 모둠에서 어떤 인물을 조사할지 모둠원끼리 [ ? ]을 나누었다.",
        morphemes: [ { hanja: "意", meaning: "뜻,생각 의" }, { hanja: "見", meaning: "볼,생각 견" } ]
    },
    {
        id: "tb_0464", word: "주장", level: 3, subject: "국어",
        context: "철수는 자기 [ ? ]이 강한 편이다.",
        morphemes: [ { hanja: "主", meaning: "주인,주로할 주" }, { hanja: "張", meaning: "베풀,펼 장" } ]
    },
    {
        id: "tb_0465", word: "광고", level: 3, subject: "국어",
        context: "텔레비전을 보다 보면 재미있는 [ ? ]들도 많다.",
        morphemes: [ { hanja: "廣", meaning: "넓을 광" }, { hanja: "告", meaning: "알릴 고" } ]
    },
    {
        id: "tb_0466", word: "의도", level: 3, subject: "국어",
        context: "내가 [ ? ]한 대로 일이 잘 풀려 나갔다.",
        morphemes: [ { hanja: "意", meaning: "뜻,생각 의" }, { hanja: "圖", meaning: "그림,꾀할 도" } ]
    },
    {
        id: "tb_0467", word: "기법", level: 3, subject: "국어",
        context: "미술시간에 수채화 그리는 [ ? ]을 배웠다.",
        morphemes: [ { hanja: "技", meaning: "재주 기" }, { hanja: "法", meaning: "법,방법 법" } ]
    },
    {
        id: "tb_0468", word: "편견", level: 3, subject: "국어",
        context: "우리 모두 장애인에 대한 [ ? ]을 버려야 하겠다.",
        morphemes: [ { hanja: "偏", meaning: "치우칠 편" }, { hanja: "見", meaning: "볼,생각 견" } ]
    },
    {
        id: "tb_0469", word: "신뢰", level: 3, subject: "국어",
        context: "철수는 참 [ ? ]가 가는 아이이다.",
        morphemes: [ { hanja: "信", meaning: "믿을 신" }, { hanja: "賴", meaning: "의지할 뢰" } ]
    },
    {
        id: "tb_0470", word: "과장", level: 3, subject: "국어",
        context: "철수는 항상 [ ? ]하여 말하는 버릇이 있다.",
        morphemes: [ { hanja: "誇", meaning: "자랑할 과" }, { hanja: "張", meaning: "베풀 장" } ]
    },
    {
        id: "tb_0471", word: "매진", level: 3, subject: "국어",
        context: "이 상품은 인기가 좋아 금방 [ ? ]되었다.",
        morphemes: [ { hanja: "賣", meaning: "팔 매" }, { hanja: "盡", meaning: "다할 진" } ]
    },
    {
        id: "tb_0472", word: "서평", level: 3, subject: "국어",
        context: "어머니께서는 [ ? ]이 좋은 책들을 골라 사 주신다.",
        morphemes: [ { hanja: "書", meaning: "글,책 서" }, { hanja: "評", meaning: "평할 평" } ]
    },
    {
        id: "tb_0473", word: "파업", level: 3, subject: "국어",
        context: "“엄마는 [ ? ] 중”은 어머니가 파업을 하자 우왕좌왕하는 가족의 이야기이다.",
        morphemes: [ { hanja: "罷", meaning: "그만둘 파" }, { hanja: "業", meaning: "일 업" } ]
    },
    {
        id: "tb_0474", word: "동화", level: 3, subject: "국어",
        context: "내 동생은 전래 [ ? ]를 무척 좋아한다.",
        morphemes: [ { hanja: "童", meaning: "아이 동" }, { hanja: "話", meaning: "말씀,이야기 화" } ]
    },
    {
        id: "tb_0475", word: "표지", level: 3, subject: "국어",
        context: "이 책은 [ ? ]가 매우 두껍다.",
        morphemes: [ { hanja: "表", meaning: "겉 표" }, { hanja: "紙", meaning: "종이 지" } ]
    },
    {
        id: "tb_0476", word: "전래", level: 3, subject: "국어",
        context: "오늘 음악 시간에 [ ? ] 동요를 배웠다.",
        morphemes: [ { hanja: "傳", meaning: "전할 전" }, { hanja: "來", meaning: "올 래" } ]
    },
    {
        id: "tb_0477", word: "유년", level: 3, subject: "국어",
        context: "나는 [ ? ]기에 부모님과 여행을 자주 다녔다.",
        morphemes: [ { hanja: "幼", meaning: "어릴 유" }, { hanja: "年", meaning: "해,나이 년" } ]
    },
    {
        id: "tb_0478", word: "장점", level: 3, subject: "국어",
        context: "철수는 참 [ ? ]이 많은 아이이다.",
        morphemes: [ { hanja: "長", meaning: "길,나을 장" }, { hanja: "點", meaning: "점 점" } ]
    },
    {
        id: "tb_0479", word: "적합", level: 3, subject: "국어",
        context: "이 산의 약수는 식수로 [ ? ]하다는 판정을 받았다.",
        morphemes: [ { hanja: "適", meaning: "갈,맞을 적" }, { hanja: "合", meaning: "합할,들어맞을 합" } ]
    },
    {
        id: "tb_0480", word: "공감", level: 3, subject: "국어",
        context: "철수의 기분을 [ ? ]할 수 있을 것 같아",
        morphemes: [ { hanja: "共", meaning: "함께 공" }, { hanja: "感", meaning: "느낄 감" } ]
    },
    {
        id: "tb_0481", word: "동시", level: 3, subject: "국어",
        context: "우리반 아이들이 지은 시를 모아 [ ? ]집을 만들었다.",
        morphemes: [ { hanja: "童", meaning: "아이 동" }, { hanja: "詩", meaning: "시 시" } ]
    },
    {
        id: "tb_0482", word: "주제", level: 3, subject: "국어",
        context: "오늘은 ‘텔레비전은 유익한가’라는 [ ? ]로 토론을 해 보겠습니다.",
        morphemes: [ { hanja: "主", meaning: "주인,주될 주" }, { hanja: "題", meaning: "문제 제" } ]
    },
    {
        id: "tb_0483", word: "묘사", level: 3, subject: "국어",
        context: "이 그림은 아이가 선물을 받고 즐거워하는 모습을 잘 [ ? ]하고 있다.",
        morphemes: [ { hanja: "描", meaning: "그릴 묘" }, { hanja: "寫", meaning: "베낄 사" } ]
    },
    {
        id: "tb_0484", word: "객관", level: 3, subject: "국어",
        context: "우리들의 문제를 [ ? ]적으로 생각해 보자.",
        morphemes: [ { hanja: "客", meaning: "손님 객" }, { hanja: "觀", meaning: "볼 관" } ]
    },
    {
        id: "tb_0485", word: "남매", level: 3, subject: "국어",
        context: "우리는 [ ? ] 사이입니다.",
        morphemes: [ { hanja: "男", meaning: "사내 남" }, { hanja: "妹", meaning: "누이 매" } ]
    },
    {
        id: "tb_0486", word: "진화", level: 3, subject: "국어",
        context: "생물들은 오랜 세월동안 각자 나름대로 [ ? ]되어 왔다.",
        morphemes: [ { hanja: "進", meaning: "나아갈 진" }, { hanja: "化", meaning: "될 화" } ]
    },
    {
        id: "tb_0487", word: "상식", level: 3, subject: "국어",
        context: "철수는 [ ? ]이 풍부하다.",
        morphemes: [ { hanja: "常", meaning: "항상 상" }, { hanja: "識", meaning: "알 식" } ]
    },
    {
        id: "tb_0488", word: "견문", level: 3, subject: "국어",
        context: "삼촌은 세계 각지를 여행하여 [ ? ]이 넓다.",
        morphemes: [ { hanja: "見", meaning: "볼 견" }, { hanja: "聞", meaning: "들을 문" } ]
    },
    {
        id: "tb_0489", word: "정의", level: 3, subject: "국어",
        context: "이등변삼각형에 대하여 [ ? ]해 보자.",
        morphemes: [ { hanja: "定", meaning: "정할 정" }, { hanja: "義", meaning: "옳을,뜻 의" } ]
    },
    {
        id: "tb_0490", word: "무신", level: 3, subject: "국어",
        context: "고려시대에 정중부는 [ ? ]의 난을 일으켰다.",
        morphemes: [ { hanja: "武", meaning: "굳셀,군사 무" }, { hanja: "臣", meaning: "신하 신" } ]
    },
    {
        id: "tb_0491", word: "판각", level: 3, subject: "국어",
        context: "이것은 [ ? ]의 정밀도 면에서 상당히 우수한 것으로 판정되었다.",
        morphemes: [ { hanja: "板", meaning: "널빤지 판" }, { hanja: "刻", meaning: "새길 각" } ]
    },
    {
        id: "tb_0492", word: "외세", level: 3, subject: "국어",
        context: "우리 민족은 [ ? ]의 잦은 침략에도 불구하고 꿋꿋하게 잘 버텨 부강한 나라를 이루었다.",
        morphemes: [ { hanja: "外", meaning: "바깥 외" }, { hanja: "勢", meaning: "세력 세" } ]
    },
    {
        id: "tb_0493", word: "참정", level: 3, subject: "국어",
        context: "처음 영국에서는 남자만이 [ ? ]권이 있었다.",
        morphemes: [ { hanja: "參", meaning: "참여할 참" }, { hanja: "政", meaning: "정사,정치 정" } ]
    },
    {
        id: "tb_0494", word: "투표", level: 3, subject: "국어",
        context: "부모님은 아침에 일찍 [ ? ]를 하셨다.",
        morphemes: [ { hanja: "投", meaning: "던질 투" }, { hanja: "票", meaning: "표,쪽지 표" } ]
    },
    {
        id: "tb_0495", word: "동등", level: 3, subject: "국어",
        context: "선거에서는 남자나 여자나 [ ? ]하게 한 표씩을 행사한다.",
        morphemes: [ { hanja: "同", meaning: "같을 동" }, { hanja: "等", meaning: "가지런할 등" } ]
    },
    {
        id: "tb_0496", word: "중상", level: 3, subject: "국어",
        context: "철수가 교통사고를 당했지만 다행히 [ ? ]을 입지 않았다.",
        morphemes: [ { hanja: "重", meaning: "무거울 중" }, { hanja: "傷", meaning: "다칠 상" } ]
    },
    {
        id: "tb_0497", word: "공평", level: 3, subject: "국어",
        context: "철수가 이번 피구 경기에서 심판을 매우 [ ? ]하게 잘 봤다.",
        morphemes: [ { hanja: "公", meaning: "공정할 공" }, { hanja: "平", meaning: "평평할,고를 평" } ]
    },
    {
        id: "tb_0498", word: "단검", level: 3, subject: "국어",
        context: "박물관에 아주 오래된 옛날 [ ? ]이 전시되어 있었다.",
        morphemes: [ { hanja: "短", meaning: "짧을 단" }, { hanja: "劍", meaning: "칼 검" } ]
    },
    {
        id: "tb_0499", word: "식욕", level: 3, subject: "국어",
        context: "한동안 밥맛이 없었는데, 이제 [ ? ]이 돌아왔다.",
        morphemes: [ { hanja: "食", meaning: "밥,먹을 식" }, { hanja: "慾", meaning: "욕심 욕" } ]
    },
    {
        id: "tb_0500", word: "문안", level: 3, subject: "국어",
        context: "아버지는 할아버지께 매일 [ ? ] 인사를 드린다.",
        morphemes: [ { hanja: "問", meaning: "물을 문" }, { hanja: "安", meaning: "편안할 안" } ]
    },
    {
        id: "tb_0501", word: "천성", level: 3, subject: "국어",
        context: "철수는 [ ? ]적으로 착하고 순한 아이이다.",
        morphemes: [ { hanja: "天", meaning: "하늘 천" }, { hanja: "性", meaning: "성품 성" } ]
    },
    {
        id: "tb_0502", word: "소집", level: 3, subject: "국어",
        context: "대회를 앞두고 우리나라 축구 대표팀이 [ ? ]되었다.",
        morphemes: [ { hanja: "召", meaning: "부를 소" }, { hanja: "集", meaning: "모을 집" } ]
    },
    {
        id: "tb_0503", word: "동급", level: 3, subject: "국어",
        context: "철수와 나는 [ ? ]생이다.",
        morphemes: [ { hanja: "同", meaning: "한 가지 동" }, { hanja: "級", meaning: "등급 급" } ]
    },
    {
        id: "tb_0504", word: "압제", level: 3, subject: "국어",
        context: "1945년 우리나라는 일본의 [ ? ]에서 벗어났다.",
        morphemes: [ { hanja: "壓", meaning: "누를 압" }, { hanja: "制", meaning: "만들,누를 제" } ]
    },
    {
        id: "tb_0505", word: "개관", level: 3, subject: "국어",
        context: "우리 동네에 도서관이 [ ? ]하였다.",
        morphemes: [ { hanja: "開", meaning: "열 개" }, { hanja: "館", meaning: "객사,건물 관" } ]
    },
    {
        id: "tb_0506", word: "선현", level: 3, subject: "국어",
        context: "[ ? ]들이 남긴 옛글에서 많은 지혜를 얻을 수 있다.",
        morphemes: [ { hanja: "先", meaning: "먼저 선" }, { hanja: "賢", meaning: "어질 현" } ]
    },
    {
        id: "tb_0507", word: "학식", level: 3, subject: "국어",
        context: "삼촌은 [ ? ]이 매우 높다.",
        morphemes: [ { hanja: "學", meaning: "배울 학" }, { hanja: "識", meaning: "알 식" } ]
    },
    {
        id: "tb_0508", word: "발간", level: 3, subject: "국어",
        context: "아버지 회사에서는 매년 책을 [ ? ]한다.",
        morphemes: [ { hanja: "發", meaning: "펼 발" }, { hanja: "刊", meaning: "책펴낼,새길 간" } ]
    },
    {
        id: "tb_0509", word: "양식", level: 3, subject: "국어",
        context: "먹을 [ ? ]이 다 떨어졌다.",
        morphemes: [ { hanja: "糧", meaning: "곡식 량" }, { hanja: "食", meaning: "밥,먹을 식" } ]
    },
    {
        id: "tb_0510", word: "수확", level: 3, subject: "국어",
        context: "올해는 다른 해 보다 일찍 벼를 [ ? ]하였다.",
        morphemes: [ { hanja: "收", meaning: "거둘 수" }, { hanja: "穫", meaning: "거둘 확" } ]
    },
    {
        id: "tb_0511", word: "침몰", level: 3, subject: "국어",
        context: "태풍으로 배가 [ ? ]할 뻔 했다.",
        morphemes: [ { hanja: "沈", meaning: "가라앉을 침" }, { hanja: "沒", meaning: "가라앉을 몰" } ]
    },
    {
        id: "tb_0512", word: "수여", level: 3, subject: "국어",
        context: "교장선생님께서 졸업장을 졸업생들에게 [ ? ]하였습니다.",
        morphemes: [ { hanja: "授", meaning: "줄 수" }, { hanja: "與", meaning: "줄 여" } ]
    },
    {
        id: "tb_0513", word: "대륙", level: 3, subject: "국어",
        context: "콜럼버스는 아메리카 [ ? ]을 발견하였다.",
        morphemes: [ { hanja: "大", meaning: "큰 대" }, { hanja: "陸", meaning: "뭍 륙" } ]
    },
    {
        id: "tb_0514", word: "부유", level: 3, subject: "국어",
        context: "철수네 집은 매우 [ ? ]하다.",
        morphemes: [ { hanja: "富", meaning: "부유할 부" }, { hanja: "裕", meaning: "넉넉할 유" } ]
    },
    {
        id: "tb_0515", word: "빈민", level: 3, subject: "국어",
        context: "임금님께서 [ ? ]들을 위해 곡식을 베풀어 주셨다.",
        morphemes: [ { hanja: "貧", meaning: "가난할 빈" }, { hanja: "民", meaning: "백성 민" } ]
    },
    {
        id: "tb_0516", word: "자원", level: 3, subject: "국어",
        context: "나는 이번 봉사활동에 [ ? ]하여 신청하였다.",
        morphemes: [ { hanja: "自", meaning: "스스로 자" }, { hanja: "願", meaning: "원할 원" } ]
    },
    {
        id: "tb_0517", word: "운율", level: 3, subject: "국어",
        context: "철수는 [ ? ]을 살려 시를 멋지게 낭송하였다.",
        morphemes: [ { hanja: "韻", meaning: "운,소리 운" }, { hanja: "律", meaning: "법,가락 율" } ]
    },
    {
        id: "tb_0518", word: "낭독", level: 3, subject: "국어",
        context: "철수가 교과서의 시를 [ ? ]하였다.",
        morphemes: [ { hanja: "朗", meaning: "밝을 랑" }, { hanja: "讀", meaning: "읽을 독" } ]
    },
    {
        id: "tb_0519", word: "불행", level: 3, subject: "국어",
        context: "나는 어려서 [ ? ]하게 자랐지만, 지금은 행복한 생활을 하고 있다.",
        morphemes: [ { hanja: "不", meaning: "아닐 불" }, { hanja: "幸", meaning: "다행 행" } ]
    },
    {
        id: "tb_0520", word: "약초", level: 3, subject: "국어",
        context: "삼촌은 [ ? ]를 캐러 산으로 올라가셨습니다.",
        morphemes: [ { hanja: "藥", meaning: "약 약" }, { hanja: "草", meaning: "풀 초" } ]
    },
    {
        id: "tb_0521", word: "감동", level: 3, subject: "국어",
        context: "철수의 봉사정신에 깊이 [ ? ]을 받았다.",
        morphemes: [ { hanja: "感", meaning: "느낄 감" }, { hanja: "動", meaning: "움직일 동" } ]
    },
    {
        id: "tb_0522", word: "보물", level: 3, subject: "국어",
        context: "현장학습을 가서 [ ? ]찾기 놀이를 하였다.",
        morphemes: [ { hanja: "寶", meaning: "보배 보" }, { hanja: "物", meaning: "물건 물" } ]
    },
    {
        id: "tb_0523", word: "보답", level: 3, subject: "국어",
        context: "철수는 선생님의 은혜에 대한 [ ? ]으로 작은 선물을 준비했다.",
        morphemes: [ { hanja: "報", meaning: "갚을 보" }, { hanja: "答", meaning: "답할 답" } ]
    },
    {
        id: "tb_0524", word: "심정", level: 3, subject: "국어",
        context: "철수는 어머니의 [ ? ]을 충분히 이해할 수 있었다.",
        morphemes: [ { hanja: "心", meaning: "마음 심" }, { hanja: "情", meaning: "뜻 정" } ]
    },
    {
        id: "tb_0525", word: "탕평", level: 3, subject: "사회",
        context: "임금께서는 어느 쪽에도 편들지 않고 늘 [ ? ]의 정치를 펼치고자 노력하셨다.",
        morphemes: [ { hanja: "蕩", meaning: "없앨 탕" }, { hanja: "平", meaning: "평평할 평" } ]
    },
    {
        id: "tb_0526", word: "약탈", level: 3, subject: "사회",
        context: "고려 말에 왜구들이 해안 지방에 자주 침입하여 [ ? ]을 일삼았다.",
        morphemes: [ { hanja: "掠", meaning: "노략질할 략" }, { hanja: "奪", meaning: "뺏을 탈" } ]
    },
    {
        id: "tb_0527", word: "농토", level: 3, subject: "사회",
        context: "간척사업으로 많은 [ ? ]가 생겨났다.",
        morphemes: [ { hanja: "農", meaning: "농사 농" }, { hanja: "土", meaning: "흙 토" } ]
    },
    {
        id: "tb_0528", word: "편당", level: 3, subject: "사회",
        context: "같은 반에서 친구들끼리 [ ? ]을 짓는 것은 바람직하지 않다.",
        morphemes: [ { hanja: "偏", meaning: "치우칠 편" }, { hanja: "黨", meaning: "무리 당" } ]
    },
    {
        id: "tb_0529", word: "왕권", level: 3, subject: "사회",
        context: "그는 왕이 된 후에 [ ? ]을 강화하고 나라의 힘을 키웠다.",
        morphemes: [ { hanja: "王", meaning: "임금 왕" }, { hanja: "權", meaning: "권력 권" } ]
    },
    {
        id: "tb_0530", word: "개혁", level: 3, subject: "사회",
        context: "새로운 정부는 여러 가지 [ ? ]을 추진하였다.",
        morphemes: [ { hanja: "改", meaning: "고칠 개" }, { hanja: "革", meaning: "고칠 혁" } ]
    },
    {
        id: "tb_0531", word: "신분", level: 3, subject: "사회",
        context: "삼촌은 외교관 [ ? ]으로 외국에 나가 있다.",
        morphemes: [ { hanja: "身", meaning: "몸 신" }, { hanja: "分", meaning: "나눌 분" } ]
    },
    {
        id: "tb_0532", word: "후기", level: 3, subject: "사회",
        context: "조선 [ ? ]에는 많은 변화가 있었다.",
        morphemes: [ { hanja: "後", meaning: "뒤 후" }, { hanja: "期", meaning: "기간 기" } ]
    },
    {
        id: "tb_0533", word: "추수", level: 3, subject: "사회",
        context: "우리 논은 [ ? ]가 다 끝났다.",
        morphemes: [ { hanja: "秋", meaning: "가을 추" }, { hanja: "收", meaning: "거둘 수" } ]
    },
    {
        id: "tb_0534", word: "세금", level: 3, subject: "사회",
        context: "나라에서는 국민들이 낸 [ ? ]으로 여러 가지 일들을 한다.",
        morphemes: [ { hanja: "稅", meaning: "세금 세" }, { hanja: "金", meaning: "쇠,돈 금" } ]
    },
    {
        id: "tb_0535", word: "흉년", level: 3, subject: "사회",
        context: "작년에는 [ ? ]이 들었는데, 금년에는 풍년이 들었다.",
        morphemes: [ { hanja: "凶", meaning: "흉할 흉" }, { hanja: "年", meaning: "해 년" } ]
    },
    {
        id: "tb_0536", word: "하층", level: 3, subject: "사회",
        context: "이 소설은 당시 [ ? ]민의 생활을 잘 나타내고 있다.",
        morphemes: [ { hanja: "下", meaning: "아래 하" }, { hanja: "層", meaning: "층,계층 층" } ]
    },
    {
        id: "tb_0537", word: "재능", level: 3, subject: "사회",
        context: "철수는 참 [ ? ]이 많은 아이이다.",
        morphemes: [ { hanja: "才", meaning: "재주 재" }, { hanja: "能", meaning: "능할 능" } ]
    },
    {
        id: "tb_0538", word: "선행", level: 3, subject: "사회",
        context: "학교에서 착한 일을 한 아이들에게 [ ? ]상을 주었다.",
        morphemes: [ { hanja: "善", meaning: "착할 선" }, { hanja: "行", meaning: "행할 행" } ]
    },
    {
        id: "tb_0539", word: "상업", level: 3, subject: "사회",
        context: "이 도시는 [ ? ]이 발달하였다.",
        morphemes: [ { hanja: "商", meaning: "장사 상" }, { hanja: "業", meaning: "일 업" } ]
    },
    {
        id: "tb_0540", word: "서민", level: 3, subject: "사회",
        context: "정부는 [ ? ]들의 생활을 위해 여러 가지 정책을 펴고 있다.",
        morphemes: [ { hanja: "庶", meaning: "여러 서" }, { hanja: "民", meaning: "백성 민" } ]
    },
    {
        id: "tb_0541", word: "관중", level: 3, subject: "사회",
        context: "국가대표 축구 경기에 [ ? ]들이 구름같이 모여들었다.",
        morphemes: [ { hanja: "觀", meaning: "볼 관" }, { hanja: "衆", meaning: "무리 중" } ]
    },
    {
        id: "tb_0542", word: "문학", level: 3, subject: "사회",
        context: "삼촌은 [ ? ]을 연구하신다.",
        morphemes: [ { hanja: "文", meaning: "글월 문" }, { hanja: "學", meaning: "배울,학문 학" } ]
    },
    {
        id: "tb_0543", word: "민화", level: 3, subject: "사회",
        context: "이 그림은 조선시대를 대표하는 우수한 [ ? ]이다.",
        morphemes: [ { hanja: "民", meaning: "백성 민" }, { hanja: "畵", meaning: "그림 화" } ]
    },
    {
        id: "tb_0544", word: "풍속", level: 3, subject: "사회",
        context: "팽이치기와 연날리기는 겨울철 세시[ ? ] 중의 하나이다.",
        morphemes: [ { hanja: "風", meaning: "바람,관습 풍" }, { hanja: "俗", meaning: "풍습 속" } ]
    },
    {
        id: "tb_0545", word: "초기", level: 3, subject: "사회",
        context: "암도 [ ? ]에 발견하면 치료가 가능하다.",
        morphemes: [ { hanja: "初", meaning: "처음 초" }, { hanja: "期", meaning: "기간 기" } ]
    },
    {
        id: "tb_0546", word: "금속", level: 3, subject: "사회",
        context: "우리나라는 세계 최초로 [ ? ] 활자를 발명했다.",
        morphemes: [ { hanja: "金", meaning: "쇠 금" }, { hanja: "屬", meaning: "속할 속" } ]
    },
    {
        id: "tb_0547", word: "공예", level: 3, subject: "사회",
        context: "철수는 [ ? ]에 뛰어난 소질이 있다.",
        morphemes: [ { hanja: "工", meaning: "장인,만들 공" }, { hanja: "藝", meaning: "재주 예" } ]
    },
    {
        id: "tb_0548", word: "문물", level: 3, subject: "사회",
        context: "이 책은 조선시대의 [ ? ]을 연구하는 데에 도움이 많이 된다.",
        morphemes: [ { hanja: "文", meaning: "글월,꾸밀 문" }, { hanja: "物", meaning: "만물 물" } ]
    },
    {
        id: "tb_0549", word: "선교", level: 3, subject: "사회",
        context: "삼촌은 [ ? ]를 하기 위해 아프리카로 갔다.",
        morphemes: [ { hanja: "宣", meaning: "펼 선" }, { hanja: "敎", meaning: "가르칠,종교 교" } ]
    },
    {
        id: "tb_0550", word: "표류", level: 3, subject: "사회",
        context: "조난을 당한 선원들은 며칠을 [ ? ]하다 구조되었다.",
        morphemes: [ { hanja: "漂", meaning: "뜰 표" }, { hanja: "流", meaning: "흐를 류" } ]
    },
    {
        id: "tb_0551", word: "서학", level: 3, subject: "사회",
        context: "조선 후기에 [ ? ]이 들어오면서 많은 변화가 일어났다.",
        morphemes: [ { hanja: "西", meaning: "서녘 서" }, { hanja: "學", meaning: "배울,학문 학" } ]
    },
    {
        id: "tb_0552", word: "후천", level: 3, subject: "사회",
        context: "우리가 갖고 있는 습관의 대부분은 [ ? ]적인 것이다.",
        morphemes: [ { hanja: "後", meaning: "뒤 후" }, { hanja: "天", meaning: "하늘 천" } ]
    },
    {
        id: "tb_0553", word: "전파", level: 3, subject: "사회",
        context: "이번 공연은 우리의 우수한 문화를 세계에 [ ? ]하는 역할을 하였다.",
        morphemes: [ { hanja: "傳", meaning: "전할 전" }, { hanja: "播", meaning: "뿌릴 파" } ]
    },
    {
        id: "tb_0554", word: "지주", level: 3, subject: "사회",
        context: "삼촌은 우리 마을 최대의 [ ? ]로 마을 논밭을 많이 갖고 있다.",
        morphemes: [ { hanja: "地", meaning: "땅 지" }, { hanja: "主", meaning: "주인 주" } ]
    },
    {
        id: "tb_0555", word: "실학", level: 3, subject: "사회",
        context: "정약용은 [ ? ]을 집대성한 학자이다.",
        morphemes: [ { hanja: "實", meaning: "열매,실제 실" }, { hanja: "學", meaning: "배울,학문 학" } ]
    },
    {
        id: "tb_0556", word: "부강", level: 3, subject: "사회",
        context: "국왕은 [ ? ]한 나라를 이루기 위해 여러 가지 개혁을 실시했다.",
        morphemes: [ { hanja: "富", meaning: "부유할 부" }, { hanja: "强", meaning: "강할 강" } ]
    },
    {
        id: "tb_0557", word: "지도", level: 3, subject: "사회",
        context: "세계 [ ? ]를 펼쳐놓고 아시아 대륙의 모습을 살펴보았다.",
        morphemes: [ { hanja: "地", meaning: "땅 지" }, { hanja: "圖", meaning: "그림 도" } ]
    },
    {
        id: "tb_0558", word: "목판", level: 3, subject: "사회",
        context: "[ ? ]으로 된 팔만대장경을 반영구적으로 보존하기 위한 방안이 논의 되었다.",
        morphemes: [ { hanja: "木", meaning: "나무 목" }, { hanja: "板", meaning: "널빤지 판" } ]
    },
    {
        id: "tb_0559", word: "봉기", level: 3, subject: "사회",
        context: "농민들은 관리들의 수탈에 저항하여 [ ? ]를 일으켰다.",
        morphemes: [ { hanja: "蜂", meaning: "벌 봉" }, { hanja: "起", meaning: "일어날 기" } ]
    },
    {
        id: "tb_0560", word: "외세", level: 3, subject: "사회",
        context: "우리 민족은 끊임없이 [ ? ]의 침략에 맞서 싸워 왔다.",
        morphemes: [ { hanja: "外", meaning: "바깥 외" }, { hanja: "勢", meaning: "세력 세" } ]
    },
    {
        id: "tb_0561", word: "개항", level: 3, subject: "사회",
        context: "[ ? ] 이후, 새로운 서구 문물이 물밀듯이 들어왔다",
        morphemes: [ { hanja: "開", meaning: "열 개" }, { hanja: "港", meaning: "항구 항" } ]
    },
    {
        id: "tb_0562", word: "당쟁", level: 3, subject: "사회",
        context: "영조는 [ ? ]으로 인한 피해를 없애기 위하여 탕평책을 썼다",
        morphemes: [ { hanja: "黨", meaning: "무리 당" }, { hanja: "爭", meaning: "" } ]
    },
    {
        id: "tb_0563", word: "약탈", level: 3, subject: "사회",
        context: "고려 말에 왜구들이 해안 지방에 자주 침입하여 [ ? ]을 일삼았다.",
        morphemes: [ { hanja: "掠", meaning: "노략질할 략" }, { hanja: "奪", meaning: "뺏을 탈" } ]
    },
    {
        id: "tb_0564", word: "양요", level: 3, subject: "사회",
        context: "1866년 병인년에는 프랑스 군이 일으킨 병인[ ? ]가 있었다.",
        morphemes: [ { hanja: "洋", meaning: "큰바다 양" }, { hanja: "擾", meaning: "시끄러울 요" } ]
    },
    {
        id: "tb_0565", word: "척화", level: 3, subject: "사회",
        context: "대원군은 이항로의 [ ? ]론은 받아들여 서양 국가와의 교류를 차단 하였다.",
        morphemes: [ { hanja: "斥", meaning: "물리칠 척" }, { hanja: "和", meaning: "화목할 화" } ]
    },
    {
        id: "tb_0566", word: "통상", level: 3, subject: "사회",
        context: "교류가 없던 두 나라는 [ ? ]을 시작하기로 했다.",
        morphemes: [ { hanja: "通", meaning: "통할 통" }, { hanja: "商", meaning: "장사 상" } ]
    },
    {
        id: "tb_0567", word: "조약", level: 3, subject: "사회",
        context: "두 나라는 기나긴 협상 끝에 [ ? ]을 체결하였다.",
        morphemes: [ { hanja: "條", meaning: "조목 조" }, { hanja: "約", meaning: "맺을 약" } ]
    },
    {
        id: "tb_0568", word: "북벌", level: 3, subject: "사회",
        context: "조정에서는 [ ? ]정책을 그대로 유지하기로 결정하였다.",
        morphemes: [ { hanja: "北", meaning: "북녘 북" }, { hanja: "伐", meaning: "칠 벌" } ]
    },
    {
        id: "tb_0569", word: "개화", level: 3, subject: "사회",
        context: "서재필은 [ ? ] 운동을 이끌었던 지도자 중의 한 명이다.",
        morphemes: [ { hanja: "開", meaning: "열 개" }, { hanja: "化", meaning: "될 화" } ]
    },
    {
        id: "tb_0570", word: "군란", level: 3, subject: "사회",
        context: "구식 군인들은 차별에 분노하여 [ ? ]을 일으켰다.",
        morphemes: [ { hanja: "軍", meaning: "군사 군" }, { hanja: "亂", meaning: "난리 란" } ]
    },
    {
        id: "tb_0571", word: "자주", level: 3, subject: "사회",
        context: "애국지사들은 [ ? ] 독립을 위해 많은 노력을 기울였다.",
        morphemes: [ { hanja: "自", meaning: "스스로 자" }, { hanja: "主", meaning: "주인 주" } ]
    },
    {
        id: "tb_0572", word: "수탈", level: 3, subject: "사회",
        context: "임금님은 관리들이 백성들의 재산을 [ ? ]하지 않도록 특별히 명을 내렸다.",
        morphemes: [ { hanja: "收", meaning: "걷을 수" }, { hanja: "奪", meaning: "빼앗을 탈" } ]
    },
    {
        id: "tb_0573", word: "의병", level: 3, subject: "사회",
        context: "왜적이 쳐들어오자 전국 각지에서 [ ? ]이 조직되었다.",
        morphemes: [ { hanja: "義", meaning: "의로울 의" }, { hanja: "兵", meaning: "병사 병" } ]
    },
    {
        id: "tb_0574", word: "항쟁", level: 3, subject: "사회",
        context: "백성들은 지방 관리들의 포악한 정치에 맞서 [ ? ]을 일으켰다.",
        morphemes: [ { hanja: "抗", meaning: "맞설 항" }, { hanja: "爭", meaning: "다툴 쟁" } ]
    },
    {
        id: "tb_0575", word: "시해", level: 3, subject: "사회",
        context: "명성 황후의 [ ? ]는 일본인에 의해 저질러졌다.",
        morphemes: [ { hanja: "弑", meaning: "죽일 시" }, { hanja: "害", meaning: "해할 해" } ]
    },
    {
        id: "tb_0576", word: "만행", level: 3, subject: "사회",
        context: "왜구들의 [ ? ]은 이루 헤아릴 수가 없다.",
        morphemes: [ { hanja: "蠻", meaning: "오랑캐 만" }, { hanja: "行", meaning: "갈,행할 행" } ]
    },
    {
        id: "tb_0577", word: "독립", level: 3, subject: "사회",
        context: "삼촌은 지난 달에 결혼한 후 [ ? ]하여 따로 나가 살고 있다.",
        morphemes: [ { hanja: "獨", meaning: "홀로 독" }, { hanja: "立", meaning: "설 립" } ]
    },
    {
        id: "tb_0578", word: "양복", level: 3, subject: "사회",
        context: "삼촌은 [ ? ]을 입었을 때 참 멋있다.",
        morphemes: [ { hanja: "洋", meaning: "큰바다 양" }, { hanja: "服", meaning: "옷 복" } ]
    },
    {
        id: "tb_0579", word: "사립", level: 3, subject: "사회",
        context: "형이 다니는 중학교는 [ ? ]학교이다.",
        morphemes: [ { hanja: "私", meaning: "사사로울 사" }, { hanja: "立", meaning: "설 립" } ]
    },
    {
        id: "tb_0580", word: "관립", level: 3, subject: "사회",
        context: "할아버지는 기관사가 되고 싶어 [ ? ] 철도 학교에 입학하셨다고 한다.",
        morphemes: [ { hanja: "官", meaning: "벼슬,관청 관" }, { hanja: "立", meaning: "설 립" } ]
    },
    {
        id: "tb_0581", word: "국권", level: 3, subject: "사회",
        context: "을사조약으로 우리나라의 [ ? ]이 상실되었다.",
        morphemes: [ { hanja: "國", meaning: "나라 국" }, { hanja: "權", meaning: "권력 권" } ]
    },
    {
        id: "tb_0582", word: "결사", level: 3, subject: "사회",
        context: "모든 국민은 언론, 출판의 자유와 집회, [ ? ]의 자유를 갖는다.",
        morphemes: [ { hanja: "結", meaning: "맺을 결" }, { hanja: "社", meaning: "단체 사" } ]
    },
    {
        id: "tb_0583", word: "산미", level: 3, subject: "사회",
        context: "일본은 이른바 [ ? ] 증식 계획이란 것을 세워 우리 농민을 수탈하였다.",
        morphemes: [ { hanja: "産", meaning: "낳을 산" }, { hanja: "米", meaning: "쌀 미" } ]
    },
    {
        id: "tb_0584", word: "강점", level: 3, subject: "사회",
        context: "일제의 [ ? ]과 수탈에 맞서 삼일운동을 전개하였다.",
        morphemes: [ { hanja: "强", meaning: "강할,강제 강" }, { hanja: "占", meaning: "점령할 점" } ]
    },
    {
        id: "tb_0585", word: "동원", level: 3, subject: "사회",
        context: "이번에 개봉된 이 영화는 기대 이상으로 관객을 [ ? ]하고 있다.",
        morphemes: [ { hanja: "動", meaning: "움직일 동" }, { hanja: "員", meaning: "사람 원" } ]
    },
    {
        id: "tb_0586", word: "이주", level: 3, subject: "사회",
        context: "고향을 떠나 낯선 외국으로 [ ? ]하기란 쉬운 일이 아니다.",
        morphemes: [ { hanja: "移", meaning: "옮길 이" }, { hanja: "住", meaning: "살 주" } ]
    },
    {
        id: "tb_0587", word: "항일", level: 3, subject: "사회",
        context: "할아버지께서는 [ ? ] 운동을 하셨다.",
        morphemes: [ { hanja: "抗", meaning: "맞설 항" }, { hanja: "日", meaning: "날 일" } ]
    },
    {
        id: "tb_0588", word: "의사", level: 3, subject: "사회",
        context: "윤봉길 [ ? ]는 애국 단원으로서 일제에 대항하는 의거를 감행했다.",
        morphemes: [ { hanja: "義", meaning: "의로울 의" }, { hanja: "士", meaning: "선비 사" } ]
    },
    {
        id: "tb_0589", word: "계몽", level: 3, subject: "사회",
        context: "선생님은 아프리카의 사람들을 [ ? ]하려고 많은 애를 썼다.",
        morphemes: [ { hanja: "啓", meaning: "일깨울 계" }, { hanja: "蒙", meaning: "어리석을 몽" } ]
    },
    {
        id: "tb_0590", word: "자결", level: 3, subject: "사회",
        context: "삼일운동을 통해서 독립의 의지와 민족 [ ? ]주의 원칙을 국내외에 알렸다.",
        morphemes: [ { hanja: "自", meaning: "스스로 자" }, { hanja: "決", meaning: "정할 결" } ]
    },
    {
        id: "tb_0591", word: "전과", level: 3, subject: "사회",
        context: "광복군은 일본군과 전투에서 많은 [ ? ]를 거두었다.",
        morphemes: [ { hanja: "戰", meaning: "싸울 전" }, { hanja: "果", meaning: "결과 과" } ]
    },
    {
        id: "tb_0592", word: "순국", level: 3, subject: "사회",
        context: "사이렌 소리에 맞춰 모두가 [ ? ]선열들에 대한 묵념을 올렸다.",
        morphemes: [ { hanja: "殉", meaning: "목숨바칠 순" }, { hanja: "國", meaning: "나라 국" } ]
    },
    {
        id: "tb_0593", word: "신사", level: 3, subject: "사회",
        context: "일제강점기 시대에 일본은 우리에게 자기들의 [ ? ]에서 참배할 것을 강요하였다.",
        morphemes: [ { hanja: "神", meaning: "귀신 신" }, { hanja: "社", meaning: "제사지낼 사" } ]
    },
    {
        id: "tb_0594", word: "개명", level: 3, subject: "사회",
        context: "아버지 회사는 회사의 이름을 새롭게 [ ? ]하였다.",
        morphemes: [ { hanja: "改", meaning: "고칠 개" }, { hanja: "名", meaning: "이름 명" } ]
    },
    {
        id: "tb_0595", word: "광복", level: 3, subject: "사회",
        context: "수 많은 독립투사들이 [ ? ]을 위해 노력하였다.",
        morphemes: [ { hanja: "光", meaning: "빛 광" }, { hanja: "復", meaning: "회복할 복" } ]
    },
    {
        id: "tb_0596", word: "수립", level: 3, subject: "사회",
        context: "정부에서는 수해 예방을 위한 계획을 [ ? ]하였다.",
        morphemes: [ { hanja: "樹", meaning: "나무,세울 수" }, { hanja: "立", meaning: "설 립" } ]
    },
    {
        id: "tb_0597", word: "신탁", level: 3, subject: "사회",
        context: "아버지는 여유있는 돈을 [ ? ] 회사에 맡겼다.",
        morphemes: [ { hanja: "信", meaning: "믿을 신" }, { hanja: "託", meaning: "맡길 탁" } ]
    },
    {
        id: "tb_0598", word: "제헌", level: 3, subject: "사회",
        context: "7월 17일은 1948년에 우리나라 헌법을 만든 것을 기념하는 [ ? ]절이다.",
        morphemes: [ { hanja: "制", meaning: "만들 제" }, { hanja: "憲", meaning: "법 헌" } ]
    },
    {
        id: "tb_0599", word: "민주", level: 3, subject: "사회",
        context: "투표를 하지 않는 것은 [ ? ] 시민으로서의 권리를 포기하는 일이다.",
        morphemes: [ { hanja: "民", meaning: "백성 민" }, { hanja: "主", meaning: "주인 주" } ]
    },
    {
        id: "tb_0600", word: "휴전", level: 3, subject: "사회",
        context: "두 나라는 전쟁을 멈추고 [ ? ]을 하기로 했다.",
        morphemes: [ { hanja: "休", meaning: "쉴 휴" }, { hanja: "戰", meaning: "싸울 전" } ]
    },
    {
        id: "tb_0601", word: "분단", level: 3, subject: "사회",
        context: "우리나라는 [ ? ]국가이다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "斷", meaning: "끊을 단" } ]
    },
    {
        id: "tb_0602", word: "생사", level: 3, subject: "사회",
        context: "폭우로 고립된 사람들의 [ ? ]여부가 아직 확인되지 않았다.",
        morphemes: [ { hanja: "生", meaning: "살 생" }, { hanja: "死", meaning: "죽을 사" } ]
    },
    {
        id: "tb_0603", word: "이산", level: 3, subject: "사회",
        context: "남북한의 노력으로 [ ? ]가족 상봉이 이루어졌다.",
        morphemes: [ { hanja: "離", meaning: "헤어질 리" }, { hanja: "散", meaning: "흩어질 산" } ]
    },
    {
        id: "tb_0604", word: "부정", level: 3, subject: "사회",
        context: "정부에서는 [ ? ]부패를 없애기 위해 많은 노력을 하고 있다.",
        morphemes: [ { hanja: "不", meaning: "아닐 불" }, { hanja: "正", meaning: "바를 정" } ]
    },
    {
        id: "tb_0605", word: "행상", level: 3, subject: "사회",
        context: "그 할머니는 평생 [ ? ]을 하며 모은 돈을 학교에 기증했다.",
        morphemes: [ { hanja: "行", meaning: "갈 행" }, { hanja: "商", meaning: "장사 상" } ]
    },
    {
        id: "tb_0606", word: "정변", level: 3, subject: "사회",
        context: "몇 차례 [ ? ]으로 백성들의 민심이 흉흉해졌다.",
        morphemes: [ { hanja: "政", meaning: "정사,정치 정" }, { hanja: "變", meaning: "변할 변" } ]
    },
    {
        id: "tb_0607", word: "소득", level: 3, subject: "사회",
        context: "이번 일에 [ ? ]이 많았다.",
        morphemes: [ { hanja: "所", meaning: "것 소" }, { hanja: "得", meaning: "얻을 득" } ]
    },
    {
        id: "tb_0608", word: "주거", level: 3, subject: "사회",
        context: "이곳은 [ ? ] 밀집 지역이다.",
        morphemes: [ { hanja: "住", meaning: "살 주" }, { hanja: "居", meaning: "살 거" } ]
    },
    {
        id: "tb_0609", word: "통화", level: 3, subject: "사회",
        context: "한국은행에서는 경제 상황에 따라 화폐의 [ ? ]량을 조절한다.",
        morphemes: [ { hanja: "通", meaning: "통할 통" }, { hanja: "貨", meaning: "재물 화" } ]
    },
    {
        id: "tb_0610", word: "빈부", level: 3, subject: "사회",
        context: "정부는 [ ? ] 격차를 줄이기 위해 많은 노력을 하고 있다.",
        morphemes: [ { hanja: "貧", meaning: "가난할 빈" }, { hanja: "富", meaning: "부유할 부" } ]
    },
    {
        id: "tb_0611", word: "사유", level: 3, subject: "사회",
        context: "민주주의 국가에서는 개인의 [ ? ] 재산을 인정한다.",
        morphemes: [ { hanja: "私", meaning: "사사로울 사" }, { hanja: "有", meaning: "있을 유" } ]
    },
    {
        id: "tb_0612", word: "정상", level: 3, subject: "사회",
        context: "세계 각국의 [ ? ]들이 서울에 모여 회담을 가졌다.",
        morphemes: [ { hanja: "頂", meaning: "꼭대기 정" }, { hanja: "上", meaning: "위 상" } ]
    },
    {
        id: "tb_0613", word: "분수", level: 3, subject: "수학",
        context: "[ ? ]에는 분모와 분자가 있다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "數", meaning: "숫자 수" } ]
    },
    {
        id: "tb_0614", word: "소수", level: 3, subject: "수학",
        context: "분수는 [ ? ]로 나타낼 수 있다.",
        morphemes: [ { hanja: "小", meaning: "작을 수" }, { hanja: "數", meaning: "숫자 수" } ]
    },
    {
        id: "tb_0615", word: "분모", level: 3, subject: "수학",
        context: "[ ? ]가 분자보다 큰 분수를 진분수라고 한다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "母", meaning: "어머니 모" } ]
    },
    {
        id: "tb_0616", word: "수조", level: 3, subject: "수학",
        context: "회를 먹으러 간 식당의 [ ? ]에서 헤엄치는 물고기들을 바라보았다.",
        morphemes: [ { hanja: "水", meaning: "물 수" }, { hanja: "槽", meaning: "통 조" } ]
    },
    {
        id: "tb_0617", word: "사각", level: 3, subject: "수학",
        context: "[ ? ]형의 여러 가지 성질을 알아봅시다.",
        morphemes: [ { hanja: "四", meaning: "넉 사" }, { hanja: "角", meaning: "뿔 각" } ]
    },
    {
        id: "tb_0618", word: "계산", level: 3, subject: "수학",
        context: "철수는 [ ? ]이 빠르다.",
        morphemes: [ { hanja: "計", meaning: "셀 계" }, { hanja: "算", meaning: "셀 산" } ]
    },
    {
        id: "tb_0619", word: "약분", level: 3, subject: "수학",
        context: "분모와 분자가 모두 짝수이면 언제나 2로 [ ? ]된다",
        morphemes: [ { hanja: "約", meaning: "묶을 약" }, { hanja: "分", meaning: "나눌 분" } ]
    },
    {
        id: "tb_0620", word: "순서", level: 3, subject: "수학",
        context: "체육시간에 번호 [ ? ]대로 줄을 섰다.",
        morphemes: [ { hanja: "順", meaning: "차례 순" }, { hanja: "序", meaning: "차례 서" } ]
    },
    {
        id: "tb_0621", word: "혼합", level: 3, subject: "수학",
        context: "빨강색 물감과 파랑색 물감을 [ ? ]하면 보라색이 된다.",
        morphemes: [ { hanja: "混", meaning: "섞을 혼" }, { hanja: "合", meaning: "합할 합" } ]
    },
    {
        id: "tb_0622", word: "도형", level: 3, subject: "수학",
        context: "여러 가지 [ ? ]을 만들어 봅시다.",
        morphemes: [ { hanja: "圖", meaning: "그림 도" }, { hanja: "形", meaning: "모양 형" } ]
    },
    {
        id: "tb_0623", word: "합동", level: 3, subject: "수학",
        context: "이 두 도형은 서로 [ ? ]이다.",
        morphemes: [ { hanja: "合", meaning: "합할 합" }, { hanja: "同", meaning: "한 가지 동" } ]
    },
    {
        id: "tb_0624", word: "대응", level: 3, subject: "수학",
        context: "각 ㄱㄴㄷ의 [ ? ]각을 찾아보자.",
        morphemes: [ { hanja: "對", meaning: "대할 대" }, { hanja: "應", meaning: "응할 응" } ]
    },
    {
        id: "tb_0625", word: "반사", level: 3, subject: "수학",
        context: "모든 사물은 빛을 [ ? ]시키기 때문에 그 색깔을 구별할 수 있다.",
        morphemes: [ { hanja: "反", meaning: "돌이킬 반" }, { hanja: "射", meaning: "쏠 사" } ]
    },
    {
        id: "tb_0626", word: "투명", level: 3, subject: "수학",
        context: "유리는 대부분 [ ? ]하다.",
        morphemes: [ { hanja: "透", meaning: "통할 투" }, { hanja: "明", meaning: "밝을 명" } ]
    },
    {
        id: "tb_0627", word: "축사", level: 3, subject: "수학",
        context: "눈이 많이 와서 소들이 [ ? ]에 모여 있다.",
        morphemes: [ { hanja: "畜", meaning: "가축 축" }, { hanja: "舍", meaning: "집 사" } ]
    },
    {
        id: "tb_0628", word: "생산", level: 3, subject: "수학",
        context: "그 회사는 최근 소형 자동차 쪽으로 [ ? ]을 늘리고 있다.",
        morphemes: [ { hanja: "生", meaning: "날 생" }, { hanja: "産", meaning: "낳을 산" } ]
    },
    {
        id: "tb_0629", word: "필요", level: 3, subject: "수학",
        context: "옛날 사람들은 생활에 [ ? ]한 물건을 스스로 만들었다.",
        morphemes: [ { hanja: "必", meaning: "반드시 필" }, { hanja: "要", meaning: "요구할 요" } ]
    },
    {
        id: "tb_0630", word: "과정", level: 3, subject: "수학",
        context: "지금까지의 [ ? ]은 순탄했다.",
        morphemes: [ { hanja: "過", meaning: "지날 과" }, { hanja: "程", meaning: "정도,길 정" } ]
    },
    {
        id: "tb_0631", word: "필산", level: 3, subject: "수학",
        context: "[ ? ]을 바르게 했는지 꼼꼼히 살펴봅시다.",
        morphemes: [ { hanja: "筆", meaning: "붓 필" }, { hanja: "算", meaning: "셈할 산" } ]
    },
    {
        id: "tb_0632", word: "등분", level: 3, subject: "수학",
        context: "피자를 똑같이 8[ ? ]하였다.",
        morphemes: [ { hanja: "等", meaning: "같을 등" }, { hanja: "分", meaning: "나눌 분" } ]
    },
    {
        id: "tb_0633", word: "실습", level: 3, subject: "수학",
        context: "실과 시간에 음식 만들기 [ ? ]을 하였다.",
        morphemes: [ { hanja: "實", meaning: "열매,실제 실" }, { hanja: "習", meaning: "익힐 습" } ]
    },
    {
        id: "tb_0634", word: "이상", level: 3, subject: "수학",
        context: "투표를 할 수 있는 나이는 19세 [ ? ]입니다.",
        morphemes: [ { hanja: "以", meaning: "부터 이" }, { hanja: "上", meaning: "위 상" } ]
    },
    {
        id: "tb_0635", word: "이하", level: 3, subject: "수학",
        context: "키 120cm [ ? ]의 어린이는 이 놀이기구를 탈 수 없습니다.",
        morphemes: [ { hanja: "以", meaning: "부터 이" }, { hanja: "下", meaning: "아래 하" } ]
    },
    {
        id: "tb_0636", word: "성취", level: 3, subject: "수학",
        context: "여러분들의 소원이 [ ? ]되기를 바랍니다.",
        morphemes: [ { hanja: "成", meaning: "이룰 성" }, { hanja: "就", meaning: "이룰 취" } ]
    },
    {
        id: "tb_0637", word: "타율", level: 3, subject: "수학",
        context: "그 선수는 [ ? ]은 낮지만 홈런은 잘 친다.",
        morphemes: [ { hanja: "打", meaning: "칠 타" }, { hanja: "率", meaning: "비율 율" } ]
    },
    {
        id: "tb_0638", word: "불량", level: 3, subject: "수학",
        context: "우리 회사의 제품은 [ ? ]품이 거의 없다.",
        morphemes: [ { hanja: "不", meaning: "아니 불" }, { hanja: "良", meaning: "좋을 량" } ]
    },
    {
        id: "tb_0639", word: "장단", level: 3, subject: "수학",
        context: "사람은 누구나 [ ? ]점이 있다.",
        morphemes: [ { hanja: "長", meaning: "길 장" }, { hanja: "短", meaning: "짧을 단" } ]
    },
    {
        id: "tb_0640", word: "예상", level: 3, subject: "수학",
        context: "[ ? ]보다 일이 빠르게 진행되고 있습니다.",
        morphemes: [ { hanja: "豫", meaning: "미리 예" }, { hanja: "想", meaning: "생각 상" } ]
    },
    {
        id: "tb_0641", word: "교환", level: 3, subject: "수학",
        context: "동전을 모아 은행에 가서 지폐로 [ ? ]하였다.",
        morphemes: [ { hanja: "交", meaning: "서로 교" }, { hanja: "換", meaning: "바꿀 환" } ]
    },
    {
        id: "tb_0642", word: "인체", level: 3, subject: "과학",
        context: "[ ? ]는 참 신비로운 것 같아",
        morphemes: [ { hanja: "人", meaning: "사람 인" }, { hanja: "體", meaning: "몸 체" } ]
    },
    {
        id: "tb_0643", word: "반응", level: 3, subject: "과학",
        context: "철수에게 이 선물을 주면 어떤 [ ? ]을 보일까?",
        morphemes: [ { hanja: "反", meaning: "되돌릴 반" }, { hanja: "應", meaning: "응할 응" } ]
    },
    {
        id: "tb_0644", word: "골격", level: 3, subject: "과학",
        context: "철수는 우람한 [ ? ]을 가지고 있다.",
        morphemes: [ { hanja: "骨", meaning: "뼈 골" }, { hanja: "格", meaning: "격식 격" } ]
    },
    {
        id: "tb_0645", word: "다양", level: 3, subject: "과학",
        context: "동물의 종류와 생김새는 참으로 [ ? ]하다.",
        morphemes: [ { hanja: "多", meaning: "많을 다" }, { hanja: "樣", meaning: "모양 양" } ]
    },
    {
        id: "tb_0646", word: "탐구", level: 3, subject: "과학",
        context: "방학 동안에 동물의 한 살이에 대해서 [ ? ]해 볼 생각이다.",
        morphemes: [ { hanja: "探", meaning: "찾을 탐" }, { hanja: "究", meaning: "연구할 구" } ]
    },
    {
        id: "tb_0647", word: "소화", level: 3, subject: "과학",
        context: "[ ? ]가 잘 안되는지 배가 좀 거북하다.",
        morphemes: [ { hanja: "消", meaning: "사라질 소" }, { hanja: "化", meaning: "될 화" } ]
    },
    {
        id: "tb_0648", word: "배출", level: 3, subject: "과학",
        context: "환경오염을 막기 위해 유해가스의 [ ? ]을 줄여야 한다.",
        morphemes: [ { hanja: "排", meaning: "밀칠 배" }, { hanja: "出", meaning: "나갈 출" } ]
    },
    {
        id: "tb_0649", word: "분비", level: 3, subject: "과학",
        context: "임에서는 침이 [ ? ]되어 음식물의 소화를 돕는다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "泌", meaning: "흐를 비" } ]
    },
    {
        id: "tb_0650", word: "식용", level: 3, subject: "과학",
        context: "이 식물은 [ ? ]으로 쓰입니다.",
        morphemes: [ { hanja: "食", meaning: "먹을 식" }, { hanja: "用", meaning: "쓸 용" } ]
    },
    {
        id: "tb_0651", word: "혈관", level: 3, subject: "과학",
        context: "간호사가 [ ? ]을 찾아 주사 바늘을 꽂았다.",
        morphemes: [ { hanja: "血", meaning: "피 혈" }, { hanja: "管", meaning: "대롱 관" } ]
    },
    {
        id: "tb_0652", word: "순환", level: 3, subject: "과학",
        context: "찬 공기는 위에서 아래로, 더운 공기는 아래에서 위로 [ ? ]한다.",
        morphemes: [ { hanja: "循", meaning: "돌 순" }, { hanja: "環", meaning: "고리,돌 환" } ]
    },
    {
        id: "tb_0653", word: "측정", level: 3, subject: "과학",
        context: "측우기는 조선시대에 만들어진 것으로 비의 양을 [ ? ]하는 기구이다.",
        morphemes: [ { hanja: "測", meaning: "잴 측" }, { hanja: "定", meaning: "정할 정" } ]
    },
    {
        id: "tb_0654", word: "호흡", level: 3, subject: "과학",
        context: "물고기는 아가미로 [ ? ]한다.",
        morphemes: [ { hanja: "呼", meaning: "부를,내쉴 호" }, { hanja: "吸", meaning: "들이마쉴 흡" } ]
    },
    {
        id: "tb_0655", word: "이동", level: 3, subject: "과학",
        context: "철새들이 계절에 따라 [ ? ]하는 것을 보면 참 신기하다.",
        morphemes: [ { hanja: "移", meaning: "옮길 이" }, { hanja: "動", meaning: "움직일 동" } ]
    },
    {
        id: "tb_0656", word: "연결", level: 3, subject: "과학",
        context: "이 비밀통로는 건물 밖으로 [ ? ]되어 있다.",
        morphemes: [ { hanja: "連", meaning: "이을 련" }, { hanja: "結", meaning: "맺을 결" } ]
    },
    {
        id: "tb_0657", word: "이용", level: 3, subject: "과학",
        context: "이 나무를 [ ? ]하여 개울을 건널 수 있는 다리를 만들어보자.",
        morphemes: [ { hanja: "利", meaning: "이로울 리" }, { hanja: "用", meaning: "쓸 용" } ]
    },
    {
        id: "tb_0658", word: "배설", level: 3, subject: "과학",
        context: "생물은 몸 안에 생긴 불필요한 것들을 몸 밖으로 [ ? ]한다.",
        morphemes: [ { hanja: "排", meaning: "밀칠 배" }, { hanja: "泄", meaning: "샐,쌀 설" } ]
    },
    {
        id: "tb_0659", word: "감각", level: 3, subject: "과학",
        context: "몸이 피곤해서인지 [ ? ]이 좀 무뎌졌다.",
        morphemes: [ { hanja: "感", meaning: "느낄 감" }, { hanja: "覺", meaning: "깨달을 각" } ]
    },
    {
        id: "tb_0660", word: "말초", level: 3, subject: "과학",
        context: "손발이 찬 것은 [ ? ] 혈관에 혈액 순환이 잘 안되기 때문이라고 한다.",
        morphemes: [ { hanja: "末", meaning: "끝 말" }, { hanja: "梢", meaning: "끝 초" } ]
    },
    {
        id: "tb_0661", word: "중추", level: 3, subject: "과학",
        context: "나는 이번 일에서 [ ? ]적인 역할을 했다.",
        morphemes: [ { hanja: "中", meaning: "가운데 중" }, { hanja: "樞", meaning: "지도리,중요한 것 추" } ]
    },
    {
        id: "tb_0662", word: "비만", level: 3, subject: "과학",
        context: "나는 [ ? ]을 예방하기 위해 매일 아침 운동을 한다.",
        morphemes: [ { hanja: "肥", meaning: "살찔 비" }, { hanja: "滿", meaning: "찰 만" } ]
    },
    {
        id: "tb_0663", word: "경화", level: 3, subject: "과학",
        context: "아버지는 간이 [ ? ]되는 증세를 치료하기 위해 병원에 입원하셨다.",
        morphemes: [ { hanja: "硬", meaning: "굳을 경" }, { hanja: "化", meaning: "될 화" } ]
    },
    {
        id: "tb_0664", word: "예방", level: 3, subject: "과학",
        context: "나는 독감 [ ? ]주사를 맞았다.",
        morphemes: [ { hanja: "豫", meaning: "미리 예" }, { hanja: "防", meaning: "막을 방" } ]
    },
    {
        id: "tb_0665", word: "불의", level: 3, subject: "과학",
        context: "삼촌은 [ ? ]의 사고로 장애를 입은 사람들을 위해 봉사활동을 하신다.",
        morphemes: [ { hanja: "不", meaning: "아니 불" }, { hanja: "意", meaning: "뜻 의" } ]
    },
    {
        id: "tb_0666", word: "인공", level: 3, subject: "과학",
        context: "지구 밖에는 [ ? ]위성들이 돌고 있다.",
        morphemes: [ { hanja: "人", meaning: "사람 인" }, { hanja: "工", meaning: "만들 공" } ]
    },
    {
        id: "tb_0667", word: "이식", level: 3, subject: "과학",
        context: "이 나무는 근처의 산에 [ ? ]할 계획이다.",
        morphemes: [ { hanja: "移", meaning: "옮길 이" }, { hanja: "植", meaning: "심을 식" } ]
    },
    {
        id: "tb_0668", word: "물질", level: 3, subject: "과학",
        context: "이 화학 [ ? ]은 불에 잘 탄다.",
        morphemes: [ { hanja: "物", meaning: "물건 물" }, { hanja: "質", meaning: "바탕 질" } ]
    },
    {
        id: "tb_0669", word: "용액", level: 3, subject: "과학",
        context: "과학 시간에 소금 [ ? ]을 만들어 보았다.",
        morphemes: [ { hanja: "溶", meaning: "녹을 용" }, { hanja: "液", meaning: "즙 액" } ]
    },
    {
        id: "tb_0670", word: "용매", level: 3, subject: "과학",
        context: "일반적으로 [ ? ]는 물, 아세톤, 에테르 같은 액체를 사용한다.",
        morphemes: [ { hanja: "溶", meaning: "녹을 용" }, { hanja: "媒", meaning: "매개 매" } ]
    },
    {
        id: "tb_0671", word: "용질", level: 3, subject: "과학",
        context: "바닷물은 소금이 많이 녹아있어, 소금이 [ ? ]이다.",
        morphemes: [ { hanja: "容", meaning: "녹을 용" }, { hanja: "質", meaning: "바탕,물질 질" } ]
    },
    {
        id: "tb_0672", word: "염분", level: 3, subject: "과학",
        context: "바닷물의 [ ? ] 농도를 측정하여 보았다.",
        morphemes: [ { hanja: "鹽", meaning: "소금 염" }, { hanja: "分", meaning: "나눌,성분 분" } ]
    },
    {
        id: "tb_0673", word: "예상", level: 3, subject: "과학",
        context: "이번 체육 대회에서 [ ? ]대로 우리 반이 우승을 차지했다.",
        morphemes: [ { hanja: "豫", meaning: "미리 예" }, { hanja: "想", meaning: "생각 상" } ]
    },
    {
        id: "tb_0674", word: "설명", level: 3, subject: "과학",
        context: "철수의 [ ? ]을 듣고 나니 이해가 잘 되었다.",
        morphemes: [ { hanja: "說", meaning: "말씀 설" }, { hanja: "明", meaning: "밝을 명" } ]
    },
    {
        id: "tb_0675", word: "요인", level: 3, subject: "과학",
        context: "이번 일이 일어나게 된 [ ? ]을 여러 가지로 분석하였다.",
        morphemes: [ { hanja: "要", meaning: "중요할 요" }, { hanja: "因", meaning: "인할 인" } ]
    },
    {
        id: "tb_0676", word: "가설", level: 3, subject: "과학",
        context: "실험을 통해 [ ? ]을 검증하였다.",
        morphemes: [ { hanja: "假", meaning: "거짓,임시 가" }, { hanja: "說", meaning: "말씀 설" } ]
    },
    {
        id: "tb_0677", word: "온도", level: 3, subject: "과학",
        context: "물은 [ ? ]가 0도 아래가 되면 얼음으로 변한다.",
        morphemes: [ { hanja: "溫", meaning: "따뜻할 온" }, { hanja: "度", meaning: "정도 도" } ]
    },
    {
        id: "tb_0678", word: "표면", level: 3, subject: "과학",
        context: "삼촌이 나무토막의 [ ? ]을 매끄럽게 다듬고 있다.",
        morphemes: [ { hanja: "表", meaning: "겉 표" }, { hanja: "面", meaning: "낯,겉 면" } ]
    },
    {
        id: "tb_0679", word: "해수", level: 3, subject: "과학",
        context: "최근 [ ? ] 온도의 상승으로 어류의 이동 경로가 달라지고 있다고 한다.",
        morphemes: [ { hanja: "海", meaning: "바다 해" }, { hanja: "水", meaning: "물 수" } ]
    },
    {
        id: "tb_0680", word: "염전", level: 3, subject: "과학",
        context: "바닷가에 펼쳐진 [ ? ]의 모습이 마치 바둑판같았다.",
        morphemes: [ { hanja: "鹽", meaning: "소금 염" }, { hanja: "田", meaning: "밭 전" } ]
    },
    {
        id: "tb_0681", word: "혼합", level: 3, subject: "과학",
        context: "빨강색 물감과 파랑색 물감을 [ ? ]하면 보라색이 된다.",
        morphemes: [ { hanja: "混", meaning: "섞을 혼" }, { hanja: "合", meaning: "합할 합" } ]
    },
    {
        id: "tb_0682", word: "압력", level: 3, subject: "과학",
        context: "어머니는 [ ? ] 밥솥으로 밥을 지으셨다.",
        morphemes: [ { hanja: "壓", meaning: "누를 압" }, { hanja: "力", meaning: "힘 력" } ]
    },
    {
        id: "tb_0683", word: "동력", level: 3, subject: "과학",
        context: "전기면도기는 전기를 [ ? ]으로 사용한다.",
        morphemes: [ { hanja: "動", meaning: "움직일 동" }, { hanja: "力", meaning: "힘 력" } ]
    },
    {
        id: "tb_0684", word: "경주", level: 3, subject: "과학",
        context: "학급 100미터 달리기 [ ? ]에서 내가 1등을 하였다.",
        morphemes: [ { hanja: "競", meaning: "다툴 경" }, { hanja: "走", meaning: "달릴 주" } ]
    },
    {
        id: "tb_0685", word: "지점", level: 3, subject: "과학",
        context: "달리기 선수들이 모두 출발 [ ? ]에 섰다.",
        morphemes: [ { hanja: "地", meaning: "땅 지" }, { hanja: "點", meaning: "점 점" } ]
    },
    {
        id: "tb_0686", word: "기록", level: 3, subject: "과학",
        context: "철수는 우리 학교에서 가장 빠른 달리기 [ ? ]을 가지고 있다.",
        morphemes: [ { hanja: "記", meaning: "적을 기" }, { hanja: "錄", meaning: "적을 록" } ]
    },
    {
        id: "tb_0687", word: "동시", level: 3, subject: "과학",
        context: "두 사람이 거의 [ ? ]에 결승점을 통과했다.",
        morphemes: [ { hanja: "同", meaning: "같을 동" }, { hanja: "時", meaning: "때 시" } ]
    },
    {
        id: "tb_0688", word: "나열", level: 3, subject: "과학",
        context: "책상위에 내가 갖고 있는 소지품들을 [ ? ]해 보았다.",
        morphemes: [ { hanja: "羅", meaning: "벌일 라" }, { hanja: "列", meaning: "벌일 열" } ]
    },
    {
        id: "tb_0689", word: "속력", level: 3, subject: "과학",
        context: "자동차는 점점 더 [ ? ]을 내기 시작했다.",
        morphemes: [ { hanja: "速", meaning: "빠를 속" }, { hanja: "力", meaning: "힘 력" } ]
    },
    {
        id: "tb_0690", word: "음속", level: 3, subject: "과학",
        context: "이 비행기는 [ ? ]보다 빠르다.",
        morphemes: [ { hanja: "音", meaning: "소리 음" }, { hanja: "速", meaning: "빠를 속" } ]
    },
    {
        id: "tb_0691", word: "광속", level: 3, subject: "과학",
        context: "지구에서 태양까지는 [ ? ]으로 약 8분 20초 정도 걸립니다.",
        morphemes: [ { hanja: "光", meaning: "빛 광" }, { hanja: "速", meaning: "빠를 속" } ]
    },
    {
        id: "tb_0692", word: "피해", level: 3, subject: "과학",
        context: "농가들은 태풍이 불어왔지만 대비를 잘해 별로 [ ? ]를 입지 않았다.",
        morphemes: [ { hanja: "被", meaning: "입을 해" }, { hanja: "害", meaning: "해로울 해" } ]
    },
    {
        id: "tb_0693", word: "개선", level: 3, subject: "과학",
        context: "이 병원은 얼마 전에 시설을 [ ? ]하였다.",
        morphemes: [ { hanja: "改", meaning: "고칠 개" }, { hanja: "善", meaning: "착할,좋을 선" } ]
    },
    {
        id: "tb_0694", word: "과속", level: 3, subject: "과학",
        context: "학교 주변에는 [ ? ] 방지턱이 많이 있다.",
        morphemes: [ { hanja: "過", meaning: "지날 과" }, { hanja: "速", meaning: "빠를 속" } ]
    },
    {
        id: "tb_0695", word: "정지", level: 3, subject: "과학",
        context: "차들이 횡단보도 앞 [ ? ]선에 나란히 정지하였다.",
        morphemes: [ { hanja: "停", meaning: "머무를 정" }, { hanja: "止", meaning: "그칠 지" } ]
    },
    {
        id: "tb_0696", word: "학설", level: 3, subject: "과학",
        context: "삼촌이 주장한 새로운 [ ? ]은 사람들로부터 많은 지지를 받았다.",
        morphemes: [ { hanja: "學", meaning: "배울,학문 학" }, { hanja: "說", meaning: "말씀 설" } ]
    },
    {
        id: "tb_0697", word: "자전", level: 3, subject: "과학",
        context: "지구의 [ ? ] 때문에 밤과 낮이 생긴다.",
        morphemes: [ { hanja: "自", meaning: "스스로 자" }, { hanja: "轉", meaning: "돌 전" } ]
    },
    {
        id: "tb_0698", word: "행성", level: 3, subject: "과학",
        context: "지구는 태양으로부터 세 번째에 있는 [ ? ]이다.",
        morphemes: [ { hanja: "行", meaning: "갈,돌 행" }, { hanja: "星", meaning: "별 성" } ]
    },
    {
        id: "tb_0699", word: "위성", level: 3, subject: "과학",
        context: "지구에는 수많은 인공[ ? ]들이 돌고 있다.",
        morphemes: [ { hanja: "衛", meaning: "지킬 위" }, { hanja: "星", meaning: "별 성" } ]
    },
    {
        id: "tb_0700", word: "혜성", level: 3, subject: "과학",
        context: "느닷없이 화려하게 나타난 사람을 두고 [ ? ]처럼 나타났다고 말하곤 한다.",
        morphemes: [ { hanja: "彗", meaning: "꼬리별 혜" }, { hanja: "星", meaning: "별 성" } ]
    },
    {
        id: "tb_0701", word: "공전", level: 3, subject: "과학",
        context: "달은 지구 둘레를 [ ? ]한다.",
        morphemes: [ { hanja: "公", meaning: "공평할,여럿 공" }, { hanja: "轉", meaning: "돌 전" } ]
    },
    {
        id: "tb_0702", word: "신화", level: 3, subject: "과학",
        context: "단군[ ? ]는 우리민족의 시조인 단군의 출생과 건국에 대한 신화이다.",
        morphemes: [ { hanja: "神", meaning: "신령 신" }, { hanja: "話", meaning: "말씀 화" } ]
    },
    {
        id: "tb_0703", word: "전설", level: 3, subject: "과학",
        context: "우리 고장에는 [ ? ]이 많이 있다.",
        morphemes: [ { hanja: "傳", meaning: "전할 전" }, { hanja: "說", meaning: "말씀 설" } ]
    },
    {
        id: "tb_0704", word: "회전", level: 3, subject: "과학",
        context: "아버지가 [ ? ]의자에 앉아 계십니다.",
        morphemes: [ { hanja: "回", meaning: "돌 회" }, { hanja: "轉", meaning: "구를 전" } ]
    },
    {
        id: "tb_0705", word: "전등", level: 3, subject: "과학",
        context: "절전을 위하여 불필요한 [ ? ]은 끄는 것이 좋다.",
        morphemes: [ { hanja: "電", meaning: "전기 전" }, { hanja: "燈", meaning: "등불 등" } ]
    },
    {
        id: "tb_0706", word: "목동", level: 3, subject: "과학",
        context: "멀리 [ ? ]이 소를 몰고 가는 모습이 보인다.",
        morphemes: [ { hanja: "牧", meaning: "기를 목" }, { hanja: "童", meaning: "아이 동" } ]
    },
    {
        id: "tb_0707", word: "질량", level: 3, subject: "과학",
        context: "[ ? ]은 무게와 다른 뜻으로, 질량은 달이나 지구에서도 변하지 않고 항상 같다.",
        morphemes: [ { hanja: "質", meaning: "바탕,물질 질" }, { hanja: "量", meaning: "헤아릴 량" } ]
    },
    {
        id: "tb_0708", word: "밀도", level: 3, subject: "과학",
        context: "서울은 인구 [ ? ]가 높다.",
        morphemes: [ { hanja: "密", meaning: "빽빽할 밀" }, { hanja: "度", meaning: "정도 도" } ]
    },
    {
        id: "tb_0709", word: "주기", level: 3, subject: "과학",
        context: "일주일의 [ ? ]는 7일이다.",
        morphemes: [ { hanja: "週", meaning: "돌 주" }, { hanja: "期", meaning: "기간 기" } ]
    },
    {
        id: "tb_0710", word: "탐사", level: 3, subject: "과학",
        context: "텔레비전에서 동굴 [ ? ]에 대한 다큐멘터리가 방송되었다.",
        morphemes: [ { hanja: "探", meaning: "찾을 탐" }, { hanja: "査", meaning: "조사할 사" } ]
    },
    {
        id: "tb_0711", word: "최초", level: 3, subject: "과학",
        context: "거북선은 세계 [ ? ]의 철갑선이다.",
        morphemes: [ { hanja: "最", meaning: "가장 최" }, { hanja: "初", meaning: "처음 초" } ]
    },
    {
        id: "tb_0712", word: "착륙", level: 3, subject: "과학",
        context: "비행기가 활주로에 [ ? ]하였다.",
        morphemes: [ { hanja: "着", meaning: "붙을 착" }, { hanja: "陸", meaning: "뭍 륙" } ]
    },
    {
        id: "tb_0713", word: "갈등", level: 3, subject: "국어",
        context: "지구촌 곳곳에서 민족이나 인종간의 [ ? ]이 심각합니다.",
        morphemes: [ { hanja: "葛", meaning: "칡 갈" }, { hanja: "藤", meaning: "등나무 등" } ]
    },
    {
        id: "tb_0714", word: "파악", level: 3, subject: "국어",
        context: "친구는 눈치가 없어 분위기 [ ? ]을 못한다.",
        morphemes: [ { hanja: "把", meaning: "잡을 파" }, { hanja: "握", meaning: "쥘 악" } ]
    },
    {
        id: "tb_0715", word: "문학", level: 3, subject: "국어",
        context: "[ ? ] 작품에는 글쓴이의 생각이나 감정이 담겨있습니다.",
        morphemes: [ { hanja: "文", meaning: "글월 문" }, { hanja: "學", meaning: "배울 학" } ]
    },
    {
        id: "tb_0716", word: "처량", level: 3, subject: "국어",
        context: "갑자기 비가 내려 우산도 없이 집에 가는 [ ? ]한 신세가 되었습니다.",
        morphemes: [ { hanja: "凄", meaning: "쓸쓸할 처" }, { hanja: "凉", meaning: "쓸쓸할 량" } ]
    },
    {
        id: "tb_0717", word: "징병", level: 3, subject: "국어",
        context: "[ ? ]으로 끌려간 많은 젊은이들이 전쟁에서 희생되었습니다.",
        morphemes: [ { hanja: "徵", meaning: "부를 징" }, { hanja: "兵", meaning: "병사 병" } ]
    },
    {
        id: "tb_0718", word: "징용", level: 3, subject: "국어",
        context: "할아버지께서는 일제의 [ ? ]에 끌려가서 탄광에서 일하시다 돌아 가셨습니다.",
        morphemes: [ { hanja: "徵", meaning: "부를 징" }, { hanja: "用", meaning: "쓸 용" } ]
    },
    {
        id: "tb_0719", word: "이장", level: 3, subject: "국어",
        context: "[ ? ]님이 마을 주민들에게 안내 방송을 하셨습니다.",
        morphemes: [ { hanja: "里", meaning: "마을 리" }, { hanja: "長", meaning: "어른 장" } ]
    },
    {
        id: "tb_0720", word: "사족", level: 3, subject: "국어",
        context: "구두쇠 영감은 공짜라면 [ ? ]을 못 씁니다.",
        morphemes: [ { hanja: "四", meaning: "넉 사" }, { hanja: "足", meaning: "발 족" } ]
    },
    {
        id: "tb_0721", word: "순사", level: 3, subject: "국어",
        context: "칼을 찬 [ ? ]가 난데없이 대문을 밀고 들이닥쳤습니다.",
        morphemes: [ { hanja: "巡", meaning: "돌아다닐 순" }, { hanja: "査", meaning: "조사할 사" } ]
    },
    {
        id: "tb_0722", word: "제국", level: 3, subject: "국어",
        context: "로마 [ ? ]은 하루 아침에 이루어지지 않습니다.",
        morphemes: [ { hanja: "帝", meaning: "황제 제" }, { hanja: "國", meaning: "나라 국" } ]
    },
    {
        id: "tb_0723", word: "백골", level: 3, subject: "국어",
        context: "제 몸이 [ ? ]이 된들 어찌 내 나라와 내 겨레를 잊어버리겠습니까?",
        morphemes: [ { hanja: "白", meaning: "흰 백" }, { hanja: "骨", meaning: "뼈 골" } ]
    },
    {
        id: "tb_0724", word: "대상", level: 3, subject: "국어",
        context: "연예인은 많은 학생들에게 부러움의 [ ? ]입니다.",
        morphemes: [ { hanja: "對", meaning: "마주할 대" }, { hanja: "象", meaning: "상대 상" } ]
    },
    {
        id: "tb_0725", word: "동화", level: 3, subject: "국어",
        context: "어머니께서 아기에게 [ ? ]를 읽어주셨습니다.",
        morphemes: [ { hanja: "童", meaning: "아이 동" }, { hanja: "話", meaning: "이야기 화" } ]
    },
    {
        id: "tb_0726", word: "고사", level: 3, subject: "국어",
        context: "일등은 [ ? ]하고 중간도 못가는 성적이구나!",
        morphemes: [ { hanja: "姑", meaning: "잠시 고" }, { hanja: "捨", meaning: "버릴 사" } ]
    },
    {
        id: "tb_0727", word: "인사", level: 3, subject: "국어",
        context: "선생님께 [ ? ]를 드렸습니다.",
        morphemes: [ { hanja: "人", meaning: "사람 인" }, { hanja: "事", meaning: "섬길 사" } ]
    },
    {
        id: "tb_0728", word: "영특", level: 3, subject: "국어",
        context: "윤수는 [ ? ]하지만 몸이 너무 허약합니다.",
        morphemes: [ { hanja: "英", meaning: "뛰어날 영" }, { hanja: "特", meaning: "특별할 특" } ]
    },
    {
        id: "tb_0729", word: "기특", level: 3, subject: "국어",
        context: "“네가 부모님 결혼기념일을 다 기억하다니 참으로 [ ? ]하구나!”",
        morphemes: [ { hanja: "奇", meaning: "특별할 기" }, { hanja: "特", meaning: "특별할 특" } ]
    },
    {
        id: "tb_0730", word: "도장", level: 3, subject: "국어",
        context: "[ ? ]에 혼자 남아 열심히 연습하였습니다.",
        morphemes: [ { hanja: "道", meaning: "재주 도" }, { hanja: "場", meaning: "장소 장" } ]
    },
    {
        id: "tb_0731", word: "상가", level: 3, subject: "국어",
        context: "아빠와 함께 전자[ ? ]에 가서 게임기를 샀습니다.",
        morphemes: [ { hanja: "商", meaning: "장사 상" }, { hanja: "街", meaning: "거리 가" } ]
    },
    {
        id: "tb_0732", word: "유치", level: 3, subject: "국어",
        context: "6학년이 [ ? ]하게 소꿉놀이를 하니 지루하고 재미가 없었습니다.",
        morphemes: [ { hanja: "幼", meaning: "어릴 유" }, { hanja: "稚", meaning: "어릴 치" } ]
    },
    {
        id: "tb_0733", word: "기합", level: 3, subject: "국어",
        context: "[ ? ]을 넣어가며 열심히 태권도를 하였습니다.",
        morphemes: [ { hanja: "氣", meaning: "기운 기" }, { hanja: "合", meaning: "합할 합" } ]
    },
    {
        id: "tb_0734", word: "폐렴", level: 3, subject: "국어",
        context: "감기를 빨리 고치지 않으면 [ ? ]이 될 수 있습니다.",
        morphemes: [ { hanja: "肺", meaning: "허파 폐" }, { hanja: "炎", meaning: "곪을 염" } ]
    },
    {
        id: "tb_0735", word: "미소", level: 3, subject: "국어",
        context: "할머니의 인자하시고 환한 [ ? ]에 마음이 푸근해졌습니다.",
        morphemes: [ { hanja: "微", meaning: "작을 미" }, { hanja: "笑", meaning: "웃을 소" } ]
    },
    {
        id: "tb_0736", word: "견우", level: 3, subject: "국어",
        context: "[ ? ]는 7월 7일에 한 번 직녀를 만날 수 있습니다.",
        morphemes: [ { hanja: "牽", meaning: "끌 견" }, { hanja: "牛", meaning: "소 우" } ]
    },
    {
        id: "tb_0737", word: "직녀", level: 3, subject: "국어",
        context: "[ ? ]는 견우를 만날 수 없어 매우 슬펐습니다.",
        morphemes: [ { hanja: "織", meaning: "옷감 짤 직" }, { hanja: "女", meaning: "여자 여" } ]
    },
    {
        id: "tb_0738", word: "무궁", level: 3, subject: "국어",
        context: "사장님 회사의 [ ? ]한 발전을 기원합니다.",
        morphemes: [ { hanja: "無", meaning: "없을 무" }, { hanja: "窮", meaning: "끝 궁" } ]
    },
    {
        id: "tb_0739", word: "무진", level: 3, subject: "국어",
        context: "화가 난 친구를 달래느라 [ ? ] 애를 먹었습니다.",
        morphemes: [ { hanja: "無", meaning: "없을 무" }, { hanja: "盡", meaning: "다할 진" } ]
    },
    {
        id: "tb_0740", word: "정보", level: 3, subject: "국어",
        context: "친구들은 인터넷에서 궁금한 [ ? ]를 검색하였습니다.",
        morphemes: [ { hanja: "情", meaning: "사정 정" }, { hanja: "報", meaning: "알릴 보" } ]
    },
    {
        id: "tb_0741", word: "해석", level: 3, subject: "국어",
        context: "영어 문장을 읽고 [ ? ]하는 것은 그리 어렵지 않습니다.",
        morphemes: [ { hanja: "解", meaning: "풀 해" }, { hanja: "釋", meaning: "풀 석" } ]
    },
    {
        id: "tb_0742", word: "장애", level: 3, subject: "국어",
        context: "그들의 사랑 앞에는 신분도 [ ? ]가 되지 못하였습니다.",
        morphemes: [ { hanja: "障", meaning: "가로막을 장" }, { hanja: "碍", meaning: "방해할 애" } ]
    },
    {
        id: "tb_0743", word: "편견", level: 3, subject: "국어",
        context: "인종에 대한 [ ? ]을 버리고 모든 사람에게 친절하게 행동해야 합니다.",
        morphemes: [ { hanja: "偏", meaning: "치우칠 편" }, { hanja: "見", meaning: "생각 견" } ]
    },
    {
        id: "tb_0744", word: "광고", level: 3, subject: "국어",
        context: "야구 경기 도중의 [ ? ] 방송이 너무 길게 느껴졌습니다.",
        morphemes: [ { hanja: "廣", meaning: "넓을 광" }, { hanja: "告", meaning: "알릴 고" } ]
    },
    {
        id: "tb_0745", word: "관점", level: 3, subject: "국어",
        context: "콜럼버스의 신대륙 발견은 인디언들의 [ ? ]에서는 매우 우스꽝스러운 일입니다.",
        morphemes: [ { hanja: "觀", meaning: "볼 관" }, { hanja: "點", meaning: "태도 점" } ]
    },
    {
        id: "tb_0746", word: "의도", level: 3, subject: "국어",
        context: "나쁜 [ ? ]로 그런 것은 아니지만 정말 미안합니다.",
        morphemes: [ { hanja: "意", meaning: "뜻 의" }, { hanja: "圖", meaning: "계획할 도" } ]
    },
    {
        id: "tb_0747", word: "수명", level: 3, subject: "국어",
        context: "인간의 평균 [ ? ]이 얼마나 더 늘어날 수 있을까요?",
        morphemes: [ { hanja: "壽", meaning: "목숨 수" }, { hanja: "命", meaning: "목숨 명" } ]
    },
    {
        id: "tb_0748", word: "불과", level: 3, subject: "국어",
        context: "계백 장군이 거느리는 군사들은 500명에 [ ? ]하였습니다.",
        morphemes: [ { hanja: "不", meaning: "아니 불" }, { hanja: "過", meaning: "넘을 과" } ]
    },
    {
        id: "tb_0749", word: "잔해", level: 3, subject: "국어",
        context: "폭발한 비행기의 [ ? ]가 사고 당신의 상황을 말해주고 있는 듯합니다.",
        morphemes: [ { hanja: "殘", meaning: "남을 잔" }, { hanja: "骸", meaning: "뼈 해" } ]
    },
    {
        id: "tb_0750", word: "상공", level: 3, subject: "국어",
        context: "우리별 1호가 대한민국 [ ? ]을 날고 있습니다.",
        morphemes: [ { hanja: "上", meaning: "위 상" }, { hanja: "空", meaning: "공간 공" } ]
    },
    {
        id: "tb_0751", word: "희박", level: 3, subject: "국어",
        context: "병사들이 살아 돌아올 가능성은 [ ? ]합니다.",
        morphemes: [ { hanja: "稀", meaning: "드물 희" }, { hanja: "薄", meaning: "엷을 박" } ]
    },
    {
        id: "tb_0752", word: "항해", level: 3, subject: "국어",
        context: "드디어 타이타닉호가 [ ? ]를 시작했습니다.",
        morphemes: [ { hanja: "航", meaning: "배 항" }, { hanja: "海", meaning: "바다 해" } ]
    },
    {
        id: "tb_0753", word: "제도", level: 3, subject: "국어",
        context: "카리브 [ ? ]는 세계적인 휴양지입니다.",
        morphemes: [ { hanja: "諸", meaning: "모두 제" }, { hanja: "島", meaning: "섬 도" } ]
    },
    {
        id: "tb_0754", word: "파견", level: 3, subject: "국어",
        context: "고구려는 신라에 구원병을 [ ? ]하였습니다.",
        morphemes: [ { hanja: "派", meaning: "보낼 파" }, { hanja: "遣", meaning: "보낼 견" } ]
    },
    {
        id: "tb_0755", word: "주목", level: 3, subject: "국어",
        context: "최초 챔피언의 영예를 어느 누가 차지할지 [ ? ]거리입니다",
        morphemes: [ { hanja: "注", meaning: "쏟을 주" }, { hanja: "目", meaning: "눈 목" } ]
    },
    {
        id: "tb_0756", word: "약탈", level: 3, subject: "국어",
        context: "왜적들은 백성들의 곡식과 가축을 [ ? ]하였습니다.",
        morphemes: [ { hanja: "掠", meaning: "빼앗을 략" }, { hanja: "奪", meaning: "빼앗을 탈" } ]
    },
    {
        id: "tb_0757", word: "동원", level: 3, subject: "국어",
        context: "손만으로는 부족하여 발까지 [ ? ]하여 간절히 빌었습니다.",
        morphemes: [ { hanja: "動", meaning: "움직일 동" }, { hanja: "員", meaning: "사람 원" } ]
    },
    {
        id: "tb_0758", word: "수확", level: 3, subject: "국어",
        context: "빨갛고 탐스러운 사과를 [ ? ]하는 농부의 얼굴이 웃음으로 가득 합니다.",
        morphemes: [ { hanja: "收", meaning: "거둘 수" }, { hanja: "穫", meaning: "거둘 확" } ]
    },
    {
        id: "tb_0759", word: "개척", level: 3, subject: "국어",
        context: "기업들은 새로운 수출 시장을 [ ? ]하기 위해 열심히 노력하고 있습니다.",
        morphemes: [ { hanja: "開", meaning: "열 개" }, { hanja: "拓", meaning: "넓힐 척" } ]
    },
    {
        id: "tb_0760", word: "자립", level: 3, subject: "국어",
        context: "복지관에서는 단순히 음식을 주는 것이 아니라 [ ? ]할 수 있는 능력을 길러주기 위해 노력합니다.",
        morphemes: [ { hanja: "自", meaning: "스스로 자" }, { hanja: "立", meaning: "설 립" } ]
    },
    {
        id: "tb_0761", word: "수혈", level: 3, subject: "국어",
        context: "요즘 수술 환자에게 [ ? ]되는 혈액이 매우 부족하여 걱정이라고 합니다.",
        morphemes: [ { hanja: "輸", meaning: "나를 수" }, { hanja: "血", meaning: "피 혈" } ]
    },
    {
        id: "tb_0762", word: "이식", level: 3, subject: "국어",
        context: "드디어 세계 최초의 심장 [ ? ] 수술이 성공하는 순간입니다.",
        morphemes: [ { hanja: "移", meaning: "옮길 이" }, { hanja: "植", meaning: "심을 식" } ]
    },
    {
        id: "tb_0763", word: "치명", level: 3, subject: "국어",
        context: "장군의 칼에 적군은 [ ? ]적인 상처를 입고 쓰러졌습니다.",
        morphemes: [ { hanja: "致", meaning: "이를 치" }, { hanja: "命", meaning: "목숨 명" } ]
    },
    {
        id: "tb_0764", word: "모호", level: 3, subject: "국어",
        context: "여우의 말을 인정하기에는 애매[ ? ]하고 의심스러운 점이 많았습니다.",
        morphemes: [ { hanja: "模", meaning: "흐릿할 모" }, { hanja: "糊", meaning: "풀 호" } ]
    },
    {
        id: "tb_0765", word: "간주", level: 3, subject: "국어",
        context: "시험을 볼 때 의심스러운 행동은 모두 부정행위로 [ ? ]합니다.",
        morphemes: [ { hanja: "看", meaning: "볼 간" }, { hanja: "做", meaning: "생각할 주" } ]
    },
    {
        id: "tb_0766", word: "관념", level: 3, subject: "국어",
        context: "이 식당의 종업원들은 위생 [ ? ]이 철저합니다.",
        morphemes: [ { hanja: "觀", meaning: "볼 관" }, { hanja: "念", meaning: "생각할 념" } ]
    },
    {
        id: "tb_0767", word: "이민", level: 3, subject: "국어",
        context: "미국으로 [ ? ]을 가셨던 삼촌이 돌아오셨습니다.",
        morphemes: [ { hanja: "移", meaning: "옮길 이" }, { hanja: "民", meaning: "사람 민" } ]
    },
    {
        id: "tb_0768", word: "행성", level: 3, subject: "국어",
        context: "지구는 인간이 살기에 매우 적합한 [ ? ]입니다.",
        morphemes: [ { hanja: "行", meaning: "다닐 행" }, { hanja: "星", meaning: "별 성" } ]
    },
    {
        id: "tb_0769", word: "추구", level: 3, subject: "국어",
        context: "기업인들은 이익을 [ ? ]하기 위해 노력합니다.",
        morphemes: [ { hanja: "追", meaning: "따를 추" }, { hanja: "求", meaning: "구할 구" } ]
    },
    {
        id: "tb_0770", word: "증명", level: 3, subject: "국어",
        context: "아르키메데스는 왕관이 순금으로 만들어지지 않았다는 사실을 [ ? ] 하였습니다.",
        morphemes: [ { hanja: "證", meaning: "증거 증" }, { hanja: "明", meaning: "밝힐 명" } ]
    },
    {
        id: "tb_0771", word: "의용", level: 3, subject: "국어",
        context: "할아버지께서는 [ ? ] 경찰대에서 간첩 잡는 일을 하셨다고 합니다.",
        morphemes: [ { hanja: "義", meaning: "옳을 의" }, { hanja: "勇", meaning: "용기 용" } ]
    },
    {
        id: "tb_0772", word: "추장", level: 3, subject: "국어",
        context: "[ ? ]이 부족들을 이끌고 사냥을 나갔습니다.",
        morphemes: [ { hanja: "酋", meaning: "두목 추" }, { hanja: "長", meaning: "어른 장" } ]
    },
    {
        id: "tb_0773", word: "의연", level: 3, subject: "국어",
        context: "안중근 의사의 [ ? ]함에 일본 판사는 할 말을 잃었습니다.",
        morphemes: [ { hanja: "毅", meaning: "굳셀 의" }, { hanja: "然", meaning: "그러할, 모습 연" } ]
    },
    {
        id: "tb_0774", word: "수액", level: 3, subject: "국어",
        context: "대원은 나무에 흠을 내어 [ ? ]을 받아 마셨습니다.",
        morphemes: [ { hanja: "樹", meaning: "나무 수" }, { hanja: "液", meaning: "액체 액" } ]
    },
    {
        id: "tb_0775", word: "정령", level: 3, subject: "국어",
        context: "가을에 수확이 끝나면 곡식의 [ ? ]을 위로하며 신에게 감사하는 제사를 올립니다.",
        morphemes: [ { hanja: "精", meaning: "신령 정" }, { hanja: "靈", meaning: "신령 령" } ]
    },
    {
        id: "tb_0776", word: "질식", level: 3, subject: "국어",
        context: "방 안은 뜨거운 열기와 견딜 수 없는 악취로 가득 차서 [ ? ]할 것만 같았습니다.",
        morphemes: [ { hanja: "窒", meaning: "막힐 질" }, { hanja: "息", meaning: "숨쉴 식" } ]
    },
    {
        id: "tb_0777", word: "투쟁", level: 3, subject: "국어",
        context: "인간은 자연과의 [ ? ]에서 결코 승리할 수 없습니다.",
        morphemes: [ { hanja: "鬪", meaning: "싸울 투" }, { hanja: "爭", meaning: "다툴 쟁" } ]
    },
    {
        id: "tb_0778", word: "강조", level: 3, subject: "국어",
        context: "이 그림은 특히 인물의 눈을 [ ? ]하여 그렸습니다.",
        morphemes: [ { hanja: "强", meaning: "강할 강" }, { hanja: "調", meaning: "주장할 조" } ]
    },
    {
        id: "tb_0779", word: "절수", level: 3, subject: "국어",
        context: "우리 가족은 [ ? ]를 위해 노력 중입니다.",
        morphemes: [ { hanja: "節", meaning: "절약할 절" }, { hanja: "水", meaning: "물 수" } ]
    },
    {
        id: "tb_0780", word: "구호", level: 3, subject: "국어",
        context: "장병들이 외치는 힘찬 [ ? ]가 쩌렁쩌렁 울려 퍼졌습니다.",
        morphemes: [ { hanja: "口", meaning: "입 구" }, { hanja: "號", meaning: "부를 호" } ]
    },
    {
        id: "tb_0781", word: "산하", level: 3, subject: "국어",
        context: "유엔 [ ? ]의 유네스코에서는 각국의 문화재를 세계 문화 유산으로 지정하여 보호하고 있습니다.",
        morphemes: [ { hanja: "傘", meaning: "우산 산" }, { hanja: "下", meaning: "아래 하" } ]
    },
    {
        id: "tb_0782", word: "쇠퇴", level: 3, subject: "국어",
        context: "조선 중엽에는 명나라가 [ ? ]하고 청나라가 발전하기 시작하였습니다.",
        morphemes: [ { hanja: "衰", meaning: "쇠할 쇠" }, { hanja: "退", meaning: "무너질 퇴" } ]
    },
    {
        id: "tb_0783", word: "고유", level: 3, subject: "국어",
        context: "김치는 대표적인 우리 [ ? ]의 음식입니다.",
        morphemes: [ { hanja: "固", meaning: "본래 고" }, { hanja: "有", meaning: "있을 유" } ]
    },
    {
        id: "tb_0784", word: "열악", level: 3, subject: "국어",
        context: "아이들은 [ ? ]한 교육 환경 속에서도 열심히 공부하였습니다.",
        morphemes: [ { hanja: "劣", meaning: "못할 열" }, { hanja: "惡", meaning: "나쁠 악" } ]
    },
    {
        id: "tb_0785", word: "명확", level: 3, subject: "국어",
        context: "이 문제에 대해 [ ? ]한 입장을 밝혀 주십시오.",
        morphemes: [ { hanja: "明", meaning: "밝을 명" }, { hanja: "確", meaning: "확실할 확" } ]
    },
    {
        id: "tb_0786", word: "멸시", level: 3, subject: "국어",
        context: "노예 해방 이전에 흑인들은 백인들에게 많은 [ ? ]를 당하였습니다.",
        morphemes: [ { hanja: "蔑", meaning: "업신여길 멸" }, { hanja: "視", meaning: "볼 시" } ]
    },
    {
        id: "tb_0787", word: "동족", level: 3, subject: "국어",
        context: "6․25는 [ ? ]끼리 서로 다툰 가슴 아픈 전쟁입니다.",
        morphemes: [ { hanja: "同", meaning: "같을 동" }, { hanja: "族", meaning: "겨레 족" } ]
    },
    {
        id: "tb_0788", word: "보약", level: 3, subject: "국어",
        context: "밥을 잘 먹는 것이 가장 좋은 [ ? ]입니다.",
        morphemes: [ { hanja: "補", meaning: "보충할 보" }, { hanja: "藥", meaning: "약 약" } ]
    },
    {
        id: "tb_0789", word: "근처", level: 3, subject: "국어",
        context: "우리 집 [ ? ]에는 도서관이 있습니다.",
        morphemes: [ { hanja: "近", meaning: "가까울 근" }, { hanja: "處", meaning: "곳 처" } ]
    },
    {
        id: "tb_0790", word: "실례", level: 3, subject: "국어",
        context: "[ ? ]합니다만 지하철역이 어디쯤 있습니까?",
        morphemes: [ { hanja: "失", meaning: "잃을 실" }, { hanja: "禮", meaning: "예의 례" } ]
    },
    {
        id: "tb_0791", word: "태연", level: 3, subject: "국어",
        context: "그런 위험한 상황에서도 [ ? ]하게 행동하다니 정말 대단합니다.",
        morphemes: [ { hanja: "泰", meaning: "편안할 태" }, { hanja: "然", meaning: "그러할 연" } ]
    },
    {
        id: "tb_0792", word: "광경", level: 3, subject: "국어",
        context: "눈 앞에 펼쳐진 멋진 [ ? ]은 말로 다 표현할 수 없이 아름다웠습니다.",
        morphemes: [ { hanja: "光", meaning: "빛 광" }, { hanja: "景", meaning: "풍경 경" } ]
    },
    {
        id: "tb_0793", word: "훈장", level: 3, subject: "국어",
        context: "[ ? ]님께서는 엄한 얼굴로 돌쇠에게 타일렀습니다.",
        morphemes: [ { hanja: "訓", meaning: "가르칠 훈" }, { hanja: "長", meaning: "어른 장" } ]
    },
    {
        id: "tb_0794", word: "창립", level: 3, subject: "국어",
        context: "오늘은 아빠 회사의 [ ? ] 기념일입니다.",
        morphemes: [ { hanja: "創", meaning: "만들 창" }, { hanja: "立", meaning: "세울 립" } ]
    },
    {
        id: "tb_0795", word: "염치", level: 3, subject: "국어",
        context: "“너는 애가 [ ? ]도 없이 어른 앞에서 왜 그 모양이니?”",
        morphemes: [ { hanja: "廉", meaning: "살필 염" }, { hanja: "恥", meaning: "부끄러울 치" } ]
    },
    {
        id: "tb_0796", word: "불량", level: 3, subject: "국어",
        context: "선생님께서는 공부 시간에 태도가 [ ? ]한 학생들에게 주의를 주셨습니다.",
        morphemes: [ { hanja: "不", meaning: "아니 불" }, { hanja: "良", meaning: "좋을 량" } ]
    },
    {
        id: "tb_0797", word: "낙천", level: 3, subject: "국어",
        context: "성격이 [ ? ]적인 철수는 시험이 코 앞 인데도 쿨쿨 잠만 잘 잡니다.",
        morphemes: [ { hanja: "樂", meaning: "즐거울 락" }, { hanja: "天", meaning: "하늘 천" } ]
    },
    {
        id: "tb_0798", word: "천성", level: 3, subject: "국어",
        context: "작은 습관이 [ ? ]이 되어 사람의 일생을 결정지을 수도 있습니다.",
        morphemes: [ { hanja: "天", meaning: "하늘 천" }, { hanja: "性", meaning: "성품 성" } ]
    },
    {
        id: "tb_0799", word: "백곡", level: 3, subject: "국어",
        context: "이곳은 땅이 기름져 [ ? ]이 무럭무럭 잘 자랍니다.",
        morphemes: [ { hanja: "百", meaning: "일백 백" }, { hanja: "穀", meaning: "곡식 곡" } ]
    },
    {
        id: "tb_0800", word: "등재", level: 3, subject: "국어",
        context: "내 이름이 세계 인명사전에 [ ? ]될 수 있도록 열심히 공부할 것입니다.",
        morphemes: [ { hanja: "謄", meaning: "오를 등" }, { hanja: "載", meaning: "실을 재" } ]
    },
    {
        id: "tb_0801", word: "창제", level: 3, subject: "국어",
        context: "한글 [ ? ] 후에도 여전히 한자가 많이 쓰였습니다.",
        morphemes: [ { hanja: "創", meaning: "비롯할 창" }, { hanja: "製", meaning: "만들 제" } ]
    },
    {
        id: "tb_0802", word: "도입", level: 3, subject: "국어",
        context: "이 제품은 새로 [ ? ]된 신기술로 만들어 성능이 매우 좋습니다.",
        morphemes: [ { hanja: "導", meaning: "이끌 도" }, { hanja: "入", meaning: "들 입" } ]
    },
    {
        id: "tb_0803", word: "사례", level: 3, subject: "국어",
        context: "이런 [ ? ]는 없었기 때문에 어떻게 처리해야 할지 모르겠습니다.",
        morphemes: [ { hanja: "事", meaning: "일 사" }, { hanja: "例", meaning: "보기 례" } ]
    },
    {
        id: "tb_0804", word: "보급", level: 3, subject: "국어",
        context: "문익점은 목화씨를 들여와 나라에 널리 [ ? ]하였습니다.",
        morphemes: [ { hanja: "普", meaning: "넓을 보" }, { hanja: "及", meaning: "미칠 급" } ]
    },
    {
        id: "tb_0805", word: "양성", level: 3, subject: "국어",
        context: "퇴계 선생은 국가를 위한 인재 [ ? ]에 많은 노력을 기울이셨습니다.",
        morphemes: [ { hanja: "養", meaning: "기를 양" }, { hanja: "成", meaning: "이룰 성" } ]
    },
    {
        id: "tb_0806", word: "수여", level: 3, subject: "국어",
        context: "대통령께서 직접 상장을 [ ? ]하셨습니다.",
        morphemes: [ { hanja: "授", meaning: "줄 수" }, { hanja: "與", meaning: "줄 여" } ]
    },
    {
        id: "tb_0807", word: "숭고", level: 3, subject: "국어",
        context: "윤봉길 의사의 [ ? ]한 나라 사랑의 정신은 겨레의 가슴 속에 길이 남을 것입니다.",
        morphemes: [ { hanja: "崇", meaning: "높을 숭" }, { hanja: "高", meaning: "높을 고" } ]
    },
    {
        id: "tb_0808", word: "제정", level: 3, subject: "국어",
        context: "국회에서는 새로운 법률을 [ ? ]하기 위해서 많은 노력을 합니다.",
        morphemes: [ { hanja: "制", meaning: "만들 제" }, { hanja: "定", meaning: "정할 정" } ]
    },
    {
        id: "tb_0809", word: "실정", level: 3, subject: "국어",
        context: "학생들이 낱말의 뜻을 제대로 알지 못하여 공부에 대한 흥미를 잃어버리는 [ ? ]입니다.",
        morphemes: [ { hanja: "實", meaning: "실제 실" }, { hanja: "情", meaning: "사정 정" } ]
    },
    {
        id: "tb_0810", word: "제자", level: 3, subject: "국어",
        context: "훈민정음의 과학적인 [ ? ]원리는 세계인의 감탄을 불러일으킵니다.",
        morphemes: [ { hanja: "制", meaning: "만들 제" }, { hanja: "字", meaning: "글자 자" } ]
    },
    {
        id: "tb_0811", word: "반포", level: 3, subject: "국어",
        context: "훈민정음 [ ? ] 당시에는 자음과 모음이 모두 합쳐 28자였습니다.",
        morphemes: [ { hanja: "頒", meaning: "나눌 반" }, { hanja: "布", meaning: "퍼뜨릴 포" } ]
    },
    {
        id: "tb_0812", word: "극찬", level: 3, subject: "국어",
        context: "전문가들도 그를 최고의 선수라고 [ ? ]하였습니다.",
        morphemes: [ { hanja: "極", meaning: "최고 극" }, { hanja: "讚", meaning: "칭찬할 찬" } ]
    },
    {
        id: "tb_0813", word: "음절", level: 3, subject: "국어",
        context: "다음 질문에 맞는 답을 3[ ? ]로 쓰시오.",
        morphemes: [ { hanja: "音", meaning: "소리 음" }, { hanja: "節", meaning: "마디 절" } ]
    },
    {
        id: "tb_0814", word: "국경", level: 3, subject: "국어",
        context: "두 사람의 [ ? ]을 초월한 사랑은 모든 사람들에게 감동을 주었습니다.",
        morphemes: [ { hanja: "國", meaning: "나라 국" }, { hanja: "境", meaning: "경계 경" } ]
    },
    {
        id: "tb_0815", word: "주장", level: 3, subject: "국어",
        context: "자신의 [ ? ]만을 고집하지 맙시다.",
        morphemes: [ { hanja: "主", meaning: "주될 주" }, { hanja: "張", meaning: "내세울 장" } ]
    },
    {
        id: "tb_0816", word: "타당", level: 3, subject: "국어",
        context: "[ ? ]한 이유를 들어가며 자신의 주장을 발표해봅시다.",
        morphemes: [ { hanja: "妥", meaning: "온당할 타" }, { hanja: "當", meaning: "마땅할 당" } ]
    },
    {
        id: "tb_0817", word: "특정", level: 3, subject: "국어",
        context: "허락 없이 [ ? ] 인물의 개인정보를 공개하는 것은 금지되어 있습니다.",
        morphemes: [ { hanja: "特", meaning: "특별할 특" }, { hanja: "定", meaning: "정할 정" } ]
    },
    {
        id: "tb_0818", word: "상술", level: 3, subject: "국어",
        context: "조선시대 개성의 상인들은 [ ? ]이 매우 뛰어났습니다.",
        morphemes: [ { hanja: "商", meaning: "장사 상" }, { hanja: "術", meaning: "재주 술" } ]
    },
    {
        id: "tb_0819", word: "극복", level: 3, subject: "국어",
        context: "우리나라는 분단의 고통을 [ ? ]하고 통일된 나라를 이루기 위해 노력하고 있습니다.",
        morphemes: [ { hanja: "克", meaning: "이길 극" }, { hanja: "服", meaning: "굴복 복" } ]
    },
    {
        id: "tb_0820", word: "칭송", level: 3, subject: "국어",
        context: "이순신 장군은 나라를 구한 영웅으로 [ ? ]되고 있습니다.",
        morphemes: [ { hanja: "稱", meaning: "칭찬할 칭" }, { hanja: "頌", meaning: "기릴 송" } ]
    },
    {
        id: "tb_0821", word: "자자", level: 3, subject: "국어",
        context: "철수와 영희가 서로 사귄다는 소문이 [ ? ]합니다.",
        morphemes: [ { hanja: "藉", meaning: "깔개 자" }, { hanja: "藉", meaning: "깔개 자" } ]
    },
    {
        id: "tb_0822", word: "대각", level: 3, subject: "국어",
        context: "[ ? ] 국사 의천은 중국에 있는 절에서 열심히 공부하였습니다.",
        morphemes: [ { hanja: "大", meaning: "큰 대" }, { hanja: "覺", meaning: "깨달을 각" } ]
    },
    {
        id: "tb_0823", word: "국사", level: 3, subject: "국어",
        context: "유명한 승려에게는 [ ? ]라는 칭호를 주고 나랏일을 묻기도 하였습니다.",
        morphemes: [ { hanja: "國", meaning: "나라 국" }, { hanja: "師", meaning: "스승 사" } ]
    },
    {
        id: "tb_0824", word: "선량", level: 3, subject: "국어",
        context: "뭉툭코, 두꺼운 입술, 작은 눈의 그 얼굴은 못생겼지만 [ ? ]하고 정다웠습니다.",
        morphemes: [ { hanja: "善", meaning: "착할 선" }, { hanja: "良", meaning: "어질 량" } ]
    },
    {
        id: "tb_0825", word: "섭취", level: 3, subject: "국어",
        context: "음식을 골고루 [ ? ]하는 것이 건강에 좋습니다.",
        morphemes: [ { hanja: "攝", meaning: "빨아들일 섭" }, { hanja: "取", meaning: "가질 취" } ]
    },
    {
        id: "tb_0826", word: "항암", level: 3, subject: "국어",
        context: "할아버지께서 지금 [ ? ] 치료를 받고 계십니다.",
        morphemes: [ { hanja: "抗", meaning: "막을 항" }, { hanja: "癌", meaning: "암 암" } ]
    },
    {
        id: "tb_0827", word: "해초", level: 3, subject: "국어",
        context: "많은 물고기들이 [ ? ] 사이를 자유롭게 헤엄쳐 다녔습니다.",
        morphemes: [ { hanja: "海", meaning: "바다 해" }, { hanja: "草", meaning: "풀 초" } ]
    },
    {
        id: "tb_0828", word: "염장", level: 3, subject: "국어",
        context: "우리나라의 대표적인 [ ? ] 식품에는 무엇이 있나요?",
        morphemes: [ { hanja: "鹽", meaning: "소금 염" }, { hanja: "藏", meaning: "저장할 장" } ]
    },
    {
        id: "tb_0829", word: "과업", level: 3, subject: "국어",
        context: "남북통일은 우리들의 역사적 [ ? ]입니다.",
        morphemes: [ { hanja: "課", meaning: "정해질 과" }, { hanja: "業", meaning: "일 업" } ]
    },
    {
        id: "tb_0830", word: "복원", level: 3, subject: "국어",
        context: "생태계 [ ? ] 프로젝트를 진행해 봅시다.",
        morphemes: [ { hanja: "復", meaning: "회복할 복" }, { hanja: "元", meaning: "원래 원" } ]
    },
    {
        id: "tb_0831", word: "초래", level: 3, subject: "국어",
        context: "작은 부주의가 엄청난 결과를 [ ? ]할 수도 있습니다.",
        morphemes: [ { hanja: "招", meaning: "부를 초" }, { hanja: "來", meaning: "올 래" } ]
    },
    {
        id: "tb_0832", word: "고려", level: 3, subject: "국어",
        context: "주변 상황을 [ ? ]하여 조심스럽게 행동하는 습관을 기릅시다.",
        morphemes: [ { hanja: "考", meaning: "생각할 고" }, { hanja: "慮", meaning: "생각할 려" } ]
    },
    {
        id: "tb_0833", word: "유례", level: 3, subject: "국어",
        context: "그 영화에는 사상 [ ? ]없는 제작비가 쓰였습니다.",
        morphemes: [ { hanja: "類", meaning: "비슷할 류" }, { hanja: "例", meaning: "보기 례" } ]
    },
    {
        id: "tb_0834", word: "찬란", level: 3, subject: "국어",
        context: "우리의 [ ? ]한 역사를 더욱 발전시켜야겠습니다.",
        morphemes: [ { hanja: "燦", meaning: "빛날 찬" }, { hanja: "爛", meaning: "빛날 란" } ]
    },
    {
        id: "tb_0835", word: "유용", level: 3, subject: "국어",
        context: "빈 병을 모으면 [ ? ]한 자원이 됩니다.",
        morphemes: [ { hanja: "有", meaning: "있을 유" }, { hanja: "用", meaning: "쓸 용" } ]
    },
    {
        id: "tb_0836", word: "문학", level: 3, subject: "국어",
        context: "[ ? ] 작품에는 글쓴이의 생각이나 감정이 담겨있습니다.",
        morphemes: [ { hanja: "文", meaning: "글월 문" }, { hanja: "學", meaning: "배울 학" } ]
    },
    {
        id: "tb_0837", word: "소설", level: 3, subject: "국어",
        context: "언니는 [ ? ] 작품을 읽다가 눈물을 글썽이기도 하였습니다.",
        morphemes: [ { hanja: "小", meaning: "작을 소" }, { hanja: "說", meaning: "이야기 설" } ]
    },
    {
        id: "tb_0838", word: "희곡", level: 3, subject: "국어",
        context: "[ ? ]은 연극으로 공연되기 위해서 쓰여진 대본입니다.",
        morphemes: [ { hanja: "戱", meaning: "연극 희" }, { hanja: "曲", meaning: "대본 곡" } ]
    },
    {
        id: "tb_0839", word: "동화", level: 3, subject: "국어",
        context: "어머니께서 아기에게 [ ? ]를 읽어주셨습니다.",
        morphemes: [ { hanja: "童", meaning: "아이 동" }, { hanja: "話", meaning: "이야기 화" } ]
    },
    {
        id: "tb_0840", word: "화해", level: 3, subject: "국어",
        context: "친구와 [ ? ]를 하고나니 마음이 편안해졌습니다.",
        morphemes: [ { hanja: "和", meaning: "화합할 화" }, { hanja: "解", meaning: "풀 해" } ]
    },
    {
        id: "tb_0841", word: "행인", level: 3, subject: "국어",
        context: "차가워진 날씨에 [ ? ]들은 집으로 발걸음을 재촉하였습니다.",
        morphemes: [ { hanja: "行", meaning: "다닐 행" }, { hanja: "人", meaning: "사람 인" } ]
    },
    {
        id: "tb_0842", word: "기부", level: 3, subject: "국어",
        context: "구두쇠가 장학금 [ ? ]를 약속하다니 믿을 수 없는 일입니다.",
        morphemes: [ { hanja: "寄", meaning: "줄 기" }, { hanja: "附", meaning: "더할 부" } ]
    },
    {
        id: "tb_0843", word: "만찬", level: 3, subject: "국어",
        context: "젊은이들은 마을의 어른들을 모셔 놓고 [ ? ]을 베풀었습니다.",
        morphemes: [ { hanja: "晩", meaning: "저물 만" }, { hanja: "餐", meaning: "먹을 찬" } ]
    },
    {
        id: "tb_0844", word: "비명", level: 3, subject: "국어",
        context: "전쟁터는 총소리와 부상자들의 [ ? ]으로 가득하였다.",
        morphemes: [ { hanja: "悲", meaning: "슬플 비" }, { hanja: "鳴", meaning: "울 명" } ]
    },
    {
        id: "tb_0845", word: "빈민", level: 3, subject: "국어",
        context: "슈바이쳐는 아프리카 [ ? ]들을 위해 일생을 바쳤습니다.",
        morphemes: [ { hanja: "貧", meaning: "가난할 빈" }, { hanja: "民", meaning: "백성 민" } ]
    },
    {
        id: "tb_0846", word: "지문", level: 3, subject: "국어",
        context: "[ ? ]에 유의하며 크리스마스 캐럴을 읽어 봅시다.",
        morphemes: [ { hanja: "地", meaning: "바탕 지" }, { hanja: "文", meaning: "글월 문" } ]
    },
    {
        id: "tb_0847", word: "친근", level: 3, subject: "국어",
        context: "처음엔 어색했던 두 사람은 어느새 [ ? ]한 사이가 되었습니다.",
        morphemes: [ { hanja: "親", meaning: "친할 친" }, { hanja: "近", meaning: "가까울 근" } ]
    },
    {
        id: "tb_0848", word: "독재", level: 3, subject: "사회",
        context: "국민들은 [ ? ] 정치에 반대하여 거리로 뛰쳐나왔습니다.",
        morphemes: [ { hanja: "獨", meaning: "홀로 독" }, { hanja: "裁", meaning: "처리할 재" } ]
    },
    {
        id: "tb_0849", word: "반영", level: 3, subject: "사회",
        context: "체육 시험은 실기 평가의 [ ? ] 비율이 높습니다.",
        morphemes: [ { hanja: "反", meaning: "되돌릴 반" }, { hanja: "映", meaning: "비출 영" } ]
    },
    {
        id: "tb_0850", word: "부당", level: 3, subject: "사회",
        context: "흑인들은 백인들의 [ ? ]한 대우에 많은 고통을 받았습니다.",
        morphemes: [ { hanja: "不", meaning: "아니 부" }, { hanja: "當", meaning: "마땅 당" } ]
    },
    {
        id: "tb_0851", word: "억압", level: 3, subject: "사회",
        context: "백성들을 [ ? ]하던 사또가 큰 벌을 받았습니다.",
        morphemes: [ { hanja: "抑", meaning: "누를 억" }, { hanja: "壓", meaning: "누를 압" } ]
    },
    {
        id: "tb_0852", word: "성별", level: 3, subject: "사회",
        context: "공부의 기회는 [ ? ]에 관계없이 평등하게 주어져야 합니다.",
        morphemes: [ { hanja: "性", meaning: "성 성" }, { hanja: "別", meaning: "구별할 별" } ]
    },
    {
        id: "tb_0853", word: "존엄", level: 3, subject: "사회",
        context: "민주주의는 국민 개개인의 자유와 [ ? ]을 보장합니다.",
        morphemes: [ { hanja: "尊", meaning: "높을 존" }, { hanja: "嚴", meaning: "위엄 엄" } ]
    },
    {
        id: "tb_0854", word: "정권", level: 3, subject: "사회",
        context: "고려 말에는 문신들의 차별을 견디지 못한 무신들이 난을 일으켜 [ ? ]을 잡았습니다.",
        morphemes: [ { hanja: "政", meaning: "정치 정" }, { hanja: "權", meaning: "권세 권" } ]
    },
    {
        id: "tb_0855", word: "정변", level: 3, subject: "사회",
        context: "잦은 [ ? ]과 가뭄으로 백성들의 삶은 점점 어려워졌습니다.",
        morphemes: [ { hanja: "政", meaning: "정치 정" }, { hanja: "變", meaning: "변할 변" } ]
    },
    {
        id: "tb_0856", word: "진전", level: 3, subject: "사회",
        context: "오랜 회의 끝에 협상에 많은 [ ? ]이 있었습니다.",
        morphemes: [ { hanja: "進", meaning: "나아갈 진" }, { hanja: "展", meaning: "펼 전" } ]
    },
    {
        id: "tb_0857", word: "독점", level: 3, subject: "사회",
        context: "일본인들이 모든 이익을 [ ? ]하여 우리 백성들의 불만이 가득 하였습니다.",
        morphemes: [ { hanja: "獨", meaning: "홀로 독" }, { hanja: "占", meaning: "차지할 점" } ]
    },
    {
        id: "tb_0858", word: "시위", level: 3, subject: "사회",
        context: "많은 시민들이 촛불 [ ? ]에 참여하였습니다.",
        morphemes: [ { hanja: "示", meaning: "보일 시" }, { hanja: "威", meaning: "위엄 위" } ]
    },
    {
        id: "tb_0859", word: "한정", level: 3, subject: "사회",
        context: "참가 자격을 초등학교 6학년 학생으로 [ ? ]합니다.",
        morphemes: [ { hanja: "限", meaning: "제한할 한" }, { hanja: "定", meaning: "정할 정" } ]
    },
    {
        id: "tb_0860", word: "방안", level: 3, subject: "사회",
        context: "우리 민족의 바람직한 통일 [ ? ]을 알아봅시다.",
        morphemes: [ { hanja: "方", meaning: "방법 방" }, { hanja: "案", meaning: "생각 안" } ]
    },
    {
        id: "tb_0861", word: "제시", level: 3, subject: "사회",
        context: "근본적인 해결 방법을 [ ? ]해야 합니다.",
        morphemes: [ { hanja: "提", meaning: "들 제" }, { hanja: "示", meaning: "보일 시" } ]
    },
    {
        id: "tb_0862", word: "지위", level: 3, subject: "사회",
        context: "높은 [ ? ]에 있을수록 조심스럽게 행동해야 합니다.",
        morphemes: [ { hanja: "地", meaning: "땅 지" }, { hanja: "位", meaning: "자리 위" } ]
    },
    {
        id: "tb_0863", word: "남용", level: 3, subject: "사회",
        context: "청소년의 약물 [ ? ]이 심각한 문제입니다.",
        morphemes: [ { hanja: "濫", meaning: "넘칠 람" }, { hanja: "用", meaning: "쓸 용" } ]
    },
    {
        id: "tb_0864", word: "청렴", level: 3, subject: "사회",
        context: "황희 정승은 [ ? ]으로 이름난 분입니다.",
        morphemes: [ { hanja: "淸", meaning: "맑을 청" }, { hanja: "廉", meaning: "검소할 렴" } ]
    },
    {
        id: "tb_0865", word: "정책", level: 3, subject: "사회",
        context: "새로 당선된 국회위원들에게 국민을 위한 [ ? ]을 실현해줄 것을 요구했습니다.",
        morphemes: [ { hanja: "政", meaning: "정치 정" }, { hanja: "策", meaning: "대책 책" } ]
    },
    {
        id: "tb_0866", word: "통솔", level: 3, subject: "사회",
        context: "그 장군은 병사들을 잘 [ ? ]하여 전쟁을 승리로 이끌었습니다.",
        morphemes: [ { hanja: "統", meaning: "거느릴 통" }, { hanja: "率", meaning: "거느릴 솔" } ]
    },
    {
        id: "tb_0867", word: "체결", level: 3, subject: "사회",
        context: "이번 회담에서 우리에게 유리한 조건으로 계약을 [ ? ]했습니다.",
        morphemes: [ { hanja: "締", meaning: "맺을 체" }, { hanja: "結", meaning: "맺을 결" } ]
    },
    {
        id: "tb_0868", word: "구제", level: 3, subject: "사회",
        context: "나라에서는 가난한 농민을 [ ? ]하기 위해 노력하였습니다.",
        morphemes: [ { hanja: "救", meaning: "구원할 구" }, { hanja: "濟", meaning: "건널 제" } ]
    },
    {
        id: "tb_0869", word: "명백", level: 3, subject: "사회",
        context: "재판을 통해서 옳고 그름을 [ ? ]하게 밝히도록 합시다.",
        morphemes: [ { hanja: "明", meaning: "밝을 명" }, { hanja: "白", meaning: "흰 백" } ]
    },
    {
        id: "tb_0870", word: "삼권", level: 3, subject: "사회",
        context: "[ ? ]이 서로 견제함으로써 균형을 이룰 수 있습니다.",
        morphemes: [ { hanja: "三", meaning: "석 삼" }, { hanja: "權", meaning: "권세 권" } ]
    },
    {
        id: "tb_0871", word: "신뢰", level: 3, subject: "사회",
        context: "그의 말과 행동은 다른 사람들에게 [ ? ]를 줍니다.",
        morphemes: [ { hanja: "信", meaning: "믿을 신" }, { hanja: "賴", meaning: "의지할 뢰" } ]
    },
    {
        id: "tb_0872", word: "분쟁", level: 3, subject: "사회",
        context: "아파트 층간 소음은 이웃 간의 [ ? ]의 원인이 됩니다.",
        morphemes: [ { hanja: "忿", meaning: "성낼 분" }, { hanja: "爭", meaning: "다툴 쟁" } ]
    },
    {
        id: "tb_0873", word: "환불", level: 3, subject: "사회",
        context: "주인에게 물건 값을 [ ? ]해 줄 것을 요구했습니다.",
        morphemes: [ { hanja: "還", meaning: "되돌릴 환" }, { hanja: "拂", meaning: "지불할 불" } ]
    },
    {
        id: "tb_0874", word: "거주", level: 3, subject: "사회",
        context: "우리나라에 [ ? ]하는 외국인들의 수가 증가하고 있습니다.",
        morphemes: [ { hanja: "居", meaning: "살 거" }, { hanja: "住", meaning: "살 주" } ]
    },
    {
        id: "tb_0875", word: "보장", level: 3, subject: "사회",
        context: "그는 비밀을 [ ? ]해 달라고 요구했습니다.",
        morphemes: [ { hanja: "保", meaning: "지킬 보" }, { hanja: "障", meaning: "막을 장" } ]
    },
    {
        id: "tb_0876", word: "막대", level: 3, subject: "사회",
        context: "특히 농민들은 이번 태풍 때문에 [ ? ]한 손실을 입었습니다.",
        morphemes: [ { hanja: "莫", meaning: "없을 막" }, { hanja: "大", meaning: "큰 대" } ]
    },
    {
        id: "tb_0877", word: "훼손", level: 3, subject: "사회",
        context: "사람들이 숲속의 나무를 함부로 베어내어 자연이 [ ? ] 되고 있습니다.",
        morphemes: [ { hanja: "毁", meaning: "허물 훼" }, { hanja: "損", meaning: "상할 손" } ]
    },
    {
        id: "tb_0878", word: "보편", level: 3, subject: "사회",
        context: "그 소설에는 [ ? ]적이고 평범한 사람들이 등장합니다.",
        morphemes: [ { hanja: "普", meaning: "넓을 보" }, { hanja: "遍", meaning: "두루 편" } ]
    },
    {
        id: "tb_0879", word: "채택", level: 3, subject: "사회",
        context: "이번 회의에서 그의 의견이 [ ? ]되었습니다.",
        morphemes: [ { hanja: "採", meaning: "가릴 채" }, { hanja: "擇", meaning: "뽑을 택" } ]
    },
    {
        id: "tb_0880", word: "면세", level: 3, subject: "사회",
        context: "저소득층을 위해 다양한 [ ? ] 혜택을 마련하였습니다.",
        morphemes: [ { hanja: "免", meaning: "면할 면" }, { hanja: "稅", meaning: "세금 세" } ]
    },
    {
        id: "tb_0881", word: "모욕", level: 3, subject: "사회",
        context: "인터넷 상에서도 다른 사람들을 비방하거나 [ ? ]하는 말을 하지 말아야 합니다.",
        morphemes: [ { hanja: "侮", meaning: "업신여길 모" }, { hanja: "辱", meaning: "욕될 욕" } ]
    },
    {
        id: "tb_0882", word: "인식", level: 3, subject: "사회",
        context: "교육을 통해서 우리 역사를 올바르게 [ ? ]해야 합니다.",
        morphemes: [ { hanja: "認", meaning: "알 인" }, { hanja: "識", meaning: "알 식" } ]
    },
    {
        id: "tb_0883", word: "탐색", level: 3, subject: "사회",
        context: "올바른 직업 선택을 위해서 청소년기에 자신의 진로를 충분히 [ ? ] 하도록 하자.",
        morphemes: [ { hanja: "探", meaning: "찾을 탐" }, { hanja: "索", meaning: "찾을 색" } ]
    },
    {
        id: "tb_0884", word: "빈자", level: 3, subject: "사회",
        context: "사람은 부자이든지 [ ? ]이든지에 관계없이 모두 똑같이 존중받아야 합니다.",
        morphemes: [ { hanja: "貧", meaning: "가난할 빈" }, { hanja: "者", meaning: "사람 자" } ]
    },
    {
        id: "tb_0885", word: "성녀", level: 3, subject: "사회",
        context: "잔다르크는 [ ? ]인가? 악녀인가?",
        morphemes: [ { hanja: "聖", meaning: "성스러울 성" }, { hanja: "女", meaning: "여자 녀" } ]
    },
    {
        id: "tb_0886", word: "추앙", level: 3, subject: "사회",
        context: "우리는 나라를 구한 이순신 장군을 영웅으로 [ ? ]합니다.",
        morphemes: [ { hanja: "推", meaning: "받들 추" }, { hanja: "仰", meaning: "우러를 앙" } ]
    },
    {
        id: "tb_0887", word: "권익", level: 3, subject: "사회",
        context: "국회에서는 노동자의 [ ? ]을 보호하는 법을 통과시켰습니다.",
        morphemes: [ { hanja: "權", meaning: "권리 권" }, { hanja: "益", meaning: "이익 익" } ]
    },
    {
        id: "tb_0888", word: "의식", level: 3, subject: "사회",
        context: "보다 발전된 시민 [ ? ]을 발휘하여 밝은 사회를 건설하도록 합시다.",
        morphemes: [ { hanja: "意", meaning: "뜻 의" }, { hanja: "識", meaning: "알 식" } ]
    },
    {
        id: "tb_0889", word: "기아", level: 3, subject: "사회",
        context: "특공대원들은 추위와 [ ? ]의 고통을 이겨내며 계속 전진하였습니다.",
        morphemes: [ { hanja: "飢", meaning: "굶주릴 기" }, { hanja: "餓", meaning: "굶주릴 아" } ]
    },
    {
        id: "tb_0890", word: "건의", level: 3, subject: "사회",
        context: "율곡 이이는 십만의 병사를 미리 길러두도록 임금님께 [ ? ]하였습니다.",
        morphemes: [ { hanja: "建", meaning: "세울 건" }, { hanja: "議", meaning: "의논할 의" } ]
    },
    {
        id: "tb_0891", word: "사고", level: 3, subject: "사회",
        context: "사람마다 서로 다른 [ ? ]방식을 가지고 있습니다.",
        morphemes: [ { hanja: "思", meaning: "생각 사" }, { hanja: "考", meaning: "생각할 고" } ]
    },
    {
        id: "tb_0892", word: "재정", level: 3, subject: "사회",
        context: "나라의 [ ? ]이 넉넉지 못하면 좋은 정치를 하기 어렵습니다.",
        morphemes: [ { hanja: "財", meaning: "재물 재" }, { hanja: "政", meaning: "정치 정" } ]
    },
    {
        id: "tb_0893", word: "주식", level: 3, subject: "사회",
        context: "피자를 [ ? ]으로 한다면 정말 좋을까?",
        morphemes: [ { hanja: "主", meaning: "주인 주" }, { hanja: "食", meaning: "밥 식" } ]
    },
    {
        id: "tb_0894", word: "탐구", level: 3, subject: "사회",
        context: "친구와 함께 과학 [ ? ] 보고서를 작성하였습니다.",
        morphemes: [ { hanja: "探", meaning: "찾을 탐" }, { hanja: "究", meaning: "연구할 구" } ]
    },
    {
        id: "tb_0895", word: "다양", level: 3, subject: "사회",
        context: "지구상에는 [ ? ]한 민족이 서로 도우며 살아가고 있습니다.",
        morphemes: [ { hanja: "多", meaning: "많을 다" }, { hanja: "樣", meaning: "모양 양" } ]
    },
    {
        id: "tb_0896", word: "대륙", level: 3, subject: "사회",
        context: "각 [ ? ]의 특징을 살펴보도록 합시다.",
        morphemes: [ { hanja: "大", meaning: "큰 대" }, { hanja: "陸", meaning: "육지 육" } ]
    },
    {
        id: "tb_0897", word: "인문", level: 3, subject: "사회",
        context: "여행 기록에는 그 지역의 자연 및 [ ? ] 환경에 대한 정보가 많이 담겨있습니다.",
        morphemes: [ { hanja: "人", meaning: "사람 인" }, { hanja: "文", meaning: "문화 문" } ]
    },
    {
        id: "tb_0898", word: "경선", level: 3, subject: "사회",
        context: "영국의 그리니치 천문대를 [ ? ]의 출발점으로 삼습니다.",
        morphemes: [ { hanja: "經", meaning: "세로 경" }, { hanja: "線", meaning: "줄 선" } ]
    },
    {
        id: "tb_0899", word: "해발", level: 3, subject: "사회",
        context: "히말라야에는 [ ? ] 8000미터 이상의 높은 산들이 많습니다.",
        morphemes: [ { hanja: "海", meaning: "바다 해" }, { hanja: "拔", meaning: "뽑을 발" } ]
    },
    {
        id: "tb_0900", word: "적도", level: 3, subject: "사회",
        context: "[ ? ] 지역의 밀림지대에는 다양한 생물들이 살고 있습니다.",
        morphemes: [ { hanja: "赤", meaning: "붉을 적" }, { hanja: "道", meaning: "길 도" } ]
    },
    {
        id: "tb_0901", word: "한대", level: 3, subject: "사회",
        context: "[ ? ] 기후 지역에서는 일 년 내내 얼어붙은 땅들이 있을 정도로 춥습니다.",
        morphemes: [ { hanja: "寒", meaning: "차가울 한" }, { hanja: "帶", meaning: "띠 대" } ]
    },
    {
        id: "tb_0902", word: "양식", level: 3, subject: "사회",
        context: "집 모양을 통하여 각 지역을 생활 [ ? ]을 알아봅시다.",
        morphemes: [ { hanja: "樣", meaning: "모양 양" }, { hanja: "式", meaning: "형식 식" } ]
    },
    {
        id: "tb_0903", word: "교류", level: 3, subject: "사회",
        context: "남북한의 [ ? ]를 더욱 확대하여 통일을 앞당기도록 노력합시다.",
        morphemes: [ { hanja: "交", meaning: "서로 교" }, { hanja: "流", meaning: "흐를 류" } ]
    },
    {
        id: "tb_0904", word: "고산", level: 3, subject: "사회",
        context: "[ ? ] 지역은 서늘하여 사람들이 살기에 좋습니다.",
        morphemes: [ { hanja: "高", meaning: "높을 고" }, { hanja: "山", meaning: "산 산" } ]
    },
    {
        id: "tb_0905", word: "정상", level: 3, subject: "사회",
        context: "서울에 세계 각국의 [ ? ]들이 모여 회의를 하였습니다.",
        morphemes: [ { hanja: "頂", meaning: "정수리 정" }, { hanja: "上", meaning: "위 상" } ]
    },
    {
        id: "tb_0906", word: "온화", level: 3, subject: "사회",
        context: "할머니는 [ ? ]한 미소로 저희들을 맞이해주셨습니다.",
        morphemes: [ { hanja: "溫", meaning: "따뜻할 온" }, { hanja: "和", meaning: "부드러울 화" } ]
    },
    {
        id: "tb_0907", word: "밀도", level: 3, subject: "사회",
        context: "남극과 북극은 인구 [ ? ]가 매우 낮습니다.",
        morphemes: [ { hanja: "密", meaning: "빽빽할 밀" }, { hanja: "度", meaning: "정도 도" } ]
    },
    {
        id: "tb_0908", word: "초원", level: 3, subject: "사회",
        context: "[ ? ]을 뛰어다니는 동물들의 모습이 참 평화롭습니다.",
        morphemes: [ { hanja: "草", meaning: "풀 초" }, { hanja: "原", meaning: "들판 원" } ]
    },
    {
        id: "tb_0909", word: "원활", level: 3, subject: "사회",
        context: "적당한 운동은 혈액 순환을 [ ? ]하게 도와줍니다.",
        morphemes: [ { hanja: "圓", meaning: "둥글 원" }, { hanja: "滑", meaning: "미끄러울 활" } ]
    },
    {
        id: "tb_0910", word: "전파", level: 3, subject: "사회",
        context: "불교가 아시아의 여러 지역으로 [ ? ]되었습니다.",
        morphemes: [ { hanja: "傳", meaning: "전할 전" }, { hanja: "播", meaning: "퍼뜨릴 파" } ]
    },
    {
        id: "tb_0911", word: "험준", level: 3, subject: "사회",
        context: "산이 워낙 [ ? ]하여 사람의 발길이 잘 닿지 않았습니다.",
        morphemes: [ { hanja: "險", meaning: "험할 험" }, { hanja: "峻", meaning: "높을 준" } ]
    },
    {
        id: "tb_0912", word: "비옥", level: 3, subject: "사회",
        context: "한강 유역은 땅이 [ ? ]하고 교통이 편리하여 삼국이 서로 차지하려 하였습니다.",
        morphemes: [ { hanja: "肥", meaning: "기름질 비" }, { hanja: "沃", meaning: "기름질 옥" } ]
    },
    {
        id: "tb_0913", word: "영농", level: 3, subject: "사회",
        context: "[ ? ] 기술의 발달로 계절에 관계없이 여러 가지 채소와 과일을 먹을 수 있습니다.",
        morphemes: [ { hanja: "營", meaning: "경영할 영" }, { hanja: "農", meaning: "농사 농" } ]
    },
    {
        id: "tb_0914", word: "명시", level: 3, subject: "사회",
        context: "안내문에는 입장료가 [ ? ]되지 않아서 불편하였습니다.",
        morphemes: [ { hanja: "明", meaning: "밝을 명" }, { hanja: "示", meaning: "보일 시" } ]
    },
    {
        id: "tb_0915", word: "백야", level: 3, subject: "사회",
        context: "북유럽의 [ ? ] 현상을 담은 사진이 정말 멋집니다.",
        morphemes: [ { hanja: "白", meaning: "흰 백" }, { hanja: "夜", meaning: "밤 야" } ]
    },
    {
        id: "tb_0916", word: "유전", level: 3, subject: "사회",
        context: "우리나라는 바다에서 [ ? ]을 개발하는 배를 잘 만듭니다.",
        morphemes: [ { hanja: "油", meaning: "기름 유" }, { hanja: "田", meaning: "밭 전" } ]
    },
    {
        id: "tb_0917", word: "학술", level: 3, subject: "사회",
        context: "박물관에서는 유물을 찾아내고 전시하며, 다양한 [ ? ] 자료를 수집 하기도 합니다.",
        morphemes: [ { hanja: "學", meaning: "배울 학" }, { hanja: "術", meaning: "재주 술" } ]
    },
    {
        id: "tb_0918", word: "위상", level: 3, subject: "사회",
        context: "대한민국의 [ ? ]이 날로 높아지고 있습니다.",
        morphemes: [ { hanja: "位", meaning: "자리 위" }, { hanja: "相", meaning: "모양 상" } ]
    },
    {
        id: "tb_0919", word: "기아", level: 3, subject: "사회",
        context: "특공대원들은 추위와 [ ? ]의 고통을 이겨내며 계속 전진하였습니다.",
        morphemes: [ { hanja: "飢", meaning: "굶주릴 기" }, { hanja: "餓", meaning: "굶주릴 아" } ]
    },
    {
        id: "tb_0920", word: "평탄", level: 3, subject: "사회",
        context: "[ ? ]한 오솔길을 걸으며 이야기꽃을 피웠습니다.",
        morphemes: [ { hanja: "平", meaning: "평평할 평" }, { hanja: "坦", meaning: "평평할 탄" } ]
    },
    {
        id: "tb_0921", word: "보유", level: 3, subject: "사회",
        context: "미국과 러시아는 현재 [ ? ]중인 핵무기를 줄이기로 합의하였습니다.",
        morphemes: [ { hanja: "保", meaning: "보호할 보" }, { hanja: "有", meaning: "있을 유" } ]
    },
    {
        id: "tb_0922", word: "보고", level: 3, subject: "사회",
        context: "남극은 자원의 [ ? ]입니다.",
        morphemes: [ { hanja: "寶", meaning: "보물 보" }, { hanja: "庫", meaning: "창고 고" } ]
    },
    {
        id: "tb_0923", word: "부패", level: 3, subject: "사회",
        context: "[ ? ]한 관리들의 횡포로 백성들의 삶은 더욱 어려워졌습니다.",
        morphemes: [ { hanja: "腐", meaning: "썩을 부" }, { hanja: "敗", meaning: "무너질 패" } ]
    },
    {
        id: "tb_0924", word: "빈번", level: 3, subject: "사회",
        context: "요즈음 서해안에서 지진이 [ ? ]하게 발생한다니 걱정입니다.",
        morphemes: [ { hanja: "頻", meaning: "자주 빈" }, { hanja: "繁", meaning: "많을 번" } ]
    },
    {
        id: "tb_0925", word: "빙하", level: 3, subject: "사회",
        context: "남극은 지구 [ ? ]의 대부분을 차지하고 있습니다.",
        morphemes: [ { hanja: "氷", meaning: "얼음 빙" }, { hanja: "河", meaning: "물 하" } ]
    },
    {
        id: "tb_0926", word: "연체", level: 3, subject: "사회",
        context: "오징어는 우리에게 익숙한 [ ? ]동물입니다.",
        morphemes: [ { hanja: "軟", meaning: "연할 연" }, { hanja: "體", meaning: "몸 체" } ]
    },
    {
        id: "tb_0927", word: "유산", level: 3, subject: "사회",
        context: "세계 문화 [ ? ]에는 어떤 것들이 있는지 알아봅시다.",
        morphemes: [ { hanja: "遺", meaning: "남길 유" }, { hanja: "産", meaning: "재산 산" } ]
    },
    {
        id: "tb_0928", word: "쇄빙", level: 3, subject: "사회",
        context: "차가운 겨울 날씨 때문에 한강에도 [ ? ]을 위한 배가 필요하다고 합니다.",
        morphemes: [ { hanja: "碎", meaning: "부술 쇄" }, { hanja: "氷", meaning: "얼음 빙" } ]
    },
    {
        id: "tb_0929", word: "수송", level: 3, subject: "사회",
        context: "철도는 석탄이나 지하자원을 [ ? ]하는데 많이 이용되었습니다.",
        morphemes: [ { hanja: "輸", meaning: "나를 수" }, { hanja: "送", meaning: "보낼 송" } ]
    },
    {
        id: "tb_0930", word: "수확", level: 3, subject: "사회",
        context: "농부들은 [ ? ]의 기쁨을 함께 나누며 즐거워하였습니다.",
        morphemes: [ { hanja: "收", meaning: "거둘 수" }, { hanja: "穫", meaning: "거둘 확" } ]
    },
    {
        id: "tb_0931", word: "풍부", level: 3, subject: "사회",
        context: "우유에는 여러 가지 영양이 [ ? ]합니다.",
        morphemes: [ { hanja: "豊", meaning: "풍성할 풍" }, { hanja: "富", meaning: "넉넉할 부" } ]
    },
    {
        id: "tb_0932", word: "수정", level: 3, subject: "사회",
        context: "작가는 내용의 일부분을 [ ? ]하여 출판사에 보냈습니다.",
        morphemes: [ { hanja: "修", meaning: "고칠 수" }, { hanja: "正", meaning: "바로잡을 정" } ]
    },
    {
        id: "tb_0933", word: "첨부", level: 3, subject: "사회",
        context: "아버지께서는 서류에 사진을 [ ? ]하여 동사무소로 보내셨습니다.",
        morphemes: [ { hanja: "添", meaning: "더할 첨" }, { hanja: "附", meaning: "붙일 부" } ]
    },
    {
        id: "tb_0934", word: "계승", level: 3, subject: "사회",
        context: "역사는 문화 창조와 [ ? ]의 과정입니다.",
        morphemes: [ { hanja: "繼", meaning: "이을 계" }, { hanja: "承", meaning: "이을 승" } ]
    },
    {
        id: "tb_0935", word: "여가", level: 3, subject: "사회",
        context: "우리들은 [ ? ]를 활용하여 운동을 하였습니다.",
        morphemes: [ { hanja: "餘", meaning: "남을 여" }, { hanja: "暇", meaning: "겨를 가" } ]
    },
    {
        id: "tb_0936", word: "절감", level: 3, subject: "사회",
        context: "우리 회사는 생산 비용 [ ? ]을 위해서 노력하고 있습니다.",
        morphemes: [ { hanja: "節", meaning: "절약할 절" }, { hanja: "減", meaning: "덜 감" } ]
    },
    {
        id: "tb_0937", word: "복제", level: 3, subject: "사회",
        context: "남의 작품을 불법으로 [ ? ]하는 것은 커다란 잘못입니다.",
        morphemes: [ { hanja: "複", meaning: "겹칠 복" }, { hanja: "製", meaning: "지을 제" } ]
    },
    {
        id: "tb_0938", word: "검증", level: 3, subject: "사회",
        context: "많은 사람들이 지켜보는 가운데 범죄에 대한 현장 [ ? ]이 이루어 졌습니다.",
        morphemes: [ { hanja: "檢", meaning: "검사할 검" }, { hanja: "證", meaning: "증거 증" } ]
    },
    {
        id: "tb_0939", word: "소통", level: 3, subject: "사회",
        context: "동물들은 소리나 몸짓으로 의사[ ? ]을 합니다.",
        morphemes: [ { hanja: "疏", meaning: "트일 소" }, { hanja: "通", meaning: "통할 통" } ]
    },
    {
        id: "tb_0940", word: "유익", level: 3, subject: "사회",
        context: "나는 [ ? ]한 방학 생활을 보내기 위해 꼼꼼하게 계획을 세웠습니다.",
        morphemes: [ { hanja: "有", meaning: "있을 유" }, { hanja: "益", meaning: "이익 익" } ]
    },
    {
        id: "tb_0941", word: "유출", level: 3, subject: "사회",
        context: "서해안에서 발생한 기름 [ ? ] 사고로 많은 사람들이 어려움을 겪고 있습니다.",
        morphemes: [ { hanja: "流", meaning: "흐를 류" }, { hanja: "出", meaning: "날 출" } ]
    },
    {
        id: "tb_0942", word: "양도", level: 3, subject: "사회",
        context: "박사님은 아무런 대가도 없이 나라에 기술을 [ ? ]하였습니다.",
        morphemes: [ { hanja: "讓", meaning: "넘겨줄 양" }, { hanja: "渡", meaning: "건넬 도" } ]
    },
    {
        id: "tb_0943", word: "전반", level: 3, subject: "사회",
        context: "임금님은 정치 [ ? ]에 걸쳐 잘못된 부분은 바로잡았습니다.",
        morphemes: [ { hanja: "全", meaning: "모두 전" }, { hanja: "般", meaning: "일반 반" } ]
    },
    {
        id: "tb_0944", word: "협정", level: 3, subject: "사회",
        context: "오랜 회의 끝에 우리나라와 미국이 자유 무역 [ ? ]을 맺었습니다.",
        morphemes: [ { hanja: "協", meaning: "협의할 협" }, { hanja: "定", meaning: "정할 정" } ]
    },
    {
        id: "tb_0945", word: "협약", level: 3, subject: "사회",
        context: "노동자들은 이번 단체 [ ? ]이 잘 지켜지고 있는지 살펴보았습니다.",
        morphemes: [ { hanja: "協", meaning: "협의할 협" }, { hanja: "約", meaning: "맺을 약" } ]
    },
    {
        id: "tb_0946", word: "쟁점", level: 3, subject: "사회",
        context: "이번 회의는 개성 공단에 대한 문제가 주요 [ ? ]입니다.",
        morphemes: [ { hanja: "爭", meaning: "다툴 쟁" }, { hanja: "點", meaning: "점 점" } ]
    },
    {
        id: "tb_0947", word: "규명", level: 3, subject: "사회",
        context: "이번 사고의 원인을 [ ? ]하기 위해 노력하였습니다.",
        morphemes: [ { hanja: "糾", meaning: "따질 규" }, { hanja: "明", meaning: "밝을 명" } ]
    },
    {
        id: "tb_0948", word: "대안", level: 3, subject: "사회",
        context: "갑자기 닥친 일이라 [ ? ]이 잘 떠오르지 않았습니다.",
        morphemes: [ { hanja: "代", meaning: "대신할 대" }, { hanja: "案", meaning: "계획 안" } ]
    },
    {
        id: "tb_0949", word: "보완", level: 3, subject: "사회",
        context: "학교 폭력을 줄이기 위한 대책의 문제점을 [ ? ]하기 위해 회의를 하였습니다.",
        morphemes: [ { hanja: "補", meaning: "보충할 보" }, { hanja: "完", meaning: "완전할 완" } ]
    },
    {
        id: "tb_0950", word: "사례", level: 3, subject: "사회",
        context: "이제까지 이런 [ ? ]는 없었기 때문에 어떻게 처리해야할 지 모르겠습니다.",
        morphemes: [ { hanja: "事", meaning: "일 사" }, { hanja: "例", meaning: "보기 례" } ]
    },
    {
        id: "tb_0951", word: "육성", level: 3, subject: "사회",
        context: "미래 사회를 이끌어갈 인재를 [ ? ]하기 위해 노력하고 있습니다.",
        morphemes: [ { hanja: "育", meaning: "기를 육" }, { hanja: "成", meaning: "이룰 성" } ]
    },
    {
        id: "tb_0952", word: "연수", level: 3, subject: "사회",
        context: "이번 여름에 외국으로 어학 [ ? ]를 다녀올 예정입니다.",
        morphemes: [ { hanja: "硏", meaning: "갈 연" }, { hanja: "修", meaning: "닦을 수" } ]
    },
    {
        id: "tb_0953", word: "친숙", level: 3, subject: "사회",
        context: "우리 문화가 세계 여러 나라의 사람들에게 점차 [ ? ]해지고 있습니다.",
        morphemes: [ { hanja: "親", meaning: "친할 친" }, { hanja: "熟", meaning: "익을 숙" } ]
    },
    {
        id: "tb_0954", word: "소재", level: 3, subject: "사회",
        context: "선생님께서는 우리들의 학교생활을 [ ? ]로 한 연극을 준비하고 계십니다.",
        morphemes: [ { hanja: "素", meaning: "바탕 소" }, { hanja: "材", meaning: "재료 재" } ]
    },
    {
        id: "tb_0955", word: "사찰", level: 3, subject: "사회",
        context: "휴일을 맞아 산과 [ ? ]은 많은 사람들로 붐볐습니다.",
        morphemes: [ { hanja: "寺", meaning: "절 사" }, { hanja: "刹", meaning: "절 찰" } ]
    },
    {
        id: "tb_0956", word: "번영", level: 3, subject: "사회",
        context: "나라와 후손들의 [ ? ]을 위해 더욱 열심히 노력합시다.",
        morphemes: [ { hanja: "繁", meaning: "번성할 번" }, { hanja: "榮", meaning: "영화로울 영" } ]
    },
    {
        id: "tb_0957", word: "도발", level: 3, subject: "사회",
        context: "아직 북한의 [ ? ] 가능성이 완전히 사라진 것은 아닙니다.",
        morphemes: [ { hanja: "挑", meaning: "부추길 도" }, { hanja: "發", meaning: "일어날 발" } ]
    },
    {
        id: "tb_0958", word: "이산", level: 3, subject: "사회",
        context: "우리 주변에는 아직도 [ ? ]의 고통 속에서 살아가는 사람들이 많이 있습니다.",
        morphemes: [ { hanja: "離", meaning: "떠날 리" }, { hanja: "散", meaning: "흩어질 산" } ]
    },
    {
        id: "tb_0959", word: "상봉", level: 3, subject: "사회",
        context: "심청은 오랜 기다림 끝에 아버지와 감격적인 [ ? ]을 하였습니다.",
        morphemes: [ { hanja: "相", meaning: "서로 상" }, { hanja: "逢", meaning: "만날 봉" } ]
    },
    {
        id: "tb_0960", word: "속출", level: 3, subject: "사회",
        context: "장마와 산사태로 여러 지역에서 피해가 [ ? ]하고 있습니다.",
        morphemes: [ { hanja: "續", meaning: "이을 속" }, { hanja: "出", meaning: "날 출" } ]
    },
    {
        id: "tb_0961", word: "분쟁", level: 3, subject: "사회",
        context: "동중국해에서 일본과 중국이 영토 [ ? ] 중입니다.",
        morphemes: [ { hanja: "紛", meaning: "어지러울 분" }, { hanja: "爭", meaning: "다툴 쟁" } ]
    },
    {
        id: "tb_0962", word: "혼합", level: 3, subject: "수학",
        context: "모든 색을 [ ? ]하면 검정색이 됩니다.",
        morphemes: [ { hanja: "混", meaning: "섞을 혼" }, { hanja: "合", meaning: "합할 합" } ]
    },
    {
        id: "tb_0963", word: "섭취", level: 3, subject: "수학",
        context: "지나친 육류 [ ? ]는 건강에 좋지 못합니다.",
        morphemes: [ { hanja: "攝", meaning: "빨아들일 섭" }, { hanja: "取", meaning: "가질 취" } ]
    },
    {
        id: "tb_0964", word: "입체", level: 3, subject: "수학",
        context: "[ ? ]도형의 전개도를 그려봅시다.",
        morphemes: [ { hanja: "立", meaning: "설 립" }, { hanja: "體", meaning: "몸 체" } ]
    },
    {
        id: "tb_0965", word: "평행", level: 3, subject: "수학",
        context: "오솔길이 해안과 [ ? ]하게 뻗어 있습니다.",
        morphemes: [ { hanja: "平", meaning: "나란할 평" }, { hanja: "行", meaning: "갈 행" } ]
    },
    {
        id: "tb_0966", word: "모선", level: 3, subject: "수학",
        context: "원뿔에서 [ ? ]은 모두 몇 개입니까?",
        morphemes: [ { hanja: "母", meaning: "어미 모" }, { hanja: "線", meaning: "줄 선" } ]
    },
    {
        id: "tb_0967", word: "단면", level: 3, subject: "수학",
        context: "입체도형의 [ ? ]을 알아봅시다.",
        morphemes: [ { hanja: "斷", meaning: "끊을 단" }, { hanja: "面", meaning: "낮 면" } ]
    },
    {
        id: "tb_0968", word: "수직", level: 3, subject: "수학",
        context: "직육면체의 밑면과 옆면은 [ ? ]으로 만납니다.",
        morphemes: [ { hanja: "垂", meaning: "드리울 수" }, { hanja: "直", meaning: "곧을 직" } ]
    },
    {
        id: "tb_0969", word: "회전", level: 3, subject: "수학",
        context: "우리 가족은 [ ? ] 초밥집에서 식사를 하였습니다.",
        morphemes: [ { hanja: "回", meaning: "돌 회" }, { hanja: "轉", meaning: "구를 전" } ]
    },
    {
        id: "tb_0970", word: "확률", level: 3, subject: "수학",
        context: "우리 반이 1등을 할 [ ? ]은 얼마나 될까?",
        morphemes: [ { hanja: "確", meaning: "확실할 확" }, { hanja: "率", meaning: "비율 률" } ]
    },
    {
        id: "tb_0971", word: "경우", level: 3, subject: "수학",
        context: "내일 비가 올 [ ? ]에는 현장학습을 가지 않습니다.",
        morphemes: [ { hanja: "境", meaning: "지경 경" }, { hanja: "遇", meaning: "만날 우" } ]
    },
    {
        id: "tb_0972", word: "경품", level: 3, subject: "수학",
        context: "5만원 이상 구입하신 분에게는 [ ? ]으로 우산을 드립니다.",
        morphemes: [ { hanja: "景", meaning: "그림자 경" }, { hanja: "品", meaning: "물건 품" } ]
    },
    {
        id: "tb_0973", word: "등식", level: 3, subject: "수학",
        context: "[ ? ]의 성질을 활용하여 다음 문제를 해결하시오.",
        morphemes: [ { hanja: "等", meaning: "같을 등" }, { hanja: "式", meaning: "식 식" } ]
    },
    {
        id: "tb_0974", word: "분동", level: 3, subject: "수학",
        context: "[ ? ]을 활용하여 물체의 무게를 측정하였습니다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "銅", meaning: "구리 동" } ]
    },
    {
        id: "tb_0975", word: "수평", level: 3, subject: "수학",
        context: "시소를 타면서 [ ? ] 잡기 놀이를 하였습니다.",
        morphemes: [ { hanja: "水", meaning: "물 수" }, { hanja: "平", meaning: "평평할 평" } ]
    },
    {
        id: "tb_0976", word: "포함", level: 3, subject: "수학",
        context: "두 집합 사이의 [ ? ] 관계를 알아봅시다.",
        morphemes: [ { hanja: "包", meaning: "쌀 포" }, { hanja: "含", meaning: "넣을 함" } ]
    },
    {
        id: "tb_0977", word: "교환", level: 3, subject: "수학",
        context: "옛날에는 필요한 물건을 서로 [ ? ]하였습니다.",
        morphemes: [ { hanja: "交", meaning: "서로 교" }, { hanja: "換", meaning: "바꿀 환" } ]
    },
    {
        id: "tb_0978", word: "악수", level: 3, subject: "수학",
        context: "친구들은 [ ? ]를 하며 반갑게 인사를 나누었습니다.",
        morphemes: [ { hanja: "握", meaning: "잡을 악" }, { hanja: "手", meaning: "손 수" } ]
    },
    {
        id: "tb_0979", word: "습도", level: 3, subject: "과학",
        context: "여름철에는 [ ? ]가 높아 몸이 끈끈합니다.",
        morphemes: [ { hanja: "濕", meaning: "축축할 습" }, { hanja: "度", meaning: "정도 도" } ]
    },
    {
        id: "tb_0980", word: "측정", level: 3, subject: "과학",
        context: "연못의 깊이를 [ ? ]하여 봅시다.",
        morphemes: [ { hanja: "測", meaning: "헤아릴 측" }, { hanja: "定", meaning: "정할 정" } ]
    },
    {
        id: "tb_0981", word: "습구", level: 3, subject: "과학",
        context: "[ ? ] 온도계에 나타난 온도를 읽어 봅시다.",
        morphemes: [ { hanja: "濕", meaning: "축축할 습" }, { hanja: "球", meaning: "공 구" } ]
    },
    {
        id: "tb_0982", word: "건구", level: 3, subject: "과학",
        context: "[ ? ]와 습구의 온도를 따로 재어서 그 온도 차로 습도를 알아냅니다.",
        morphemes: [ { hanja: "乾", meaning: "마를 건" }, { hanja: "球", meaning: "공 구" } ]
    },
    {
        id: "tb_0983", word: "모발", level: 3, subject: "과학",
        context: "헤어드라이어를 너무 많이 사용하면 [ ? ]이 손상됩니다.",
        morphemes: [ { hanja: "毛", meaning: "털 모" }, { hanja: "髮", meaning: "머리털 발" } ]
    },
    {
        id: "tb_0984", word: "응결", level: 3, subject: "과학",
        context: "지구 대기 중에서 수증기가 [ ? ]하여 눈이나 얼음이 만들어집니다.",
        morphemes: [ { hanja: "凝", meaning: "엉길 응" }, { hanja: "結", meaning: "맺을 결" } ]
    },
    {
        id: "tb_0985", word: "가열", level: 3, subject: "과학",
        context: "설탕을 [ ? ]하면 캐러멜 냄새가 납니다.",
        morphemes: [ { hanja: "加", meaning: "더할 가" }, { hanja: "熱", meaning: "뜨거울 열" } ]
    },
    {
        id: "tb_0986", word: "냉각", level: 3, subject: "과학",
        context: "남한과 북한의 관계가 [ ? ]되지 않도록 하기 위해서는 꾸준한 노력이 필요합니다.",
        morphemes: [ { hanja: "冷", meaning: "찰 랭" }, { hanja: "却", meaning: "식힐 각" } ]
    },
    {
        id: "tb_0987", word: "대류", level: 3, subject: "과학",
        context: "물을 끓이면 [ ? ] 현상으로 아래의 물이 위로 올라옵니다.",
        morphemes: [ { hanja: "對", meaning: "상대 대" }, { hanja: "流", meaning: "흐를 류" } ]
    },
    {
        id: "tb_0988", word: "해풍", level: 3, subject: "과학",
        context: "바다가 보이는 언덕길 아래로 무수한 보리들이 [ ? ]에 물결치고 있었습니다.",
        morphemes: [ { hanja: "海", meaning: "바다 해" }, { hanja: "風", meaning: "바람 풍" } ]
    },
    {
        id: "tb_0989", word: "육풍", level: 3, subject: "과학",
        context: "[ ? ]이 부는 저녁 무렵부터 숲속 나무들의 대화가 시작됩니다.",
        morphemes: [ { hanja: "陸", meaning: "육지 육" }, { hanja: "風", meaning: "바람 풍" } ]
    },
    {
        id: "tb_0990", word: "징조", level: 3, subject: "과학",
        context: "우리 조상들은 아침에 까치가 울면 좋은 소식을 듣게 될 [ ? ]라고 믿었습니다.",
        morphemes: [ { hanja: "徵", meaning: "조짐 징" }, { hanja: "兆", meaning: "조짐 조" } ]
    },
    {
        id: "tb_0991", word: "감축", level: 3, subject: "과학",
        context: "지구의 평화를 위해 꾸준한 핵무기 [ ? ] 노력이 필요합니다.",
        morphemes: [ { hanja: "減", meaning: "덜 감" }, { hanja: "縮", meaning: "줄일 축" } ]
    },
    {
        id: "tb_0992", word: "지침", level: 3, subject: "과학",
        context: "지진이 일어났을 때의 행동 [ ? ]을 잘 알아둡시다.",
        morphemes: [ { hanja: "指", meaning: "가리킬 지" }, { hanja: "針", meaning: "바늘 침" } ]
    },
    {
        id: "tb_0993", word: "관측", level: 3, subject: "과학",
        context: "어떤 혜성은 망원경 없이도 [ ? ]됩니다.",
        morphemes: [ { hanja: "觀", meaning: "관찰할 관" }, { hanja: "測", meaning: "잴 측" } ]
    },
    {
        id: "tb_0994", word: "분포", level: 3, subject: "과학",
        context: "우리나라의 인구 [ ? ]를 지도에 나타내어 봅시다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "布", meaning: "펼 포" } ]
    },
    {
        id: "tb_0995", word: "송신", level: 3, subject: "과학",
        context: "관측소에서 관측된 기상 정보는 매일 각 지역에 [ ? ]됩니다.",
        morphemes: [ { hanja: "送", meaning: "보낼 송" }, { hanja: "信", meaning: "신호 신" } ]
    },
    {
        id: "tb_0996", word: "가상", level: 3, subject: "과학",
        context: "화재 발생에 대비하여 [ ? ] 훈련을 실시하였습니다.",
        morphemes: [ { hanja: "假", meaning: "임시 가" }, { hanja: "想", meaning: "생각할 상" } ]
    },
    {
        id: "tb_0997", word: "재해", level: 3, subject: "과학",
        context: "기후의 변화로 여러 가지 자연 [ ? ]가 발생하고 있습니다.",
        morphemes: [ { hanja: "災", meaning: "재앙 재" }, { hanja: "害", meaning: "피해 해" } ]
    },
    {
        id: "tb_0998", word: "상륙", level: 3, subject: "과학",
        context: "맥아더 장군이 인천 1[ ? ] 작전을 지휘하였습니다.",
        morphemes: [ { hanja: "上", meaning: "오를 상" }, { hanja: "陸", meaning: "육지 육" } ]
    },
    {
        id: "tb_0999", word: "예상", level: 3, subject: "과학",
        context: "성취도 평가를 대비하여 [ ? ] 문제를 풀어보았습니다.",
        morphemes: [ { hanja: "豫", meaning: "미리 예" }, { hanja: "想", meaning: "생각할 상" } ]
    },
    {
        id: "tb_1000", word: "경로", level: 3, subject: "과학",
        context: "적군의 침입 [ ? ]를 예상하여 철저히 대비하도록 하여라.",
        morphemes: [ { hanja: "經", meaning: "지날 경" }, { hanja: "路", meaning: "길 로" } ]
    },
    {
        id: "tb_1001", word: "인명", level: 3, subject: "과학",
        context: "이번 홍수는 많은 [ ? ]과 재산을 빼앗아갔습니다.",
        morphemes: [ { hanja: "人", meaning: "사람 인" }, { hanja: "命", meaning: "목숨 명" } ]
    },
    {
        id: "tb_1002", word: "간이", level: 3, subject: "과학",
        context: "휴게소에 사람이 너무 많아 [ ? ] 화장실을 이용하였습니다.",
        morphemes: [ { hanja: "簡", meaning: "간단할 간" }, { hanja: "易", meaning: "쉬울 이" } ]
    },
    {
        id: "tb_1003", word: "진공", level: 3, subject: "과학",
        context: "아버지께서 [ ? ] 청소기로 방 구석구석을 청소하셨습니다.",
        morphemes: [ { hanja: "眞", meaning: "참 진" }, { hanja: "空", meaning: "빌 공" } ]
    },
    {
        id: "tb_1004", word: "매연", level: 3, subject: "과학",
        context: "공장이나 자동차의 [ ? ]은 우리의 환경과 건강을 해칩니다.",
        morphemes: [ { hanja: "煤", meaning: "그을음 매" }, { hanja: "煙", meaning: "연기 연" } ]
    },
    {
        id: "tb_1005", word: "용기", level: 3, subject: "과학",
        context: "남은 음식 재료를 [ ? ]에 담아 냉장고에 보관하였습니다.",
        morphemes: [ { hanja: "容", meaning: "담을 용" }, { hanja: "器", meaning: "그릇 기" } ]
    },
    {
        id: "tb_1006", word: "기포", level: 3, subject: "과학",
        context: "시원한 콜라를 잔에 따르자 [ ? ]가 뽀글뽀글 올라왔습니다.",
        morphemes: [ { hanja: "氣", meaning: "공기 기" }, { hanja: "泡", meaning: "거품 포" } ]
    },
    {
        id: "tb_1007", word: "배출", level: 3, subject: "과학",
        context: "우리 학교는 나라를 빛낼 훌륭한 인재를 많이 [ ? ]하였습니다.",
        morphemes: [ { hanja: "排", meaning: "밀칠 배" }, { hanja: "出", meaning: "날 출" } ]
    },
    {
        id: "tb_1008", word: "상온", level: 3, subject: "과학",
        context: "여름철에 음식물을 [ ? ]에서 보관하면 상하기 쉽습니다.",
        morphemes: [ { hanja: "常", meaning: "항상 상" }, { hanja: "溫", meaning: "따뜻할 온" } ]
    },
    {
        id: "tb_1009", word: "분류", level: 3, subject: "과학",
        context: "구름의 종류를 모양이나 특징에 따라 [ ? ]하여 봅시다.",
        morphemes: [ { hanja: "分", meaning: "나눌 분" }, { hanja: "類", meaning: "종류 류" } ]
    },
    {
        id: "tb_1010", word: "청정", level: 3, subject: "과학",
        context: "남해안의 [ ? ] 해역에서 잡아 올린 생선이 참으로 싱싱하였습니다.",
        morphemes: [ { hanja: "淸", meaning: "맑을 청" }, { hanja: "淨", meaning: "깨끗할 정" } ]
    },
    {
        id: "tb_1011", word: "특유", level: 3, subject: "과학",
        context: "바이올린 [ ? ]의 가냘픈 소리가 관객들에게 깊은 감동을 주었습니다.",
        morphemes: [ { hanja: "特", meaning: "특별할 특" }, { hanja: "有", meaning: "있을 유" } ]
    },
    {
        id: "tb_1012", word: "제기", level: 3, subject: "과학",
        context: "나는 여러 친구들의 의견에 반대 의견을 [ ? ]하였습니다.",
        morphemes: [ { hanja: "提", meaning: "들 제" }, { hanja: "起", meaning: "일어날 기" } ]
    },
    {
        id: "tb_1013", word: "채취", level: 3, subject: "과학",
        context: "할아버지께서는 산에서 약초나 버섯을 [ ? ]하십니다.",
        morphemes: [ { hanja: "採", meaning: "캘 채" }, { hanja: "取", meaning: "취할 취" } ]
    },
    {
        id: "tb_1014", word: "전환", level: 3, subject: "과학",
        context: "축구 경기의 공격과 수비가 빠르게 [ ? ]되어 정말 재미있었습니다.",
        morphemes: [ { hanja: "轉", meaning: "바꿀 전" }, { hanja: "換", meaning: "바꿀 환" } ]
    },
    {
        id: "tb_1015", word: "구상", level: 3, subject: "과학",
        context: "대통령께서 우리 민족 모두가 행복할 수 있는 통일 방안을 [ ? ]하고 계십니다.",
        morphemes: [ { hanja: "構", meaning: "얽을 구" }, { hanja: "想", meaning: "생각 상" } ]
    },
    {
        id: "tb_1016", word: "배치", level: 3, subject: "과학",
        context: "중학교에 올라가면 반 [ ? ] 고사를 본다고 합니다.",
        morphemes: [ { hanja: "配", meaning: "나눌 배" }, { hanja: "置", meaning: "둘 치" } ]
    },
    {
        id: "tb_1017", word: "탄성", level: 3, subject: "과학",
        context: "용수철의 [ ? ]을 이용한 제품에는 어떤 것들이 있을까요?",
        morphemes: [ { hanja: "彈", meaning: "튀길 탄" }, { hanja: "性", meaning: "성질 성" } ]
    },
    {
        id: "tb_1018", word: "고갈", level: 3, subject: "과학",
        context: "이 지역은 오랜 가뭄으로 식수가 [ ? ]되어 많은 어려움을 겪고 있습니다.",
        morphemes: [ { hanja: "枯", meaning: "마를 고" }, { hanja: "渴", meaning: "마를 갈" } ]
    },
    {
        id: "tb_1019", word: "이변", level: 3, subject: "과학",
        context: "세계 곳곳에서 기상 [ ? ]이 나타나고 있습니다.",
        morphemes: [ { hanja: "異", meaning: "다를 이" }, { hanja: "變", meaning: "변할 변" } ]
    },
    {
        id: "tb_1020", word: "상승", level: 3, subject: "과학",
        context: "계속되는 물가 [ ? ]으로 생활이 점차 어려워지고 있습니다.",
        morphemes: [ { hanja: "上", meaning: "위 상" }, { hanja: "昇", meaning: "오를 승" } ]
    },
    {
        id: "tb_1021", word: "권장", level: 3, subject: "과학",
        context: "도서실에서 [ ? ] 도서 목록을 살펴보았습니다.",
        morphemes: [ { hanja: "勸", meaning: "권할 권" }, { hanja: "獎", meaning: "장려할 장" } ]
    },
    {
        id: "tb_1022", word: "완만", level: 3, subject: "과학",
        context: "서해안은 경사가 [ ? ]하여 갯벌이 넓게 발달하였습니다.",
        morphemes: [ { hanja: "緩", meaning: "느릴 완" }, { hanja: "慢", meaning: "게으를 만" } ]
    },
    {
        id: "tb_1023", word: "대체", level: 3, subject: "과학",
        context: "연탄은 가스로 [ ? ]되어 우리 곁에서 점차 사라지고 있습니다.",
        morphemes: [ { hanja: "代", meaning: "대신 대" }, { hanja: "替", meaning: "바꿀 체" } ]
    },
    {
        id: "tb_1024", word: "반사", level: 3, subject: "과학",
        context: "거울로 빛의 [ ? ] 놀이를 하였습니다.",
        morphemes: [ { hanja: "反", meaning: "되돌릴 반" }, { hanja: "射", meaning: "쏠 사" } ]
    },
    {
        id: "tb_1025", word: "고안", level: 3, subject: "과학",
        context: "박사님은 제품 생산에 더욱 편리한 기계를 [ ? ]하기 위해 노력하 였습니다.",
        morphemes: [ { hanja: "考", meaning: "생각할 고" }, { hanja: "案", meaning: "방법 안" } ]
    },
    {
        id: "tb_1026", word: "소화", level: 3, subject: "과학",
        context: "빌딩의 안전을 위해 [ ? ] 장치를 철저히 점검하시기 바랍니다.",
        morphemes: [ { hanja: "消", meaning: "사라질 소" }, { hanja: "火", meaning: "불 화" } ]
    },
    {
        id: "tb_1027", word: "감식", level: 3, subject: "과학",
        context: "범죄 현장 [ ? ]을 위해 많은 전문가들을 모셔왔습니다.",
        morphemes: [ { hanja: "鑑", meaning: "살필 감" }, { hanja: "識", meaning: "알 식" } ]
    },
    {
        id: "tb_1028", word: "마찰", level: 3, subject: "과학",
        context: "옛날 사람들은 나무와 나무를 [ ? ]하여 불을 피웠습니다.",
        morphemes: [ { hanja: "摩", meaning: "갈 마" }, { hanja: "擦", meaning: "비빌 찰" } ]
    },
    {
        id: "tb_1029", word: "차단", level: 3, subject: "과학",
        context: "영호는 상대 공격수의 공격을 [ ? ]하기 위해 힘껏 달렸습니다.",
        morphemes: [ { hanja: "遮", meaning: "막을 차" }, { hanja: "斷", meaning: "끊을 단" } ]
    },
    {
        id: "tb_1030", word: "재질", level: 3, subject: "과학",
        context: "오동나무는 [ ? ]이 부드럽고 질겨 가구나 악기를 만드는 데에 주로 씁니다.",
        morphemes: [ { hanja: "材", meaning: "재료 재" }, { hanja: "質", meaning: "성질 질" } ]
    },
    {
        id: "tb_1031", word: "방염", level: 3, subject: "과학",
        context: "이것은 디자인도 멋지지만 화재에도 안전한 [ ? ] 커튼입니다.",
        morphemes: [ { hanja: "防", meaning: "막을 방" }, { hanja: "炎", meaning: "불꽃 염" } ]
    },
    {
        id: "tb_1032", word: "불연", level: 3, subject: "과학",
        context: "지하철의 화재 예방을 위해열차는 [ ? ] 바닥재를 사용합니다.",
        morphemes: [ { hanja: "不", meaning: "아니 불" }, { hanja: "燃", meaning: "불탈 연" } ]
    },
    {
        id: "tb_1033", word: "옥내", level: 3, subject: "과학",
        context: "비가 오자 야외 행사를 [ ? ]로 옮겨 개최하였습니다.",
        morphemes: [ { hanja: "屋", meaning: "집 옥" }, { hanja: "內", meaning: "안 내" } ]
    },
    {
        id: "tb_1034", word: "발화", level: 3, subject: "과학",
        context: "산불은 자연적으로 [ ? ]되는 경우도 많습니다.",
        morphemes: [ { hanja: "發", meaning: "발생할 발" }, { hanja: "火", meaning: "불 화" } ]
    },
    {
        id: "tb_1035", word: "추정", level: 3, subject: "과학",
        context: "이 유물의 가치는 백억 원 정도로 [ ? ]됩니다.",
        morphemes: [ { hanja: "推", meaning: "추측할 추" }, { hanja: "定", meaning: "정할 정" } ]
    },
    {
        id: "tb_1036", word: "공인", level: 3, subject: "과학",
        context: "국가 [ ? ] 기관에서 실시된 시험에 합격하였습니다.",
        morphemes: [ { hanja: "公", meaning: "공 공" }, { hanja: "認", meaning: "인정할 인" } ]
    },
    {
        id: "tb_1037", word: "단서", level: 3, subject: "과학",
        context: "경찰은 사건의 [ ? ]를 찾으려고 현장을 샅샅이 조사했습니다.",
        morphemes: [ { hanja: "端", meaning: "끝 단" }, { hanja: "緖", meaning: "실마리 서" } ]
    },
    {
        id: "tb_1038", word: "추측", level: 3, subject: "과학",
        context: "100년 후의 인간의 생활 모습을 [ ? ]해봅시다.",
        morphemes: [ { hanja: "推", meaning: "밀 추" }, { hanja: "測", meaning: "헤아릴 측" } ]
    },
    {
        id: "tb_1039", word: "반증", level: 3, subject: "과학",
        context: "우리에겐 그 사실을 뒤집을 만한 [ ? ]이 없습니다.",
        morphemes: [ { hanja: "反", meaning: "되돌릴 반" }, { hanja: "證", meaning: "증거할 증" } ]
    }
];

/* =========================
 * PKHDATABASE (Schema v3) — 확장 가능한 코스웨어 DB
 * - 기존 vocabDatabase를 유지하면서, 새 구조(window.PKHDATABASE)를 함께 제공합니다.
 * - 엔진은 PKHDATABASE가 있으면 이를 우선 사용합니다.
 * ========================= */
(function buildPKHDatabase(){
  /* =========================
   * PKHDATABASE (Schema v3.1) — "B" 고도화 패키지
   * - vocabDatabase(레거시 입력 포맷)는 그대로 유지
   * - PKHDATABASE 생성 단계에서 문장/난이도/분류/추론유형을 자동 고도화
   * ========================= */
  const today = "2026-03-03";

  // ---------- level mapping ----------
  const mapLevelKey = (n) => (n===1 ? "pum" : (n===2 ? "kkum" : "him"));

  // ---------- normalize helpers ----------
  const normHanja = (h) => {
    const map = { "敎":"教", "兩":"兩" };
    return String(h||"").split("").map(ch => map[ch] || ch).join("");
  };
  const clean = (s) => String(s||"").replace(/\s+/g," ").trim();

  // 조사 간단 보정: [ ? ] 다음에 붙는 "(이)"/"은(는)" 패턴이 없으면 문장 말미에 (이)라고 합니다를 붙임
  const ensureBlank = (word, context) => {
    let t = String(context||"").trim();
    if (!t) return `다음 문장에서 알맞은 말을 고르세요: [ ? ]`;
    // 정답이 문장에 그대로 노출되면 1회 치환
    if (word && t.includes(word) && !t.includes("[ ? ]")) {
      t = t.replace(word, "[ ? ]");
    }
    if (!t.includes("[ ? ]")) {
      // 최소 안전장치: 문장 끝에 빈칸 삽입
      t = t.replace(/[.。]\s*$/,"");
      t = `${t} [ ? ]`;
    }
    // 흔한 깨짐 패턴 보정
    t = t.replace(/\[\s*\?\s*\]/g, "[ ? ]");
    // 빈칸 주변 공백 정리
    t = t.replace(/\s+\)/g, ")").replace(/\(\s+/g, "(");
    return clean(t);
  };

  // ---------- semantic / pack classification ----------
  const semanticGroupOf = (subject, context) => {
    const s = `${subject||""} ${context||""}`;
    if (/(숫자|수학|양|비율|평균|분수|도형|계산)/.test(s)) return "수리";
    if (/(자연|날씨|계절|환경|지구|생태|광합성|화산|지진|기압|해류)/.test(s)) return "자연";
    if (/(과학|실험|관찰|물질|에너지|자력|연소|용해|증발)/.test(s)) return "과학";
    if (/(사회|정치|경제|민주|선거|헌법|국회|권리|의무|외교|문화재|수출|수입)/.test(s)) return "사회";
    if (/(도덕|책임|규칙|협력|협동|질서|인권|평등)/.test(s)) return "도덕";
    if (/(국어|언어|독서|글|표현|질문|대답)/.test(s)) return "언어";
    if (/(한자성어|고사성어|비유|뜻으로|비유하는)/.test(s)) return "성어";
    return "혼합";
  };

  const subjectToPack = (levelKey, subject, context) => {
    const g = semanticGroupOf(subject, context);
    if (levelKey==="pum") {
      if (g==="수리") return "pum-num";
      if (g==="자연") return "pum-nat";
      if (/(학교|생활)/.test(String(subject||""))) return "pum-life";
      return "pum-mix";
    }
    if (levelKey==="kkum") {
      if (g==="과학") return "kkum-sci";
      if (g==="사회") return "kkum-soc";
      if (g==="도덕") return "kkum-mor";
      return "kkum-lang";
    }
    // him
    if (g==="과학") return "him-sci";
    if (g==="사회" || g==="도덕") return "him-soc";
    if (g==="언어" || g==="수리") return "him-think";
    if (g==="성어") return "him-think";
    return "him-mix";
  };

  // ---------- cognitive type (문맥 추론 유형) ----------
  const cognitiveTypeOf = (subject, context) => {
    const t = `${subject||""} ${context||""}`;
    if (/(뜻으로|뜻입니다|의미|말을.*라고|무엇을.*라고)/.test(t)) return "정의추론";
    if (/(원인|때문|이유|결과|따라서|그래서)/.test(t)) return "원인결과";
    if (/(비교|차이|어느.*큰|더.*많|반대|대조)/.test(t)) return "비교대조";
    if (/(과정|단계|변하|바뀌|만들어.*과정)/.test(t)) return "과정이해";
    if (/(비유|상황|태도|사자성어|한자성어|고사성어)/.test(t)) return "비유추론";
    return "일반문맥";
  };

  // ---------- difficulty (1~5) ----------
  const difficultyOf = (levelKey, wordKo, wordHanja, subject, context) => {
    // base by level band
    let d = (levelKey==="pum" ? 1 : (levelKey==="kkum" ? 2 : 3));
    const wl = (String(wordKo||"").length || 0);
    const hl = (String(wordHanja||"").length || 0);
    const cl = (String(context||"").length || 0);
    // length factors
    if (wl >= 4) d += 0.5;
    if (hl >= 3) d += 0.5;
    if (cl >= 70) d += 0.5;
    // abstractness cues
    const s = `${subject||""} ${context||""}`;
    if (/(주의|권리|의무|민주|경제|외교|평등|인권|헌법|주권|다수결)/.test(s)) d += 1.0;
    if (/(생태계|대기권|태양계|광합성|연소|용해|기압|해류|지층)/.test(s)) d += 0.8;
    if (/(한자성어|고사성어|비유)/.test(s)) d += 0.7;
    // clamp
    d = Math.max(1, Math.min(5, Math.round(d)));
    return d;
  };

  // ---------- error trap (간단 휴리스틱) ----------
  const errorTrapOf = (wordKo, context) => {
    const t = `${wordKo||""} ${context||""}`;
    if (/(동문서답|조삼모사|어부지리|새옹지마|온고지신)/.test(t)) return "비유오해";
    if (/(수출|수입)/.test(t)) return "개념반대";
    return "부분일치오답";
  };

  // ---------- lexicon build ----------
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

  // ---------- levels/packs ----------
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
  ];

  // ---------- items ----------
  const items = (Array.isArray(vocabDatabase)? vocabDatabase: []).map((it, idx) => {
    const levelKey = mapLevelKey(it.level);
    const inferredHanja = (it.morphemes||[]).map(m => normHanja(m.hanja)).join("");
    const context = ensureBlank(it.word, it.context);

    const packId = subjectToPack(levelKey, it.subject, context);
    const semanticGroup = semanticGroupOf(it.subject, context);
    const cognitiveType = cognitiveTypeOf(it.subject, context);

    const mor = (it.morphemes||[]).map(m => {
      const hj = normHanja(m.hanja);
      return hj ? { ref: hj } : { hanja:"", meaning:"" };
    }).filter(x => x.ref || x.hanja);

    const explainShort = (it.morphemes||[]).length
      ? (it.morphemes||[]).map(m => `${normHanja(m.hanja)}(${m.meaning||""})`).join(" + ")
      : "";

    const difficulty = difficultyOf(levelKey, it.word, inferredHanja, it.subject, context);

    // aliases: 공백 제거/중복 방지
    const w = clean(it.word);
    const aliases = Array.from(new Set([w.replace(/\s+/g,"")])).filter(a => a && a !== w);

    return {
      id: it.id || (`legacy_${idx}`),
      legacyId: it.id || (`legacy_${idx}`),
      level: levelKey,
      packId,
      word: { ko: w, hanja: inferredHanja || "" },
      difficulty,
      tags: Array.from(new Set([clean(it.subject||""), semanticGroup, cognitiveType].filter(Boolean))),
      skills: ["문맥추론","한자구조인식"],
      cognitiveType,
      semanticGroup,
      errorTrap: errorTrapOf(w, context),
      related: [],
      passage: { text: context.replace("[ ? ]","{ }"), blankPolicy:"hint" },
      morphemes: mor,
      answer: { accept: [w].filter(Boolean), aliases, reject: [] },
      explain: { short: explainShort ? (explainShort + ` → (${cognitiveType})`) : `(${cognitiveType})`, examples: [] },
      source: { type:"legacy", note: String(it.subject||"") }
    };
  });

  window.PKHDATABASE = {
    meta: {
      schemaVersion: "3.1",
      contentVersion: "3.1.0-B",
      updatedAt: today,
      copyright: "2026@박주가리교감",
      description: "독해력 향상을 위한 한자어 문맥 추론 코스웨어 DB (B: 자동 고도화)"
    },
    levels,
    packs,
    lexicon,
    items
  };
})();
