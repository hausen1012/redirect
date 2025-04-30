module.exports = (req, res) => {
    const path = req.url.substring(1); // 获取路径部分，去掉开头的 "/"
  
    if (path) {
      try {
        // 尝试将路径解析为有效的 URL
        const targetUrl = new URL(path);
  
        // 如果路径是一个有效的 URL，进行重定向
        res.redirect(301, targetUrl.toString());
      } catch (e) {
        // 如果路径不是有效的 URL，返回 400 错误
        res.status(400).send('Invalid URL');
      }
    } else {
      // 如果路径为空，返回 404 或其他默认响应
      res.status(404).send('Not Found');
    }
  };
  