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

type Question = {
  question: string;
  chinese?: string;
  gift: SpiritualGifts; // make non-optional!
  index: number;
};

export const SPIRITUAL_GIFTS_QUESTIONS: Question[] = [
  {
    question:
      "I have the ability to organize ideas, resources, time, and people effectively",
    gift: SpiritualGifts.Administration,
    index: 1,
  },
  {
    question: "I am willing to study and prepare for the task of teaching",
    gift: SpiritualGifts.Teaching,
    index: 2,
  },
  {
    question: "I am able to relate the truths of God to specific situations",
    gift: SpiritualGifts.Wisdom,
    index: 3,
  },
  {
    question: "I have a God-given ability to help others grow in their faith",
    gift: SpiritualGifts.Shepherding,
    index: 4,
  },
  {
    question:
      "I possess a special ability to communicate the truth of salvation",
    gift: SpiritualGifts.Evangelism,
    index: 5,
  },
  {
    question: "I have the ability to make critical decisions when necessary",
    gift: SpiritualGifts.Leadership,
    index: 6,
  },
  {
    question: "I am sensitive to the hurts of people",
    gift: SpiritualGifts.Mercy,
    index: 7,
  },
  {
    question: "I experience joy in meeting needs through sharing possessions",
    gift: SpiritualGifts.Giving,
    index: 8,
  },
  { question: "I enjoy studying", gift: SpiritualGifts.Knowledge, index: 9 },
  {
    question: "I have delivered God’s message of warning and judgment",
    gift: SpiritualGifts.Prophecy,
    index: 10,
  },
  {
    question: "I am able to sense the true motivation of persons and movements",
    gift: SpiritualGifts.Discernment,
    index: 11,
  },
  {
    question: "I have a special ability to trust God in difficult situations",
    gift: SpiritualGifts.Faith,
    index: 12,
  },
  {
    question:
      "I have a strong desire to contribute to the establishment of new churches",
    gift: SpiritualGifts.Apostleship,
    index: 13,
  },
  {
    question:
      "I take action to meet physical and practical needs rather than merely talking about or planning to help",
    gift: SpiritualGifts.ServiceHelps,
    index: 14,
  },
  {
    question: "I enjoy entertaining guests in my home",
    gift: SpiritualGifts.Hospitality,
    index: 15,
  },
  {
    question:
      "I can adapt my guidance to fit the maturity of those working with me",
    gift: SpiritualGifts.Leadership,
    index: 16,
  },
  {
    question: "I can delegate and assign meaningful work",
    gift: SpiritualGifts.Administration,
    index: 17,
  },
  {
    question: "I have an ability and desire to teach",
    gift: SpiritualGifts.Teaching,
    index: 18,
  },
  {
    question: "I am usually able to analyze a situation correctly",
    gift: SpiritualGifts.Wisdom,
    index: 19,
  },
  {
    question: "I have a natural tendency to encourage others",
    gift: SpiritualGifts.Exhortation,
    index: 20,
  },
  {
    question:
      "I am willing to take the initiative in helping other Christians grow in their faith",
    gift: SpiritualGifts.Shepherding,
    index: 21,
  },
  {
    question:
      "I have an acute awareness of the emotions of other people, such as loneliness, pain, fear, and anger",
    gift: SpiritualGifts.Mercy,
    index: 22,
  },
  { question: "I am a cheerful giver", gift: SpiritualGifts.Giving, index: 23 },
  {
    question: "I spend time digging into facts",
    gift: SpiritualGifts.Knowledge,
    index: 24,
  },
  {
    question: "I feel that I have a message from God to deliver to others",
    gift: SpiritualGifts.Prophecy,
    index: 25,
  },
  {
    question: "I can recognize when a person is genuine/honest",
    gift: SpiritualGifts.Discernment,
    index: 26,
  },
  {
    question:
      "I am a person of vision (a clear mental portrait of a preferable future given by God)  I am able to communicate vision in such a way that others commit to making the vision a reality",
    gift: SpiritualGifts.Leadership,
    index: 27,
  },
  {
    question:
      "I am willing to yield to God’s will rather than question and waver",
    gift: SpiritualGifts.Faith,
    index: 28,
  },
  {
    question:
      "I would like to be more active in getting the gospel to people in other lands",
    gift: SpiritualGifts.Apostleship,
    index: 29,
  },
  {
    question: "It makes me happy to do things for people in need",
    gift: SpiritualGifts.ServiceHelps,
    index: 30,
  },
  {
    question: "I am successful in getting a group to do its work joyfully",
    gift: SpiritualGifts.Administration,
    index: 31,
  },
  {
    question: "I am able to make strangers feel at ease",
    gift: SpiritualGifts.Hospitality,
    index: 32,
  },
  {
    question: "I have the ability to plan learning approaches",
    gift: SpiritualGifts.Teaching,
    index: 33,
  },
  {
    question: "I can identify those who need encouragement",
    gift: SpiritualGifts.Exhortation,
    index: 34,
  },
  {
    question:
      "I have trained Christians to be more obedient disciples of Christ",
    gift: SpiritualGifts.Shepherding,
    index: 35,
  },
  // {
  //   question:
  //     "I am willing to do whatever it takes to see others come to Christ",
  // },
  // { question: "I am attracted to people who are hurting" },
  // { question: "I am a generous giver" },
  // { question: "I am able to discover new truths" },
  // {
  //   question:
  //     "I have spiritual insights from Scripture concerning issues and people that compel me to speak out",
  // },
  // { question: "I can sense when a person is acting in accord with God’s will" },
  // { question: "I can trust in God even when things look dark" },
  // {
  //   question:
  //     "I can determine where God wants a group to go and help it get there",
  // },
  // {
  //   question:
  //     "I have a strong desire to take the gospel to places where it has never been heard",
  // },
  // { question: "I enjoy reaching out to new people in my church and community" },
  // { question: "I am sensitive to the needs of people" },
  // {
  //   question:
  //     "I have been able to make effective and efficient plans for accomplishing the goals of a group",
  // },
  // {
  //   question:
  //     "I often am consulted when fellow Christians are struggling to make difficult decisions",
  // },
  // {
  //   question:
  //     "I think about how I can comfort and encourage others in my congregation",
  // },
  // { question: "I am able to give spiritual direction to others" },
  // {
  //   question:
  //     "I am able to present the gospel to lost persons in such a way that they accept the Lord and His salvation",
  // },
  // {
  //   question:
  //     "I possess an unusual capacity to understand the feelings of those in distress",
  // },
  // {
  //   question:
  //     "I have a strong sense of stewardship based on the recognition that God owns all things",
  // },
  // {
  //   question:
  //     "I have delivered to other persons messages that have come directly from God",
  // },
  // { question: "I can sense when a person is acting under God’s leadership" },
  // {
  //   question:
  //     "I try to be in God’s will continually and be available for His use",
  // },
  // {
  //   question:
  //     "I feel that I should take the gospel to people who have different beliefs from me",
  // },
  // { question: "I have an acute awareness of the physical needs of others" },
  // {
  //   question:
  //     "I am skilled in setting forth positive and precise steps of action",
  // },
  // { question: "I like to meet visitors at church and make them feel welcome" },
  // { question: "I explain Scripture in such a way that others understand it" },
  // { question: "I can usually see spiritual solutions to problems" },
  // {
  //   question:
  //     "I welcome opportunities to help people who need comfort, consolation, encouragement, and counseling",
  // },
  // { question: "I feel at ease in sharing Christ with nonbelievers" },
  // {
  //   question:
  //     "I can influence others to perform to their highest God-given potential",
  // },
  // { question: "I recognize the signs of stress and distress in others" },
  // {
  //   question:
  //     "I desire to give generously and unpretentiously to worthwhile projects and ministries",
  // },
  // { question: "I can organize facts into meaningful relationships" },
  // { question: "God gives me messages to deliver to His people" },
  // {
  //   question:
  //     "I am able to sense whether people are being honest when they tell of their religious experiences",
  // },
  // {
  //   question:
  //     "I enjoy presenting the gospel to persons of other cultures and backgrounds",
  // },
  // { question: "I enjoy doing little things that help people" },
  // { question: "I can give a clear, uncomplicated presentation" },
  // {
  //   question:
  //     "I have been able to apply biblical truth to the specific needs of my church",
  // },
  // { question: "God has used me to encourage others to live Christ like lives" },
  // {
  //   question:
  //     "I have sensed the need to help other people become more effective in their ministries",
  // },
  // { question: "I like to talk about Jesus to those who do not know Him" },
  // {
  //   question:
  //     "I have the ability to make strangers feel comfortable in my home",
  // },
  // {
  //   question:
  //     "I have a wide range of study resources and know how to secure information",
  // },
  // {
  //   question:
  //     "I feel assured that a situation will change for the glory of God even when the situation seem impossible",
  // },
];
