const timelineSystems = [
  {
    id: "latin",
    name: "Latin",
    caption: "拉丁字母",
    summary:
      "拉丁字母适合先按典型国家传统来理解，因为真正影响今天字体气质的，往往是意大利、法国、德国、瑞士、美国这些历史路径。",
    featuredCountries: [
      {
        id: "italy",
        name: "意大利",
        role: "文艺复兴源头",
        summary: "先看意大利，最容易看懂拉丁字母如何从手写与碑铭进入早期活字排印。",
        highlight: "Humanist、Jenson、早期 Roman types",
        focus: "看手写笔势怎样变成正文秩序，理解旧式体的起点。",
        eras: [
          {
            period: "公元前 1 世纪 - 公元 5 世纪",
            title: "CAPITALIS MONUMENTALIS",
            tag: "Roman square capitals",
            structureTags: ["碑铭原型", "庄重纪念性", "大写字母系统", "几何骨架"],
            titleFont: 'Georgia, "Times New Roman", serif',
            summary: "古罗马碑铭为后世拉丁字母的大写结构和比例美感提供了原型。",
            origin:
              "石刻工艺与宽笔书写共同塑造了粗细变化、节奏与收笔方式，后世标题字常回到这里借气质。",
            faces: "Trajan Pro、Cinzel、Marcellus SC",
            usage: "适合历史标题、文化机构视觉、纪念性海报和大写铭文场景。",
            caution: "这是大写碑铭传统，不应被理解成自带现代小写的一般正文字体。",
          },
          {
            period: "15 世纪中叶 - 16 世纪",
            title: "Romano Umanistico",
            tag: "Early roman type",
            structureTags: ["人文笔势", "低对比衬线", "斜向应力", "正文友好"],
            titleFont: 'Baskerville, Georgia, "Times New Roman", serif',
            summary: "意大利的人文主义书写进入印刷后，形成了早期 Roman type 的核心范式，也是后世旧式体的重要源头。",
            origin:
              "抄写传统与早期活字印刷在威尼斯等城市汇合，让书写气息和排版秩序首次稳定结合。",
            faces: "Jenson、Bembo、Centaur",
            usage: "适合书籍正文、文化出版、需要经典可信感的版面。",
            caution: "数码复刻差异很大，同名旧式体未必都保留人文味道。",
          },
          {
            period: "16 世纪初至今",
            title: "Italico",
            tag: "Italic tradition",
            tagZh: "意大利斜体传统",
            structureTags: ["斜体源头", "书写速度感", "人文手写延续", "强调与题签"],
            titleFont: 'Baskerville, Georgia, "Times New Roman", serif',
            summary: "意大利不仅提供了 Roman 正文字型，也提供了后世几乎所有拉丁排版都会用到的 italic 传统。",
            origin:
              "Aldus Manutius 时代的斜体把书记官手写的快速节奏转进印刷，后来演变成拉丁排版里强调、引文和辅助层级的重要工具。",
            faces: "Bembo Italic、Centaur Italic、EB Garamond Italic",
            usage: "适合引文、书名、题签、小块强调和需要文艺复兴书写感的版面。",
            caution: "斜体更适合承担辅助层级，而不是大段正文；项目里不要把它误当成独立正文系统。",
          },
        ],
      },
      {
        id: "france",
        name: "法国",
        role: "古典与现代体",
        summary: "法国路径适合解释拉丁字体如何从优雅正文走向高对比的编辑时尚感。",
        highlight: "Garamond、Didot、法式古典排版",
        focus: "看古典理性怎样一步步推到现代体的戏剧化对比。",
        eras: [
          {
            period: "16 世纪 - 17 世纪",
            title: "Romain de la Renaissance",
            tag: "Garalde tradition",
            structureTags: ["古典正文", "书卷气", "低对比衬线", "细腻节奏"],
            titleFont: 'Baskerville, Georgia, "Times New Roman", serif',
            summary: "法国 Renaissance Roman 传统让 Garamond 一类字体成为经典正文与书籍气质的重要代表。",
            origin:
              "法式古典排印把旧式体推向更精致、更均衡的文字节奏，影响了长期的图书排版审美。",
            faces: "Garamond、Sabon、EB Garamond",
            usage: "适合文化品牌、长文排版、学术出版。",
            caution: "过度追求优雅容易牺牲屏幕环境下的小字号稳定性。",
          },
          {
            period: "18 世纪末 - 19 世纪初",
            title: "Didot",
            tag: "Modern serif",
            structureTags: ["高对比笔画", "垂直轴线", "细直衬线", "时尚编辑感"],
            titleFont: 'Didot, "Times New Roman", serif',
            summary: "法国现代体传统以 Didot 家族最为典型，把拉丁字体推向更高对比、更强秩序感和更显著的编辑气质。",
            origin:
              "纸张和印刷精度提升后，高对比与细衬线成为可实现的视觉语言，也带来了更强的编辑感。",
            faces: "Didot、HTF Didot、GFS Didot",
            usage: "适合杂志标题、品牌主视觉、海报。",
            caution: "小字号和低分辨率下很容易丢细节，不适合默认当通用正文。",
          },
          {
            period: "17 世纪末 - 18 世纪",
            title: "Romain du Roi",
            tag: "Rationalized roman",
            tagZh: "理性化罗马体",
            structureTags: ["国家规范化", "理性比例", "古典向现代过渡", "编辑秩序感"],
            titleFont: 'Baskerville, Georgia, "Times New Roman", serif',
            summary: "在 Garamond 与 Didot 之间，法国还发展出更理性化、更受规范控制的 roman 方向，它是现代体出现前的重要过渡层。",
            origin:
              "Romain du Roi 把字母从工匠个人手感进一步推向制度化和理性化，帮助法国排印走向更强的秩序与均衡。",
            faces: "Fournier、Spectral、Kepler",
            usage: "适合文化编辑、正文与标题之间的中间层级，以及想要古典但不过分华丽的项目。",
            caution: "它不像 Didot 那样戏剧化，所以在品牌视觉里更像节制的编辑感，而不是高时尚感。",
          },
        ],
      },
      {
        id: "germany",
        name: "德国",
        role: "黑体字与工业转向",
        summary: "德国是理解拉丁字体内部断裂感的关键入口，一边保留黑体字，一边走向工业无衬线。",
        highlight: "Fraktur、Akzidenz-Grotesk、现代主义前夜",
        focus: "看历史传统和工业现代性如何在同一文化里并存。",
        eras: [
          {
            period: "13 世纪 - 20 世纪上半叶",
            title: "Textura / Fraktur",
            tag: "Textura / Fraktur",
            structureTags: ["密集竖笔", "黑字传统", "书写到印刷延续", "文化身份强"],
            titleFont: 'Georgia, "Times New Roman", serif',
            summary: "黑字传统在德语文化中长期保有正式性和文化身份象征，但 Textura 与 Fraktur 并不是完全同一阶段、同一用途的单一类别。",
            origin:
              "从中世纪抄写到近代印刷，德语区长期保留黑字传统，使其与 Roman/Antiqua 路径并行存在。",
            faces: "Fette Fraktur、UnifrakturMaguntia、Walbaum-Fraktur",
            usage: "适合历史叙事、传统工艺、强烈文化记忆型视觉。",
            caution: "讲解时应避免把所有黑字都混成一种风格，也不要把它们只当作暗黑装饰。",
          },
          {
            period: "19 世纪初 - 19 世纪末",
            title: "Grotesk",
            tag: "Early sans-serif",
            structureTags: ["早期无衬线", "工业气息", "节奏偏硬", "个性明显"],
            titleFont: '"Arial Narrow", Arial, sans-serif',
            summary: "德国语境里的工业化和商业展示需求，推动了早期无衬线的普及与定型。",
            origin:
              "无衬线在这里最初并不追求中性，而是承载工业时代的新奇、效率和都市气息。",
            faces: "Akzidenz-Grotesk、Breite Grotesk、Monotype Grotesque",
            usage: "适合标识、海报、工业和交通信息系统。",
            caution: "若层级和字距控制不好，早期无衬线很容易显得生硬。",
          },
          {
            period: "19 世纪 - 20 世纪上半叶",
            title: "Antiqua",
            tag: "Roman / Antiqua",
            tagZh: "罗马体／Antiqua",
            structureTags: ["与黑字并行", "现代正文转向", "出版理性", "文化争议"],
            titleFont: 'Baskerville, Georgia, "Times New Roman", serif',
            summary: "德国不只有黑字，Antiqua 与 Fraktur 的长期并行与争论，本身就是理解德语排印现代化的关键。",
            origin:
              "当人文主义 Roman 在欧洲扩散时，德国长期保留黑字传统；后来 Antiqua 逐步成为现代出版与国际沟通的更稳定方案。",
            faces: "Walbaum、Times New Roman、Sabon",
            usage: "适合说明德语区从黑字走向现代正文排版的历史过渡，也适合书籍与文化出版。",
            caution: "如果只讲 Fraktur 而不讲 Antiqua，用户会误以为德国拉丁字母史只剩黑字这条线。",
          },
        ],
      },
      {
        id: "switzerland",
        name: "瑞士",
        role: "国际主义设计",
        summary: "瑞士最适合解释为什么现代设计这么爱“中性无衬线”和系统化网格。",
        highlight: "Helvetica、Univers、Swiss Style",
        focus: "看信息效率、秩序和中性如何变成国际视觉规范。",
        eras: [
          {
            period: "1950 年代至今",
            title: "Neue Grotesk",
            tag: "Sans-serif",
            structureTags: ["中性无衬线", "系统化家族", "信息效率", "秩序感强"],
            titleFont: "Helvetica, Arial, sans-serif",
            summary: "瑞士把无衬线推向高度系统化，成为国际主义视觉语言最常见的入口。",
            origin:
              "现代主义设计需要更标准化、更可扩展的信息工具，于是出现了可跨媒介使用的大型无衬线家族。",
            faces: "Helvetica、Univers、Neue Haas Grotesk",
            usage: "适合企业识别、导视、功能性界面和规范化信息设计。",
            caution: "中性并不等于对所有品牌都有效，容易带来冷感和同质化。",
          },
        ],
      },
      {
        id: "usa",
        name: "美国",
        role: "新闻与数字系统",
        summary: "美国路径更适合解释字体怎样从印刷媒体一路进入操作系统、办公软件和界面产品。",
        highlight: "News Gothic、Cheltenham、系统字体传统",
        focus: "看功能性和大规模传播需求怎样塑造现代字体选择。",
        eras: [
          {
            period: "19 世纪末 - 20 世纪中叶",
            title: "American Newspaper Types",
            tag: "News and publishing",
            structureTags: ["报刊正文", "高信息密度", "可信语气", "出版标准化"],
            titleFont: 'Baskerville, Georgia, "Times New Roman", serif',
            summary: "美国新闻和出版体系把一批高效率报刊字体推成了大众熟悉的阅读语气，但这不等于它们都起源于美国。",
            origin:
              "报刊和商业出版需要稳定、经济、可复制的字形，于是适合高密度信息排版的字体长期占据中心位置。",
            faces: "News Gothic、Cheltenham、Franklin Gothic",
            usage: "适合新闻、企业文档、说明文本和高密度信息页面。",
            caution: "它们常被误当作“默认就安全”，但品牌语气未必匹配。",
          },
          {
            period: "1990 年代至今",
            title: "Screen and Interface Sans",
            tag: "Interface sans-serif",
            structureTags: ["开放字腔", "人文节奏", "亲和阅读", "界面友好"],
            titleFont: '"Trebuchet MS", Verdana, sans-serif',
            summary: "在数字产品和办公系统里，面向屏幕优化的无衬线成为美国软件和互联网界面的常见解法。",
            origin:
              "屏幕阅读和跨平台使用推动字体从印刷逻辑转向界面逻辑，强调清晰、亲和和兼容性。",
            faces: "Verdana、Trebuchet MS、Tahoma、Segoe UI",
            usage: "适合网页、教育产品、企业系统和跨平台界面。",
            caution: "跨平台替换后气质可能明显变化，中英混排也要单独测试。",
          },
        ],
      },
    ],
  },
  {
    id: "arabic",
    name: "العربية",
    caption: "阿拉伯字母",
    summary:
      "阿拉伯字母更适合按语言文化圈和典型历史语境来理解，因为同一套字母在阿拉伯世界、伊朗、奥斯曼土耳其语环境和南亚会长出完全不同的视觉传统。",
    featuredCountries: [
      {
        id: "arab-world",
        name: "阿拉伯世界",
        role: "经典书法传统",
        summary: "这里最适合建立阿拉伯字母的基础认知，尤其是正文和装饰两条核心传统。",
        highlight: "Kufic、Naskh、经典 Qur'anic tradition",
        focus: "先看正文排版和纪念性书法是如何分工的。",
        eras: [
          {
            period: "7 世纪至今",
            title: "كوفي",
            tag: "Kufic",
            structureTags: ["方整角化", "纪念碑感", "装饰展示型", "历史气质强"],
            titleFont: 'Georgia, "Times New Roman", serif',
            summary: "Kufic 是阿拉伯书法中最早被清晰辨识的一类传统之一，常见于纪念性和宗教语境。",
            origin:
              "它常与古兰经抄本和建筑装饰相关，强调稳定、方整和装饰化的节奏。",
            faces: "Noto Kufi Arabic、Aref Kufi、Reem Kufi",
            usage: "适合纪念性标题、文化展陈、建筑图形。",
            caution: "更像展示和装饰传统，不适合承担现代长文正文。",
          },
          {
            period: "11 世纪至今",
            title: "ثلث",
            tag: "Thuluth",
            tagZh: "苏鲁斯体",
            structureTags: ["大型标题", "宗教铭文", "曲线优雅", "装饰与权威"],
            titleFont: 'Georgia, "Times New Roman", serif',
            summary: "如果说 Kufic 更偏早期纪念性，Thuluth 则更像中世纪以后大型标题、宗教铭文与庄严题写的经典形式。",
            origin:
              "Britannica 将 Thuluth 描述为中世纪伊斯兰世界优雅的大型手写体，常用于古兰经章节标题、宗教铭文和王公题写。",
            faces: "Aref Ruqaa、Amiri Quran、Noto Naskh Arabic",
            usage: "适合展陈标题、宗教文化项目、庄严题写和需要高仪式感的视觉场景。",
            caution: "它更偏大型展示与铭文传统，不能直接替代正文用的 Naskh 判断。",
          },
          {
            period: "10 世纪至今",
            title: "نسخ",
            tag: "Naskh",
            structureTags: ["正文基础", "圆润清晰", "书写到排版过渡", "长文可读"],
            titleFont: 'Georgia, "Times New Roman", serif',
            summary: "Naskh 是现代阿拉伯正文排版最关键的基础传统之一。",
            origin:
              "它长期服务于书籍和文书誊写，后来成为印刷和数字阿拉伯正文的重要基础。",
            faces: "Amiri、Traditional Arabic、Noto Naskh Arabic",
            usage: "适合书籍正文、新闻、教育内容和长时间阅读。",
            caution: "若正文想追求可靠可读性，通常应先从 Naskh 系判断。",
          },
        ],
      },
      {
        id: "iran",
        name: "伊朗",
        role: "波斯书写气质",
        summary: "伊朗路径适合解释同一套阿拉伯字母为何会在波斯语环境里长出更诗性、更下斜的节奏。",
        highlight: "Nastaliq、波斯出版传统",
        focus: "看语言文化怎样把字母系统拉向完全不同的美学。",
        eras: [
          {
            period: "14 世纪至今",
            title: "نستعلیق",
            tag: "Nastaliq",
            structureTags: ["下斜节奏", "层叠连写", "诗性气质", "复杂 shaping"],
            titleFont: 'Georgia, "Times New Roman", serif',
            summary: "Nastaliq 是波斯文传统里最具代表性的书写风格，明显不同于阿拉伯正文路径。",
            origin:
              "Britannica 将其概括为 15 至 16 世纪波斯书法中的主导风格，传统上与 Mīr ʿAlī of Tabriz 相关，并常被描述为结合了 naskhī 与 taʿlīq 的特征。",
            faces: "IranNastaliq、Awami Nastaliq、Urdu Nastaliq Unicode",
            usage: "适合诗歌、文化出版、强调波斯书写气质的内容。",
            caution: "数字排版复杂度明显高于 Naskh，不适合直接拿来当默认通用正文。",
          },
          {
            period: "20 世纪后期至今",
            title: "متن معاصر فارسی",
            tag: "Modern Persian text",
            tagZh: "现代波斯正文体",
            structureTags: ["现代正文", "报刊出版", "数字界面", "波斯语优化"],
            titleFont: 'Georgia, "Times New Roman", serif',
            summary: "现代伊朗排印并不只剩 Nastaliq 一条线，面向报刊、书籍和界面的现代波斯正文体同样关键。",
            origin:
              "随着现代出版、教育与数字产品扩大，波斯语逐步发展出更适合高密度阅读与界面使用的正文型和无衬线方案。",
            faces: "Vazirmatn、Tahoma、Noto Naskh Arabic",
            usage: "适合现代波斯语新闻、界面、长文阅读和公共传播项目。",
            caution: "如果只把伊朗等同于 Nastaliq，会忽略大部分现代数字产品真正采用的正文字型路线。",
          },
        ],
      },
      {
        id: "ottoman",
        name: "奥斯曼帝国语境",
        role: "奥斯曼行政书写",
        summary: "这一栏更准确地对应奥斯曼帝国晚期的土耳其语书写环境，而不是现代已经改用拉丁字母的土耳其共和国。",
        highlight: "Ruq'ah、Ottoman calligraphy",
        focus: "看更快、更简洁的书写怎样影响后来标题和标识设计。",
        eras: [
          {
            period: "18 世纪末 - 20 世纪初",
            title: "رقعة",
            tag: "Ruq'ah",
            structureTags: ["日常手写感", "快速简洁", "口语化标题", "标识友好"],
            titleFont: "Helvetica, Arial, sans-serif",
            summary: "Ruq'ah 以快速、简洁和日常功能性强著称，是理解奥斯曼晚期行政与日常书写的重要入口。",
            origin:
              "Ruq'ah 常被说明为在奥斯曼官署与日常文书中成熟起来的高效率书写形式，重点应放在奥斯曼行政语境，而不是把它直接当作现代土耳其国家字体传统。",
            faces: "Aref Ruqaa、Rakkas、Katibeh",
            usage: "适合说明奥斯曼行政书写、手写传统，以及后来标题和标识中更亲近的阿拉伯视觉表达。",
            caution:
              "现代土耳其共和国在 1928 年后改用拉丁字母，因此这条线更适合作为历史语境，而不是现代土耳其现行字体分类。",
          },
        ],
      },
      {
        id: "urdu",
        name: "南亚乌尔都语环境",
        role: "复杂排版代表",
        summary: "乌尔都语环境最适合解释阿拉伯字母在数字排版上为什么会遇到极高难度。",
        highlight: "Urdu Nastaliq、数字 shaping",
        focus: "看复杂连写对技术实现和阅读体验带来的要求。",
        eras: [
          {
            period: "20 世纪初至今",
            title: "اردو نستعلیق",
            tag: "Urdu Nastaliq",
            structureTags: ["高密度层叠", "复杂 shaping", "报刊传统", "技术门槛高"],
            titleFont: 'Georgia, "Times New Roman", serif',
            summary: "乌尔都语把 Nastaliq 推到更高复杂度，也让数字排版成为长期难题。",
            origin:
              "报刊与出版传统要求它在高密度文本中也能持续可用，因此 shaping 和字距处理格外关键。",
            faces: "Jameel Noori Nastaleeq、Mehr Nastaliq Web、Urdu Typesetting",
            usage: "适合乌尔都语文化出版、诗歌和传统视觉语境。",
            caution: "如果技术栈或字体支持不完整，版面很容易直接失控。",
          },
        ],
      },
    ],
  },
  {
    id: "devanagari",
    name: "देवनागरी",
    caption: "天城文",
    summary:
      "天城文不该套用西文 serif/sans 的思路，更适合按主要使用国家与文本场景理解，因为真正关键的是上横线、附标和连字 shaping。",
    featuredCountries: [
      {
        id: "india",
        name: "印度",
        role: "主流现代使用地",
        summary: "印度是理解现代天城文字体最直接的入口，能看到出版、教育和界面三种需求怎样同时作用。",
        highlight: "Hindi、Marathi、出版与界面字体",
        focus: "先看长文可读性和 shaping 质量，而不是先找 serif/sans 标签。",
        eras: [
          {
            period: "11 世纪至今",
            title: "देवनागरी",
            tag: "Modern Devanagari",
            structureTags: ["上横线系统", "附标密集", "连字 shaping", "正文与界面并重"],
            titleFont: '"Noto Serif Devanagari", serif',
            summary: "成熟期的 Devanagari 在 11 世纪后逐步定型，今天是多种印度语言的重要书写系统，重点在附标和连字质量。",
            origin:
              "Britannica 将 Devanagari 溯源到 Gupta 和更早的 Brahmi 传统，并指出其成熟形态约在 11 世纪出现。",
            faces: "Mukta、Hind、Kokila、Mangal",
            usage: "适合印地语、马拉地语等正文、界面与教育内容。",
            caution: "判断优劣时要先看附标定位、连字和字面节奏，而不只是看笔画风格。",
          },
          {
            period: "20 世纪末至今",
            title: "समकालीन प्रदर्शन",
            tag: "Display Devanagari",
            tagZh: "现代展示天城文",
            structureTags: ["标题展示", "粗重节奏", "品牌传播", "界面标题"],
            titleFont: '"Noto Sans Devanagari", sans-serif',
            summary: "除了正文型，现代印度项目也越来越依赖更适合标题、海报和品牌传播的展示型天城文。",
            origin:
              "广告、影视海报与数字产品把天城文从传统正文逻辑拉向更强对比、更高识别度和更适合短文本的展示方向。",
            faces: "Mukta、Hind、Noto Sans Devanagari",
            usage: "适合海报、品牌主视觉、视频封面、App 标题和短文本传播场景。",
            caution: "展示型更容易牺牲长文节奏，不适合直接拿去排高密度正文。",
          },
        ],
      },
      {
        id: "nepal",
        name: "尼泊尔",
        role: "区域语言应用",
        summary: "尼泊尔语的现代使用让我们看到同一书写系统在国家语境变化后会出现哪些阅读差异。",
        highlight: "Nepali、公共信息与教育字体",
        focus: "看语言环境变化如何影响词长、节奏和公共传播字体选择。",
        eras: [
          {
            period: "19 世纪末至今",
            title: "Nepali Devanagari",
            tag: "Regional application",
            tagZh: "尼泊尔语天城文",
            structureTags: ["公共信息", "教育阅读", "区域变体", "高频实用"],
            titleFont: '"Noto Sans Devanagari", sans-serif',
            summary: "尼泊尔语环境让天城文在公共信息和教育传播中形成了自己的实用侧重点。",
            origin:
              "同样使用 Devanagari，但词汇、排版习惯和公共空间应用会带来不同的阅读反馈。",
            faces: "Noto Sans Devanagari、Mukta、Kalimati",
            usage: "适合公共导视、教育与政府信息传播。",
            caution: "不要把印度常用字体默认当成所有天城文语境都同样合适。",
          },
        ],
      },
      {
        id: "sanskrit",
        name: "梵语学术圈",
        role: "文化与学术传承",
        summary: "梵语语境提醒我们，天城文不仅是现代信息工具，也是带有强烈文化权威性的学术载体。",
        highlight: "Sanskrit、传统文本排印",
        focus: "看古典文本需求怎样影响现代字体设计的细节可靠性。",
        eras: [
          {
            period: "19 世纪学术排印至今",
            title: "Scholarly Devanagari",
            tag: "Classical text tradition",
            structureTags: ["学术传承", "经典文本", "复杂附标", "校勘友好"],
            titleFont: '"Noto Serif Devanagari", serif',
            summary: "学术语境要求 Devanagari 在复杂标记、注释和长文中保持高可靠性。",
            origin:
              "古典文本排印不仅要求可读，还要求在细微差别上足够稳定，便于校勘和学术引用。",
            faces: "Sanskrit 2003、Chandas、Noto Serif Devanagari",
            usage: "适合宗教经典、学术出版、带注释的长文文本。",
            caution: "只看界面友好度往往不够，学术文本更依赖字符覆盖和排版细节。",
          },
        ],
      },
    ],
  },
  {
    id: "east-asia",
    name: "漢字 / かな / 한글",
    caption: "东亚文字",
    summary:
      "东亚文字更适合按中国、日本、韩国分别理解，因为即使共享一部分历史资源，现代字体的字面密度、混排逻辑和区域字形也完全不同。",
    featuredCountries: [
      {
        id: "china",
        name: "中国",
        role: "宋体与黑体体系",
        summary: "中国路径适合先建立高字面密度环境下的正文体和界面体分工认知。",
        highlight: "宋体、黑体、屏幕中文字体",
        focus: "先看长文阅读和数字界面是怎样分开解决的。",
        eras: [
          {
            period: "11 世纪雕版印刷至今",
            title: "宋體",
            tag: "Song typefaces",
            structureTags: ["印刷正文型", "横细竖粗", "长文阅读", "高密度字面"],
            titleFont: 'Georgia, "Times New Roman", serif',
            summary: "宋体是中文正文印刷最核心的类型之一，也是理解现代中文阅读传统的起点。",
            origin:
              "在今天的类型命名里，中文常称宋体，日文常称明朝体；这些名称相近，但具体字形与区域习惯并不完全相同。",
            faces: "SimSun、Source Han Serif SC、Songti SC",
            usage: "适合图书、报刊、说明文本和正式长文内容。",
            caution: "中文阅读对灰度和字面很敏感，不同宋体在屏幕上表现差异很大。",
          },
          {
            period: "20 世纪至今",
            title: "仿宋體",
            tag: "Fangsong",
            tagZh: "仿宋体",
            structureTags: ["公文常用", "细长笔势", "技术文书", "宋体变体"],
            titleFont: 'Georgia, "Times New Roman", serif',
            summary: "仿宋体在中文里不是小众装饰，而是长期影响公文、档案、工程图纸与正式材料气质的重要字型分支。",
            origin:
              "微软字体说明把 FangSong 描述为一种更轻、更细、横画带轻微斜势的宋／明系字体，现代中文官方与技术文书中长期可见。",
            faces: "FangSong、STFangsong、Source Han Serif SC",
            usage: "适合公文、档案、规范文件、技术材料和需要克制正式感的中文项目。",
            caution: "它并不等于“更文艺的宋体”，实际项目里更偏制度性和文件型气质。",
          },
          {
            period: "20 世纪初至今",
            title: "黑體",
            tag: "Chinese Gothic",
            structureTags: ["无衬线体系", "界面信息型", "字面密度高", "导视友好"],
            titleFont: "Helvetica, Arial, sans-serif",
            summary: "黑体成为中文现代界面、导视和信息密集场景里的核心工作字体。",
            origin:
              "近现代传播与数字界面推动中文从印刷正文逻辑转向屏幕和信息效率逻辑。",
            faces: "SimHei、Microsoft YaHei、Source Han Sans SC",
            usage: "适合 App、网页、系统界面、导视和标题。",
            caution: "常见问题是字面过满或灰度太重，小字号要特别小心。",
          },
        ],
      },
      {
        id: "japan",
        name: "日本",
        role: "明朝体与ゴシック体",
        summary: "日本路径最适合解释汉字和假名混排为什么会逼出完全不同的字体美学。",
        highlight: "明朝体、ゴシック体、假名设计",
        focus: "看混排环境怎样改变笔画节奏、留白和标题气质。",
        eras: [
          {
            period: "19 世纪末至今",
            title: "明朝体",
            tag: "Japanese Mincho",
            structureTags: ["汉字假名混排", "正文出版", "细腻留白", "文化杂志感"],
            titleFont: 'Georgia, "Times New Roman", serif',
            summary: "明朝体在日本不仅是正文体，也是出版美学和文学气质的重要载体。",
            origin:
              "Britannica 把 mincho 概括为大致相当于西文 roman 的日本正文字体，而汉字与假名混排又让它形成了自身的节奏控制方式。",
            faces: "Yu Mincho、Hiragino Mincho、Source Han Serif JP",
            usage: "适合书刊、文学、品牌出版和需要文雅气质的长文。",
            caution: "如果假名设计不够细致，整体气质会立刻变差，不是只看汉字部分就够。",
          },
          {
            period: "20 世纪中叶至今",
            title: "ゴシック体",
            tag: "Japanese Gothic",
            structureTags: ["现代信息型", "标题友好", "混排稳定", "品牌常用"],
            titleFont: "Helvetica, Arial, sans-serif",
            summary: "ゴシック体在日本既承担界面，也承担大量现代品牌与海报标题。",
            origin:
              "现代传播和视觉设计让日本无衬线发展出比中文黑体更强调节奏控制的一面。",
            faces: "Yu Gothic、Hiragino Sans、Source Han Sans JP",
            usage: "适合网页、海报、包装、品牌识别和界面。",
            caution: "同样叫无衬线，日文和中文版本不能直接混着理解或替换。",
          },
          {
            period: "1960 年代至今",
            title: "タイポス",
            tag: "Typos",
            tagZh: "Typos 试验字型",
            structureTags: ["实验排印", "现代主义", "介于明朝与哥特之间", "杂志设计"],
            titleFont: "Helvetica, Arial, sans-serif",
            summary: "Britannica 提到日本设计师在 1960 年代发展出第三种 Typos，它提醒我们日本排印并不只有明朝体和哥特体两极。",
            origin:
              "Typos 更像现代主义设计语境下对既有日文字型秩序的一次重组，让标题与杂志设计拥有介于正文与无衬线之间的新语气。",
            faces: "Tsukushi Mincho、Hiragino Sans、Yu Gothic",
            usage: "适合杂志设计、文化海报、书籍封面和需要现代实验感的日文项目。",
            caution: "它不是日本最常见的日常工作字型，更适合解释设计史与视觉语气，而不是默认系统字体。",
          },
        ],
      },
      {
        id: "korea",
        name: "韩国",
        role: "韩文字体现代化",
        summary: "韩国路径适合解释拼音式块状文字在现代屏幕与品牌中如何形成自己的排印逻辑。",
        highlight: "명조체、고딕체、Hangul typography",
        focus: "看韩文方块节奏怎样影响现代界面和品牌语气。",
        eras: [
          {
            period: "20 世纪中叶至今",
            title: "명조체",
            tag: "Myeongjo",
            structureTags: ["韩文正文", "较强对比", "正式出版", "传统阅读感"],
            titleFont: 'Georgia, "Times New Roman", serif',
            summary: "Myeongjo 对应韩文正文传统，是理解韩文正式阅读气质的基本入口。",
            origin:
              "韩文印刷在现代出版中逐步形成自己的正文节奏；与中文、日文共享部分汉字文化圈资源，但韩文的结构逻辑并不相同。",
            faces: "Batang、Nanum Myeongjo、Noto Serif KR",
            usage: "适合图书、正式说明和文化出版。",
            caution: "韩文不是简单的 CJK 同类项，字腔和节奏判断要单独做。",
          },
          {
            period: "20 世纪末至今",
            title: "궁서체",
            tag: "Formal Hangul",
            tagZh: "宫书体／正式书写体",
            structureTags: ["书写感强", "正式典雅", "仪式性", "传统文书气质"],
            titleFont: 'Georgia, "Times New Roman", serif',
            summary: "除了正文用的 명조체，韩国还有更接近书写与礼仪气质的 궁서체，它常出现在正式、纪念和传统文化语境中。",
            origin:
              "现代数码字体把更具书写意味的韩文形式保留下来，使它在证书、传统文化和仪式性版面中仍有明确位置。",
            faces: "Gungsuh、Batang、Nanum Myeongjo",
            usage: "适合证书、传统文化活动、纪念类视觉和需要正式书写感的韩文标题。",
            caution: "它的文化和仪式感很强，不适合默认用于现代产品界面或高频信息系统。",
          },
          {
            period: "20 世纪至今",
            title: "고딕체",
            tag: "Gothic Hangul",
            structureTags: ["界面主力", "现代品牌", "清晰阅读", "几何秩序"],
            titleFont: "Helvetica, Arial, sans-serif",
            summary: "고딕체是韩文现代界面与品牌中最常见的无衬线体系。",
            origin:
              "数字界面和城市品牌传播推动韩文发展出一套强调清晰与节奏的现代字体方案。",
            faces: "Malgun Gothic、Noto Sans KR、Pretendard",
            usage: "适合 App、网页、品牌系统和导视。",
            caution: "韩文的块面密度和字距容忍度与中文、日文都不完全一样。",
          },
        ],
      },
    ],
  },
  {
    id: "southeast-asia",
    name: "Mainland Southeast Asia",
    caption: "东南亚大陆文字",
    summary:
      "这里更准确地说是在讲东南亚大陆的婆罗米系衍生文字传统，而不是整个东南亚所有书写系统。泰文不该作为一级国家入口单独出现，它应放回与高棉、老挝、缅甸等文字并读的历史脉络中理解。",
    featuredCountries: [
      {
        id: "thailand",
        name: "泰国",
        role: "泰文字母传统",
        summary:
          "泰文字母属于婆罗米系在东南亚发展的一个分支，真正重要的入门点不是把它当国家标签看，而是先理解它在东南亚文字系统里的结构来源和现代分化。",
        highlight: "婆罗米系、古高棉影响、Looped、Loopless",
        focus: "先看泰文字母的系统来源，再看有头体和无头体在现代场景中的分工。",
        eras: [
          {
            period: "13 - 14 世纪形成，沿用至今",
            title: "อักษรไทย",
            tag: "Brahmic-derived script",
            structureTags: ["婆罗米系", "东南亚分支", "古高棉关联", "字母系统来源"],
            titleFont: '"Noto Serif Thai", serif',
            summary:
              "泰文字母不是独立悬空出现的，它属于婆罗米系文字在东南亚发展出来的一支。Britannica 将现代泰文字母概括为对更早书写系统的一种改造，并指出它通常被认为与高棉文字传统有关。",
            origin:
              "从更大的类型学上看，泰文字母应放回印度婆罗米系向东南亚传播和本地化演变的脉络中理解，而不是直接和拉丁、阿拉伯并列后停在国家标签上。",
            faces: "Noto Serif Thai、Kinnari、TH Sarabun",
            usage: "适合做东南亚文字系统入门、解释字母结构来源和区域传播脉络。",
            caution:
              "如果只把“泰国”当一级分类，会把国家、语言和书写系统混成一层，用户很容易误解它的历史位置。",
          },
          {
            period: "19 世纪末至今",
            title: "แบบมีหัว",
            tag: "Looped Thai",
            structureTags: ["带圈字头", "传统可读性", "教材出版常见", "结构辨识强"],
            titleFont: '"Noto Serif Thai", serif',
            summary: "有头体是许多人最熟悉的泰文样貌，字头的小圈让字形辨识和阅读节奏更稳定。",
            origin:
              "长期的出版、教育和正式阅读环境强化了有头体作为标准泰文外观的认知。",
            faces: "TH Sarabun、Browallia、Noto Serif Thai",
            usage: "适合教材、政府文件、正式出版和需要清楚区分字形的正文。",
            caution: "如果只用西文眼光看，会误以为这些圈只是装饰，其实它们和辨识度密切相关。",
          },
          {
            period: "20 世纪末至今",
            title: "แบบไม่มีหัว",
            tag: "Loopless Thai",
            structureTags: ["去圈简化", "现代界面感", "标题友好", "数字产品常见"],
            titleFont: '"Noto Sans Thai", sans-serif',
            summary: "无头体把字头圈简化或去掉，让泰文在界面和广告里显得更现代、更紧凑。",
            origin:
              "随着数字界面、标识和品牌传播发展，设计师开始大量采用更简洁的无头体方案。",
            faces: "Sukhumvit Set、DB Helvethaica、Noto Sans Thai",
            usage: "适合 App、网页、品牌标题、导视和现代广告。",
            caution: "无头体更现代，但并不自动等于更适合长文；正式和教育语境要谨慎判断。",
          },
          {
            period: "21 世纪至今",
            title: "การใช้ร่วมสมัย",
            tag: "Usage judgement",
            structureTags: ["场景判断", "正式与现代", "品牌语气", "跨文化误判"],
            titleFont: '"Noto Sans Thai", sans-serif',
            summary: "今天的泰文选择常常不是谁替代谁，而是看场景在有头体和无头体之间做判断。",
            origin:
              "传统阅读习惯和现代视觉风格长期并存，所以真正的科普重点是解释何时该选哪一边。",
            faces: "TH Sarabun、Sukhumvit Set、Noto Sans Thai",
            usage: "适合做字体选型教学、品牌策略说明和跨文化设计判断。",
            caution: "如果把无头体简单等同于“更高级”，或把有头体当成“更老派”，都很容易误判。",
          },
        ],
      },
      {
        id: "cambodia",
        name: "柬埔寨",
        role: "高棉字母传统",
        summary:
          "理解东南亚文字时，高棉字母非常关键，因为它既保留了深厚的婆罗米系传播痕迹，也常被拿来和泰文、老挝文的结构来源一起看。",
        highlight: "古高棉、婆罗米系、曲线结构、宗教与王朝文书",
        focus: "把高棉放进区域史里看，能更清楚理解泰文为何常被说明与高棉传统有关。",
        eras: [
          {
            period: "7 - 13 世纪形成，沿用至今",
            title: "អក្សរខ្មែរ",
            tag: "Brahmic-derived script",
            structureTags: ["婆罗米系", "古高棉传统", "王朝文书", "区域关键节点"],
            titleFont: '"Noto Serif Khmer", serif',
            summary:
              "高棉字母是东南亚最重要的书写传统之一，常被视为理解泰文、老挝文等区域文字演变时不可跳过的关键参照。",
            origin:
              "它源自婆罗米系向东南亚传播后的在地化发展，并在宗教、宫廷和碑刻传统中长期稳定使用。",
            faces: "Khmer OS、Noto Serif Khmer、MoolBoran",
            usage: "适合用来解释东南亚文字系统的历史层次，以及区域内部相互影响的路径。",
            caution:
              "如果只把高棉当成“柬埔寨国家字体”，会忽略它在整个东南亚文字史里的枢纽作用。",
          },
          {
            period: "20 世纪末至今",
            title: "អក្សរខ្មែរ",
            tag: "Regional application",
            tagZh: "区域应用",
            structureTags: ["曲线骨架", "高密度字面", "正文与标题差异", "数字化适配"],
            titleFont: '"Noto Sans Khmer", sans-serif',
            summary:
              "现代高棉字体既要保留传统书写气质，也要适应屏幕阅读和品牌传播，因此常出现展示体与正文字体的明确分工。",
            origin:
              "数字化环境推动设计师重新处理笔画密度、节奏和字面控制，让古典结构能在现代媒介里继续工作。",
            faces: "Noto Sans Khmer、Battambang、Kantumruy Pro",
            usage: "适合正文排版、文化展示、政府与教育资料，以及面向现代界面的高棉内容设计。",
            caution: "高棉字面和行距需求与拉丁体系差异很大，直接套西文排版参数容易出问题。",
          },
        ],
      },
      {
        id: "laos",
        name: "老挝",
        role: "老挝字母传统",
        summary:
          "老挝文字与泰文关系接近，但不应直接视作同一套系统的地区变体；它更常被说明为通过 Mon 传统进入区域传播后形成自己的历史路径、字形习惯和正式使用环境。",
        highlight: "Mon 传播、与泰文近缘、佛教文化、国家标准使用",
        focus: "先看它与泰文的近缘关系，再看老挝文在本地阅读习惯中的独立判断。",
        eras: [
          {
            period: "14 世纪形成，沿用至今",
            title: "ອັກສອນລາວ",
            tag: "Brahmic-derived script",
            structureTags: ["婆罗米系", "Mon 传播链条", "与泰文近缘", "音节结构"],
            titleFont: '"Noto Serif Lao", serif',
            summary:
              "老挝字母与泰文常被并列讨论，因为两者在历史来源和整体外观上有近缘关系，但老挝文仍有独立的规范和阅读经验。",
            origin:
              "更具体地说，Lao 常被放在婆罗米系经 Mon 传统传播后再分化的链条里理解；它和泰文有近缘关系，但不是互相替代的同一套字。",
            faces: "Phetsarath OT、Noto Serif Lao、DokChampa",
            usage: "适合说明东南亚近缘文字如何共享源流、却在国家与语言使用上各自独立。",
            caution:
              "因为外观相近就把泰文和老挝文互相替代，会同时造成语言、文化和可读性层面的误判。",
          },
          {
            period: "20 世纪末至今",
            title: "ອັກສອນລາວ",
            tag: "Regional application",
            tagZh: "区域应用",
            structureTags: ["正文可读性", "政府教育", "界面适配", "近缘辨识"],
            titleFont: '"Noto Sans Lao", sans-serif',
            summary:
              "现代老挝文字设计重点在于维持正文可读性，同时让字形在移动设备和公共信息系统里保持稳定辨识。",
            origin:
              "随着数字产品、公共服务与教育场景扩展，老挝文字也逐渐形成更清楚的正文字体与界面字体使用分工。",
            faces: "Noto Sans Lao、Saysettha OT、Phetsarath OT",
            usage: "适合政府信息、教育内容、移动界面和区域语言比较展示。",
            caution: "近缘不代表可以共用同一套字体资源，细部结构和用户阅读习惯仍需要分别处理。",
          },
        ],
      },
      {
        id: "myanmar",
        name: "缅甸",
        role: "缅文字母传统",
        summary:
          "缅文字母同样属于婆罗米系，但更常被说明为通过 Mon 书写传统进入缅甸语环境后形成今天的系统；它视觉上比泰文、高棉文更圆润，能帮助用户看到同源系统如何发展出截然不同的面貌。",
        highlight: "Mon 传统、圆形骨架、宗教手稿、数字化复杂排版",
        focus: "看同源系统如何在书写材料、书写习惯和数字排版里发展出更强的圆形特征。",
        eras: [
          {
            period: "11 - 13 世纪形成，沿用至今",
            title: "မြန်မာအက္ခရာ",
            tag: "Brahmic-derived script",
            structureTags: ["婆罗米系", "Mon 传统", "圆形特征", "棕榈叶书写影响"],
            titleFont: '"Noto Serif Myanmar", serif',
            summary:
              "缅文字母是东南亚书写系统里辨识度很高的一支，圆形化倾向非常明显，常被拿来说明书写材料如何反过来塑造字形结构。",
            origin:
              "更具体地说，Burmese 常被放在婆罗米系经 Mon 文字传统进入当地后逐渐定型的路径里理解，并在手稿、宗教文本与行政使用中稳固出今天熟悉的视觉面貌。",
            faces: "Myanmar Text、Padauk、Noto Serif Myanmar",
            usage: "适合说明东南亚文字不仅有共同来源，也会因媒介与文化环境出现显著字形差异。",
            caution: "缅文的组合与排版复杂度较高，若只按西文或中日韩的经验处理，常会出现断行和显示问题。",
          },
          {
            period: "21 世纪初至今",
            title: "မြန်မာ",
            tag: "Regional application",
            tagZh: "区域应用",
            structureTags: ["屏幕优化", "多层组合", "正文系统", "本地平台兼容"],
            titleFont: '"Noto Sans Myanmar", sans-serif',
            summary:
              "缅文字体在数字环境里尤其依赖渲染与排版支持，因此现代字体设计常同时关注字形传统和技术兼容。",
            origin:
              "移动设备普及后，缅文设计不再只是画字形，还要处理复杂组合、渲染稳定性和平台一致性。",
            faces: "Noto Sans Myanmar、Pyidaungsu、Padauk",
            usage: "适合新闻阅读、教育内容、政府系统和需要稳定显示的移动端界面。",
            caution: "如果技术栈对复杂脚本支持不足，再好的字形设计也可能在实际产品里失真。",
          },
        ],
      },
    ],
  },
];

const erasRoot = document.querySelector("#eras");
const template = document.querySelector("#eraCardTemplate");
const tabsRoot = document.querySelector("#timelineTabs");
const tabsViewport = document.querySelector("#timelineTabsViewport");
const prevButton = document.querySelector("#timelineScrollPrev");
const nextButton = document.querySelector("#timelineScrollNext");
const countryTabsRoot = document.querySelector("#countryTabs");

const tagZhLabels = {
  "Roman square capitals": "罗马方形大写字母（图拉真体）",
  "Early roman type": "早期罗马活字",
  "Garalde tradition": "法国文艺复兴罗马体",
  "Modern serif": "现代衬线体（迪多体）",
  "Textura / Fraktur": "黑体字传统",
  "Early sans-serif": "早期无衬线",
  "Sans-serif": "无衬线体系",
  "News and publishing": "报刊出版字体",
  "Interface sans-serif": "界面无衬线",
  Kufic: "库法体",
  Naskh: "纳斯赫体",
  Nastaliq: "纳斯塔利克体",
  "Ruq'ah": "Ruq'ah 手写体",
  "Urdu Nastaliq": "乌尔都纳斯塔利克体",
  "Modern Devanagari": "现代天城文",
  "Regional application": "尼泊尔语天城文",
  "Classical text tradition": "梵语学术排印",
  "Song typefaces": "宋体",
  "Chinese Gothic": "中文黑体",
  "Japanese Mincho": "日文明朝体",
  "Japanese Gothic": "日文哥特体",
  Myeongjo: "韩文明朝体",
  "Gothic Hangul": "韩文哥特体",
  "Brahmic-derived script": "婆罗米系衍生文字",
  "Looped Thai": "有头泰文",
  "Loopless Thai": "无头泰文",
  "Usage judgement": "当代使用判断",
};

const fontPreviewStacks = {
  "Trajan Pro": '"Cinzel", "Marcellus SC", serif',
  Cinzel: '"Cinzel", "Marcellus SC", serif',
  "Marcellus SC": '"Cinzel", "Marcellus SC", serif',
  Jenson: '"Cormorant Garamond", "EB Garamond", Georgia, serif',
  Bembo: '"EB Garamond", "Cormorant Garamond", Georgia, serif',
  "Bembo Italic": '"Cormorant Garamond", "EB Garamond", Georgia, serif',
  Centaur: 'Spectral, "Cormorant Garamond", Georgia, serif',
  "Centaur Italic": '"Cormorant Garamond", "EB Garamond", Georgia, serif',
  Garamond: '"Garamond", "EB Garamond", serif',
  Sabon: '"Sabon", "EB Garamond", serif',
  "EB Garamond": '"EB Garamond", "Garamond", serif',
  "EB Garamond Italic": '"EB Garamond", "Cormorant Garamond", serif',
  Didot: '"Bodoni Moda", "Playfair Display", serif',
  "HTF Didot": '"Bodoni Moda", "Playfair Display", serif',
  "GFS Didot": '"Bodoni Moda", "Playfair Display", serif',
  "Fette Fraktur": '"UnifrakturMaguntia", "Old English Text MT", serif',
  UnifrakturMaguntia: '"UnifrakturMaguntia", "Old English Text MT", serif',
  "Walbaum-Fraktur": '"UnifrakturMaguntia", "Old English Text MT", serif',
  "Akzidenz-Grotesk": '"Akzidenz-Grotesk", Helvetica, Arial, sans-serif',
  "Breite Grotesk": '"Akzidenz-Grotesk", Helvetica, Arial, sans-serif',
  "Monotype Grotesque": '"Monotype Grotesque", Helvetica, Arial, sans-serif',
  Helvetica: "Helvetica, Arial, sans-serif",
  Univers: '"Univers", Helvetica, Arial, sans-serif',
  "Neue Haas Grotesk": '"Neue Haas Grotesk", Helvetica, Arial, sans-serif',
  "Century Schoolbook": '"Century Schoolbook", Georgia, serif',
  "Times New Roman": '"Times New Roman", Georgia, serif',
  "News Gothic": '"News Gothic", "Franklin Gothic Medium", Arial, sans-serif',
  Cheltenham: '"Playfair Display", Georgia, serif',
  "Franklin Gothic": '"Franklin Gothic Medium", Arial, sans-serif',
  Fournier: 'Fournier, Baskerville, Georgia, serif',
  Spectral: 'Spectral, Georgia, serif',
  Kepler: 'Kepler, Baskerville, Georgia, serif',
  Walbaum: '"Playfair Display", "Bodoni Moda", "Times New Roman", serif',
  Verdana: "Verdana, sans-serif",
  "Trebuchet MS": '"Trebuchet MS", Verdana, sans-serif',
  Tahoma: "Tahoma, Verdana, sans-serif",
  "Segoe UI": '"Segoe UI", Tahoma, sans-serif',
  "Noto Kufi Arabic": '"Noto Kufi Arabic", "Aref Kufi", sans-serif',
  "Aref Kufi": '"Noto Kufi Arabic", "Aref Ruqaa", sans-serif',
  "Reem Kufi": '"Reem Kufi", "Noto Kufi Arabic", sans-serif',
  Amiri: 'Amiri, "Noto Naskh Arabic", serif',
  "Traditional Arabic": '"Traditional Arabic", "Noto Naskh Arabic", serif',
  "Noto Naskh Arabic": '"Noto Naskh Arabic", Amiri, serif',
  "Amiri Quran": '"Amiri Quran", Amiri, serif',
  IranNastaliq: '"IranNastaliq", "Awami Nastaliq", serif',
  "Awami Nastaliq": '"Awami Nastaliq", "Urdu Typesetting", serif',
  "Urdu Nastaliq Unicode": '"Urdu Nastaliq Unicode", "Urdu Typesetting", serif',
  Vazirmatn: 'Vazirmatn, Tahoma, sans-serif',
  "Aref Ruqaa": '"Aref Ruqaa", "Katibeh", serif',
  Rakkas: 'Rakkas, "Aref Ruqaa", serif',
  Katibeh: 'Katibeh, "Aref Ruqaa", serif',
  "Jameel Noori Nastaleeq": '"Jameel Noori Nastaleeq", "Urdu Typesetting", serif',
  "Mehr Nastaliq Web": '"Mehr Nastaliq Web", "Urdu Typesetting", serif',
  "Urdu Typesetting": '"Urdu Typesetting", "Awami Nastaliq", serif',
  Mukta: '"Mukta", "Noto Sans Devanagari", sans-serif',
  Hind: '"Hind", "Noto Sans Devanagari", sans-serif',
  Kokila: '"Kokila", "Noto Serif Devanagari", serif',
  Mangal: '"Mangal", "Noto Sans Devanagari", sans-serif',
  "Noto Sans Devanagari": '"Noto Sans Devanagari", sans-serif',
  Kalimati: 'Kalimati, "Noto Sans Devanagari", sans-serif',
  "Sanskrit 2003": '"Sanskrit 2003", "Noto Serif Devanagari", serif',
  Chandas: 'Chandas, "Noto Serif Devanagari", serif',
  "Noto Serif Devanagari": '"Noto Serif Devanagari", serif',
  SimSun: 'SimSun, "Songti SC", "Source Han Serif SC", serif',
  FangSong: 'FangSong, STFangsong, SimSun, serif',
  STFangsong: 'STFangsong, FangSong, SimSun, serif',
  "Source Han Serif SC": '"Source Han Serif SC", "Songti SC", serif',
  "Songti SC": '"Songti SC", "Source Han Serif SC", serif',
  SimHei: 'SimHei, "Microsoft YaHei", "Source Han Sans SC", sans-serif',
  "Microsoft YaHei": '"Microsoft YaHei", "Source Han Sans SC", sans-serif',
  "Source Han Sans SC": '"Source Han Sans SC", "Microsoft YaHei", sans-serif',
  "Yu Mincho": '"Yu Mincho", "Hiragino Mincho ProN", "Source Han Serif JP", serif',
  "Tsukushi Mincho": '"Tsukushi Mincho", "Yu Mincho", serif',
  "Hiragino Mincho": '"Hiragino Mincho ProN", "Yu Mincho", "Source Han Serif JP", serif',
  "Source Han Serif JP": '"Source Han Serif JP", "Yu Mincho", serif',
  "Yu Gothic": '"Yu Gothic", "Hiragino Sans", "Source Han Sans JP", sans-serif',
  "Hiragino Sans": '"Hiragino Sans", "Yu Gothic", "Source Han Sans JP", sans-serif',
  "Source Han Sans JP": '"Source Han Sans JP", "Yu Gothic", sans-serif',
  Batang: 'Batang, "Nanum Myeongjo", "Noto Serif KR", serif',
  Gungsuh: 'Gungsuh, Batang, "Nanum Myeongjo", serif',
  "Nanum Myeongjo": '"Nanum Myeongjo", Batang, "Noto Serif KR", serif',
  "Noto Serif KR": '"Noto Serif KR", "Nanum Myeongjo", serif',
  "Malgun Gothic": '"Malgun Gothic", "Noto Sans KR", "Pretendard", sans-serif',
  "Noto Sans KR": '"Noto Sans KR", "Malgun Gothic", "Pretendard", sans-serif',
  Pretendard: 'Pretendard, "Noto Sans KR", sans-serif',
  "Noto Serif Thai": '"Noto Serif Thai", "TH Sarabun", serif',
  Kinnari: 'Kinnari, "Noto Serif Thai", serif',
  "TH Sarabun": '"TH Sarabun", "Noto Serif Thai", serif',
  Browallia: 'Browallia, "Noto Serif Thai", serif',
  "Noto Sans Thai": '"Noto Sans Thai", "Sukhumvit Set", sans-serif',
  "Sukhumvit Set": '"Sukhumvit Set", "Noto Sans Thai", sans-serif',
  "DB Helvethaica": '"DB Helvethaica", "Noto Sans Thai", sans-serif',
  "Noto Serif Khmer": '"Noto Serif Khmer", "Khmer OS", serif',
  "Khmer OS": '"Khmer OS", "Noto Serif Khmer", serif',
  MoolBoran: 'MoolBoran, "Noto Serif Khmer", serif',
  "Noto Sans Khmer": '"Noto Sans Khmer", "Kantumruy Pro", sans-serif',
  Battambang: 'Battambang, "Noto Sans Khmer", sans-serif',
  "Kantumruy Pro": '"Kantumruy Pro", "Noto Sans Khmer", sans-serif',
  "Noto Serif Lao": '"Noto Serif Lao", "Phetsarath OT", serif',
  "Phetsarath OT": '"Phetsarath OT", "Noto Serif Lao", serif',
  DokChampa: 'DokChampa, "Noto Serif Lao", serif',
  "Noto Sans Lao": '"Noto Sans Lao", "Saysettha OT", sans-serif',
  "Saysettha OT": '"Saysettha OT", "Noto Sans Lao", sans-serif',
  "Noto Serif Myanmar": '"Noto Serif Myanmar", Padauk, serif',
  "Myanmar Text": '"Myanmar Text", "Noto Serif Myanmar", serif',
  Padauk: 'Padauk, "Noto Serif Myanmar", serif',
  "Noto Sans Myanmar": '"Noto Sans Myanmar", Pyidaungsu, sans-serif',
  Pyidaungsu: 'Pyidaungsu, "Noto Sans Myanmar", sans-serif',
};

const systemsWithOverview = timelineSystems.map((system) => {
  const overviewEras = system.featuredCountries.flatMap((country) =>
    country.eras.map((era) => ({
      ...era,
      tag: `${country.name} · ${era.tag}`,
      tagRaw: era.tag,
      structureTags: [country.name, ...era.structureTags],
    })),
  );

  return {
    ...system,
    featuredCountries: [
      {
        id: "overview",
        name: "字系概览",
        role: "整体脉络",
        summary: system.summary,
        highlight: system.featuredCountries.map((country) => country.name).join("、"),
        focus: "先建立这套文字系统的整体时间线，再切到具体国家看局部变化。",
        eras: overviewEras,
      },
      ...system.featuredCountries,
    ],
  };
});

const activeCountryBySystem = Object.fromEntries(
  systemsWithOverview.map((system) => [system.id, system.featuredCountries[0].id]),
);

let activeSystem = systemsWithOverview[0].id;

function getActiveSystem() {
  return systemsWithOverview.find((item) => item.id === activeSystem) || systemsWithOverview[0];
}

function getActiveCountry(system = getActiveSystem()) {
  const countryId = activeCountryBySystem[system.id];

  return (
    system.featuredCountries.find((item) => item.id === countryId) ||
    system.featuredCountries[0]
  );
}

function createFaceItems(value) {
  return value
    .split(/[、，,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function createOverviewText(era) {
  return [era.summary, era.origin, era.usage].filter(Boolean).join(" ");
}

function extractPrimaryFontLabel(fontFamily) {
  const [firstFamily] = fontFamily.split(",");
  return firstFamily.replace(/^["']|["']$/g, "").trim();
}

function getPreviewFontFamily(label, fallbackFamily = "") {
  if (fontPreviewStacks[label]) {
    return fontPreviewStacks[label];
  }

  if (fallbackFamily) {
    return `"${label}", ${fallbackFamily}`;
  }

  return `"${label}"`;
}

function getPreviewFontStyle(label) {
  return /italic/i.test(label) ? "italic" : "normal";
}

function getPreviewFontWeight(label) {
  const weightedPresets = {
    "Trajan Pro": "700",
    Cinzel: "700",
    "Marcellus SC": "600",
    Jenson: "500",
    Bembo: "600",
    Centaur: "400",
    Garamond: "500",
    Sabon: "600",
    "EB Garamond": "700",
    Didot: "700",
    "HTF Didot": "600",
    "GFS Didot": "500",
    Walbaum: "500",
    Helvetica: "700",
    Univers: "500",
    "Neue Haas Grotesk": "400",
    "News Gothic": "500",
    Cheltenham: "700",
    "Franklin Gothic": "700",
  };

  if (weightedPresets[label]) {
    return weightedPresets[label];
  }

  return "600";
}

function getPreviewLetterSpacing(label) {
  const spacedPresets = {
    "Trajan Pro": "0.06em",
    Cinzel: "0.04em",
    "Marcellus SC": "0.03em",
    Jenson: "0em",
    Bembo: "0.01em",
    Centaur: "-0.01em",
    Garamond: "0em",
    Sabon: "0.015em",
    "EB Garamond": "-0.01em",
    Didot: "0.02em",
    "HTF Didot": "0.01em",
    "GFS Didot": "0em",
    Walbaum: "0.01em",
    Helvetica: "0em",
    Univers: "0.02em",
    "Neue Haas Grotesk": "-0.01em",
    "News Gothic": "0.03em",
    Cheltenham: "0.01em",
    "Franklin Gothic": "0em",
  };

  if (spacedPresets[label]) {
    return spacedPresets[label];
  }

  return "0em";
}

function createFaceOptions(era) {
  const defaultLabel = extractPrimaryFontLabel(era.titleFont);
  const options = [
    {
      label: defaultLabel,
      fontFamily: era.titleFont,
      fontStyle: "normal",
      fontWeight: "700",
      letterSpacing: "0em",
    },
  ];

  createFaceItems(era.faces).forEach((label) => {
    if (options.some((option) => option.label === label)) {
      return;
    }

    options.push({
      label,
      fontFamily: getPreviewFontFamily(label, era.titleFont),
      fontStyle: getPreviewFontStyle(label),
      fontWeight: getPreviewFontWeight(label),
      letterSpacing: getPreviewLetterSpacing(label),
    });
  });

  return options;
}

function getTitleScriptClass(text) {
  if (/[\u1000-\u109f\uaa60-\uaa7f]/u.test(text)) {
    return "script-myanmar";
  }

  if (/[\u1780-\u17ff]/u.test(text)) {
    return "script-khmer";
  }

  if (/[\u0e80-\u0eff]/u.test(text)) {
    return "script-lao";
  }

  if (/[\u0e00-\u0e7f]/u.test(text)) {
    return "script-thai";
  }

  if (/[\u0900-\u097f]/u.test(text)) {
    return "script-devanagari";
  }

  return "";
}

function renderTimelineTabs() {
  tabsRoot.innerHTML = "";

  systemsWithOverview.forEach((system) => {
    const button = document.createElement("button");
    const title = document.createElement("span");
    const caption = document.createElement("span");

    button.className = `timeline-tab${system.id === activeSystem ? " active" : ""}`;
    button.type = "button";
    title.className = "timeline-tab-title";
    caption.className = "timeline-tab-caption";
    title.textContent = system.name;
    caption.textContent = system.caption;

    button.append(title, caption);
    button.addEventListener("click", () => {
      activeSystem = system.id;
      renderTimelineTabs();
      renderCountryTabs();
      renderEraCards();
    });

    tabsRoot.appendChild(button);
  });

  updateScrollButtons();
}

function renderCountryTabs() {
  const system = getActiveSystem();
  const activeCountry = getActiveCountry(system);

  countryTabsRoot.innerHTML = "";

  system.featuredCountries.forEach((country) => {
    const button = document.createElement("button");
    const name = document.createElement("span");
    const role = document.createElement("span");

    button.className = `country-tab${country.id === activeCountry.id ? " active" : ""}`;
    button.type = "button";
    name.className = "country-tab-name";
    role.className = "country-tab-role";
    name.textContent = country.name;
    role.textContent = country.role;

    button.append(name, role);
    button.addEventListener("click", () => {
      activeCountryBySystem[system.id] = country.id;
      renderCountryTabs();
      renderEraCards();
    });

    countryTabsRoot.appendChild(button);
  });
}

function renderEraCards() {
  const country = getActiveCountry();

  erasRoot.innerHTML = "";

  country.eras.forEach((era) => {
    const fragment = template.content.cloneNode(true);
    const tagsRoot = fragment.querySelector(".era-structure-tags");
    const facesRoot = fragment.querySelector(".faces");
    const rawTag = fragment.querySelector(".era-tag-raw");
    const zhTag = fragment.querySelector(".era-tag-zh");
    const zhLabel = era.tagZh || tagZhLabels[era.tagRaw || era.tag] || "";

    fragment.querySelector(".era-period").textContent = era.period;
    rawTag.textContent = era.tag;
    zhTag.textContent = zhLabel;
    zhTag.hidden = !zhLabel;
    const titleElement = fragment.querySelector(".era-title");
    const titleScriptClass = getTitleScriptClass(era.title);
    const faceOptions = createFaceOptions(era);

    titleElement.textContent = era.title;
    titleElement.style.fontFamily = era.titleFont;
    titleElement.style.fontStyle = "normal";
    titleElement.style.fontWeight = "700";
    titleElement.style.letterSpacing = "0em";

    if (titleScriptClass) {
      titleElement.classList.add(titleScriptClass);
    }
    fragment.querySelector(".overview").textContent = createOverviewText(era);
    fragment.querySelector(".caution").textContent = era.caution;

    faceOptions.forEach((face, index) => {
      const chip = document.createElement("button");
      chip.className = "era-face";
      chip.type = "button";
      chip.textContent = face.label;
      chip.style.fontFamily = face.fontFamily;
      chip.style.fontStyle = face.fontStyle;
      chip.style.fontWeight = face.fontWeight;
      chip.style.letterSpacing = face.letterSpacing;
      chip.setAttribute("aria-pressed", index === 0 ? "true" : "false");

      if (index === 0) {
        chip.classList.add("active");
      }

      chip.addEventListener("click", () => {
        titleElement.style.fontFamily = face.fontFamily;
        titleElement.style.fontStyle = face.fontStyle;
        titleElement.style.fontWeight = face.fontWeight;
        titleElement.style.letterSpacing = face.letterSpacing;

        facesRoot.querySelectorAll(".era-face").forEach((button) => {
          button.classList.remove("active");
          button.setAttribute("aria-pressed", "false");
        });

        chip.classList.add("active");
        chip.setAttribute("aria-pressed", "true");
      });

      facesRoot.appendChild(chip);
    });

    era.structureTags.forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "era-structure-tag";
      chip.textContent = tag;
      tagsRoot.appendChild(chip);
    });

    erasRoot.appendChild(fragment);
  });
}

function updateScrollButtons() {
  if (!prevButton || !nextButton) {
    return;
  }

  const maxScrollLeft = tabsViewport.scrollWidth - tabsViewport.clientWidth;
  prevButton.disabled = tabsViewport.scrollLeft <= 4;
  nextButton.disabled = tabsViewport.scrollLeft >= maxScrollLeft - 4;
}

function scrollTabs(direction) {
  tabsViewport.scrollBy({
    left: direction * 220,
    behavior: "smooth",
  });
}

prevButton?.addEventListener("click", () => scrollTabs(-1));
nextButton?.addEventListener("click", () => scrollTabs(1));
tabsViewport.addEventListener("scroll", updateScrollButtons);
window.addEventListener("resize", updateScrollButtons);

renderTimelineTabs();
renderCountryTabs();
renderEraCards();
