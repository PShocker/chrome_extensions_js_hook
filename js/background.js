// 监听发送请求
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.log(details.url);
        // 匹配特定的路径
        if (details.url.startsWith('https://kc.zhixueyun.com/scripts/exam-6')) {
            return {
                //替换为已经修改后的js文件
                redirectUrl: chrome.extension.getURL("js/exam.js")
            };
        }
    },
    {
        urls: ["<all_urls>"],
        types: ["script"]
    },
    ["blocking"]
);


