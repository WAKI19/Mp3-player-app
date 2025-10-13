//プレーヤー
function openFullPlayer() {
  const fullPlayer = document.getElementById("full-player");
  const miniPlayer = document.getElementById("mini-player");

  fullPlayer.classList.remove("hidden");
  fullPlayer.classList.add("active");

  // ミニプレーヤーは隠す
  miniPlayer.classList.add("hidden");
}

function closeFullPlayer() {
  const fullPlayer = document.getElementById("full-player");
  const miniPlayer = document.getElementById("mini-player");

  fullPlayer.classList.remove("active");
  fullPlayer.classList.add("hidden");

  // ミニプレーヤーを表示
  miniPlayer.classList.remove("hidden");
}

// タブ切り替えシステム
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-target");

      // タブ切り替え
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // コンテンツ切り替え
      contents.forEach(content => {
        content.classList.toggle("active", content.id === targetId);
      });
    });
  });
});
