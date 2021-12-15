var data_S = [
    {
        img:'1631727956532.jpg',
        title:'Be the Manager People Wont Leave',
        author:'Laurie ruettimann'
    },
    {
        img:'1635439114480.jpg',
        title:'AutoCAd: Construction Drawings',
        author:'Shaun Bryant'
    },
    {
        img:'1567195355168.jpg',
        title:'Building Resilience',
        author:'Tatiana Kolovou'
    },
    {
        img:'1593206299927.jpg',
        title:'Effective Listening',
        author:'Brenda Bailey-Hughes and Tatiana'
    },
    {
        img:'1593209064808.jpg',
        title:'Project Management Foundations',
        author:'Bonnie Biafore'
    },
    {
        img:'1575309411759.jpg',
        title:'Critical thinking for Better Judgement and Decision',
        author:'Becki Saltzman'
    },
]

var data_R = [
    {
        title:"PYTHON",
        introduction :['Learing Python','What you shoyl know','Exercise files'],
        Getting_Started:['Installing python','How to run the python examples','Installing VS Code','Chapter Quiz'],
        Basics:['Your first python program','Running Python frm VS Code','Variables and expressions','Python fuunctions'],
        Conclusions:['Next steps']
    },
    {
        title:'MS EXCEL',
        introduction:['Welcome','Using the exercise files'],
        Getting_Started:['Using the menu system','using the Quick Access Toolbar','Understanding workbooks and worksheets','Using the Formula bar','Using the Status Bar','Using navigation tools','using shortcutmenus and the Mini toolbar','Creating new workbooks','Using Excel Help'],
        Basics:['Entering data with Autofill','Working with dates and times','Using Undo and Redo','Adding comments','Using Save or Save As'],
        Conclusions:['Goodbye']
    },
    {
        title:'SQL',
        introduction:['Understanding SQL','How to use the exercise files','Course overview'],
        Getting_Started:['Database organization','The SELECT statement','Selecting rows','Selecting columns','Counting rows','Inserting data','Updating data','Deleting data'],
        Basics:['Creating a table','Deleting a table','Inserting rows','Deleting rows','The Null value','Constraing columns','Changing a schema','ID columns','Filtering data'],
        Conclusions:['Goodbye']
    },
    {
        title:'DJANGO',
        introduction:['Rapidly create web applications','what you should know','GitHub and exercise files'],
        Getting_Started:['what is Django','install Python and Django','Create a Django project','Create A  Django app'],
        Basics:['Understand URL patterns','Implement URL patterns','Implement Django views'],
        Conclusions:['Next steps']
    },
    {
        title:'MEDIA QUERIES',
        introduction:['Go cross-platform with responsive design','What you should know'],
        Getting_Started:['Viewpost','Required CSS','Display properly','Positioning','Floats','Units'],
        Basics:['intro to CSS Grid','Defining rows and columns','Grid gap','Sizing rows and columns','Placing grid items','Grid alignment overview','Aligning tracks','Aligning grid items within tracks','Aligning individual grid items'],
        Conclusions:['Next steps']
    },
    {
        title:'ASYNC',
        introduction:['impplementing smart asynchronous code','What you should know','Environment setup','Getting an OpenWetherMap API key'],
        Getting_Started:['Understanding what aysnchronous means','Defining asynchronous programming','Using callbacks in asynchronous programming','Implementing callbacks for problem-solving','Using error checking with multiple callbacks'],
        Basics:['Undesrtanding the async functions with await statements','Using statements to handle errors in async/await code','Making async/await code backward compatible with polyfill'],
        Conclusions:['Asynchronous coding experience']
    },
    {
        title:'Business Courses',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'Teams',
        introduction:['Welcome to Essentials of team collaboration','why team collaboiration is necessary'],
        Getting_Started:['Develop team ground rules','Build relationships early and often','Identify team mmbers preferred communication mode','Tips for great online collaboration'],
        Basics:['Take periodoc tempertaure checks'],
        Conclusions:['Develop best practices to enhance team collaboration','Team collaboration challenge','Chapter Quiz']
    },
    {
        title:'Project Management',
        introduction:['Deliver successful projects','What you should know'],
        Getting_Started:['what is a project','what is project management','what it takes tobe a project manager','The project management life cycle','traditional vs agile project management'],
        Basics:['initiate a project','Identify project stakeholder','Analyze project stakeholders','Identify the project goal','Define project objectives','Choose a strategy','Gather requirements'],
        Conclusions:['goodbye']
    },
    {
        title:'Javascript',
        introduction:['JavaScript:The soil from which the modern web grows','How to use the exercise files','Navigating the JS landscape','Tools for working with JavaScript','Limiting and formatting'],
        Getting_Started:['Javascript ina an HTML document','JavaScript as an external file','Modern JavaScript loading','JavaScript modules'],
        Basics:['The real-worl function','Functions and methods','A standard function','The arow function','Arrow function'],
        Conclusions:['goodbye']
    },
    {
        title:'Spring',
        introduction:['Spring into Spring','What you should know','Chapter Quiz'],
        Getting_Started:['understanding Spring Boot dependencies','Configuring embedded Tomcat','Employing MVC in Spring Boot','Thymeleaf tempplates','Web application with Spring Boot','Challenge:Gernerate An MVC webpage','Solution:Generate an MVC webpage'],
        Basics:['Booting from the web','Understanding the project','Understanding auto-configuration','Configuration in Spring Boot','Spring Profiles in Boot','Building Spring Boot applications','Containerizing Spring Boot Applications'],
        Conclusions:['goodbye']
    },
    {
        title:'Deep Learning',
        introduction:['Welcome','What you should know','Using the excercise files'],
        Getting_Started:['Setting Up TensorFlow','Install TensorFlow on macOS','Install TensorFlow on Windows','Chapter Quiz'],
        Basics:['Tensor Flow Overview','what is TEnsorFLow','Why is it called tensorFlow','Hardware,software,and language requirements'],
        Conclusions:['Goodbye']
    },
    {
        title:'Finance',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'Scrum',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'Communicating with Confidence',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'Time Management',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'Strategic Thinking',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'DOCKERS',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'APTITUDE & REASONING',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'HTML & CSS',
        introduction:['Welcome','Finanace from a business perspective','Important roles in corporate finance','The future of finance stratagies','Chapter Quiz'],
        Getting_Started:['Growth vs earnings','Assets amd investments','Growing revenue vs cost leadership ','The value of leverage','issuing equity or taking on debt'],
        Basics:['Consistency is key for financial strategies','Finance forecasts as decision inputs ','Finance decisions are business decisions','Set your finanacial team tradeoffs and tactics in place'],
        Conclusions:['Chapter Quiz']
    },
    {
        title:'Critical Thinking',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'AWS',
        introduction:['Lab overview,first look at python'],
        Getting_Started:['building the docker image'],
        Basics:['Working with Azure Container Registry (ACR)','Creating A GitHub Actions workflow'],
        Conclusions:['Running the workflow']
    },
    {
        title:'Developing Executive Presence',
        introduction:['Executive presence: The key differentiator','Chapter Quiz' ],
        Getting_Started:['Passion and positive difference','Inner presence before outer presence','Four factors of executive presence'],
        Basics:['thinking about others','Thinking about yourself','getting things done','Chapter Quiz'],
        Conclusions:['Emotional patterns','Being emotionally proactive','Shifting emotions','Chapter Quiz']
    },
    {
        title:'Git Essential Training',
        introduction:['Use Git version control software to manage project code'],
        Getting_Started:['version control','the history behind git','About distributed version control','Chapter quiz'],
        Basics:['The three trees','Git workflows','Hash values(SHA_1)','the HEAD pointer'],
        Conclusions:['goodbye']
    },
    {
        title:'Communicating with Confidence',
        introduction:['Executive presence: The key differentiator','Chapter Quiz' ],
        Getting_Started:['Passion and positive difference','Inner presence before outer presence','Four factors of executive presence'],
        Basics:['thinking about others','Thinking about yourself','getting things done','Chapter Quiz'],
        Conclusions:['Emotional patterns','Being emotionally proactive','Shifting emotions','Chapter Quiz']
    },
    {
        title:'Time Management',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'REACT',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'Strategic Thinking',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'DOCKERS',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'APTITUDE & REASONING',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'HTML & CSS',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'DSA',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'skills',
        introduction:['improve your problem Solving skills'],
        Getting_Started:['Know yourself','Staying focused Asking questions Analyzing information','Chapter Quiz'],
        Basics:['Important parameters simple problem-solving models','Complex problem-solving methods','Chapter Quiz'],
        Conclusions:['Ready to practice']
    },
    {
        title:'C++',
        introduction:['Learn C++','Using the exercise files','What is C++','The structure of this course'],
        Getting_Started:['Introduction to basic syntax','Anatomy of a C++ program','Statements and expressions','Identifiers','Defining Variables','Pointers','References','Primitive arrays'],
        Basics:['Overview of data types','integer types','integer sizes','Fixed-size integers','Floating-point types','characters and strings'],
        Conclusions:['Goodbye']
    }
]

export{data_R,data_S}