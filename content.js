(function () {
  "use strict";

  const handleKeydown = (event) => {
    // keyCode が 0 のキー（Mac の英数キーなど）をブロック
    if (event.keyCode === 0) {
      event.preventDefault();
      event.stopPropagation();
      console.log(`[Excel Mac Key Guard] ブロックしたキー: ${event.key}`);
    }
  };

  document.addEventListener("keydown", handleKeydown, true);
  console.log("[Excel Mac Key Guard] 初期化完了");
})();
