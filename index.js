// 创建地图实例
var map = new AMap.Map("container", {
  zoom: 13,
  center: [116.4, 39.92],
  resizeEnable: true
});

// 以 icon URL 的形式创建一个途经点
var viaMarker = new AMap.Marker({
  position: new AMap.LngLat(116.38, 39.92),
  // 将一张图片的地址设置为 icon
  icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png",
  // 设置了 icon 以后，设置 icon 的偏移量，以 icon 的 [center bottom] 为原点
  offset: new AMap.Pixel(-13, -30)
});

// 创建一个 Icon
var startIcon = new AMap.Icon({
  // 图标尺寸
  size: new AMap.Size(25, 34),
  // 图标的取图地址
  image: "//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png",
  // 图标所用图片大小
  imageSize: new AMap.Size(135, 40),
  // 图标取图偏移量
  imageOffset: new AMap.Pixel(-9, -3)
});

// 将 icon 传入 marker
var startMarker = new AMap.Marker({
  position: new AMap.LngLat(116.35, 39.89),
  icon: startIcon,
  offset: new AMap.Pixel(-13, -30)
});

// 创建一个 icon
var endIcon = new AMap.Icon({
  size: new AMap.Size(55, 55),
  image:
    "https://himg.bdimg.com/sys/portraitn/item/public.1.b3db55fc.M5W9MsADXArU1YbOi2ws-w",
  imageSize: new AMap.Size(55, 55),
  imageOffset: new AMap.Pixel(0, 0)
});

// 将 icon 传入 marker
var endMarker = new AMap.Marker({
  position: new AMap.LngLat(116.45, 39.93),
  icon: endIcon,
  offset: new AMap.Pixel(-13, -30)
});

// 将 markers 添加到地图
map.add([viaMarker, startMarker, endMarker]);
