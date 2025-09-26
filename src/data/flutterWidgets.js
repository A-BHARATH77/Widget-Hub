export const flutterWidgets = [
  {
    stage: "Stage 1: Basic Flutter Widgets",
    widgets: [
      {
        number: 1,
        name: "Container",
        description: "A box model that allows you to customize properties like padding, margin, color, etc.",
        code: `Container(
  width: 100,
  height: 100,
  color: Colors.blue,
)`
      },
      {
        number: 2,
        name: "Text",
        description: "Displays a string of text on the screen.",
        code: `Text('Hello, Flutter!')`
      },
      {
        number: 3,
        name: "Column",
        description: "A widget that sets up its children widgets vertically. Unless you wrap it with a scrollable widget, scrolling is not possible.",
        code: `Column(
  children: [
    Text('First item'),
    Text('Second item'),
  ],
)`
      },
      {
        number: 4,
        name: "Row",
        description: "A widget that sets up its children widgets horizontally. Unless you wrap it with a scrollable widget, scrolling is not possible.",
        code: `Row(
  children: [
    Text('First item'),
    Text('Second item'),
  ],
)`
      },
      {
        number: 5,
        name: "Center",
        description: "It is an align widget that centers its child widget and may adjust its own size in response to the child’s dimensions",
        code: `Center(
  child: Text('Hello, Flutter!'),
)`
      },
      {
        number: 6,
        name: "Padding",
        description: "Adds padding around a child widget.",
        code: `Padding(
  padding: EdgeInsets.all(16.0),
  child: Text('Padded Text'),
)`
      },
      {
        number: 7,
        name: "SizedBox",
        description: "Creates a box of a specific size.",
        code: `SizedBox(
  height: 50,
  width: 50,
)`
      },
      {
        number: 8,
        name: "Image",
        description: "Displays an image from a source like assets or network.",
        code: `Image.network('https://example.com/image.png')`
      },
      {
        number: 9,
        name: "Icon",
        description: "Displays a graphical icon.",
        code: `Icon(Icons.home, size: 50, color: Colors.red)`
      },
      {
        number: 10,
        name: "ElevatedButton",
        description: "A material design button that elevates when pressed.",
        code: `ElevatedButton(
  onPressed: () {},
  child: Text('Elevated Button'),
)`
      },
      {
        number: 11,
        name: "TextButton",
        description: "A button without elevation or borders.",
        code: `TextButton(
  onPressed: () {},
  child: Text('Text Button'),
)`
      },
      {
        number: 12,
        name: "OutlinedButton",
        description: "A button with an outline and no elevation.",
        code: `OutlinedButton(
  onPressed: () {},
  child: Text('Outlined Button'),
)`
      },
      {
        number: 13,
        name: "Checkbox",
        description: "A box that can be checked (true) or unchecked (false).",
        code: `Checkbox(
  value: true,
  onChanged: (newValue) {},
)`
      },
      {
        number: 14,
        name: "Switch",
        description: "A toggle switch for selecting between on/off states.",
        code: `Switch(
  value: true,
  onChanged: (newValue) {},
)`
      },
      {
        number: 15,
        name: "Slider",
        description: "Allows users to select a value from a range by sliding.",
        code: `Slider(
  value: 0.5,
  onChanged: (newValue) {},
)`
      },
      {
        number: 16,
        name: "ProgressIndicator",
        description: "Displays a circular or linear progress bar.",
        code: `CircularProgressIndicator()`
      },
      {
        number: 17,
        name: "AppBar",
        description: "A material design app bar that can hold titles and actions.",
        code: `AppBar(
  title: Text('AppBar Title'),
)`
      },
      {
        number: 18,
        name: "Scaffold",
        description: "Provides a basic framework for app structure like app bar, body, drawer, etc.",
        code: `Scaffold(
  appBar: AppBar(title: Text('My App')),
  body: Center(child: Text('Hello!')),
)`
      },
      {
        number: 19,
        name: "Divider",
        description: "The Divider widget is used to draw a horizontal line between widgets, helping to separate content visually. It’s commonly used in lists or layouts to add spacing and clarity.",
        code: `Divider(
  color: Colors.grey,
  thickness: 2.0,
)`
      }
    ]
  },
  {
    stage: "Stage 2: Layout Widgets",
    widgets: [
      {
        number: 20,
        name: "ListView",
        description: "A scrollable list of widgets is displayed vertically.",
        code: `ListView(
  children: [Text('Item 1'), Text('Item 2')],
)`
      },
      {
        number: 21,
        name: "GridView",
        description: "Displays widgets in a grid format, allowing scrolling.",
        code: `GridView.count(
  crossAxisCount: 2,
  children: [Icon(Icons.star), Icon(Icons.favorite)],
)`
      },
      {
        number: 22,
        name: "Stack",
        description: "Overlays widgets on top of each other.",
        code: `Stack(
  children: [
    Container(
      width: 200,
      height: 200,
      color: Colors.blue,
    ),
    Positioned(
      top: 50,
      left: 50,
      child: Text('Hello'),
    ),
    Positioned(
      bottom: 50,
      right: 50,
      child: Text('Flutter'),
    ),
  ],
)`
      },
      {
        number: 23,
        name: "Positioned",
        description: "Positions a widget within a Stack using coordinates.",
        code: `Positioned(
  left: 10,
  top: 20,
  child: Text('I am positioned!'),
)`
      },
      {
        number: 24,
        name: "Expanded",
        description: "Expands a widget to fill available space within a flex container like Row or Column.",
        code: `Expanded(
  child: Text('I take all available space!'),
)`
      },
      {
        number: 25,
        name: "Flexible",
        description: "A flexible widget that can expand or shrink based on available space, but with more control than Expanded.",
        code: `Flexible(
  child: Text('I am flexible!'),
)`
      },
      {
        number: 26,
        name: "Wrap",
        description: "Displays widgets in a flow, wrapping to the next line if there’s no space.",
        code: `Wrap(
  children: [Text('Item 1'), Text('Item 2'), Text('Item 3')],
)`
      },
      {
        number: 27,
        name: "FittedBox",
        description: "Scales and fits its child widget within the available space.",
        code: `FittedBox(
  child: Text('This text scales'),
)`
      },
      {
        number: 28,
        name: "Align",
        description: "Aligns a child widget within its parent according to specified alignment.",
        code: `Align(
  alignment: Alignment.centerRight,
  child: Text('Aligned Right'),
)`
      },
      {
        number: 29,
        name: "FractionallySizedBox",
        description: "Sizes its child based on a fraction of its parent’s size.",
        code: `FractionallySizedBox(
  widthFactor: 0.5,
  child: Container(color: Colors.blue),
)`
      },
      {
        number: 30,
        name: "Table",
        description: "Displays widgets in a table layout with rows and columns.",
        code: `Table(
  children: [
    TableRow(children: [Text('Row 1, Col 1'), Text('Row 1, Col 2')]),
    TableRow(children: [Text('Row 2, Col 1'), Text('Row 2, Col 2')]),
  ],
)`
      },
      {
        number: 31,
        name: "Form",
        description: "A container for grouping and validating input fields.",
        code: `Form(
  child: TextFormField(decoration: InputDecoration(labelText: 'Enter text')),
)`
      },
      {
        number: 32,
        name: "TextField",
        description: "A basic input field for entering text.",
        code: `TextField(
  decoration: InputDecoration(labelText: 'Enter your name'),
)`
      },
      {
        number: 33,
        name: "GestureDetector",
        description: "Detects gestures like tap, drag, etc., and allows interaction with widgets.",
        code: `GestureDetector(
  onTap: () => print('Tapped!'),
  child: Container(color: Colors.green, width: 100, height: 100),
)`
      },
      {
        number: 34,
        name: "InkWell",
        description: "A material design tap effect that wraps around any widget, making it tappable.",
        code: `InkWell(
  onTap: () => print('InkWell tapped'),
  child: Container(color: Colors.yellow, width: 100, height: 100),
)`
      },
      {
        number: 35,
        name: "Hero",
        description: "Provides a shared element transition between screens.",
        code: `Hero(
  tag: 'hero-tag',
  child: Image.network('https://example.com/image.png'),
)`
      },
      {
        number: 36,
        name: "BottomNavigationBar",
        description: "A bottom navigation bar for navigating between different views or pages.",
        code: `BottomNavigationBar(
  items: [
    BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
    BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
  ],
)`
      },
      {
        number: 37,
        name: "TabBar",
        description: "Displays tabs at the top of a screen for navigation.",
        code: `TabBar(
  tabs: [Tab(text: 'Tab 1'), Tab(text: 'Tab 2')],
)`
      },
      {
        number: 38,
        name: "TabBarView",
        description: "A view that switches between different screens when tabs are clicked.",
        code: `TabBarView(
  children: [
    Center(child: Text('Tab 1 Content')),
    Center(child: Text('Tab 2 Content')),
  ],
)`
      },
      {
        number: 39,
        name: "Drawer",
        description: "A slide-out menu that appears from the side of the screen.",
        code: `Drawer(
  child: ListView(children: [ListTile(title: Text('Item 1'))]),
)`
      }
    ]
  },
  {
    stage: "Stage 3: Customization and Animation Widgets",
    widgets: [
      {
        number: 40,
        name: "AbsorbPointer",
        description: "The AbsorbPointer widget prevents its child widget from receiving pointer events like taps and drags. It’s useful for temporarily disabling touch interaction on specific widgets.",
        code: `AbsorbPointer(
  absorbing: true,
  child: ElevatedButton(onPressed: () {}, child: Text('Button')),
)`
      },
      {
        number: 41,
        name: "AnimatedContainer",
        description: "A container that transitions between values like size, color, etc., with animation.",
        code: `AnimatedContainer(
  duration: Duration(seconds: 1),
  width: 100,
  height: 100,
  color: Colors.blue,
)`
      },
      {
        number: 42,
        name: "AnimatedOpacity",
        description: "Animates changes to the opacity of a widget.",
        code: `AnimatedOpacity(
  opacity: 0.5,
  duration: Duration(seconds: 1),
  child: Text('Fading Text'),
)`
      },
      {
        number: 43,
        name: "AnimatedBuilder",
        description: "Builds a widget while animating its properties using an animation controller.",
        code: `AnimatedBuilder(
  animation: _controller,
  builder: (context, child) => Transform.rotate(
    angle: _controller.value * 6.3,
    child: child,
  ),
  child: Icon(Icons.star),
)`
      },
      {
        number: 44,
        name: "AnimatedSwitcher",
        description: "Switches between two widgets with an animation when the state changes.",
        code: `AnimatedSwitcher(
  duration: Duration(seconds: 1),
  child: _isFirst ? Text('First') : Text('Second'),
)`
      },
      {
        number: 45,
        name: "AnimatedList",
        description: "Displays a list with animated insertions and removals",
        code: `AnimatedList(
  initialItemCount: 3,
  itemBuilder: (context, index, animation) {
    return SizeTransition(
      sizeFactor: animation,
      child: Text('Item $index'),
    );
  },
)`
      },
      {
        number: 46,
        name: "PageView",
        description: "A scrollable list of pages that the user can swipe between.",
        code: `PageView(
  children: [Text('Page 1'), Text('Page 2')],
)`
      },
      {
        number: 47,
        name: "ClipRRect",
        description: "Clips its child widget with rounded corners.",
        code: `ClipRRect(
  borderRadius: BorderRadius.circular(8.0),
  child: Image.network('https://example.com/image.png'),
)`
      },
      {
        number: 48,
        name: "ClipOval",
        description: "Clips its child into an oval shape.",
        code: `ClipOval(
  child: Image.network('https://example.com/image.png'),
)`
      },
      {
        number: 49,
        name: "ClipPath",
        description: "Clips its child using a custom path.",
        code: `ClipPath(
  clipper: MyCustomClipper(),
  child: Container(color: Colors.red),
)`
      },
      {
        number: 50,
        name: "CustomPaint",
        description: "Allows drawing custom graphics on the screen using a canvas.",
        code: `CustomPaint(
  painter: MyCustomPainter(),
  child: Container(height: 100, width: 100),
)`
      },
      {
        number: 51,
        name: "CustomScrollView",
        description: "A scroll view that allows custom scrolling effects like slivers.",
        code: `CustomScrollView(
  slivers: [SliverAppBar(title: Text('Title')), SliverList(delegate: SliverChildListDelegate([Text('Item')]))],
)`
      },
      {
        number: 52,
        name: "SliverAppBar",
        description: "An app bar that integrates with a scroll view, allowing it to expand and collapse",
        code: `SliverAppBar(
  title: Text('Sliver AppBar'),
  floating: true,
)`
      },
      {
        number: 53,
        name: "SliverList",
        description: "A scrollable list of sliver widgets.",
        code: `SliverList(
  delegate: SliverChildBuilderDelegate((context, index) => Text('Item $index')),
)`
      },
      {
        number: 54,
        name: "SliverGrid",
        description: "Displays a grid of slivers, optimized for scrolling.",
        code: `SliverGrid(
  delegate: SliverChildBuilderDelegate((context, index) => Icon(Icons.star)),
  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
)`
      },
      {
        number: 55,
        name: "DraggableScrollableSheet",
        description: "A scrollable sheet that can be dragged up and down.",
        code: `DraggableScrollableSheet(
  builder: (context, controller) {
    return ListView.builder(
      controller: controller,
      itemCount: 10,
      itemBuilder: (context, index) => Text('Item $index'),
    );
  },
)`
      },
      {
        number: 56,
        name: "Dismissible",
        description: "A widget that can be dismissed by swiping, commonly used in lists.",
        code: `Dismissible(
  key: Key('item1'),
  onDismissed: (direction) => print('Item dismissed'),
  child: ListTile(title: Text('Swipe me')),
)`
      },
      {
        number: 57,
        name: "ReorderableListView",
        description: "A list where items can be reordered by dragging.",
        code: `ReorderableListView(
  children: [Text('Item 1'), Text('Item 2')],
  onReorder: (oldIndex, newIndex) {},
)`
      },
      {
        number: 58,
        name: "ExpansionPanelList",
        description: "A list of expansion panels that expand/collapse to show more content.",
        code: `ExpansionPanelList(
  expansionCallback: (index, isExpanded) {},
  children: [
    ExpansionPanel(
      headerBuilder: (context, isExpanded) => Text('Header'),
      body: Text('Body'),
    ),
  ],
)`
      },
      {
        number: 59,
        name: "ExpansionTile",
        description: "A tile that expands to reveal more information when tapped.",
        code: `ExpansionTile(
  title: Text('Expandable'),
  children: [Text('Expanded content')],
)`
      },
      {
        number: 60,
        name: "Stepper",
        description: "A step-by-step interface to show progress through a sequence of steps.",
        code: `Stepper(
  steps: [Step(title: Text('Step 1'), content: Text('Details'))],
  currentStep: 0,
)`
      }
    ]
  },
  {
    stage: "Stage 4: Advanced Widgets with State Management and Animation",
    widgets: [
      {
        number: 61,
        name: "StreamBuilder",
        description: "Builds widgets based on the latest snapshot of a stream of data.",
        code: `StreamBuilder<int>(
  stream: Stream.periodic(Duration(seconds: 1), (i) => i),
  builder: (context, snapshot) => Text('Stream: \${snapshot.data}')
)`
      },
      {
        number: 62,
        name: "FutureBuilder",
        description: "Builds widgets based on the state of a Future, such as waiting or completed.",
        code: `FutureBuilder<String>(
  future: Future.delayed(Duration(seconds: 2), () => 'Data Loaded'),
  builder: (context, snapshot) => Text(snapshot.data ?? 'Loading...'),
)`
      },
      {
        number: 63,
        name: "ValueListenableBuilder",
        description: "Listens to changes in a ValueNotifier and rebuilds the widget tree when the value changes.",
        code: `ValueListenableBuilder<int>(
  valueListenable: _counter,
  builder: (context, value, child) => Text('Value: $value'),
)`
      },
      {
        number: 64,
        name: "AnimatedPositioned",
        description: "Animates changes in position when a child’s position changes within a Stack.",
        code: `AnimatedPositioned(
  duration: Duration(seconds: 1),
  top: _topPosition,
  child: Container(color: Colors.blue, width: 100, height: 100),
)`
      },
      {
        number: 65,
        name: "AnimatedSize",
        description: "Automatically animates changes in the size of its child widget.",
        code: `AnimatedSize(
  duration: Duration(seconds: 1),
  child: Container(width: _width, height: _height),
)`
      },
      {
        number: 66,
        name: "AnimatedAlign",
        description: "Animates changes in the alignment of a child widget.",
        code: `AnimatedAlign(
  alignment: _alignment,
  duration: Duration(seconds: 1),
  child: Container(width: 50, height: 50, color: Colors.green),
)`
      },
      {
        number: 67,
        name: "Draggable",
        description: "Makes a widget draggable, with a drag feedback widget shown while dragging.",
        code: `Draggable(
  data: 'Item 1',
  feedback: Container(width: 100, height: 100, color: Colors.blue),
  child: Container(width: 100, height: 100, color: Colors.red),
)`
      },
      {
        number: 68,
        name: "DragTarget",
        description: "A widget that accepts draggable data when dropped onto it.",
        code: `DragTarget<String>(
  onAccept: (data) => print('Accepted: $data'),
  builder: (context, candidateData, rejectedData) => Container(width: 100, height: 100, color: Colors.yellow),
)`
      },
      {
        number: 69,
        name: "NotificationListener",
        description: "Listens for notifications bubbling up the widget tree.",
        code: `NotificationListener<ScrollNotification>(
  onNotification: (notification) {
    print('Scrolled!');
    return true;
  },
  child: ListView(children: [Text('Item 1'), Text('Item 2')]),
)`
      },
      {
        number: 70,
        name: "ScrollNotification",
        description: "A type of notification triggered during scrolling, used with NotificationListener.",
        code: `NotificationListener<ScrollNotification>(
  onNotification: (notification) {
    if (notification is ScrollEndNotification) {
      print('Scrolling stopped');
    }
    return true;
  },
  child: ListView(children: [Text('Item 1'), Text('Item 2')]),
)`
      },
      {
        number: 71,
        name: "Scrollable",
        description: "Provides a low-level scrolling widget that can be customized further.",
        code: `Scrollable(
  axisDirection: AxisDirection.down,
  viewportBuilder: (context, position) => ListView(children: [Text('Scrollable Item 1')]),
)`
      },
      {
        number: 72,
        name: "NestedScrollView",
        description: "Combines scrolling of SliverAppBar and body widgets to create a smooth scrolling experience.",
        code: `NestedScrollView(
  headerSliverBuilder: (context, innerBoxIsScrolled) => [SliverAppBar(title: Text('NestedScrollView'))],
  body: ListView(children: [Text('Item 1'), Text('Item 2')]),
)`
      },
      {
        number: 73,
        name: "CupertinoPageScaffold",
        description: "A basic page layout for iOS design with an optional navigation bar.",
        code: `CupertinoPageScaffold(
  navigationBar: CupertinoNavigationBar(middle: Text('Cupertino')),
  child: Center(child: Text('iOS Page')),
)`
      },
      {
        number: 74,
        name: "CupertinoButton",
        description: "An iOS-style button that can be pressed to trigger an action.",
        code: `CupertinoButton(
  child: Text('Cupertino Button'),
  onPressed: () {},
)`
      },
      {
        number: 75,
        name: "CupertinoSlider",
        description: "An iOS-style slider to select a value between a minimum and maximum range.",
        code: `CupertinoSlider(
  value: 0.5,
  onChanged: (value) {},
)`
      },
      {
        number: 76,
        name: "FlutterLogo",
        description: "A widget that displays the Flutter logo.",
        code: `FlutterLogo(size: 100)`
      },
      {
        number: 77,
        name: "Placeholder",
        description: "A box that draws a placeholder when the UI is not yet built.",
        code: `Placeholder(fallbackHeight: 100, fallbackWidth: 100)`
      },
      {
        number: 78,
        name: "MediaQuery",
        description: "Provides information about the device’s screen size and other properties.",
        code: `MediaQuery.of(context).size.width`
      },
      {
        number: 79,
        name: "LayoutBuilder",
        description: "Builds a widget tree based on the parent widget’s size constraints.",
        code: `LayoutBuilder(
  builder: (context, constraints) => Text('Max Width: \${constraints.maxWidth}')
)`
      },
      {
        number: 80,
        name: "OrientationBuilder",
        description: "Builds a widget based on the screen’s orientation (portrait or landscape)",
        code: `OrientationBuilder(
  builder: (context, orientation) => Text('Orientation: $orientation'),
)`
      }
    ]
  },
  {
    stage: "Stage 5: Complex Custom Widgets and Design Patterns",
    widgets: [
      {
        number: 81,
        name: "CustomClipper",
        description: "Customizes the shape of widgets by clipping using a custom path.",
        code: `ClipPath(
  clipper: MyCustomClipper(),
  child: Container(color: Colors.red),
)`
      },
      {
        number: 82,
        name: "ShaderMask",
        description: "Applies a shader (like gradient) to a child widget.",
        code: `ShaderMask(
  shaderCallback: (rect) => LinearGradient(colors: [Colors.red, Colors.blue]).createShader(rect),
  child: Text('Shader Mask', style: TextStyle(fontSize: 40)),
)`
      },
      {
        number: 83,
        name: "BackdropFilter",
        description: "Applies a filter (like blur) to the background behind its child.",
        code: `BackdropFilter(
  filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
  child: Container(color: Colors.black.withOpacity(0.1)),
)`
      },
      {
        number: 84,
        name: "PointerInterceptor",
        description: "Allows blocking touch events for its child widgets.",
        code: `PointerInterceptor(
  child: Container(color: Colors.green, width: 100, height: 100),
)`
      },
      {
        number: 85,
        name: "MouseRegion",
        description: "Detects when the mouse enters, exits, or moves within a region.",
        code: `MouseRegion(
  onEnter: (_) => print('Mouse Entered'),
  child: Container(width: 100, height: 100, color: Colors.blue),
)`
      },
      {
        number: 86,
        name: "FocusNode & FocusScope",
        description: "Controls the focus state of a widget, useful for text fields and keyboard interactions.",
        code: `FocusScope(
  child: TextField(focusNode: FocusNode()),
)`
      },
      {
        number: 87,
        name: "Navigator 2.0 Widgets",
        description: "Widgets like Router that provide more flexible navigation and routing control.",
        code: `Navigator(
  pages: [MaterialPage(child: HomePage())],
  onPopPage: (route, result) => route.didPop(result),
)`
      },
      {
        number: 88,
        name: "Router",
        description: "A new, declarative routing system in Flutter for more complex navigation.",
        code: `Router(
  routerDelegate: MyRouterDelegate(),
)`
      },
      {
        number: 89,
        name: "PageRouteBuilder",
        description: "Creates custom page transitions during navigation.",
        code: `PageRouteBuilder(
  pageBuilder: (context, anim1, anim2) => NextPage(),
  transitionsBuilder: (context, anim1, anim2, child) => FadeTransition(opacity: anim1, child: child),
)`
      },
      {
        number: 90,
        name: "ModalRoute",
        description: "A route that overlays a modal interface over the current content.",
        code: `Navigator.push(context, ModalRoute.of(context)!);`
      },
      {
        number: 91,
        name: "FadeTransition",
        description: "Animates a widget’s opacity using an animation.",
        code: `FadeTransition(
  opacity: _animationController,
  child: Text('Fading In/Out'),
)`
      },
      {
        number: 92,
        name: "ScaleTransition",
        description: "Animates a widget’s size scaling up or down.",
        code: `ScaleTransition(
  scale: _animationController,
  child: Icon(Icons.star),
)`
      },
      {
        number: 93,
        name: "RotationTransition",
        description: "Animates a widget’s rotation.",
        code: `RotationTransition(
  turns: _animationController,
  child: Icon(Icons.refresh),
)`
      },
      {
        number: 94,
        name: "SlideTransition",
        description: "Animates a widget sliding from one position to another.",
        code: `SlideTransition(
  position: _animationController.drive(Tween(begin: Offset(1, 0), end: Offset(0, 0))),
  child: Text('Sliding'),
)`
      },
      {
        number: 95,
        name: "Physics-based Widgets (e.g., BouncingScrollPhysics)",
        description: "Adds physics-based scrolling behavior, like bounce or inertia, to scrollable widgets.",
        code: `ListView(
  physics: BouncingScrollPhysics(),
  children: [Text('Item 1'), Text('Item 2')],
)`
      },
      {
        number: 96,
        name: "Platform-specific Widgets (e.g., AndroidView, UiKitView)",
        description: "Embeds native platform views (Android or iOS) inside Flutter apps.",
        code: `AndroidView(viewType: 'webview', creationParams: {'url': 'https://example.com'})`
      },
      {
        number: 97,
        name: "InheritedWidget",
        description: "Allows data to be passed down the widget tree efficiently.",
        code: `InheritedWidget(
  child: Text('Inherited Data'),
  updateShouldNotify: (oldWidget) => true,
)`
      },
      {
        number: 98,
        name: "Provider/Consumer",
        description: "Simplifies state management by providing data to widgets and listening to changes.",
        code: `ChangeNotifierProvider(
  create: (_) => MyModel(),
  child: Consumer<MyModel>(builder: (context, model, child) => Text(model.someData)),
)`
      },
      {
        number: 99,
        name: "BlocBuilder",
        description: "Rebuilds UI in response to state changes in BLoC architecture.",
        code: `BlocBuilder<MyBloc, MyState>(
  builder: (context, state) {
    if (state is MyStateLoading) {
      return CircularProgressIndicator();
    } else {
      return Text('Loaded');
    }
  },
)`
      },
      {
        number: 100,
        name: "GetX / Riverpod Widgets",
        description: "Simplifies state management and dependency injection with reactive programming.",
        code: `GetX<MyController>(
  builder: (controller) => Text(controller.data),
)`
      }
    ]
  }
];