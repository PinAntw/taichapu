import Image from "next/image";

export default function FooterCus() {
  return (
    <footer className="bg-maingreen text-white text-center p-4 md:p-8 w-full">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
        {/* 圖片 */}
        <div className="flex-shrink-0">
          <Image
            src="/qrcode.jpg" // 使用 public 資料夾內的圖片
            alt="qrcode"
            width={128} // 設定圖片寬度
            height={128} // 設定圖片高度
            className="md:w-32 md:h-32 object-contain"
          />
        </div>

        {/* 文字 */}
        <div className="text-center">
          <p className="text-sm md:text-xl font-extrabold">台茶舖 - 最懂你的小舖</p>
          <p className="text-xs md:text-lg text-gray-400 font-bold mt-1">
            Line ID: jefflee614  （富哥） 
          </p>
          <p className="text-xs md:text-lg text-gray-400 font-bold">
            或掃描 QRcode 專人回覆
          </p>
        </div>
      </div>
    </footer>
  );
}
