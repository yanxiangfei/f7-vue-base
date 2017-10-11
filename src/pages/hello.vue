<template>
<f7-page>
  <f7-navbar title="Hello" back-link="Back" sliding></f7-navbar>

  <f7-list form>
  <f7-list-item title="Item 1" badge="5" badge-color="red"></f7-list-item>
  <f7-list-item title="Item 2" badge="3" badge-color="red"></f7-list-item>
  <f7-list-item title="Items Divider" divider></f7-list-item>
  <f7-list-item title="Item 3"> </f7-list-item>
  </f7-list>

  <f7-block-title>手风琴 关联折叠</f7-block-title>
  <f7-block inner>
  <f7-accordion>
  	<f7-accordion-item>
  		<f7-accordion-toggle>Item 1</f7-accordion-toggle>
  		<f7-accordion-content>
  			Item 1 Content
  		</f7-accordion-content>
  	</f7-accordion-item>
  	</f7-accordion-item>
  		<f7-accordion-item>
  		<f7-accordion-toggle>Item 2</f7-accordion-toggle>
  		<f7-accordion-content>
  			Item 2 Content
  		</f7-accordion-content>
  	</f7-accordion-item>
  </f7-accordion>
 </f7-block>
  <f7-block-title>手风琴 分开折叠</f7-block-title>
  <f7-block inner>
  	<f7-accordion-item>
  		<f7-accordion-toggle>Item 1</f7-accordion-toggle>
  		<f7-accordion-content>
  			Item 1 Content
  		</f7-accordion-content>
  	</f7-accordion-item>
  	</f7-accordion-item>
  		<f7-accordion-item>
  		<f7-accordion-toggle>Item 2</f7-accordion-toggle>
  		<f7-accordion-content>
  			Item 2 Content
  		</f7-accordion-content>
  	</f7-accordion-item>
 </f7-block>
 <f7-block-title>Badges</f7-block-title>
 <f7-block inset>
 	<f7-badge color="red">1</f7-badges>
 </f7-block>
<!-- Block -->
<f7-block><f7-badge color="red">1</f7-badges></f7-block>
 
<!-- With additional "inner" element for extra highlighting -->
<f7-block inner><f7-badge color="red">1</f7-badges></f7-block>
 
<!-- With block title -->
<f7-block-title>Block Title</f7-block-title>
<f7-block><f7-badge color="red">1</f7-badges></f7-block>

<f7-button>按钮</f7-button>
<f7-buttons theme="red">
	<f7-button round tab-link="#tab1" color="green" icon-f7="add">botton1</f7-button>
	<f7-button fill  tab-link="#tab2" ripple-color="yellow">botton2</f7-button>
	<f7-button raise color="red"  tab-link="#tab3">botton3</f7-button>
	<f7-button big color="gray" icon-size="40px" text="button4"  tab-link="#tab4"></f7-button>
</f7-buttons>

<f7-tabs>
	<f7-tab active id="tab1">tab1</f7-tab>
	<f7-tab id="tab2">tab2</f7-tab>
	<f7-tab id="tab3">tab3</f7-tab>
	<f7-tab id="tab4">tab4</f7-tab>
</f7-tabs>
<f7-block>卡片</f7-block>
<f7-card title="f7-card title" content="f7-card content" footer="f7-card footer" inner></f7-card>
<f7-card >
  <f7-card-header>f7-card title</f7-card-header>
  <f7-card-content>f7-card-content</f7-card-content>
  <f7-card-footer>f7-card-footer</f7-card-footer>
</f7-card>
<f7-block>Chips/Tags</f7-block>
<f7-chip text="example Chips"></f7-chip>
<f7-chip text="another chip" bg="red" color="white"></f7-chip>
<f7-chip text="hello" media='<img src="https://www.baidu.com/img/bd_logo1.png"/>' media-bg="red" deleteable @delete="onChipDelete"></f7-chip>


<f7-block-title>Float Action Button 浮动按钮</f7-block>

<f7-fab color="pick" @click="doSomething">
    <f7-icon f7="icon-plus"></f7-icon>
</f7-fab>

<f7-fab-speed-dial>
  <f7-fab-actions>
    <f7-fab-action color="pick" @click="onActionClick">A</f7-fab-action>
     <f7-fab-action color="gray" @click="onActionClick">B</f7-fab-action>
      <f7-fab-action color="red" @click="onActionClick">C</f7-fab-action>
  </f7-fab-actions>
  <f7-fab>
    <f7-icon f7="icon-plus"></f7-icon>
    <!-- Second icon to close Actions -->
    <f7-icon icon="icon-close"></f7-icon>
  </f7-fab>
</f7-fab-speed-dial>

<f7-block-title>表单</f7-block>
<f7-list form>
  <f7-list-item checkbox name="mycheckbox" value="1" title="checkbox1" checked></f7-list-item>
  <f7-list-item checkbox name="mycheckbox" value="2" title="checkbox2" ></f7-list-item>
  <f7-list-item checkbox name="mycheckbox" value="3" title="checkbox3" ></f7-list-item>
</f7-list>
<f7-list form>
  <f7-list-item radio name="myradio" value="1" title="radio1" checked></f7-list-item>
  <f7-list-item radio name="myradio" value="2" title="radio2" required></f7-list-item>
  <f7-list-item radio name="myradio" value="3" title="radio3" disabled></f7-list-item>
</f7-list>

<f7-block-title>表单元素/Smart Select</f7-block>
<f7-list form>
  <f7-list-item>
    <f7-label>UserName</f7-label>
    <f7-input type="text" placeholder="UserName"></f7-input>
  </f7-list-item>
  <f7-list-item>
     <f7-label>PassWord</f7-label>
     <f7-input type="password" placeholder="PassWord"></f7-input>
  </f7-list-item>
  <f7-list-item>
    <f7-label>range</f7-label>
    <f7-input type="range" min="0" max="100" step="20" value="90" ></f7-input>
  </f7-list-item>
  <f7-list-item>
    <f7-label>switch</f7-label>
    <f7-input type="switch" @change="onChange"></f7-input>
  </f7-list-item>
  <f7-list-item>
    <f7-label>Gender</f7-label>
    <f7-input type="select">
      <option value="1">Male</option>
      <option value="2">Female</option>
    </f7-input>
  </f7-list-item>
  <f7-list-item>
    <f7-label>textarea</f7-label>
    <f7-input type="textarea" placeholder="textarea"></f7-input>
  </f7-list-item>

   <f7-list-item>
    <f7-icon slot="media" f7="person"></f7-icon>
    <f7-label floating>Name</f7-label>
    <f7-input type="text" placeholder="Name"/>
  </f7-list-item>
  <!-- Password -->
  <f7-list-item>
    <f7-icon slot="media" f7="lock"></f7-icon>
    <f7-label floating>Name</f7-label>
    <f7-input type="password" placeholder="Password"/>
  </f7-list-item>

  <f7-list-item  smart-select smart-select-open-in="popup" smart-select-navbar-theme="red" smart-select-back-on-select title="Fruit">
  <select name="fruit">
     <option value="apple" selected>Apple</option>
      <option value="pineapple">Pineapple</option>
      <option value="pear">Pear</option>
      <option value="orange">Orange</option>
      <option value="melon">Melon</option>
      <option value="peach">Peach</option>
      <option value="banana">Banana</option>
  </select>    
  </f7-list-item>

  <f7-list-item  smart-select smart-select-searchbar smart-select-searchbar-placeholder="关键字搜索" smart-select-searchbar-cancel="取消" smart-select-back-text="返回" title="Car" smart-select-open-in="page">
  <select name="car" multiple="multiple">
   <optgroup label="Japanese">
        <option value="honda" selected>Honda</option>
        <option value="lexus">Lexus</option>
        <option value="mazda">Mazda</option>
        <option value="nissan">Nissan</option>
        <option value="toyota">Toyota</option>
      </optgroup>
      <optgroup label="German">
        <option value="audi" selected>Audi</option>
        <option value="bmw">BMW</option>
        <option value="mercedes">Mercedes</option>
        <option value="vw">Volkswagen</option>
        <option value="volvo">Volvo</option>
      </optgroup>
      <optgroup label="American">
        <option value="cadillac">Cadillac</option>
        <option value="chrysler">Chrysler</option>
        <option value="dodge">Dodge</option>
        <option value="ford" selected>Ford</option>
      </optgroup>
  </select>    
  </f7-list-item>
  <f7-list-item smart-select smart-select-back-on-select  smart-select-open-in="picker" title="Mac or windows">
    <select name="mac-windows">
     <option value="mac">Mac</option>
      <option value="windows">Windows</option>
    </select>
  </f7-list-item>

   <f7-list-item smart-select smart-select-back-on-select smart-select-open-in="picker"  smart-select-virtual-list  smart-select-virtual-list-height="20" title="Mac or windows">
    <select name="mac-windows">
     <option value="mac">Mac</option>
      <option value="windows">Windows</option>
    </select>
  </f7-list-item>
</f7-list>

<f7-label>icon</f7-block>
<!-- Default back icon -->
<f7-icon icon="icon-back"></f7-icon>
 
<!-- Some custom icon -->
<f7-icon icon="icon-home"></f7-icon>
 
<!-- F7 Icons font icon -->
<f7-icon f7="home"></f7-icon>
 
<!-- Material Icons font icon -->
<f7-icon material="home"></f7-icon>
 
<!-- Font Awesome icons font icon -->
<f7-icon fa="home"></f7-icon>
 
<!-- Ionicons icons font icon -->
<f7-icon ion="home"></f7-icon>
 
<!-- F7 icons font icon with custom size and color -->
<f7-icon f7="home" size="44px" color="red"></f7-icon>
 
<!-- Conditional icon -->
<f7-icon if-ios="f7:home" if-material="material:home"></f7-icon>

<f7-label>grid</f7-block>
<f7-grid>
    <f7-col>col 1</f7-col>
    <f7-col>col 2</f7-col>
    <f7-col>col 3</f7-col>
</f7-grid>
<f7-grid no-gutter>
    <f7-col width="50">col 1</f7-col>
    <f7-col width="25">col 2</f7-col>
    <f7-col width="25">col 3</f7-col>
</f7-grid>

<f7-grid>
  <f7-col width="50" tablet-width="25">Col 1</f7-col>
  <f7-col width="50" tablet-width="25">Col 2</f7-col>
  <f7-col width="50" tablet-width="25">Col 3</f7-col>
  <f7-col width="50" tablet-width="25">Col 4</f7-col>
</f7-grid>

<f7-list>
  <f7-list-group>
    <f7-list-item title="Group 1"></f7-list-item>
    <f7-list-item title="Itme1"></f7-list-item>
    <f7-list-item title="Itme2"></f7-list-item>
  </f7-list-group>
    <f7-list-group>
    <f7-list-item title="Group 2"></f7-list-item>
    <f7-list-item title="Itme1"></f7-list-item>
    <f7-list-item title="Itme2"></f7-list-item>
  </f7-list-group>
</f7-list>
<f7-list media-list>
  <f7-list-item title="Item 1" subtitle="Subtitle 1" text="Item 1 Text"  link="/form/"></f7-list-item>
  <f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"  link="/form/"></f7-list-item>
</f7-list>
<f7-list>
  <f7-list-item title="Item 1" badge="1" badge-color="red" ></f7-list-item>
  <f7-list-item title="Item 2"></f7-list-item>
  <f7-list-item  divider></f7-list-item>
  <f7-list-item link="/about/" title="About"></f7-list-item>
  <f7-list-label>List Label</f7-list-label>
</f7-list>
<f7-list media-list>
  <f7-list-item
    link="/form/"
    media="<img src='3.PNG'>"
    title="Item Title"
    subtitle="Item Subtitle"
    text="Some text"
    after="Read more">
       <div slot="root-start">root</div>
      <div slot="root">foot</div>
      <div slot="content-start">cs</div>
      <div slot="content">end/></div>
      <div slot="media-start">Media Start</div>
      <div slot="media">Media</div>
      <span slot="after-start"><</span>
      <span slot="after">/></span>
      <div slot="inner-start">inner go</div>
      <div slot="inner">end</div>
      
    </f7-list-item>
</f7-list>

<f7-list accordion>
  <f7-list-item accordion-item title="Accordion Item 1">
    <f7-accordion-content>
      <f7-block>
        <p>Accordion Item 1 Content</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
      </f7-block>
    </f7-accordion-content>
  </f7-list-item>
  <f7-list-item accordion-item title="Accordion Item 2">
    <f7-accordion-content>
      <f7-block>
        <p>Accordion Item 2 Content</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
      </f7-block>
    </f7-accordion-content>
  </f7-list-item>

  <f7-link href="http://www.baidu.com"  external>百度</f7-link>
  <f7-link href="/About/" :animate-pages="false" :ignore-cache="true">About</f7-link>
 <!--  <f7-tabs>
    <f7-tab id="tab-1" active>tab1 c</f7-tab>
     <f7-tab id="tab2">tab2 c</f7-tab>
  </f7-tabs>
  <f7-link tab-link="#tab-1">show tab1</f7-link>
  <f7-link tab -link="#tab2">show tab2</f7-link>-->

  <!-- Tabs -->
<f7-tabs>
  <f7-tab id="tab-1" active>Tab 1 content</f7-tab>
  <f7-tab id="tab-2">Tab 2 content</f7-tab>
</f7-tabs>
<!-- Switch Between Tabs -->
<f7-link tab-link="#tab-1">Show Tab 1</f7-link>
<f7-link tab-link="#tab-2">Show Tab 2</f7-link>
<p>
<f7-link open-panel="left">open left panel</f7-link>
<f7-link close-panel>close panel</f7-link>
</p>
<f7-link open-popup="#my-popup">open popup</f7-link>
<f7-link icon-f7="home" text="Home"color="red"></f7-link>
<f7-popup id="my-popup" fill>
  <f7-view>
    <f7-page>
    
    </f7-page>
  </f7-view>
</f7-popup>

<f7-block>消息框</f7-block>
<f7-messages>
  <f7-message name="John" text="Hello, Kate!" type="received"></f7-message>
  <f7-message name="Kate" text="Hi, John!" type="sent"></f7-message>
</f7-messages>

<f7-messagebar placeholder="Message" send-link="Send" @submit="onSubmit"></f7-messagebar>
<f7-messagebar placeholder="Message" send-link="Send" @submit="onSubmit">
  <div slot="before-inner">Before inner</div>
  <div slot="after-inner">After inner</div>
  <div slot="before-textarea">Before textarea</div>
  <div slot="after-textarea">After textarea</div>
  <div>Default slot</div>
</f7-messagebar>




</f7-page>
</template>

<script>
export default {}
</script>