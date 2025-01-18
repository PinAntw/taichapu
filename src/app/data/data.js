// 商品分類數據
export const categories = [
    { id: "tea", name: "🍵 茶葉類" },
    { id: "agriculture", name: "🌾 農產品" },
  ];
  
  // **價格**
  export const prices = {
    guaprice: (
      <div>
        <p className="text-black">NT$ 120/包</p>
        <p className="text-red-500">滿十包以上 NT$ 100/包</p>
      </div>
    ),
    marshprice: (
      <div>
        <p className="text-black">NT$ 600/包</p>
        <p className="text-red-500">滿五包以上 NT$ 500/包</p>
      </div>
    ),
    oilprice: (
      <div>
        <p className="text-black">NT$ 600/瓶（無量化）</p>
        <p className="text-black">NT$ 800/瓶（有量化）</p>
      </div>
    ),
    teali_price: (
      <div>
        <p className="text-black">NT$ 800/包（四兩150g）</p>
        <p className="text-red-500">
          滿4包以上（含）8折
          <br />
          滿12包以上（含）7折
        </p>
      </div>
    ),
    teaali_price: (
      <div>
        <p className="text-black">NT$ 500/包（四兩150g）</p>
        <p className="text-red-500">
          滿4包以上（含）8折
          <br />
          滿12包以上（含）7折
        </p>
      </div>
    ),
    teaada_price: (
      <div>
        <p className="text-black">NT$ 1100/包（四兩150g）</p>
        <p className="text-red-500">
          滿4包以上（含）8折
          <br />
          滿12包以上（含）7折
        </p>
      </div>
    ),
    teared_price: (
      <div>
        <p className="text-black">NT$ 350/包（四兩150g）</p>
        <p className="text-red-500">
          滿4包以上（含）8折
          <br />
          滿12包以上（含）7折
        </p>
      </div>
    ),
  };
  
  // **商品描述**
  export const descriptions = {
    tea: (
      <div>
        <p className="mb-4">
          正常發酵、無烘焙的高山烏龍茶<br />
          來自高山海拔超過1500公尺以上，獨特的高山環境和氣候條件讓這款茶葉成為台灣頂級烏龍茶之一。
        </p>
        <h4 className="text-lg font-bold mb-2">產品特色：</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>香氣與口感：高山烏龍茶具備獨特的花香與果香，軟潤好入喉。</li>
          <li>生長環境：高海拔、雲霧繚繞、日夜溫差大，使茶葉味道更加鮮明、醇厚。</li>
          <li>健康益處：富含抗氧化物質，如茶多酚和兒茶素，促進新陳代謝。</li>
        </ul>
      </div>
    ),
    gua : (
      <div>
        <h2 className="text-xl font-bold mb-4">茶瓜子——傳統風味與健康的完美結合</h2>
        <p className="mb-4">
          茶瓜子，以台灣南瓜籽為主要原料，經過嚴選、輕烘、調味，成為風味獨特、營養豐富的小零食。
          這種具有濃郁茶香的瓜子不僅延續了傳統風味，更賦予現代生活天然健康的元素。
        </p>
        <p className="mb-4 font-semibold">富含膳食纖維與天然抗氧化物質，搭配獨特的茶葉香氣，是茶餘飯後不可多得的健康零食選擇。</p>
        
        <h3 className="text-lg font-bold mt-6 mb-2">產品特色</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>嚴選上等南瓜籽：</strong>
            <span className="ml-1">確保每顆瓜子都飽滿、香脆。</span>
          </li>
          <li>
            <strong>無添加人工香料、防腐劑：</strong>
            <span className="ml-1">讓您放心享受自然美味。</span>
          </li>
          <li>
            <strong>營養豐富：</strong>
            <span className="ml-1">含有豐富的膳食纖維、天然多酚與維生素E，促進消化、抗氧化。</span>
          </li>
          <li>
            <strong>獨特茶香風味：</strong>
            <span className="ml-1">輕烘烤製程保留茶葉的濃香，茶香與瓜子清香相互融合，味道層次分明。</span>
          </li>
          <li>
            <strong>多用途零食：</strong>
            <span className="ml-1">適合搭配茶飲或作為聚餐小零食，更是冬季健康的日常小點，無疑是啃瓜子的最愛。</span>
          </li>
        </ul>
        
        <h3 className="text-lg font-bold mt-6 mb-2">產品資訊</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>產地：</strong>台灣雲林西螺</li>
          <li><strong>規格：</strong>200g/包</li>
          <li><strong>保存期限：</strong>一年（未開封狀態下），拆封後盡快食用</li>
          <li><strong>保存方式：</strong>避免高溫、潮濕、日光直射</li>
          <li><strong>包裝方式：</strong>抽真空包裝，確保新鮮風味</li>
        </ul>
      </div>
    ),
    oil : (
      <div>
        <h2 className="text-xl font-bold mb-4">烏龍茶籽油-東方的橄欖油</h2>
        <p className="mb-4">
          台灣自產自銷茶園，用最天然方式萃取而成的茶籽油，蘊含茶葉與芝麻的獨特香氣。
          這款油品從人工採籽、陽光曝曬、二次熱炒去殼、螺旋式冷壓，靜置十日後只取最上層純清油裝瓶，
          過程嚴謹，只為保留茶籽油的純淨與營養。
        </p>
        
        <h3 className="text-lg font-bold mt-6 mb-2">產品特點</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>高單元不飽和脂肪酸：</strong>含量超過80%，有助於降低總膽固醇，提高高密度膽固醇（HDL），有益心血管健康。</li>
          <li><strong>高發煙點(約220°C)：</strong>適合涼拌、煎、煮、炒、炸等多種料理方式，不易氧化、不產生油耗味。</li>
        </ul>
        
        <h3 className="text-lg font-bold mt-6 mb-2">適用料理</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>煎：</strong>適合煎魚、煎蛋等，保持食材本身風味與營養。</li>
          <li><strong>炒：</strong>提升炒青菜、牛肉、雞胸等料理的香氣與風味。</li>
          <li><strong>煮：</strong>可用於燉湯，如牛肉湯、雞湯或蔬菜鍋物，增加潤滑度與營養價值。</li>
          <li><strong>涼拌：</strong>適合拌菠菜、麻油雞等料理，讓口感更滑順不油膩。</li>
          <li><strong>烘烤：</strong>可均勻抹於烤雞、烤蔬菜，帶來酥脆金黃的外皮與濃郁香氣。</li>
        </ul>
        
        <h3 className="text-lg font-bold mt-6 mb-2">多功能保健用途</h3>
        <p className="mb-4">
          除了作為廚房好油，茶籽油還可用於護手、護髮、護牙，並有助於潤腸防便秘，讓健康由內而外展現。
        </p>
        
        <h3 className="text-lg font-bold mt-6 mb-2">產品資訊</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>產地：</strong>台灣</li>
          <li><strong>規格：</strong>560ml/瓶</li>
          <li><strong>製造廠商：</strong>美而佳茶行</li>
          <li><strong>營養標示：</strong>貼於瓶子背面標籤</li>
          <li><strong>保存期限：</strong>一年（未開封狀態下）</li>
          <li><strong>保存方式：</strong>避免高溫、潮濕、日光直射</li>
        </ul>
      </div>
    )
    ,
    marshroom: (
      <div>
        <h2 className="text-xl font-bold mb-4">杉林溪高山原生香菇 — 高山淨土的精華</h2>
        <p className="mb-4">
          在台灣南投海拔1700公尺的杉林溪，由果農以傳統與創新並行的技術精心栽培而成。
          這款高山香菇生長在天然無汙染的環境中，以太空包與優質有機肥料養育，確保每顆香菇都能慢慢汲取山林的養分，呈現純淨無瑕的品質。
        </p>
        <p className="mb-4 font-semibold">無農藥、無催熟、無二氧化硫燻製與無漂白處理，讓您安心品味自然的原汁原味。</p>
        
        <h3 className="text-lg font-bold mt-6 mb-2">極致口感與營養</h3>
        <p className="mb-4">
          香菇質地細緻，富含膳食纖維、維生素D和多種礦物質，濃郁香氣與自然鮮味在烹調中綻放。
          可直接生食，也適合各式料理如湯品、燉菜，無論入湯或煲飯，都提升了佳餚的豐富層次，達到「藥食同源」的健康效果。
        </p>
        
        <h3 className="text-lg font-bold mt-6 mb-2">料理推薦</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>香菇燉湯：</strong>
            <span className="ml-1">將香菇加入燉湯中，釋放出其天然的鮮甜，搭配雞肉或排骨一起熬煮，不僅湯頭濃郁回甘，更提升整體營養價值。</span>
          </li>
          <li>
            <strong>香菇炊飯：</strong>
            <span className="ml-1">使用香菇炊飯，讓米粒吸收香菇的鮮香，每口皆是純粹的高山滋味。</span>
          </li>
          <li>
            <strong>涼拌香菇：</strong>
            <span className="ml-1">將香菇汆燙後與蒜末、蔥花及少許橄欖油拌勻，打造簡單健康的涼拌小菜，適合清淡飲食的消費者。</span>
          </li>
          <li>
            <strong>香菇燴麵：</strong>
            <span className="ml-1">香菇搭配麵條及豐富蔬菜同煮，增添湯頭的厚實與營養，是寒冷天氣的暖心選擇。</span>
          </li>
        </ul>
        
        <h3 className="text-lg font-bold mt-6 mb-2">產地直供，無中介</h3>
        <p className="mb-4">
          由杉林溪果農自產自銷，從採摘到包裝層層把關，以確保將新鮮品質直接送到您手中，完美呈現高山原生香菇的天然滋味。
          嚴選自台灣高山，為您呈現自然的健康之選。邀您共享高山純淨之味，體驗品質至上的健康生活。
        </p>
        
        <h3 className="text-lg font-bold mt-6 mb-2">產品資訊</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>產地：</strong>台灣</li>
          <li><strong>規格：</strong>150g/包</li>
          <li><strong>保存期限：</strong>一年（未開封狀態下）</li>
          <li><strong>保存方式：</strong>避免高溫、潮濕、日光直射</li>
        </ul>
      </div>
    ),
  };
  
  // **商品列表**
  export const products = [
    {
      id: "teared",
      name: "【台灣茶】台東鹿野紅烏龍茶",
      price: prices.teared_price,
      images: ["/goods/teared1.jpg", "/goods/teared2.jpg", "/goods/teared3.jpg"],
      description: descriptions.tea,
      category: "tea",
    },
    {
      id: "teaali",
      name: "【台灣茶】阿里山金萱烏龍茶",
      price: prices.teaali_price,
      images: ["/goods/tea13.jpg", "/goods/teaali.jpg", "/goods/teaall.jpg"],
      description: descriptions.tea,
      category: "tea",
    },
    {
      id: "teali",
      name: "【台灣茶】梨山新佳陽烏龍茶",
      price: prices.teali_price,
      images: ["/goods/tea16.jpg", "/goods/teaall.jpg"],
      description: descriptions.tea,
      category: "tea",
    },
    {
      id: "teaada",
      name: "【台灣茶】大禹嶺手採88K高山烏龍茶",
      price: prices.teaada_price,
      images: ["/goods/tea20.jpg", "/goods/teaall.jpg"],
      description: descriptions.tea,
      category: "tea",
    },
    {
      id: "gua",
      name: "【新年必備】茶瓜子",
      price: prices.guaprice,
      images: ["/goods/gua1.png", "/goods/gua2.png"],
      description: descriptions.gua,
      category: "agriculture",
    },
    {
      id: "oil",
      name: "【健康養身】烏龍茶籽油-東方的橄欖油",
      price: prices.oilprice,
      images: ["/goods/oil1.png", "/goods/oil2.png"],
      description: descriptions.oil,
      category: "agriculture",
    },
    {
      id: "marshroom",
      name: "【健康養身】杉林溪高山原生香菇",
      price: prices.marshprice,
      images: ["/goods/marshroom1.png", "/goods/marshroom2.png"],
      description: descriptions.marshroom,
      category: "agriculture",
    },
  ];
  