import ProductCard from "./components/ProductCard";
// import Coverimg from "@/components/Coverimg";

// 提取統一的描述文字
const teaDescription = (
  <div>
    <p className="mb-4">
      正常發酵、無烘焙的高山烏龍茶<br />
      來自高山海拔超過1500公尺以上，獨特的高山環境和氣候條件讓這款茶葉成為台灣頂級烏龍茶之一。大禹嶺、梨山、阿里山的茶葉以其清新、香醇的口感和極具層次感的香氣，深受茶友們的推崇。
    </p>
    <h4 className="text-lg font-bold mb-2">產品特色：</h4>
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li>香氣與口感：高山烏龍茶具備獨特的花香與果香，軟潤好入喉，喉韻十足，飲後令人回味無窮。</li>
      <li>生長環境：由於高海拔、雲霧繚繞、日夜溫差大，這些特殊的自然條件使茶葉的成長速度較慢，葉片較厚，且富含更多天然營養成分，這也使得茶葉的味道更加鮮明、醇厚。</li>
      <li>健康益處：高山烏龍茶富含多種抗氧化物質，如茶多酚和兒茶素，這些成分有助於抗衰老、促進新陳代謝、降血脂、抗炎等健康效益。此外，由於它的咖啡因含量較低，也適合日常飲用，不會造成過多的興奮或不安。</li>
      <li>茶葉來自傳承百年茶園的第四代茶商經營的美而佳茶園。其優質茶葉的肥料養分是以甘蔗渣、米糠、花生殼、黃豆胚芽、蚵殼粉、魚骨、昆布等培育而成。所以茶葉能久浸不苦澀，且前三泡皆能保持清香口感，回味無窮。</li>
    </ul>
    <p className="mb-2"><strong>產地:</strong> 台灣</p>
    <p className="mb-2"><strong>規格:</strong> 四兩(150g)裝一包</p>
    <p className="mb-2"><strong>保存期限:</strong> 包裝標示</p>
    <p><strong>保存方式:</strong> 避免高溫、潮濕、日光直射</p>
    <p><strong>包裝方式:</strong> 抽真空包裝</p>
  </div>
);

// 茶瓜子描述
const guaDescription = (
  <div>
    <p className="mb-4">
      茶瓜子，以台灣茶園的茶籽為主要原料，經過嚴選、輕烘、調味，成為風味獨特、營養豐富的小零食。
    </p>
    <h4 className="text-lg font-bold mb-2">產品特色：</h4>
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li>天然原料：嚴選上等茶籽，確保每顆瓜子都飽滿、香脆。</li>
      <li>無添加，純自然：無添加人工香料、防腐劑，讓您放心享受自然美味。</li>
      <li>健康養生：含有豐富的膳食纖維、天然多酚與維生素E，促進消化、抗氧化。</li>
      <li>獨特風味：輕烘烤製程保留茶葉的濃香，茶香與瓜子清香相互融合，味道層次分明。</li>
      <li>多種用途：茶瓜子適合搭配茶飲或作為聚餐小零食，更是冬季健康的日常小點。</li>
    </ul>
    <p className="mb-2"><strong>產地:</strong> 台灣雲林西螺</p>
    <p className="mb-2"><strong>規格:</strong> 200g/包</p>
    <p className="mb-2"><strong>保存期限:</strong> 一年(未開封狀態下)</p>
    <p><strong>保存方式:</strong> 避免高溫、潮濕、日光直射</p>
  </div>
);

// 烏龍茶籽油描述
const oilDescription = (
  <div>
    <p className="mb-4">
      台灣自產自銷茶園，用最天然方式萃取而成的茶籽油，蘊含茶葉與芝麻的獨特香氣，更帶來順滑的口感，是無添加、無混合的純植物高級食用油。
    </p>
    <h4 className="text-lg font-bold mb-2">產品特點：</h4>
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li>含有高於80%以上豐富的單元不飽和脂肪酸，有助於心血管健康。</li>
      <li>高發煙點(約220度C)，適合涼拌、煎、煮、炒、炸各種料理，不易氧化。</li>
      <li>不僅是廚房好油，也是護手、護髮、護牙的健康聖品。</li>
    </ul>
    <p className="mb-2"><strong>產地:</strong> 台灣</p>
    <p className="mb-2"><strong>規格:</strong> 560 ml/瓶</p>
    <p><strong>保存期限:</strong> 一年(未開封狀態下)</p>
  </div>
);

// 高山香菇描述
const marshroomDescription = (
  <div>
    <p className="mb-4">
      杉林溪高山原生香菇由果農以傳統與創新並行的技術精心栽培，呈現純淨無瑕的品質。無農藥、無催熟、無二氧化硫燻製與無漂白處理，讓您安心品味自然的原汁原味。
    </p>
    <h4 className="text-lg font-bold mb-2">產品特點：</h4>
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li>極致口感與營養：香菇質地細緻，富含膳食纖維、維生素D和多種礦物質。</li>
      <li>可直接生食，也適合各式料理如湯品、燉菜。</li>
    </ul>
    <p className="mb-2"><strong>產地:</strong> 台灣</p>
    <p className="mb-2"><strong>規格:</strong> 150g/包</p>
    <p><strong>保存期限:</strong> 一年(未開封狀態下)</p>
  </div>
);
const redDescription = (
  <div className="space-y-4">
    <h1 className="text-2xl font-bold">台東鹿野紅烏龍茶</h1>
    <p>
      台東鹿野紅烏龍茶是台灣東部獨具特色的茶葉，擁有豐富的歷史背景、獨特的栽培環境以及精緻的製茶工藝。
      這款茶的魅力不僅在於其精緻的外觀和味道，更在於其獨特的香氣和口感層次，這使它在台灣各種茶葉中脫穎而出。
    </p>
    <h2 className="text-xl font-semibold">地理環境與氣候特性</h2>
    <p>
      鹿野位於台東縣的東部，這裡山清水秀，擁有典型的熱帶氣候與高海拔區域的涼爽氣候。
      這種大陸與海洋交界地帶的特殊環境，造就了茶葉生長過程中的顯著日夜溫差，促使茶葉的香氣和風味得到更好的發展。
      鹿野地區的土壤含有豐富的有機質，有助於茶樹根部的生長與茶葉品質的提升，特別適合種植紅烏龍茶。
    </p>
    <h2 className="text-xl font-semibold">紅烏龍茶的發酵特徵</h2>
    <p>
      紅烏龍茶發酵程度約為55~70%，趨近於紅茶。這種中等發酵的處理方式，既保留了烏龍茶的清新香氣，
      又帶有紅茶的濃郁口感，形成了獨特的風味。
    </p>
    <h2 className="text-xl font-semibold">風味特徵與口感</h2>
    <p>
      鹿野紅烏龍茶以其獨特的香氣與口感深受喜愛。茶湯的顏色金黃透亮，帶有溫暖的琥珀色。
      第一口品嚐時，可以感受到明顯糖香、水甜及在口腔中留下回甘。
      由於其較高的發酵程度，鹿野紅烏龍茶比青心烏龍茶來得更加圓潤，無論是溫熱或冷飲，都能提供不同的品飲樂趣。
    </p>
    <h2 className="text-xl font-semibold">健康效益</h2>
    <p>
      像其他烏龍茶一樣，鹿野紅烏龍茶富含茶多酚和抗氧化物質，這些成分有助於抗衰老、促進新陳代謝和減少自由基的損害。
      紅烏龍茶還能幫助消化，改善食欲，並且具有一定的利尿作用，有助於清理體內毒素。
      此外，紅烏龍茶含有的咖啡因可以幫助提神，讓人在日常工作或學習中保持清醒。
    </p>
    <h2 className="text-xl font-semibold">市場與文化價值</h2>
    <p>
      鹿野紅烏龍茶已逐漸成為台灣茶產業中的明星產品，不僅在國內市場受到熱捧，也在國際茶葉展覽上獲得高度評價。
      隨著台灣茶文化的傳播，鹿野紅烏龍茶不僅承載了台東地區的風味特色，也代表了台灣茶藝的精緻與高雅。
      這款茶的出現，不僅讓人欣賞到茶葉的美味，也能感受到台灣茶農對土地與自然的尊重與熱愛。
    </p>
    <h2 className="text-xl font-semibold">產品資訊</h2>
    <ul className="list-disc list-inside">
      <li>產地: 台灣</li>
      <li>規格: 四兩(150g)裝一包</li>
      <li>保存期限: 包裝標示</li>
      <li>保存方式: 避免高溫、潮濕、日光直射</li>
      <li>包裝: 抽真空包裝</li>
    </ul>
  </div>
);

const guaprice = (<div><p className="text-black">NT$ 120/包</p><p className="text-red-500">滿十包以上NT$ 100/包</p></div>);
const marshprice = (<div><p className="text-black">NT$ 600/包</p><p className="text-red-500">滿五包以上NT$ 500/包</p></div>);
const oilprice = (<div><p className="text-black">NT$ 600/瓶（無量化）</p><p className="text-black" >NT$ 800/瓶（有量化）</p></div>);
const teali_price = (<div><p className="text-black">NT$ 800/包（四兩150g）</p><p className="text-red-500">滿4包以上（含）8折<br></br><p>
  滿12包以上（含）7折</p></p></div>);
const teaali_price = (<div><p className="text-black">NT$ 500/包（四兩150g）</p><p className="text-red-500">滿4包以上（含）8折<br></br><p>
  滿12包以上（含）7折</p></p></div>);
const teaada_price = (<div><p className="text-black">NT$ 1100/包（四兩150g）</p><p className="text-red-500">滿4包以上（含）8折<br></br><p>
滿12包以上（含）7折</p></p></div>);
const teared_price = (<div><p className="text-black">NT$ 350/包（四兩150g）</p><p className="text-red-500">滿4包以上（含）8折<br></br><p>
滿12包以上（含）7折</p></p></div>);



export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="pt-32">

        <main className="p-8 bg-maincolor">
          <h3 className="text-xl font-bold mb-4 text-center text-black">【 茶葉類 】</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <ProductCard
              name="【台灣高山茶】台東鹿野紅烏龍茶"
              price={teared_price}
              images={[
                `/goods/teared1.jpg`,
                `/goods/teared2.jpg`,
                `/goods/teared3.jpg`
              ]}
              description={redDescription}
            />
            <ProductCard
              name="【台灣高山茶】阿里山金萱烏龍茶"
              price={teaali_price}
              images={[
                `/goods/tea13.jpg`,
                `/goods/teaall.jpg`,
              ]}
              description={teaDescription}
              
            />
            <ProductCard
              name="【台灣高山茶】梨山新佳陽烏龍茶"
              price= {teali_price}
              images={[
                `/goods/tea16.jpg`,
                `/goods/teaall.jpg`,
              ]}
              description={teaDescription}
            />
            <ProductCard
              name="【台灣高山茶】大禹嶺手採88K高山烏龍茶"
              price={teaada_price}
              images={[
                `/goods/tea20.jpg`,
                `/goods/teaall.jpg`,
              ]}
              description={teaDescription} // 傳遞統一的描述文字
            />
            </div>

            <h3 className="text-xl font-bold mb-4 text-center text-black">【 農產品 】</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <ProductCard
              name="【新年必備】茶瓜子"
              price= {guaprice}
              images={[
                `/goods/gua1.png`,
                `/goods/gua2.png`,
              ]}
              description={guaDescription}
            />
            <ProductCard
              name="【健康養身】烏龍茶籽油-東方的橄欖油"
              price={oilprice}
              images={[
                `/goods/oil1.png`,
                `/goods/oil2.png`,
              ]}
              description={oilDescription}
            />
            <ProductCard
              name="【健康養身】杉林溪高山原生香菇"
              price= {marshprice}
              images={[
                `/goods/marshroom1.png`,
                `/goods/marshroom2.png`,
              ]}
              description={marshroomDescription}
            />

          </div>
        </main>
      </div>
    </div>
  );
}
