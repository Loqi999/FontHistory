const eras = [
  {
    id: "all",
    name: "全部",
  },
  {
    id: "serif",
    name: "衬线",
  },
  {
    id: "sans",
    name: "无衬线",
  },
  {
    id: "display",
    name: "展示",
  },
];

const eraCards = [
  {
    period: "古典源头",
    title: "Roman Capitals",
    tag: "衬线",
    group: "serif",
    titleFont: '"Cormorant Garamond", serif',
    summary: "西文字母的庄重原型，多见于古罗马纪念碑铭文，是后世许多大写字形的结构基础。",
    origin:
      "源自古罗马石刻与碑铭书写。笔画宽窄变化与收笔方式受到凿刻工具和书写笔势共同影响。",
    faces: "Trajan、Perpetua Titling、Cinzel",
    usage: "适合文化机构、电影海报、历史主题视觉与需要庄严感的标题。",
    caution: "更接近铭文式大写系统，不适合长篇正文；过度使用会显得仪式化和距离感过强。",
  },
  {
    period: "文艺复兴",
    title: "Humanist Serif",
    tag: "衬线",
    group: "serif",
    titleFont: '"Cormorant Garamond", Georgia, serif',
    summary: "受人文主义手抄书写影响，字形温和、轴线倾斜、笔画对比较低，阅读感自然。",
    origin:
      "15 世纪意大利印刷业吸收人文主义书写传统，形成更适合活字印刷且保留手写气息的字形。",
    faces: "Jenson、Centaur、Adobe Jenson",
    usage: "适合书籍、艺术出版、文化展览说明与强调历史气息的正文排版。",
    caution: "在强调科技感、工业感或极简品牌时可能显得过于古典，需要搭配更现代的界面元素。",
  },
  {
    period: "旧式体时代",
    title: "Old Style",
    tag: "衬线",
    group: "serif",
    titleFont: 'Baskerville, Georgia, "Times New Roman", serif',
    summary: "比人文主义体更成熟稳定，衬线柔和、字色均匀，是经典书籍排版的重要支柱。",
    origin:
      "16 至 18 世纪的欧洲印刷传统中逐渐成熟，既保留书写痕迹，又强化了活字系统的秩序感。",
    faces: "Garamond、Caslon、Bembo",
    usage: "适合正文阅读、学术出版、品牌叙事和需要经典可信感的设计。",
    caution: "不同版本的 Garamond 差异非常大，数字复刻质量不一，不能只看名字就直接使用。",
  },
  {
    period: "启蒙与理性",
    title: "Transitional",
    tag: "衬线",
    group: "serif",
    titleFont: 'Baskerville, "Times New Roman", serif',
    summary: "从旧式体向现代体过渡，笔画对比增强，结构更理性、清晰、克制。",
    origin:
      "18 世纪印刷工艺提升后，制版与纸张质量改善，使更精细、更高对比的字形成为可能。",
    faces: "Baskerville、Times New Roman、Mrs Eaves",
    usage: "适合杂志、报刊、品牌正文与需要平衡经典感和现代感的场景。",
    caution: "看似通用，但不同字号下的气质差别很大；标题与正文要分别检查字重和间距。",
  },
  {
    period: "现代印刷",
    title: "Didone",
    tag: "衬线",
    group: "serif",
    titleFont: '"Bodoni 72", Didot, "Times New Roman", serif',
    summary: "高对比、细直衬线与强烈垂直轴线，呈现出戏剧化、时尚化和高度编辑感。",
    origin:
      "18 世纪末到 19 世纪初，受到理性主义审美与印刷技术进步推动，追求更纯粹的几何和对比。",
    faces: "Didot、Bodoni、Walbaum",
    usage: "适合时尚杂志、品牌标题、海报与需要强烈视觉辨识度的场景。",
    caution: "小字号和低分辨率下易失去细节，不宜长篇正文；屏幕端要特别注意字重与抗锯齿效果。",
  },
  {
    period: "工业革命",
    title: "Slab Serif",
    tag: "展示",
    group: "display",
    titleFont: 'Rockwell, "Roboto Slab", Georgia, serif',
    summary: "衬线粗壮结实、气质醒目，是广告、招牌和海报时代的重要产物。",
    origin:
      "19 世纪城市商业竞争加剧，广告印刷需要更强识别度，于是出现重量感突出的衬线结构。",
    faces: "Clarendon、Rockwell、Egyptienne",
    usage: "适合海报、标题、包装、复古品牌与需要强烈存在感的版面。",
    caution: "长文阅读会显得笨重，字距处理不好时容易拥挤；注意避免整页都过于“喊叫”。",
  },
  {
    period: "早期无衬线",
    title: "Grotesque Sans",
    tag: "无衬线",
    group: "sans",
    titleFont: '"Arial Narrow", Arial, sans-serif',
    summary: "最早成体系的无衬线风格，结构带有工业气息，略显古怪却富有个性。",
    origin:
      "19 世纪商业展示与标识需求催生无衬线字体，最初常被视为新奇甚至“怪异”的字形。",
    faces: "Akzidenz-Grotesk、Monotype Grotesque、News Gothic",
    usage: "适合海报、标识、品牌系统与希望呈现都市工业气质的设计。",
    caution: "字形细节不如新古罗特体统一，搭配时要控制层级，否则版面会显得生硬。",
  },
  {
    period: "现代主义",
    title: "Neo-Grotesque",
    tag: "无衬线",
    group: "sans",
    titleFont: 'Helvetica, Arial, sans-serif',
    summary: "更中性、更系统化的无衬线风格，成为 20 世纪国际主义视觉语言的重要代表。",
    origin:
      "20 世纪中叶现代主义设计强调信息效率与秩序，促成了更标准化的无衬线家族发展。",
    faces: "Helvetica、Univers、Arial",
    usage: "适合导视、品牌识别、企业沟通和大量功能性界面文本。",
    caution: "“中性”并不等于任何场景都合适。大段正文可能显得冷硬，品牌使用也容易趋同。",
  },
  {
    period: "人本界面",
    title: "Humanist Sans",
    tag: "无衬线",
    group: "sans",
    titleFont: '"Gill Sans", "Trebuchet MS", sans-serif',
    summary: "保留书写节奏与开放字腔，让无衬线在屏幕和正文中更具亲和力与可读性。",
    origin:
      "随着数字界面和导视系统发展，设计师希望无衬线兼顾效率与阅读舒适，于是回收了人文主义特征。",
    faces: "Gill Sans、Frutiger、Myriad、Segoe UI",
    usage: "适合界面设计、机场导视、教育产品与需要现代但不冰冷的品牌。",
    caution: "不同字体的人文程度差异很大，别只凭分类做决定；中英混排时也要单独测试气质是否协调。",
  },
];

const previewStyles = [
  { label: "Roman", fontFamily: '"Cormorant Garamond", serif' },
  { label: "Old Style", fontFamily: 'Georgia, "Times New Roman", serif' },
  { label: "Didone", fontFamily: '"Bodoni 72", Didot, serif' },
  { label: "Grotesque", fontFamily: '"Arial Narrow", Arial, sans-serif' },
  { label: "Neo-Grotesque", fontFamily: 'Helvetica, Arial, sans-serif' },
  { label: "Humanist Sans", fontFamily: '"Gill Sans", "Trebuchet MS", sans-serif' },
];

const filtersRoot = document.querySelector("#filters");
const erasRoot = document.querySelector("#eras");
const previewList = document.querySelector("#previewList");
const previewInput = document.querySelector("#previewText");
const template = document.querySelector("#eraCardTemplate");

let activeFilter = "all";

function renderFilters() {
  eras.forEach((filter) => {
    const button = document.createElement("button");
    button.className = `filter-chip${filter.id === activeFilter ? " active" : ""}`;
    button.type = "button";
    button.textContent = filter.name;
    button.addEventListener("click", () => {
      activeFilter = filter.id;
      renderFiltersState();
      renderEraCards();
    });
    filtersRoot.appendChild(button);
  });
}

function renderFiltersState() {
  [...filtersRoot.children].forEach((button, index) => {
    const selected = eras[index].id === activeFilter;
    button.classList.toggle("active", selected);
  });
}

function renderEraCards() {
  erasRoot.innerHTML = "";

  eraCards
    .filter((era) => activeFilter === "all" || era.group === activeFilter)
    .forEach((era) => {
      const fragment = template.content.cloneNode(true);
      const card = fragment.querySelector(".era-card");

      fragment.querySelector(".era-period").textContent = era.period;
      fragment.querySelector(".era-tag").textContent = era.tag;
      fragment.querySelector(".era-title").textContent = era.title;
      fragment.querySelector(".era-title").style.fontFamily = era.titleFont;
      fragment.querySelector(".era-summary").textContent = era.summary;
      fragment.querySelector(".origin").textContent = era.origin;
      fragment.querySelector(".faces").textContent = era.faces;
      fragment.querySelector(".usage").textContent = era.usage;
      fragment.querySelector(".caution").textContent = era.caution;

      erasRoot.appendChild(fragment);
    });
}

function renderPreviewCards(text) {
  previewList.innerHTML = "";

  previewStyles.forEach((style) => {
    const card = document.createElement("article");
    const label = document.createElement("p");
    const sample = document.createElement("p");

    card.className = "preview-card";
    label.className = "preview-style";
    label.textContent = style.label;
    sample.textContent = text;
    sample.style.fontFamily = style.fontFamily;

    card.append(label, sample);
    previewList.appendChild(card);
  });
}

previewInput.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  renderPreviewCards(value || "Typography reveals the spirit of its time.");
});

renderFilters();
renderEraCards();
renderPreviewCards(previewInput.value);
