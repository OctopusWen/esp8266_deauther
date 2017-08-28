# ESP8266 拒绝认证工具
在ESP8266使用拒绝认证攻击和渗透!

<img width="100%" alt="esp8266 deauther with smartphone" src="https://raw.githubusercontent.com/spacehuhn/esp8266_deauther/master/screenshots/smartphone_and_deauther.jpg">

<p align="center">
🐦 <a href="https://twitter.com/spacehuhn">推特</a>
| 📺 <a href="https://www.youtube.com/channel/UCFmjA6dnjv-phqrFACyI8tw">油管</a>
| 🌍 <a href="https://spacehuhn.de">spacehuhn.de</a><br/>
<br />
<b>支持我和我的项目请购买一个 <a href="https://github.com/spacehuhn/esp8266_deauther/#supported-devices">官方的 esp8266 deauther 开发板</a>.<br/>或者在<a href="https://patreon.com/spacehuhn" target="_blank">patreon.com/spacehuhn</a>成为我的顾客.</b>
</p>

## 目录
- [Introduction](#介绍)
  - [What it is and how it works](#它是什么以及如何使用它)
  - [How to protect yourself against it](#如何保护自己防御它的攻击)
- [Disclaimer](#免责声明)
- [Supported Devices](#支持的设备)
- [Installation](#安装)
  - [Uploading the bin files](#上传bin二进制程序 )  
  - [Compiling the source with Arduino](#在ArduinoIDE编译源码)
  - [Adding an OLED display](#添加一个OLED显示屏)
- [How to use it](#如何使用)
- [FAQ](https://github.com/spacehuhn/esp8266_deauther/wiki/FAQ)
- [License](#许可证)
- [Sources and additional links](#来源和附加链接)
  - [Custom Design Versions](#定制设计版本)
  - [Videos](#视频)
  - [Sources](#来源)

## 介绍

### 它是什么以及如何使用它

这个软件允许你在ESP8266上针对所选网络执行[deauth攻击](https://en.wikipedia.org/wiki/Wi-Fi_deauthentication_attack)
The [ESP8266](https://en.wikipedia.org/wiki/ESP8266) 是一个廉价而易于使用的 Wi-Fi Soc(片上系统), 可以通过[Arduino IDE](https://www.arduino.cc/en/Main/Software)对其编程.  
通过这个软件对ESP8266 刷写这个程序, 你可以选择一个目标网络进行不同的攻击.  

如果连接易受攻击, 则攻击会断开设备与网络的连接. 由于攻击不断运行, 设备将被重新断开. 根据网络的不同, 可以阻止连接或减慢连接速度.

**干扰和拒绝认证服务的区别:** [WiFi Jammers vs Deauthers | What's The Difference?](https://www.youtube.com/watch?v=6m2vY2HXU60)  

另外的攻击方案也已经实现, 如信标(beacon)和洪水请求探测.  

通过利用802.11 Wi-Fi协议中的一个旧的和已知的漏洞攻击恶意攻击.
因为[deauthentication frames](https://mrncciew.com/2014/10/11/802-11-mgmt-deauth-disassociation-frames/),通常用于安全地断开Wi-Fi连接, 不加密, 很容易对他们进行欺骗. 你只需要访问点的mac地址, 就可以轻松地嗅探.
如果你不想攻击所有连接的设备, 您还可以扫描连接并进行针对攻击.  

**这东西合法吗** [WiFi Jammers/Deauthers | Legal?](https://www.youtube.com/watch?v=IromynQ1srI)  

### 如何保护自己防御它的攻击

Wi-Fi协议通过[802.11w-2009](https://en.wikipedia.org/wiki/IEEE_802.11w-2009)成为加密管理(和去认证)帧. 这使得欺骗这些数据包的方式变得更加困难, 这种形式的攻击无效.
因此, 请确保您的路由器是最新的, 并启用了管理帧保护. 您的客户端设备(例如您的手机, 笔记本电脑等)也需要支持. 连接的两端都需要使用它!

问题在于, 大多数路由器默认使用未加密的管理帧, 不提供任何更改权限的选项, 也不提供有关此问题的任何信息.
我测试了几个网络, 没有一个网络不是脆弱的!

我使用相同的ESP8266创建了一个[Deauth Detector](https://github.com/spacehuhn/DeauthDetector)来显示大量的deauth帧. 它不能保护你, 但它可以帮助你弄清楚攻击是否和何时发生.  

## 免责声明

**该项目是测试和教育目的的概念证明.**
ESP8266及其SDK都不是为此目的而设计或构建的.
可能会发生错误!

仅用于你自己的网络和设备!
对于你使用此程序, 我不承担任何责任.

使用前请检查您所在国家的法律规定.
**这不是很多人所说的错误的频率干扰.**上面描述了它的攻击, 它的工作原理以及如何防范它. 它使用官方802.11标准中描述的有效Wi-Fi帧, 不会阻塞或中断任何频率.

我对这个项目的意图是更多地关注这个问题.
这种攻击显示了802.11 Wi-Fi标准的脆弱性, 而且必须要修复.
**一个解决方案已经存在, 为什么我们不用它？**

请不要把这个项目称为"干扰", 这完全破坏了这个项目的真正目的!

## 支持的设备

**你可以将该软件自动闪存到任何ESP8266 **上, 但如果你希望支持我, 您可以获得其中一个特别适用于此项目的开发板, 并预先安装所有内容!

- WiFi Deauther v1.5
	- [AliExpress](https://goo.gl/JAXhTg)  
	- [tindie](https://goo.gl/yMiuGH)  
- WiFi Deauther OLED v1.5
	- [AliExpress](https://goo.gl/P30vNz)  
	- [tindie](https://goo.gl/GGH7x8)  
- WiFi Deauther OLED v2
	- [AliExpress](https://goo.gl/UK87iU)  
	- [tindie](https://goo.gl/PMDYn4)  
  
## 安装

现在你有两个选择. 
最方便的是上传bin二进制程序,但是它对于调试来说是很困难的.

在ArduinoIDE编译源码并上传


### 上传bin二进制程序 

**0** 下载最新的发布版[releases](https://github.com/spacehuhn/esp8266_deauther/releases)  

始终使用1mb版本, 除非您确定您的ESP8266只有512kb闪存.

**注意: ** 512kb版本不会有完整的Mac供应商列表.

**1**使用你选择的ESP8266刷写工具上传: 
	- [nodemcu-flasher](https://github.com/nodemcu/nodemcu-flasher) [Windows only]  
	- [esptool-gui](https://github.com/Rodmg/esptool-gui) [Windows, MacOS]  
	- [esptool](https://github.com/espressif/esptool) [Windows, MacOS, Linux]  

**就这样!**

确保您的电路板的设置正确. 大多数板子有4mb闪存, 有时你必须按住FLASH按钮, 同时插入并保持它, 直到刷写的过程开始.

还要确保选择正确的com端口, 正确的上传大小(大多是4mb)和正确的.bin文件.

如果它不工作, 可以尝试使用下面的方法.

### 在ArduinoIDE编译源码

**0** 下载这个项目的源码

**1** 安装 [Arduino](https://www.arduino.cc/en/Main/Software) 然后打开它.

**2** 前往 `文件` > `首选项`

**3** 在附加开发板管理器地址 添加 `http://arduino.esp8266.com/stable/package_esp8266com_index.json`(source: https://github.com/esp8266/Arduino)

**4** 前往 `工具` > `开发板` > `开发版管理器`

**5** 输入 `esp8266`

**6** 选择 版本 `2.0.0` 然后点击 `安装` (**版本必须是 2.0.0!**)

![screenshot of arduino, selecting the right version](https://raw.githubusercontent.com/spacehuhn/esp8266_deauther/master/screenshots/arduino_screenshot_1.JPG)

**7** 前往 `文件` > `首选项`

**8** 在 `在首选项中还有更多选项可以直接编辑` 下打开文件夹路径

![screenshot of arduino, opening folder path](https://raw.githubusercontent.com/spacehuhn/esp8266_deauther/master/screenshots/arduino_screenshot_2.JPG)

**9** 前往 `packages` > `esp8266` > `hardware` > `esp8266` > `2.0.0` > `tools` > `sdk` > `include`

**10** 用文本编辑器打开 `user_interface.h` 

**11** 拖动到文件底部, 在 `#endif` 之前加入这些:

```
typedef void (*freedom_outside_cb_t)(uint8 status);
int wifi_register_send_pkt_freedom_cb(freedom_outside_cb_t cb);
void wifi_unregister_send_pkt_freedom_cb(void);
int wifi_send_pkt_freedom(uint8 *buf, int len, bool sys_seq);
```  

![screenshot of notepad, copy paste the right code](https://raw.githubusercontent.com/spacehuhn/esp8266_deauther/master/screenshots/notepad_screenshot_1.JPG)

**别忘了保存!**  

**12** 前往此项目的SDK_fix文件夹

**13** 赋值 ESP8266Wi-Fi.cpp 和 ESP8266Wi-Fi.h

**14** 覆盖粘贴到这里 `packages` > `esp8266` > `hardware` > `esp8266` > `2.0.0` > `libraries` > `ESP8266WiFi` > `src`

**15** 在Arduino内打开 `esp8266_deauther` > `esp8266_deauther.ino` 

**16** 在 `工具` > `开发板` 选择你的Esp8266开发板, 在 `Tools` > `Port` 选择正确的COM端口 
如果没有任何端口显示, 你应该安装合适的驱动.

**17** 根据你的开发板, 你可能需要调整 `工具` > `Flash Frequency` 和 `工具` > `Flash Size`. 使用 `160MHz` 运行频率和 `4M (3M SPIFFS)`.

**18** 上传!

**注意:** 如果您使用512kb版本的ESP8266, 则需要注释掉data.h中的一部分mac供应商列表

**你的ESP8266 Deauther现已准备就绪!**

### 添加一个OLED显示屏

![image of the esp8266 deauther with an OLED and three buttons](https://raw.githubusercontent.com/spacehuhn/esp8266_deauther/master/screenshots/esp8266_with_oled.jpg)

我在发布页面上包含2个额外的的.bin文件, 用于显示版本。
一个用于0.96 `SSD1306 OLED, 一个用于1.3` SH1106 OLED。

| Display | ESP8266 |
| ------- | ------- |
| SDA     | 5       |
| SCL     | 4       |
| GND     | GND     |
| VCC     | VCC (3.3V) |

按钮必须位于以下引脚和GND之间: 

| Button | ESP8266 |
| ------ | ------- |
| up     | 12 (D6) |
| down   | 13 (D7) |
| select | 14 (D5) |


如果你使用Arduino, 则需要安装此库: https: //github.com/squix78/esp8266-oled-ssd1306。
那么你只需要在草图的开头取消注释 `// #define USE_DISPLAY`。
在此之下, 您可以自定义设置: 

```
  //create display(Adr, SDA-pin, SCL-pin)
  SSD1306 display(0x3c, 5, 4); //GPIO 5 = D1, GPIO 4 = D2
  //SH1106 display(0x3c, 5, 4);
  
  //button pins
  #define upBtn 12 //GPIO 12 = D6
  #define downBtn 13 //GPIO 13 = D7
  #define selectBtn 14 //GPIO 14 = D5
  #define displayBtn 0 //GPIO 0 = FLASH BUTTON
```

## 如何使用

首先通过插入ESP8266并给它电源启动ESP8266。

扫描Wi-Fi网络并连接到 `pwned`。 密码是 `deauther`。
一旦连接, 您可以打开浏览器, 然后转到 `192.168.4.1`。

您现在可以扫描网络...
![webinterface AP scanner](https://raw.githubusercontent.com/spacehuhn/esp8266_deauther/master/screenshots/web_screenshot_1.JPG)

扫描客户端设备...
![webinterface client scanner](https://raw.githubusercontent.com/spacehuhn/esp8266_deauther/master/screenshots/web_screenshot_2.JPG)

注意: 扫描ESP8266将关闭其接入点, 因此您可能需要进行设置并手动重新连接到Wi-Fi网络！

...并开始不同的攻击。
![webinterface attack menu](https://raw.githubusercontent.com/spacehuhn/esp8266_deauther/master/screenshots/web_screenshot_3.JPG)

欲了解更多信息, 请阅读 [FAQ](https://github.com/spacehuhn/esp8266_deauther/wiki/FAQ).  

## 许可证 

该软件根据麻省理工学院许可证获得许可。 请参阅 [license file](LICENSE) 以了解详情.

## 来源和附加链接

### 定制设计版本

![Screenshot of 'Wi-PWN'](https://raw.githubusercontent.com/samdenty99/Wi-PWN/master/pictures/secondary-banner.png)  
[Wi-PWN](https://github.com/samdenty99/Wi-PWN) - By [@samdenty99](https://github.com/samdenty99)  

![Screenshot of 'Modern and Consistent'](https://raw.githubusercontent.com/Wandmalfarbe/esp8266_deauther/master/screenshots/web_screenshot_1.png)
[Modern and Consistent](https://github.com/Wandmalfarbe/esp8266_deauther) - By [@Wandmalfarbe](https://github.com/Wandmalfarbe)  

<img height="400" alt="Screenshot of DeAutherDroid App" src="https://raw.githubusercontent.com/ExploiTR/DeAutherDroid/master/screenshots/device-2017-08-13-143401.png">  

[DeAutherDroid Android APP](https://github.com/ExploiTR/DeAutherDroid) - By [@ExploiTR](https://github.com/ExploiTR)  

### 视频

[![Cheap Wi-Fi 'Jammer' Device | NodeMCU](https://img.youtube.com/vi/oQQhBdCQOTM/0.jpg)](https://www.youtube.com/watch?v=oQQhBdCQOTM)
  
[![Wifi 'Jammer' Device V1.1 | Setup Tutorial](https://img.youtube.com/vi/r5aoV5AolNo/0.jpg)](https://www.youtube.com/watch?v=r5aoV5AolNo)
  
[![WiFi Tutorial "Deauthing Made Simple"](https://img.youtube.com/vi/SswI-J-M2SE/0.jpg)](https://www.youtube.com/watch?v=SswI-J-M2SE)

[![Seguridad Inalámbrica | Explicación de Wifi Deauther en Español](https://img.youtube.com/vi/YYsSDXRgD10/0.jpg)](https://www.youtube.com/watch?v=YYsSDXRgD10)

[![WiFi Jammers/Deauthers | Legal?](https://img.youtube.com/vi/IromynQ1srI/0.jpg)](https://www.youtube.com/watch?v=IromynQ1srI)  

[![WiFi Jammers vs Deauthers | What's The Difference?](https://img.youtube.com/vi/6m2vY2HXU60/0.jpg)](https://www.youtube.com/watch?v=6m2vY2HXU60)  

### 来源

deauth attack: https://en.wikipedia.org/wiki/Wi-Fi_deauthentication_attack

deauth frame: https://mrncciew.com/2014/10/11/802-11-mgmt-deauth-disassociation-frames/

ESP8266: 
* https://en.wikipedia.org/wiki/ESP8266
* https://espressif.com/en/products/hardware/esp8266ex/overview

packet injection with ESP8266: 
* http://hackaday.com/2016/01/14/inject-packets-with-an-esp8266/
* http://bbs.espressif.com/viewtopic.php?f=7&t=1357
* https://github.com/pulkin/esp8266-injection-example

802.11w-2009: https://en.wikipedia.org/wiki/IEEE_802.11w-2009

Wi-Fi_send_pkt_freedom function limitations: https://esp32.com/viewtopic.php?t=586
