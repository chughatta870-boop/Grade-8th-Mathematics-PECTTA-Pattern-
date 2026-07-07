/* ===================== PECTTA 2026-27 — Class 8 Maths MCQ Data ===================== */
/* 5 Chapter-wise Papers (P1-P5) + 5 Full-Syllabus Papers (P6-P10)
   Punjab Textbook Board Class 8 Mathematics syllabus coverage */

const PAPERS = [
  {
    id: "p1", type: "chapter", title: "Paper 1", subtitle: "Sets",
    questions: [
      { q:"Which symbol represents 'is an element of' a set?", o:["∈","⊂","∪","∩"], a:0 },
      { q:"A set having no element is called:", o:["Singleton set","Null set","Universal set","Power set"], a:1 },
      { q:"If A = {1,2,3} and B = {2,3,4}, then A ∩ B = ?", o:["{1,2,3,4}","{2,3}","{1,4}","{}"], a:1 },
      { q:"If A = {1,2,3} and B = {2,3,4}, then A ∪ B = ?", o:["{1,2,3,4}","{2,3}","{1,4}","{1,2,3}"], a:0 },
      { q:"The set of all subsets of a set A is called:", o:["Universal set","Power set","Null set","Subset"], a:1 },
      { q:"If every element of set A is also in set B, then A is called a ___ of B.", o:["Superset","Subset","Complement","Union"], a:1 },
      { q:"Number of subsets of a set with 3 elements is:", o:["6","8","9","3"], a:1 },
      { q:"Two sets with no common element are called:", o:["Equal sets","Disjoint sets","Equivalent sets","Overlapping sets"], a:1 },
      { q:"Symbol '⊆' means:", o:["Proper subset","Subset or equal","Union","Complement"], a:1 },
      { q:"The complement of set A (within universal set U) contains:", o:["Elements in both A and U","Elements in A only","Elements in U but not in A","No elements"], a:2 },
      { q:"{x | x is a whole number less than 5} in tabular form is:", o:["{1,2,3,4}","{0,1,2,3,4}","{0,1,2,3,4,5}","{1,2,3,4,5}"], a:1 },
      { q:"A = {a,b,c}, B = {a,b,c}. The sets A and B are:", o:["Disjoint","Equal","Unequal","Empty"], a:1 },
      { q:"Which of these is a singleton set?", o:["{1,2}","{x | x is even prime number}","{}","{1,2,3}"], a:1 },
      { q:"Venn diagrams are used to represent:", o:["Equations","Sets","Graphs","Angles"], a:1 },
      { q:"If n(A) = 4, the number of proper subsets of A is:", o:["16","15","14","8"], a:1 }
    ]
  },
  {
    id: "p2", type: "chapter", title: "Paper 2", subtitle: "Real Numbers, Squares, Square Roots & Cubes",
    questions: [
      { q:"√144 = ?", o:["11","12","13","14"], a:1 },
      { q:"Which of the following is a rational number?", o:["√2","π","3/4","√3"], a:2 },
      { q:"The square of 15 is:", o:["215","225","235","245"], a:1 },
      { q:"Cube of 4 is:", o:["12","16","64","48"], a:2 },
      { q:"Cube root of 27 is:", o:["3","6","9","27"], a:0 },
      { q:"An irrational number cannot be written as:", o:["A decimal","A fraction p/q","A whole number list","A point on number line"], a:1 },
      { q:"√225 = ?", o:["13","14","15","16"], a:2 },
      { q:"Which number is a perfect square?", o:["48","64","72","80"], a:1 },
      { q:"Every natural number is also a:", o:["Negative number","Whole number","Irrational number","Complex number"], a:1 },
      { q:"The value of (2)³ + (3)² is:", o:["17","15","19","12"], a:0 },
      { q:"Rational numbers between two integers are:", o:["Finite","Zero","Infinite","Always one"], a:2 },
      { q:"√0.09 = ?", o:["0.03","0.3","0.9","3"], a:1 },
      { q:"Cube of a negative number is always:", o:["Positive","Negative","Zero","Undefined"], a:1 },
      { q:"Which is the smallest whole number?", o:["-1","0","1","None"], a:1 },
      { q:"Square root of a perfect square is always a:", o:["Fraction","Whole number","Irrational number","Negative number"], a:1 }
    ]
  },
  {
    id: "p3", type: "chapter", title: "Paper 3", subtitle: "Financial Arithmetic",
    questions: [
      { q:"If cost price is Rs.500 and selling price is Rs.600, the profit is:", o:["Rs.50","Rs.100","Rs.150","Rs.200"], a:1 },
      { q:"Profit % is calculated using:", o:["(Profit/CP)×100","(Profit/SP)×100","(CP/Profit)×100","(SP/CP)×100"], a:0 },
      { q:"If an item is sold at a loss, then:", o:["SP > CP","SP = CP","SP < CP","CP = 0"], a:2 },
      { q:"Zakat is charged at the rate of:", o:["2%","2.5%","5%","10%"], a:1 },
      { q:"Ushr is charged on:", o:["Salary","Agricultural produce","Bank profit","Property"], a:1 },
      { q:"Discount is always calculated on:", o:["Cost price","Marked price","Selling price","Profit"], a:1 },
      { q:"If marked price is Rs.1000 and discount is 10%, the selling price is:", o:["Rs.900","Rs.100","Rs.990","Rs.800"], a:0 },
      { q:"Simple interest formula is:", o:["I = PRT/100","I = P+R+T","I = P/RT","I = PR/T"], a:0 },
      { q:"Rate of Zakat is charged on wealth held for:", o:["6 months","1 lunar year","2 years","1 solar year"], a:1 },
      { q:"If CP = Rs.800 and loss = Rs.80, the SP is:", o:["Rs.880","Rs.720","Rs.800","Rs.80"], a:1 },
      { q:"Sales tax is added to:", o:["Cost price only","Selling price of goods","Profit only","Discount"], a:1 },
      { q:"Which of these is NOT related to financial arithmetic?", o:["Profit and loss","Zakat","Percentage","Sets"], a:3 },
      { q:"If profit % = 20 and CP = Rs.500, profit amount is:", o:["Rs.80","Rs.100","Rs.120","Rs.60"], a:1 },
      { q:"Ushr rate on rain-fed land produce is:", o:["5%","10%","2.5%","20%"], a:1 },
      { q:"Compound interest differs from simple interest because it is calculated on:", o:["Principal only","Principal + accumulated interest","Rate only","Time only"], a:1 }
    ]
  },
  {
    id: "p4", type: "chapter", title: "Paper 4", subtitle: "Algebraic Expressions & Manipulation",
    questions: [
      { q:"Simplify: 3x + 5x = ?", o:["8x","15x","8x²","2x"], a:0 },
      { q:"The HCF of algebraic terms 6x² and 9x is:", o:["3x","6x","9x","3x²"], a:0 },
      { q:"Expand: (x+2)(x+3)", o:["x²+5x+6","x²+6x+5","x²+5x+5","x²+6"], a:0 },
      { q:"Factorize: x² - 9", o:["(x-3)(x-3)","(x+3)(x-3)","(x+9)(x-1)","(x-9)(x+1)"], a:1 },
      { q:"The degree of the polynomial 4x³+2x²+1 is:", o:["1","2","3","4"], a:2 },
      { q:"Which is a monomial?", o:["x+y","3x²","x+2y+3","x-y"], a:1 },
      { q:"LCM of 4x and 6x² is:", o:["12x²","24x","12x","24x²"], a:0 },
      { q:"Simplify: (a+b)² = ?", o:["a²+b²","a²+2ab+b²","a²-2ab+b²","a²+ab+b²"], a:1 },
      { q:"Factorize: a² - b²", o:["(a-b)²","(a+b)(a-b)","(a+b)²","a-b"], a:1 },
      { q:"A binomial has how many terms?", o:["1","2","3","Many"], a:1 },
      { q:"Simplify: 5(x+2) = ?", o:["5x+2","5x+10","x+10","5x+7"], a:1 },
      { q:"The coefficient of x in the term 7x is:", o:["1","x","7","0"], a:2 },
      { q:"(x-y)² expands to:", o:["x²-2xy+y²","x²+2xy+y²","x²-y²","x²-xy+y²"], a:0 },
      { q:"Which of these is a constant term in 3x²+5x+9?", o:["3","5","9","x"], a:2 },
      { q:"Simplify: 4x² ÷ 2x = ?", o:["2x","2x²","x","4x"], a:0 }
    ]
  },
  {
    id: "p5", type: "chapter", title: "Paper 5", subtitle: "Linear Equations & Linear Graphs",
    questions: [
      { q:"Solve for x: x + 5 = 12", o:["5","7","6","17"], a:1 },
      { q:"Solve: 2x = 10", o:["2","5","10","20"], a:1 },
      { q:"A linear equation in one variable has degree:", o:["0","1","2","3"], a:1 },
      { q:"Solve: 3x - 4 = 11", o:["3","4","5","6"], a:2 },
      { q:"The graph of a linear equation in two variables is always a:", o:["Curve","Straight line","Circle","Parabola"], a:1 },
      { q:"On a graph, the horizontal axis is called:", o:["Y-axis","X-axis","Origin","Z-axis"], a:1 },
      { q:"The point where the x-axis and y-axis meet is called:", o:["Origin","Vertex","Intercept","Quadrant"], a:0 },
      { q:"Solve: x/2 = 8", o:["4","10","16","8"], a:2 },
      { q:"The coordinates of the origin are:", o:["(1,1)","(0,0)","(0,1)","(1,0)"], a:1 },
      { q:"Solve: 5x + 2 = 17", o:["2","3","4","5"], a:1 },
      { q:"In point (3,5), the value 3 represents the:", o:["y-coordinate","x-coordinate","origin","slope"], a:1 },
      { q:"Solve: 2(x+3) = 16", o:["4","5","6","7"], a:1 },
      { q:"A linear equation ax+b=0 has how many solutions?", o:["0","1","2","Infinite"], a:1 },
      { q:"The vertical axis on a graph is known as:", o:["X-axis","Y-axis","Origin","Slope"], a:1 },
      { q:"Solve: x - 7 = -2", o:["5","9","-9","-5"], a:1 }
    ]
  },
  {
    id: "p6", type: "full", title: "Paper 6", subtitle: "Full Syllabus Mock Test A",
    questions: [
      { q:"If A = {2,4,6} and B = {4,6,8}, then A ∩ B = ?", o:["{4,6}","{2,4,6,8}","{2,8}","{}"], a:0 },
      { q:"√169 = ?", o:["11","12","13","14"], a:2 },
      { q:"If CP = Rs.400, SP = Rs.460, profit % is:", o:["10%","15%","20%","25%"], a:1 },
      { q:"Simplify: 7x - 3x = ?", o:["4x","10x","4","21x"], a:0 },
      { q:"Solve: x + 9 = 15", o:["5","6","7","24"], a:1 },
      { q:"Sum of interior angles of a triangle is:", o:["90°","180°","270°","360°"], a:1 },
      { q:"A quadrilateral has ___ sides.", o:["3","4","5","6"], a:1 },
      { q:"The circumference of a circle is given by:", o:["πr²","2πr","πd²","πr"], a:1 },
      { q:"Area of a rectangle = ?", o:["length × breadth","2(l+b)","side × side","½ × base × height"], a:0 },
      { q:"Volume of a cube with side 3cm is:", o:["9 cm³","27 cm³","18 cm³","6 cm³"], a:1 },
      { q:"Mean of 2, 4, 6, 8 is:", o:["4","5","6","20"], a:1 },
      { q:"An angle greater than 90° but less than 180° is:", o:["Acute","Obtuse","Right","Reflex"], a:1 },
      { q:"Which set has no elements?", o:["Universal set","Null set","Power set","Subset"], a:1 },
      { q:"Factorize: x²-16", o:["(x-4)(x+4)","(x-4)²","(x+4)²","(x-8)(x+8)"], a:0 },
      { q:"Zakat rate is:", o:["2%","2.5%","5%","10%"], a:1 },
      { q:"The perimeter of a square with side 6cm is:", o:["12cm","18cm","24cm","36cm"], a:2 },
      { q:"Solve: 4x = 24", o:["4","6","8","10"], a:1 },
      { q:"A line segment joining the center of a circle to a point on it is called:", o:["Diameter","Radius","Chord","Tangent"], a:1 },
      { q:"Cube root of 8 is:", o:["2","3","4","8"], a:0 },
      { q:"Two angles whose sum is 180° are called:", o:["Complementary","Supplementary","Adjacent","Vertical"], a:1 }
    ]
  },
  {
    id: "p7", type: "full", title: "Paper 7", subtitle: "Full Syllabus Mock Test B",
    questions: [
      { q:"If n(A)=3, number of subsets of A are:", o:["6","8","9","3"], a:1 },
      { q:"√81 = ?", o:["7","8","9","10"], a:2 },
      { q:"If SP = Rs.750 and loss = Rs.50, CP is:", o:["Rs.700","Rs.800","Rs.750","Rs.850"], a:1 },
      { q:"Expand: (x-4)(x+4)", o:["x²-16","x²+16","x²-8x+16","x²-4"], a:0 },
      { q:"Solve: 6x - 6 = 18", o:["3","4","5","6"], a:1 },
      { q:"A triangle with all sides equal is called:", o:["Scalene","Isosceles","Equilateral","Right-angled"], a:2 },
      { q:"The diagonals of a rectangle are:", o:["Unequal","Equal","Perpendicular","Parallel"], a:1 },
      { q:"Area of a circle with radius r is:", o:["2πr","πr²","πd","2πr²"], a:1 },
      { q:"Which of these is a whole number but not a natural number?", o:["1","0","-1","2"], a:1 },
      { q:"Total Surface Area of a cube with side a is:", o:["a³","4a²","6a²","a²"], a:2 },
      { q:"Median of 3, 5, 7, 9, 11 is:", o:["5","7","9","6"], a:1 },
      { q:"An angle of exactly 90° is called:", o:["Acute","Obtuse","Right angle","Straight angle"], a:2 },
      { q:"HCF of 12 and 18 is:", o:["3","6","9","12"], a:1 },
      { q:"Ushr is applicable on:", o:["Bank interest","Agricultural produce","Salary income","Business profit"], a:1 },
      { q:"Solve: x/3 = 9", o:["3","12","27","6"], a:2 },
      { q:"A part of a circle's boundary is called:", o:["Chord","Arc","Radius","Sector"], a:1 },
      { q:"Simplify: 2(3x+4) = ?", o:["6x+4","6x+8","3x+8","5x+8"], a:1 },
      { q:"Which number is irrational?", o:["4/5","√5","0.75","10"], a:1 },
      { q:"A quadrilateral with one pair of parallel sides is a:", o:["Parallelogram","Trapezium","Rectangle","Rhombus"], a:1 },
      { q:"Discount = Marked Price − ?", o:["Cost Price","Selling Price","Profit","Tax"], a:1 }
    ]
  },
  {
    id: "p8", type: "full", title: "Paper 8", subtitle: "Full Syllabus Mock Test C",
    questions: [
      { q:"A = {1,3,5}, B = {2,4,6}. A and B are:", o:["Equal sets","Disjoint sets","Overlapping sets","Subsets"], a:1 },
      { q:"Cube of -2 is:", o:["8","-8","4","-4"], a:1 },
      { q:"If profit is 25% on CP Rs.800, profit amount is:", o:["Rs.150","Rs.200","Rs.250","Rs.100"], a:1 },
      { q:"Factorize: 4x + 8", o:["4(x+2)","2(2x+4)","4(x+8)","x(4+8)"], a:0 },
      { q:"Solve: 2x + 3 = 3x - 5", o:["6","7","8","9"], a:2 },
      { q:"Sum of angles in a quadrilateral is:", o:["180°","270°","360°","450°"], a:2 },
      { q:"A polygon with 5 sides is called:", o:["Hexagon","Pentagon","Heptagon","Octagon"], a:1 },
      { q:"Diameter is ___ the radius.", o:["Half","Equal to","Twice","Thrice"], a:2 },
      { q:"Volume of a cuboid = ?", o:["l×b×h","2(l+b)","l×b","l+b+h"], a:0 },
      { q:"Range of data 4, 9, 15, 20 is:", o:["16","15","20","4"], a:1 },
      { q:"Two lines that never meet are called:", o:["Intersecting","Perpendicular","Parallel","Skew"], a:2 },
      { q:"Solve: x² such that x=4 gives:", o:["8","16","12","4"], a:1 },
      { q:"Power set of a null set has how many elements?", o:["0","1","2","Infinite"], a:1 },
      { q:"√196 = ?", o:["12","13","14","15"], a:2 },
      { q:"Zakat is obligatory on wealth exceeding:", o:["Ushr","Nisab","Sadaqah","Interest"], a:1 },
      { q:"An exterior angle of a triangle equals the sum of:", o:["Two opposite interior angles","All interior angles","One interior angle","None"], a:0 },
      { q:"Simplify: 9x²/3x", o:["3x","3x²","6x","27x"], a:0 },
      { q:"A circle's longest chord is its:", o:["Radius","Diameter","Arc","Tangent"], a:1 },
      { q:"Mode of data 2,3,3,4,5 is:", o:["2","3","4","5"], a:1 },
      { q:"Solve: 3(x-2) = 9", o:["3","4","5","6"], a:2 }
    ]
  },
  {
    id: "p9", type: "full", title: "Paper 9", subtitle: "Full Syllabus Mock Test D",
    questions: [
      { q:"If A ⊆ B and B ⊆ A, then A and B are:", o:["Disjoint","Equal","Unequal","Empty"], a:1 },
      { q:"Square of -7 is:", o:["-49","49","-14","14"], a:1 },
      { q:"Sales tax is calculated on:", o:["Cost price","Selling price","Marked price","Profit"], a:1 },
      { q:"Expand: (2x+3)(x+1)", o:["2x²+5x+3","2x²+3x+3","2x²+5x+5","x²+5x+3"], a:0 },
      { q:"Solve: 5(x-1) = 20", o:["3","4","5","6"], a:2 },
      { q:"Sum of angles on a straight line is:", o:["90°","180°","270°","360°"], a:1 },
      { q:"A triangle with no equal sides is:", o:["Equilateral","Isosceles","Scalene","Right-angled"], a:2 },
      { q:"Perimeter of a circle is also called its:", o:["Area","Circumference","Radius","Diameter"], a:1 },
      { q:"Surface area of a sphere with radius r is:", o:["4πr²","πr²","2πr²","4/3πr³"], a:0 },
      { q:"If data set is 5,5,5,5, its mean is:", o:["0","5","10","20"], a:1 },
      { q:"Vertically opposite angles are always:", o:["Supplementary","Equal","Complementary","Unequal"], a:1 },
      { q:"LCM of 6 and 8 is:", o:["12","24","48","16"], a:1 },
      { q:"n(A) = 5 means set A has how many elements?", o:["4","5","6","25"], a:1 },
      { q:"√400 = ?", o:["18","19","20","21"], a:2 },
      { q:"Ushr on irrigated land produce is:", o:["10%","5%","2.5%","20%"], a:1 },
      { q:"A regular polygon has all sides and angles:", o:["Different","Equal","Half equal","Undefined"], a:1 },
      { q:"Simplify: (5x)(2x) = ?", o:["7x","10x","10x²","7x²"], a:2 },
      { q:"The line segment from center to circumference is called:", o:["Diameter","Chord","Radius","Arc"], a:2 },
      { q:"Solve: x + x + x = 21", o:["3","7","9","21"], a:1 },
      { q:"Which of these represents a null set?", o:["{0}","{ }","{1}","{null}"], a:1 }
    ]
  },
  {
    id: "p10", type: "full", title: "Paper 10", subtitle: "Full Syllabus Final Mock Test",
    questions: [
      { q:"A ∪ A' (complement) equals:", o:["Null set","Universal set","A","None"], a:1 },
      { q:"Square root of a negative number is:", o:["Always positive","Always negative","Not a real number","Zero"], a:2 },
      { q:"If CP=Rs.1200 and SP=Rs.1080, this is a case of:", o:["Profit","Loss","No profit no loss","Discount"], a:1 },
      { q:"Factorize completely: 2x² - 8", o:["2(x-2)(x+2)","2(x-4)","(2x-4)(2x+4)","x(2x-8)"], a:0 },
      { q:"Solve: 7x - 2x = 25", o:["4","5","6","7"], a:1 },
      { q:"Angles of an equilateral triangle are each:", o:["45°","60°","90°","30°"], a:1 },
      { q:"Diagonals of a square are:", o:["Unequal and not perpendicular","Equal and perpendicular","Equal but not perpendicular","None"], a:1 },
      { q:"A sector is bounded by:", o:["Two radii and an arc","A chord and diameter","Two chords","Two tangents"], a:0 },
      { q:"Volume of cylinder = ?", o:["πr²h","2πrh","πrh","πr²"], a:0 },
      { q:"For data 10,20,30,40,50, the median is:", o:["20","25","30","40"], a:2 },
      { q:"Complementary angles add up to:", o:["90°","180°","270°","360°"], a:0 },
      { q:"GCD is another name for:", o:["LCM","HCF","Mean","Median"], a:1 },
      { q:"Power set of set with 2 elements has:", o:["2 elements","4 elements","8 elements","6 elements"], a:1 },
      { q:"Cube of 5 is:", o:["15","25","125","50"], a:2 },
      { q:"Nisab refers to the minimum ___ on which Zakat becomes obligatory.", o:["Age","Wealth threshold","Income tax","Loan amount"], a:1 },
      { q:"Sum of all interior angles of a hexagon is:", o:["360°","540°","720°","900°"], a:2 },
      { q:"Simplify: 8x ÷ 4 = ?", o:["2x","4x","2","32x"], a:0 },
      { q:"An arc that is exactly half the circle is called:", o:["Minor arc","Major arc","Semicircle","Sector"], a:2 },
      { q:"Solve: 2x + 5 = x + 12", o:["5","6","7","8"], a:2 },
      { q:"Which is NOT a quadrilateral?", o:["Square","Rectangle","Triangle","Rhombus"], a:2 }
    ]
  }
];

/* ===================== APP STATE ===================== */
let currentPaper = null;
let currentIndex = 0;
let answers = [];
let pendingStudent = { name:"", roll:"" };

/* ===================== DOM HELPERS ===================== */
const $ = (id) => document.getElementById(id);
function showView(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo(0,0);
}

/* ===================== HOME RENDER ===================== */
function renderHome(){
  const chapterBox = $("chapterPapers");
  const fullBox = $("fullPapers");
  chapterBox.innerHTML = "";
  fullBox.innerHTML = "";

  PAPERS.forEach(p=>{
    const best = getBestAttempt(p.id);
    const card = document.createElement("div");
    card.className = "paper-card";
    card.innerHTML = `
      <h4>${p.title}</h4>
      <p>${p.subtitle}</p>
      <p>${p.questions.length} MCQs</p>
      ${best ? `<span class="best-badge ${best.pass ? 'pass':'fail'}">Best: ${best.percent}% (${best.pass?'Pass':'Fail'})</span>` : `<span class="best-badge">Not attempted</span>`}
    `;
    card.addEventListener("click", ()=> openInfoModal(p.id));
    if(p.type === "chapter"){ chapterBox.appendChild(card); }
    else { fullBox.appendChild(card); }
  });
}

function getBestAttempt(paperId){
  const history = JSON.parse(localStorage.getItem("pectta_history") || "[]");
  const attempts = history.filter(h=>h.paperId===paperId);
  if(attempts.length===0) return null;
  return attempts.reduce((best,cur)=> cur.percent > best.percent ? cur : best, attempts[0]);
}

/* ===================== START TEST FLOW ===================== */
function openInfoModal(paperId){
  currentPaper = PAPERS.find(p=>p.id===paperId);
  $("studentName").value = pendingStudent.name || "";
  $("studentRoll").value = pendingStudent.roll || "";
  $("infoModal").classList.add("active");
}

$("cancelInfo").addEventListener("click", ()=>{
  $("infoModal").classList.remove("active");
});

$("startTestBtn").addEventListener("click", ()=>{
  const name = $("studentName").value.trim();
  if(!name){
    alert("Meherbani kar ke apna naam likhein.");
    return;
  }
  pendingStudent.name = name;
  pendingStudent.roll = $("studentRoll").value.trim();
  $("infoModal").classList.remove("active");
  startTest();
});

function startTest(){
  currentIndex = 0;
  answers = new Array(currentPaper
