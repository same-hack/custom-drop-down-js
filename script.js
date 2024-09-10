document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const menuItems = document.querySelectorAll(".dropdown-menu a");

  // ボタンの幅に基づいてプルダウンメニューの幅を設定する関数
  function setDropdownWidth() {
    const buttonWidth = dropdownToggle.offsetWidth;
    dropdownMenu.style.minWidth = `${buttonWidth}px`;
    dropdownMenu.style.maxWidth = "20rem";
  }

  // ボタンクリック時にメニューの表示/非表示を切り替え、幅を設定
  dropdownToggle.addEventListener("click", function () {
    dropdown.classList.toggle("open");
    setDropdownWidth();
  });

  // メニュー以外をクリックしたときにメニューを閉じる
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
    }
  });

  // メニューのアイテムがクリックされたとき、選択した値をボタンに表示する
  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedValue = item.getAttribute("data-value");
      console.log("selectedValue", selectedValue);
      dropdownToggle.innerHTML = `${selectedValue} <span class="icon">▽</span>`; // ボタンに選択された値とアイコンを表示
      dropdown.classList.remove("open");
    });
  });

  // ウィンドウリサイズ時にも幅を再調整する
  window.addEventListener("resize", setDropdownWidth);
});
