/* 2026 Moon BBQ guide — zh / en / vi */
const ORIGIN_ADDR = "新北市永和區永貞路190號";
const FINAL_DEST = "福和橫移門";
const STORE_DEST = { pxmart: "全聯福利中心 永和永貞店", carrefour: "家樂福超市 永和永貞店" };
const PEOPLE = 4;
const CHECK_KEY = 'moon_bbq_checked_items_2026_v2';
const LANG_KEY = 'moon_bbq_lang';

const I18N = {
  zh: {
    doc_title: "2026 中秋烤肉・福和橋下 4 人手冊",
    nav_title: "4人中秋烤肉・福和橋下陣地手冊",
    nav_sub: "永貞路190號 ➔ 全聯/家樂福 ➔ 福和橫移門",
    share: "傳給同行夥伴", install: "安裝到手機主畫面",
    badge_official: "新北市高灘處公告・中秋合法限定專區",
    hero_a: "2026 中秋炭火賞月・", hero_b: "福和橋下4人攻略",
    hero_desc: "合法、有水、有廁所，橋下遮風避雨！選【全聯】或【家樂福】一站買齊食材與離地爐具，開啟完美的溪畔烤肉夜。",
    k_origin: "出發起點", k_hours: "合法時段", k_entry: "進場路徑", k_rules: "編制規範",
    v_entry: "福和橫移門(水門)", v_rules: "4人分攤 / 離地30cm",
    sec_notice: "新北市官方合法烤肉區規範（福和橋下）",
    notice_tag: "新北水利局高灘處指定", notice_name: "福和橋下福和運動公園 指定烤肉專區",
    notice_period: "限定期間：9/25(五) ~ 9/28(一) 共4天連假",
    n1_t: "精確進場位置",
    n1_d: "由<strong>「福和橫移門（福和水門）」</strong>進入河濱，沿福和橋穿過跳蚤市場，往新店溪河邊方向前行約 <strong>300 公尺</strong>之橋下平坦鋪面。",
    n2_t: "生火與安全規範",
    n2_d: "<strong>必須使用離地至少 30 公分之烤肉架</strong>或便攜瓦斯爐具，嚴禁直接在水泥地或草皮上生火。",
    n3_t: "水源與公廁配備",
    n3_d: "橋下鄰近運動公園公共廁所與水槽，洗手、滅火取水方便（請勿傾倒油脂堵塞管線）。",
    n4_t: "嚴格撤場時間",
    n4_d: "每日開放 <strong>10:00 至 22:00</strong>。22:00 前必須以大量清水淋透炭火、做好垃圾與廚餘分類後離場。",
    notice_disclaimer: "※ 實際開放範圍與規定以新北市高灘地工程管理處當年度公告及現場告示為準。",
    sec_shop: "4 人採買清單（二選一・一站買齊）", reset: "重設勾選",
    tabA: "方案 A：全聯", tabB: "方案 B：家樂福",
    progress_label: "採買勾選進度", unit: "樣", zh_hint: "",
    sec_nav: "Google Maps 雙段導航", nav_desc: "點擊即可開啟 Google 地圖，已預先填好起終點與交通方式：",
    leg1: "第 1 段路程", leg1_time: "約 3~8 分鐘", leg1_desc: "先到選定的賣場採買全部生鮮、木炭與離地烤架。",
    leg2: "第 2 段路程", leg2_time: "約 8~12 分鐘", leg2_dest: "福和橫移門（福和運動公園）",
    leg2_desc: "由福和水門進入橋下，往溪邊 300m 抵達合法烤肉區。",
    bike: "YouBike 單車", bus: "公車", transit: "公車 / 大眾運輸", walk: "步行",
    bike_note: "※ 若 Google 地圖未提供單車路線，請改用步行路線騎乘；YouBike 站點可用「YouBike 微笑單車」App 查詢。",
    sec_sched: "4人一日中秋炭烤時程建議",
    sched: [
      ["15:00", "永貞路 190 號集合・確認通路", "4人會合，確認購物袋、保冰袋與悠遊卡，決定去全聯或家樂福。"],
      ["15:15~16:00", "一站買齊食材與耗材", "採買 4 人份肉品、蔬菜、飲品，以及符合離地 30cm 規範的烤架與木炭。"],
      ["16:15", "由福和橫移門進駐福和橋下", "抵達橋下指定區，利用公廁旁水槽清洗蔬菜、架設爐具。"],
      ["16:45~21:00", "炭火開烤・溪畔賞月", "享用牛小排、香腸與時蔬，吹著涼風歡度中秋夜晚。"],
      ["21:00~21:45", "徹底滅火・垃圾分類・22:00前離場", "取水淋透炭灰，垃圾打包分類帶走，符合 22:00 前離場規範。"]
    ],
    sec_bill: "4 人分帳計算機（一鍵複製 LINE 請款）",
    bill_desc: "採買後輸入發票總金額，系統自動 4 人均攤並產生 LINE 請款訊息：",
    bill_store: s => `${s} 發票總額`, bill_extra: "額外雜支 / 冰塊 / 飲料",
    total: "總花費合計", per: "每人應付 (共 4 位)", per_unit: "/ 人", copy_btn: "複製 LINE 請款訊息",
    round_note: d => d > 0 ? `※ 每人金額無條件進位，4 人合計會比總額多 $${d}（可當作公基金）。` : "",
    foot1: "🥮 2026 新北中秋烤肉行前手冊・永貞路190號出發", foot2: "遵守 22:00 前熄火離場規範・落實垃圾不落地",
    store_px: "全聯福利中心", store_cf: "家樂福", store_px_short: "全聯", store_cf_short: "家樂福",
    t_reset: "已重設目前清單勾選狀態", t_bill: "已複製 LINE 請款文案！快貼進群組", t_share: "已複製手冊連結！快傳給同行夥伴", t_fail: "複製失敗，請手動選取",
    share_text: u => `🌕 2026 中秋烤肉 4 人手冊（永貞路190號出發 ➔ 福和橋下合法專區）：\n${u}\n內含全聯/家樂福採買清單與 Google 地圖導航（中文 / English / Tiếng Việt）`,
    bill_msg: (s, a, b, t, p) => `🌕【2026 中秋烤肉 4 人均攤請款單】\n・採買通路：${s}\n・活動地點：福和橋下福和運動公園（合法專區）\n・採買發票：$${a} 元\n` + (b > 0 ? `・雜支冷飲：$${b} 元\n` : '') + `----------------------\n💰 總計花費：$${t} 元\n👉 每人應付：$${p} 元（共 4 位均攤，無條件進位）\n\n再麻煩大家 LINE Pay 或轉帳囉～中秋炭烤大成功！🔥🥩`
  },
  en: {
    doc_title: "2026 Mid-Autumn BBQ · Fuhe Bridge Guide for 4",
    nav_title: "Mid-Autumn BBQ for 4 · Fuhe Bridge Guide",
    nav_sub: "No.190 Yongzhen Rd ➔ PX Mart / Carrefour ➔ Fuhe Floodgate",
    share: "Share with friends", install: "Install on home screen",
    badge_official: "Official legal BBQ zone · New Taipei City (Mid-Autumn only)",
    hero_a: "2026 Moon Festival BBQ · ", hero_b: "Under Fuhe Bridge, party of 4",
    hero_desc: "Legal, with tap water and toilets, and sheltered from rain under the bridge! Pick PX Mart or Carrefour, buy all the food and a raised grill in one stop, and enjoy a riverside BBQ night. In Taiwan, BBQ is THE Mid-Autumn tradition.",
    k_origin: "Start point", k_hours: "Legal hours", k_entry: "Entrance", k_rules: "Rules",
    v_entry: "Fuhe Floodgate 福和橫移門", v_rules: "Split by 4 / grill 30cm high",
    sec_notice: "Official BBQ zone rules (under Fuhe Bridge)",
    notice_tag: "Designated by New Taipei High Riverbank Office", notice_name: "Fuhe Sports Park, under Fuhe Bridge — designated BBQ zone",
    notice_period: "Only Fri 9/25 – Mon 9/28 (4-day holiday)",
    n1_t: "Exact location",
    n1_d: "Enter the riverside through the <strong>Fuhe Floodgate (福和橫移門 / 福和水門)</strong>, walk along Fuhe Bridge past the flea market, then about <strong>300 m</strong> toward the Xindian River to the flat paved area under the bridge.",
    n2_t: "Fire & safety rules",
    n2_d: "<strong>Your grill must stand at least 30 cm above the ground</strong> (or use a portable gas stove). Making a fire directly on concrete or grass is strictly forbidden.",
    n3_t: "Water & toilets",
    n3_d: "Public toilets and sinks of the sports park are nearby — handy for washing hands and getting water to put out the fire. Do not pour grease into the drains.",
    n4_t: "Strict closing time",
    n4_d: "Open daily <strong>10:00 – 22:00</strong>. Before 22:00 you must soak the charcoal with plenty of water, sort trash and food waste, and leave.",
    notice_disclaimer: "※ The actual zone and rules follow this year's official announcement by the New Taipei High Riverbank Construction Management Office and on-site signs.",
    sec_shop: "Shopping list for 4 (choose one store)", reset: "Reset checks",
    tabA: "Plan A: PX Mart 全聯", tabB: "Plan B: Carrefour 家樂福",
    progress_label: "Shopping progress", unit: "items",
    zh_hint: "💡 The small grey Chinese text is the name on the shelf label — show it to store staff if you can't find an item.",
    sec_nav: "Google Maps navigation (2 legs)", nav_desc: "Tap to open Google Maps with start, destination and travel mode pre-filled:",
    leg1: "Leg 1", leg1_time: "about 3–8 min", leg1_desc: "Go to the chosen store first and buy all food, charcoal and the raised grill.",
    leg2: "Leg 2", leg2_time: "about 8–12 min", leg2_dest: "Fuhe Floodgate (Fuhe Sports Park)",
    leg2_desc: "Go through the floodgate, then 300 m toward the river to reach the legal BBQ zone.",
    bike: "YouBike", bus: "Bus", transit: "Bus / transit", walk: "Walk",
    bike_note: "※ If Google Maps shows no cycling route, follow the walking route by bike. Find YouBike stations in the “YouBike 微笑單車” app (EasyCard needed).",
    sec_sched: "Suggested one-day schedule",
    sched: [
      ["15:00", "Meet at No.190 Yongzhen Rd", "All 4 meet up; check shopping bags, cooler bag and EasyCards; decide PX Mart or Carrefour."],
      ["15:15~16:00", "One-stop shopping", "Buy meat, vegetables and drinks for 4, plus a grill that stands 30 cm high and charcoal."],
      ["16:15", "Enter via Fuhe Floodgate", "Arrive at the zone under the bridge, wash vegetables at the sinks and set up the grill."],
      ["16:45~21:00", "Grill & moon-gazing", "Enjoy short ribs, sausages and vegetables in the river breeze."],
      ["21:00~21:45", "Put out fire · sort trash · leave before 22:00", "Soak the ashes with water, pack and sort all trash, and leave before the 22:00 closing time."]
    ],
    sec_bill: "Bill splitter for 4 (copy a LINE message)",
    bill_desc: "After shopping, enter the receipt total. It is split by 4 and a payment request for LINE is generated:",
    bill_store: s => `${s} receipt total`, bill_extra: "Extras / ice / drinks",
    total: "Grand total", per: "Each person pays (4 people)", per_unit: "/ person", copy_btn: "Copy LINE message",
    round_note: d => d > 0 ? `※ Rounded up per person, so 4 shares add up to $${d} more than the total (keep it as group fund).` : "",
    foot1: "🥮 2026 New Taipei Mid-Autumn BBQ guide · starting from No.190 Yongzhen Rd", foot2: "Fire out and leave before 22:00 · take all your trash with you",
    store_px: "PX Mart 全聯", store_cf: "Carrefour 家樂福", store_px_short: "PX Mart", store_cf_short: "Carrefour",
    t_reset: "Checklist reset", t_bill: "LINE message copied! Paste it in the group", t_share: "Link copied! Send it to your friends", t_fail: "Copy failed — please select manually",
    share_text: u => `🌕 2026 Mid-Autumn BBQ guide for 4 (No.190 Yongzhen Rd ➔ legal BBQ zone under Fuhe Bridge):\n${u}\nShopping lists for PX Mart / Carrefour + Google Maps navigation (中文 / English / Tiếng Việt)`,
    bill_msg: (s, a, b, t, p) => `🌕 [2026 Mid-Autumn BBQ — split by 4]\n・Store: ${s}\n・Place: Fuhe Sports Park, under Fuhe Bridge (legal zone)\n・Receipt: NT$${a}\n` + (b > 0 ? `・Extras & drinks: NT$${b}\n` : '') + `----------------------\n💰 Total: NT$${t}\n👉 Each pays: NT$${p} (4 people, rounded up)\n\nPlease pay by LINE Pay or bank transfer. Thanks — great BBQ! 🔥🥩`
  },
  vi: {
    doc_title: "Nướng BBQ Trung thu 2026 · Cẩm nang cầu Phúc Hòa cho 4 người",
    nav_title: "BBQ Trung thu 4 người · Cẩm nang gầm cầu Phúc Hòa",
    nav_sub: "Số 190 đường Yongzhen ➔ PX Mart / Carrefour ➔ Cổng Fuhe",
    share: "Gửi cho bạn bè", install: "Cài vào màn hình chính",
    badge_official: "Khu nướng BBQ hợp pháp · TP. Tân Bắc công bố (chỉ dịp Trung thu)",
    hero_a: "Nướng than ngắm trăng Trung thu 2026 · ", hero_b: "Gầm cầu Phúc Hòa, nhóm 4 người",
    hero_desc: "Hợp pháp, có nước máy, có nhà vệ sinh, dưới gầm cầu không lo mưa! Chọn PX Mart (全聯) hoặc Carrefour (家樂福), mua đủ đồ ăn và bếp nướng có chân chỉ trong một lần, rồi tận hưởng đêm BBQ bên sông. Ở Đài Loan, Trung thu là phải nướng BBQ!",
    k_origin: "Điểm xuất phát", k_hours: "Giờ được phép", k_entry: "Lối vào", k_rules: "Quy định",
    v_entry: "Cổng Fuhe 福和橫移門", v_rules: "Chia 4 / bếp cao 30cm",
    sec_notice: "Quy định khu nướng BBQ chính thức (gầm cầu Phúc Hòa)",
    notice_tag: "Do Sở quản lý bãi sông Tân Bắc chỉ định", notice_name: "Công viên thể thao Fuhe, dưới cầu Phúc Hòa — khu BBQ chỉ định",
    notice_period: "Chỉ mở: Thứ 6 25/9 – Thứ 2 28/9 (nghỉ lễ 4 ngày)",
    n1_t: "Vị trí chính xác",
    n1_d: "Vào bãi sông qua <strong>Cổng chắn lũ Fuhe (福和橫移門 / 福和水門)</strong>, đi dọc cầu Phúc Hòa qua chợ trời, rồi đi khoảng <strong>300 m</strong> về phía sông Tân Điếm đến khu nền phẳng dưới gầm cầu.",
    n2_t: "Quy định về lửa và an toàn",
    n2_d: "<strong>Bếp nướng phải cao cách mặt đất ít nhất 30 cm</strong> (hoặc dùng bếp ga mini). Nghiêm cấm đốt lửa trực tiếp trên nền xi măng hoặc bãi cỏ.",
    n3_t: "Nước và nhà vệ sinh",
    n3_d: "Gần đó có nhà vệ sinh công cộng và bồn rửa của công viên thể thao — tiện rửa tay và lấy nước dập lửa. Không đổ dầu mỡ xuống cống.",
    n4_t: "Giờ rời đi nghiêm ngặt",
    n4_d: "Mở cửa mỗi ngày <strong>10:00 – 22:00</strong>. Trước 22:00 phải dội thật nhiều nước cho than tắt hẳn, phân loại rác và thức ăn thừa rồi rời đi.",
    notice_disclaimer: "※ Phạm vi và quy định thực tế theo thông báo chính thức năm nay của Sở quản lý bãi sông TP. Tân Bắc và biển báo tại chỗ.",
    sec_shop: "Danh sách mua sắm cho 4 người (chọn 1 siêu thị)", reset: "Bỏ chọn tất cả",
    tabA: "Phương án A: PX Mart 全聯", tabB: "Phương án B: Carrefour 家樂福",
    progress_label: "Tiến độ mua sắm", unit: "món",
    zh_hint: "💡 Dòng chữ Trung màu xám nhỏ là tên trên nhãn kệ hàng — nếu không tìm thấy, hãy đưa cho nhân viên siêu thị xem.",
    sec_nav: "Chỉ đường Google Maps (2 chặng)", nav_desc: "Bấm để mở Google Maps, đã điền sẵn điểm đi, điểm đến và phương tiện:",
    leg1: "Chặng 1", leg1_time: "khoảng 3–8 phút", leg1_desc: "Đến siêu thị đã chọn trước, mua hết đồ tươi, than và bếp nướng có chân.",
    leg2: "Chặng 2", leg2_time: "khoảng 8–12 phút", leg2_dest: "Cổng Fuhe (Công viên thể thao Fuhe)",
    leg2_desc: "Đi qua cổng chắn lũ, đi thêm 300 m về phía sông là tới khu BBQ hợp pháp.",
    bike: "Xe đạp YouBike", bus: "Xe buýt", transit: "Xe buýt / công cộng", walk: "Đi bộ",
    bike_note: "※ Nếu Google Maps không có đường cho xe đạp, hãy đạp xe theo đường đi bộ. Tìm trạm YouBike bằng ứng dụng “YouBike 微笑單車” (cần thẻ EasyCard / 悠遊卡).",
    sec_sched: "Lịch trình gợi ý trong ngày",
    sched: [
      ["15:00", "Tập trung tại số 190 đường Yongzhen", "4 người gặp nhau; kiểm tra túi mua sắm, túi giữ lạnh, thẻ EasyCard; quyết định đi PX Mart hay Carrefour."],
      ["15:15~16:00", "Mua đủ mọi thứ trong một lần", "Mua thịt, rau, đồ uống cho 4 người, cùng bếp nướng cao 30 cm và than."],
      ["16:15", "Vào gầm cầu qua Cổng Fuhe", "Đến khu chỉ định dưới gầm cầu, rửa rau ở bồn rửa và lắp bếp."],
      ["16:45~21:00", "Nướng than · ngắm trăng bên sông", "Thưởng thức sườn bò, xúc xích Đài Loan và rau củ trong gió sông mát."],
      ["21:00~21:45", "Dập lửa · phân loại rác · rời đi trước 22:00", "Dội nước cho tro than tắt hẳn, gom và phân loại rác mang đi, rời khu trước 22:00."]
    ],
    sec_bill: "Máy tính chia tiền 4 người (sao chép tin nhắn LINE)",
    bill_desc: "Mua xong, nhập tổng tiền hóa đơn. Hệ thống tự chia đều cho 4 người và tạo tin nhắn đòi tiền để gửi LINE:",
    bill_store: s => `Tổng hóa đơn ${s}`, bill_extra: "Chi phí khác / đá / đồ uống",
    total: "Tổng chi phí", per: "Mỗi người trả (4 người)", per_unit: "/ người", copy_btn: "Sao chép tin nhắn LINE",
    round_note: d => d > 0 ? `※ Làm tròn lên cho mỗi người, nên 4 phần cộng lại nhiều hơn tổng $${d} (để làm quỹ chung).` : "",
    foot1: "🥮 Cẩm nang BBQ Trung thu Tân Bắc 2026 · xuất phát từ số 190 đường Yongzhen", foot2: "Tắt lửa và rời đi trước 22:00 · mang hết rác về",
    store_px: "PX Mart 全聯", store_cf: "Carrefour 家樂福", store_px_short: "PX Mart (全聯)", store_cf_short: "Carrefour (家樂福)",
    t_reset: "Đã bỏ chọn danh sách", t_bill: "Đã sao chép tin nhắn LINE! Dán vào nhóm nhé", t_share: "Đã sao chép liên kết! Gửi cho bạn bè nhé", t_fail: "Sao chép thất bại — hãy chọn thủ công",
    share_text: u => `🌕 Cẩm nang BBQ Trung thu 2026 cho 4 người (số 190 đường Yongzhen ➔ khu BBQ hợp pháp dưới cầu Phúc Hòa):\n${u}\nCó danh sách mua sắm PX Mart / Carrefour + chỉ đường Google Maps (中文 / English / Tiếng Việt)`,
    bill_msg: (s, a, b, t, p) => `🌕 [BBQ Trung thu 2026 — chia đều 4 người]\n・Siêu thị: ${s}\n・Địa điểm: Công viên thể thao Fuhe, dưới cầu Phúc Hòa (khu hợp pháp)\n・Hóa đơn: ${a} Đài tệ\n` + (b > 0 ? `・Chi phí khác & đồ uống: ${b} Đài tệ\n` : '') + `----------------------\n💰 Tổng cộng: ${t} Đài tệ\n👉 Mỗi người trả: ${p} Đài tệ (4 người, làm tròn lên)\n\nMọi người chuyển qua LINE Pay hoặc chuyển khoản giúp mình nhé. Buổi BBQ tuyệt vời! 🔥🥩`
  }
};

const L = (zh, en, vi) => ({ zh, en, vi });
const storePlans = {
  pxmart: {
    title: L("全聯福利中心（永和永貞店 / 中山店）", "PX Mart 全聯 (Yonghe Yongzhen / Zhongshan branch)", "PX Mart 全聯 (chi nhánh Yongzhen / Zhongshan, Vĩnh Hòa)"),
    badge: L("全聯一站買齊", "One stop at PX Mart", "Mua đủ tại PX Mart"),
    advantage: L("✨ 亮點：離出發點極近；PRIME 帶骨牛小排、生醃雞肉、碳烤玉米、離地烤肉爐、箱購茶飲。",
                 "✨ Highlights: very close to the start point; PRIME bone-in short ribs, marinated chicken, grilled corn, raised grill, bottled tea.",
                 "✨ Điểm nổi bật: rất gần điểm xuất phát; sườn bò PRIME có xương, gà ướp sẵn, bắp nướng, bếp nướng có chân, trà đóng chai."),
    sections: [
      { category: L("🥩 肉品與海鮮（4人份）", "🥩 Meat & seafood (for 4)", "🥩 Thịt & hải sản (cho 4 người)"), items: [
        { id: "px_m1", ...L("【漢克嚴選】美國和鑽牛 PRIME 帶骨牛小排 (1kg)", "US PRIME bone-in beef short ribs (1 kg)", "Sườn bò Mỹ PRIME có xương (1 kg)") },
        { id: "px_m2", ...L("【赤豪家庭私廚】生醃椒鹽雞肉 4件組 (1.7kg)", "Salt & pepper marinated chicken, 4-pack (1.7 kg)", "Gà ướp muối tiêu, bộ 4 gói (1,7 kg)") },
        { id: "px_m3", ...L("冷藏台灣 CAS 豬梅花/豬五花肉片 2盒 (約500g)", "Taiwan pork shoulder / pork belly slices, 2 packs (~500 g)", "Thịt heo Đài Loan thái lát (nạc vai / ba chỉ), 2 hộp (~500 g)") },
        { id: "px_m4", ...L("生鮮白蝦 或 鮭魚下巴 1盒", "Fresh white shrimp or salmon collar, 1 pack", "Tôm thẻ tươi hoặc lườn cá hồi, 1 hộp") }
      ]},
      { category: L("🌽 蔬菜、玉米與吐司", "🌽 Vegetables, corn & toast", "🌽 Rau củ, bắp & bánh mì"), items: [
        { id: "px_v1", ...L("【炳叔】碳烤玉米 5入組 (小辣/原味)", "Pre-seasoned grilled corn, 5 pcs (mild spicy / original)", "Bắp nướng tẩm sẵn, 5 trái (cay nhẹ / vị gốc)") },
        { id: "px_v2", ...L("帶殼筊白筍 1包 (6~8支)", "Water bamboo shoots in husk, 1 bag (6–8 pcs)", "Củ niễng còn vỏ, 1 túi (6–8 củ)") },
        { id: "px_v3", ...L("玉米筍 2盒 + 金針菇 2包", "Baby corn ×2 + enoki mushrooms ×2", "Bắp non 2 hộp + nấm kim châm 2 gói") },
        { id: "px_v4", ...L("切邊白吐司 1條 (夾烤肉必備)", "Crustless white toast, 1 loaf (Taiwanese style: wrap the meat in toast!)", "Bánh mì sandwich trắng, 1 ổ (kiểu Đài Loan: kẹp thịt nướng!)") }
      ]},
      { category: L("🍶 飲品與醬料耗材", "🍶 Drinks, sauce & supplies", "🍶 Đồ uống, nước sốt & vật dụng"), items: [
        { id: "px_s1", ...L("【愛之味】分解茶 或 原萃綠茶 2大瓶", "Unsweetened tea / green tea, 2 large bottles", "Trà không đường / trà xanh, 2 chai lớn") },
        { id: "px_s2", ...L("黑松沙士 / 可口可樂 1大瓶", "HeySong Sarsaparilla or Coca-Cola, 1 large bottle", "HeySong Sarsi hoặc Coca-Cola, 1 chai lớn") },
        { id: "px_s3", ...L("金蘭 / 萬家香 烤肉醬 1瓶", "Taiwanese BBQ sauce (Kimlan / Wan Ja Shan), 1 bottle", "Sốt BBQ Đài Loan (Kimlan / Wan Ja Shan), 1 chai") },
        { id: "px_s4", ...L("【春風】廚房紙巾 + 濕紙巾 1包", "Kitchen paper towels + wet wipes", "Giấy bếp + khăn ướt") }
      ]},
      { category: L("🔥 烤具與木炭（離地30cm）", "🔥 Grill & charcoal (30 cm rule)", "🔥 Bếp nướng & than (quy định 30 cm)"), items: [
        { id: "px_t1", ...L("【妙管家】圓滿烤肉爐附配件組 (具支架離地30cm)", "Round BBQ grill set with legs (stands 30 cm high)", "Bộ bếp nướng tròn có chân (cao 30 cm)") },
        { id: "px_t2", ...L("木炭 2包 (每包約2.5kg)", "Charcoal, 2 bags (~2.5 kg each)", "Than củi, 2 bao (~2,5 kg/bao)") },
        { id: "px_t3", ...L("烤肉網 2片", "Grill nets ×2 (swap when dirty)", "Vỉ nướng ×2 (thay khi bẩn)") },
        { id: "px_t4", ...L("長柄烤肉夾 4支", "Long tongs ×4 (one each)", "Kẹp gắp dài ×4 (mỗi người 1 cái)") },
        { id: "px_t5", ...L("火種 2包 + 烤肉刷 2支", "Fire starters ×2 + sauce brushes ×2", "Viên mồi lửa ×2 + cọ phết sốt ×2") },
        { id: "px_t6", ...L("加厚鋁箔紙 1捲 + 大垃圾袋 3個", "Heavy-duty aluminium foil + 3 large trash bags", "Giấy bạc loại dày + 3 túi rác lớn") },
        { id: "px_t7", ...L("免洗餐盤、紙碗、筷子 4人份", "Disposable plates, bowls & chopsticks for 4", "Đĩa, bát, đũa dùng một lần cho 4 người") }
      ]}
    ]
  },
  carrefour: {
    title: L("家樂福（中秋專區精選）", "Carrefour 家樂福 (Mid-Autumn picks)", "Carrefour 家樂福 (hàng chọn lọc Trung thu)"),
    badge: L("家樂福一站買齊", "One stop at Carrefour", "Mua đủ tại Carrefour"),
    advantage: L("✨ 亮點：CAB 安格斯霜降牛、美淇豬梅花、黑橋牌香腸、摺疊不鏽鋼烤爐($599)、DAISHO 燒肉醬。",
                 "✨ Highlights: CAB Angus beef, pork shoulder slices, Black Bridge Taiwanese sausages, folding stainless grill ($599), DAISHO yakiniku sauce.",
                 "✨ Điểm nổi bật: bò Angus CAB, thịt nạc vai heo, xúc xích Đài Loan Black Bridge, bếp inox gấp gọn ($599), sốt nướng DAISHO."),
    sections: [
      { category: L("🥩 肉品與水產", "🥩 Meat & seafood", "🥩 Thịt & hải sản"), items: [
        { id: "cf_m1", ...L("CAB® 冷藏美國安格斯霜降燒烤片 1盒 ($350)", "CAB® US Angus marbled beef BBQ slices, 1 pack ($350)", "Bò Angus Mỹ CAB® thái lát nướng, 1 hộp ($350)") },
        { id: "cf_m2", ...L("美淇 冷凍台灣豬梅花烤肉片 1盒 ($235)", "Frozen Taiwan pork shoulder BBQ slices, 1 pack ($235)", "Thịt nạc vai heo Đài Loan đông lạnh thái lát, 1 hộp ($235)") },
        { id: "cf_m3", ...L("黑橋牌台灣香腸 1包", "Black Bridge Taiwanese sausages, 1 pack (sweet!)", "Xúc xích Đài Loan Black Bridge, 1 gói (vị ngọt!)") },
        { id: "cf_m4", ...L("冷凍金磚白蝦 1盒 ($399)", "Frozen white shrimp, 1 box ($399)", "Tôm thẻ đông lạnh, 1 hộp ($399)") },
        { id: "cf_m5", ...L("冷凍魷魚串燒 1包 ($259)", "Frozen squid skewers, 1 pack ($259)", "Mực xiên đông lạnh, 1 gói ($259)") }
      ]},
      { category: L("🌽 蔬菜與點心串燒", "🌽 Vegetables & snacks", "🌽 Rau củ & món ăn vặt"), items: [
        { id: "cf_v1", ...L("櫛瓜 1盒 + 切塊黃金玉米 1包 ($108)", "Zucchini + cut sweet corn ($108)", "Bí ngòi + bắp ngọt cắt khúc ($108)") },
        { id: "cf_v2", ...L("彩椒 1盒 ($95)", "Bell peppers, 1 pack ($95)", "Ớt chuông, 1 hộp ($95)") },
        { id: "cf_v3", ...L("春豐五香豆干 1包 ($69) + 起士培根麻糬串", "Five-spice dried tofu ($69) + cheese-bacon mochi skewers", "Đậu phụ khô ngũ vị ($69) + xiên mochi phô mai thịt xông khói") },
        { id: "cf_v4", ...L("湯種白吐司 1條 + 烤肉棉花糖 1包", "White toast, 1 loaf + marshmallows for grilling", "Bánh mì sandwich trắng 1 ổ + kẹo dẻo marshmallow để nướng") }
      ]},
      { category: L("🍶 醬料與冷飲", "🍶 Sauces & cold drinks", "🍶 Nước sốt & đồ uống lạnh"), items: [
        { id: "cf_s1", ...L("DAISHO 秘傳燒肉醬 或 蒜味燒肉醬 1瓶 ($105)", "DAISHO yakiniku sauce (original or garlic), 1 bottle ($105)", "Sốt thịt nướng DAISHO (vị gốc hoặc tỏi), 1 chai ($105)") },
        { id: "cf_s2", ...L("DAISHO 柚子調味鹽/胡椒鹽 1瓶 ($109)", "DAISHO yuzu salt / pepper salt ($109)", "Muối yuzu / muối tiêu DAISHO ($109)") },
        { id: "cf_s3", ...L("黑松沙士 6入組 ($84) + 食用冰塊 1大包", "HeySong Sarsaparilla 6-pack ($84) + 1 big bag of ice", "HeySong Sarsi lốc 6 lon ($84) + 1 túi đá viên lớn") },
        { id: "cf_s4", ...L("御茶園 紅茶/綠茶 2大瓶", "Bottled black / green tea, 2 large bottles", "Hồng trà / trà xanh đóng chai, 2 chai lớn") }
      ]},
      { category: L("🔥 烤肉爐與配件（離地30cm）", "🔥 Grill & accessories (30 cm rule)", "🔥 Bếp nướng & phụ kiện (quy định 30 cm)"), items: [
        { id: "cf_t1", ...L("中型摺疊不鏽鋼烤肉爐 1組 ($599，附腳架離地30cm)", "Medium folding stainless grill with legs, 30 cm high ($599)", "Bếp nướng inox gấp gọn cỡ vừa, có chân cao 30 cm ($599)") },
        { id: "cf_t2", ...L("耐燒無煙椰炭 2包", "Smokeless coconut charcoal, 2 bags", "Than gáo dừa không khói, 2 bao") },
        { id: "cf_t3", ...L("烤肉網 2片 + 竹籤 1包", "Grill nets ×2 + bamboo skewers", "Vỉ nướng ×2 + que xiên tre") },
        { id: "cf_t4", ...L("不鏽鋼長夾 4支 + 料理剪刀 1支", "Long steel tongs ×4 + kitchen scissors", "Kẹp inox dài ×4 + kéo nhà bếp") },
        { id: "cf_t5", ...L("火種 + 烤肉刷 2支", "Fire starters + sauce brushes ×2", "Viên mồi lửa + cọ phết sốt ×2") },
        { id: "cf_t6", ...L("加厚鋁箔紙 1捲 + 食物密封袋", "Heavy-duty aluminium foil + zip bags", "Giấy bạc loại dày + túi zip đựng thực phẩm") },
        { id: "cf_t7", ...L("免洗餐具組 + 廚房紙巾 + 垃圾袋 3個", "Disposable tableware + paper towels + 3 trash bags", "Bộ đồ ăn dùng một lần + giấy bếp + 3 túi rác") }
      ]}
    ]
  }
};

let currentStore = 'pxmart';
let lang = 'zh';
const T = () => I18N[lang];

function lsGet(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
function getStoredChecks() { try { return JSON.parse(lsGet(CHECK_KEY, '{}')) || {}; } catch (e) { return {}; } }
function setStoredChecks(d) { lsSet(CHECK_KEY, JSON.stringify(d)); }

function detectLang() {
  const saved = lsGet(LANG_KEY, null);
  if (saved && I18N[saved]) return saved;
  const n = (navigator.language || 'zh').toLowerCase();
  if (n.startsWith('vi')) return 'vi';
  if (n.startsWith('zh')) return 'zh';
  return 'en';
}

function setLang(l) {
  lang = l; lsSet(LANG_KEY, l);
  document.documentElement.lang = l === 'zh' ? 'zh-TW' : l;
  document.title = T().doc_title;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = T()[el.dataset.i18n] || ''; });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = T()[el.dataset.i18nHtml] || ''; });
  ['zh', 'en', 'vi'].forEach(k => {
    document.getElementById('lang_' + k).className = 'px-2 py-1 rounded-full transition ' + (k === l ? 'bg-amber-400 text-slate-950' : 'text-slate-300');
  });
  document.getElementById('zhHint').classList.toggle('hidden', l === 'zh');
  document.getElementById('scheduleBox').innerHTML = T().sched.map(r => `
    <div class="flex gap-4 items-start">
      <div class="w-20 shrink-0 text-amber-400 font-bold text-xs pt-1">${r[0]}</div>
      <div><h5 class="text-sm font-bold text-white">${r[1]}</h5><p class="text-xs text-slate-400">${r[2]}</p></div>
    </div>`).join('');
  switchStore(currentStore);
}

function switchStore(storeKey) {
  currentStore = storeKey;
  const on = c => `py-2.5 px-2 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition text-white shadow-md ${c}`;
  const off = "py-2.5 px-2 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition text-slate-400 hover:text-slate-200";
  document.getElementById('tabPxmart').className = storeKey === 'pxmart' ? on('bg-blue-600') : off;
  document.getElementById('tabCarrefour').className = storeKey === 'carrefour' ? on('bg-red-600') : off;
  renderChecklist(); updateNavigationButtons(); calculatePerPerson();
}

function renderChecklist() {
  const plan = storePlans[currentStore];
  const saved = getStoredChecks();
  document.getElementById('storeName').textContent = plan.title[lang];
  document.getElementById('storeAdvantage').textContent = plan.advantage[lang];
  const badge = document.getElementById('storeBadge');
  badge.textContent = plan.badge[lang];
  badge.className = "px-2 py-0.5 rounded text-xs font-bold border " + (currentStore === 'pxmart' ? "bg-blue-500/20 text-blue-300 border-blue-500/40" : "bg-red-500/20 text-red-300 border-red-500/40");

  let total = 0, done = 0, html = '';
  plan.sections.forEach(sec => {
    html += `<div class="space-y-2"><div class="text-xs font-bold text-amber-300 tracking-wider">${sec.category[lang]}</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-2">`;
    sec.items.forEach(item => {
      total++; const c = !!saved[item.id]; if (c) done++;
      const sub = lang === 'zh' ? '' : `<span class="block text-[11px] font-normal text-slate-500 mt-0.5">${item.zh}</span>`;
      html += `<label class="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800/80 cursor-pointer transition select-none text-xs sm:text-sm">
        <input type="checkbox" onchange="toggleItem('${item.id}', this.checked)" ${c ? 'checked' : ''} class="w-4 h-4 mt-0.5 shrink-0 accent-amber-500 cursor-pointer">
        <span class="${c ? 'line-through text-slate-500 font-normal' : 'text-slate-200 font-medium'}">${item[lang]}${sub}</span></label>`;
    });
    html += `</div></div>`;
  });
  document.getElementById('checklistContainer').innerHTML = html;
  const pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressPercent').textContent = `${pct}% (${done}/${total} ${T().unit})`;
}

function toggleItem(id, v) { const c = getStoredChecks(); c[id] = v; setStoredChecks(c); renderChecklist(); }

function resetCurrentList() {
  const c = getStoredChecks();
  storePlans[currentStore].sections.forEach(s => s.items.forEach(i => delete c[i.id]));
  setStoredChecks(c); renderChecklist(); showToast(T().t_reset);
}

function updateNavigationButtons() {
  const label = currentStore === 'pxmart' ? T().store_px : T().store_cf;
  document.getElementById('leg1DestTitle').textContent = label;
  document.getElementById('leg2OriginTitle').textContent = label;
  document.getElementById('billStoreLabel').textContent = T().bill_store(label);
  const o = encodeURIComponent(ORIGIN_ADDR), s = encodeURIComponent(STORE_DEST[currentStore]), f = encodeURIComponent(FINAL_DEST);
  const url = (a, b, m) => `https://www.google.com/maps/dir/?api=1&origin=${a}&destination=${b}&travelmode=${m}`;
  document.getElementById('navLeg1Bike').href = url(o, s, 'bicycling');
  document.getElementById('navLeg1Transit').href = url(o, s, 'transit');
  document.getElementById('navLeg1Walk').href = url(o, s, 'walking');
  document.getElementById('navLeg2Bike').href = url(s, f, 'bicycling');
  document.getElementById('navLeg2Transit').href = url(s, f, 'transit');
  document.getElementById('navLeg2Walk').href = url(s, f, 'walking');
}

function readCost(id) { const v = parseFloat(document.getElementById(id).value); return isFinite(v) && v > 0 ? Math.round(v) : 0; }

function calculatePerPerson() {
  const storeCost = readCost('inputStoreCost'), extraCost = readCost('inputExtraCost');
  const total = storeCost + extraCost, perPerson = Math.ceil(total / PEOPLE);
  document.getElementById('displayTotalBill').textContent = `$ ${total.toLocaleString('en-US')}`;
  document.getElementById('displayPerPerson').textContent = `$ ${perPerson.toLocaleString('en-US')}`;
  document.getElementById('roundNote').textContent = T().round_note(perPerson * PEOPLE - total);
  return { storeCost, extraCost, total, perPerson };
}

function copyLineBillMessage() {
  const { storeCost, extraCost, total, perPerson } = calculatePerPerson();
  const s = currentStore === 'pxmart' ? T().store_px_short : T().store_cf_short;
  copyText(T().bill_msg(s, storeCost, extraCost, total, perPerson), T().t_bill);
}

function shareTrip() {
  const url = location.href.split('#')[0];
  const text = T().share_text(url);
  if (navigator.share) { navigator.share({ title: T().doc_title, text }).catch(() => {}); return; }
  copyText(text, T().t_share);
}

let toastTimer;
function showToast(text) {
  const t = document.getElementById('toast');
  document.getElementById('toastText').textContent = text;
  t.classList.remove('opacity-0'); t.classList.add('opacity-100');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.classList.remove('opacity-100'); t.classList.add('opacity-0'); }, 2300);
}

function legacyCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  let ok = false; try { ok = document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(ta); return ok;
}
function copyText(text, msg) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => showToast(msg), () => showToast(legacyCopy(text) ? msg : T().t_fail));
  } else { showToast(legacyCopy(text) ? msg : T().t_fail); }
}

/* PWA */
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; document.getElementById('installBtn').classList.remove('hidden'); });
window.addEventListener('appinstalled', () => document.getElementById('installBtn').classList.add('hidden'));
function installApp() { if (!deferredPrompt) return; deferredPrompt.prompt(); deferredPrompt = null; document.getElementById('installBtn').classList.add('hidden'); }
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));

document.addEventListener('DOMContentLoaded', () => setLang(detectLang()));
