"use client";
import ap from "../images/ap.webp";
import az from "../images/az.webp";
import ci from "../images/ci.webp";
import fy from "../images/fy.webp";
import lt from "../images/lt.webp";
import mb from "../images/mb.webp";
import pg from "../images/pg.webp";
import pv from "../images/pv.webp";
import tc from "../images/tc.webp";
import ye from "../images/ye.webp";
import zk from "../images/zk.webp";
import zs from "../images/zs.webp";
import WorkCard from "../components/WorkCard";

import Gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

const WorksPage = () => {
  const ref_title = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Gsap.registerPlugin(ScrollTrigger);
    const fadeIn = (elm: HTMLDivElement | null) => {
      Gsap.to(elm, {
        startAt: {
          y: 30,
          opacity: 0,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          start: "top center+=25%",
          trigger: elm,
          scrub: false,
        },
      });
    };
    fadeIn(ref_title.current);
  });
  return (
    <section className="c-section work-page" id="Works">
      <h2 className="c-section-title" ref={ref_title}>
        WORKS
      </h2>
      <div className="work-page-container">
        <WorkCard
          title="Lofty Online Shop"
          img={lt}
          pf="Shopify"
          lang="HTML,CSS,Javascript,Liquid"
          text="サイト全体とLPの構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。アニメーションやデザインが凝っていた点と、機能的なカスタマイズを多く入れた点で成長につながりました。(同梱制御・商品比較セクション・店舗検索・枕の高さ診断モーダルetc...)"
          url="https://loftyonlineshop.myshopify.com/"
        ></WorkCard>

        <WorkCard
          title="MOLTON BRWON"
          img={mb}
          pf="Shopify"
          lang="HTML,CSS,Javascript,Liquid"
          text="サイト全体とLPの構築を担当しました。また、公開後カスタマイズも多数行いました。Shopifyの有料テーマimpulseをベースに構築。デザインが凝っていた点と、数え切れないほどの機能的なカスタマイズを施しました。中でもカートでのメッセージカード機能、マイページカスタマイズ、カート内のオプション追加機能などが多数の制御が必要で勉強になりました。"
          url="https://www.moltonbrown.co.jp/"
        ></WorkCard>

        <WorkCard
          title="AZUMA"
          img={az}
          pf="Shopify"
          lang="HTML,CSS,Javascript,Liquid"
          text="デザイン・サイト全体の構築・ディレクションの全てを担当しました。Shopifyの無料テーマDawnをベースに構築。アニメーションによる驚きや購入動線の単純さなど、クライアントのご要望をデザインに落とし込み、自分で実装した点で大きく成長できました。"
          url="https://www.azumabag.jp/"
        ></WorkCard>

        <WorkCard
          title="4YOU"
          img={fy}
          pf="なし(apache server)"
          lang="HTML,CSS,Javascript"
          text="デザイン・サイト全体の構築・ディレクションの全てを担当しました。lolipopサーバー上にファイルを設置して作成しました。言語セレクターとgsapによるアニメーションを工夫しました。"
          url="https://www.4you-lab.jp/"
        ></WorkCard>

        <WorkCard
          title="You.en"
          img={ye}
          pf="Shopify"
          lang="HTML,CSS,Javascript,Liquid"
          text="サイト全体の構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。翻訳アプリ・通貨変換アプリの使用を把握し挙動を制御するのが難しかったです。"
          url="https://youen-jp.com/"
        ></WorkCard>

        <WorkCard
          title="座椅子生活"
          img={zs}
          pf="Shopify"
          lang="HTML,CSS,Javascript,Liquid"
          text="サイト全体とLPの構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。アニメーションやデザインが凝っていた点と、機能的なカスタマイズを多く入れた点で成長につながりました。(同梱制御・動的な発想日表示・商品スペックの記載etc...)"
          url="https://zaisu-seikatsu.com/"
        ></WorkCard>

        <WorkCard
          title="APEGO ONLINE GREEN SHOP"
          img={ap}
          pf="Shopify"
          lang="HTML,CSS,Javascript,Liquid"
          text="サイト全体の構築と一部ディレクションを担当しました。Shopifyの有料テーマimpulseをベースに構築。ディレクションを一部担当したことや、機能的なカスタマイズを多く入れた点で成長につながりました。(在庫なしカテゴリの動的非表示、カートでの立札メッセージカード機能etc...)"
          url="https://apego.jp/"
        ></WorkCard>

        <WorkCard
          title="Pigeon 公式オンラインショップ"
          img={pg}
          pf="Shopify"
          lang="HTML,CSS,Javascript,Liquid"
          text="サイト全体の構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。追従フッター、楽天のようなデザインのカテゴリ一覧などのカスタマイズで苦労しました。"
          url="https://shop.pigeon.co.jp/"
        ></WorkCard>

        <WorkCard
          title="TIMELESS COMFORT"
          img={tc}
          pf="Shopify"
          lang="HTML,CSS,Javascript,Liquid"
          text="サイト全体の構築を担当しました。Shopifyの有料テーマimpulseをベースに構築。初めて業務レベルでshopifyに携わった思い出深い案件です。タブ切り替えの商品一覧セクションや商品詳細ページのメインスライダーのカスタマイズなどを行なっています。"
          url="https://timelesscomfort.com/"
        ></WorkCard>
        <WorkCard
          title="Colony Interactive 採用ページ"
          img={ci}
          pf="Wordpress"
          lang="HTML,CSS(Tailwind),Javascript,PHP"
          text="サイト全体の構築を担当しました。CSSフレームワークTailwind.cssを初めて業務レベルで使用した点が面白かったです。"
          url="https://recruit.colony-i.com/"
        ></WorkCard>
        <WorkCard
          title="Zokujin"
          img={zk}
          pf="Wordpress"
          lang="HTML,CSS,Javascript,PHP"
          text="「Zokujinコラム」ページと「お役立ち資料ページ」の作成を担当しました。Wordpress側でカスタム投稿を用意し、そこにアップロードした資料をフォーム情報を正しく入力した顧客のみダウンロードできるようにする制御に苦労しました。"
          url="https://zokujin.com/"
        ></WorkCard>

        <WorkCard
          title="PourVous コーポレートサイト"
          img={pv}
          pf="futureshop(FTP利用)"
          lang="HTML,CSS,Javascript,PHP"
          text="コーポレートサイト全体の構築を担当しました。PHPで実装するお問い合わせフォームを含めフルスクラッチです。コーディング納期が3日間だったため作業スピードと集中力が鍛えられました。"
          url="https://www.pourvous.co.jp/corporate/"
        ></WorkCard>
      </div>
    </section>
  );
};

export default WorksPage;
