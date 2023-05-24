import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

// MyApp class
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // Root widget
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ninja ID',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Ninja ID Home Page'),
    );
  }
}

// MyHomePage StatefulWidget Class
class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

// _MyHomePageState class
class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  // UI
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[900],
      appBar: AppBar(
        title: Text(
            'Flutter Test',
          style: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
          ),
        ),
        backgroundColor: Colors.grey[800],
        centerTitle: true,
        elevation: 0.0,
      ),
      body: Padding(
        padding: EdgeInsets.fromLTRB(30, 50, 30, 50),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Center(
              child: Container(
                width: 120,
                height: 120,
                child: CircleAvatar(
                  backgroundImage: AssetImage('assets/profile_picture.jpg'),
                  radius: 40,
                ),
              ),
            ),
            Divider(
              height: 90,
              color: Colors.grey[400],
            ),
            Text(
              'NAME',
              style: TextStyle(
                color: Colors.grey,
                letterSpacing: 2.0
              ),
            ),
            SizedBox( height: 10,),
            Text(
              'Bushra',
              style: TextStyle(
                color: Colors.amber[200],
                fontSize: 30,
                letterSpacing: 2,
                fontWeight: FontWeight.bold
              ),
            ),
            SizedBox( height: 30,),
            Text(
              'USER NINJA LEVEL',
              style: TextStyle(
                  color: Colors.grey,
                  letterSpacing: 2.0
              ),
            ),
            SizedBox( height: 10,),
            Text(
              '8',
              style: TextStyle(
                  color: Colors.amber[200],
                  fontSize: 30,
                  letterSpacing: 2,
                  fontWeight: FontWeight.bold
              ),
            ),
            SizedBox( height: 30,),
            Row(
              children: [
                Icon(
                  Icons.email,
                  color: Colors.grey[400],
                ),
                SizedBox( width: 10 ),
                Text(
                  'bushra.ebox@gmail.com',
                  style: TextStyle(
                    color: Colors.grey[200],
                    fontSize: 18,
                    letterSpacing: 1.0,
                  ),
                )
              ],
            )
          ],
        ),
      ),

      // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
