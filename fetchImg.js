const imageColumns = document.querySelectorAll('.image-column');

imageColumns.forEach(
  (column) =>
    (column.innerHTML = `<div>
<div class="image-card">
  <div>
    <div class="image" role="img"></div>
  </div>
</div>
<div class="image-card">
  <div>
    <div class="image" role="img"></div>
  </div>
</div>
<div class="image-card">
  <div>
    <div class="image" role="img"></div>
  </div>
</div>
<div class="image-card">
  <div>
    <div class="image" role="img"></div>
  </div>
</div>
<div class="image-card">
  <div>
    <div class="image" role="img"></div>
  </div>
</div>
</div>`)
);
