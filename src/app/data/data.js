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
    gua: (
      <div>
        <h2 className="text-xl font-bold mb-4">茶瓜子——傳統風味與健康的完美結合</h2>
        <p className="mb-4">
          茶瓜子，以台灣南瓜籽為主要原料，經過嚴選、輕烘、調味，成為風味獨特、營養豐富的小零食。
        </p>
      </div>
    ),
    oil: (
      <div>
        <h2 className="text-xl font-bold mb-4">烏龍茶籽油-東方的橄欖油</h2>
        <p className="mb-4">
          台灣自產自銷茶園，用最天然方式萃取而成的茶籽油，蘊含茶葉與芝麻的獨特香氣。
        </p>
      </div>
    ),
    marshroom: (
      <div>
        <h2 className="text-xl font-bold mb-4">杉林溪高山原生香菇 — 高山淨土的精華</h2>
        <p className="mb-4">
          在台灣南投海拔1700公尺的杉林溪，由果農以傳統與創新並行的技術精心栽培而成。
        </p>
      </div>
    ),
  };
  
  // **商品列表**
  export const products = [
    {
      id: "teared",
      name: "【台灣高山茶】台東鹿野紅烏龍茶",
      price: prices.teared_price,
      images: ["/goods/teared1.jpg", "/goods/teared2.jpg", "/goods/teared3.jpg"],
      description: descriptions.tea,
      category: "tea",
    },
    {
      id: "teaali",
      name: "【台灣高山茶】阿里山金萱烏龍茶",
      price: prices.teaali_price,
      images: ["/goods/tea13.jpg", "/goods/teaali.jpg", "/goods/teaall.jpg"],
      description: descriptions.tea,
      category: "tea",
    },
    {
      id: "teali",
      name: "【台灣高山茶】梨山新佳陽烏龍茶",
      price: prices.teali_price,
      images: ["/goods/tea16.jpg", "/goods/teaall.jpg"],
      description: descriptions.tea,
      category: "tea",
    },
    {
      id: "teaada",
      name: "【台灣高山茶】大禹嶺手採88K高山烏龍茶",
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
  