export interface TranslationSet {
    [key: string]: any;
}

interface Translations {
    [key: string]: TranslationSet;
}

export const translations: Translations = {
    en: {
        navPortfolio: "Portfolio",
        navPricing: "Pricing",
        navFaq: "FAQ",
        orderNow: "Order Now",
        heroTitle: "Marry in Paris, London, Florence, Santorini – all for €19",
        heroSubtitle: "Upload your photo, choose a city & style, and receive 20 AI-generated wedding-inspired photos for only €19.",
        portfolioTitle: "Explore Our Styles",
        portfolioSubtitle: "Dream of a romantic photoshoot in Europe? See what's possible with our AI styles.",
        parisStyle: "Paris Style",
        santoriniStyle: "Santorini Style",
        florenceStyle: "Florence Style",
        pricingTitle: "Simple, Transparent Pricing",
        pricingSubtitle: "One great package, with optional add-ons to make your memories even more special.",
        standardPackage: "Standard Package",
        standardPackagePrice: "€19",
        feature1: "20 AI-generated photos",
        feature2: "Your choice of city & style",
        feature3: "High-resolution digital download",
        feature4: "24-hour turnaround time",
        getStarted: "Get Started",
        addon1Title: "Printed Photo Book",
        addon1Desc: "A beautiful, professionally printed book of your favorite AI photos.",
        addon1Price: "+ €9",
        addon2Title: "AI Love Story Video",
        addon2Desc: "A short, romantic video slideshow of your photos, set to music.",
        addon2Price: "+ €29",
        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                question: "How long does it take?",
                answer: "You will receive your photos within 24 hours.",
            },
            {
                question: "Is my photo safe?",
                answer: "Yes, all photos are deleted from our servers after the AI generation process is complete. Your privacy is our top priority.",
            },
            {
                question: "What styles can I choose?",
                answer: "We offer a wide range of romantic European cities, including Paris, London, Santorini, Florence, Berlin, and many more. We are constantly adding new styles!",
            },
            {
                question: "What kind of photo should I upload?",
                answer: "For best results, please upload a clear, high-resolution photo of yourself or you and your partner. Good lighting and a forward-facing pose work best."
            }
        ],
        footerText: "Euro Marry AI © 2025 – Created with love and AI.",
    },
    zh: {
        navPortfolio: "作品集",
        navPricing: "价格",
        navFaq: "常见问题",
        orderNow: "立即订购",
        heroTitle: "在巴黎、伦敦、佛罗伦萨、圣托里尼喜结连理——仅需€19",
        heroSubtitle: "上传您的照片，选择城市和风格，仅需 €19 即可获得 20 张 AI 生成的婚纱风格照片。",
        portfolioTitle: "探索我们的风格",
        portfolioSubtitle: "梦想在欧洲进行一次浪漫的拍摄？看看我们的 AI 风格能实现什么。",
        parisStyle: "巴黎风格",
        santoriniStyle: "圣托里尼风格",
        florenceStyle: "佛罗伦萨风格",
        pricingTitle: "简单透明的定价",
        pricingSubtitle: "一个超值套餐，可选附加服务，让您的回忆更加特别。",
        standardPackage: "标准套餐",
        standardPackagePrice: "€19",
        feature1: "20 张 AI 生成照片",
        feature2: "自选城市和风格",
        feature3: "高分辨率数字下载",
        feature4: "24小时内交付",
        getStarted: "开始使用",
        addon1Title: "实体相册",
        addon1Desc: "一本精美的专业印刷相册，收录您最喜爱的AI照片。",
        addon1Price: "+ €9",
        addon2Title: "AI 爱情故事视频",
        addon2Desc: "一个简短浪漫的视频幻灯片，配有音乐。",
        addon2Price: "+ €29",
        faqTitle: "常见问题",
        faqs: [
            {
                question: "需要多长时间？",
                answer: "您将在24小时内收到您的照片。",
            },
            {
                question: "我的照片安全吗？",
                answer: "是的，所有照片在AI生成过程完成后都会从我们的服务器上删除。您的隐私是我们的首要任务。",
            },
            {
                question: "我可以选择哪些风格？",
                answer: "我们提供多种浪漫的欧洲城市风格，包括巴黎、伦敦、圣托里尼、佛罗伦萨、柏林等等。我们还在不断增加新的风格！",
            },
            {
                question: "我应该上传什么样的照片？",
                answer: "为获得最佳效果，请上传您自己或您与伴侣的清晰、高分辨率照片。良好的光线和正面的姿势效果最好。"
            }
        ],
        footerText: "Euro Marry AI © 2025 – 用爱与AI创造。",
    },
    ja: {
        navPortfolio: "ポートフォリオ",
        navPricing: "価格",
        navFaq: "FAQ",
        orderNow: "今すぐ注文",
        heroTitle: "パリ、ロンドン、フィレンツェ、サントリーニでの結婚式 – 全て€19で",
        heroSubtitle: "あなたの写真をアップロードし、都市とスタイルを選んで、たったの€19でAIが生成したウェディング風の写真を20枚受け取れます。",
        portfolioTitle: "私たちのスタイルを探る",
        portfolioSubtitle: "ヨーロッパでのロマンチックな写真撮影を夢見ていますか？私たちのAIスタイルで何が可能かをご覧ください。",
        parisStyle: "パリスタイル",
        santoriniStyle: "サントリーニスタイル",
        florenceStyle: "フィレンツェスタイル",
        pricingTitle: "シンプルで透明な価格設定",
        pricingSubtitle: "素晴らしいパッケージ一つと、思い出をさらに特別にするためのオプションのアドオン。",
        standardPackage: "標準パッケージ",
        standardPackagePrice: "€19",
        feature1: "AI生成写真20枚",
        feature2: "都市とスタイルを選択",
        feature3: "高解像度デジタルダウンロード",
        feature4: "24時間以内の納品",
        getStarted: "始める",
        addon1Title: "印刷されたフォトブック",
        addon1Desc: "お気に入りのAI写真の美しくプロが印刷したブック。",
        addon1Price: "+ €9",
        addon2Title: "AIラブストーリービデオ",
        addon2Desc: "あなたの写真の短いロマンチックなビデオ、音楽付き。",
        addon2Price: "+ €29",
        faqTitle: "よくある質問",
        faqs: [
            {
                question: "どのくらい時間がかかりますか？",
                answer: "24時間以内に写真をお届けします。",
            },
            {
                question: "私の写真は安全ですか？",
                answer: "はい、すべての写真はAI生成プロセスが完了した後、私たちのサーバーから削除されます。お客様のプライバシーは私たちの最優先事項です。",
            },
            {
                question: "どのスタイルが選べますか？",
                answer: "パリ、ロンドン、サントリーニ、フィレンツェ、ベルリンなど、ロマンチックなヨーロッパの都市を幅広く提供しています。新しいスタイルも随時追加しています！",
            },
            {
                question: "どのような写真をアップロードすればよいですか？",
                answer: "最高の結果を得るために、ご自身またはパートナーとの鮮明で高解像度の写真をアップロードしてください。良好な照明と正面を向いたポーズが最適です。"
            }
        ],
        footerText: "Euro Marry AI © 2025 – 愛とAIで創造されました。",
    },
    fr: {
        navPortfolio: "Portfolio",
        navPricing: "Tarifs",
        navFaq: "FAQ",
        orderNow: "Commander",
        heroTitle: "Mariez-vous à Paris, Londres, Florence, Santorin – le tout pour 19 €",
        heroSubtitle: "Téléchargez votre photo, choisissez une ville et un style, et recevez 20 photos de mariage générées par IA pour seulement 19 €.",
        portfolioTitle: "Découvrez nos styles",
        portfolioSubtitle: "Vous rêvez d'une séance photo romantique en Europe ? Voyez ce qui est possible avec nos styles IA.",
        parisStyle: "Style Paris",
        santoriniStyle: "Style Santorin",
        florenceStyle: "Style Florence",
        pricingTitle: "Tarification simple et transparente",
        pricingSubtitle: "Un forfait exceptionnel, avec des modules optionnels pour rendre vos souvenirs encore plus spéciaux.",
        standardPackage: "Forfait Standard",
        standardPackagePrice: "19 €",
        feature1: "20 photos générées par IA",
        feature2: "Votre choix de ville et de style",
        feature3: "Téléchargement numérique haute résolution",
        feature4: "Délai de 24 heures",
        getStarted: "Commencer",
        addon1Title: "Livre photo imprimé",
        addon1Desc: "Un magnifique livre de vos photos IA préférées, imprimé par des professionnels.",
        addon1Price: "+ 9 €",
        addon2Title: "Vidéo d'histoire d'amour IA",
        addon2Desc: "Un court diaporama vidéo romantique de vos photos, sur fond musical.",
        addon2Price: "+ 29 €",
        faqTitle: "Questions Fréquemment Posées",
        faqs: [
            {
                question: "Combien de temps cela prend-il ?",
                answer: "Vous recevrez vos photos dans les 24 heures.",
            },
            {
                question: "Ma photo est-elle en sécurité ?",
                answer: "Oui, toutes les photos sont supprimées de nos serveurs une fois le processus de génération par IA terminé. Votre vie privée est notre priorité absolue.",
            },
            {
                question: "Quels styles puis-je choisir ?",
                answer: "Nous proposons un large éventail de villes européennes romantiques, dont Paris, Londres, Santorin, Florence, Berlin, et bien d'autres. Nous ajoutons constamment de nouveaux styles !",
            },
            {
                question: "Quel type de photo dois-je télécharger ?",
                answer: "Pour de meilleurs résultats, veuillez télécharger une photo claire et en haute résolution de vous-même ou de vous et votre partenaire. Un bon éclairage et une pose de face fonctionnent le mieux."
            }
        ],
        footerText: "Euro Marry AI © 2025 – Créé avec amour et IA.",
    }
};