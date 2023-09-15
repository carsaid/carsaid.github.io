# 指定攻击载荷

##### 注：-a/--application选项已于v2.0.0版本中移除，-v/--vuln合并了它的功能

## -v/--vuln

该选项有以下功能：
* 跳过指纹识别阶段
* 检测 单个或多个 特定系统/框架的漏洞，例如Apache
* 检测 单个或多个 类型的漏洞，例如RCE
* 检测 单个或多个 指定编号的漏洞，例如CVE-2020-17519

```
python3 vulcat.py -u <URL> -v <NAME>

# 或
python3 vulcat.py -u <URL> --vuln <NAME>
```

### vulcat内置攻击载荷

你可以使用选项<code>--list</code>查看vulcat所有内置的攻击载荷

```bash
python3 vulcat.py --list
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-base/list.png" alt=""><figcaption></figcaption></figure>


### 跳过指纹识别阶段

<figure>默认情况下，vulcat将会对目标进行指纹识别<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-vuln/01.png" alt=""><figcaption></figcaption></figure>

如果你想跳过该阶段，可以指定-v/--vuln选项为all（全部），vulcat将会直接对目标使用所有的攻击载荷

```bash
python3 vulcat.py -u http://192.168.80.132 -v all
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-vuln/02.png" alt=""><figcaption></figcaption></figure>


### 检测特定系统/框架的漏洞

如果你想检测Apache系列的漏洞，可以指定-v/--vuln选项为apache。<br>此时vulcat会搜索名称中带有apache的攻击载荷，并对目标使用，如图：

```bash
python3 vulcat.py -u http://192.168.80.132 --log 2 -v apache
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-vuln/03.png" alt=""><figcaption></figcaption></figure>


你可以同时检测多个系列的漏洞，使用逗号分隔

```bash
python3 vulcat.py -u http://192.168.80.132 --log 2 -v cisco,thinkphp,apache
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-vuln/04.png" alt=""><figcaption></figcaption></figure>

<figure>从图中可以看到，vulcat使用了三种载荷：Apache、Cisco、ThinkPHP<img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-vuln/05.png" alt=""><figcaption></figcaption></figure>


如果你只想检测Apache系列下的Flink，则可以指定-v/--vuln选项为apache-flink

```bash
python3 vulcat.py -u http://192.168.80.132 --log 2 -v apache-flink
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-vuln/06.png" alt=""><figcaption></figcaption></figure>


同样，可以使用逗号分隔每个名称

```bash
python3 vulcat.py -u http://192.168.80.132 --log 2 -v apache-flink,apache-httpd
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-vuln/07.png" alt=""><figcaption></figcaption></figure>


### 检测某类型的漏洞

注：某些攻击载荷具有多种漏洞类型
* 例如ApacheHttpd的CVE-2021-42013，既可以RCE又可以FileRead
* 当你指定<b>-v rce</b>或<b>-v fileread</b>时，都会加载CVE-2021-42013的攻击载荷

如果你想检测<b>远程代码执行</b>漏洞，可以指定-v/--vuln选项为rce，vulcat将使用所有rce的载荷

```bash
python3 vulcat.py -u http://192.168.80.132 --log 2 -v rce
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-vuln/08.png" alt=""><figcaption></figcaption></figure>


检测<b>任意文件读取</b>系列的漏洞

```bash
python3 vulcat.py -u http://192.168.80.132 --log 2 -v fileread
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-vuln/09.png" alt=""><figcaption></figcaption></figure>

检测<b>未授权访问</b>和<b>反序列化</b>漏洞

```bash
python3 vulcat.py -u http://192.168.80.132 --log 2 -v unauth,unserialize
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-vuln/10.png" alt=""><figcaption></figcaption></figure>


### 检测特定编号的漏洞

如图

```bash
python3 vulcat.py -u http://192.168.80.132 --log 2 -v cve-2020-17519
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-vuln/11.png" alt=""><figcaption></figcaption></figure>


多个编号可以使用逗号分隔，大小写不敏感，横杠 <b>-</b> 与下划线 <b>_</b> 皆可

```bash
python3 vulcat.py -u http://192.168.80.132 --log 2 -v cvE-2020_17519,CvE_2021-41773
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-vuln/12.png" alt=""><figcaption></figcaption></figure>


### 不存在的攻击载荷

如果你指定了一个不存在的攻击载荷，则vulcat不会加载任何POC，如图

```bash
python3 vulcat.py -u http://192.168.80.132 --log 2 -v abcdefg
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage-vuln/13.png" alt=""><figcaption></figcaption></figure>

