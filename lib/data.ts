export enum SpiritualGifts {
  Administration = "Administration",
  Teaching = "Teaching",
  Wisdom = "Wisdom",
  Leadership = "Leadership",
  Knowledge = "Knowledge",
  Prophecy = "Prophecy",
  Discernment = "Discernment",
  Exhortation = "Exhortation",
  Shepherding = "Shepherding",
  Faith = "Faith",
  Evangelism = "Evangelism",
  Apostleship = "Apostleship",
  ServiceHelps = "Service Helps",
  Mercy = "Mercy",
  Giving = "Giving",
  Hospitality = "Hospitality",
}

export function translateSpiritualGift(
  language: "chinese" | "english",
  gift: SpiritualGifts
): string {
  if (language === "english") {
    return gift;
  }
  const index = Object.values(SpiritualGifts).indexOf(gift);
  const chineseValues = [
    "領導能力",
    "管理能力",
    "教学恩賜",
    "知识指數",
    "智慧指數",
    "预言能力",
    "辨别能力",
    "向外傳講能力",
    "牧养恩賜",
    "信仰基礎",
    "傳播福音恩賜",
    "使徒主導恩賜",
    "服务/帮助他人",
    "怜悯他人",
    "奉獻心",
    "接待恩賜",
  ];
  return chineseValues[index];
}

export type Question = {
  question: { chinese: string; english: string };
  chinese?: string;
  gift: SpiritualGifts; // make non-optional!
  index: number;
};

export const SPIRITUAL_GIFTS_QUESTIONS: Question[] = [
  {
    question: {
      english:
        "I have the ability to organize ideas, resources, time, and people effectively",
      chinese: "我能有效地組織不同的想法、資源、時間和人。",
    },
    gift: SpiritualGifts.Administration,
    index: 1,
  },
  {
    question: {
      english: "I am willing to study and prepare for the task of teaching",
      chinese: "我願意學習教導和準備教學的工作。",
    },
    gift: SpiritualGifts.Teaching,
    index: 2,
  },
  {
    question: {
      english: "I am able to relate the truths of God to specific situations",
      chinese: "我能將個別事情與神的真理聯繫在一起。",
    },
    gift: SpiritualGifts.Wisdom,
    index: 3,
  },
  {
    question: {
      english: "I have a God-given ability to help others grow in their faith",
      chinese: "我有恩賜能幫助他人的信仰成長。",
    },
    gift: SpiritualGifts.Shepherding,
    index: 4,
  },
  {
    question: {
      english:
        "I possess a special ability to communicate the truth of salvation",
      chinese: "我有能力與別人講述真正的救恩。",
    },
    gift: SpiritualGifts.Evangelism,
    index: 5,
  },
  {
    question: {
      english: "I have the ability to make critical decisions when necessary",
      chinese: "我可以在關鍵的時候做出決策的能力。",
    },
    gift: SpiritualGifts.Leadership,
    index: 6,
  },
  {
    question: {
      english: "I am sensitive to the hurts of people",
      chinese: "我能敏銳地察覺到別人的傷害。",
    },
    gift: SpiritualGifts.Mercy,
    index: 7,
  },
  {
    question: {
      english: "I experience joy in meeting needs through sharing possessions",
      chinese: "當我與別人分享我所擁有的時候，我感到喜樂。",
    },
    gift: SpiritualGifts.Giving,
    index: 8,
  },
  {
    question: { english: "I enjoy studying", chinese: "我喜歡學習。" },
    gift: SpiritualGifts.Knowledge,
    index: 9,
  },
  {
    question: {
      english: "I have delivered God’s message of warning and judgment",
      chinese: "我曾經把有關神的警告和判斷的信息告訴別人。",
    },
    gift: SpiritualGifts.Prophecy,
    index: 10,
  },
  {
    question: {
      english:
        "I am able to sense the true motivation of persons and movements",
      chinese: "我能感受到別人和事情背後的真正動機。",
    },
    gift: SpiritualGifts.Discernment,
    index: 11,
  },
  {
    question: {
      english: "I have a special ability to trust God in difficult situations",
      chinese: "我在困難的情況下仍相信神。",
    },
    gift: SpiritualGifts.Faith,
    index: 12,
  },
  {
    question: {
      english:
        "I have a strong desire to contribute to the establishment of new churches",
      chinese: "我渴望用我的一切去建立新的教會。",
    },
    gift: SpiritualGifts.Apostleship,
    index: 13,
  },
  {
    question: {
      english:
        "I take action to meet physical and practical needs rather than merely talking about or planning to help",
      chinese: "當別人有需要時，我積極採取行動，而不是空談。",
    },
    gift: SpiritualGifts.ServiceHelps,
    index: 14,
  },
  {
    question: {
      english: "I enjoy entertaining guests in my home",
      chinese: "我享受在家裡招待客人。",
    },
    gift: SpiritualGifts.Hospitality,
    index: 15,
  },
  {
    question: {
      english:
        "I can adapt my guidance to fit the maturity of those working with me",
      chinese: "我能因應別人的成熟度來調整相關的指導。",
    },
    gift: SpiritualGifts.Leadership,
    index: 16,
  },
  {
    question: {
      english: "I can delegate and assign meaningful work",
      chinese: "我能有效地分配有意義的工作。",
    },
    gift: SpiritualGifts.Administration,
    index: 17,
  },
  {
    question: {
      english: "I have an ability and desire to teach",
      chinese: "我有能力及渴望從事教導的工作。",
    },
    gift: SpiritualGifts.Teaching,
    index: 18,
  },
  {
    question: {
      english: "I am usually able to analyze a situation correctly",
      chinese: "我通常能正確地分析情況。",
    },
    gift: SpiritualGifts.Wisdom,
    index: 19,
  },
  {
    question: {
      english: "I have a natural tendency to encourage others",
      chinese: "我經常自然地鼓勵他人。",
    },
    gift: SpiritualGifts.Exhortation,
    index: 20,
  },
  {
    question: {
      english:
        "I am willing to take the initiative in helping other Christians grow in their faith",
      chinese: "我願意主動地幫助其他基督徒靈命的成長。",
    },
    gift: SpiritualGifts.Shepherding,
    index: 21,
  },
  {
    question: {
      english:
        "I have an acute awareness of the emotions of other people, such as loneliness, pain, fear, and anger",
      chinese: "我能敏銳地察覺到別人的情感，例如孤獨、痛苦、恐懼和憤怒。",
    },
    gift: SpiritualGifts.Mercy,
    index: 22,
  },
  {
    question: {
      english: "I am a cheerful giver",
      chinese: "我是一個開朗的施予者。",
    },
    gift: SpiritualGifts.Giving,
    index: 23,
  },
  {
    question: {
      english: "I spend time digging into facts",
      chinese: "我花時間探討事實的真相。",
    },
    gift: SpiritualGifts.Knowledge,
    index: 24,
  },
  {
    question: {
      english: "I feel that I have a message from God to deliver to others",
      chinese: "我的使命是將上帝的訊息傳給他人。",
    },
    gift: SpiritualGifts.Prophecy,
    index: 25,
  },
  {
    question: {
      english: "I can recognize when a person is genuine/honest",
      chinese: "我可以分辨別人是否誠實/ 真實。",
    },
    gift: SpiritualGifts.Discernment,
    index: 26,
  },
  {
    question: {
      english:
        "I am a person of vision (a clear mental portrait of a preferable future given by God)  I am able to communicate vision in such a way that others commit to making the vision a reality",
      chinese:
        "我看見神的異象（由上帝啟示的未來） 。我能與人分享異象，及將它變為事實。",
    },
    gift: SpiritualGifts.Leadership,
    index: 27,
  },
  {
    question: {
      english:
        "I am willing to yield to God’s will rather than question and waver",
      chinese: "我願意完全順服神的旨意。(不作任何提問或動搖。)",
    },
    gift: SpiritualGifts.Faith,
    index: 28,
  },
  {
    question: {
      english:
        "I would like to be more active in getting the gospel to people in other lands",
      chinese: "我想更主動地將福音傳給各地的人。",
    },
    gift: SpiritualGifts.Apostleship,
    index: 29,
  },
  {
    question: {
      english: "It makes me happy to do things for people in need",
      chinese: "我喜歡幫助有需要的人。",
    },
    gift: SpiritualGifts.ServiceHelps,
    index: 30,
  },
  {
    question: {
      english: "I am successful in getting a group to do its work joyfully",
      chinese: "我可以使小組成員愉快地完成工作。",
    },
    gift: SpiritualGifts.Administration,
    index: 31,
  },
  {
    question: {
      english: "I am able to make strangers feel at ease",
      chinese: "我能夠讓陌生人感到放心。",
    },
    gift: SpiritualGifts.Hospitality,
    index: 32,
  },
  {
    question: {
      english: "I have the ability to plan learning approaches",
      chinese: "我能計劃學習的方法。",
    },
    gift: SpiritualGifts.Teaching,
    index: 33,
  },
  {
    question: {
      english: "I can identify those who need encouragement",
      chinese: "我能辨認需要被別人鼓勵的人。",
    },
    gift: SpiritualGifts.Exhortation,
    index: 34,
  },
  {
    question: {
      english:
        "I have trained Christians to be more obedient disciples of Christ",
      chinese: "我有訓練基督徒成為更順服的使徒。",
    },
    gift: SpiritualGifts.Shepherding,
    index: 35,
  },
  {
    question: {
      english:
        "I am willing to do whatever it takes to see others come to Christ",
      chinese: "我願意做任何事使人歸向基督。",
    },
    gift: SpiritualGifts.Evangelism,
    index: 36,
  },
  {
    question: {
      english: "I am attracted to people who are hurting",
      chinese: "我能吸引心靈受傷的人。",
    },
    gift: SpiritualGifts.Mercy,
    index: 37,
  },
  {
    question: {
      english: "I am a generous giver",
      chinese: "我是一個慷慨的施予者。",
    },
    gift: SpiritualGifts.Giving,
    index: 38,
  },
  {
    question: {
      english: "I am able to discover new truths",
      chinese: "我能夠發現新的真理。",
    },
    gift: SpiritualGifts.Knowledge,
    index: 39,
  },
  {
    question: {
      english:
        "I have spiritual insights from Scripture concerning issues and people that compel me to speak out",
      chinese: "我有從聖經而來的眼光看人和事，並逼切地說出有關的問題。",
    },
    gift: SpiritualGifts.Prophecy,
    index: 40,
  },
  {
    question: {
      english: "I can sense when a person is acting in accord with God’s will",
      chinese: "我能察看一個人的行事是否符合神的旨意。",
    },
    gift: SpiritualGifts.Discernment,
    index: 41,
  },
  {
    question: {
      english: "I can trust in God even when things look dark",
      chinese: "當事情不如意的時候，我亦能信靠神。",
    },
    gift: SpiritualGifts.Faith,
    index: 42,
  },
  {
    question: {
      english:
        "I can determine where God wants a group to go and help it get there",
      chinese: "我可以明白神對小組的心意，並帶領小組把目標實現。",
    },
    gift: SpiritualGifts.Leadership,
    index: 43,
  },
  {
    question: {
      english:
        "I have a strong desire to take the gospel to places where it has never been heard",
      chinese: "我強烈地渴望把福音傳到一些從沒有聽過福音的地方。",
    },
    gift: SpiritualGifts.Apostleship,
    index: 44,
  },
  {
    question: {
      english: "I enjoy reaching out to new people in my church and community",
      chinese: "​​我喜歡主動接觸在教會和社區新來的朋友。",
    },
    gift: SpiritualGifts.Hospitality,
    index: 45,
  },
  {
    question: {
      english: "I am sensitive to the needs of people",
      chinese: "我對人的需求很敏感。",
    },
    gift: SpiritualGifts.ServiceHelps,
    index: 46,
  },
  {
    question: {
      english:
        "I have been able to make effective and efficient plans for accomplishing the goals of a group",
      chinese: "我能夠做出一個有效率的計劃把目標完成。",
    },
    gift: SpiritualGifts.Administration,
    index: 47,
  },
  {
    question: {
      english:
        "I often am consulted when fellow Christians are struggling to make difficult decisions",
      chinese: "經常有基督徒在困難的時候向我諮詢意見。",
    },
    gift: SpiritualGifts.Wisdom,
    index: 48,
  },
  {
    question: {
      english:
        "I think about how I can comfort and encourage others in my congregation",
      chinese: "我常思想如何安慰和鼓勵其他會眾。",
    },
    gift: SpiritualGifts.Exhortation,
    index: 49,
  },
  {
    question: {
      english: "I am able to give spiritual direction to others",
      chinese: "我能夠給予別人屬靈的方向。",
    },
    gift: SpiritualGifts.Shepherding,
    index: 50,
  },
  {
    question: {
      english:
        "I am able to present the gospel to lost persons in such a way that they accept the Lord and His salvation",
      chinese: "我能夠將福音傳給失喪的人，使他們接受上帝和祂的救恩。",
    },
    gift: SpiritualGifts.Evangelism,
    index: 51,
  },
  {
    question: {
      english:
        "I possess an unusual capacity to understand the feelings of those in distress",
      chinese: "我有特殊的能力去明白人的困境/ 苦況。",
    },
    gift: SpiritualGifts.Mercy,
    index: 52,
  },
  {
    question: {
      english:
        "I have a strong sense of stewardship based on the recognition that God owns all things",
      chinese: "我有管家觀念 (明白神擁有所有的東西)。",
    },
    gift: SpiritualGifts.Giving,
    index: 53,
  },
  {
    question: {
      english:
        "I have delivered to other persons messages that have come directly from God",
      chinese: "我曾將從神直接而來的訊息傳遞給人。",
    },
    gift: SpiritualGifts.Prophecy,
    index: 54,
  },
  {
    question: {
      english: "I can sense when a person is acting under God’s leadership",
      chinese: "我可以感受到一個人是否在神的領導下行事。",
    },
    gift: SpiritualGifts.Discernment,
    index: 55,
  },
  {
    question: {
      english:
        "I try to be in God’s will continually and be available for His use",
      chinese: "我盡量每天活在神的旨意下，隨時能被祂使用。",
    },
    gift: SpiritualGifts.Faith,
    index: 56,
  },
  {
    question: {
      english:
        "I feel that I should take the gospel to people who have different beliefs from me",
      chinese: "我覺得我應該把福音傳給不同信仰的人。",
    },
    gift: SpiritualGifts.Apostleship,
    index: 57,
  },
  {
    question: {
      english: "I have an acute awareness of the physical needs of others",
      chinese: "我能敏銳地察覺到別人的物質需要。",
    },
    gift: SpiritualGifts.ServiceHelps,
    index: 58,
  },
  {
    question: {
      english:
        "I am skilled in setting forth positive and precise steps of action",
      chinese: "我能正面及有效地編排行動時所需的步驟。",
    },
    gift: SpiritualGifts.Administration,
    index: 59,
  },
  {
    question: {
      english: "I like to meet visitors at church and make them feel welcome",
      chinese: "我喜歡歡迎及接待教會的新朋友。",
    },
    gift: SpiritualGifts.Hospitality,
    index: 60,
  },
  {
    question: {
      english: "I explain Scripture in such a way that others understand it",
      chinese: "我以不同的方法解釋聖經，讓別人明白神的話語。",
    },
    gift: SpiritualGifts.Teaching,
    index: 61,
  },
  {
    question: {
      english: "I can usually see spiritual solutions to problems",
      chinese: "我通常可以看到問題的屬靈解決方法。",
    },
    gift: SpiritualGifts.Wisdom,
    index: 62,
  },
  {
    question: {
      english:
        "I welcome opportunities to help people who need comfort, consolation, encouragement, and counseling",
      chinese: "我歡迎不同的機會去幫助別人得到安慰，鼓勵和輔導。",
    },
    gift: SpiritualGifts.Exhortation,
    index: 63,
  },
  {
    question: {
      english: "I feel at ease in sharing Christ with nonbelievers",
      chinese: "我能從容地與非信徒分享基督。",
    },
    gift: SpiritualGifts.Evangelism,
    index: 64,
  },
  {
    question: {
      english:
        "I can influence others to perform to their highest God-given potential",
      chinese: "我可以影響別人，將他們從神所賜的潛力發揮出來。",
    },
    gift: SpiritualGifts.Leadership,
    index: 65,
  },
  {
    question: {
      english: "I recognize the signs of stress and distress in others",
      chinese: "我察覺到別人的壓力和苦惱。",
    },
    gift: SpiritualGifts.Mercy,
    index: 66,
  },
  {
    question: {
      english:
        "I desire to give generously and unpretentiously to worthwhile projects and ministries",
      chinese: "我渴望能謙遜和慷慨地給予/奉獻在有價值的事工上。",
    },
    gift: SpiritualGifts.Giving,
    index: 67,
  },
  {
    question: {
      english: "I can organize facts into meaningful relationships",
      chinese: "我可以將不同的事實組織成有意義的關係。",
    },
    gift: SpiritualGifts.Knowledge,
    index: 68,
  },
  {
    question: {
      english: "God gives me messages to deliver to His people",
      chinese: "上帝要我將訊息傳達給祂的子民。",
    },
    gift: SpiritualGifts.Prophecy,
    index: 69,
  },
  {
    question: {
      english:
        "I am able to sense whether people are being honest when they tell of their religious experiences",
      chinese: "我能察覺到別人是否誠實地講述他們的宗教經驗。",
    },
    gift: SpiritualGifts.Discernment,
    index: 70,
  },
  {
    question: {
      english:
        "I enjoy presenting the gospel to persons of other cultures and backgrounds",
      chinese: "我喜歡傳福音給其他文化和背景的人。",
    },
    gift: SpiritualGifts.Apostleship,
    index: 71,
  },
  {
    question: {
      english: "I enjoy doing little things that help people",
      chinese: "我喜歡做小事情去幫助別人。",
    },
    gift: SpiritualGifts.ServiceHelps,
    index: 72,
  },
  {
    question: {
      english: "I can give a clear, uncomplicated presentation",
      chinese: "我可以給一個清楚簡單的簡報。",
    },
    gift: SpiritualGifts.Teaching,
    index: 73,
  },
  {
    question: {
      english:
        "I have been able to apply biblical truth to the specific needs of my church",
      chinese: "我能夠將聖經真理應用到教會特殊的需求上。",
    },
    gift: SpiritualGifts.Wisdom,
    index: 74,
  },
  {
    question: {
      english: "God has used me to encourage others to live Christ like lives",
      chinese: "神使用我鼓勵他人過一個像基督的生命。",
    },
    gift: SpiritualGifts.Exhortation,
    index: 75,
  },
  {
    question: {
      english:
        "I have sensed the need to help other people become more effective in their ministries",
      chinese: "我意識到如何幫助其他人更有效地事奉。",
    },
    gift: SpiritualGifts.Shepherding,
    index: 76,
  },
  {
    question: {
      english: "I like to talk about Jesus to those who do not know Him",
      chinese: "我喜歡與非信徒談論耶穌。 ",
    },
    gift: SpiritualGifts.Evangelism,
    index: 77,
  },
  {
    question: {
      english:
        "I have the ability to make strangers feel comfortable in my home",
      chinese: "我有讓別人在我家感到賓至如歸的能力。",
    },
    gift: SpiritualGifts.Hospitality,
    index: 78,
  },
  {
    question: {
      english:
        "I have a wide range of study resources and know how to secure information",
      chinese: "我擁有廣泛的知識，並知道如何從中獲取資料。",
    },
    gift: SpiritualGifts.Knowledge,
    index: 79,
  },
  {
    question: {
      english:
        "I feel assured that a situation will change for the glory of God even when the situation seem impossible",
      chinese: "即使在不可能的情況下，我仍肯定事情會因為神的榮耀而改變。",
    },
    gift: SpiritualGifts.Faith,
    index: 80,
  },
];
