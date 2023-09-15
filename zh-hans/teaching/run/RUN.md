# vulcat参数列表

### 基本参数

|说明|选项|参数类型|
|---|---|---|
|查看帮助|**-h / --help**|无需传递参数|
|查看版本|**--version**|无需传递参数|
|查看POC列表|**--list**|无需传递参数|
|禁用WAF检测|**--no-waf**|无需指定参数|
|禁用POC扫描|**--no-poc**|无需指定参数|
|有默认选项的输入条目，<p>将自动使用默认选项并进行下一步操作</p><p>无需停止检测并等待用户手动输入</p>|**--batch**|无需指定参数|

### 指定目标站点

|说明|选项|参数类型|示例|
|---|---|---|---|
|单个URL|**-u / --url**|单个URL|-u http://www.example.com|
|从文件批量读取URL|**-f / --file**|文件里每行一个URL|-f url.txt|
|递归扫描URL的每层目录|**-r / --recursive**|无需传递参数|

### 辅助参数

|说明|选项|参数类型|示例|
|---|---|---|---|
|并发POC数量<p>默认3</p>|**-t / --thread**|整数|-t 5|
|请求间隔时间<p>默认1s</p>|**--delay**|浮点数|--delay 0.5|
|超时时间<p>默认10s</p>|**--timeout**|浮点数|--timeout 20|
|设置User-Agent|**--user-agent**|字符串|--user-agent "Windows-Chrome-xxx-1.0.0"|
|设置Cookie|**--cookie**|字符串|--cookie "session=123456"|
|设置Authorization|**--auth**|字符表|--auth "Basic YWRtaW46YWRtaW4="|

### 导出报告

|说明|选项|参数类型|示例|
|---|---|---|---|
|如果检测出了漏洞，就将漏洞信息保存到文件当中<p>使用时不需要指定文件名</p><p>目前支持.txt、.json、.html三种</p><p>（无漏洞时不会生成文件）</p>|**-o / --output**|字符串|<p>-o txt</p><p>-o json</p><p>-o html</p>|

### 代理

|说明|选项|参数类型|示例|
|---|---|---|---|
|HTTP/HTTPS代理|**--http-proxy**|字符串|--http-proxy 127.0.0.1:8080|
|Socks4代理|**--socks4-proxy**|字符串|--socks4-proxy 127.0.0.1:8080|
|Socks5代理|**--socks5-proxy**|字符串|<p>--socks5-proxy 127.0.0.1:8080</p><p>--socks5-proxy admin:123456@127.0.0.1:8080</p>

### 日志

|说明|选项|参数类型|示例|
|---|---|---|---|
|日志等级，默认1|**--log**|整数，范围1-6|--log 3|

### 指定框架和POC

|说明|选项|参数类型|示例|
|---|---|---|---|
|在v2.0.0版本中被移除，功能整合到-v/--vuln选项当中|<del>-a / --application</del>|<del>被移除</del>|<del>被移除</del>
|指定某框架、某类型、某编号的漏洞<p>用逗号分隔每个名称</p><p>（不区分大小写，横杠-与下划线_皆可识别）</p>|**-v / --vuln**|字符串|<p>-v apache,thinkphp</p><p>-v rce,fileread</p><p>-v cNvd_2018-24942</p>|

### Shell交互

|说明|选项|参数类型|示例|
|---|---|---|---|
|配合-v参数使用，运行该漏洞的Shell交互模式|**--shell**|无需指定参数|
|一般情况下，--shell可以自行识别漏洞类型<p>如果无法识别，则使用该选项手动指定漏洞类型</p>|**--type**|字符串|--type rce|

### DNSLOG平台指定

|说明|选项|参数类型|示例|
|---|---|---|---|
|手动指定所使用的DNSLOG平台<p>目前支持ceye.io和dnslog.cn两种</p><p>默认为：自动</p><p>（如果在config.yaml写入了ceye域名和Token，</p><p>则自动使用ceye.io，反之使用dnslog.cn）</p>|**--dns**|字符串|<p>--dns dnslog</p><p>--dns ceye</p>|
