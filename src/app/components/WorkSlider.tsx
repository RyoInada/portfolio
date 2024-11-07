"use client";

import { useEffect } from "react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import ap from "../images/ap.webp";
import az from "../images/az.webp";
import ci from "../images/ci.webp";
import lt from "../images/lt.webp";
import mb from "../images/mb.webp";
// import pg from "../images/pg.webp";
// import pv from "../images/pv.webp";
import tc from "../images/tc.webp";
import ye from "../images/ye.webp";
import zk from "../images/zk.webp";
import zs from "../images/zs.webp";
import WorkDetail from "./WorkDetail";
import dynamic from "next/dynamic";

const Work = dynamic(() => import("./Work"), {
  ssr: false,
});

export default function BasicSlider() {
  useEffect(() => {
    document.querySelector(".main")?.classList.remove("is-loading");
  });

  const slideSettings = {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <Swiper
      modules={[Navigation, Scrollbar]}
      breakpoints={slideSettings}
      slidesPerView={"auto"}
      centeredSlides={false}
      loop={false}
      speed={750}
      navigation
      scrollbar={{ draggable: true }}
      className="work-slider"
    >
      <SwiperSlide key={1}>
        <Work id="lofty" title="Lofty" img={lt}>
          <WorkDetail
            title="Lofty Online Shop"
            img={lt}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="サイト全体とLPの構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。アニメーションやデザインが凝っていた点と、機能的なカスタマイズを多く入れた点で成長につながりました。(同梱制御・商品比較セクション・店舗検索・枕の高さ診断モーダルetc...)"
            url="https://loftyonlineshop.myshopify.com/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      <SwiperSlide key={2}>
        <Work id="moltonbrown" title="moltonbrown" img={mb}>
          <WorkDetail
            title="MOLTON BRWON"
            img={mb}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="サイト全体とLPの構築を担当しました。また、公開後カスタマイズも多数行いました。Shopifyの有料テーマimpulseをベースに構築。デザインが凝っていた点と、数え切れないほどの機能的なカスタマイズを施しました。中でもカートでのメッセージカード機能、マイページカスタマイズ、カート内のオプション追加機能などが多数の制御が必要で勉強になりました。"
            url="https://www.moltonbrown.co.jp/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      <SwiperSlide key={3}>
        <Work id="youen" title="You.en" img={ye}>
          <WorkDetail
            title="You.en"
            img={ye}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="サイト全体の構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。翻訳アプリ・通貨変換アプリの使用を把握し挙動を制御するのが難しかったです。"
            url="https://youen-jp.com/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      <SwiperSlide key={4}>
        <Work id="azuma" title="AZUMA" img={az}>
          <WorkDetail
            title=""
            img={az}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="デザイン・サイト全体の構築・ディレクションの全てを担当しました。Shopifyの無料テーマDawnをベースに構築。アニメーションによる驚きや購入動線の単純さなど、クライアントのご要望をデザインに落とし込み、自分で実装した点で大きく成長できました。"
            url="https://www.azumabag.jp/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      <SwiperSlide key={5}>
        <Work id="zaisu" title="zaisu seikatsu" img={zs}>
          <WorkDetail
            title="座椅子生活"
            img={zs}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="サイト全体とLPの構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。アニメーションやデザインが凝っていた点と、機能的なカスタマイズを多く入れた点で成長につながりました。(同梱制御・動的な発想日表示・商品スペックの記載etc...)"
            url="https://zaisu-seikatsu.com/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      {/* <SwiperSlide key={6}>
        <Work id="apego" title="APEGO" img={ap}>
          <WorkDetail
            title="APEGO ONLINE GREEN SHOP"
            img={ap}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="サイト全体の構築と一部ディレクションを担当しました。Shopifyの有料テーマimpulseをベースに構築。ディレクションを一部担当したことや、機能的なカスタマイズを多く入れた点で成長につながりました。(在庫なしカテゴリの動的非表示、カートでの立札メッセージカード機能etc...)"
            url="https://apego.jp/"
          ></WorkDetail>
        </Work>
      </SwiperSlide> */}

      {/* <SwiperSlide key={7}>
        <Work id="pigeon" title="pigeon" img={pg}>
          <WorkDetail
            title="Pigeon 公式オンラインショップ"
            img={pg}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="サイト全体の構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。追従フッター、楽天のようなデザインのカテゴリ一覧などのカスタマイズで苦労しました。"
            url="https://shop.pigeon.co.jp/"
          ></WorkDetail>
        </Work>
      </SwiperSlide> */}
      <SwiperSlide key={8}>
        <Work id="timelsscomfort" title="timeless comfort" img={tc}>
          <WorkDetail
            title="TIMELESS COMFORT"
            img={tc}
            pf="Shopify"
            lang="HTML,CSS,Javascript,Liquid"
            text="サイト全体の構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。初めて業務レベルでshopifyに携わった思い出深い案件です。タブ切り替えの商品一覧セクションや商品詳細ページのメインスライダーのカスタマイズなどを行なっています。"
            url="https://timelesscomfort.com/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      <SwiperSlide key={9}>
        <Work id="colony" title="colony interactive" img={ci}>
          <WorkDetail
            title="Colony Interactive 採用ページ"
            img={ci}
            pf="Wordpress"
            lang="HTML,CSS(Tailwind),Javascript,PHP"
            text="サイト全体の構築を担当しました。CSSフレームワークTailwind.cssを初めて業務レベルで使用した点が面白かったです。"
            url="https://recruit.colony-i.com/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      <SwiperSlide key={10}>
        <Work id="zokujin" title="zokujin" img={zk}>
          <WorkDetail
            title="Zokujin"
            img={zk}
            pf="Wordpress"
            lang="HTML,CSS,Javascript,PHP"
            text="「Zokujinコラム」ページと「お役立ち資料ページ」の作成を担当しました。Wordpress側でカスタム投稿を用意し、そこにアップロードした資料をフォーム情報を正しく入力した顧客のみダウンロードできるようにする制御に苦労しました。"
            url="https://zokujin.com/"
          ></WorkDetail>
        </Work>
      </SwiperSlide>
      {/* <SwiperSlide key={11}>
        <Work id="pourvous" title="pourvous" img={pv}>
          <WorkDetail
            title="PourVous コーポレートサイト"
            img={pv}
            pf="futureshop(FTP利用)"
            lang="HTML,CSS,Javascript,PHP"
            text="コーポレートサイト全体の構築を担当しました。PHPで実装するお問い合わせフォームを含めフルスクラッチです。コーディング納期が3日間だったため作業スピードと集中力が鍛えられました。"
            url="https://www.pourvous.co.jp/corporate/"
          ></WorkDetail>
        </Work>
      </SwiperSlide> */}
    </Swiper>
  );
}
