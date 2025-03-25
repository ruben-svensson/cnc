
const quizes = [
    
    {
        name: 'Skärteknik',
        questions: [
            {
                question: 'Vid en borroperation bildas grader vid utgången av ett genomgående hål. Välj bästa alternativ för att reducera detta.',
                answers: [
                    { text: 'Välj ett verktyg med mindre spiralvinkel', incorrectReasoning: 'Mindre spiralvinkel påverkar inte gradbildningen direkt.' },
                    { text: 'Sänk skärhastigheten vid utgången', incorrectReasoning: 'Sänkt skärhastighet kan hjälpa, men är inte det mest effektiva.' },
                    { text: 'Minska matningen vid utgången av hålet', incorrectReasoning: null },
                    { text: 'Använd intermittent matning.', incorrectReasoning: 'Intermittent matning är inte relevant för gradbildning.' },
                ],
                correctAnswer: 1,
                shortReasoning: 'Minskad matning ger mindre gradbildning.',
                longReasoning: 'Minskad matning vid utgången av hålet minskar trycket och därmed gradbildningen. Att sänka skärhastigheten kan också hjälpa, men minskad matning är mer effektivt.'
            },
            {
                question: 'Du genomför en borroperation i mjuk (duktil) koppar, men får ingen spånbrytning. Vilken åtgärd är bäst?',
                answers: [
                    { text: 'Intermittent matning', incorrectReasoning: null },
                    { text: 'Högre matning', incorrectReasoning: 'Högre matning kan hjälpa, men är inte alltid tillräckligt.' },
                    { text: 'Minskad skärhastighet', incorrectReasoning: 'Minskad skärhastighet förvärrar problemet.' },
                    { text: 'Ökad skärhastighet', incorrectReasoning: 'Ökad skärhastighet förvärrar problemet.' },
                ],
                correctAnswer: 0,
                shortReasoning: 'Intermittent matning ger spånbrytning.',
                longReasoning: 'Intermittent matning skapar en cyklisk variation i matningen, vilket hjälper till att bryta spånan. Högre matning kan också fungera, men intermittent är mer pålitligt.'
            },
            {
                question: 'Vad menas med skärhastighet?',
                answers: [
                    { text: 'Varvtalet på arbetsstycket eller verktyget.', incorrectReasoning: 'Varvtal är relaterat, men inte samma sak.' },
                    { text: 'Periferihastighet på arbetsstycket/verktyget.', incorrectReasoning: null },
                    { text: 'Volymen spånor som produceras per minut.', incorrectReasoning: 'Detta är avverkningshastighet, inte skärhastighet.' },
                    { text: 'Bordsmatningen på verktygsmaskinen', incorrectReasoning: 'Detta är matningshastighet, inte skärhastighet.' },
                ],
                correctAnswer: 1,
                shortReasoning: 'Skärhastighet är periferihastighet.',
                longReasoning: 'Skärhastighet definieras som periferihastigheten på arbetsstycket eller verktyget, vilket är den hastighet som skäret rör sig relativt materialet.'
            },
            {
                question: 'Vad är ett HSS-verktyg?',
                answers: [
                    { text: 'Verktyg speciellt gjort för varmhållfasta material.', incorrectReasoning: 'HSS kan användas, men är inte specifikt för dessa.' },
                    { text: 'Verktyg gjort av snabbstål.', incorrectReasoning: null },
                    { text: 'Verktyg som är belagt med HSS.', incorrectReasoning: 'Beläggningen är inte hela verktyget.' },
                    { text: 'Verktyg gjort av hårdmetall.', incorrectReasoning: 'Hårdmetall är ett annat material.' },
                ],
                correctAnswer: 1,
                shortReasoning: 'HSS står för snabbstål.',
                longReasoning: 'HSS står för High-Speed Steel, vilket på svenska är snabbstål. Snabbstål är ett verktygsmaterial som tål höga temperaturer och skärhastigheter.'
            },
            {
                question: 'Cirkulärfräsning och invändig svarvning är metoder för hålbearbetning. Vilket påstående är rätt?',
                answers: [
                    { text: 'Dessa metoder lämpar sig bäst för grovbearbetning.', incorrectReasoning: 'De är bättre för finbearbetning.' },
                    { text: 'Dessa metoder används främst för att öka avverkningshastigheten.', incorrectReasoning: 'De är inte primärt för avverkning.' },
                    { text: 'Dessa metoder lämpar sig bäst för hårda material.', incorrectReasoning: 'Materialhårdhet är inte den primära faktorn.' },
                    { text: 'Hålets läge blir mer exakt med dessa metoder än vid borrning.', incorrectReasoning: null },
                ],
                correctAnswer: 3,
                shortReasoning: 'Ger mer exakt hål.',
                longReasoning: 'Cirkulärfräsning och invändig svarvning ger generellt ett mer exakt hål än borrning, eftersom man kan justera verktygets position mer noggrant.'
            },
            {
                question: 'Vad är den vanligaste orsaken till skärbrott direkt vid ansättning?',
                answers: [
                    { text: 'För hög skärhastighet', incorrectReasoning: 'Detta kan orsaka brott, men är inte vanligast vid ansättning.' },
                    { text: 'För hög matning', incorrectReasoning: 'Detta kan orsaka brott, men är inte vanligast vid ansättning.' },
                    { text: 'För långt överhäng på verktyget', incorrectReasoning: 'Detta kan orsaka brott, men är inte vanligast vid ansättning.' },
                    { text: 'Trasig underläggsplatta', incorrectReasoning: null },
                ],
                correctAnswer: 3,
                shortReasoning: 'Trasig platta ger skärbrott.',
                longReasoning: 'En trasig underläggsplatta ger dåligt stöd för skäret, vilket leder till vibrationer och skärbrott direkt vid ansättning.'
            },
            {
                question: 'Vad är viktigt att göra när man byter vändskär?',
                answers: [
                    { text: 'Torka rent verktyget på samtliga sidor', incorrectReasoning: 'Detta är bra, men inte det viktigaste.' },
                    { text: 'Hålla verktyget horisontellt vid montering av skäret', incorrectReasoning: 'Detta är inte relevant.' },
                    { text: 'Lossa verktyget och noga göra rent inspänningsytorna.', incorrectReasoning: 'Detta är bra, men inte det viktigaste.' },
                    { text: 'Kontrollera att plattläget är helt och rent', incorrectReasoning: null },
                ],
                correctAnswer: 3,
                shortReasoning: 'Rent plattläge är viktigt.',
                longReasoning: 'Det är viktigt att kontrollera att plattläget är helt och rent för att säkerställa korrekt inspänning och undvika vibrationer eller skärbrott.'
            },
            {
                question: 'Vid en planfräsoperation uppstår våldsamma vibrationer. Vilket av nedanstående alternativ ger generellt en bra effekt om man vill minska eller helt eliminera de störande vibrationerna?',
                answers: [
                    { text: 'Minska matningen', incorrectReasoning: 'Detta kan hjälpa, men är inte mest effektivt.' },
                    { text: 'Öka varvtalet', incorrectReasoning: 'Detta kan öka vibrationerna.' },
                    { text: 'Använda en mer glestandad fräs', incorrectReasoning: null },
                    { text: 'Använda en mer tättandad fräs', incorrectReasoning: 'Detta ökar vibrationerna.' },
                    { text: 'Höja skärhastigheten', incorrectReasoning: 'Detta kan öka vibrationerna.' },
                ],
                correctAnswer: 2,
                shortReasoning: 'Gles fräs minskar vibrationer.',
                longReasoning: 'En mer glestandad fräs minskar antalet skäreggar i ingrepp samtidigt, vilket minskar vibrationerna. En tättandad fräs kan öka vibrationerna.'
            },
            {
                question: 'Vilken ställvinkel på fräsen skall man ha vid en hörnfräsoperation?',
                answers: [
                    { text: '75 grader', incorrectReasoning: 'Ger inte en bra hörnprofil.' },
                    { text: '100 grader', incorrectReasoning: 'Ger inte en bra hörnprofil.' },
                    { text: '93 grader', incorrectReasoning: 'Ger inte en bra hörnprofil.' },
                    { text: '45 grader', incorrectReasoning: 'Ger inte en bra hörnprofil.' },
                    { text: '90 grader', incorrectReasoning: null },
                ],
                correctAnswer: 4,
                shortReasoning: '90 grader ger bäst hörn.',
                longReasoning: 'Vid en hörnfräsoperation är en ställvinkel på 90 grader optimalt för att skapa en skarp och exakt hörnprofil.'
            },
            {
                question: 'Du har valt ett skärdjup på 0,5 mm med ett verktyg med nosradie 0,8 mm. Spånan bryts inte optimalt. Välj bästa åtgärd.',
                answers: [
                    { text: 'Välj ett större skärdjup', incorrectReasoning: null },
                    { text: 'Minska matningen', incorrectReasoning: 'Detta påverkar inte spånbrytningen direkt.' },
                    { text: 'Öka skärhastigheten', incorrectReasoning: 'Detta påverkar inte spånbrytningen direkt.' },
                    { text: 'Öka trycket på skärvätskan', incorrectReasoning: 'Detta påverkar inte spånbrytningen direkt.' },
                ],
                correctAnswer: 0,
                shortReasoning: 'Större skärdjup ger spånbrytning.',
                longReasoning: 'Ett större skärdjup, närmare nosradien, ger bättre spånbrytning. Om skärdjupet är för litet i förhållande till nosradien kan spånan bli för tunn och inte brytas ordentligt.'
            },
            {
                question: 'Du skall borra ett 40 mm djupt hål med en  korthålsborr,  Ø 30 mm.  Skärdatarekommendationen säger 300 m/min. Vilket varvtal motsvarar denna rekommendation?',
                answers: [
                    { text: '2729', incorrectReasoning: 'Fel beräkning.' },
                    { text: '3398', incorrectReasoning: 'Fel beräkning.' },
                    { text: '3185', incorrectReasoning: null },
                    { text: '2388', incorrectReasoning: 'Fel beräkning.' },
                    { text: '1495', incorrectReasoning: 'Fel beräkning.' },
                ],
                correctAnswer: 2,
                shortReasoning: '3185 varv/min är rätt.',
                longReasoning: 'Varvtalet beräknas med formeln n = (Vc * 1000) / (π * D), där Vc = 300 m/min och D = 30 mm. Detta ger n ≈ 3185 varv/min.'
            },
            {
                question: 'Hur många skäreggar är det på ett svarvskär av typ SNMG?',
                answers: [
                    { text: '12', incorrectReasoning: 'Fel antal.' },
                    { text: '6', incorrectReasoning: 'Fel antal.' },
                    { text: '8', incorrectReasoning: 'Fel antal.' },
                    { text: '4', incorrectReasoning: null },
                ],
                correctAnswer: 3,
                shortReasoning: 'SNMG har 4 skäreggar.',
                longReasoning: 'Ett svarvskär av typ SNMG har 4 skäreggar. Formen (N) indikerar antalet hörn, och varje hörn kan användas från båda sidor.'
            },
            {
                question: 'Det finns flera fördelar med s.k. wiperskär/fasettskär. Vilket alternativ kan vara en av dessa?',
                answers: [
                    { text: 'att erhålla bättre ytjämnhet.', incorrectReasoning: null },
                    { text: 'att kunna köra högre skärhastighet.', incorrectReasoning: 'Detta är inte huvudfördelen.' },
                    { text: 'att kunna tillföra kylning.', incorrectReasoning: 'Detta är inte en fördel med wiperskär.' },
                    { text: 'att få bättre spånavgång.', incorrectReasoning: 'Detta är inte en fördel med wiperskär.' },
                ],
                correctAnswer: 0,
                shortReasoning: 'Ger bättre ytjämnhet.',
                longReasoning: 'Wiperskär/fasettskär är designade för att ge bättre ytjämnhet genom att "jämna ut" ytan efter bearbetning.'
            },
            {
                question: 'Vid fräsning uppstår kraftiga vibrationer. Vilket av nedanstående alternativ har bäst effekt för att reducera dessa?',
                answers: [
                    { text: 'Använda en mer tättandad fräs', incorrectReasoning: 'Detta ökar vibrationerna.' },
                    { text: 'Minska matningen', incorrectReasoning: 'Detta kan hjälpa, men är inte mest effektivt.' },
                    { text: 'Korta ned överhänget på verktyget', incorrectReasoning: null },
                    { text: 'Öka skärhastigheten', incorrectReasoning: 'Detta kan öka vibrationerna.' },
                    { text: 'Öka koncentrationen av oljan i skärlvätskan', incorrectReasoning: 'Detta påverkar inte vibrationerna direkt.' },
                ],
                correctAnswer: 2,
                shortReasoning: 'Kort överhäng minskar vibrationer.',
                longReasoning: 'Att korta ned överhänget på verktyget minskar vibrationerna eftersom det ökar verktygets styvhet och minskar risken för böjning.'
            },
            {
                question: 'Vid borrning av djupa hål med utvändig kylning fås problem med spånorna. Vilket alternativ är bäst för att eliminera detta problem?',
                answers: [
                    { text: 'Höja skärhastigheten', incorrectReasoning: 'Detta kan förvärra problemet.' },
                    { text: 'Höja matningen', incorrectReasoning: 'Detta kan förvärra problemet.' },
                    { text: 'Spåna ur flera gånger', incorrectReasoning: null },
                    { text: 'Stänga av den utvändiga kylningen', incorrectReasoning: 'Detta är kontraproduktivt.' },
                ],
                correctAnswer: 2,
                shortReasoning: 'Spåna ur för att få bort spånor.',
                longReasoning: 'Att spåna ur flera gånger under borrningen hjälper till att avlägsna spånorna från hålet, vilket minskar risken för spånstockning och verktygsbrott.'
            },
            {
                question: 'Vid bearbetning med skärkvalitet P25 i material SS-EN 10 025-S355 JR ( SS 2172 ) önskas en längre livslängd för skäret. Vilket av nedanstående alternativ är då lämpligt att välja?',
                answers: [
                    { text: 'P15', incorrectReasoning: null },
                    { text: 'P45', incorrectReasoning: 'P45 är för mjukt.' },
                    { text: 'K35', incorrectReasoning: 'K35 är för gjutjärn.' },
                    { text: 'M45', incorrectReasoning: 'M45 är för rostfritt.' },
                    { text: 'M25', incorrectReasoning: 'M25 är för rostfritt.' },
                ],
                correctAnswer: 0,
                shortReasoning: 'P15 ger längre livslängd.',
                longReasoning: 'P15 är en hårdare skärkvalitet än P25 och ger därför längre livslängd vid bearbetning av stål, även om den kan vara sprödare.'
            },
            {
                question: 'Vilket material ger lättare upphov till vibrationer vid bearbetning?',
                answers: [
                    { text: 'Gjutjärns material', incorrectReasoning: 'Gjutjärn dämpar vibrationer.' },
                    { text: 'Stål med höga hållfasthetsvärden', incorrectReasoning: null },
                    { text: 'Stål med låga hållfasthetsvärden', incorrectReasoning: 'Mjukare stål dämpar vibrationer.' },
                    { text: 'Kopparmaterial', incorrectReasoning: 'Koppar dämpar vibrationer.' },
                ],
                correctAnswer: 1,
                shortReasoning: 'Höghållfast stål vibrerar mer.',
                longReasoning: 'Stål med höga hållfasthetsvärden är mer benägna att ge upphov till vibrationer vid bearbetning jämfört med mjukare material som koppar eller gjutjärn.'
            },
            {
                question: 'Vi vill kontrollera varvtalet. Förutsättning: Skärhastigheten skall vara 150 m/min och diametern på verktyget är 100 mm. Vilken av nedanstående formler ger korrekt varvtal?',
                answers: [
                    { text: 'n= v x 1000/( 3.14 x v)= 150 x 1000/(3.14 x 150) = 318 varv/min', incorrectReasoning: 'Fel formel.' },
                    { text: 'n= d x 1000/(3.14 x v) = 100 x 1000/(3.14 x 150) = 212 varv/min', incorrectReasoning: 'Fel formel.' },
                    { text: 'n= 314 x 1000 / (d x v) = 314 x 1000 (100 x 150) = 21 varv/min', incorrectReasoning: 'Fel formel.' },
                    { text: 'n= v x 1000 /( 3.14 x d)= 150 x 1000/(3.14 x 100) = 478 varv/min', incorrectReasoning: null },
                ],
                correctAnswer: 3,
                shortReasoning: 'n= v x 1000 /( 3.14 x d) är rätt formel.',
                longReasoning: 'Korrekt formel för varvtal är n = (Vc * 1000) / (π * D), där Vc är skärhastigheten i m/min och D är diametern i mm. Med Vc = 150 och D = 100 blir n ≈ 478 varv/min.'
            }
        ]
    },
    {
        name: 'Materiallära',
        questions: [
            {
                question: 'Om ett stål eller ett mässingsmaterial ska ha högre skärbarhet, vilket legeringsämne kan i små mängder förbättra skärbarheten?',
                answers: [
                    { text: 'Nickel', incorrectReasoning: 'Nickel påverkar inte skärbarheten direkt.' },
                    { text: 'Molybden', incorrectReasoning: 'Molybden påverkar inte skärbarheten direkt.' },
                    { text: 'Kol', incorrectReasoning: 'Kol påverkar inte skärbarheten direkt.' },
                    { text: 'Mangan', incorrectReasoning: 'Mangan påverkar inte skärbarheten direkt.' },
                    { text: 'Svavel', incorrectReasoning: null }
                ],
                correctAnswer: 4,
                shortReasoning: 'Svavel ökar skärbarheten.',
                longReasoning: 'Svavel kan i små mängder förbättra skärbarheten i både stål och mässing genom att bilda sulfider som fungerar som smörjmedel och underlättar spånbrytning.'
            },
            {
                question: 'Korrosion kan definieras som?',
                answers: [
                    { text: 'Oxidation på metaller', incorrectReasoning: null },
                    { text: 'Termiskt angrepp mellan två metaller', incorrectReasoning: 'Detta är inte korrosion.' },
                    { text: 'Fysiskt angrepp mellan vatten och stål', incorrectReasoning: 'Detta är en form av erosion, inte korrosion.' },
                    { text: 'Kemiskt angrepp mellan två metaller', incorrectReasoning: 'Detta är inte korrosion.' }
                ],
                correctAnswer: 0,
                shortReasoning: 'Korrosion är oxidation.',
                longReasoning: 'Korrosion definieras ofta som oxidation på metaller, vilket innebär att metallen reagerar med syre och bildar oxider på ytan.'
            },
            {
                question: 'Vilken inverkan har bly som legeringsämne?',
                answers: [
                    { text: 'Bly förbättrar härdbarheten i stål', incorrectReasoning: 'Bly påverkar inte härdbarheten.' },
                    { text: 'Bly förbättrar spånbrytningen', incorrectReasoning: null },
                    { text: 'Bly förbättrar materialets korrosionsbeständighet', incorrectReasoning: 'Bly påverkar inte korrosionsbeständigheten.' },
                    { text: 'Bly löser sig i stålet och gör det starkare', incorrectReasoning: 'Bly löser sig inte i stål.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Bly ger bättre spånbrytning.',
                longReasoning: 'Bly förbättrar spånbrytningen i material genom att fungera som ett smörjmedel och minska friktionen mellan verktyget och materialet.'
            },
            {
                question: 'Vilka legeringsämnen finns i rostfria stål?',
                answers: [
                    { text: 'Svavel och bly', incorrectReasoning: 'Dessa finns inte i rostfritt.' },
                    { text: 'Koppar och zink', incorrectReasoning: 'Dessa finns inte i rostfritt.' },
                    { text: 'Krom och nickel', incorrectReasoning: null },
                    { text: 'Titan och kol', incorrectReasoning: 'Dessa är inte huvudbeståndsdelarna.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'Krom och nickel i rostfritt.',
                longReasoning: 'Rostfria stål innehåller främst krom och nickel som legeringsämnen. Krom ger stålet dess korrosionsbeständighet, och nickel förbättrar dess mekaniska egenskaper och korrosionsbeständighet ytterligare.'
            },
            {
                question: 'Vilken bokstavskombination (förstavelse) har ett stål enligt Europastandard?',
                answers: [
                    { text: 'SE (SS-SE)', incorrectReasoning: 'Detta är en svensk standard.' },
                    { text: 'EN (SS-EN)', incorrectReasoning: null },
                    { text: 'CE (SS-CE)', incorrectReasoning: 'Detta är inte en stålbeteckning.' },
                    { text: 'SS (SS-SS)', incorrectReasoning: 'Detta är en svensk standard.' },
                    { text: 'SN (SS-SN)', incorrectReasoning: 'Detta är inte en stålbeteckning.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'EN är Europastandard.',
                longReasoning: 'EN (SS-EN) är förstavelsen för stål enligt Europastandard. SS-EN indikerar att standarden är både svensk och europeisk.'
            },
            {
                question: 'Om ett material enligt svensk standard betecknas SS 14 2333, vad är det för typ av material?',
                answers: [
                    { text: 'Rostfritt stål', incorrectReasoning: 'Detta är inte rostfritt stål.' },
                    { text: 'Gjutjärn', incorrectReasoning: 'Detta är inte gjutjärn.' },
                    { text: 'Mässing', incorrectReasoning: 'Detta är inte mässing.' },
                    { text: 'Automatstål', incorrectReasoning: null },
                    { text: 'Aluminium', incorrectReasoning: 'Detta är inte aluminium.' }
                ],
                correctAnswer: 3,
                shortReasoning: 'SS 14 2333 är automatstål.',
                longReasoning: 'SS 14 2333 är en beteckning för automatstål enligt svensk standard. Automatstål är speciellt legerade för att ha god skärbarhet.'
            },
            {
                question: 'Vilken materialbeteckning, enligt SS-EN, har mässing som passar för spånskärande bearbetning i CNC-maskiner?',
                answers: [
                    { text: 'GJL-300', incorrectReasoning: 'Detta är gjutjärn.' },
                    { text: 'Cu Zn 39 Pb', incorrectReasoning: null },
                    { text: 'MCMgAl6Mn', incorrectReasoning: 'Detta är aluminium.' },
                    { text: '11 S Mn Pb 30', incorrectReasoning: 'Detta är automatstål.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Cu Zn 39 Pb är mässing.',
                longReasoning: 'Cu Zn 39 Pb är en materialbeteckning enligt SS-EN för mässing som innehåller bly (Pb), vilket förbättrar dess skärbarhet och gör det lämpligt för spånskärande bearbetning i CNC-maskiner.'
            },
            {
                question: 'Om ett material kallas SS 14 0125 vad är det för typ av material?',
                answers: [
                    { text: 'Rostfritt stål', incorrectReasoning: 'Detta är inte rostfritt stål.' },
                    { text: 'Aluminium', incorrectReasoning: 'Detta är inte aluminium.' },
                    { text: 'Mässing', incorrectReasoning: 'Detta är inte mässing.' },
                    { text: 'Koppar', incorrectReasoning: 'Detta är inte koppar.' },
                    { text: 'Gjutjärn', incorrectReasoning: null }
                ],
                correctAnswer: 4,
                shortReasoning: 'SS 14 0125 är gjutjärn.',
                longReasoning: 'SS 14 0125 är en beteckning för gjutjärn enligt svensk standard. Gjutjärn har goda gjutegenskaper och används ofta i maskinkomponenter.'
            },
            {
                question: 'Om man anlöper en helhärdad ståldetalj, vad händer?',
                answers: [
                    { text: 'Hårdheten ökar', incorrectReasoning: 'Hårdheten minskar vid anlöpning.' },
                    { text: 'Endast hårdheten på ytan minskas', incorrectReasoning: 'Hårdheten minskar i hela detaljen.' },
                    { text: 'Endast hårdheten i bitens kärna minskar', incorrectReasoning: 'Hårdheten minskar i hela detaljen.' },
                    { text: 'Ytojämnheten försvinner', incorrectReasoning: 'Anlöpning påverkar inte ytojämnheten.' },
                    { text: 'Hårdheten minskar', incorrectReasoning: null }
                ],
                correctAnswer: 4,
                shortReasoning: 'Anlöpning minskar hårdheten.',
                longReasoning: 'Anlöpning är en värmebehandlingsprocess som minskar hårdheten i en helhärdad ståldetalj. Det ökar också segheten och minskar sprödheten.'
            },
            {
                question: 'Vilket av följande material är grått gjutjärn?',
                answers: [
                    { text: 'S 235 JRG 2', incorrectReasoning: 'Detta är konstruktionsstål.' },
                    { text: 'X3CrNiMo17-13-3', incorrectReasoning: 'Detta är rostfritt stål.' },
                    { text: '11 S Mn Pb 30', incorrectReasoning: 'Detta är automatstål.' },
                    { text: 'GJL-250', incorrectReasoning: null }
                ],
                correctAnswer: 3,
                shortReasoning: 'GJL-250 är grått gjutjärn.',
                longReasoning: 'GJL-250 är en beteckning för grått gjutjärn. Grått gjutjärn kännetecknas av sin grafitstruktur, vilket ger goda vibrationsdämpande egenskaper.'
            },
            {
                question: 'Ett automatstål är ett mycket bra material för skärande bearbetning. Vilka legeringsämnen utgör huvudbeståndsdelen?',
                answers: [
                    { text: 'Mangan, wolfram och krom', incorrectReasoning: 'Dessa är inte huvudbeståndsdelarna.' },
                    { text: 'Wolfram, nickel och kol', incorrectReasoning: 'Dessa är inte huvudbeståndsdelarna.' },
                    { text: 'Molybden, svavel och krom', incorrectReasoning: 'Dessa är inte huvudbeståndsdelarna.' },
                    { text: 'Koppar, zink och bly', incorrectReasoning: 'Dessa är inte huvudbeståndsdelarna.' },
                    { text: 'Svavel, mangan och bly', incorrectReasoning: null }
                ],
                correctAnswer: 4,
                shortReasoning: 'Svavel, mangan och bly.',
                longReasoning: 'Huvudbeståndsdelarna i automatstål är svavel, mangan och bly. Dessa legeringsämnen förbättrar skärbarheten genom att underlätta spånbrytning och minska friktionen.'
            },
            {
                question: 'Vilket av nedanstående material kan ha hårdheten 380HB?',
                answers: [
                    { text: 'Mässing', incorrectReasoning: 'Mässing har lägre hårdhet.' },
                    { text: 'SS 14 1312', incorrectReasoning: 'Detta stål har lägre hårdhet.' },
                    { text: 'Ren aluminium', incorrectReasoning: 'Aluminium har lägre hårdhet.' },
                    { text: 'Seghärdat stål', incorrectReasoning: null },
                    { text: 'Koppar', incorrectReasoning: 'Koppar har lägre hårdhet.' }
                ],
                correctAnswer: 3,
                shortReasoning: 'Seghärdat stål.',
                longReasoning: 'Seghärdat stål kan ha en hårdhet på 380HB. Mässing, aluminium och koppar har generellt lägre hårdhetsvärden.'
            },
            {
                question: 'Ett metalliskt material har beteckningen SS-EN 10 084 16NiCrS4 enligt Europastandard. Vad anger talet "16" i materialbeteckningen?',
                answers: [
                    { text: 'Nickelhalten', incorrectReasoning: 'Detta är inte nickelhalten.' },
                    { text: 'Sträckgränsen', incorrectReasoning: 'Detta är inte sträckgränsen.' },
                    { text: 'Kolhalten', incorrectReasoning: null },
                    { text: 'Hårdheten', incorrectReasoning: 'Detta är inte hårdheten.' },
                    { text: 'Brottgränsen', incorrectReasoning: 'Detta är inte brottgränsen.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'Kolhalten.',
                longReasoning: 'I materialbeteckningen SS-EN 10 084 16NiCrS4 anger talet "16" kolhalten i hundradels procent. Alltså 0,16% kol.'
            },
            {
                question: 'Vad är en komposit?',
                answers: [
                    { text: 'Ett material som har värmebehandlats och på så sätt fått helt förändrade egenskaper', incorrectReasoning: 'Detta är inte en komposit.' },
                    { text: 'Ett stål eller annan metall med en kolhalt mellan 0,16-0,20 % som har värmebehandlats vid en temperatur av 710 grader', incorrectReasoning: 'Detta är inte en komposit.' },
                    { text: 'Ett kolstål som har legerats med till exempel glasfiber', incorrectReasoning: 'Detta är en typ av komposit, men inte definitionen.' },
                    { text: 'Två eller flera material som tillsammans bildar ett nytt material med helt andra fysikaliska egenskaper', incorrectReasoning: null }
                ],
                correctAnswer: 3,
                shortReasoning: 'Flera material ger nya egenskaper.',
                longReasoning: 'En komposit är en kombination av två eller flera material som tillsammans bildar ett nytt material med helt andra fysikaliska egenskaper än de ursprungliga materialen.'
            },
            {
                question: 'Hur stor procentandel kol har materialet SS-EN 10083-1-34 CrNiMo6 (SS 2541)?',
                answers: [
                    { text: '0,25 - 0,30', incorrectReasoning: 'Fel kolhalt.' },
                    { text: '0,30 - 0,38', incorrectReasoning: null },
                    { text: '0,50 - 0,62', incorrectReasoning: 'Fel kolhalt.' },
                    { text: '0,40 - 0,52', incorrectReasoning: 'Fel kolhalt.' },
                    { text: '0,15 - 0,25', incorrectReasoning: 'Fel kolhalt.' }
                ],
                correctAnswer: 1,
                shortReasoning: '0,30 - 0,38% kol.',
                longReasoning: 'Materialet SS-EN 10083-1-34 CrNiMo6 (SS 2541) har en kolhalt på 0,30 - 0,38%, vilket ger det dess specifika egenskaper.'
            },
            {
                question: 'Vilket stål är ett så kallat automatstål? Beteckningar enligt svensk standard.',
                answers: [
                    { text: 'SS 14 4212', incorrectReasoning: 'Fel stål.' },
                    { text: 'SS 14 1312', incorrectReasoning: 'Fel stål.' },
                    { text: 'SS 14 2541', incorrectReasoning: 'Fel stål.' },
                    { text: 'SS 14 2333', incorrectReasoning: null },
                    { text: 'SS 14 1914', incorrectReasoning: 'Fel stål.' }
                ],
                correctAnswer: 3,
                shortReasoning: 'SS 14 2333 är automatstål.',
                longReasoning: 'SS 14 2333 är ett automatstål enligt svensk standard. Automatstål är legerade för att ha god skärbarhet och används ofta i automatiserade bearbetningsprocesser.'
            },
            {
                question: 'Då ett material bryts ner t.ex. då ett stål rostar eller koppar som ärgar sker en process. Vad kallas denna nedbrytningsprocess?',
                answers: [
                    { text: 'Anlöpning', incorrectReasoning: 'Fel process.' },
                    { text: 'Degradation', incorrectReasoning: 'Fel process.' },
                    { text: 'Erosion', incorrectReasoning: 'Fel process.' },
                    { text: 'Galvanism', incorrectReasoning: 'Fel process.' },
                    { text: 'Korrosion', incorrectReasoning: null }
                ],
                correctAnswer: 4,
                shortReasoning: 'Korrosion.',
                longReasoning: 'Nedbrytningsprocessen där ett material som stål rostar eller koppar ärgar kallas korrosion. Det är en kemisk reaktion mellan materialet och dess omgivning.'
            },
            {
                question: 'Vilket förstavelse har en stålbeteckning enligt svensk standard?',
                answers: [
                    { text: 'CE', incorrectReasoning: 'Fel förstavelse.' },
                    { text: 'SN', incorrectReasoning: 'Fel förstavelse.' },
                    { text: 'EN', incorrectReasoning: 'Fel förstavelse.' },
                    { text: 'SE', incorrectReasoning: 'Fel förstavelse.' },
                    { text: 'SS', incorrectReasoning: null }
                ],
                correctAnswer: 4,
                shortReasoning: 'SS är svensk standard.',
                longReasoning: 'En stålbeteckning enligt svensk standard börjar med förstavelsen SS, vilket står för Svensk Standard.'
            },
            {
                question: 'Med vilket annat namn kan man benämna ett olegerat stål?',
                answers: [
                    { text: 'Rostfritt stål', incorrectReasoning: 'Fel namn.' },
                    { text: 'Fjäderstål', incorrectReasoning: 'Fel namn.' },
                    { text: 'Verktygsstål', incorrectReasoning: 'Fel namn.' },
                    { text: 'Sätthärdat stål', incorrectReasoning: 'Fel namn.' },
                    { text: 'Kolstål', incorrectReasoning: null }
                ],
                correctAnswer: 4,
                shortReasoning: 'Kolstål.',
                longReasoning: 'Ett olegerat stål kan också benämnas som kolstål, eftersom dess huvudsakliga legeringsämne är kol.'
            }
        ]
    },
    {
        name: 'Automation & Produktionsövervakning',
        questions: [
            {
                question: 'Vid vilken typ av tillverkning kan en produktionscell vara ett bra alternativ?',
                answers: [
                    { text: 'I samband med serieproduktion.', incorrectReasoning: null },
                    { text: 'I samband med enstycksproduktion.', incorrectReasoning: 'Inte optimalt för enstycksproduktion.' },
                    { text: 'Vid tillverkning av större produkter.', incorrectReasoning: 'Storleken är inte avgörande.' },
                    { text: 'Då kunden övervakar tillverkningen.', incorrectReasoning: 'Kundens övervakning är inte relevant.' }
                ],
                correctAnswer: 0,
                shortReasoning: 'Produktionsceller passar bra för serieproduktion.',
                longReasoning: 'Produktionsceller är effektiva i serieproduktion eftersom de är utformade för att utföra specifika uppgifter i en repetitiv process.'
            },
            {
                question: 'Vad av följande är så kallad mjukvara?',
                answers: [
                    { text: 'RAM-minne', incorrectReasoning: 'Detta är hårdvara.' },
                    { text: 'CD-läsare', incorrectReasoning: 'Detta är hårdvara.' },
                    { text: 'CAM-program', incorrectReasoning: null },
                    { text: 'Hårddisk', incorrectReasoning: 'Detta är hårdvara.' },
                    { text: 'Processor', incorrectReasoning: 'Detta är hårdvara.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'CAM-program är mjukvara.',
                longReasoning: 'Mjukvara är program och data som används för att styra en dator. Ett CAM-program är ett exempel på mjukvara.'
            },
            {
                question: 'Vad står förkortningen CAD för?',
                answers: [
                    { text: 'Datorstödd tillverkning', incorrectReasoning: 'Detta är CAM.' },
                    { text: 'Datorstödd administration i ett företag', incorrectReasoning: 'Fel område.' },
                    { text: 'Datorstödd inlärning via webben', incorrectReasoning: 'Fel område.' },
                    { text: 'Datorstödd konstruktion', incorrectReasoning: null }
                ],
                correctAnswer: 3,
                shortReasoning: 'CAD står för Datorstödd konstruktion.',
                longReasoning: 'CAD står för Computer-Aided Design, vilket på svenska är datorstödd konstruktion. Det används för att skapa och modifiera design.'
            },
            {
                question: 'Hur ska du agera om du fått in ett virus i din dator?',
                answers: [
                    { text: 'Defragmentera hårddisken', incorrectReasoning: 'Detta hjälper inte mot virus.' },
                    { text: 'Formatera hårddisken', incorrectReasoning: 'Detta är en sista utväg.' },
                    { text: 'Avbryta allt arbete och kontakta datoransvarig', incorrectReasoning: null },
                    { text: 'Starta om datorn', incorrectReasoning: 'Detta kan förvärra problemet.' },
                    { text: 'Radera alla filer som verkar misstänkta', incorrectReasoning: 'Detta kan vara riskabelt.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'Kontakta datoransvarig vid virus.',
                longReasoning: 'Vid virusangrepp är det bäst att avbryta arbetet och kontakta datoransvarig för att minimera skadan och få professionell hjälp.'
            },
            {
                question: 'Du har en sparad programfil som du vill öppna på en annan dator. Hur gör du detta enklast?',
                answers: [
                    { text: 'Kopierar programfilen till ett USB-minne', incorrectReasoning: null },
                    { text: 'Gör en utskrift av programfilen och skriver den på nytt i den nya datorn', incorrectReasoning: 'Detta är ineffektivt.' },
                    { text: 'Använder en speciell kabel avsedd för kopiering', incorrectReasoning: 'USB är enklare.' },
                    { text: 'Det går inte att öppna samma programfil på en annan dator', incorrectReasoning: 'Detta är felaktigt.' },
                    { text: 'Kopierar programfilen till ett RAM-minne', incorrectReasoning: 'RAM är inte lämpligt för detta.' }
                ],
                correctAnswer: 0,
                shortReasoning: 'USB-minne är enklast för filöverföring.',
                longReasoning: 'Att kopiera programfilen till ett USB-minne är det enklaste sättet att överföra den till en annan dator.'
            },
            {
                question: 'Varför används ett felrapporteringssystem?',
                answers: [
                    { text: 'För att få reda på vem som kör cellen bäst.', incorrectReasoning: 'Detta är inte syftet.' },
                    { text: 'För att kunna jämföra de olika skiften inbördes.', incorrectReasoning: 'Detta är inte huvudsyftet.' },
                    { text: 'För att enklare kunna jobba med förebyggande åtgärder', incorrectReasoning: null },
                    { text: 'För att öka ordning och reda på arbetsplatsen', incorrectReasoning: 'Detta är en indirekt effekt.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'Förebyggande åtgärder är syftet.',
                longReasoning: 'Felrapporteringssystem används främst för att identifiera och åtgärda problem, vilket underlättar förebyggande åtgärder och minskar framtida fel.'
            },
            {
                question: 'Vad innebär det att en anläggning är övervakad av ett visionsystem?',
                answers: [
                    { text: 'Att anläggningen styrs av medarbetarnas visioner.', incorrectReasoning: 'Detta är inte relevant.' },
                    { text: 'Att anläggningen är kameraövervakad.', incorrectReasoning: null },
                    { text: 'Att anläggningen är byggd för flera olika produkter.', incorrectReasoning: 'Detta är inte relaterat till visionsystem.' },
                    { text: 'Att flödet kontrolleras av fotoceller.', incorrectReasoning: 'Detta är en annan typ av övervakning.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Visionsystem innebär kameraövervakning.',
                longReasoning: 'Ett visionsystem innebär att anläggningen övervakas med kameror och bildanalys för att kontrollera kvalitet och processer.'
            },
            {
                question: 'Man kan programmera en robot med ett så kallat Teach-In-system. Vad innebär detta?',
                answers: [
                    { text: 'Man lär roboten hur den ska gå till rätt läge via ett programmeringssystem.', incorrectReasoning: 'Detta är en generell beskrivning.' },
                    { text: 'Man programmerar roboten Off-line.', incorrectReasoning: 'Detta är en annan metod.' },
                    { text: 'Roboten lär sig själv via rörelsemönstret i ett CNC-program.', incorrectReasoning: 'Detta är inte Teach-In.' },
                    { text: 'Man lär roboten ett rörelsemönster genom att manuellt manövrera den till önskade lägen.', incorrectReasoning: null }
                ],
                correctAnswer: 3,
                shortReasoning: 'Manuell manövrering till önskade lägen.',
                longReasoning: 'Teach-In innebär att man manuellt manövrerar roboten till önskade lägen och registrerar dessa, vilket skapar ett rörelsemönster.'
            },
            {
                question: 'PLC (av engelska Programmable Logic Controller) är en slags dator som främst används inom automation. Vilken svensk översättning stämmer in?',
                answers: [
                    { text: 'Systemlogik för programval', incorrectReasoning: 'Inte korrekt.' },
                    { text: 'Programmerbart styrsystem', incorrectReasoning: null },
                    { text: 'Datorprogrammets kontroll', incorrectReasoning: 'Inte korrekt.' },
                    { text: 'Systemkontroll för automationsprogram', incorrectReasoning: 'Inte korrekt.' },
                    { text: 'Logisk planeringskontroll för styrsystem', incorrectReasoning: 'Inte korrekt.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Programmerbart styrsystem är rätt översättning.',
                longReasoning: 'PLC står för Programmable Logic Controller, vilket översätts till programmerbart styrsystem på svenska.'
            },
            {
                question: 'Vad kallas den programvara som används för att skapa en programfil till CNC-maskinen?',
                answers: [
                    { text: 'Alternativ PLC-program', incorrectReasoning: 'Fel program.' },
                    { text: 'MPS-program', incorrectReasoning: 'Fel program.' },
                    { text: 'CNC-program', incorrectReasoning: 'Fel program.' },
                    { text: 'CAD-program', incorrectReasoning: 'Fel program.' },
                    { text: 'CAM-program', incorrectReasoning: null }
                ],
                correctAnswer: 4,
                shortReasoning: 'CAM-program skapar programfil till CNC.',
                longReasoning: 'CAM-program (Computer-Aided Manufacturing) används för att skapa programfiler som styr CNC-maskiner.'
            },
            {
                question: 'Vad kan man göra för att minska tiden för omställning i samband med byte av jobb?',
                answers: [
                    { text: 'Förbereda omställningen så mycket som möjligt i förväg', incorrectReasoning: null },
                    { text: 'Lägg alltid omställning i samband med skiftbyte', incorrectReasoning: 'Detta är inte alltid optimalt.' },
                    { text: 'Hoppa över kontrollen av produkter i operationen innan', incorrectReasoning: 'Detta är riskabelt.' },
                    { text: 'Höj tempot före byte av jobbet', incorrectReasoning: 'Detta är inte relevant.' }
                ],
                correctAnswer: 0,
                shortReasoning: 'Förbered omställning i förväg.',
                longReasoning: 'Genom att förbereda omställningen så mycket som möjligt i förväg kan man minska tiden det tar att byta jobb.'
            },
            {
                question: 'Hur benämner man axlarna i en portalrobot?',
                answers: [
                    { text: 'A, B, C', incorrectReasoning: 'Dessa är rotationsaxlar.' },
                    { text: 'L, B, H', incorrectReasoning: 'Inte standard.' },
                    { text: 'X, Y, Z', incorrectReasoning: null },
                    { text: 'L, D, H', incorrectReasoning: 'Inte standard.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'X, Y, Z är standard för portalrobot.',
                longReasoning: 'Axlar i en portalrobot benämns oftast som X, Y och Z, vilket representerar de tre dimensionerna i rummet.'
            },
            {
                question: 'Vad kan operatören i en automationsanläggning med enkla medel göra för att maskinen ska fungera och leverera så bra som möjligt?',
                answers: [
                    { text: 'Justera ändlägen för att minska takttider', incorrectReasoning: 'Detta kräver expertis.' },
                    { text: 'Städa och hålla god ordning', incorrectReasoning: null },
                    { text: 'Genomföra planerat underhåll med tätare intervaller', incorrectReasoning: 'Detta kräver planering.' },
                    { text: 'Optimera parametrar för att minska cykeltiden', incorrectReasoning: 'Detta kräver expertis.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Städning och ordning är viktigt.',
                longReasoning: 'Att städa och hålla god ordning är en enkel åtgärd som kan förbättra maskinens funktion och leverans.'
            },
            {
                question: 'Vad kan användas för att överföra ett program till en CNC-maskin?',
                answers: [
                    { text: 'Takometer', incorrectReasoning: 'Mäter varvtal.' },
                    { text: 'DNC-kabel', incorrectReasoning: null },
                    { text: 'Optokopplare', incorrectReasoning: 'Används för isolering.' },
                    { text: 'Oscilloskop', incorrectReasoning: 'Visar signaler.' },
                    { text: 'Signalgivare', incorrectReasoning: 'Ger signaler.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'DNC-kabel används för överföring.',
                longReasoning: 'En DNC-kabel (Direct Numerical Control) används för att överföra program till en CNC-maskin.'
            },
            {
                question: 'Vad är en PLC?',
                answers: [
                    { text: 'Programmerbar lokal dator', incorrectReasoning: 'Inte helt korrekt.' },
                    { text: 'Produktionslinjekontroll', incorrectReasoning: 'Beskriver användningen.' },
                    { text: 'Industriversion av en bärbar dator anpassad för programmering', incorrectReasoning: 'Inte helt korrekt.' },
                    { text: 'Programmerbar logisk kontrollenhet', incorrectReasoning: null }
                ],
                correctAnswer: 3,
                shortReasoning: 'PLC är en programmerbar logisk kontrollenhet.',
                longReasoning: 'PLC står för Programmerbar Logisk Kontrollenhet och är en industriell dator som används för att styra och övervaka processer.'
            },
            {
                question: 'Vad innebär spårbarhet i en produktionsprocess?',
                answers: [
                    { text: 'Att man kan se var materialet i produkten har sin slutdestination', incorrectReasoning: 'Inte korrekt.' },
                    { text: 'Att man kan se produktens planerade väg i ett så kallat ganttschema', incorrectReasoning: 'Inte korrekt.' },
                    { text: 'Att man i efterhand kan följa en produkts "väg" genom produktionen', incorrectReasoning: null },
                    { text: 'Att kunden kan spåra vem som gjort produkten', incorrectReasoning: 'Inte korrekt.' },
                    { text: 'Tillverkaren kan spåra kundens ursprung', incorrectReasoning: 'Inte korrekt.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'Spårbarhet innebär att följa produktens väg.',
                longReasoning: 'Spårbarhet innebär att man i efterhand kan följa en produkts väg genom produktionen, från råmaterial till färdig produkt.'
            },
            {
                question: 'Vad kan vara en fördel med att montera en portalrobot på en maskin?',
                answers: [
                    { text: 'Färre felproducerade detaljer.', incorrectReasoning: 'Inte alltid.' },
                    { text: 'Möjlighet att köra maskinen obemannad.', incorrectReasoning: null },
                    { text: 'Ger minskad omställningstid för anläggningen.', incorrectReasoning: 'Inte alltid.' },
                    { text: 'Ökar maskinens tillgänglighet för underhåll.', incorrectReasoning: 'Inte alltid.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Obemannad drift är en fördel.',
                longReasoning: 'En portalrobot möjliggör obemannad drift av maskinen, vilket ökar produktiviteten och minskar kostnaderna.'
            },
            {
                question: 'Vad menas med I/O i PLC/maskinsammanhang?',
                answers: [
                    { text: 'Inkörning/Omkörning', incorrectReasoning: 'Inte korrekt.' },
                    { text: 'Inside/Outside', incorrectReasoning: 'Inte korrekt.' },
                    { text: 'On/Off', incorrectReasoning: 'Inte korrekt.' },
                    { text: 'Input/Output', incorrectReasoning: null }
                ],
                correctAnswer: 3,
                shortReasoning: 'I/O står för Input/Output.',
                longReasoning: 'I/O står för Input/Output och avser de signaler som skickas till och från en PLC eller maskin.'
            },
            {
                question: 'Vilken uppgift har ett operativsystem i en CNC-maskin eller dator?',
                answers: [
                    { text: 'Operativsystemet skapar arbetets ingående operationsbeskrivningar', incorrectReasoning: 'Inte korrekt.' },
                    { text: 'Operativsystemet beskriver de grundläggande funktionerna för kommunikation', incorrectReasoning: 'Inte korrekt.' },
                    { text: 'Operativsystemet styr CNC-maskinens eller datorns grundläggande funktioner', incorrectReasoning: null },
                    { text: 'Operativsystemet håller ordning i operationslistan för skärverktyg', incorrectReasoning: 'Inte korrekt.' },
                    { text: 'Operativsystem finns inte i CNC-maskiner och datorer', incorrectReasoning: 'Inte korrekt.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'Operativsystemet styr grundläggande funktioner.',
                longReasoning: 'Operativsystemet styr de grundläggande funktionerna i en CNC-maskin eller dator, inklusive kommunikation, filhantering och programkörning.'
            }
        ]
    },
    {
        name: "Matrialkunskap",
        source: "./pdf/Materialkunskap Kc(Faktahäfte).pdf",
        questions: [
            {
                question: 'Vad menas med konstruktionsmaterial?',
                answers: [
                    { text: 'Material som används för dekoration.', incorrectReasoning: 'Konstruktionsmaterial har en funktionell, inte dekorativ roll.' },
                    { text: 'Material som är billiga att tillverka.', incorrectReasoning: 'Ekonomi är en faktor, men inte den definierande egenskapen.' },
                    { text: 'Material som är valda för att en produkt ska fungera bra.', incorrectReasoning: null },
                    { text: 'Material som är enkla att återvinna.', incorrectReasoning: 'Återvinningsbarhet är önskvärt, men inte definitionen.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'Konstruktionsmaterial väljs för funktion och ekonomi.',
                longReasoning: 'Konstruktionsmaterial är material som väljs utifrån produktens funktion (vad den ska användas till) och ekonomi (kostnad för tillverkning, etc.).'
            },
            {
                question: 'Vilka egenskaper är viktiga att känna till när man väljer material?',
                answers: [
                    { text: 'Endast priset.', incorrectReasoning: 'Priset är viktigt, men inte den enda faktorn.' },
                    { text: 'Endast färgen.', incorrectReasoning: 'Färgen är irrelevant för de flesta tekniska applikationer.' },
                    { text: 'Materialens olika egenskaper som hårdhet och sprödhet.', incorrectReasoning: null },
                    { text: 'Endast om materialet är lätt.', incorrectReasoning: 'Vikten är en faktor, men inte den enda.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'Egenskaper som hårdhet och sprödhet påverkar materialvalet.',
                longReasoning: 'För att välja rätt material måste man känna till egenskaper som hårdhet, sprödhet, seghet, värmetålighet och vibrationsförmåga för att undvika felaktiga materialval.'
            },
            {
                question: 'Varför är det viktigt att välja konstruktionsmaterial som uppfyller alla krav?',
                answers: [
                    { text: 'För att spara pengar på material.', incorrectReasoning: 'Ekonomi är en del, men inte huvudsyftet.' },
                    { text: 'För att produkten ska bli så bra som möjligt och inte gå sönder.', incorrectReasoning: null },
                    { text: 'För att göra produkten så lätt som möjligt.', incorrectReasoning: 'Låg vikt är önskvärt, men inte alltid det viktigaste.' },
                    { text: 'För att materialet ska vara lätt att bearbeta.', incorrectReasoning: 'Bearbetbarhet är viktigt, men inte det enda kravet.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Rätt materialval säkerställer produktens funktion och hållbarhet.',
                longReasoning: 'Det är viktigt att konstruktionsmaterial uppfyller kraven från användare, konsumenter och myndigheter för att säkerställa att produkten fungerar som avsett och inte går sönder.'
            },
            {
                question: 'Nämn tre viktiga egenskaper som material i en produkt bör ha.',
                answers: [
                    { text: 'Tunga, svårbearbetade, dyra.', incorrectReasoning: 'Dessa är oönskade egenskaper.' },
                    { text: 'Starka, lätta, lämpliga att bearbeta.', incorrectReasoning: null },
                    { text: 'Mjuka, flexibla, billiga.', incorrectReasoning: 'Mjuka och flexibla är inte alltid önskvärt.' },
                    { text: 'Hårda, spröda, svåra att sammanfoga.', incorrectReasoning: 'Spröda och svåra att sammanfoga är oönskat.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Styrka, låg vikt och bearbetbarhet är viktiga materialegenskaper.',
                longReasoning: 'Material i en produkt bör vara starka, lätta, lämpliga att bearbeta, lämpliga att sammanfoga, lämpliga att ytbehandla, billiga att använda och lätta att återanvända.'
            },
            {
                question: 'Vad innebär "kretsloppstänk" vid tillverkning av produkter?',
                answers: [
                    { text: 'Att produkterna tillverkas så snabbt som möjligt.', incorrectReasoning: 'Snabb tillverkning är inte relaterat till kretsloppstänk.' },
                    { text: 'Att produkterna tillverkas av råvaror som är naturliga och kan återvinnas.', incorrectReasoning: null },
                    { text: 'Att produkterna tillverkas i så många olika länder som möjligt.', incorrectReasoning: 'Globalisering är inte kretsloppstänk.' },
                    { text: 'Att produkterna tillverkas så billigt som möjligt.', incorrectReasoning: 'Ekonomi är en del, men inte huvudsyftet med kretsloppstänk.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Kretsloppstänk fokuserar på hållbara och återvinningsbara material.',
                longReasoning: 'Kretsloppstänk innebär att produkter tillverkas av naturliga råvaror med rika tillgångar, låg miljöpåverkan, låg energiåtgång vid framställning och möjlighet till återanvändning (återvinning).'
            },
            {
                question: 'Varför är återvinning av material viktigt?',
                answers: [
                    { text: 'För att göra produkterna billigare att köpa.', incorrectReasoning: 'Kostnadsbesparing är en sekundär fördel.' },
                    { text: 'För att minska energiförbrukningen och spara på jordens resurser.', incorrectReasoning: null },
                    { text: 'För att göra produkterna tyngre och mer robusta.', incorrectReasoning: 'Återvinning har inget med produktens vikt att göra.' },
                    { text: 'För att göra produkterna svårare att kopiera.', incorrectReasoning: 'Återvinning påverkar inte produktskydd.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Återvinning sparar energi och resurser.',
                longReasoning: 'Återvinning av material är viktigt på grund av energifrågan, för att inte förbruka jordens resurser i onödan. Återvinning minskar behovet av nyframställning och därmed energiförbrukningen.'
            },
            {
                question: 'Vad är en legering?',
                answers: [
                    { text: 'En ren metall i sin naturliga form.', incorrectReasoning: 'Legeringar är inte rena metaller.' },
                    { text: 'En blandning av en metall och ett eller flera andra grundämnen.', incorrectReasoning: null },
                    { text: 'En typ av plastmaterial.', incorrectReasoning: 'Legeringar är metalliska material.' },
                    { text: 'Ett keramiskt material.', incorrectReasoning: 'Legeringar är metalliska material.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Legeringar är blandningar av metaller och andra ämnen.',
                longReasoning: 'En legering är en blandning av en metall och ett eller flera andra grundämnen. Bruksmetaller är sällan rena metaller utan oftast legeringar.'
            },
            {
                question: 'Ge exempel på en vanlig legering.',
                answers: [
                    { text: 'Vatten.', incorrectReasoning: 'Vatten är inte en legering.' },
                    { text: 'Stål.', incorrectReasoning: null },
                    { text: 'Trä.', incorrectReasoning: 'Trä är inte en legering.' },
                    { text: 'Glas.', incorrectReasoning: 'Glas är inte en legering.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Stål är en legering av järn och kol.',
                longReasoning: 'Stål är en legering mellan metallen järn och icke-metallen kol. Mässing är en annan legering, en blandning av koppar och zink.'
            },
            {
                question: 'Varför legerar man metaller?',
                answers: [
                    { text: 'För att göra dem dyrare.', incorrectReasoning: 'Legeringar är inte alltid dyrare.' },
                    { text: 'För att ändra och förbättra deras egenskaper.', incorrectReasoning: null },
                    { text: 'För att göra dem tyngre.', incorrectReasoning: 'Legeringar ändrar inte alltid vikten.' },
                    { text: 'För att göra dem svårare att bearbeta.', incorrectReasoning: 'Legeringar kan också förbättra bearbetbarheten.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Legeringar skapas för att optimera materialegenskaper.',
                longReasoning: 'Man legerar metaller för att förändra och förbättra deras egenskaper, såsom hållfasthet, korrosionsmotstånd, hårdhet och bearbetbarhet.'
            },
            {
                question: 'Vad är densitet?',
                answers: [
                    { text: 'Ett mått på ett materials hårdhet.', incorrectReasoning: 'Densitet handlar om vikt, inte hårdhet.' },
                    { text: 'Ett mått på ett materials täthet, vikt per volymenhet.', incorrectReasoning: null },
                    { text: 'Ett mått på ett materials smältpunkt.', incorrectReasoning: 'Densitet handlar inte om smältpunkt.' },
                    { text: 'Ett mått på ett materials värmeledningsförmåga.', incorrectReasoning: 'Densitet handlar inte om värmeledningsförmåga.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Densitet är vikt dividerat med volym.',
                longReasoning: 'Densitet är ett mått på materialets täthet, definierat som vikt dividerat med volym (kg/dm³). Det beskriver hur mycket massa som finns i ett givet utrymme.'
            },
            {
                question: 'Vad är smältpunkt?',
                answers: [
                    { text: 'Den temperatur då ett material börjar koka.', incorrectReasoning: 'Smältpunkt är för fast till flytande, inte flytande till gas.' },
                    { text: 'Den temperatur då ett material smälter.', incorrectReasoning: null },
                    { text: 'Den temperatur då ett material blir som hårdast.', incorrectReasoning: 'Smältpunkt har inget med hårdhet att göra.' },
                    { text: 'Den temperatur då ett material börjar brinna.', incorrectReasoning: 'Smältpunkt är inte brandpunkt.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Smältpunkt är temperaturen för övergång från fast till flytande.',
                longReasoning: 'Smältpunkt är den temperatur då ett material övergår från fast till flytande form. Rena metaller har en specifik smältpunkt, medan legeringar ofta har ett smältintervall.'
            },
            {
                question: 'Varför är värmeutvidgning viktigt att beakta vid bearbetning av metaller?',
                answers: [
                    { text: 'För att metaller blir kallare vid bearbetning.', incorrectReasoning: 'Metaller blir varmare, inte kallare, vid bearbetning.' },
                    { text: 'För att metaller ändrar form när de värms upp.', incorrectReasoning: null },
                    { text: 'För att metaller blir tyngre vid uppvärmning.', incorrectReasoning: 'Värmeutvidgning påverkar inte vikten.' },
                    { text: 'För att metaller blir lättare att svetsa när de är kalla.', incorrectReasoning: 'Svetsning kräver vanligtvis uppvärmning.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Värmeutvidgning påverkar måttnoggrannheten.',
                longReasoning: 'Värmeutvidgning är viktigt eftersom metaller ändrar dimensioner när de värms upp vid bearbetning (svarvning, svetsning). Detta kan leda till felaktiga mått om man inte tar hänsyn till värmeutvidgningen.'
            },
            {
                question: 'Vilken metall har bäst värmeledningsförmåga?',
                answers: [
                    { text: 'Aluminium.', incorrectReasoning: 'Aluminium har god, men inte bäst värmeledningsförmåga.' },
                    { text: 'Koppar.', incorrectReasoning: null },
                    { text: 'Stål.', incorrectReasoning: 'Stål har sämre värmeledningsförmåga än koppar.' },
                    { text: 'Plast.', incorrectReasoning: 'Plast är en dålig värmeledare.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Koppar är den bästa värmeledaren bland vanliga metaller.',
                longReasoning: 'Koppar har den bästa värmeledningsförmågan bland de flesta metaller och används därför i värmeväxlare och kylare.'
            },
            {
                question: 'Vad innebär "korrosionsmotstånd"?',
                answers: [
                    { text: 'Ett materials förmåga att leda elektricitet.', incorrectReasoning: 'Korrosionsmotstånd har inget med elektrisk ledning att göra.' },
                    { text: 'Ett materials förmåga att motstå miljöpåverkan och nedbrytning.', incorrectReasoning: null },
                    { text: 'Ett materials förmåga att motstå slitage och nötning.', incorrectReasoning: 'Detta är slitstyrka, inte korrosionsmotstånd.' },
                    { text: 'Ett materials förmåga att motstå höga temperaturer.', incorrectReasoning: 'Detta är värmebeständighet, inte korrosionsmotstånd.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Korrosionsmotstånd är motståndskraft mot miljöpåverkan.',
                longReasoning: 'Korrosionsmotstånd är ett materials förmåga att motstå miljöpåverkan, såsom syror, alkalier, havsvatten och surt regn, utan att brytas ner eller rosta.'
            },
            {
                question: 'Vad är "slitstyrka"?',
                answers: [
                    { text: 'Ett materials förmåga att motstå korrosion.', incorrectReasoning: 'Detta är korrosionsmotstånd, inte slitstyrka.' },
                    { text: 'Ett materials förmåga att motstå nötning och slitage vid kontakt med andra ytor.', incorrectReasoning: null },
                    { text: 'Ett materials förmåga att leda värme.', incorrectReasoning: 'Detta är värmeledningsförmåga, inte slitstyrka.' },
                    { text: 'Ett materials förmåga att motstå brott.', incorrectReasoning: 'Detta är hållfasthet, inte slitstyrka.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Slitstyrka är motståndskraft mot nötning.',
                longReasoning: 'Slitstyrka är ett materials förmåga att motstå nötning och slitage när det kommer i kontakt med andra materialytor, till exempel vid friktion eller abrasion.'
            },
            {
                question: 'Vad är syftet med materialprovning?',
                answers: [
                    { text: 'Att göra materialet billigare.', incorrectReasoning: 'Provning påverkar inte priset direkt.' },
                    { text: 'Att bestämma ett materials hållfasthet och andra egenskaper.', incorrectReasoning: null },
                    { text: 'Att ändra materialets färg.', incorrectReasoning: 'Provning påverkar inte färgen.' },
                    { text: 'Att göra materialet lättare.', incorrectReasoning: 'Provning påverkar inte vikten.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Materialprovning undersöker materialegenskaper.',
                longReasoning: 'Materialprovning utförs för att bestämma ett materials egenskaper, främst hållfasthet, för att säkerställa att det är lämpligt för avsedd användning och för kvalitetskontroll.'
            },
            {
                question: 'Nämn en förstörande provningsmetod.',
                answers: [
                    { text: 'Ultraljudsprovning.', incorrectReasoning: 'Ultraljud är icke-förstörande.' },
                    { text: 'Magnetpulverprovning.', incorrectReasoning: 'Magnetpulver är icke-förstörande.' },
                    { text: 'Dragprovning.', incorrectReasoning: null },
                    { text: 'Radiografi.', incorrectReasoning: 'Radiografi är icke-förstörande.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'Dragprovning förstör provbiten.',
                longReasoning: 'Dragprovning är en förstörande provningsmetod där provbiten dras isär tills den går sönder för att mäta sträckgräns, brottgräns och brottförlängning.'
            },
            {
                question: 'Vad mäts vid en dragprovning?',
                answers: [
                    { text: 'Hårdhet.', incorrectReasoning: 'Hårdhet mäts med andra metoder.' },
                    { text: 'Sträckgräns, brottgräns och brottförlängning.', incorrectReasoning: null },
                    { text: 'Densitet.', incorrectReasoning: 'Densitet mäts med andra metoder.' },
                    { text: 'Korrosionsmotstånd.', incorrectReasoning: 'Korrosionsmotstånd mäts med andra metoder.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Dragprovning mäter hållfasthetsegenskaper.',
                longReasoning: 'Vid dragprovning mäts sträckgräns (gräns för permanent deformation), brottgräns (maximal belastning) och brottförlängning (deformation vid brott), vilket ger information om materialets hållfasthet.'
            },
            {
                question: 'Vad är "sträckgräns"?',
                answers: [
                    { text: 'Den belastning som materialet tål innan det går sönder.', incorrectReasoning: 'Detta är brottgräns.' },
                    { text: 'Den belastning som materialet tål utan att få permanent formförändring.', incorrectReasoning: null },
                    { text: 'Förlängningen av materialet vid brott.', incorrectReasoning: 'Detta är brottförlängning.' },
                    { text: 'Den temperatur då materialet smälter.', incorrectReasoning: 'Detta är smältpunkt.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Sträckgräns är gränsen för permanent deformation.',
                longReasoning: 'Sträckgräns är den belastning som ett material tål utan att få en kvarstående (permanent) formförändring. Efter belastning återgår materialet till sin ursprungliga form.'
            },
            {
                question: 'Vad är "brottgräns"?',
                answers: [
                    { text: 'Den belastning som materialet tål utan att få permanent formförändring.', incorrectReasoning: 'Detta är sträckgräns.' },
                    { text: 'Den högsta belastning som materialet tål innan det brister.', incorrectReasoning: null },
                    { text: 'Förlängningen av materialet vid brott.', incorrectReasoning: 'Detta är brottförlängning.' },
                    { text: 'Den temperatur då materialet börjar glöda.', incorrectReasoning: 'Detta är inte brottgräns.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Brottgräns är den maximala belastningen innan brott.',
                longReasoning: 'Brottgräns är den högsta belastning som ett material tål utan att brista eller gå sönder. Det är den maximala spänningen materialet kan hantera.'
            },
            {
                question: 'Vad är "brottförlängning"?',
                answers: [
                    { text: 'Den belastning som materialet tål innan det går sönder.', incorrectReasoning: 'Detta är brottgräns.' },
                    { text: 'Den belastning som materialet tål utan att få permanent formförändring.', incorrectReasoning: 'Detta är sträckgräns.' },
                    { text: 'Förlängningen i materialet vid brott.', incorrectReasoning: null },
                    { text: 'Den temperatur då materialet börjar smälta.', incorrectReasoning: 'Detta är smältpunkt.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'Brottförlängning är deformationen vid brott.',
                longReasoning: 'Brottförlängning är måttet på hur mycket ett material kan deformeras (förlängas) innan det går sönder vid dragprovning. Det anges ofta i procent av ursprunglig längd.'
            },
            {
                question: 'Vad mäter man med slagprovning?',
                answers: [
                    { text: 'Hårdhet.', incorrectReasoning: 'Hårdhet mäts med andra metoder.' },
                    { text: 'Slagseghet.', incorrectReasoning: null },
                    { text: 'Draghållfasthet.', incorrectReasoning: 'Draghållfasthet mäts med dragprovning.' },
                    { text: 'Korrosionsmotstånd.', incorrectReasoning: 'Korrosionsmotstånd mäts med andra metoder.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Slagprovning mäter slagseghet.',
                longReasoning: 'Slagprovning mäter ett materials slagseghet, vilket är förmågan att motstå slagbelastning utan att brista. Det mäter materialets förmåga att absorbera energi vid snabb belastning.'
            },
            {
                question: 'Vad är "slagseghet"?',
                answers: [
                    { text: 'Ett materials förmåga att motstå dragbelastning.', incorrectReasoning: 'Detta är draghållfasthet.' },
                    { text: 'Ett materials förmåga att motstå slag utan att brista.', incorrectReasoning: null },
                    { text: 'Ett materials förmåga att motstå korrosion.', incorrectReasoning: 'Detta är korrosionsmotstånd.' },
                    { text: 'Ett materials förmåga att motstå höga temperaturer.', incorrectReasoning: 'Detta är värmebeständighet.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Slagseghet är motståndskraft mot slagbelastning.',
                longReasoning: 'Slagseghet är ett materials förmåga att motstå slagbelastning utan att brista. Det indikerar materialets förmåga att absorbera energi vid snabba, dynamiska belastningar.'
            },
            {
                question: 'Nämn en icke-förstörande provningsmetod.',
                answers: [
                    { text: 'Dragprovning.', incorrectReasoning: 'Dragprovning är förstörande.' },
                    { text: 'Slagprovning.', incorrectReasoning: 'Slagprovning är förstörande.' },
                    { text: 'Ultraljudsprovning.', incorrectReasoning: null },
                    { text: 'Hårdhetsprovning (Vickers).', incorrectReasoning: 'Vissa hårdhetsprovningar gör små intryck men räknas ofta som icke-förstörande i praktiken, men ultraljud är tydligare icke-förstörande i teorin.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'Ultraljudsprovning skadar inte provbiten.',
                longReasoning: 'Ultraljudsprovning är en icke-förstörande provningsmetod som använder ljudvågor för att detektera inre defekter i materialet utan att skada det.'
            },
            {
                question: 'Vad används ultraljudsprovning till?',
                answers: [
                    { text: 'Att mäta hårdhet.', incorrectReasoning: 'Hårdhet mäts med andra metoder.' },
                    { text: 'Att detektera inre fel som sprickor och porer.', incorrectReasoning: null },
                    { text: 'Att mäta draghållfasthet.', incorrectReasoning: 'Draghållfasthet mäts med dragprovning.' },
                    { text: 'Att mäta korrosionsmotstånd.', incorrectReasoning: 'Korrosionsmotstånd mäts med andra metoder.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Ultraljud kan hitta inre defekter.',
                longReasoning: 'Ultraljudsprovning används för att hitta inre fel i materialet, som sprickor, blåsor, slagginneslutningar och porer, utan att skada materialet.'
            },
            {
                question: 'Vad är "utmattningsgräns"?',
                answers: [
                    { text: 'Den högsta spänning ett material tål vid en enda belastning.', incorrectReasoning: 'Detta är brottgräns.' },
                    { text: 'Den högsta belastning ett material tål utan att brista vid ett stort antal belastningsväxlingar.', incorrectReasoning: null },
                    { text: 'Den belastning som ger permanent deformation.', incorrectReasoning: 'Detta är sträckgräns.' },
                    { text: 'Den temperatur då materialet tappar sin hållfasthet.', incorrectReasoning: 'Detta är inte utmattningsgräns.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Utmattningsgräns är motståndskraft mot upprepad belastning.',
                longReasoning: 'Utmattningsgräns är den högsta belastning ett material tål utan att brista även efter ett mycket stort antal upprepade belastningsväxlingar. Det beskriver materialets motståndskraft mot utmattning.'
            },
            {
                question: 'Vad används mikroskopering till inom materialprovning?',
                answers: [
                    { text: 'Att mäta ytjämnhet.', incorrectReasoning: 'Ytjämnhet mäts med andra metoder.' },
                    { text: 'Att kontrollera materialets struktur och eventuella felaktigheter.', incorrectReasoning: null },
                    { text: 'Att mäta hårdhet.', incorrectReasoning: 'Hårdhet mäts med andra metoder.' },
                    { text: 'Att mäta densitet.', incorrectReasoning: 'Densitet mäts med andra metoder.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Mikroskopering undersöker materialstrukturen.',
                longReasoning: 'Mikroskopering används för att kontrollera materialets mikrostruktur, kornstorlek, utskiljningar och eventuella mikrosprickor. Det hjälper till att bedöma om materialet är normalt eller felaktigt framställt eller behandlat.'
            },
            {
                question: 'Vad är "hårdhetsprovning"?',
                answers: [
                    { text: 'Att mäta ett materials förmåga att motstå dragbelastning.', incorrectReasoning: 'Detta är dragprovning.' },
                    { text: 'Att mäta ett materials förmåga att motstå intryck av ett annat hårdare föremål.', incorrectReasoning: null },
                    { text: 'Att mäta ett materials förmåga att motstå slagbelastning.', incorrectReasoning: 'Detta är slagprovning.' },
                    { text: 'Att mäta ett materials förmåga att motstå korrosion.', incorrectReasoning: 'Detta är korrosionsprovning.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Hårdhetsprovning mäter motståndskraft mot intryck.',
                longReasoning: 'Hårdhetsprovning är en metod för att mäta ett materials hårdhet, vilket definieras som dess förmåga att motstå intryck av ett annat, hårdare föremål. Vanliga metoder är Brinell, Rockwell och Vickers.'
            },
            {
                question: 'Nämn en oförstörande provningsmetod som används för att hitta fel inne i materialet.',
                answers: [
                    { text: 'Dragprovning.', incorrectReasoning: 'Dragprovning är förstörande.' },
                    { text: 'Slagprovning.', incorrectReasoning: 'Slagprovning är förstörande.' },
                    { text: 'Radiografi (röntgen).', incorrectReasoning: null },
                    { text: 'Hårdhetsprovning (Brinell).', incorrectReasoning: 'Hårdhetsprovning är inte primärt för att hitta inre fel, även om den kan avslöja ytfel.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'Radiografi kan se in i materialet utan att skada det.',
                longReasoning: 'Radiografi (röntgen) är en oförstörande provningsmetod som används för att detektera fel inne i materialet, som sprickor och porer. Röntgenstrålar tränger igenom materialet och avbildar eventuella defekter på en film.'
            },
            {
                question: 'Vad används magnetpulverprovning till?',
                answers: [
                    { text: 'Att mäta hårdhet.', incorrectReasoning: 'Hårdhet mäts med andra metoder.' },
                    { text: 'Att upptäcka ytfel hos magnetiska material.', incorrectReasoning: null },
                    { text: 'Att detektera inre fel i alla material.', incorrectReasoning: 'Magnetpulver funkar bara på magnetiska material och främst ytfel.' },
                    { text: 'Att mäta draghållfasthet.', incorrectReasoning: 'Draghållfasthet mäts med dragprovning.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Magnetpulver hittar ytfel på magnetiska material.',
                longReasoning: 'Magnetpulverprovning är en metod för att upptäcka ytfel, som sprickor, hos magnetiska material, t.ex. kolstål. Magnetpulver dras till magnetfältläckage vid ytfel och gör dem synliga.'
            },
            {
                question: 'Vad används penetrantprovning till?',
                answers: [
                    { text: 'Att mäta hårdhet.', incorrectReasoning: 'Hårdhet mäts med andra metoder.' },
                    { text: 'Att upptäcka ytfel oavsett material.', incorrectReasoning: null },
                    { text: 'Att detektera inre fel i alla material.', incorrectReasoning: 'Penetrantprovning är främst för ytfel.' },
                    { text: 'Att mäta draghållfasthet.', incorrectReasoning: 'Draghållfasthet mäts med dragprovning.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Penetrantprovning hittar ytfel på de flesta material.',
                longReasoning: 'Penetrantprovning är en metod för att upptäcka ytfel, som sprickor, på de flesta material, inte bara magnetiska. En färgad vätska tränger in i sprickor och synliggörs med ett vitt pulver efter rengöring.'
            },
            {
                question: 'Vad innebär "standardisering"?',
                answers: [
                    { text: 'Att tillverka produkter så billigt som möjligt.', incorrectReasoning: 'Kostnad är inte huvudsyftet med standardisering.' },
                    { text: 'Att skapa regler för att lösa återkommande tekniska problem.', incorrectReasoning: null },
                    { text: 'Att göra produkter unika och svåra att kopiera.', incorrectReasoning: 'Standardisering syftar till motsatsen, interoperabilitet.' },
                    { text: 'Att göra produkter svårare att tillverka.', incorrectReasoning: 'Standardisering syftar till att underlätta tillverkning.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Standardisering skapar gemensamma regler och lösningar.',
                longReasoning: 'Standardisering innebär att man skapar regler och riktlinjer för att lösa återkommande tekniska och ekonomiska problem, för att underlätta samarbete, säkerställa kvalitet och utbytbarhet.'
            },
            {
                question: 'Nämn ett mål med standardisering.',
                answers: [
                    { text: 'Att försvåra kontakter mellan företag.', incorrectReasoning: 'Standardisering syftar till att underlätta kontakter.' },
                    { text: 'Att underlätta kontakter mellan företag genom tydliga begrepp och termer.', incorrectReasoning: null },
                    { text: 'Att öka antalet varianter av produkter.', incorrectReasoning: 'Standardisering syftar till att minska antalet varianter.' },
                    { text: 'Att skapa missförstånd vid provningsmetoder.', incorrectReasoning: 'Standardisering syftar till att skapa entydighet.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Standardisering underlättar kommunikation och samarbete.',
                longReasoning: 'Ett viktigt mål med standardisering är att underlätta kontakter mellan olika företag genom att definiera tydliga begrepp och termer, vilket minskar missförstånd och effektiviserar kommunikationen.'
            },
            {
                question: 'Vad är SIS?',
                answers: [
                    { text: 'En europeisk standardiseringsorganisation.', incorrectReasoning: 'SIS är svensk, inte europeisk.' },
                    { text: 'Swedish Standards Institute, ansvarig för svensk standardisering.', incorrectReasoning: null },
                    { text: 'En internationell standardiseringsorganisation.', incorrectReasoning: 'SIS är svensk, inte internationell.' },
                    { text: 'En tysk standardiseringsorganisation.', incorrectReasoning: 'SIS är svensk, inte tysk.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'SIS är Sveriges standardiseringsorganisation.',
                longReasoning: 'SIS står för Swedish Standards Institute och är den svenska organisationen som ansvarar för utarbetande och fastställande av svensk standard (SS) och bevakar svensk representation i europeisk och internationell standardisering.'
            },
            {
                question: 'Vad är CEN?',
                answers: [
                    { text: 'Svensk standardiseringsorganisation.', incorrectReasoning: 'CEN är europeisk, inte svensk.' },
                    { text: 'Europeisk standardiseringsorganisation i Bryssel.', incorrectReasoning: null },
                    { text: 'Internationell standardiseringsorganisation.', incorrectReasoning: 'CEN är europeisk, inte internationell i global mening.' },
                    { text: 'En amerikansk standardiseringsorganisation.', incorrectReasoning: 'CEN är europeisk, inte amerikansk.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'CEN är den europeiska standardiseringsorganisationen.',
                longReasoning: 'CEN är den europeiska standardiseringsorganisationen, baserad i Bryssel, som arbetar med att ta bort handelshinder genom att skapa gemensamma europeiska standarder (EN).'
            },
            {
                question: 'Vad betyder beteckningen "SS-EN" framför en standard?',
                answers: [
                    { text: 'Att standarden är en svensk standard.', incorrectReasoning: 'SS betyder svensk, men EN betyder europeisk.' },
                    { text: 'Att standarden är en europeisk standard som antagits som svensk standard.', incorrectReasoning: null },
                    { text: 'Att standarden är en internationell standard.', incorrectReasoning: 'ISO är internationell, inte EN.' },
                    { text: 'Att standarden är en standard för rostfritt stål.', incorrectReasoning: 'SS-EN gäller inte specifikt rostfritt stål.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'SS-EN indikerar en europeisk standard antagen i Sverige.',
                longReasoning: 'Beteckningen SS-EN framför en standard betyder att det är en europeisk standard (EN) som har antagits och blivit gällande som svensk standard (SS).'
            },
            {
                question: 'Vad anger bokstaven "S" i stålbeteckningen SS-EN 10022-S235JRG2?',
                answers: [
                    { text: 'Att stålet är ett seghärdat stål.', incorrectReasoning: 'S betyder inte seghärdat.' },
                    { text: 'Att stålet är ett allmänt konstruktionsstål.', incorrectReasoning: null },
                    { text: 'Att stålet är ett snabbstål.', incorrectReasoning: 'S betyder inte snabbstål.' },
                    { text: 'Att stålet är ett verktygsstål.', incorrectReasoning: 'S betyder inte verktygsstål.' }
                ],
                correctAnswer: 1,
                shortReasoning: '"S" i stålbeteckningen indikerar konstruktionsstål.',
                longReasoning: 'I stålbeteckningen SS-EN 10022-S235JRG2 anger bokstaven "S" att det är ett allmänt konstruktionsstål. Andra bokstäver används för andra ståltyper.'
            },
            {
                question: 'Vad anger siffran "235" i stålbeteckningen SS-EN 10022-S235JRG2?',
                answers: [
                    { text: 'Kolhalten i procent.', incorrectReasoning: '235 anger inte kolhalt.' },
                    { text: 'Minivärdet på stålets övre sträckgräns i MPa.', incorrectReasoning: null },
                    { text: 'Brottgränsen i MPa.', incorrectReasoning: '235 anger inte brottgräns.' },
                    { text: 'Densiteten i kg/dm³.', incorrectReasoning: '235 anger inte densitet.' }
                ],
                correctAnswer: 1,
                shortReasoning: '"235" anger sträckgränsen.',
                longReasoning: 'Siffran "235" i stålbeteckningen SS-EN 10022-S235JRG2 anger minivärdet på stålets övre sträckgräns (Reh) i enheten MPa (N/mm²).'
            },
            {
                question: 'Vad anger bokstäverna "JR" i stålbeteckningen SS-EN 10022-S235JRG2?',
                answers: [
                    { text: 'Att stålet är rostfritt.', incorrectReasoning: 'JR anger inte rostfritt.' },
                    { text: 'Slagseghetskrav vid 20°C.', incorrectReasoning: null },
                    { text: 'Att stålet är ett järn.', incorrectReasoning: 'JR anger inte järn.' },
                    { text: 'Att stålet är avsett för rör.', incorrectReasoning: 'JR anger inte rör.' }
                ],
                correctAnswer: 1,
                shortReasoning: '"JR" anger slagseghetskrav.',
                longReasoning: 'Bokstäverna "JR" i stålbeteckningen SS-EN 10022-S235JRG2 anger slagseghetskravet för stålet vid 20°C. Andra bokstavskombinationer anger slagseghetskrav vid olika temperaturer.'
            },
            {
                question: 'Vad är "färgmärkning av material" bra för?',
                answers: [
                    { text: 'Att göra materialet dyrare.', incorrectReasoning: 'Färgmärkning påverkar inte priset direkt.' },
                    { text: 'Att underlätta identifiering av rätt materialkvalitet.', incorrectReasoning: null },
                    { text: 'Att göra materialet lättare att svetsa.', incorrectReasoning: 'Färgmärkning påverkar inte svetsbarheten.' },
                    { text: 'Att göra materialet starkare.', incorrectReasoning: 'Färgmärkning påverkar inte styrkan.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Färgmärkning hjälper till att välja rätt material.',
                longReasoning: 'Färgmärkning av material underlättar för operatörer att snabbt och enkelt identifiera rätt materialkvalitet, till exempel för att undvika att blanda ihop olika stålsorter.'
            },
            {
                question: 'Vad är "stål" huvudsakligen gjort av?',
                answers: [
                    { text: 'Aluminium.', incorrectReasoning: 'Aluminium är en annan metall.' },
                    { text: 'Järn och kol.', incorrectReasoning: null },
                    { text: 'Koppar.', incorrectReasoning: 'Koppar är en annan metall.' },
                    { text: 'Titan.', incorrectReasoning: 'Titan är en annan metall.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Stål består mestadels av järn och kol.',
                longReasoning: 'Stål är ett material som till största delen består av järn och kol, där kol är det vanligaste och viktigaste legeringsämnet. Kolhalten i stål är oftast lägre än 2%.'
            },
            {
                question: 'Vad är "olegerat stål"?',
                answers: [
                    { text: 'Stål som inte innehåller järn.', incorrectReasoning: 'Olegerat stål innehåller järn.' },
                    { text: 'Stål som bara innehåller järn och kol, utan avsiktliga tillsatser av andra legeringsämnen.', incorrectReasoning: null },
                    { text: 'Stål som är mycket starkt legerat.', incorrectReasoning: 'Olegerat stål är inte starkt legerat.' },
                    { text: 'Stål som är omöjligt att legera.', incorrectReasoning: 'Alla stål kan legeras.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Olegerat stål är stål utan avsiktliga legeringstillsatser.',
                longReasoning: 'Olegerat stål, även kallat kolstål, är stål som huvudsakligen består av järn och kol, med endast små mängder av andra ämnen som kisel och mangan, som inte är avsiktligt tillsatta som legeringsämnen.'
            },
            {
                question: 'Vilket legeringsämne ökar främst hårdheten och hållfastheten i stål?',
                answers: [
                    { text: 'Kisel (Si).', incorrectReasoning: 'Kisel ökar hållfastheten, men kol är mer primärt för hårdhet.' },
                    { text: 'Kol (C).', incorrectReasoning: null },
                    { text: 'Mangan (Mn).', incorrectReasoning: 'Mangan ökar hållfasthet och slitstyrka, men kol är mer primärt för hårdhet.' },
                    { text: 'Krom (Cr).', incorrectReasoning: 'Krom ökar korrosionsmotståndet och hårdheten, men kol är mer primärt för grundläggande hårdhet.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Kol är det primära ämnet för att öka stålets hårdhet.',
                longReasoning: 'Kol (C) är det viktigaste legeringsämnet för att öka hårdheten och hållfastheten i stål. Med stigande kolhalt ökar hårdheten och hållfastheten, men samtidigt minskar segheten och svetsbarheten.'
            },
            {
                question: 'Vilket legeringsämne ger stål rostskydd (korrosionsmotstånd)?',
                answers: [
                    { text: 'Mangan (Mn).', incorrectReasoning: 'Mangan ökar inte rostskyddet i sig.' },
                    { text: 'Krom (Cr).', incorrectReasoning: null },
                    { text: 'Nickel (Ni).', incorrectReasoning: 'Nickel bidrar till korrosionsmotstånd, men krom är det primära ämnet.' },
                    { text: 'Kisel (Si).', incorrectReasoning: 'Kisel ökar inte rostskyddet i sig.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Krom ger rostskydd till stål.',
                longReasoning: 'Krom (Cr) är det legeringsämne som främst ger stål korrosionsmotstånd, s.k. rostfrihet. För att stål ska vara rostfritt krävs en kromhalt på minst 12%.'
            },
            {
                question: 'Vad är "konstruktionsstål"?',
                answers: [
                    { text: 'Stål som bara används för verktyg.', incorrectReasoning: 'Konstruktionsstål är inte för verktyg.' },
                    { text: 'Ett samlingsnamn för flera olika ståltyper med relativt låg kolhalt och god svetsbarhet.', incorrectReasoning: null },
                    { text: 'Stål som är omöjligt att svetsa.', incorrectReasoning: 'Konstruktionsstål är ofta svetsbart.' },
                    { text: 'Stål med mycket hög kolhalt och hög hårdhet.', incorrectReasoning: 'Konstruktionsstål har låg till medel kolhalt.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Konstruktionsstål är ett brett begrepp för svetsbara stål.',
                longReasoning: 'Konstruktionsstål är ett samlingsnamn för flera olika ståltyper som kännetecknas av relativt låg kolhalt (vanligen 0,1-0,6%), god hållfasthet, slagseghet och svetsbarhet. De används i bärande konstruktioner.'
            },
            {
                question: 'Vad är "verktygsstål"?',
                answers: [
                    { text: 'Samma sak som konstruktionsstål.', incorrectReasoning: 'Verktygsstål har andra egenskaper än konstruktionsstål.' },
                    { text: 'Stål som används för att tillverka verktyg.', incorrectReasoning: null },
                    { text: 'Stål som är omöjligt att härda.', incorrectReasoning: 'Verktygsstål härdas ofta.' },
                    { text: 'Stål med mycket låg kolhalt och dålig hårdhet.', incorrectReasoning: 'Verktygsstål har högre kolhalt och god hårdhet.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Verktygsstål är stål för verktygstillverkning.',
                longReasoning: 'Verktygsstål är stål som används för tillverkning av verktyg, t.ex. svarvstål, borrar, knivar. De kännetecknas av god slitstyrka, eggskärpa, hårdhet och seghet och har högre kolhalt än konstruktionsstål (0,6-1,2%).'
            },
            {
                question: 'Vad är "rostfritt stål"?',
                answers: [
                    { text: 'Stål som inte innehåller järn.', incorrectReasoning: 'Rostfritt stål innehåller järn.' },
                    { text: 'Stål som innehåller minst 12% krom för att motverka korrosion.', incorrectReasoning: null },
                    { text: 'Stål som inte kan rosta alls under några omständigheter.', incorrectReasoning: 'Rostfritt stål kan korrodera under vissa extrema förhållanden.' },
                    { text: 'Stål som är omöjligt att svetsa.', incorrectReasoning: 'Vissa rostfria stål är svetsbara.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Rostfritt stål har hög kromhalt för rostskydd.',
                longReasoning: 'Rostfritt stål är stål som innehåller minst 12% krom, vilket ger det ett högt motstånd mot korrosion (rost). Det kan även innehålla nickel och molybden som ytterligare legeringsämnen för att förbättra korrosionsmotståndet.'
            },
            {
                question: 'Vad är "gjutstål"?',
                answers: [
                    { text: 'Stål som bara används för smide.', incorrectReasoning: 'Gjutstål används för gjutning.' },
                    { text: 'Stål som är avsett för gjutning av färdiga formprodukter.', incorrectReasoning: null },
                    { text: 'Stål med mycket låg smältpunkt.', incorrectReasoning: 'Gjutstål har hög smältpunkt, liksom annat stål.' },
                    { text: 'Stål som inte kan svetsas.', incorrectReasoning: 'Gjutstål kan vara svetsbart.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Gjutstål är speciellt utformat för gjutning.',
                longReasoning: 'Gjutstål är stål som är speciellt framtaget för att användas vid gjutning av färdiga formprodukter. Det har en kolhalt på 0,18-0,50% och relativt höga halter av kisel och mangan för att förbättra flytbarheten vid gjutning.'
            },
            {
                question: 'Vad är "formbarhet" hos stål?',
                answers: [
                    { text: 'Förmågan att motstå korrosion.', incorrectReasoning: 'Detta är korrosionsmotstånd.' },
                    { text: 'Förmågan att formas genom smidning, bockning eller pressning.', incorrectReasoning: null },
                    { text: 'Förmågan att leda värme.', incorrectReasoning: 'Detta är värmeledningsförmåga.' },
                    { text: 'Förmågan att härdas.', incorrectReasoning: 'Detta är härdbarhet.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Formbarhet är förmågan att forma stålet.',
                longReasoning: 'Formbarhet hos stål är dess förmåga att formas genom olika metoder som smidning, bockning eller pressning vid tillverkning av produkter utan att spricka eller gå sönder.'
            },
            {
                question: 'Vad är "skärbarhet" hos stål?',
                answers: [
                    { text: 'Förmågan att motstå slitage.', incorrectReasoning: 'Detta är slitstyrka.' },
                    { text: 'Lämpligheten för skärande bearbetning som svarvning, fräsning och borrning.', incorrectReasoning: null },
                    { text: 'Förmågan att svetsas.', incorrectReasoning: 'Detta är svetsbarhet.' },
                    { text: 'Förmågan att härdas.', incorrectReasoning: 'Detta är härdbarhet.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Skärbarhet är hur lätt stål är att skära.',
                longReasoning: 'Skärbarhet hos stål är dess lämplighet för skärande bearbetning, såsom svarvning, fräsning och borrning. Det beskriver hur lätt materialet är att avverka med skärande verktyg.'
            },
            {
                question: 'Vad är "svetsbarhet" hos stål?',
                answers: [
                    { text: 'Förmågan att motstå korrosion efter svetsning.', incorrectReasoning: 'Detta är inte svetsbarhet i sig.' },
                    { text: 'Förmågan att svetsas utan att det bildas sprickor.', incorrectReasoning: null },
                    { text: 'Förmågan att härdas efter svetsning.', incorrectReasoning: 'Detta är inte svetsbarhet i sig.' },
                    { text: 'Förmågan att formas efter svetsning.', incorrectReasoning: 'Detta är inte svetsbarhet i sig.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Svetsbarhet är förmågan att svetsa utan sprickor.',
                longReasoning: 'Svetsbarhet hos stål är dess förmåga att kunna svetsas samman utan att det bildas sprickor eller andra defekter i svetsfogen. Svetsbarheten påverkas främst av kolhalten och legeringsämnen.'
            },
            {
                question: 'Vad är "slitstyrka" hos stål?',
                answers: [
                    { text: 'Förmågan att motstå korrosion.', incorrectReasoning: 'Detta är korrosionsmotstånd.' },
                    { text: 'Förmågan att motstå nötning och slitage.', incorrectReasoning: null },
                    { text: 'Förmågan att svetsas.', incorrectReasoning: 'Detta är svetsbarhet.' },
                    { text: 'Förmågan att härdas.', incorrectReasoning: 'Detta är härdbarhet.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Slitstyrka är motståndskraft mot nötning.',
                longReasoning: 'Slitstyrka hos stål är dess förmåga att motstå nötning, slitage och abrasion vid användning i miljöer där det utsätts för friktion och slitage.'
            },
            {
                question: 'Vad är "seghet" hos stål?',
                answers: [
                    { text: 'Förmågan att motstå korrosion.', incorrectReasoning: 'Detta är korrosionsmotstånd.' },
                    { text: 'Förmågan att tåla hög töjning och deformation utan att brista.', incorrectReasoning: null },
                    { text: 'Förmågan att svetsas.', incorrectReasoning: 'Detta är svetsbarhet.' },
                    { text: 'Förmågan att härdas.', incorrectReasoning: 'Detta är härdbarhet.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Seghet är förmågan att deformeras utan brott.',
                longReasoning: 'Seghet hos stål är dess förmåga att tåla hög töjning, deformation och slagbelastning utan att brista eller gå sönder sprött. Sega material kan bockas och böjas i hög grad.'
            },
            {
                question: 'Vad är syftet med "värmebehandling av stål"?',
                answers: [
                    { text: 'Att ändra stålets färg.', incorrectReasoning: 'Värmebehandling påverkar inte färgen direkt.' },
                    { text: 'Att förändra stålets inre struktur och därmed dess egenskaper.', incorrectReasoning: null },
                    { text: 'Att göra stålet dyrare.', incorrectReasoning: 'Värmebehandling kan både öka och minska kostnaden beroende på processen.' },
                    { text: 'Att göra stålet lättare.', incorrectReasoning: 'Värmebehandling påverkar inte vikten.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Värmebehandling optimerar stålets egenskaper.',
                longReasoning: 'Syftet med värmebehandling av stål är att förändra stålets inre struktur för att återställa önskvärda egenskaper som hållfasthet, hårdhet, seghet, skärbarhet eller för att anpassa det till specifika användningsområden.'
            },
            {
                question: 'Nämn två huvudgrupper av värmebehandling av stål.',
                answers: [
                    { text: 'Slipning och polering.', incorrectReasoning: 'Dessa är ytbehandlingsmetoder, inte värmebehandling.' },
                    { text: 'Härdning och glödgning.', incorrectReasoning: null },
                    { text: 'Svetsning och limning.', incorrectReasoning: 'Dessa är sammanfogningsmetoder, inte värmebehandling.' },
                    { text: 'Målning och lackering.', incorrectReasoning: 'Dessa är ytbehandlingsmetoder, inte värmebehandling.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Härdning och glödgning är de två huvudtyperna av värmebehandling.',
                longReasoning: 'De två huvudgrupperna av värmebehandling av stål är härdning och glödgning. Härdning ökar hårdheten och hållfastheten, medan glödgning gör stålet mjukare och spänningsfritt.'
            },
            {
                question: 'Vad är syftet med "härdning" av stål?',
                answers: [
                    { text: 'Att göra stålet mjukare.', incorrectReasoning: 'Härdning gör stålet hårdare, inte mjukare.' },
                    { text: 'Att göra stålet hårdare och öka hållfastheten.', incorrectReasoning: null },
                    { text: 'Att öka stålets korrosionsmotstånd.', incorrectReasoning: 'Härdning påverkar inte korrosionsmotståndet direkt.' },
                    { text: 'Att förbättra stålets svetsbarhet.', incorrectReasoning: 'Härdning försämrar ofta svetsbarheten.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Härdning gör stål hårdare.',
                longReasoning: 'Syftet med härdning av stål är att öka stålets hårdhet och hållfasthet, samt förbättra slitstyrkan. Härdning utförs genom att värma stålet till en hög temperatur och sedan snabbt kyla ner det.'
            },
            {
                question: 'Vad är syftet med "glödgning" av stål?',
                answers: [
                    { text: 'Att göra stålet hårdare.', incorrectReasoning: 'Glödgning gör stålet mjukare, inte hårdare.' },
                    { text: 'Att göra stålet mjukare och spänningsfritt.', incorrectReasoning: null },
                    { text: 'Att öka stålets korrosionsmotstånd.', incorrectReasoning: 'Glödgning påverkar inte korrosionsmotståndet direkt.' },
                    { text: 'Att förbättra stålets slitstyrka.', incorrectReasoning: 'Glödgning minskar slitstyrkan.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Glödgning gör stål mjukare och mer formbart.',
                longReasoning: 'Syftet med glödgning av stål är att göra stålet mjukare, spänningsfritt och mer formbart. Glödgning kan också förbättra skärbarheten och ge en finkornig struktur. Det utförs genom att värma stålet och sedan långsamt kyla ner det.'
            },
            {
                question: 'Vad är "anlöpning" av stål?',
                answers: [
                    { text: 'En typ av glödgning.', incorrectReasoning: 'Anlöpning är inte glödgning, utan följer efter härdning.' },
                    { text: 'En värmebehandling som utförs efter härdning för att minska sprödheten och öka segheten.', incorrectReasoning: null },
                    { text: 'En värmebehandling som utförs före härdning för att mjuka upp stålet.', incorrectReasoning: 'Anlöpning görs efter härdning.' },
                    { text: 'En metod för att ytbehandla stål.', incorrectReasoning: 'Anlöpning är inte en ytbehandling.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Anlöpning gör härdat stål segare.',
                longReasoning: 'Anlöpning är en värmebehandling som utförs efter härdning av stål för att minska sprödheten och öka segheten. Det innebär att man värmer det härdade stålet till en lägre temperatur och sedan långsamt kyler ner det.'
            },
            {
                question: 'Vad är "seghärdning" av stål?',
                answers: [
                    { text: 'En typ av glödgning.', incorrectReasoning: 'Seghärdning är inte glödgning.' },
                    { text: 'En värmebehandling som syftar till att göra stålet segare, samt höja hållfasthet och seghet.', incorrectReasoning: null },
                    { text: 'En värmebehandling som bara ökar hårdheten.', incorrectReasoning: 'Seghärdning ökar även segheten.' },
                    { text: 'En metod för att ytbehandla stål.', incorrectReasoning: 'Seghärdning är inte en ytbehandling.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Seghärdning optimerar både seghet och hållfasthet.',
                longReasoning: 'Seghärdning är en värmebehandling som utförs för att göra stålet segare och för att höja både hållfasthet och seghet. Det utförs på liknande sätt som vanlig härdning, men kylningen sker ofta i olja.'
            },
            {
                question: 'Vad är "ythärdning" (sätthärdning) av stål?',
                answers: [
                    { text: 'En värmebehandling som härdar hela stålet.', incorrectReasoning: 'Ythärdning härdar bara ytan.' },
                    { text: 'En värmebehandling som bara härdar ytskiktet av stålet.', incorrectReasoning: null },
                    { text: 'En värmebehandling som mjukar upp ytan.', incorrectReasoning: 'Ythärdning gör ytan hårdare, inte mjukare.' },
                    { text: 'En metod för att ytbehandla stålet med färg.', incorrectReasoning: 'Ythärdning är inte en färgytbehandling.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Ythärdning härdar endast stålets yta.',
                longReasoning: 'Ythärdning (sätthärdning) är en värmebehandling som bara härdar ytskiktet av stålet, medan kärnan förblir seg. Det används när man önskar en hård och slitstark yta kombinerat med en seg kärna som tål slag och vibrationer.'
            },
            {
                question: 'Vad är "karbonitrering"?',
                answers: [
                    { text: 'En typ av glödgning.', incorrectReasoning: 'Karbonitrering är inte glödgning.' },
                    { text: 'En variant av sätthärdning som används för låglegerade stål.', incorrectReasoning: null },
                    { text: 'En metod för att göra stålet rostfritt.', incorrectReasoning: 'Karbonitrering gör inte stålet rostfritt.' },
                    { text: 'En metod för att ytbehandla stål med färg.', incorrectReasoning: 'Karbonitrering är inte en färgytbehandling.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Karbonitrering är en typ av ythärdning för låglegerat stål.',
                longReasoning: 'Karbonitrering är en variant av sätthärdning som används för låglegerade stålsorter. Det innebär att man tillsätter både kol och kväve i ytskiktet för att öka härdbarheten och slitstyrkan.'
            },
            {
                question: 'Vad är "gasnitrering"?',
                answers: [
                    { text: 'En typ av glödgning.', incorrectReasoning: 'Gasnitrering är inte glödgning.' },
                    { text: 'En ythärdningsmetod som ger en yta motståndskraftig mot nötning och korrosion.', incorrectReasoning: null },
                    { text: 'En metod för att göra stålet rostfritt.', incorrectReasoning: 'Gasnitrering gör inte stålet rostfritt.' },
                    { text: 'En metod för att ytbehandla stål med färg.', incorrectReasoning: 'Gasnitrering är inte en färgytbehandling.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Gasnitrering ger ytan hög slit- och korrosionsbeständighet.',
                longReasoning: 'Gasnitrering är en ythärdningsmetod som används för att ge stålytan hög motståndskraft mot nötning och korrosion. Det utförs genom att värma stålet i kvävgas under lång tid, vilket bildar hårda nitrider i ytskiktet.'
            },
            {
                question: 'Vad är "nitrokarburering"?',
                answers: [
                    { text: 'En typ av glödgning.', incorrectReasoning: 'Nitrokarburering är inte glödgning.' },
                    { text: 'En form av nitrering där man använder gaser som avger både kol och kväve.', incorrectReasoning: null },
                    { text: 'En metod för att göra stålet rostfritt.', incorrectReasoning: 'Nitrokarburering gör inte stålet rostfritt.' },
                    { text: 'En metod för att ytbehandla stål med färg.', incorrectReasoning: 'Nitrokarburering är inte en färgytbehandling.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Nitrokarburering kombinerar kol och kväve i ythärdningen.',
                longReasoning: 'Nitrokarburering är en form av nitrering som använder gaser som avger både kol och kväve. Det ger en hård yta genom bildning av hårda partiklar i stålytan och kan ersätta både sätthärdning och nitrering i många applikationer.'
            },
            {
                question: 'Vad är "plasmanitrering"?',
                answers: [
                    { text: 'En typ av glödgning.', incorrectReasoning: 'Plasmanitrering är inte glödgning.' },
                    { text: 'En ythärdningsmetod som är lämplig för detaljer med krav på låg friktion och ökad slitstyrka.', incorrectReasoning: null },
                    { text: 'En metod för att göra stålet rostfritt.', incorrectReasoning: 'Plasmanitrering gör inte stålet rostfritt.' },
                    { text: 'En metod för att ytbehandla stål med färg.', incorrectReasoning: 'Plasmanitrering är inte en färgytbehandling.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Plasmanitrering ger låg friktion och hög slitstyrka.',
                longReasoning: 'Plasmanitrering är en ythärdningsmetod som är särskilt lämplig för ståldetaljer som kräver låg friktion, ökad slitstyrka, ökad utmattningshållfasthet och förbättrat korrosionshärdighet.'
            },
            {
                question: 'Vad är "flamhärdning"?',
                answers: [
                    { text: 'En typ av glödgning.', incorrectReasoning: 'Flamhärdning är inte glödgning.' },
                    { text: 'En metod för att lokalt härda begränsade områden på ett stålstycke med gaslåga.', incorrectReasoning: null },
                    { text: 'En metod för att göra hela stålstycket rostfritt.', incorrectReasoning: 'Flamhärdning gör inte stålet rostfritt.' },
                    { text: 'En metod för att ytbehandla stål med färg.', incorrectReasoning: 'Flamhärdning är inte en färgytbehandling.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Flamhärdning är lokal härdning med gaslåga.',
                longReasoning: 'Flamhärdning är en metod för att lokalt härda begränsade områden på ett stålstycke. Uppvärmningen sker med en gaslåga direkt på området som ska härdas, och kylningen sker direkt efter med vattendusch.'
            },
            {
                question: 'Vad är "induktionshärdning"?',
                answers: [
                    { text: 'En typ av glödgning.', incorrectReasoning: 'Induktionshärdning är inte glödgning.' },
                    { text: 'En metod för att lokalt härda med elektriska spolar (induktorer).', incorrectReasoning: null },
                    { text: 'En metod för att göra hela stålstycket rostfritt.', incorrectReasoning: 'Induktionshärdning gör inte stålet rostfritt.' },
                    { text: 'En metod för att ytbehandla stål med färg.', incorrectReasoning: 'Induktionshärdning är inte en färgytbehandling.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Induktionshärdning är lokal härdning med induktion.',
                longReasoning: 'Induktionshärdning är en metod för att lokalt härda områden på ett stålstycke. Uppvärmningen sker snabbt med elektriska spolar (induktorer) som inducerar strömmar i materialet och kyler sedan med vattendusch eller emulsion.'
            },
            {
                question: 'Vad är "normalisering" av stål?',
                answers: [
                    { text: 'En typ av härdning.', incorrectReasoning: 'Normalisering är inte härdning.' },
                    { text: 'En typ av glödgning som utförs för att göra strukturen finkornig igen efter svetsning eller slipning.', incorrectReasoning: null },
                    { text: 'En metod för att göra stålet rostfritt.', incorrectReasoning: 'Normalisering gör inte stålet rostfritt.' },
                    { text: 'En metod för att ytbehandla stål med färg.', incorrectReasoning: 'Normalisering är inte en färgytbehandling.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Normalisering finfördelar kornstrukturen.',
                longReasoning: 'Normalisering är en typ av glödgning som utförs för att göra stålstrukturen finkornig igen efter bearbetning som svetsning eller slipning, vilket förbättrar hållfastheten och segheten.'
            },
            {
                question: 'Vad är "mjukglödgning" av stål?',
                answers: [
                    { text: 'En typ av härdning.', incorrectReasoning: 'Mjukglödgning är inte härdning.' },
                    { text: 'En typ av glödgning som utförs för att minska hårdheten och göra stålet mjukare.', incorrectReasoning: null },
                    { text: 'En metod för att göra stålet rostfritt.', incorrectReasoning: 'Mjukglödgning gör inte stålet rostfritt.' },
                    { text: 'En metod för att ytbehandla stål med färg.', incorrectReasoning: 'Mjukglödgning är inte en färgytbehandling.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Mjukglödgning gör stål mjukare för bearbetning.',
                longReasoning: 'Mjukglödgning är en typ av glödgning som utförs för att minska hårdheten i stål, vilket gör det mjukare och lättare att bearbeta med skärande verktyg.'
            },
            {
                question: 'Vad är "avspänningsglödgning" av stål?',
                answers: [
                    { text: 'En typ av härdning.', incorrectReasoning: 'Avspänningsglödgning är inte härdning.' },
                    { text: 'En typ av glödgning som utförs för att minska inre spänningar i materialet.', incorrectReasoning: null },
                    { text: 'En metod för att göra stålet rostfritt.', incorrectReasoning: 'Avspänningsglödgning gör inte stålet rostfritt.' },
                    { text: 'En metod för att ytbehandla stål med färg.', incorrectReasoning: 'Avspänningsglödgning är inte en färgytbehandling.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Avspänningsglödgning tar bort inre spänningar.',
                longReasoning: 'Avspänningsglödgning är en typ av glödgning som utförs för att minska inre spänningar i materialet som kan uppstå vid bearbetning, svetsning eller snabb kylning. Det påverkar inte hårdheten nämnvärt.'
            },
            {
                question: 'Vad är "gjutjärn"?',
                answers: [
                    { text: 'En typ av stål med låg kolhalt.', incorrectReasoning: 'Gjutjärn har hög kolhalt, inte låg.' },
                    { text: 'Legeringar av järn och kol med mer än 2% kol.', incorrectReasoning: null },
                    { text: 'Samma sak som gjutstål.', incorrectReasoning: 'Gjutjärn och gjutstål är olika material.' },
                    { text: 'En typ av aluminiumlegering.', incorrectReasoning: 'Gjutjärn är en järnlegering, inte aluminium.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Gjutjärn har hög kolhalt jämfört med stål.',
                longReasoning: 'Gjutjärn är legeringar av järn och kol med en kolhalt på mer än 2%, vanligtvis mellan 2,5-4%. Den högre kolhalten ger god gjutbarhet men också lägre hållfasthet och seghet jämfört med stål.'
            },
            {
                question: 'Nämn en typ av gjutjärn.',
                answers: [
                    { text: 'Konstruktionsstål.', incorrectReasoning: 'Konstruktionsstål är inte gjutjärn.' },
                    { text: 'Gråjärn.', incorrectReasoning: null },
                    { text: 'Rostfritt stål.', incorrectReasoning: 'Rostfritt stål är inte gjutjärn.' },
                    { text: 'Verktygsstål.', incorrectReasoning: 'Verktygsstål är inte gjutjärn.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Gråjärn är en vanlig typ av gjutjärn.',
                longReasoning: 'Vanliga typer av gjutjärn är gråjärn, segjärn, aducerjärn och vitjärn. De skiljer sig åt i mikrostruktur och egenskaper.'
            },
            {
                question: 'Vad är "gråjärn" känt för?',
                answers: [
                    { text: 'Mycket hög seghet.', incorrectReasoning: 'Gråjärn har låg seghet.' },
                    { text: 'God dämpningsförmåga mot vibrationer och buller.', incorrectReasoning: null },
                    { text: 'Mycket hög draghållfasthet.', incorrectReasoning: 'Gråjärn har inte extremt hög draghållfasthet.' },
                    { text: 'Utmärkt svetsbarhet.', incorrectReasoning: 'Gråjärn är inte känt för utmärkt svetsbarhet.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Gråjärn dämpar vibrationer och buller bra.',
                longReasoning: 'Gråjärn är känt för sin goda dämpningsförmåga mot vibrationer och buller, samt gott motstånd mot nötning. Det har relativt hög hållfasthet men låg seghet.'
            },
            {
                question: 'Vad är "segjärn"?',
                answers: [
                    { text: 'Samma sak som gråjärn.', incorrectReasoning: 'Segjärn är inte samma som gråjärn, det har bättre seghet.' },
                    { text: 'En typ av gjutjärn med bättre hållfasthet och seghet än gråjärn.', incorrectReasoning: null },
                    { text: 'En typ av gjutjärn med sämre hållfasthet och seghet än gråjärn.', incorrectReasoning: 'Segjärn har bättre egenskaper än gråjärn.' },
                    { text: 'En typ av stål.', incorrectReasoning: 'Segjärn är en typ av gjutjärn, inte stål.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Segjärn är starkare och segare än gråjärn.',
                longReasoning: 'Segjärn är en typ av gjutjärn som har bättre hållfasthet och seghet än gråjärn. Det uppnås genom att tillsätta små mängder magnesium vid gjutningen, vilket påverkar mikrostrukturen.'
            },
            {
                question: 'Vad är "aducerjärn"?',
                answers: [
                    { text: 'En typ av stål.', incorrectReasoning: 'Aducerjärn är en typ av gjutjärn, inte stål.' },
                    { text: 'En typ av gjutjärn som är mjukt och relativt segt, med god skärbarhet.', incorrectReasoning: null },
                    { text: 'En typ av gjutjärn som är mycket hårt och sprött.', incorrectReasoning: 'Detta beskriver vitjärn, inte aducerjärn.' },
                    { text: 'En typ av aluminiumlegering.', incorrectReasoning: 'Aducerjärn är en järnlegering, inte aluminium.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Aducerjärn är mjukt, segt och lättbearbetat.',
                longReasoning: 'Aducerjärn är en typ av gjutjärn som är mjukt och relativt segt, med god skärbarhet. Det framställs genom värmebehandling av vitjärn, en process som kallas aducering.'
            },
            {
                question: 'Vad är "vitjärn"?',
                answers: [
                    { text: 'En typ av stål.', incorrectReasoning: 'Vitjärn är en typ av gjutjärn, inte stål.' },
                    { text: 'En typ av gjutjärn som är mycket hårt och sprött.', incorrectReasoning: null },
                    { text: 'En typ av gjutjärn som är mjukt och segt.', incorrectReasoning: 'Detta beskriver aducerjärn, inte vitjärn.' },
                    { text: 'En typ av aluminiumlegering.', incorrectReasoning: 'Vitjärn är en järnlegering, inte aluminium.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Vitjärn är hårt och sprött gjutjärn.',
                longReasoning: 'Vitjärn är en typ av gjutjärn som är mycket hårt och sprött, med en vit brottyta. Det har god slitstyrka men är svårt att bearbeta och svetsa.'
            },
            {
                question: 'Vad är "pulvermetall"?',
                answers: [
                    { text: 'En legering av aluminium och pulver.', incorrectReasoning: 'Pulvermetall är inte specifikt aluminium.' },
                    { text: 'En metallegering framställd genom att blanda, pressa och värmebehandla metallpulver.', incorrectReasoning: null },
                    { text: 'En typ av plastmaterial.', incorrectReasoning: 'Pulvermetall är metalliskt.' },
                    { text: 'En typ av keramiskt material.', incorrectReasoning: 'Pulvermetall är metalliskt.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Pulvermetall tillverkas av metallpulver.',
                longReasoning: 'Pulvermetall är en metallegering som framställs genom en annan process än traditionella metallegeringar. Man utgår från metallpulver som blandas, formas genom pressning och sedan sintras (värmebehandlas) till en solid form.'
            },
            {
                question: 'Nämn en typ av pulvermetall.',
                answers: [
                    { text: 'Gjutjärn.', incorrectReasoning: 'Gjutjärn tillverkas inte genom pulvermetallurgi.' },
                    { text: 'Hårdmetall.', incorrectReasoning: null },
                    { text: 'Konstruktionsstål.', incorrectReasoning: 'Konstruktionsstål tillverkas oftast inte genom pulvermetallurgi.' },
                    { text: 'Rostfritt stål.', incorrectReasoning: 'Rostfritt stål tillverkas oftast inte genom pulvermetallurgi.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Hårdmetall är en vanlig pulvermetall.',
                longReasoning: 'Pulvermetaller delas in i två huvudgrupper: sintermetaller och hårdmetaller. Hårdmetall är en vanlig och viktig typ av pulvermetall som används för skärverktyg.'
            },
            {
                question: 'Vad är "hårdmetall"?',
                answers: [
                    { text: 'En typ av plastmaterial.', incorrectReasoning: 'Hårdmetall är metalliskt.' },
                    { text: 'Ett hårt och slitstarkt material som består av metallkarbider sammanbundna med kobolt eller nickel.', incorrectReasoning: null },
                    { text: 'En typ av keramiskt material.', incorrectReasoning: 'Hårdmetall är inte keramiskt.' },
                    { text: 'En typ av gjutjärn.', incorrectReasoning: 'Hårdmetall är inte gjutjärn.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Hårdmetall är en komposit av karbider och bindemetall.',
                longReasoning: 'Hårdmetall (HM) är ett mycket hårt och slitstarkt material som består av hårda metallkarbider, vanligen wolframkarbid och titankarbid, som är bundna samman av en segare bindemetall som kobolt eller nickel.'
            },
            {
                question: 'Vad används "hårdmetall" främst till?',
                answers: [
                    { text: 'Bärande konstruktioner.', incorrectReasoning: 'Hårdmetall är för sprött för bärande konstruktioner.' },
                    { text: 'Skärverktyg och skärplattor.', incorrectReasoning: null },
                    { text: 'Karosseri till bilar.', incorrectReasoning: 'Hårdmetall är för sprött och dyrt för karosseri.' },
                    { text: 'Rörledningar.', incorrectReasoning: 'Hårdmetall är för sprött och dyrt för rörledningar.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Hårdmetall är idealiskt för skärande verktyg.',
                longReasoning: 'Hårdmetall används främst till skärverktyg och skärplattor för svarvning, fräsning och borrning på grund av sin extrema hårdhet och slitstyrka. Det används även i bergborrar, dragskivor och slitskydd.'
            },
            {
                question: 'Vad är "snabbstål" (HSS)?',
                answers: [
                    { text: 'En typ av plastmaterial.', incorrectReasoning: 'Snabbstål är metalliskt.' },
                    { text: 'Ett stål med mycket goda skäregenskaper vid höga hastigheter.', incorrectReasoning: null },
                    { text: 'En typ av keramiskt material.', incorrectReasoning: 'Snabbstål är inte keramiskt.' },
                    { text: 'En typ av gjutjärn.', incorrectReasoning: 'Snabbstål är inte gjutjärn.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Snabbstål är stål för höghastighetsbearbetning.',
                longReasoning: 'Snabbstål (HSS - High Speed Steel) är ett stål med mycket goda skäregenskaper, särskilt vid höga skärhastigheter. Det behåller sin hårdhet även vid höga temperaturer som uppstår vid skärande bearbetning.'
            },
            {
                question: 'Vad är viktigt att tänka på vid användning av verktyg av snabbstål?',
                answers: [
                    { text: 'Att inte kyla verktyget.', incorrectReasoning: 'Kylning är viktigt för snabbstål.' },
                    { text: 'Att kyla verktyget för att undvika överhettning och förstörelse av hårdheten.', incorrectReasoning: null },
                    { text: 'Att använda mycket hög matning.', incorrectReasoning: 'Matning beror på material och verktyg, inte bara snabbstål.' },
                    { text: 'Att inte använda kylvätska.', incorrectReasoning: 'Kylvätska är viktigt för snabbstål.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Kylning är essentiellt för snabbstål för att behålla hårdheten.',
                longReasoning: 'Vid användning av verktyg av snabbstål är kylning av verktyget mycket viktigt. Utan kylning kan värmeutvecklingen bli så hög att hårdheten i verktyget förstörs och det blir oanvändbart.'
            },
            {
                question: 'Vilken materialbeteckning, enligt SS-EN, har mässing som passar för spånskärande bearbetning i CNC-maskiner?',
                answers: [
                    { text: 'GJL-300', incorrectReasoning: 'Detta är gjutjärn.' },
                    { text: 'Cu Zn 39 Pb', incorrectReasoning: null },
                    { text: 'MCMgAl6Mn', incorrectReasoning: 'Detta är aluminium.' },
                    { text: '11 S Mn Pb 30', incorrectReasoning: 'Detta är automatstål.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Cu Zn 39 Pb är mässing.',
                longReasoning: 'Cu Zn 39 Pb är en materialbeteckning enligt SS-EN för mässing som innehåller bly (Pb), vilket förbättrar dess skärbarhet och gör det lämpligt för spånskärande bearbetning i CNC-maskiner.'
            },
            {
                question: 'Vilken standard betecknar en europeisk standard som antagits som svensk standard?',
                answers: [
                    { text: 'ISO', incorrectReasoning: 'ISO är internationell standard.' },
                    { text: 'SS-EN', incorrectReasoning: null },
                    { text: 'DIN', incorrectReasoning: 'DIN är tysk standard.' },
                    { text: 'ASTM', incorrectReasoning: 'ASTM är amerikansk standard.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'SS-EN betecknar en europeisk standard antagen i Sverige.',
                longReasoning: 'SS-EN är beteckningen som används för europeiska standarder (EN) som har antagits som svensk standard (SS). Detta visar att standarden är gemensam för Europa och Sverige.'
            },
            {
                question: 'Vilket av följande är ett exempel på en icke-förstörande provningsmetod?',
                answers: [
                    { text: 'Dragprovning', incorrectReasoning: 'Dragprovning är förstörande.' },
                    { text: 'Slagprovning', incorrectReasoning: 'Slagprovning är förstörande.' },
                    { text: 'Magnetpulverprovning', incorrectReasoning: null },
                    { text: 'Hårdhetsprovning (Brinell)', incorrectReasoning: 'Hårdhetsprovning (Brinell) gör ett intryck och är därför inte helt icke-förstörande i teorin.' }
                ],
                correctAnswer: 2,
                shortReasoning: 'Magnetpulverprovning skadar inte materialet.',
                longReasoning: 'Magnetpulverprovning är en icke-förstörande provningsmetod som används för att detektera ytfel på ferromagnetiska material utan att skada provobjektet.'
            },
            {
                question: 'Vilken egenskap beskriver ett materials motståndskraft mot nötning och slitage?',
                answers: [
                    { text: 'Hårdhet', incorrectReasoning: 'Hårdhet är motstånd mot intryck, inte direkt nötning.' },
                    { text: 'Slitstyrka', incorrectReasoning: null },
                    { text: 'Seghet', incorrectReasoning: 'Seghet är motstånd mot brott, inte nötning.' },
                    { text: 'Korrosionsmotstånd', incorrectReasoning: 'Korrosionsmotstånd är motstånd mot kemisk nedbrytning, inte nötning.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Slitstyrka definierar motståndskraft mot nötning.',
                longReasoning: 'Slitstyrka är den materialegenskap som beskriver hur väl ett material motstår nötning, slitage och abrasion när det utsätts för friktion mot en annan yta.'
            },
            {
                question: 'Vilken typ av stål används ofta i bärande konstruktioner och fartygsskrov på grund av god svetsbarhet och hållfasthet?',
                answers: [
                    { text: 'Verktygsstål', incorrectReasoning: 'Verktygsstål är inte optimalt för bärande konstruktioner.' },
                    { text: 'Konstruktionsstål', incorrectReasoning: null },
                    { text: 'Rostfritt stål', incorrectReasoning: 'Rostfritt stål är dyrare och inte alltid nödvändigt för grundläggande konstruktioner.' },
                    { text: 'Snabbstål', incorrectReasoning: 'Snabbstål är inte avsett för bärande konstruktioner.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Konstruktionsstål är lämpligt för bärande konstruktioner.',
                longReasoning: 'Konstruktionsstål är ett samlingsnamn för ståltyper som är utmärkta för bärande konstruktioner och fartygsskrov på grund av deras kombination av god svetsbarhet, hållfasthet och seghet, samt relativt låga kostnad.'
            },
            {
                question: 'Vilket av följande material är känt för sin höga dämpningsförmåga mot vibrationer och buller?',
                answers: [
                    { text: 'Stål', incorrectReasoning: 'Stål har inte samma dämpningsförmåga som gjutjärn.' },
                    { text: 'Gråjärn', incorrectReasoning: null },
                    { text: 'Aluminium', incorrectReasoning: 'Aluminium har inte samma dämpningsförmåga som gjutjärn.' },
                    { text: 'Plast', incorrectReasoning: 'Plast kan dämpa vibrationer, men gråjärn är känt för det inom metaller.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Gråjärn är känt för sin vibrationsdämpning.',
                longReasoning: 'Gråjärn är särskilt känt för sin höga dämpningsförmåga mot vibrationer och buller, vilket gör det lämpligt för applikationer där vibrationer och ljudabsorption är viktiga.'
            },
            {
                question: 'Vilken värmebehandlingsprocess används för att minska sprödheten hos härdat stål och öka segheten?',
                answers: [
                    { text: 'Härdning', incorrectReasoning: 'Härdning ökar sprödheten.' },
                    { text: 'Anlöpning', incorrectReasoning: null },
                    { text: 'Glödgning', incorrectReasoning: 'Glödgning gör stålet mjukare, men anlöpning är mer specifikt efter härdning.' },
                    { text: 'Normalisering', incorrectReasoning: 'Normalisering förbättrar kornstrukturen, men anlöpning är specifikt efter härdning.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Anlöpning minskar sprödhet efter härdning.',
                longReasoning: 'Anlöpning är den värmebehandlingsprocess som specifikt används efter härdning för att minska sprödheten och öka segheten hos stålet, vilket gör det mer lämpligt för praktisk användning.'
            },
            {
                question: 'Vilket av följande legeringsämnen förbättrar stålets motståndskraft mot slitage och nötning?',
                answers: [
                    { text: 'Nickel (Ni)', incorrectReasoning: 'Nickel förbättrar korrosionsmotstånd och seghet.' },
                    { text: 'Mangan (Mn)', incorrectReasoning: null },
                    { text: 'Krom (Cr)', incorrectReasoning: 'Krom förbättrar korrosionsmotstånd.' },
                    { text: 'Aluminium (Al)', incorrectReasoning: 'Aluminium är inte ett vanligt legeringsämne för att öka slitstyrkan i stål.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Mangan ökar slitstyrkan i stål.',
                longReasoning: 'Mangan (Mn) är ett legeringsämne som bidrar till att öka stålets hållfasthet och motståndskraft mot slitage och nötning, vilket förbättrar materialets livslängd under slitageförhållanden.'
            },
            {
                question: 'Vilken enhet används vanligtvis för att ange densitet?',
                answers: [
                    { text: 'MPa', incorrectReasoning: 'MPa är enhet för tryck eller hållfasthet.' },
                    { text: 'kg/dm³', incorrectReasoning: null },
                    { text: '°C', incorrectReasoning: '°C är enhet för temperatur.' },
                    { text: 'J', incorrectReasoning: 'J är enhet för energi.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'kg/dm³ är enhet för densitet.',
                longReasoning: 'Kilogram per kubikdecimeter (kg/dm³) är den vanligaste enheten för att ange densitet, vilket uttrycker massan per volymenhet av ett material.'
            },
            {
                question: 'Vilken egenskap hos stål påverkas mest av kolhalten?',
                answers: [
                    { text: 'Korrosionsmotstånd', incorrectReasoning: 'Korrosionsmotståndet påverkas mest av kromhalten.' },
                    { text: 'Hårdhet', incorrectReasoning: null },
                    { text: 'Värmeledningsförmåga', incorrectReasoning: 'Värmeledningsförmågan påverkas inte primärt av kolhalten.' },
                    { text: 'Densitet', incorrectReasoning: 'Densiteten påverkas inte nämnvärt av kolhalten inom stål.' }
                ],
                correctAnswer: 1,
                shortReasoning: 'Kolhalten är avgörande för stålets hårdhet.',
                longReasoning: 'Kolhalten i stål har den mest signifikanta inverkan på stålets hårdhet. Med ökande kolhalt ökar hårdheten, men det påverkar också andra egenskaper som seghet och svetsbarhet.'
            }
        ]
    },
    {
        name: "CNC Teknik Svarv",
        questions: [
                {
                  "question": "Vad står CNC för?",
                  "answers": [
                    {
                      "text": "Computer Numerical Control",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Central Network Control",
                      "incorrectReasoning": "CNC står för Computer Numerical Control, inte Central Network Control."
                    },
                    {
                      "text": "Calculated Number Code",
                      "incorrectReasoning": "CNC står för Computer Numerical Control, inte Calculated Number Code."
                    },
                    {
                      "text": "Creative New Computer",
                      "incorrectReasoning": "CNC står för Computer Numerical Control, inte Creative New Computer."
                    }
                  ],
                  "correctAnswer": 0,
                  "shortReasoning": "CNC är en förkortning för Computer Numerical Control.",
                  "longReasoning": "CNC är en förkortning för Computer Numerical Control, vilket beskriver ett datorsystem för att styra verkstadsmaskiner."
                },
                {
                  "question": "Vilken uppgift har en CNC-operatör?",
                  "answers": [
                    {
                      "text": "Att reparera CNC-maskiner.",
                      "incorrectReasoning": "Reparation av maskiner är mer serviceteknikerns uppgift."
                    },
                    {
                      "text": "Att programmera, förbereda och tillverka detaljer i CNC-maskiner.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Att designa nya produkter i CAD-program.",
                      "incorrectReasoning": "Designarbete görs oftast av konstruktörer eller designingenjörer."
                    },
                    {
                      "text": "Att sälja CNC-maskiner.",
                      "incorrectReasoning": "Försäljning av maskiner är inte operatörens uppgift."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "CNC-operatören arbetar med tillverkning i CNC-maskiner.",
                  "longReasoning": "En CNC-operatörs huvuduppgift är att utifrån ritningar programmera, förbereda och sedan tillverka detaljer i datorstyrda verktygsmaskiner som CNC-svarvar."
                },
                {
                  "question": "Nämn två styrsystem som boken 'CNC-Teknik - Svarv' fokuserar på.",
                  "answers": [
                    {
                      "text": "Fanuc och Heidenhain.",
                      "incorrectReasoning": "Heidenhain nämns inte i boken som ett huvudfokus."
                    },
                    {
                      "text": "Siemens och Mazak.",
                      "incorrectReasoning": "Mazak nämns inte i boken som ett huvudfokus."
                    },
                    {
                      "text": "Fanuc och Siemens.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Heidenhain och Mazak.",
                      "incorrectReasoning": "Varken Heidenhain eller Mazak är huvudfokus i boken."
                    }
                  ],
                  "correctAnswer": 2,
                  "shortReasoning": "Boken fokuserar på Fanuc och Siemens styrsystem.",
                  "longReasoning": "Boken 'CNC-Teknik - Svarv' utgår huvudsakligen från styrsystemen Fanuc 21T och Siemens 810/840D för att beskriva CNC-svarvning."
                },
                {
                  "question": "Vad menas med ISO-programmering inom CNC?",
                  "answers": [
                    {
                      "text": "Programmering med enbart siffror.",
                      "incorrectReasoning": "ISO-programmering använder både bokstäver och siffror."
                    },
                    {
                      "text": "Programmering enligt en internationell standard.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Programmering utan G-koder.",
                      "incorrectReasoning": "G-koder är centrala i ISO-programmering."
                    },
                    {
                      "text": "Programmering endast för ISO-certifierade maskiner.",
                      "incorrectReasoning": "ISO-programmering är inte begränsad till certifierade maskiner."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "ISO-programmering följer internationell standard.",
                  "longReasoning": "ISO-programmering innebär att man programmerar CNC-maskiner enligt en internationellt erkänd standard, vilket underlättar överförbarhet mellan olika maskintyper."
                },
                {
                  "question": "Nämn en fördel med ISO-programmering.",
                  "answers": [
                    {
                      "text": "Enklare att lära sig.",
                      "incorrectReasoning": "ISO-programmering kan vara mer komplex än dialogprogrammering."
                    },
                    {
                      "text": "Ger exakt kontroll över maskinrörelser.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Mindre risk för felprogrammering.",
                      "incorrectReasoning": "Felprogrammering är fortfarande möjligt."
                    },
                    {
                      "text": "Kräver ingen kunskap om G-koder.",
                      "incorrectReasoning": "Kunskap om G-koder är nödvändig."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "ISO-programmering ger detaljerad kontroll.",
                  "longReasoning": "En fördel med ISO-programmering är att operatören har exakt kontroll över maskinens rörelser och kan optimera programmen för specifika tillverkningsprocesser."
                },
                {
                  "question": "Vad är en G-kod i CNC-programmering?",
                  "answers": [
                    {
                      "text": "En kod för att starta och stoppa programmet.",
                      "incorrectReasoning": "Start och stopp styrs av M-koder."
                    },
                    {
                      "text": "En kod för förberedande funktioner som styr maskinens rörelser.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "En kod för att ange verktygsnummer.",
                      "incorrectReasoning": "Verktygsnummer anges med T-koder."
                    },
                    {
                      "text": "En kod för att ange spindelvarvtal.",
                      "incorrectReasoning": "Spindelvarvtal anges med S-koder."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "G-koder styr förberedande funktioner.",
                  "longReasoning": "G-koder är förberedande funktioner som styr hur CNC-maskinen ska arbeta, exempelvis med snabbförflyttning, linjär interpolering eller cirkulära rörelser."
                },
                {
                  "question": "Vad används M-koder till i CNC-programmering?",
                  "answers": [
                    {
                      "text": "Att styra maskinens rörelser.",
                      "incorrectReasoning": "Maskinens rörelser styrs av G-koder."
                    },
                    {
                      "text": "Att ange mått och toleranser.",
                      "incorrectReasoning": "Mått och toleranser anges i ritningen och programmeras med koordinater."
                    },
                    {
                      "text": "Att styra hjälpfunktioner som spindelstart och kylvätska.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Att ange verktygsnummer.",
                      "incorrectReasoning": "Verktygsnummer anges med T-koder."
                    }
                  ],
                  "correctAnswer": 2,
                  "shortReasoning": "M-koder styr hjälpfunktioner.",
                  "longReasoning": "M-koder används för att styra hjälpfunktioner i CNC-maskinen, som spindelstart, spindelstopp, verktygsbyte och start/stopp av kylvätska."
                },
                {
                  "question": "Vad är huvudspindelns funktion i en CNC-svarv?",
                  "answers": [
                    {
                      "text": "Att styra verktygsrevolvern.",
                      "incorrectReasoning": "Verktygsrevolvern styrs separat."
                    },
                    {
                      "text": "Att hålla och rotera arbetsstycket.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Att mata fram kylvätska.",
                      "incorrectReasoning": "Kylvätska matas fram genom separata system."
                    },
                    {
                      "text": "Att mäta detaljens dimensioner.",
                      "incorrectReasoning": "Mätning utförs av mätsystem, inte huvudspindeln."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Huvudspindeln roterar arbetsstycket.",
                  "longReasoning": "Huvudspindeln i en CNC-svarv är maskinens 'hjärta' och dess funktion är att hålla fast och rotera arbetsstycket under bearbetningen."
                },
                {
                  "question": "Varför är det viktigt med ett kretsloppstänk vid materialval?",
                  "answers": [
                    {
                      "text": "För att öka produktionshastigheten.",
                      "incorrectReasoning": "Produktionshastighet är inte direkt relaterat till kretsloppstänk."
                    },
                    {
                      "text": "För att minska miljöpåverkan och spara naturresurser.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "För att förenkla programmeringen av CNC-maskinen.",
                      "incorrectReasoning": "Programmering och materialval är separata aspekter."
                    },
                    {
                      "text": "För att minska behovet av operatörskunskap.",
                      "incorrectReasoning": "Operatörskunskap är fortfarande viktigt oavsett materialval."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Kretsloppstänk fokuserar på hållbarhet och miljö.",
                  "longReasoning": "Kretsloppstänk vid materialval är viktigt för att minska miljöpåverkan, använda naturliga råvaror med god tillgång och möjliggöra återanvändning genom återvinning."
                },
                {
                  "question": "Vad menas med 'nollpunktsförflyttning' i CNC-programmering?",
                  "answers": [
                    {
                      "text": "Att flytta maskinens ursprungspunkt till en mer praktisk position på arbetsstycket.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Att flytta verktygsrevolvern till en säker position.",
                      "incorrectReasoning": "Detta är verktygsväxlingspunkt, inte nollpunktsförflyttning."
                    },
                    {
                      "text": "Att nollställa alla maskinaxlar.",
                      "incorrectReasoning": "Nollställning av axlar är en separat operation."
                    },
                    {
                      "text": "Att ställa in spindelvarvtalet på noll.",
                      "incorrectReasoning": "Spindelvarvtal är inte relaterat till nollpunktsförflyttning."
                    }
                  ],
                  "correctAnswer": 0,
                  "shortReasoning": "Nollpunktsförflyttning flyttar origo till arbetsstycket.",
                  "longReasoning": "Nollpunktsförflyttning innebär att man flyttar koordinatsystemets origo från maskinens nollpunkt till en mer praktisk och lättprogrammerad position på arbetsstycket, oftast framkanten eller en annan definierad punkt."
                },
                {
                  "question": "Varför är det viktigt att begränsa spindelvarvtalet i CNC-program?",
                  "answers": [
                    {
                      "text": "För att minska ljudnivån.",
                      "incorrectReasoning": "Ljudnivån kan minskas, men det är inte huvudsyftet."
                    },
                    {
                      "text": "För att förhindra för höga varvtal som kan skada arbetsstycket eller maskinen.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "För att spara energi.",
                      "incorrectReasoning": "Energibesparing är en sekundär effekt, inte huvudsyftet."
                    },
                    {
                      "text": "För att förenkla programmeringen.",
                      "incorrectReasoning": "Programmeringen blir inte enklare av varvtalsbegränsning."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Varvtalsbegränsning skyddar maskin och detalj.",
                  "longReasoning": "Det är viktigt att begränsa spindelvarvtalet för att förhindra för höga varvtal som kan leda till centrifugalkrafter som minskar chuckens spännkraft eller överbelastar maskinen, särskilt vid bearbetning nära centrum."
                },
                {
                  "question": "Vad är 'verktygsväxlingspunkt' i CNC-programmering?",
                  "answers": [
                    {
                      "text": "Den punkt där verktyget mäter upp detaljens mått.",
                      "incorrectReasoning": "Mätning sker separat från verktygsväxling."
                    },
                    {
                      "text": "En säker position där verktyget kan bytas utan risk för kollision.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Den punkt där verktyget startar bearbetningen.",
                      "incorrectReasoning": "Startpunkten för bearbetning är inte verktygsväxlingspunkten."
                    },
                    {
                      "text": "Den punkt där programkörningen avslutas.",
                      "incorrectReasoning": "Programkörning avslutas vid programslut, inte verktygsväxlingspunkt."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Verktygsväxlingspunkt är en säker bytesposition.",
                  "longReasoning": "Verktygsväxlingspunkt är en förutbestämd säker position i maskinens arbetsområde dit verktyget förflyttas innan ett verktygsbyte utförs för att undvika kollisioner med detalj eller maskinkomponenter."
                },
                {
                  "question": "Vilka är de vanligaste förstörande provningsmetoderna som nämns i materialkunskapsdelen?",
                  "answers": [
                    {
                      "text": "Dragprovning och ultraljudsprovning.",
                      "incorrectReasoning": "Ultraljudsprovning är icke-förstörande."
                    },
                    {
                      "text": "Dragprovning och slagprovning.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Slagprovning och penetrantprovning.",
                      "incorrectReasoning": "Penetrantprovning är icke-förstörande."
                    },
                    {
                      "text": "Penetrantprovning och radiografi.",
                      "incorrectReasoning": "Både penetrantprovning och radiografi är icke-förstörande."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Drag- och slagprovning förstör provbiten.",
                  "longReasoning": "De vanligaste förstörande provningsmetoderna som nämns i materialkunskapsdelen är dragprovning och slagprovning, vilka båda innebär att provbiten förstörs under testet."
                },
                {
                  "question": "Vad är huvudsyftet med en dragprovning?",
                  "answers": [
                    {
                      "text": "Att mäta materialets hårdhet.",
                      "incorrectReasoning": "Hårdhet mäts med hårdhetsprovning."
                    },
                    {
                      "text": "Att mäta materialets hållfasthetsegenskaper som sträckgräns och brottgräns.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Att mäta materialets korrosionsmotstånd.",
                      "incorrectReasoning": "Korrosionsmotstånd mäts med korrosionsprovning."
                    },
                    {
                      "text": "Att mäta materialets värmeledningsförmåga.",
                      "incorrectReasoning": "Värmeledningsförmåga mäts med andra metoder."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Dragprovning mäter hållfasthet.",
                  "longReasoning": "Huvudsyftet med en dragprovning är att noggrant mäta och bestämma materialets hållfasthetsegenskaper, primärt sträckgräns, brottgräns och brottförlängning."
                },
                {
                  "question": "Vad är 'sträckgräns' inom materialprovning?",
                  "answers": [
                    {
                      "text": "Den maximala belastning materialet tål innan det går sönder.",
                      "incorrectReasoning": "Detta är brottgräns."
                    },
                    {
                      "text": "Den belastning materialet tål utan permanent deformation.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Förlängningen av materialet vid brott.",
                      "incorrectReasoning": "Detta är brottförlängning."
                    },
                    {
                      "text": "Den temperatur då materialet börjar smälta.",
                      "incorrectReasoning": "Detta är smältpunkt."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Sträckgräns är gränsen för permanent deformation.",
                  "longReasoning": "Sträckgränsen definieras som den belastning som ett material kan tåla utan att uppvisa en kvarstående (permanent) formförändring efter avlastning."
                },
                {
                  "question": "Vad är 'brottgräns' inom materialprovning?",
                  "answers": [
                    {
                      "text": "Den belastning som ger permanent deformation.",
                      "incorrectReasoning": "Detta är sträckgräns."
                    },
                    {
                      "text": "Den högsta belastning materialet tål innan det brister.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Förlängningen av materialet vid brott.",
                      "incorrectReasoning": "Detta är brottförlängning."
                    },
                    {
                      "text": "Den punkt då materialet börjar flyta.",
                      "incorrectReasoning": "Detta är inte brottgräns."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Brottgräns är den maximala belastningen.",
                  "longReasoning": "Brottgränsen är den högsta belastning som ett material tål innan det brister eller går sönder. Det representerar materialets maximala hållfasthet under dragbelastning."
                },
                {
                  "question": "Vad är 'brottförlängning' inom materialprovning?",
                  "answers": [
                    {
                      "text": "Den belastning som materialet tål innan det går sönder.",
                      "incorrectReasoning": "Detta är brottgräns."
                    },
                    {
                      "text": "Den belastning som ger permanent deformation.",
                      "incorrectReasoning": "Detta är sträckgräns."
                    },
                    {
                      "text": "Den procentuella förlängningen av materialet vid brott.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Den temperatur då materialet går sönder.",
                      "incorrectReasoning": "Detta är inte brottförlängning."
                    }
                  ],
                  "correctAnswer": 2,
                  "shortReasoning": "Brottförlängning är procentuell deformation vid brott.",
                  "longReasoning": "Brottförlängningen är den procentuella förlängningen av materialet i förhållande till dess ursprungliga längd när det brister under dragprovning. Det ger ett mått på materialets duktilitet."
                },
                {
                  "question": "Vad mäter man med en slagprovning?",
                  "answers": [
                    {
                      "text": "Materialets hårdhet.",
                      "incorrectReasoning": "Hårdhet mäts med hårdhetsprovning."
                    },
                    {
                      "text": "Materialets slagseghet.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Materialets draghållfasthet.",
                      "incorrectReasoning": "Draghållfasthet mäts med dragprovning."
                    },
                    {
                      "text": "Materialets elasticitetsmodul.",
                      "incorrectReasoning": "Elasticitetsmodul mäts med andra metoder."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Slagprovning mäter slagseghet.",
                  "longReasoning": "Slagprovning är en metod för att mäta materialets slagseghet, vilket är dess förmåga att absorbera energi och motstå sprödbrott vid snabba, dynamiska belastningar, som slag."
                },
                {
                  "question": "Vad är 'slagseghet'?",
                  "answers": [
                    {
                      "text": "Materialets förmåga att motstå slitage.",
                      "incorrectReasoning": "Detta är slitstyrka."
                    },
                    {
                      "text": "Materialets förmåga att motstå slag utan att brista.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Materialets förmåga att leda elektricitet.",
                      "incorrectReasoning": "Detta är elektrisk ledningsförmåga."
                    },
                    {
                      "text": "Materialets förmåga att motstå korrosion.",
                      "incorrectReasoning": "Detta är korrosionsmotstånd."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Slagseghet är motståndskraft mot slag.",
                  "longReasoning": "Slagseghet är ett materials förmåga att motstå slagbelastning och absorbera energi utan att brista. Det är ett mått på materialets förmåga att hantera plötsliga och kraftiga stötar."
                },
                {
                  "question": "Vilken icke-förstörande provningsmetod använder röntgenstrålar?",
                  "answers": [
                    {
                      "text": "Magnetpulverprovning.",
                      "incorrectReasoning": "Magnetpulverprovning använder magnetfält och järnpulver."
                    },
                    {
                      "text": "Penetrantprovning.",
                      "incorrectReasoning": "Penetrantprovning använder färgad vätska."
                    },
                    {
                      "text": "Ultraljudsprovning.",
                      "incorrectReasoning": "Ultraljudsprovning använder ljudvågor."
                    },
                    {
                      "text": "Radiografi.",
                      "incorrectReasoning": null
                    }
                  ],
                  "correctAnswer": 3,
                  "shortReasoning": "Radiografi använder röntgenstrålar.",
                  "longReasoning": "Radiografi är en icke-förstörande provningsmetod som använder röntgenstrålar för att undersöka inre strukturer och defekter i material utan att skada det."
                },
                {
                  "question": "Vad är syftet med standardisering inom teknik och industri?",
                  "answers": [
                    {
                      "text": "Att försvåra kommunikation mellan företag.",
                      "incorrectReasoning": "Standardisering syftar till att underlätta kommunikation."
                    },
                    {
                      "text": "Att säkerställa utbytbarhet, kvalitet och säkerhet hos produkter och metoder.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Att öka kostnaderna för tillverkning.",
                      "incorrectReasoning": "Standardisering syftar till att minska kostnader på lång sikt."
                    },
                    {
                      "text": "Att begränsa innovation och utveckling.",
                      "incorrectReasoning": "Standardisering underlättar snarare innovation genom samarbete och erfarenhetsutbyte."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Standardisering säkerställer kvalitet och utbytbarhet.",
                  "longReasoning": "Syftet med standardisering är att skapa gemensamma regler och riktlinjer för att säkerställa utbytbarhet, funktion, kvalitet, säkerhet och underlätta tekniskt samarbete och kommunikation mellan företag."
                },
                {
                  "question": "Vad betyder SS-EN standard?",
                  "answers": [
                    {
                      "text": "Svensk Standard.",
                      "incorrectReasoning": "SS-EN indikerar både svensk och europeisk standard."
                    },
                    {
                      "text": "Svensk standard som också är europeisk standard.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Europeisk standard.",
                      "incorrectReasoning": "SS-EN indikerar att den europeiska standarden är antagen som svensk standard."
                    },
                    {
                      "text": "Internationell standard.",
                      "incorrectReasoning": "Internationell standard betecknas ISO."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "SS-EN är svensk antagning av europeisk standard.",
                  "longReasoning": "SS-EN betecknar en europeisk standard (EN) som har antagits och fastställts som svensk standard (SS), vilket innebär att den är gällande i både Sverige och Europa."
                },
                {
                  "question": "Nämn tre viktiga egenskaper hos material som är relevanta för CNC-bearbetning.",
                  "answers": [
                    {
                      "text": "Färg, lukt och smak.",
                      "incorrectReasoning": "Dessa egenskaper är irrelevanta för CNC-bearbetning."
                    },
                    {
                      "text": "Hårdhet, skärbarhet och värmebeständighet.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Densitet, smältpunkt och magnetism.",
                      "incorrectReasoning": "Dessa är fysikaliska egenskaper, men inte de mest direkt relevanta för bearbetning jämfört med mekaniska och bearbetningsegenskaper."
                    },
                    {
                      "text": "Korrosionsmotstånd, slitstyrka och ytbehandlingsbarhet.",
                      "incorrectReasoning": "Dessa är viktiga egenskaper, men skärbarhet och hårdhet är mer direkt relevanta för själva bearbetningsprocessen."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Hårdhet, skärbarhet och värmebeständighet påverkar bearbetningen direkt.",
                  "longReasoning": "Viktiga materialegenskaper för CNC-bearbetning inkluderar hårdhet (påverkar verktygsslitage och bearbetningskraft), skärbarhet (påverkar bearbetningsprocessens effektivitet och ytjämnhet) och värmebeständighet (viktigt för att hantera värmeutvecklingen vid höga skärhastigheter)."
                },
                {
                  "question": "Vad är 'densitet' för ett material?",
                  "answers": [
                    {
                      "text": "Ett mått på materialets färg.",
                      "incorrectReasoning": "Densitet har inget med färg att göra."
                    },
                    {
                      "text": "Ett mått på materialets täthet, massa per volymenhet.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Ett mått på materialets hållfasthet.",
                      "incorrectReasoning": "Hållfasthet är ett mått på hur starkt ett material är, inte dess täthet."
                    },
                    {
                      "text": "Ett mått på materialets hårdhet.",
                      "incorrectReasoning": "Hårdhet är ett mått på motståndskraft mot intryck, inte täthet."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Densitet är massa per volym.",
                  "longReasoning": "Densitet är ett fysikaliskt begrepp som definierar ett materials täthet, det vill säga hur mycket massa materialet har per volymenhet. Det mäts vanligtvis i kg/dm³."
                },
                {
                  "question": "Vilken enhet används vanligen för att ange densitet?",
                  "answers": [
                    {
                      "text": "Newton (N).",
                      "incorrectReasoning": "Newton är enheten för kraft."
                    },
                    {
                      "text": "Pascal (Pa).",
                      "incorrectReasoning": "Pascal är enheten för tryck."
                    },
                    {
                      "text": "Kilogram per kubikdecimeter (kg/dm³).",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Meter per sekund (m/s).",
                      "incorrectReasoning": "Meter per sekund är enheten för hastighet."
                    }
                  ],
                  "correctAnswer": 2,
                  "shortReasoning": "Densitet mäts i kg/dm³.",
                  "longReasoning": "Densitet anges vanligen i enheten kilogram per kubikdecimeter (kg/dm³), vilket beskriver massan i kilogram för varje kubikdecimeter volym."
                },
                {
                  "question": "Vad är 'smältpunkt' för ett material?",
                  "answers": [
                    {
                      "text": "Den temperatur då materialet blir som hårdast.",
                      "incorrectReasoning": "Hårdhet och smältpunkt är inte direkt relaterade."
                    },
                    {
                      "text": "Den temperatur då materialet övergår från fast till flytande form.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Den temperatur då materialet börjar brinna.",
                      "incorrectReasoning": "Detta är brandpunkt, inte smältpunkt."
                    },
                    {
                      "text": "Den temperatur då materialet förlorar sin hållfasthet.",
                      "incorrectReasoning": "Material kan förlora hållfasthet långt innan smältpunkten."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Smältpunkt är övergången från fast till flytande.",
                  "longReasoning": "Smältpunkt är den specifika temperatur vid vilken ett material övergår från fast form till flytande form. Det är en viktig fysikalisk egenskap som påverkar materialets bearbetbarhet och användning vid höga temperaturer."
                },
                {
                  "question": "Varför är värmeutvidgning en viktig faktor att beakta vid CNC-bearbetning?",
                  "answers": [
                    {
                      "text": "För att minska verktygsslitage.",
                      "incorrectReasoning": "Värmeutvidgning påverkar inte verktygsslitage direkt."
                    },
                    {
                      "text": "För att säkerställa måttnoggrannhet.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "För att öka skärhastigheten.",
                      "incorrectReasoning": "Värmeutvidgning begränsar snarare höga skärhastigheter."
                    },
                    {
                      "text": "För att göra materialet starkare.",
                      "incorrectReasoning": "Värmeutvidgning påverkar inte materialets styrka direkt."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Värmeutvidgning påverkar måttnoggrannheten.",
                  "longReasoning": "Värmeutvidgning är viktigt att beakta eftersom temperaturförändringar under CNC-bearbetning kan orsaka att materialet expanderar eller kontraherar, vilket kan leda till felaktiga mått och påverka måttnoggrannheten hos den färdiga detaljen."
                },
                {
                  "question": "Vilket material har generellt sett bäst värmeledningsförmåga av de listade?",
                  "answers": [
                    {
                      "text": "Stål.",
                      "incorrectReasoning": "Stål har sämre värmeledningsförmåga än koppar och aluminium."
                    },
                    {
                      "text": "Aluminium.",
                      "incorrectReasoning": "Aluminium har bra värmeledningsförmåga, men inte bäst av de listade."
                    },
                    {
                      "text": "Koppar.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Plast.",
                      "incorrectReasoning": "Plast är en dålig värmeledare."
                    }
                  ],
                  "correctAnswer": 2,
                  "shortReasoning": "Koppar är en utmärkt värmeledare.",
                  "longReasoning": "Koppar har den högsta värmeledningsförmågan av de listade materialen och används ofta i applikationer som kräver effektiv värmeöverföring, som värmeväxlare och kylare."
                },
                {
                  "question": "Vad menas med 'korrosionsmotstånd' hos ett material?",
                  "answers": [
                    {
                      "text": "Materialets förmåga att motstå slitage och nötning.",
                      "incorrectReasoning": "Detta är slitstyrka."
                    },
                    {
                      "text": "Materialets förmåga att motstå kemisk nedbrytning och rost.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Materialets förmåga att leda elektricitet.",
                      "incorrectReasoning": "Detta är elektrisk ledningsförmåga."
                    },
                    {
                      "text": "Materialets förmåga att motstå höga temperaturer.",
                      "incorrectReasoning": "Detta är värmebeständighet."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Korrosionsmotstånd är motståndskraft mot rost och kemikalier.",
                  "longReasoning": "Korrosionsmotstånd är ett materials förmåga att motstå nedbrytning orsakad av kemiska reaktioner med omgivningen, såsom rostbildning på stål eller angrepp av syror och alkalier."
                },
                {
                  "question": "Vad är 'slitstyrka' hos ett material?",
                  "answers": [
                    {
                      "text": "Materialets förmåga att motstå korrosion.",
                      "incorrectReasoning": "Detta är korrosionsmotstånd."
                    },
                    {
                      "text": "Materialets förmåga att motstå nötning och mekaniskt slitage.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Materialets förmåga att leda värme.",
                      "incorrectReasoning": "Detta är värmeledningsförmåga."
                    },
                    {
                      "text": "Materialets förmåga att motstå höga belastningar.",
                      "incorrectReasoning": "Detta är hållfasthet."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Slitstyrka är motståndskraft mot nötning och slitage.",
                  "longReasoning": "Slitstyrka beskriver ett materials förmåga att motstå nötning, slitage och abrasion som uppstår vid friktion och kontakt med andra materialytor. Det är viktigt för komponenter som utsätts för mekanisk påverkan och rörelse."
                },
                {
                  "question": "Vad är syftet med materialprovning inom verkstadsindustrin?",
                  "answers": [
                    {
                      "text": "Att förbättra materialets utseende.",
                      "incorrectReasoning": "Materialprovning fokuserar på tekniska egenskaper, inte utseende."
                    },
                    {
                      "text": "Att säkerställa att materialet uppfyller kraven på hållfasthet och andra egenskaper.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Att minska materialkostnaderna.",
                      "incorrectReasoning": "Materialprovning ökar inte kostnaderna direkt, snarare indirekt genom kvalitetskontroll."
                    },
                    {
                      "text": "Att göra materialet lättare att bearbeta.",
                      "incorrectReasoning": "Materialprovning påverkar inte bearbetbarheten direkt."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Materialprovning säkerställer kvalitet och hållfasthet.",
                  "longReasoning": "Syftet med materialprovning är att verifiera att ett material uppfyller de specificerade kraven och standarderna för dess mekaniska och fysikaliska egenskaper, särskilt hållfasthet, innan det används i produktion eller i färdiga produkter."
                },
                {
                  "question": "Vilken typ av provning ger information om sträckgräns, brottgräns och brottförlängning?",
                  "answers": [
                    {
                      "text": "Slagprovning.",
                      "incorrectReasoning": "Slagprovning mäter slagseghet."
                    },
                    {
                      "text": "Hårdhetsprovning.",
                      "incorrectReasoning": "Hårdhetsprovning mäter hårdhet."
                    },
                    {
                      "text": "Dragprovning.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Ultraljudsprovning.",
                      "incorrectReasoning": "Ultraljudsprovning detekterar defekter, inte hållfasthetsegenskaper."
                    }
                  ],
                  "correctAnswer": 2,
                  "shortReasoning": "Dragprovning mäter sträckgräns, brottgräns och brottförlängning.",
                  "longReasoning": "Dragprovning är specifikt utformad för att mäta materialets draghållfasthetsegenskaper, inklusive sträckgräns, brottgräns och brottförlängning, genom att dra isär en provbit tills den brister."
                },
                {
                  "question": "Vad är en 'legering' i materialteknik?",
                  "answers": [
                    {
                      "text": "En ren metall i dess mest naturliga form.",
                      "incorrectReasoning": "Legeringar är inte rena metaller."
                    },
                    {
                      "text": "En blandning av två eller flera metaller, eller en metall och andra grundämnen.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "En typ av plastmaterial som imiterar metall.",
                      "incorrectReasoning": "Legeringar är metalliska material, inte plaster."
                    },
                    {
                      "text": "En metod för att ytbehandla metaller.",
                      "incorrectReasoning": "Legeringar är själva materialet, inte en ytbehandlingsmetod."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Legeringar är blandningar av metaller.",
                  "longReasoning": "En legering är en metallisk substans som består av en blandning av två eller flera grundämnen, varav minst ett är en metall. Syftet med legering är att förbättra eller modifiera metallernas egenskaper."
                },
                {
                  "question": "Varför legerar man metaller?",
                  "answers": [
                    {
                      "text": "För att göra dem billigare att tillverka.",
                      "incorrectReasoning": "Legeringar är inte alltid billigare, ibland tvärtom."
                    },
                    {
                      "text": "För att förbättra eller ändra deras egenskaper som hållfasthet, korrosionsmotstånd eller bearbetbarhet.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "För att göra dem tyngre.",
                      "incorrectReasoning": "Legeringar kan både öka och minska vikten beroende på ingående ämnen."
                    },
                    {
                      "text": "För att göra dem mer sällsynta och värdefulla.",
                      "incorrectReasoning": "Legeringar gör inte metaller mer sällsynta."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Legeringar förbättrar materialegenskaper.",
                  "longReasoning": "Metaller legeras för att förbättra deras egenskaper, såsom ökad hållfasthet, bättre korrosionsmotstånd, ökad hårdhet, förbättrad bearbetbarhet eller andra specifika egenskaper som är önskvärda för en viss tillämpning."
                },
                {
                  "question": "Ge ett exempel på en vanlig legering.",
                  "answers": [
                    {
                      "text": "Aluminiumoxid.",
                      "incorrectReasoning": "Aluminiumoxid är en kemisk förening, inte en legering."
                    },
                    {
                      "text": "Mässing.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Polyeten.",
                      "incorrectReasoning": "Polyeten är en plast, inte en metallisk legering."
                    },
                    {
                      "text": "Keramik.",
                      "incorrectReasoning": "Keramik är inte en metallisk legering."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Mässing är en legering av koppar och zink.",
                  "longReasoning": "Mässing är en vanlig legering som består av koppar och zink. Andra vanliga exempel inkluderar stål (järn och kol) och brons (koppar och tenn)."
                },
                {
                  "question": "Vad är 'hårdmetall' för typ av material?",
                  "answers": [
                    {
                      "text": "En typ av härdat stål.",
                      "incorrectReasoning": "Hårdmetall är inte bara härdat stål, utan en komposit."
                    },
                    {
                      "text": "En komposit bestående av hårda metallkarbider bundna i en metallmatris, oftast kobolt.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "En typ av keramiskt material med extrem hårdhet.",
                      "incorrectReasoning": "Hårdmetall är metalliskt, inte keramiskt."
                    },
                    {
                      "text": "En legering av aluminium och titan för hög hållfasthet.",
                      "incorrectReasoning": "Hårdmetall är inte baserad på aluminium eller titan som huvudkomponenter."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Hårdmetall är en metallkarbidkomposit.",
                  "longReasoning": "Hårdmetall är en kompositmaterial som består av extremt hårda metallkarbider (vanligen volframkarbid) som är inbäddade i en metallmatris, oftast kobolt. Detta ger materialet dess unika kombination av extrem hårdhet och slitstyrka."
                },
                {
                  "question": "Vad är den primära användningen för hårdmetall?",
                  "answers": [
                    {
                      "text": "Konstruktionsmaterial i byggindustrin.",
                      "incorrectReasoning": "Hårdmetall är för sprött och dyrt för allmänna konstruktioner."
                    },
                    {
                      "text": "Skärverktyg för bearbetning av metall och andra material.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Ytbeläggning för att skydda mot korrosion.",
                      "incorrectReasoning": "Hårdmetall är inte primärt en ytbeläggning, utan ett bulkmaterial."
                    },
                    {
                      "text": "Elektriska ledare i högspänningsledningar.",
                      "incorrectReasoning": "Hårdmetall är inte en bra elektrisk ledare."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Hårdmetall används främst i skärverktyg.",
                  "longReasoning": "Hårdmetall används primärt för tillverkning av skärverktyg och slitdelar på grund av sin exceptionella hårdhet och slitstyrka. Exempel inkluderar skärplattor för svarvning, fräsning, borrning och gängning."
                },
                {
                  "question": "Vad är 'snabbstål' (HSS)?",
                  "answers": [
                    {
                      "text": "En typ av plastmaterial med hög hållfasthet.",
                      "incorrectReasoning": "Snabbstål är en metallisk legering, inte plast."
                    },
                    {
                      "text": "En legering av stål som behåller sin hårdhet vid höga temperaturer och används för skärverktyg.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "En typ av keramiskt material för höghastighetsapplikationer.",
                      "incorrectReasoning": "Snabbstål är metalliskt, inte keramiskt."
                    },
                    {
                      "text": "En benämning på stål som kan härdas mycket snabbt.",
                      "incorrectReasoning": "Snabbstål kan härdas, men namnet syftar på dess förmåga att skära vid höga hastigheter."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Snabbstål är värmebeständigt skärverktygsmaterial.",
                  "longReasoning": "Snabbstål (HSS - High Speed Steel) är en legering av stål som är speciellt framtagen för att behålla sin hårdhet även vid höga temperaturer som uppstår vid höghastighetsbearbetning. Det används ofta i verktyg som borrar, fräsar och svarvstål."
                },
                {
                  "question": "Varför är kylning viktigt vid användning av skärverktyg av snabbstål (HSS)?",
                  "answers": [
                    {
                      "text": "För att öka materialets hårdhet.",
                      "incorrectReasoning": "Kylning påverkar inte materialets hårdhet direkt."
                    },
                    {
                      "text": "För att förhindra att verktyget överhettas och tappar sin hårdhet.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "För att förbättra ytfinishen.",
                      "incorrectReasoning": "Kylning kan förbättra ytfinish, men det primära syftet är att skydda verktyget."
                    },
                    {
                      "text": "För att minska friktionen mellan verktyg och arbetsstycke.",
                      "incorrectReasoning": "Kylning minskar friktionen, men huvudsyftet är att skydda verktyget."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Kylning skyddar snabbstålsverktyg från överhettning.",
                  "longReasoning": "Kylning är avgörande vid användning av snabbstålverktyg eftersom friktionsvärmen vid höga skärhastigheter kan snabbt överhetta verktyget och leda till att det tappar sin hårdhet och blir oanvändbart. Kylning hjälper till att leda bort värmen och skydda verktyget."
                },
                {
                  "question": "Vilket provningsmetod används för att bestämma ett materials förmåga att motstå slagbelastning?",
                  "answers": [
                    {
                      "text": "Dragprovning.",
                      "incorrectReasoning": "Dragprovning mäter draghållfasthet."
                    },
                    {
                      "text": "Hårdhetsprovning.",
                      "incorrectReasoning": "Hårdhetsprovning mäter hårdhet."
                    },
                    {
                      "text": "Slagprovning.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Penetrantprovning.",
                      "incorrectReasoning": "Penetrantprovning detekterar ytfel."
                    }
                  ],
                  "correctAnswer": 2,
                  "shortReasoning": "Slagprovning mäter slagseghet.",
                  "longReasoning": "Slagprovning är den provningsmetod som används för att bestämma ett materials förmåga att motstå slagbelastning, vilket kallas slagseghet. Provet innebär att en provbit utsätts för ett snabbt slag från en pendelhammare."
                },
                {
                  "question": "Vilken provningsmetod används för att upptäcka ytfel, som sprickor, på metalliska komponenter?",
                  "answers": [
                    {
                      "text": "Dragprovning.",
                      "incorrectReasoning": "Dragprovning är förstörande och mäter inte ytfel."
                    },
                    {
                      "text": "Slagprovning.",
                      "incorrectReasoning": "Slagprovning är förstörande och mäter inte ytfel."
                    },
                    {
                      "text": "Magnetpulverprovning eller penetrantprovning.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "Hårdhetsprovning.",
                      "incorrectReasoning": "Hårdhetsprovning mäter hårdhet, inte ytfel."
                    }
                  ],
                  "correctAnswer": 2,
                  "shortReasoning": "Magnetpulver- och penetrantprovning detekterar ytfel.",
                  "longReasoning": "Magnetpulverprovning (för ferromagnetiska material) och penetrantprovning (för de flesta material) är icke-förstörande provningsmetoder som används för att upptäcka ytfel, som sprickor, på metalliska komponenter."
                },
                {
                  "question": "Vad är en 'legering'?",
                  "answers": [
                    {
                      "text": "En ren metall.",
                      "incorrectReasoning": "Legeringar är inte rena metaller."
                    },
                    {
                      "text": "En blandning av två eller flera metaller, eller metall och icke-metalliska ämnen.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "En typ av plastmaterial.",
                      "incorrectReasoning": "Legeringar är metalliska material."
                    },
                    {
                      "text": "Ett keramiskt material.",
                      "incorrectReasoning": "Legeringar är metalliska material."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Legeringar är blandningar av metaller och andra ämnen.",
                  "longReasoning": "En legering är en metallisk substans som är sammansatt av två eller flera grundämnen, varav minst ett är en metall. Syftet med legering är att modifiera eller förbättra de ursprungliga metallernas egenskaper."
                },
                {
                  "question": "Varför legerar man metaller?",
                  "answers": [
                    {
                      "text": "För att öka densiteten.",
                      "incorrectReasoning": "Legeringar kan både öka och minska densiteten."
                    },
                    {
                      "text": "För att förbättra specifika egenskaper som hårdhet, hållfasthet eller korrosionsmotstånd.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "För att göra metaller mer sällsynta.",
                      "incorrectReasoning": "Legeringar gör inte metaller mer sällsynta."
                    },
                    {
                      "text": "För att minska materialets smältpunkt.",
                      "incorrectReasoning": "Smältpunkten kan både minska och öka beroende på legeringsämnen."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Legeringar optimerar materialegenskaper.",
                  "longReasoning": "Metaller legeras för att specifikt förbättra eller modifiera deras egenskaper, såsom att öka hållfastheten, förbättra korrosionsmotståndet, öka hårdheten eller förbättra bearbetbarheten, beroende på den avsedda användningen."
                },
                {
                  "question": "Vad är 'stål' för material?",
                  "answers": [
                    {
                      "text": "En ren metall.",
                      "incorrectReasoning": "Stål är inte en ren metall."
                    },
                    {
                      "text": "En legering av järn och kol, med kolhalten oftast under 2%.",
                      "incorrectReasoning": null
                    },
                    {
                      "text": "En typ av plastmaterial som imiterar metall.",
                      "incorrectReasoning": "Stål är metalliskt, inte plast."
                    },
                    {
                      "text": "Ett keramiskt material med hög hållfasthet.",
                      "incorrectReasoning": "Stål är metalliskt, inte keramiskt."
                    }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Stål är en järn-kollegering.",
                  "longReasoning": "Stål är en legering som huvudsakligen består av järn och kol, där kolhalten vanligtvis är mindre än 2%. Kol är det viktigaste legeringsämnet som ger stål dess önskvärda egenskaper."
                },
                {
                  "question": "Vilket legeringsämne är huvudsakligen ansvarigt för att öka hårdheten i stål?",
                  "answers": [
                    {
                      "text": "Krom.",
                      "incorrectReasoning": "Krom ökar främst korrosionsmotstånd."
                    },
                    {
                      "text": "Nickel.",
                      "incorrectReasoning": "Nickel ökar främst seghet och korrosionsmotstånd."
                    },
                    {
                      "text": "Mangan.",
                      "incorrectReasoning": "Mangan ökar hållfasthet och slitstyrka."
                    },
                    {
                      "text": "Kol.",
                      "incorrectReasoning": null
                    }
                  ],
                  "correctAnswer": 3,
                  "shortReasoning": "Kol ökar hårdheten i stål.",
                  "longReasoning": "Kol är det huvudsakliga legeringsämnet som ökar hårdheten i stål. Genom att kontrollera kolhalten kan man styra stålets hårdhet, men även andra egenskaper som seghet och svetsbarhet påverkas."
                },
                {
                  "question": "Vilket legeringsämne ger rostfritt stål dess korrosionsbeständiga egenskaper?",
                  "answers": [
                    {
                      "text": "Mangan.",
                      "incorrectReasoning": "Mangan ökar inte rostskyddet."
                    },
                    {
                      "text": "Kol.",
                      "incorrectReasoning": "Kol ökar inte rostskyddet."
                    },
                    {
                      "text": "Kisel.",
                      "incorrectReasoning": "Kisel ökar inte rostskyddet."
                    },
                    {
                      "text": "Krom.",
                      "incorrectReasoning": null
                    }
                  ],
                  "correctAnswer": 3,
                  "shortReasoning": "Krom ger rostskydd.",
                  "longReasoning": "Krom är det legeringsämne som ger rostfritt stål dess korrosionsbeständiga egenskaper. Rostfritt stål måste innehålla minst 12% krom för att räknas som rostfritt."
                },
                {
                  "question": "Vad är 'konstruktionsstål'?",
                      "answers": [
                          { "text": "Stål avsett för verktyg.", "incorrectReasoning": "Konstruktionsstål är inte primärt för verktyg." },
                          { "text": "En samlingsterm för olika ståltyper med god svetsbarhet och hållfasthet, avsedda för byggnads- och maskinkonstruktioner.", "incorrectReasoning": null },
                          { "text": "Stål med extremt hög kolhalt för maximal hårdhet.", "incorrectReasoning": "Konstruktionsstål har relativt låg kolhalt." },
                          { "text": "Stål som är olämpligt för svetsning.", "incorrectReasoning": "Konstruktionsstål är ofta svetsbart." }
                      ],
                      "correctAnswer": 1,
                      "shortReasoning": "Konstruktionsstål är för bygg och maskin.",
                      "longReasoning": "Konstruktionsstål är en bred kategori av stål som används för bärande konstruktioner, maskindelar och liknande applikationer. De kännetecknas av god svetsbarhet, hållfasthet och formbarhet."
                  },
                  {
                      "question": "Vad är 'verktygsstål'?",
                      "answers": [
                          { "text": "Samma sak som konstruktionsstål.", "incorrectReasoning": "Verktygsstål har andra egenskaper." },
                          { "text": "Stål som är avsett för tillverkning av verktyg, med hög hårdhet och slitstyrka.", "incorrectReasoning": null },
                          { "text": "Stål som är lätt att bearbeta och forma, men inte särskilt hårt.", "incorrectReasoning": "Verktygsstål ska vara hårt och slitstarkt." },
                          { "text": "Stål med mycket låg kolhalt.", "incorrectReasoning": "Verktygsstål har högre kolhalt än konstruktionsstål." }
                      ],
                      "correctAnswer": 1,
                      "shortReasoning": "Verktygsstål är för verktyg.",
                      "longReasoning": "Verktygsstål är stål som är speciellt utformade för tillverkning av verktyg. De kännetecknas av hög hårdhet, slitstyrka, eggskärpa och seghet, och har generellt högre kolhalt än konstruktionsstål."
                  },
                  {
                      "question": "Vad är 'rostfritt stål'?",
                      "answers": [
                          { "text": "Stål som inte innehåller järn.", "incorrectReasoning": "Rostfritt stål innehåller järn." },
                          { "text": "Stål som innehåller minst 12% krom, vilket ger det korrosionsbeständighet.", "incorrectReasoning": null },
                          { "text": "Stål som är helt omöjligt att rosta.", "incorrectReasoning": "Rostfritt stål kan rosta under vissa förhållanden." },
                          { "text": "Stål som är särskilt lätt att svetsa.", "incorrectReasoning": "Svetsbarheten varierar beroende på typ av rostfritt stål." }
                      ],
                      "correctAnswer": 1,
                      "shortReasoning": "Rostfritt stål har hög kromhalt för rostskydd.",
                      "longReasoning": "Rostfritt stål är en kategori av stål som är legerade med minst 12% krom, vilket ger dem ett avsevärt förbättrat korrosionsmotstånd jämfört med olegerat stål. De kan också innehålla andra legeringsämnen som nickel och molybden."
                  },
                  {
                      "question": "Vad är 'gjutstål'?",
                      "answers": [
                          { "text": "Stål som används för smide.", "incorrectReasoning": "Gjutstål är för gjutning, inte smide." },
                          { "text": "Stål som är avsett för gjutning av detaljer.", "incorrectReasoning": null },
                          { "text": "Stål med extremt låg smältpunkt.", "incorrectReasoning": "Gjutstål har liknande smältpunkt som annat stål." },
                          { "text": "Stål som är omöjligt att härda.", "incorrectReasoning": "Gjutstål kan härdas." }
                      ],
                      "correctAnswer": 1,
                      "shortReasoning": "Gjutstål är för gjutgods.",
                      "longReasoning": "Gjutstål är en ståltyp som är speciellt anpassad för gjutning. De har en sammansättning som ger bra flytbarhet och fyllförmåga i gjutformen, och är avsedda för tillverkning av gjutna komponenter."
                  },
        ],
    },
    {
      name: "Arbetsmiljö och säkerhet",
      source: "./pdf/Arbetsmiljö och säkerhet - Faktabok.pdf",
      questions: [
        {
            "question": "Vad ingår i begreppet miljö enligt texten?",
            "answers": [
                { "text": "Endast den fysiska omgivningen.", "incorrectReasoning": "Miljöbegreppet är bredare än så." },
                { "text": "Studiemiljön/arbetsmiljön och miljön där vi bor, lokalt och globalt.", "incorrectReasoning": null },
                { "text": "Endast den globala miljön.", "incorrectReasoning": "Miljöbegreppet inkluderar även den lokala miljön." },
                { "text": "Endast den psykiska hälsan.", "incorrectReasoning": "Miljöbegreppet inkluderar både den fysiska och psykiska hälsan." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Miljöbegreppet omfattar både arbetsplatsen och vår omgivande miljö.",
            "longReasoning": "Enligt texten inkluderar begreppet 'miljö' både studiemiljön/arbetsmiljön (i skolan och på framtida arbetsplatser) och den miljö där vi bor, både lokalt och globalt. Det handlar alltså om en bred definition."
        },
        {
            "question": "Varför är arbetsmiljö och säkerhet viktiga ämnen?",
            "answers": [
              { "text": "För att de ökar företagens vinster.", "incorrectReasoning": "Även om en bra arbetsmiljö indirekt kan bidra till ökad lönsamhet, är det inte det primära skälet." },
              { "text": "För att de minskar risken för olyckor, skador och sjukdomar.", "incorrectReasoning": null },
              { "text": "För att det är ett krav från eleverna.", "incorrectReasoning": "Även om elevers krav är viktiga, är lagstiftning och mänskligt välmående centrala skäl." },
              { "text": "För att de gör arbetet enklare.", "incorrectReasoning": "En bra arbetsmiljö kan göra arbetet lättare, men det är inte det huvudsakliga syftet." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Dålig arbetsmiljö kan leda till skador, sjukdom och lidande.",
            "longReasoning": "Arbetsmiljö och säkerhet är viktiga ämnen eftersom de syftar till att förebygga olyckor, skador och sjukdomar. En dålig arbetsmiljö kan leda till både fysiskt och psykiskt lidande för individer, och medföra stora kostnader för både individen, företaget och samhället."
        },
        {
            "question": "Vilka drabbas av en dålig arbetsmiljö?",
            "answers": [
              { "text": "Endast den anställde.", "incorrectReasoning": "Även företaget och samhället påverkas." },
              { "text": "Endast företaget.", "incorrectReasoning": "Även den anställde och samhället påverkas." },
              { "text": "Den anställde, företaget och samhället.", "incorrectReasoning": null },
              { "text": "Endast samhället.", "incorrectReasoning": "Även den anställde och företaget påverkas." }
            ],
            "correctAnswer": 2,
            "shortReasoning": "Alla drabbas; individen, företaget och samhället.",
            "longReasoning": "En dålig arbetsmiljö drabbar alla. Den anställde riskerar skador och sjukdom. Företaget drabbas av kostnader för sjukskrivningar, produktionsbortfall och eventuella skadestånd. Samhället belastas av kostnader för vård, rehabilitering och sjukpenning."
        },
        {
            "question": "Nämn tre typer av risker i arbetsmiljön.",
            "answers": [
              { "text": "Dålig belysning, höga löner, goda relationer.", "incorrectReasoning": "Höga löner och goda relationer är inte risker." },
              { "text": "Fysiska, psykosociala och ergonomiska risker.", "incorrectReasoning": null },
              { "text": "Bra ventilation, lågt blodtryck, god hörsel.", "incorrectReasoning": "Detta är positiva faktorer, inte risker." },
              { "text": "God kamratskap, låg frånvaro, hög kompetens.", "incorrectReasoning": "Detta är positiva faktorer, inte risker." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Fysiska, psykosociala och ergonomiska risker är vanliga.",
            "longReasoning": "Risker i arbetsmiljön kan vara fysiska (t.ex. buller, vibrationer, farliga ämnen), psykosociala (t.ex. stress, mobbning, otydlig arbetsledning) och ergonomiska (t.ex. felaktiga arbetsställningar, tunga lyft)."
        },
        {
            "question": "Vad menas med 'brister' i arbetsmiljön?",
            "answers": [
              { "text": "Att det finns för många anställda.", "incorrectReasoning": "Antalet anställda är inte i sig en brist." },
              { "text": "Att det saknas tillräckliga resurser, t.ex. bra arbetsledning eller lämplig utrustning.", "incorrectReasoning": null },
              { "text": "Att det finns för mycket övertidsarbete.", "incorrectReasoning": "Övertid kan vara en konsekvens av brister, men är inte en brist i sig." },
              { "text": "Att lönen är för låg.", "incorrectReasoning": "Lönenivå är en lönefråga, inte en brist i arbetsmiljön i sig." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Brister är brist på resurser.",
            "longReasoning": "'Brister' i arbetsmiljön syftar på avsaknad av eller otillräckliga resurser som är nödvändiga för en god och säker arbetsmiljö. Det kan handla om brist på bra arbetsledning, lämplig skyddsutrustning, tydliga instruktioner eller en välfungerande organisation."
        },
        {
        "question": "Vilka konsekvenser kan en dålig arbetsmiljö få?",
        "answers": [
        { "text": "Ökad produktivitet.", "incorrectReasoning": "Dålig arbetsmiljö leder oftast till minskad produktivitet." },
        { "text": "Bättre hälsa och välbefinnande.", "incorrectReasoning": "Dålig arbetsmiljö leder till sämre hälsa." },
        { "text": "Arbetsskador, sjukskrivningar och ekonomiska kostnader.", "incorrectReasoning": null },
        { "text": "Lägre personalomsättning.", "incorrectReasoning": "Dålig arbetsmiljö leder oftast till högre personalomsättning." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "Skador, sjukdomar och ekonomiska konsekvenser är vanliga följder.",
        "longReasoning": "En dålig arbetsmiljö kan leda till fysiska och/eller psykiska arbetsskador, sjukskrivningar, minskad produktivitet, ökade kostnader för företaget och samhället, samt personligt lidande för den drabbade."
         },
        {
            "question": "Vilka lagar styr huvudsakligen arbetsmiljön i Sverige?",
            "answers": [
                { "text": "Aktiebolagslagen och Bokföringslagen.", "incorrectReasoning": "Dessa lagar styr andra aspekter av företagande." },
                { "text": "Arbetsmiljölagen (AML) med tillhörande förordningar och föreskrifter.", "incorrectReasoning": null },
                { "text": "Konsumentköplagen och Marknadsföringslagen.", "incorrectReasoning": "Dessa lagar styr konsumenträtt och marknadsföring." },
                { "text": "Skollagen.", "incorrectReasoning": "Även om skollagen behandlar elevers arbetsmiljö, är det inte den huvudsakliga lagen för arbetsmiljön i allmänhet." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Arbetsmiljölagen (AML) är den centrala lagen.",
            "longReasoning": "Arbetsmiljön i Sverige styrs huvudsakligen av Arbetsmiljölagen (AML) och de förordningar och föreskrifter som Arbetsmiljöverket ger ut. Dessa reglerar arbetsgivarens ansvar, skyddsombudens roll, och de krav som ställs på arbetsmiljön."
        },
         {
            "question": "Vad är Arbetsmiljöverket (AV)?",
            "answers": [
              { "text": "En facklig organisation.", "incorrectReasoning": "AV är en myndighet, inte en facklig organisation." },
              { "text": "En arbetsgivarorganisation.", "incorrectReasoning": "AV är en myndighet, inte en arbetsgivarorganisation." },
              { "text": "En statlig myndighet som ansvarar för att arbetsmiljölagstiftningen följs.", "incorrectReasoning": null },
              { "text": "Ett privat företag som erbjuder konsulttjänster inom arbetsmiljö.", "incorrectReasoning": "AV är en statlig myndighet." }
            ],
            "correctAnswer": 2,
            "shortReasoning": "AV är den myndighet som övervakar arbetsmiljön.",
            "longReasoning": "Arbetsmiljöverket (AV) är den statliga myndighet i Sverige som har till uppgift att se till att arbetsmiljölagstiftningen och arbetstidslagstiftningen följs. De utför inspektioner, ger ut föreskrifter och informerar om arbetsmiljöfrågor."
        },
        {
          "question": "Vad innebär 'systematiskt arbetsmiljöarbete'?",
          "answers":[
          {"text": "Att endast åtgärda problem när de uppstår.", "incorrectReasoning": "Systematiskt arbetsmiljöarbete är förebyggande och kontinuerligt."},
          {"text": "Att fortlöpande undersöka, riskbedöma, åtgärda och följa upp arbetsmiljön.", "incorrectReasoning": null},
          {"text": "Att enbart fokusera på de fysiska riskerna i arbetsmiljön.", "incorrectReasoning": "Systematiskt arbetsmiljöarbete omfattar alla typer av risker."},
          {"text": "Att delegera allt ansvar för arbetsmiljön till skyddsombuden.", "incorrectReasoning": "Arbetsgivaren har alltid huvudansvaret."}
          ],
          "correctAnswer": 1,
          "shortReasoning": "Systematiskt arbetsmiljöarbete är ett kontinuerligt förbättringsarbete.",
          "longReasoning": "Systematiskt arbetsmiljöarbete (SAM) innebär att arbetsgivaren, i samverkan med de anställda, regelbundet och systematiskt ska undersöka arbetsförhållandena, bedöma riskerna, vidta åtgärder för att förebygga ohälsa och olycksfall, samt följa upp och kontrollera att åtgärderna får avsedd effekt."
        },
        {
        "question": "Vem har huvudansvaret för arbetsmiljön på en arbetsplats?",
        "answers": [
        { "text": "Skyddsombudet.", "incorrectReasoning": "Skyddsombudet har en viktig roll, men inte huvudansvaret." },
        { "text": "Arbetsmiljöverket.", "incorrectReasoning": "Arbetsmiljöverket utövar tillsyn, men har inte huvudansvaret på en specifik arbetsplats." },
        { "text": "Arbetsgivaren.", "incorrectReasoning": null },
        { "text": "De anställda.", "incorrectReasoning": "De anställda har ett medansvar, men arbetsgivaren har huvudansvaret." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "Arbetsgivaren har huvudansvaret.",
        "longReasoning": "Arbetsgivaren, oftast representerad av verkställande direktören (VD) eller motsvarande, har alltid huvudansvaret för arbetsmiljön på en arbetsplats. Detta ansvar kan delegeras till chefer och arbetsledare, men det yttersta ansvaret ligger kvar hos arbetsgivaren."
        },
        {
          "question": "Vad är ett skyddsombuds roll?",
          "answers":[
          {"text": "Att vara arbetsgivarens förlängda arm.", "incorrectReasoning": "Skyddsombudet företräder arbetstagarna."},
          {"text": "Att företräda arbetstagarna i arbetsmiljöfrågor och bevaka att arbetsgivaren uppfyller kraven i arbetsmiljölagen.", "incorrectReasoning": null},
          {"text": "Att enbart ansvara för den fysiska arbetsmiljön.", "incorrectReasoning": "Skyddsombudet bevakar alla aspekter av arbetsmiljön."},
          {"text": "Att utföra allt arbetsmiljöarbete på egen hand.", "incorrectReasoning": "Arbetsmiljöarbete är ett samarbete."}
          ],
          "correctAnswer": 1,
          "shortReasoning": "Skyddsombudet företräder arbetstagarna och bevakar arbetsmiljön.",
          "longReasoning": "Ett skyddsombud är en arbetstagare som är utsedd av de anställda, oftast genom facket, för att företräda dem i arbetsmiljöfrågor. Skyddsombudet ska bevaka att arbetsgivaren uppfyller kraven i arbetsmiljölagen, delta i planering och genomförande av arbetsmiljöarbetet, samt ha rätt att påkalla åtgärder och i vissa fall stoppa arbetet."
        },
         {
            "question": "Vad är syftet med en handlingsplan för arbetsmiljön?",
            "answers": [
              { "text": "Att dokumentera alla olyckor som inträffat.", "incorrectReasoning": "Olyckor ska utredas separat, men handlingsplanen är förebyggande." },
              { "text": "Att beskriva företagets mål och planerade åtgärder för att förbättra arbetsmiljön.", "incorrectReasoning": null },
              { "text": "Att lista alla anställda och deras arbetsuppgifter.", "incorrectReasoning": "Detta är en personalförteckning, inte en handlingsplan." },
              { "text": "Att redovisa företagets ekonomiska resultat.", "incorrectReasoning": "Ekonomiska resultat redovisas i andra dokument." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Handlingsplanen beskriver mål och åtgärder för bättre arbetsmiljö.",
            "longReasoning": "En handlingsplan för arbetsmiljön är ett dokument som beskriver företagets eller skolans mål för arbetsmiljön och de konkreta åtgärder som planeras för att uppnå dessa mål. Den ska ange vad som ska göras, när det ska göras, vem som ansvarar och hur det ska följas upp."
        },
        {
        "question": "Vad menas med 'kartläggning' i arbetsmiljöarbetet?",
        "answers":[
        {"text": "Att rita en karta över arbetsplatsen.", "incorrectReasoning": "Kartläggning handlar om att undersöka risker, inte rita kartor i bokstavlig mening."},
        {"text": "Att systematiskt undersöka och bedöma arbetsmiljön och identifiera risker.", "incorrectReasoning": null},
        {"text": "Att intervjua alla anställda om deras arbetsuppgifter.", "incorrectReasoning": "Intervjuer kan vara en del av kartläggningen, men det är en bredare process."},
        {"text": "Att mäta ljudnivåerna på arbetsplatsen.", "incorrectReasoning": "Ljudnivåmätning är en specifik del av kartläggningen, inte hela processen."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Kartläggning är en systematisk undersökning av arbetsmiljön.",
        "longReasoning": "Kartläggning, eller riskbedömning, i arbetsmiljöarbetet innebär att man systematiskt undersöker arbetsförhållandena, identifierar risker för ohälsa och olycksfall, bedömer hur allvarliga riskerna är, och dokumenterar resultaten. Det är grunden för det förebyggande arbetsmiljöarbetet."
        },
        {
          "question": "Vad innebär 'delegering' av arbetsmiljöansvar?",
          "answers": [
            {"text": "Att arbetsgivaren frånsäger sig allt ansvar.", "incorrectReasoning": "Arbetsgivaren kan inte frånsäga sig ansvaret." },
            {"text": "Att arbetsgivaren överlåter vissa uppgifter och befogenheter inom arbetsmiljöområdet till chefer eller andra medarbetare.", "incorrectReasoning": null},
            {"text": "Att skyddsombudet tar över arbetsgivarens ansvar.", "incorrectReasoning": "Skyddsombudet har en annan roll." },
            {"text": "Att Arbetsmiljöverket tar över ansvaret för arbetsmiljön.", "incorrectReasoning": "Arbetsmiljöverket utövar tillsyn, men tar inte över ansvaret." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Delegering är överföring av uppgifter, inte ansvar.",
          "longReasoning": "Delegering innebär att arbetsgivaren, som har det yttersta ansvaret för arbetsmiljön, överlåter specifika arbetsmiljöuppgifter och befogenheter till chefer, arbetsledare eller andra medarbetare. Det är viktigt att delegeringen är tydlig och att den som får uppgiften har rätt kompetens och resurser."
        },
        {
            "question": "Vad händer om en allvarlig olycka inträffar på en arbetsplats?",
            "answers": [
              { "text": "Arbetsmiljöverket stänger arbetsplatsen omedelbart.", "incorrectReasoning": "Stängning är en möjlig åtgärd, men inte alltid det första som sker." },
              { "text": "Olyckan ska utredas, och åtgärder ska vidtas för att förhindra att liknande olyckor inträffar igen.", "incorrectReasoning": null },
              { "text": "De anställda blir automatiskt avskedade.", "incorrectReasoning": "Avsked är inte en direkt följd av en olycka." },
              { "text": "Företaget får automatiskt böter.", "incorrectReasoning": "Böter kan utdömas, men det beror på omständigheterna." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Olyckor ska utredas och förebyggas.",
            "longReasoning": "Om en allvarlig olycka inträffar på en arbetsplats ska den utredas noggrant för att fastställa orsaken. Arbetsgivaren är skyldig att vidta åtgärder för att förhindra att liknande olyckor inträffar igen. Arbetsmiljöverket kan göra en inspektion och ställa krav på åtgärder. Vid allvarliga brister kan åtal väckas."
          },
          {
          "question": "Vad innebär Tobakslagen på en arbetsplats?",
          "answers":[
          {"text":"Att rökning är helt förbjuden på alla arbetsplatser.", "incorrectReasoning": "Tobakslagen är mer nyanserad än ett totalförbud."},
          {"text":"Att arbetsgivare och arbetstagare ska samverka för att arbetslokaler i allt väsentligt blir rökfria, samt att ingen ofrivilligt ska utsättas för tobaksrök.", "incorrectReasoning": null},
          {"text":"Att rökning är tillåten överallt utom i produktionslokaler.", "incorrectReasoning": "Rökning är begränsad på fler platser än bara i produktionslokaler."},
          {"text":"Att arbetsgivaren måste tillhandahålla rökrutor.", "incorrectReasoning": "Det finns inget krav på att tillhandahålla rökrutor."}
          ],
          "correctAnswer": 1,
          "shortReasoning": "Tobakslagen strävar efter rökfria arbetsmiljöer.",
          "longReasoning": "Tobakslagen syftar till att skydda arbetstagare från ofrivillig exponering för tobaksrök. Arbetsgivare och arbetstagare ska samverka för att arbetslokaler blir rökfria, och ingen ska utsättas för passiv rökning på sin arbetsplats."
        },
        {
            "question":"Vad ska man göra om man upptäcker en brand eller en olycka som innebär fara för liv eller hälsa, enligt lagen om skydd mot olyckor?",
            "answers":[
              {"text": "Vänta och se om någon annan larmar.", "incorrectReasoning": "Man har en skyldighet att agera."},
              {"text": "Varna de som är i fara och tillkalla hjälp om det är möjligt.", "incorrectReasoning": null},
              {"text": "Försöka släcka branden själv, oavsett storlek.", "incorrectReasoning": "Man ska inte riskera sin egen säkerhet."},
              {"text": "Springa därifrån.", "incorrectReasoning": "Man har en skyldighet att hjälpa till om det är möjligt."}
              ],
            "correctAnswer": 1,
            "shortReasoning": "Varna och larma.",
            "longReasoning": "Enligt lagen om skydd mot olyckor har man en skyldighet att, om det är möjligt, varna de som är i fara vid en brand eller olycka, samt tillkalla hjälp (oftast genom att ringa 112)."
        },
        {
          "question": "Vad är en skyddsrond?",
          "answers":[
          {"text":"En runda som skyddsombudet gör på egen hand.", "incorrectReasoning": "Skyddsronder görs ofta i samverkan med andra."},
          {"text":"En systematisk genomgång av arbetsmiljön för att identifiera risker och brister.", "incorrectReasoning": null},
          {"text":"En kontroll av att alla anställda bär hjälm.", "incorrectReasoning": "Skyddsronder är mer omfattande än så."},
          {"text":"En brandövning.", "incorrectReasoning": "Brandövningar är en del av säkerhetsarbetet, men inte samma sak som en skyddsrond."}
          ],
          "correctAnswer": 1,
          "shortReasoning": "Skyddsrond är en systematisk arbetsmiljögenomgång.",
          "longReasoning": "En skyddsrond är en systematisk och regelbunden genomgång av arbetsmiljön på en arbetsplats. Syftet är att identifiera risker för ohälsa och olycksfall, samt att kontrollera att arbetsmiljöarbetet fungerar som det ska. Skyddsronder genomförs ofta av skyddsombud och arbetsledare tillsammans."
        },
        {
        "question": "Vad är skillnaden mellan en 'fysisk person' och en 'juridisk person' i arbetsmiljösammanhang?",
        "answers": [
        { "text": "En fysisk person är en anställd, medan en juridisk person är en chef.", "incorrectReasoning": "Juridisk person är oftast företaget." },
        { "text": "En fysisk person är en människa, medan en juridisk person är ett företag eller en organisation.", "incorrectReasoning": null },
        { "text": "En fysisk person är någon som arbetar med kroppen, medan en juridisk person är någon som arbetar med hjärnan.", "incorrectReasoning": "Detta är inte den juridiska definitionen." },
        { "text": "Det är ingen skillnad, båda begreppen kan användas synonymt.", "incorrectReasoning": "Det finns en juridisk skillnad." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Fysisk person = människa, juridisk person = företag.",
        "longReasoning": "Inom juridiken skiljer man på fysiska och juridiska personer. En fysisk person är en enskild människa. En juridisk person är en organisation, t.ex. ett företag, en förening eller en myndighet, som har rättskapacitet, dvs. kan äga egendom, ingå avtal och vara part i en rättegång. I arbetsmiljösammanhang är det viktigt att veta att endast fysiska personer kan ställas till svars straffrättsligt."
        },
        {
         "question": "Vad innebär det att ett företag döms till företagsbot?",
         "answers": [
         {"text": "Att företagets VD fängslas.", "incorrectReasoning": "Företagsbot är en ekonomisk påföljd, inte fängelse."},
         {"text":"Att företaget får betala en ekonomisk sanktionsavgift på grund av brister i arbetsmiljön.", "incorrectReasoning": null},
         {"text": "Att företaget tvingas stänga.", "incorrectReasoning": "Stängning är en möjlig åtgärd, men företagsbot är en ekonomisk påföljd."},
         {"text": "Att företaget får en varning.", "incorrectReasoning": "En varning är en mildare påföljd."}
         ],
        "correctAnswer": 1,
        "shortReasoning": "Företagsbot är en ekonomisk sanktion.",
        "longReasoning": "Företagsbot är en ekonomisk sanktionsavgift som ett företag kan dömas att betala om det har funnits brister i arbetsmiljön som lett till en olycka, och om företaget haft ekonomisk vinning av dessa brister. Det är en form av skadestånd till staten."
        },
        {
         "question": "Vad menas med 'oaktsamhet' i arbetsmiljösammanhang?",
         "answers":[
         {"text":"Att man är väldigt försiktig.", "incorrectReasoning": "Oaktsamhet är motsatsen till försiktighet."},
         {"text": "Att man har agerat vårdslöst eller försumligt och därigenom orsakat eller bidragit till en risk eller skada.", "incorrectReasoning": null},
         {"text": "Att man har följt alla regler till punkt och pricka.", "incorrectReasoning": "Att följa regler är motsatsen till oaktsamhet."},
         {"text": "Att man har anmält en risk till Arbetsmiljöverket.", "incorrectReasoning": "Anmälan är bra, men oaktsamhet handlar om handlingar eller underlåtenhet."}
         ],
         "correctAnswer": 1,
         "shortReasoning":"Oaktsamhet är vårdslöshet eller försummelse.",
         "longReasoning": "Oaktsamhet innebär att man har agerat vårdslöst, försumligt eller utan tillräcklig aktsamhet och därigenom orsakat eller bidragit till en risk, skada eller olycka. Det är ett centralt begrepp i arbetsmiljörätten och kan leda till straffansvar."
        },
        {
           "question": "Vilka arbetsuppgifter har *inte* ett skyddsombud?",
           "answers":[
           {"text":"Att delta i planeringen av arbetsmiljöarbetet", "incorrectReasoning": "Skyddsombud ska delta i planeringen"},
           {"text":"Att bevaka att arbetsgivaren följer Arbetsmiljölagen", "incorrectReasoning": "Att bevaka efterlevnad av lagar är en del av uppdraget"},
           {"text": "Att ha det yttersta ansvaret för arbetsmiljön på företaget", "incorrectReasoning": null},
           {"text": "Att påpeka brister och risker i arbetsmiljön", "incorrectReasoning": "Det är en central uppgift att påpeka risker"}
           ],
           "correctAnswer": 2,
           "shortReasoning": "Arbetsgivaren, inte skyddsombudet, har yttersta ansvaret.",
           "longReasoning": "Skyddsombudets uppgift är att representera arbetstagarna och *bevaka* arbetsmiljön, men det är alltid *arbetsgivaren* som har det yttersta ansvaret för att arbetsmiljölagen följs och att arbetsmiljön är säker och hälsosam."
        },
        {
            "question": "Vad ska en arbetsgivare göra om ett skyddsombud begär en undersökning av arbetsmiljön?",
            "answers": [
                { "text": "Ignorera begäran.", "incorrectReasoning": "Arbetsgivaren måste agera på begäran." },
                { "text": "Genomföra undersökningen och lämna en skriftlig bekräftelse till skyddsombudet.", "incorrectReasoning": null },
                { "text": "Delegera uppgiften till skyddsombudet.", "incorrectReasoning": "Arbetsgivaren kan delegera uppgiften, men är fortfarande ansvarig." },
                { "text": "Vänta och se om problemet löser sig av sig självt.", "incorrectReasoning": "Arbetsgivaren måste agera aktivt." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Arbetsgivaren måste genomföra undersökning och bekräfta.",
            "longReasoning": "Om ett skyddsombud begär en undersökning av arbetsmiljön är arbetsgivaren skyldig att genomföra denna undersökning och lämna en skriftlig bekräftelse på att begäran har mottagits och att åtgärder vidtas."
        },
        {
        "question": "Har ett skyddsombud rätt att stoppa arbetet?",
        "answers": [
        {"text": "Nej, aldrig.", "incorrectReasoning":"Skyddsombud kan stoppa arbete under vissa förutsättningar."},
        {"text": "Ja, om arbetet bedöms innebära omedelbar och allvarlig fara för arbetstagares liv eller hälsa.", "incorrectReasoning": null},
        {"text": "Ja, när som helst om de tycker att arbetsmiljön är dålig.", "incorrectReasoning": "Det krävs omedelbar och allvarlig fara."},
        {"text": "Ja, om de flesta anställda håller med.", "incorrectReasoning": "Det krävs omedelbar och allvarlig fara, inte majoritetsbeslut."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Ja, vid omedelbar och allvarlig fara.",
        "longReasoning": "Ett skyddsombud har rätt att stoppa arbetet (ett så kallat skyddsombudsstopp) om de anser att arbetet innebär omedelbar och allvarlig fara för arbetstagares liv eller hälsa, och om arbetsgivaren inte omedelbart vidtar åtgärder. Arbetsmiljöverket kan sedan pröva om stoppet var befogat."
        },
         {
            "question": "Vad ska finnas i en handlingsplan för arbetsmiljön?",
            "answers": [
              { "text": "En lista över alla anställda.", "incorrectReasoning": "Detta är en personalförteckning, inte en handlingsplan." },
              { "text": "Företagets ekonomiska resultat.", "incorrectReasoning": "Detta redovisas i andra dokument." },
              { "text": "Mål, åtgärder, ansvariga och tidsplan för förbättringar av arbetsmiljön.", "incorrectReasoning": null },
              { "text": "En detaljerad beskrivning av alla arbetsmoment.", "incorrectReasoning": "Detta är arbetsinstruktioner, inte en handlingsplan." }
            ],
            "correctAnswer": 2,
            "shortReasoning": "Mål, åtgärder, ansvar och tidplan.",
            "longReasoning": "En handlingsplan för arbetsmiljön ska innehålla företagets eller skolans mål för arbetsmiljön, de konkreta åtgärder som ska vidtas för att uppnå dessa mål, vem som är ansvarig för respektive åtgärd, och när åtgärderna ska vara genomförda. Den ska vara ett levande dokument som följs upp och revideras regelbundet."
         },
            {
                "question": "Vad är en skyddskommitté?",
                "answers": [
                  { "text": "En grupp anställda som ansvarar för all säkerhetsutrustning.", "incorrectReasoning": "Skyddskommittén har en bredare roll." },
                  { "text": "Ett samrådsorgan på arbetsplatser med minst 50 anställda, där arbetsgivare och arbetstagarrepresentanter (skyddsombud) diskuterar och beslutar om arbetsmiljöfrågor.", "incorrectReasoning": null },
                  { "text": "En grupp chefer som beslutar om arbetsmiljöåtgärder.", "incorrectReasoning": "Skyddskommittén består av både arbetsgivar- och arbetstagarrepresentanter." },
                  { "text": "En extern expertgrupp som anlitas vid behov.", "incorrectReasoning": "Skyddskommittén är intern." }
                ],
                "correctAnswer": 1,
                "shortReasoning": "Samrådsorgan för arbetsmiljöfrågor på större arbetsplatser.",
                "longReasoning": "En skyddskommitté är ett samrådsorgan på arbetsplatser med minst 50 anställda. Den består av representanter för arbetsgivaren och arbetstagarna (skyddsombud). Skyddskommittén ska behandla övergripande arbetsmiljöfrågor, delta i planeringen av arbetsmiljöarbetet, och följa upp att det genomförs."
            },{
              "question": "Vad innebär det att Arbetsmiljölagen är en 'paraplylag'?",
              "answers": [
                { "text": "Att den bara gäller utomhus.", "incorrectReasoning": "Paraplylag har inget med väder att göra." },
                { "text": "Att den är överordnad andra lagar och förordningar som rör arbetsmiljön.", "incorrectReasoning": null },
                { "text": "Att den bara gäller vid regn.", "incorrectReasoning": "Paraplylag har inget med väder att göra." },
                { "text": "Att den är frivillig att följa.", "incorrectReasoning": "Arbetsmiljölagen är tvingande." }
              ],
              "correctAnswer": 1,
              "shortReasoning": "Paraplylag = överordnad andra lagar.",
              "longReasoning": "Att Arbetsmiljölagen (AML) är en 'paraplylag' innebär att den är en ramlag som sätter de övergripande ramarna för arbetsmiljöarbetet. Under AML finns sedan mer detaljerade regler i form av förordningar och föreskrifter (från Arbetsmiljöverket) som preciserar kraven inom olika områden."
            },
           {
                  "question": "Vad innebär det att ha ett 'systematiskt arbetsmiljöarbete'?",
                  "answers": [
                    { "text": "Att bara åtgärda problem när de uppstår.", "incorrectReasoning": "Systematiskt arbetsmiljöarbete är förebyggande och kontinuerligt." },
                    { "text": "Att ha en pärm med säkerhetsdatablad.", "incorrectReasoning": "Det är en del, men inte helheten." },
                    { "text": "Att regelbundet undersöka, riskbedöma, åtgärda och följa upp arbetsmiljön.", "incorrectReasoning": null },
                    { "text": "Att enbart fokusera på den fysiska arbetsmiljön.", "incorrectReasoning": "Alla aspekter av arbetsmiljön ska ingå." }
                  ],
                  "correctAnswer": 2,
                  "shortReasoning": "Systematiskt = undersöka, riskbedöma, åtgärda, följa upp.",
                  "longReasoning": "Systematiskt arbetsmiljöarbete (SAM) innebär att arbetsgivaren, i samverkan med de anställda, har en kontinuerlig process för att undersöka arbetsförhållandena, bedöma riskerna för ohälsa och olycksfall, vidta åtgärder för att förebygga dessa risker, samt följa upp och kontrollera att åtgärderna får avsedd effekt. Det handlar om att integrera arbetsmiljöarbetet i den dagliga verksamheten."
              },
          {
                "question": "Vilka fyra steg ingår i det systematiska arbetsmiljöarbetet?",
                "answers":[
                  {"text":"Planering, genomförande, uppföljning och tillsyn.", "incorrectReasoning": null},
                  {"text":"Anställning, utbildning, lönesättning och avveckling.", "incorrectReasoning": "Dessa steg är inte relevanta för SAM."},
                  {"text": "Inköp, försäljning, marknadsföring och ekonomi.", "incorrectReasoning": "Detta är affärsprocesser, inte SAM."},
                  {"text":"Ritning, konstruktion, produktion och leverans.", "incorrectReasoning": "Detta är produktutvecklingsprocesser."}
                  ],
                "correctAnswer": 0,
                "shortReasoning": "Planering, genomförande, uppföljning, tillsyn.",
                "longReasoning": "De fyra stegen, eller faserna, i det systematiska arbetsmiljöarbetet är: 1. Planering (sätta mål, kartlägga risker, ta fram handlingsplaner). 2. Genomförande (utföra åtgärderna i handlingsplanen). 3. Uppföljning (kontrollera att åtgärderna haft effekt, utvärdera arbetsmiljöarbetet). 4. Tillsyn (Arbetsmiljöverkets kontroll av att lagar och regler följs)."
              },
          {
              "question": "Vad gör man under steget 'kartläggning' i det systematiska arbetsmiljöarbetet?",
              "answers":[
                {"text": "Ritar en karta över arbetsplatsen.", "incorrectReasoning": "Det är inte den typen av kartläggning som avses."},
                {"text":"Undersöker arbetsmiljön och identifierar risker.", "incorrectReasoning": null},
                {"text": "Skriver en handlingsplan.", "incorrectReasoning": "Handlingsplan skrivs i ett senare steg."},
                {"text": "Genomför de planerade åtgärderna.", "incorrectReasoning": "Genomförande är ett separat steg."}
              ],
              "correctAnswer": 1,
              "shortReasoning": "Kartläggning = identifiera risker.",
              "longReasoning": "Under kartläggningssteget i det systematiska arbetsmiljöarbetet undersöker man arbetsförhållandena systematiskt för att identifiera risker för ohälsa och olycksfall. Detta kan göras genom skyddsronder, medarbetarenkäter, mätningar, intervjuer och genomgång av dokumentation."
            },
            {
             "question": "Vad ska en handlingsplan för arbetsmiljön innehålla?",
              "answers": [
                {"text": "En lista över alla anställda och deras löner.", "incorrectReasoning": "Detta är inte relevant för en handlingsplan."},
                {"text": "Företagets vision och affärsidé.", "incorrectReasoning": "Detta är inte relevant för en handlingsplan."},
                {"text": "Mål, åtgärder, ansvariga och tidsplan för att förbättra arbetsmiljön.", "incorrectReasoning": null},
                {"text":"En detaljerad beskrivning av alla arbetsmoment.", "incorrectReasoning": "Detta är arbetsinstruktioner, inte en handlingsplan."}
                ],
              "correctAnswer": 2,
              "shortReasoning": "Mål, åtgärder, ansvar, tidplan.",
              "longReasoning":"En handlingsplan för arbetsmiljön ska innehålla företagets eller skolans mål för arbetsmiljön, de konkreta åtgärder som ska vidtas för att uppnå dessa mål (t.ex. inköp av ny utrustning, utbildning, förändrade rutiner), vem som är ansvarig för respektive åtgärd, och när åtgärderna ska vara genomförda (tidsplan)."
              },
             {
             "question": "Vad händer om en allvarlig arbetsolycka inträffar på en arbetsplats?",
               "answers": [
                {"text": "Arbetsgivaren får automatiskt böter.", "incorrectReasoning": "Böter kan utdömas, men det beror på omständigheterna."},
                {"text": "Skyddsombudet blir ansvarig.", "incorrectReasoning": "Skyddsombudet har inte det yttersta ansvaret."},
                {"text": "Olyckan ska utredas, åtgärder ska vidtas för att förhindra liknande olyckor, och Arbetsmiljöverket kan göra en inspektion.", "incorrectReasoning": null},
                {"text":"Arbetsplatsen stängs omedelbart.", "incorrectReasoning":"Stängning är en möjlig åtgärd, men inte alltid det första som sker."}
              ],
              "correctAnswer": 2,
             "shortReasoning": "Utredning, åtgärder och eventuell inspektion.",
               "longReasoning": "Om en allvarlig arbetsolycka inträffar ska den utredas noggrant för att fastställa orsaken och förhindra att liknande olyckor inträffar igen. Arbetsgivaren är skyldig att vidta åtgärder. Arbetsmiljöverket kan göra en inspektion och ställa krav på åtgärder, och i allvarliga fall kan det bli fråga om åtal och företagsbot."
              },
                {
              "question": "Vad är ett 'tillbud' i arbetsmiljösammanhang?",
               "answers":[
               {"text":"En olycka som har lett till personskada.", "incorrectReasoning": "Tillbud är händelser som *kunde* ha lett till skada."},
               {"text": "En händelse som hade kunnat leda till en olycka eller skada, men som inte gjorde det.", "incorrectReasoning": null},
               {"text":"En planerad åtgärd för att förbättra arbetsmiljön.", "incorrectReasoning": "Detta är en del av en handlingsplan, inte ett tillbud."},
               {"text":"Ett möte i skyddskommittén.", "incorrectReasoning": "Skyddskommittémöten är inte tillbud."}
               ],
                "correctAnswer": 1,
               "shortReasoning": "Tillbud = nära ögat-händelse.",
               "longReasoning": "Ett tillbud är en oönskad händelse eller situation som hade kunnat leda till en olycka eller skada, men som av någon anledning inte gjorde det. Det är viktigt att rapportera och utreda tillbud för att kunna förebygga framtida olyckor."
              },
            {
              "question": "Vad innebär det att en arbetsgivare kan få företagsbot?",
              "answers":[
              {"text": "Att företaget måste betala en ekonomisk påföljd på grund av brister i arbetsmiljön som lett till en olycka och som företaget haft ekonomisk vinning av.", "incorrectReasoning":null},
              {"text":"Att företagets VD hamnar i fängelse.", "incorrectReasoning":"Företagsbot är en ekonomisk påföljd, inte fängelse för VD:n personligen."},
              {"text":"Att företaget får en varning från Arbetsmiljöverket.", "incorrectReasoning": "En varning är en mildare påföljd."},
              {"text":"Att företaget måste stänga sin verksamhet.", "incorrectReasoning":"Stängning kan vara en konsekvens, men företagsbot är en ekonomisk påföljd."}
              ],
              "correctAnswer": 0,
              "shortReasoning": "Företagsbot är en ekonomisk påföljd för företaget.",
              "longReasoning": "Företagsbot är en ekonomisk sanktionsavgift som ett företag kan dömas att betala om det har funnits allvarliga brister i arbetsmiljön som lett till en olycka eller skada, och om dessa brister har samband med företagets ekonomiska verksamhet och vinning."
            },
            {
              "question": "Vad innebär 'oaktsamhet' i juridiska termer i relation till arbetsmiljön?",
               "answers":[
               {"text": "Att man är extra försiktig.", "incorrectReasoning":"Oaktsamhet är motsatsen till försiktighet."},
               {"text":"Att man följer alla regler och instruktioner.", "incorrectReasoning":"Detta är motsatsen till oaktsamhet."},
               {"text":"Att man har agerat vårdslöst eller försumligt och därigenom orsakat eller bidragit till en risk eller skada.", "incorrectReasoning": null},
               {"text":"Att man har anmält en risk till Arbetsmiljöverket.", "incorrectReasoning":"Anmälan i sig är inte oaktsamhet."}
               ],
              "correctAnswer": 2,
              "shortReasoning": "Oaktsamhet = vårdslöshet/försummelse.",
              "longReasoning": "Oaktsamhet i arbetsmiljösammanhang innebär att man har agerat vårdslöst, försumligt eller utan tillräcklig aktsamhet och därigenom orsakat eller bidragit till en risk, skada eller olycka. Det kan handla om att inte följa säkerhetsföreskrifter, inte ge tillräckliga instruktioner, eller inte åtgärda kända risker."
            },
             {
                "question": "Vilken myndighet i Sverige har huvudansvaret för att kontrollera att arbetsmiljölagstiftningen följs?",
                "answers": [
                  {"text": "Socialstyrelsen.", "incorrectReasoning": "Socialstyrelsen hanterar hälso- och sjukvård, inte arbetsmiljö." },
                  {"text": "Arbetsmiljöverket (AV).", "incorrectReasoning": null},
                  {"text": "Skatteverket.", "incorrectReasoning": "Skatteverket hanterar skatter, inte arbetsmiljö." },
                  {"text": "Polisen.", "incorrectReasoning": "Polisen hanterar brott, men AV har huvudansvaret för arbetsmiljön." }
                ],
                "correctAnswer": 1,
                "shortReasoning": "Arbetsmiljöverket (AV) övervakar arbetsmiljölagen.",
                "longReasoning": "Arbetsmiljöverket (AV) är den centrala myndigheten i Sverige som har till uppgift att se till att arbetsmiljölagstiftningen och arbetstidslagstiftningen följs. De utför inspektioner, ger ut föreskrifter, informerar och kan vidta åtgärder mot arbetsgivare som bryter mot reglerna."
              },
              {
                  "question": "Vilka risker nämns specifikt i samband med *elektrisk ström* i texten?",
                  "answers": [
                    { "text": "Risk för brand.", "incorrectReasoning": "Även om elfel kan orsaka brand, nämns det inte specifikt här." },
                    { "text": "Risk för personskador och dödsfall.", "incorrectReasoning": null },
                    { "text": "Risk för explosion.", "incorrectReasoning": "Explosioner nämns inte specifikt i samband med el." },
                    { "text": "Risk för kemiska reaktioner.", "incorrectReasoning": "Kemiska reaktioner är inte den primära risken med el." }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "El kan orsaka personskador och dödsfall.",
                  "longReasoning": "Texten betonar att elektrisk ström kan vara dödande och att det är viktigt att ha kunskap om elarbeten och veta vilka arbeten man får och inte får utföra, för att undvika allvarliga personskador."
                },
              {
                  "question": "Vilka typer av arbetsmiljöproblem nämns i samband med *vårdarbete*?",
                  "answers": [
                    { "text": "Buller och dålig belysning.", "incorrectReasoning": "Detta är vanliga problem, men inte specifikt för vårdarbete i texten." },
                    { "text": "Tunga lyft och risk för smitta.", "incorrectReasoning": null },
                    { "text": "Monotont arbete och brist på raster.", "incorrectReasoning": "Detta kan förekomma, men nämns inte specifikt." },
                    { "text": "Dålig ventilation och risk för fallolyckor.", "incorrectReasoning": "Detta kan förekomma, men nämns inte specifikt i samband med vård." }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Tunga lyft och smitta är specifika risker inom vården.",
                  "longReasoning": "Texten nämner specifikt att tunga lyft av patienter kan leda till belastningsskador hos vårdpersonal, och att det finns stränga regler för hygien och hantering av mediciner och kemikalier, vilket antyder en risk för smitta och exponering för farliga ämnen."
              },
              {
                  "question":"Vad ska man göra om man är osäker på vilka regler som gäller för ett visst arbete, enligt texten?",
                  "answers":[
                    {"text":"Gissa och hoppas på det bästa.", "incorrectReasoning": "Detta är inte ett bra sätt att hantera säkerhetsfrågor på."},
                    {"text": "Fråga en kollega som har jobbat länge.", "incorrectReasoning":"Kollegan kan ha fel, bättre att säkerställa informationen."},
                    {"text":"Ta reda på vilka regler som gäller, exempelvis genom att läsa lagar, förordningar och föreskrifter, eller fråga någon som har kunskap.", "incorrectReasoning":null},
                    {"text": "Vänta och se om någon annan säger till.", "incorrectReasoning":"Det är viktigt att vara proaktiv när det gäller säkerhet."}
                  ],
                  "correctAnswer": 2,
                  "shortReasoning": "Ta reda på reglerna, fråga en expert.",
                  "longReasoning": "Texten betonar att det är viktigt att känna till de lagar och regler som gäller för den verksamhet man bedriver. Det anses inte som en förmildrande omständighet att inte känna till reglerna. Man ska alltså aktivt ta reda på vad som gäller."
              },
           {
              "question": "Vad innebär det att en maskin är CE-märkt?",
              "answers": [
                {
                  
                  "text": "Att den är tillverkad i Kina.", "incorrectReasoning": "CE-märkning handlar om säkerhet och överensstämmelse med EU-krav, inte tillverkningsland." },
                { "text": "Att den uppfyller vissa säkerhets- och miljökrav inom EU.", "incorrectReasoning": null },
                { "text": "Att den är avsedd för hemmabruk.", "incorrectReasoning": "CE-märkning gäller både för industriell och privat användning." },
                { "text": "Att den är extra tystgående.", "incorrectReasoning": "CE-märkning handlar inte specifikt om ljudnivå." }
              ],
              "correctAnswer": 1,
              "shortReasoning": "CE-märkning = uppfyller EU-krav.",
              "longReasoning": "CE-märkning på en maskin innebär att tillverkaren intygar att maskinen uppfyller de grundläggande säkerhets-, hälso- och miljökrav som ställs inom EU (och EFTA-länderna). Det är ett krav för att få sälja maskinen inom detta område."
           },
            {
                  "question": "Vad ska man göra om man upptäcker en risk eller ett fel i arbetsmiljön?",
                  "answers": [
                    { "text": "Inget, det är arbetsgivarens ansvar.", "incorrectReasoning": "Alla har ett ansvar att rapportera risker." },
                    { "text": "Rapportera det till närmaste chef, skyddsombud eller lärare.", "incorrectReasoning": null },
                    { "text": "Försöka åtgärda det själv, oavsett vad det är.", "incorrectReasoning": "Man ska inte riskera sin egen säkerhet." },
                    { "text": "Vänta och se om någon annan upptäcker det.", "incorrectReasoning": "Det är viktigt att vara proaktiv." }
                  ],
                  "correctAnswer": 1,
                  "shortReasoning": "Rapportera risker och fel.",
                  "longReasoning": "Om man upptäcker en risk eller ett fel i arbetsmiljön ska man rapportera det till sin närmaste chef, skyddsombud (om det finns ett sådant) eller, i en skolsituation, till sin lärare. Det är allas ansvar att bidra till en säker arbetsmiljö."
                }
          ]
    },
    {
      name: "Arbetsmiljöfaktorer",
      source: "./pdf/Arbetsmiljö och säkerhet - Faktabok.pdf",
      questions: [
        {
            "question": "Vad menas med synergonomi?",
            "answers": [
                { "text": "Samspelet mellan människa och maskin.", "incorrectReasoning": "Detta är en del av ergonomi generellt, men synergonomi fokuserar på synen." },
                { "text": "Samspelet mellan människa och belysning.", "incorrectReasoning": null },
                { "text": "Samspelet mellan människa och arbetsuppgifter.", "incorrectReasoning": "Detta är en del av ergonomi generellt." },
                { "text": "Samspelet mellan människa och arbetskamrater.", "incorrectReasoning": "Detta handlar om den psykosociala arbetsmiljön." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Synergonomi handlar om samspelet mellan synen och belysningen.",
            "longReasoning": "Synergonomi är ett specifikt område inom ergonomi som fokuserar på samspelet mellan människan och belysningen på arbetsplatsen. Det handlar om hur belysningen påverkar synen och hur man kan optimera ljusförhållandena för att minska belastningen på ögonen och förbättra synkomforten."
        },
        {
            "question": "Hur stor del av den information vi tar in uppskattas komma via synen?",
            "answers": [
                { "text": "Cirka 20 %.", "incorrectReasoning": "Synen är vårt viktigaste sinne för informationsinhämtning." },
                { "text": "Cirka 50 %.", "incorrectReasoning": "Synen står för en ännu större andel." },
                { "text": "Cirka 80 %.", "incorrectReasoning": null },
                { "text": "Cirka 95 %.", "incorrectReasoning": "Synen står inte för fullt så stor andel." }
            ],
            "correctAnswer": 2,
            "shortReasoning": "Cirka 80% av informationen kommer via synen.",
            "longReasoning": "Texten anger att ungefär 80% av all information vi tar in kommer via synintryck. Detta understryker synens betydelse för vår informationsinhämtning och vikten av goda synförhållanden på arbetsplatsen."
        },
        {
            "question": "Vad händer med ögats lins med stigande ålder?",
            "answers": [
                { "text": "Den blir mer elastisk.", "incorrectReasoning": "Linsen blir mindre elastisk med åldern." },
                { "text": "Den stelnar.", "incorrectReasoning": null },
                { "text": "Den blir grumlig.", "incorrectReasoning": "Grumling av linsen är en ögonsjukdom (grå starr), inte en normal åldersförändring." },
                { "text": "Den ändrar färg.", "incorrectReasoning": "Linsens färg ändras inte på det sättet med åldern." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Linsen stelnar, vilket påverkar ackommodationen.",
            "longReasoning": "Med stigande ålder stelnar ögats lins, vilket minskar dess förmåga att ställa om sig (ackommodera) mellan seende på nära och långt håll. Detta leder ofta till behov av läsglasögon eller progressiva glasögon."
        },
            {
            "question": "Hur mycket mer ljus behöver en 60-åring jämfört med en 40-åring?",
            "answers": [
              { "text": "Ungefär lika mycket.", "incorrectReasoning": "Ljusbehovet ökar med åldern." },
              { "text": "Ungefär 50% mer.", "incorrectReasoning": "60-åringar behöver mer ljus än så." },
              { "text": "Minst dubbelt så mycket.", "incorrectReasoning": null },
              { "text": "Ungefär 10 gånger mer.", "incorrectReasoning": "Det är en överdrift." }
            ],
            "correctAnswer": 2,
            "shortReasoning": "Minst dubbelt så mycket ljus.",
            "longReasoning": "Texten anger att en 60-åring behöver minst dubbelt så mycket ljus som en 40-åring. Detta illustrerar hur ljusbehovet ökar markant med åldern, vilket är viktigt att ta hänsyn till vid planering av belysning på arbetsplatser."
          },
           {
            "question": "Varifrån bör dagsljuset i en arbetslokal helst komma?",
            "answers": [
              { "text": "Framifrån.", "incorrectReasoning": "Detta kan orsaka bländning." },
              { "text": "Bakifrån.", "incorrectReasoning": "Detta kan skapa skuggor på arbetsytan." },
              { "text": "Från sidan.", "incorrectReasoning": null },
              { "text": "Underifrån.", "incorrectReasoning": "Detta är opraktiskt och kan skapa bländning." }
            ],
            "correctAnswer": 2,
            "shortReasoning": "Dagsljus bör komma från sidan.",
            "longReasoning": "Dagsljus bör helst komma in från sidan på en arbetsplats. Detta minskar risken för bländning och reflexer, samt ger en mer jämn ljusfördelning i rummet. För högerhänta personer är det bäst med ljus från vänster."
        },
        {
        "question": "Vad är en luxmeter?",
        "answers":[
        {"text": "Ett instrument för att mäta ljusets färg.", "incorrectReasoning": "Luxmetern mäter inte färg."},
        {"text": "Ett instrument för att mäta belysningsstyrkan.", "incorrectReasoning": null},
        {"text": "Ett instrument för att mäta luftfuktighet.", "incorrectReasoning":"Det mäts med en hygrometer."},
        {"text":"Ett instrument för att mäta ljudnivån.", "incorrectReasoning": "Det mäts med en bullermätare/ljudnivåmätare."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Luxmeter mäter belysningsstyrka (lux).",
        "longReasoning": "En luxmeter är ett mätinstrument som används för att mäta belysningsstyrkan, det vill säga hur mycket ljus som faller på en yta. Belysningsstyrkan mäts i enheten lux (lx)."
        },
         {
            "question": "Vad är 'luminans'?",
            "answers": [
              { "text": "Mängden ljus som en ljuskälla avger.", "incorrectReasoning": "Detta är ljusflöde (lumen)." },
              { "text": "Mängden ljus som faller på en yta.", "incorrectReasoning": "Detta är belysningsstyrka (lux)." },
              { "text": "Mängden ljus som reflekteras från en yta mot ögat.", "incorrectReasoning": null },
              { "text": "Ljusets färgtemperatur.", "incorrectReasoning": "Färgtemperatur mäts i Kelvin." }
            ],
            "correctAnswer": 2,
            "shortReasoning": "Luminans är det reflekterade ljuset.",
            "longReasoning": "Luminans är ett mått på den ljusmängd som reflekteras från en yta och når ögat. Det är alltså ett mått på hur ljus en yta uppfattas. Luminans mäts i enheten candela per kvadratmeter (cd/m²)."
          },
         {
            "question": "Vad menas med 'termiskt klimat'?",
            "answers": [
              { "text": "Klimatet utomhus.", "incorrectReasoning": "Termiskt klimat handlar om inomhusförhållanden." },
              { "text": "Luftens temperatur, fuktighet, värmestrålning och drag.", "incorrectReasoning": null },
              { "text": "Ljudnivån i en lokal.", "incorrectReasoning": "Ljudnivå är inte en del av det termiska klimatet." },
              { "text": "Ljusförhållandena i en lokal.", "incorrectReasoning": "Ljusförhållanden är en separat faktor, inte en del av det termiska klimatet." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Termiskt klimat = temperatur, fukt, strålning, drag.",
            "longReasoning": "Det termiska klimatet inomhus omfattar de faktorer som påverkar hur vi upplever temperaturen och komforten i en lokal. De viktigaste faktorerna är luftens temperatur, luftfuktighet, värmestrålning från omgivande ytor och luftrörelser (drag)."
          },
         {
        "question": "Vilken temperatur upplevs vanligtvis som behaglig på en arbetsplats?",
        "answers":[
        {"text": "15 °C", "incorrectReasoning": "Detta är för kallt för de flesta."},
        {"text": "20 °C", "incorrectReasoning": null},
        {"text": "25 °C", "incorrectReasoning": "Detta kan upplevas som för varmt av många."},
        {"text": "30 °C", "incorrectReasoning": "Detta är alldeles för varmt for de flesta."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Runt 20°C är en vanlig komforttemperatur.",
        "longReasoning": "En temperatur runt 20°C upplevs av de flesta som en behaglig inomhustemperatur vid normal aktivitet och klädsel. Men individuella preferenser och typ av arbete kan påverka den optimala temperaturen."
        },
    {
        "question": "Vad är en anemometer?",
        "answers": [
          { "text": "Ett instrument för att mäta temperatur.", "incorrectReasoning": "Det mäts med en termometer." },
          { "text": "Ett instrument för att mäta luftfuktighet.", "incorrectReasoning": "Det mäts med en hygrometer." },
          { "text": "Ett instrument för att mäta lufthastighet.", "incorrectReasoning": null },
          { "text": "Ett instrument för att mäta ljudnivå.", "incorrectReasoning": "Det mäts med en bullermätare." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "Anemometer mäter lufthastighet.",
        "longReasoning": "En anemometer är ett instrument som används för att mäta lufthastighet, alltså hur snabbt luften rör sig. Det är viktigt för att bedöma drag och ventilation i en lokal."
      },
          {
              "question":"Vad är en 'hygrometer'?",
              "answers":[
                  {"text":"Ett instrument som mäter temperatur.", "incorrectReasoning": "Det mäts med en termometer"},
                  {"text": "Ett instrument som mäter luftfuktighet.", "incorrectReasoning":null},
                  {"text": "Ett instrument som mäter lufthastighet", "incorrectReasoning": "Det mäts med en anemometer"},
                  {"text": "Ett instrument som mäter ljudnivå.", "incorrectReasoning": "Det mäts med en bullermätare/ljudnivåmätare."}
                  ],
                "correctAnswer": 1,
                "shortReasoning": "En hygrometer mäter luftfuktighet",
                "longReasoning": "En 'hygrometer' är ett instrument som används för att mäta den relativa luftfuktigheten, alltså mängden vattenånga i luften, vanligen uttryckt i procent."
          },
        {
            "question": "Vad mäter en globtermometer?",
            "answers": [
              { "text": "Lufttemperatur.", "incorrectReasoning": "Globtermometern mäter mer än bara lufttemperaturen." },
              { "text": "Luftfuktighet.", "incorrectReasoning": "Luftfuktighet mäts med en hygrometer." },
              { "text": "Värmestrålning.", "incorrectReasoning": null },
              { "text": "Lufthastighet.", "incorrectReasoning": "Lufthastighet mäts med en anemometer." }
            ],
            "correctAnswer": 2,
            "shortReasoning": "Globtermometer mäter värmestrålning.",
            "longReasoning": "En globtermometer är ett instrument som används för att mäta värmestrålning från omgivande ytor, t.ex. sol, väggar, maskiner eller belysning. Den består av en svartmålad glob med en termometer inuti, som absorberar strålningen och ger ett mått på den totala värmebelastningen."
        },
        {
          "question": "Vad kan vara symptom på att vistas i 'sjuka hus'?",
          "answers": [
          {"text": "Förbättrad koncentrationsförmåga", "incorrectReasoning":"Detta är en positiv effekt och inte ett symptom på 'sjuka hus'."},
          {"text": "Ökad energi och pigghet", "incorrectReasoning": "Detta är en positiv effekt och inte ett symptom på 'sjuka hus'."},
          {"text":"Irritation i ögon, näsa och hals, torr hud och trötthet.", "incorrectReasoning": null},
          {"text": "Minskad risk för allergier", "incorrectReasoning":"'Sjuka hus' kan snarare öka risken för allergier"}
          ],
          "correctAnswer": 2,
          "shortReasoning": "'Sjuka hus' kan ge irritation, torrhet och trötthet.",
          "longReasoning": "Vanliga symptom på att vistas i så kallade 'sjuka hus' (byggnader med dålig inomhusmiljö) inkluderar irritation i ögon, näsa och hals, torr hud, huvudvärk, trötthet och koncentrationssvårigheter. Orsakerna kan vara många, t.ex. dålig ventilation, fukt, mögel, kemiska emissioner från byggnadsmaterial eller bristfällig städning."
        },
        {
         "question": "Vilken typ av strålning avger en svetslåga?",
            "answers": [
              {"text": "Enbart synligt ljus", "incorrectReasoning": "En svetslåga avger även UV- och IR-strålning."},
              {"text":"Ultraviolett (UV) strålning, synligt ljus, och infraröd (IR) strålning", "incorrectReasoning": null},
              {"text": "Enbart infraröd (IR) strålning", "incorrectReasoning":"En svetslåga avger även UV-strålning och synligt ljus."},
              {"text": "Enbart ultraviolett (UV) strålning", "incorrectReasoning": "En svetslåga avger även IR-strålning och synligt ljus."}
              ],
            "correctAnswer": 1,
            "shortReasoning": "Svetslågor avger UV-, synlig och IR-strålning.",
            "longReasoning": "En svetslåga avger en kombination av ultraviolett (UV) strålning, synligt ljus, och infraröd (IR) strålning. Alla dessa typer av strålning kan vara skadliga, och därför krävs skyddsutrustning vid svetsning."
        },
         {
            "question": "Vilka typer av skador kan uppstå av UV-strålning från exempelvis svetsning?",
            "answers": [
              { "text": "Enbart hörselskador.", "incorrectReasoning": "Hörselskador orsakas av buller, inte UV-strålning." },
              { "text": "'Solbränna' och ögonskador.", "incorrectReasoning": null },
              { "text": "Enbart ledskador.", "incorrectReasoning": "Ledskador är inte en direkt följd av UV-strålning." },
              { "text": "Enbart förkylning.", "incorrectReasoning": "Förkylning orsakas av virus, inte UV-strålning." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "UV-strålning kan skada hud och ögon.",
            "longReasoning": "Ultraviolett (UV) strålning, som avges vid exempelvis svetsning, kan orsaka skador på huden (liknande solbränna) och ögonen (inflammationer, grå starr). Därför är det viktigt att använda skyddsutrustning som skyddar mot UV-strålning vid svetsning."
        },
        {
        "question": "Varför är det viktigt att skydda sig mot IR-strålning?",
        "answers":[
          {"text":"Den kan göra att man fryser.", "incorrectReasoning": "IR-strålning är värmestrålning, den kyler inte."},
          {"text":"Den kan orsaka ögonskador.", "incorrectReasoning": null},
          {"text": "Den kan orsaka hörselskador.", "incorrectReasoning": "Hörselskador orsakas av buller, inte IR-strålning."},
          {"text": "Den kan orsaka yrsel.", "incorrectReasoning":"Vissa personer kan bli yra av värme, men ögonskador är en större fara"}
          ],
         "correctAnswer": 1,
         "shortReasoning": "IR-strålning kan skada ögonen.",
         "longReasoning": "Infraröd (IR) strålning, även kallad värmestrålning, kan vid höga effekter och långvarig exponering orsaka ögonskador, som grå starr. Därför är det viktigt att använda ögonskydd vid arbete med starka IR-källor, t.ex. vid svetsning, smältning av metall och vissa torkningsprocesser."
        },
         {
         "question": "Vad kännetecknar laserstrålning?",
            "answers":[
                {"text":"Låg effekt och spritt ljus.", "incorrectReasoning":"Laserstrålning har hög effekt och är koncentrerat."},
                {"text":"Hög effekttäthet och mycket riktat ljus.", "incorrectReasoning": null},
                {"text": "Ofarligt för ögonen.", "incorrectReasoning": "Laserstrålning kan vara mycket farligt för ögonen."},
                {"text": "Används enbart i medicinska tillämpningar", "incorrectReasoning": "Laser används inom många områden"}
                ],
        "correctAnswer": 1,
        "shortReasoning": "Laserstrålning är koncentrerad och högeffektiv.",
        "longReasoning":"Laserstrålning kännetecknas av att den är mycket koncentrerad (riktad) och har hög effekttäthet. Även laser med relativt låg effekt kan vara farlig för ögonen, eftersom ljuset fokuseras till en mycket liten punkt på näthinnan."
        },
            {
                "question": "Vilken fara är *störst* vid exponering för stark laserstrålning?",
                "answers": [
                  { "text": "Hudskador.", "incorrectReasoning": "Även om huden kan skadas, är ögonen mycket känsligare." },
                  { "text": "Hörselskador.", "incorrectReasoning": "Hörselskador orsakas av buller, inte laserljus." },
                  { "text": "Ögonskador.", "incorrectReasoning": null },
                  { "text": "Förkylning.", "incorrectReasoning": "Förkylning orsakas av virus, inte laserljus." }
                ],
                "correctAnswer": 2,
                "shortReasoning": "Ögonskador är den största risken med laser.",
                "longReasoning": "Den största faran med stark laserstrålning är risken för allvarliga och permanenta ögonskador. Även en kort exponering för en direkt eller reflekterad laserstråle kan orsaka brännskador på näthinnan."
            },
          {
            "question": "Vad *bör* en bra arbetsställning vid en dator innehålla enligt texten?",
            "answers": [
            {"text":"Att man sitter helt stilla.", "incorrectReasoning": "Variation och rörelse är viktigt."},
            {"text": "Att man har möjlighet till variation och rörelse.", "incorrectReasoning":null},
            {"text": "Att man lutar sig bakåt hela tiden.", "incorrectReasoning": "Varierad ställning är bättre."},
            {"text": "Att man står upp och arbetar.", "incorrectReasoning":"Att stå hela tiden kan också vara belastande, variation är bäst."}
            ],
            "correctAnswer": 1,
            "shortReasoning":"Variation och rörelse är bra.",
            "longReasoning": "En bra arbetsställning vid en dator bör ge möjlighet till variation och rörelse. Att sitta helt stilla under långa perioder är belastande för kroppen. Man bör kunna växla mellan olika sittställningar, ta korta pauser och röra på sig regelbundet."
          },
          {
           "question": "Vilken del av kroppen bör ha stöd när man använder datormus?",
            "answers": [
            {"text": "Handleden.", "incorrectReasoning": "Underarmen ger bättre stöd."},
            {"text": "Underarmen.", "incorrectReasoning":null},
            {"text":"Överarmen", "incorrectReasoning": "Underarmen ger bäst stöd och avlastning."},
            {"text": "Axeln", "incorrectReasoning":"Underarmen är bäst."}
            ],
            "correctAnswer": 1,
            "shortReasoning": "Underarmen bör ha stöd.",
            "longReasoning": "När man använder datormus bör underarmen ha stöd och vila avspänt på bordet eller ett armstöd. Detta minskar belastningen på axel- och nackmusklerna och förebygger besvär."
          },
        {
            "question": "Varför bör man undvika att arbeta länge i samma ställning vid en dator?",
            "answers": [
              { "text": "För att det är tråkigt.", "incorrectReasoning": "Även om det kan vara tråkigt, är det framförallt belastningen som är problemet." },
              { "text": "För att det kan leda till belastningsskador.", "incorrectReasoning": null },
              { "text": "För att det minskar produktiviteten.", "incorrectReasoning": "Produktiviteten kan minska, men det primära skälet är risken för skador." },
              { "text": "För att det sliter på datormusen.", "incorrectReasoning": "Musens slitage är inte det primära problemet." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Långvarigt stillasittande belastar kroppen.",
            "longReasoning": "Att arbeta länge i samma ställning, även vid en dator, kan leda till statisk belastning på muskler och leder, vilket ökar risken för belastningsskador (t.ex. musarm, spänningshuvudvärk). Variation, rörelse och regelbundna pauser är viktiga för att förebygga sådana problem."
          },
         {
             "question": "Vilket påstående om ljus och belysning på en datorarbetsplats är korrekt?",
                "answers":[
                    {"text":"Dagsljus bör helst komma rakt framifrån.", "incorrectReasoning": "Det kan ge bländning och reflexer."},
                    {"text": "Starka kontraster i ljushet (luminans) är bra för ögonen.", "incorrectReasoning":"Starka kontraster kan trötta ut ögonen."},
                    {"text":"Dagsljus bör helst komma in från sidan.", "incorrectReasoning": null},
                    {"text": "Det är bäst att arbeta i mörker för att undvika reflexer.", "incorrectReasoning":"Mörker är inte bra för ögonen, lagom ljus behövs."}
                    ],
              "correctAnswer": 2,
              "shortReasoning": "Sidoljus minskar risken för bländning och reflexer.",
              "longReasoning": "För att skapa en bra ljusmiljö på en datorarbetsplats bör dagsljus helst komma in från sidan. Detta minskar risken för bländning och reflexer i bildskärmen. Starka kontraster i ljushet (luminans) bör undvikas, och det bör finnas möjlighet att skärma av direkt solljus."
        },
        {
          "question":"Vilken enhet används för att mäta belysningsstyrka?",
          "answers":[
            {"text":"Candela per kvadratmeter (cd/m2)", "incorrectReasoning": "Detta är enheten för luminans."},
            {"text":"Lumen (lm)", "incorrectReasoning":"Detta är enheten för ljusflöde."},
            {"text":"Lux (lx)", "incorrectReasoning":null},
            {"text":"Kelvin (K)", "incorrectReasoning":"Detta är enheten för färgtemperatur."}
          ],
          "correctAnswer": 2,
          "shortReasoning": "Belysningsstyrka mäts i lux.",
          "longReasoning": "Belysningsstyrkan, alltså hur mycket ljus som faller på en yta, mäts i enheten lux (lx). En lux motsvarar ett ljusflöde på en lumen per kvadratmeter."
        },
        {
          "question": "Vad är *inte* en del av det *termiska klimatet* inomhus?",
             "answers":[
             {"text": "Luftens temperatur.", "incorrectReasoning":"Temperatur är en central del av det termiska klimatet."},
             {"text":"Luftfuktighet.", "incorrectReasoning":"Luftfuktighet är en central del av det termiska klimatet."},
             {"text": "Belysningsstyrka.", "incorrectReasoning": null},
             {"text": "Luftrörelser (drag).", "incorrectReasoning": "Luftrörelser/drag påverkar värmeavgivningen och därmed det termiska klimatet."}
             ],
             "correctAnswer": 2,
             "shortReasoning": "Belysning är inte en del av det termiska klimatet.",
             "longReasoning": "Det termiska klimatet handlar om de faktorer som påverkar vår värmebalans och temperaturupplevelse inomhus. Detta inkluderar luftens temperatur, luftfuktighet, värmestrålning och luftrörelser (drag). Belysningsstyrka är en visuell faktor, inte en termisk."
        },
        {
        "question": "Vad är en vanlig rekommendation för inomhustemperatur på en arbetsplats?",
        "answers":[
        {"text":"15 °C", "incorrectReasoning": "Detta är för kallt för de flesta."},
        {"text": "20 °C", "incorrectReasoning": null},
        {"text": "25 °C", "incorrectReasoning": "Detta kan vara för varmt för många."},
        {"text": "30 °C", "incorrectReasoning": "Detta är för varmt för de flesta."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Runt 20°C rekommenderas ofta.",
        "longReasoning": "En vanlig rekommendation för inomhustemperatur på en arbetsplats vid normal aktivitet och klädsel är runt 20°C. Men individuella preferenser och typ av arbete kan påverka den optimala temperaturen."
        },
        {
           "question": "Vilket instrument används för att mäta lufthastighet?",
            "answers": [
                { "text": "Termometer.", "incorrectReasoning": "En termometer mäter temperatur." },
                { "text": "Hygrometer.", "incorrectReasoning": "En hygrometer mäter luftfuktighet." },
                { "text": "Anemometer.", "incorrectReasoning": null },
                { "text": "Luxmeter.", "incorrectReasoning": "En luxmeter mäter belysningsstyrka." }
            ],
            "correctAnswer": 2,
            "shortReasoning": "Anemometer mäter lufthastighet.",
            "longReasoning": "En anemometer är ett instrument som används för att mäta lufthastighet, vilket är viktigt för att bedöma drag och ventilation i en lokal. Lufthastigheten mäts vanligtvis i meter per sekund (m/s)."
        },
        {
        "question": "Vad menas med 'relativ luftfuktighet'?",
        "answers": [
          {"text": "Mängden vatten i luften, oavsett temperatur.", "incorrectReasoning":"Relativ fuktighet beror på temperaturen."},
          {"text":"Mängden vattenånga i luften i förhållande till den maximala mängd vattenånga luften kan innehålla vid en given temperatur.", "incorrectReasoning": null},
          {"text": "Temperaturen på luften.", "incorrectReasoning":"Temperatur och luftfuktighet är olika saker."},
          {"text":"Lufthastigheten.", "incorrectReasoning": "Lufthastighet och luftfuktighet är olika saker."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Relativ fuktighet = ånghalt i % av max vid given temperatur.",
        "longReasoning": "Relativ luftfuktighet anger hur mycket vattenånga som finns i luften i förhållande till den maximala mängd vattenånga som luften kan innehålla vid en given temperatur. Den uttrycks i procent (%)."
        },
        {
        "question":"Vad är 'drag' i arbetsmiljösammanhang?",
        "answers": [
        {"text": "En kemisk förening.", "incorrectReasoning": "Drag är en fysikalisk företeelse."},
        {"text":"Oönskade luftrörelser som kan upplevas som obehagliga.", "incorrectReasoning": null},
        {"text": "En typ av belysning.", "incorrectReasoning": "Drag har inget med belysning att göra."},
        {"text":"En typ av möbel.", "incorrectReasoning": "Drag är en luftrörelse."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Drag är oönskade luftrörelser.",
        "longReasoning": "Drag är oönskade och obehagliga luftrörelser inomhus. Drag kan orsakas av otätheter i byggnader, felaktigt inställd ventilation, temperaturskillnader eller öppna dörrar och fönster. Drag kan leda till obehag, muskelspänningar och ökad risk för förkylningar."
        },
         {
            "question": "Vad kännetecknar 'sjuka hus'?",
            "answers": [
              { "text": "Byggnader med bra ventilation och låg luftfuktighet.", "incorrectReasoning": "Detta beskriver en bra inomhusmiljö, inte ett 'sjukt hus'." },
              { "text": "Byggnader där de som vistas i dem upplever besvär som irritation i ögon och slemhinnor, huvudvärk, trötthet och hudproblem.", "incorrectReasoning": null },
              { "text": "Byggnader som är nyrenoverade.", "incorrectReasoning": "Nyrenovering är inte en garanti för dålig inomhusmiljö." },
              { "text": "Byggnader med en temperatur på exakt 20°C.", "incorrectReasoning": "Temperatur är bara en faktor, och 20°C är inte en indikation på ett 'sjukt hus'." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "'Sjuka hus' ger hälsobesvär.",
            "longReasoning": "'Sjuka hus' är en informell benämning på byggnader där de som vistas i dem upplever ospecifika hälsobesvär, som irritation i ögon, näsa och hals, huvudvärk, trötthet och hudproblem. Orsakerna kan vara många, t.ex. dålig ventilation, fukt- och mögelskador, kemiska emissioner från byggnadsmaterial, eller bristfällig städning."
        },
    {
    "question": "Vilken typ av strålning kan orsaka 'svetsblänk'?",
    "answers":[
    {"text": "Infraröd strålning.", "incorrectReasoning": "Infraröd strålning kan ge värmeskador, men inte 'svetsblänk'."},
    {"text":"Synligt ljus.", "incorrectReasoning": "Starkt synligt ljus kan blända, men ger inte samma skador som UV."},
    {"text": "Ultraviolett strålning.", "incorrectReasoning": null},
    {"text": "Radiovågor.", "incorrectReasoning":"Radiovågor är inte relevanta i detta sammanhang."}
    ],
    "correctAnswer": 2,
    "shortReasoning": "UV-strålning orsakar 'svetsblänk'.",
    "longReasoning": "'Svetsblänk' (fotokeratit eller snöblindhet) är en smärtsam inflammation i ögats hornhinna som orsakas av stark exponering för ultraviolett (UV) strålning, t.ex. vid svetsning utan tillräckligt ögonskydd."
    },{
      "question": "Vad händer när huden utsätts för UV-strålning?",
      "answers": [
        { "text": "Huden blir kall och blek.", "incorrectReasoning": "Detta är inte en effekt av UV-strålning." },
        { "text": "Huden blir brunfärgad, detta kallas solbränna, men kan även ge ögonskador.", "incorrectReasoning": null },
        { "text": "Huden blir mjuk och len.", "incorrectReasoning": "Detta är inte en effekt av UV-strålning." },
        { "text": "Huden får ökad blodcirkulation.", "incorrectReasoning": "Detta är en möjlig effekt, men inte det som primärt beskrivs i texten." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Hudrodnad (solbränna) och ögonskador.",
      "longReasoning": "Kraftig eller långvarig exponering för ultraviolett (UV) strålning, t.ex. från svetslågor eller solen, kan orsaka hudrodnad och inflammation (solbränna). UV-strålning kan också skada ögonen och orsaka inflammationer och på sikt grå starr."
    },
      {
      "question": "Vad kan, förutom UV-strålning, orsaka ögonskador vid svetsning?",
      "answers":[
          {"text":"Infraröd strålning.", "incorrectReasoning": null},
          {"text":"Lågfrekvent ljud.", "incorrectReasoning": "Ljud påverkar hörseln, inte synen."},
          {"text":"Syrebrist.", "incorrectReasoning":"Syrebrist påverkar hela kroppen, men inte specifikt ögonen på detta sätt."},
          {"text":"Kväveoxid.", "incorrectReasoning": "Kväveoxid är en farlig gas, men inte den primära orsaken till ögonskador vid svetsning."}
          ],
          "correctAnswer": 0,
          "shortReasoning": "IR-strålning (värmestrålning).",
          "longReasoning": "Förutom ultraviolett (UV) strålning avger svetslågor och smält metall även infraröd (IR) strålning, även kallad värmestrålning. IR-strålning kan vid kraftig exponering skada ögonen, bland annat genom att orsaka grå starr."
      },
    {
      "question": "Vilken typ av strålning används i mikrovågsugnar?",
      "answers":[
      {"text":"Ultraviolett strålning.", "incorrectReasoning": "UV-strålning används inte i mikrovågsugnar."},
      {"text": "Infraröd strålning.", "incorrectReasoning": "IR-strålning är värmestrålning, men inte den primära typen i mikrovågsugnar."},
      {"text":"Mikrovågor.", "incorrectReasoning": null},
      {"text": "Röntgenstrålning.", "incorrectReasoning":"Röntgenstrålning används inte i mikrovågsugnar."}
      ],
      "correctAnswer": 2,
      "shortReasoning": "Mikrovågsugnar använder mikrovågor.",
      "longReasoning": "Mikrovågsugnar använder sig av mikrovågor, en typ av elektromagnetisk strålning med en våglängd mellan 1 mm och ca 12 cm. Mikrovågorna får vattenmolekylerna i maten att vibrera, vilket genererar värme och tillagar maten."
    },
  {
          "question": "Vad kännetecknar laserstrålning?",
          "answers": [
            { "text": "Låg effekt och spritt ljus.", "incorrectReasoning": "Laserstrålning är koncentrerad och högeffektiv." },
            { "text": "Hög effekttäthet och mycket riktat ljus.", "incorrectReasoning": null },
            { "text": "Ofarligt för ögonen.", "incorrectReasoning": "Laserstrålning kan vara mycket farligt för ögonen." },
            { "text": "Används enbart i medicinska tillämpningar.", "incorrectReasoning": "Laser används inom många områden." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Laserstrålning är koncentrerad och högeffektiv.",
          "longReasoning": "Laserstrålning (Light Amplification by Stimulated Emission of Radiation) kännetecknas av att den är mycket koncentrerad (riktad), koherent (vågorna svänger i fas) och har hög effekttäthet. Detta gör att även laser med relativt låg effekt kan vara farlig för ögonen."
      },
      {
      "question": "Vilken är den *största* faran med laserstrålning?",
      "answers":[
          {"text": "Hudskador", "incorrectReasoning":"Huden kan skadas, men ögonen är *mycket* känsligare."},
          {"text": "Hörselskador", "incorrectReasoning": "Laserstrålning påverkar inte hörseln."},
          {"text": "Ögonskador", "incorrectReasoning":null},
          {"text":"Förkylning", "incorrectReasoning": "Laserstrålning orsakar inte förkylning."}
          ],
          "correctAnswer": 2,
          "shortReasoning": "Ögonskador är den primära faran.",
          "longReasoning":"Den absolut största faran med laserstrålning, även vid relativt låga effekter, är risken för allvarliga och permanenta ögonskador. Laserljuset kan fokuseras av ögats lins till en extremt liten punkt på näthinnan och orsaka brännskador."
      },
      {
      "question": "Vad av följande bör *inte* finnas på en datorarbetsplats?",
      "answers":[
          {"text": "Ett höj- och sänkbart bord.", "incorrectReasoning":"Höj- och sänkbara bord är *bra* for ergonomin."},
          {"text":"En stol som kan justeras i höjdled.", "incorrectReasoning": "Justerbar stol är *bra* for ergonomin."},
          {"text": "Ett tangentbord med låg profil.", "incorrectReasoning":"Lågprofiltangentbord är ofta *bra* för ergonomin."},
          {"text": "En sladdhärva (råttbo) av kablar", "incorrectReasoning": null}
      ],
      "correctAnswer": 3,
      "shortReasoning": "Sladdhärvor är en snubbelrisk och kan samla damm.",
      "longReasoning": "Ett \"råttbo\" av kablar och sladdar bör undvikas på en datorarbetsplats. Det utgör en snubbelrisk, försvårar städning och kan samla damm, vilket kan påverka inomhusluften negativt."
  
      },
  {
   "question": "Vad bör man göra för att minska risken för statisk elektricitet vid datorarbetsplatsen?",
   "answers": [
    { "text": "Använda heltäckningsmattor.", "incorrectReasoning": "Heltäckningsmattor kan *öka* risken för statisk elektricitet." },
    { "text": "Se till att all datautrustning är skyddsjordad.", "incorrectReasoning": null },
    { "text": "Använda kläder av syntetmaterial.", "incorrectReasoning": "Syntetmaterial kan *öka* risken för statisk elektricitet." },
    { "text": "Ha det så torrt som möjligt i rummet.", "incorrectReasoning": "Torr luft *ökar* risken för statisk elektricitet." }
   ],
   "correctAnswer": 1,
   "shortReasoning": "Skyddsjordning minskar risken för statisk elektricitet.",
   "longReasoning": "För att minska risken för statisk elektricitet och eventuella störningar från detta vid en datorarbetsplats, är det viktigt att all datautrustning är korrekt skyddsjordad. Det är även bra att undvika heltäckningsmattor och syntetmaterial, samt att se till att luftfuktigheten inte är för låg."
  },
  {
  "question": "Vilka ämnen räknas upp som exempel på *luftföroreningar* som bör undvikas på en arbetsplats?",
  "answers":[
      {"text": "Syrgas och kväve.", "incorrectReasoning": "Detta är vanliga, ofarliga gaser i luften."},
      {"text": "Koldioxid och vattenånga.", "incorrectReasoning":"Dessa finns naturligt i luften, även om för höga halter kan vara problem."},
      {"text": "Rök, gaser eller andra föroreningar som gör luften ohälsosam.", "incorrectReasoning": null},
      {"text":"Alla ämnen som luktar starkt.", "incorrectReasoning": "Stark lukt är inte alltid farligt, och farliga ämnen luktar inte alltid."}
  ],
  "correctAnswer":2,
  "shortReasoning": "Luftföroreningar är skadliga ämnen i luften.",
  "longReasoning": "Luftföroreningar på en arbetsplats kan vara rök, gaser, damm, ångor eller andra ämnen som sprids i luften och som kan vara skadliga för hälsan vid inandning eller hudkontakt. Exempel på luftföroreningar är avgaser, lösningsmedel, kemikalier, metallstoft och mögelsporer."
  },
   {
      "question": "Hur överförs smittämnen oftast mellan människor?",
      "answers": [
        { "text": "Genom luften.", "incorrectReasoning": "Luftburen smitta förekommer, men är inte det *oftast* förekommande." },
        { "text": "Via händerna.", "incorrectReasoning": null },
        { "text": "Genom maten.", "incorrectReasoning": "Matburen smitta förekommer, men är inte det *oftast* förekommande." },
        { "text": "Genom insekter.", "incorrectReasoning": "Insektsburen smitta är vanlig i vissa delar av världen, men inte generellt sett det vanligaste." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Handkontakt är en vanlig smittväg.",
      "longReasoning": "Den vanligaste överföringsvägen för smittämnen (virus, bakterier, etc.) mellan människor är via händerna. Man tar i förorenade ytor och för sedan smittämnena vidare till mun, näsa eller ögon. Därför är god handhygien så viktig."
    },
    {
          "question": "Vilket av följande är *inte* ett exempel på ett smittämne som kan spridas via händer eller föremål?",
          "answers": [
              { "text": "Virus", "incorrectReasoning": "Virus kan spridas via händer." },
              { "text": "Bakterier.", "incorrectReasoning": "Bakterier kan spridas via händer." },
              { "text": "Svamp.", "incorrectReasoning": "Svamp kan spridas via händer." },
              { "text": "Buller.", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "Buller är inte ett smittämne.",
          "longReasoning": "Virus, bakterier och svampar är alla exempel på mikroorganismer som kan orsaka sjukdomar och som kan spridas via direktkontakt (t.ex. handslag) eller indirekt kontakt (via förorenade ytor). Buller är en fysisk faktor, inte ett smittämne."
      },
      {
      "question": "Nämn ett exempel på en sjukdom som kan spridas via förorenad mat eller vatten?",
       "answers": [
        {"text":"Förkylning", "incorrectReasoning": "Förkylning sprids oftast via luften."},
        {"text":"Influensa", "incorrectReasoning": "Influensa sprids oftast via luften."},
        {"text": "Salmonella.", "incorrectReasoning": null},
        {"text": "Hösnuva.", "incorrectReasoning":"Hösnuva är en allergi, inte en infektion."}
      ],
      "correctAnswer": 2,
      "shortReasoning": "Salmonella sprids via förorenad mat/vatten.",
      "longReasoning": "Salmonella är en bakterie som kan orsaka matförgiftning. Den sprids via förorenade livsmedel, oftast kött, fågel, ägg och mejeriprodukter, eller via förorenat vatten."
      },
  {
      "question": "Vad menas med 'ergonomi'?",
      "answers": [
          { "text": "Läran om ekonomisk hushållning.", "incorrectReasoning": "Detta är en del av ekonomi, inte ergonomi." },
          { "text": "Läran om anpassning av arbete och miljö till människans behov och förutsättningar.", "incorrectReasoning": null },
          { "text": "Läran om hur man sparar energi.", "incorrectReasoning": "Detta är en del av miljöteknik, inte ergonomi." },
          { "text": "Läran om hur man kommunicerar effektivt.", "incorrectReasoning": "Detta är en del av kommunikationsvetenskap, inte ergonomi." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Ergonomi = anpassning av arbetet till människan.",
      "longReasoning": "Ergonomi är läran om hur man anpassar arbete, verktyg, maskiner och arbetsmiljö till människans fysiska och psykiska förutsättningar. Syftet är att skapa en säker, hälsosam och effektiv arbetsmiljö, och att förebygga belastningsskador och andra arbetsrelaterade besvär."
  },
    {
      "question": "Vad innebär 'belastningsergonomi'?",
       "answers": [
          {"text": "Att anpassa belysningen till synbehoven.", "incorrectReasoning": "Detta är en del av synergonomi."},
          {"text": "Att anpassa arbetsställningar, arbetsrörelser och fysisk belastning för att undvika skador på rörelseorganen.", "incorrectReasoning": null},
          {"text": "Att anpassa ljudnivån till hörseln.", "incorrectReasoning": "Detta är en del av bullerbekämpning."},
          {"text": "Att anpassa temperaturen till människans behov.", "incorrectReasoning": "Detta är en del av det termiska klimatet."}
          ],
       "correctAnswer": 1,
       "shortReasoning": "Belastningsergonomi = anpassning for att undvika belastningsskador.",
       "longReasoning": "Belastningsergonomi handlar om att anpassa arbetsställningar, arbetsrörelser, fysisk belastning och arbetsutrymme för att minska risken för belastningsskador och besvär i muskler, leder, senor och skelett. Det handlar om att undvika tunga lyft, repetitiva rörelser, obekväma arbetsställningar och långvarigt stillasittande."
      },
       {
       "question": "Vilken av följande faktorer påverkar *inte* belastningsergonomin?",
       "answers":[
       {"text":"Arbetsställning.", "incorrectReasoning": "Arbetsställning är centralt för belastningsergonomin."},
       {"text": "Arbetsrörelser.", "incorrectReasoning": "Arbetsrörelser är centralt för belastningsergonomin."},
       {"text": "Fysisk belastning (t.ex. lyft).", "incorrectReasoning": "Fysisk belastning är centralt för belastningsergonomin."},
       {"text": "Luftens kemiska sammansättning.", "incorrectReasoning": null}
       ],
       "correctAnswer": 3,
       "shortReasoning": "Luftens kemiska sammansättning är inte en belastningsergonomisk faktor.",
       "longReasoning": "Belastningsergonomi fokuserar på de *fysiska* aspekterna av arbetet som påverkar rörelseorganen (muskler, leder, skelett). Luftens kemiska sammansättning, t.ex. förekomst av farliga ämnen eller damm, är en viktig arbetsmiljöfaktor, men den faller under andra områden än just belastningsergonomi."
       },
    {
      "question":"Vilken av följande åtgärder är *minst* relevant för att förbättra belastningsergonomin vid datorarbete?",
      "answers":[
        {"text": "Att ha en justerbar stol.", "incorrectReasoning": "Justerbar stol är viktigt for bra ergonomi."},
        {"text":"Att ha ett höj- och sänkbart bord.", "incorrectReasoning": "Höj- och sänkbart bord är viktigt för variation."},
        {"text": "Att ha en stor och högupplöst skärm.", "incorrectReasoning": null},
        {"text": "Att ta regelbundna pauser och röra på sig.", "incorrectReasoning":"Pauser och rörelse är mycket viktigt."}
        ],
      "correctAnswer": 2,
      "shortReasoning": "Skärmstorlek är mindre viktig än variation och rörelse.",
      "longReasoning": "Även om en stor och högupplöst skärm kan vara bra för ögonen och minska ansträngningen, är det *mindre* direkt relaterat till belastningsergonomin än de andra alternativen. Justerbar stol och bord, samt regelbundna pauser och rörelse, är alla *direkt* kopplade till att minska den statiska belastningen på kroppen och förebygga belastningsskador."
    },
      {
          "question": "Vad är den vanligaste orsaken till anmälda arbetssjukdomar?",
          "answers": [
            { "text": "Kemiska faktorer.", "incorrectReasoning": "Kemiska faktorer är en orsak, men inte den vanligaste." },
            { "text": "Buller.", "incorrectReasoning": "Buller kan orsaka hörselskador, men är inte den vanligaste orsaken till arbetssjukdomar generellt." },
            { "text": "Belastningsfaktorer.", "incorrectReasoning": null },
            { "text": "Psykosociala faktorer.", "incorrectReasoning": "Psykosociala faktorer är en viktig orsak, men inte den allra vanligaste." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "Belastningsfaktorer är vanligaste orsaken.",
          "longReasoning": "Enligt texten är belastningsfaktorer den vanligaste orsaken till anmälda arbetssjukdomar. Detta understryker vikten av god belastningsergonomi på arbetsplatsen."
      },
      {
         "question": "Vad är *inte* ett exempel på en arbetsmiljöfaktor som kan påverka uppkomsten av en arbetsskada?",
          "answers": [
            {"text": "Dåligt underhållna maskiner.", "incorrectReasoning": "Dåligt underhåll kan öka risken för olyckor." },
            {"text": "Bristfällig information och utbildning.", "incorrectReasoning": "Bristande kunskap ökar risken för fel och olyckor." },
            { "text": "Felaktiga arbetsmetoder.", "incorrectReasoning": "Felaktiga metoder kan leda till belastningsskador och olyckor." },
            {"text": "Att företaget går med vinst.", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "Företagets vinst påverkar inte direkt arbetsmiljön.",
          "longReasoning": "Faktorer som dåligt underhållna maskiner, bristfällig information och utbildning, och felaktiga arbetsmetoder är alla exempel på *brister* i arbetsmiljön som kan öka risken för arbetsskador. Företagets ekonomiska resultat är *inte* en direkt arbetsmiljöfaktor i sig, även om ekonomiska problem *indirekt* kan påverka t.ex. resurser för säkerhetsåtgärder."
      },
      {
      "question": "Vad kallas det om en anställd utsätts för upprepade kränkande handlingar på jobbet?",
      "answers":[
      {"text":"Diskriminering.", "incorrectReasoning": "Diskriminering har en specifik juridisk definition."},
      {"text": "Mobbning (eller kränkande särbehandling).", "incorrectReasoning": null},
      {"text":"Ohälsa.", "incorrectReasoning": "Mobbning kan *leda* till ohälsa, men är inte ohälsa i sig."},
      {"text": "Arbetsolycka.", "incorrectReasoning":"Mobbning är inte en olycka."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Mobbning/kränkande särbehandling.",
      "longReasoning": "Upprepade negativa och kränkande handlingar mot en anställd på arbetsplatsen kallas mobbning eller, i juridiska termer, kränkande särbehandling. Detta kan inkludera förtal, utfrysning, förnedring, hot eller andra handlingar som syftar till att skada eller utesluta en person från arbetsgemenskapen."
      },
       {
      "question":"Vad säger Arbetsmiljölagen och diskrimineringslagen om mobbning (kränkande särbehandling) på arbetsplatsen/i skolan?",
          "answers":[
            {"text": "Det är tillåtet om det inte är alltför grovt.", "incorrectReasoning":"All mobbning är förbjuden."},
            {"text": "Det är förbjudet, och arbetsgivaren/skolledningen har en skyldighet att förebygga och åtgärda det.", "incorrectReasoning": null},
            {"text":"Det är en fråga för de anställda att lösa själva.", "incorrectReasoning":"Arbetsgivaren/skolledningen har ett ansvar."},
            {"text": "Det är tillåtet om det sker utanför arbetstid.", "incorrectReasoning": "Arbetsmiljölagen och diskrimineringslagen gäller även om mobbningen sker i anslutning till arbetet/skolan."}
          ],
          "correctAnswer": 1,
          "shortReasoning": "Mobbning är förbjudet, och arbetsgivaren/skolan är ansvarig.",
          "longReasoning": "Både Arbetsmiljölagen och Diskrimineringslagen förbjuder mobbning och kränkande särbehandling på arbetsplatsen och i skolan. Arbetsgivaren (eller skolledningen för elever) har en skyldighet att aktivt förebygga och åtgärda mobbning, och att utreda och vidta åtgärder om mobbning förekommer."
      },
      {
         "question": "Vilken myndighet kan man kontakta om man blir mobbad i skolan och skolan inte agerar?",
          "answers":[
            {"text":"Arbetsmiljöverket.", "incorrectReasoning": "Arbetsmiljöverket hanterar främst arbetsmiljöfrågor för anställda, men kan i vissa fall även agera för elever."},
            {"text": "Barn- och elevombudet (BEO) vid Skolinspektionen.", "incorrectReasoning": null},
            {"text":"Diskrimineringsombudsmannen (DO).", "incorrectReasoning":"DO hanterar diskriminering, vilket kan inkludera mobbning, men BEO är mer specifikt för elever."},
            {"text":"Alla ovanstående.", "incorrectReasoning":"Alla kan kontaktas i olika situationer"}
            ],
          "correctAnswer": 3,
          "shortReasoning": "BEO, Skolinspektionen, AV och DO kan kontaktas.",
          "longReasoning": "Om man blir mobbad i skolan och skolan inte vidtar tillräckliga åtgärder kan man vända sig till Barn- och elevombudet (BEO) vid Skolinspektionen. BEO utreder anmälningar om kränkande behandling och kan kräva att skolan vidtar åtgärder. Man kan också vända sig till Arbetsmiljöverket (om det rör arbetsmiljön) eller Diskrimineringsombudsmannen (DO) (om mobbningen har samband med någon av diskrimineringsgrunderna)."
      },
      {
        "question":"Vad av följande är INTE ett av stegen i det systematiska arbetsmiljöarbetet (SAM)?",
        "answers":[
          {"text":"Planering.", "incorrectReasoning": "Planering är ett av stegen."},
          {"text": "Genomförande.", "incorrectReasoning":"Genomförande är ett av stegen."},
          {"text": "Uppföljning", "incorrectReasoning": "Uppföljning är ett av stegen."},
          {"text": "Bestraffning", "incorrectReasoning":null}
        ],
        "correctAnswer": 3,
        "shortReasoning": "SAM innehåller inte 'bestraffning' som ett formellt steg.",
        "longReasoning": "De fyra stegen i det systematiska arbetsmiljöarbetet (SAM) är: Planering, Genomförande, Uppföljning, och Tillsyn (av Arbetsmiljöverket). 'Bestraffning' är inte en del av den formella SAM-processen, även om konsekvenser kan bli aktuella vid allvarliga överträdelser."
      },
     {
          "question": "Vad *ska* en skyddskommitté göra enligt Arbetsmiljölagen?",
          "answers": [
              { "text": "Ansvara för all städning på arbetsplatsen.", "incorrectReasoning": "Städning är en del av arbetsmiljön, men inte skyddskommitténs huvuduppgift." },
              { "text": "Delta i planeringen av arbetsmiljöarbetet och följa upp hur det genomförs.", "incorrectReasoning": null },
              { "text": "Besluta om löner och anställningsvillkor.", "incorrectReasoning": "Detta är fackliga förhandlingar, inte skyddskommitténs uppgift." },
              { "text": "Ansvara för inköp av alla maskiner.", "incorrectReasoning": "Skyddskommittén kan vara involverad i inköp ur arbetsmiljösynpunkt, men har inte det övergripande ansvaret." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Skyddskommittén ska delta i planering och uppföljning.",
          "longReasoning": "Enligt Arbetsmiljölagen ska en skyddskommitté (eller motsvarande organ på mindre arbetsplatser) delta i planeringen av arbetsmiljöarbetet, följa upp hur det genomförs, och behandla frågor som rör företagshälsovård, handlingsplaner, lokaler, maskiner, arbetsmetoder, rehabilitering och arbetsanpassning."
        },
  {
          "question": "Vad innebär det att Arbetsmiljölagen är en ramlag?",
          "answers": [
            { "text": "Att den bara gäller i vissa branscher.", "incorrectReasoning": "AML gäller generellt, med vissa undantag." },
            { "text": "Att den innehåller detaljerade regler för alla tänkbara situationer.", "incorrectReasoning": "En ramlag ger de övergripande principerna, detaljerna finns i föreskrifter." },
            { "text": "Att den sätter de övergripande ramarna och principerna, som sedan preciseras i förordningar och föreskrifter.", "incorrectReasoning": null },
            { "text": "Att den är frivillig att följa.", "incorrectReasoning": "AML är tvingande." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "Ramlag = övergripande principer.",
          "longReasoning": "Att Arbetsmiljölagen (AML) är en ramlag innebär att den anger de grundläggande principerna och kraven för arbetsmiljöarbetet, men inte i detalj reglerar hur allt ska göras. De mer specifika och detaljerade reglerna finns i Arbetsmiljöverkets förordningar och föreskrifter (AFS)."
      },
      {
         "question": "Vad av följande är exempel på *fysiska* arbetsmiljöfaktorer?",
          "answers": [
            { "text": "Stress och otydlig arbetsledning.", "incorrectReasoning": "Detta är psykosociala faktorer." },
            { "text": "Buller, vibrationer och belysning.", "incorrectReasoning": null },
            { "text": "Mobbning och kränkande särbehandling.", "incorrectReasoning": "Detta är psykosociala faktorer." },
            { "text": "Låg lön och osäkra anställningsvillkor.", "incorrectReasoning": "Detta är organisatoriska/ekonomiska faktorer, inte primärt fysiska." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Fysiska faktorer = buller, vibrationer, ljus, etc.",
          "longReasoning": "Fysiska arbetsmiljöfaktorer är sådana faktorer i den fysiska omgivningen som kan påverka hälsan och säkerheten. Exempel inkluderar buller, vibrationer, belysning, klimat (temperatur, luftfuktighet, drag), strålning, kemiska ämnen och luftföroreningar."
      },
      {
      "question": "Vad av följande är *inte* en vanlig orsak till att en brand startar?",
      "answers":[
      {"text": "Heta arbeten (t.ex. svetsning) utan tillräckliga försiktighetsåtgärder.", "incorrectReasoning": "Heta arbeten är en vanlig brandorsak."},
      {"text": "Felaktig hantering av brandfarliga varor.", "incorrectReasoning": "Detta är en vanlig orsak."},
      {"text": "Elektriska fel.", "incorrectReasoning":"Elfel är en vanlig brandorsak"},
      {"text":"Att använda skyddsutrustning", "incorrectReasoning": null}
      ],
      "correctAnswer":3,
      "shortReasoning": "Skyddsutrustning minskar risker, inte ökar dem.",
      "longReasoning": "Att använda korrekt skyddsutrustning är en *förebyggande* åtgärd och *minskar* risken för olyckor och skador, inklusive bränder. Det är *inte* en orsak till att bränder startar. Vanliga brandorsaker är däremot felaktig hantering av brandfarliga varor, heta arbeten, elektriska fel, anlagda bränder och rökning."
      },
  {
       "question": "Vilken färg har skyltar som visar var brandredskap finns?",
          "answers":[
            {"text": "Grön med vita symboler", "incorrectReasoning": "Gröna skyltar används för nödutgångar."},
            {"text":"Blå med vita symboler", "incorrectReasoning": "Blå skyltar är ofta påbudsskyltar."},
            {"text":"Röd med vita symboler", "incorrectReasoning": null},
            {"text": "Gul med svarta symboler", "incorrectReasoning":"Gula skyltar är ofta varningsskyltar."}
          ],
          "correctAnswer": 2,
          "shortReasoning": "Brandredskapsskyltar är röda och vita.",
          "longReasoning": "Skyltar som visar var brandredskap (brandsläckare, brandposter, brandfiltar, etc.) finns är röda med vita symboler. Detta är en standardiserad skyltning som är lätt att känna igen i en nödsituation."
      },
      {
       "question": "Vad ska man göra om det börjar brinna i ens egna kläder?",
       "answers":[
       {"text":"Springa så fort man kan.", "incorrectReasoning": "Detta kan förvärra branden."},
       {"text":"Lägga sig ned och rulla runt för att kväva elden.", "incorrectReasoning": null},
       {"text":"Hälla vatten över sig.", "incorrectReasoning": "Om vatten finns nära till hands kan det användas, men att rulla är oftast snabbare."},
       {"text":"Ta av sig kläderna omedelbart.", "incorrectReasoning": "Detta kan vara svårt och ta för lång tid."}
       ],
      "correctAnswer": 1,
      "shortReasoning": "Lägg dig ned och rulla.",
      "longReasoning": "Om det börjar brinna i ens egna kläder är den bästa åtgärden att snabbt lägga sig ned på marken och rulla runt. Detta kväver elden genom att minska syretillförseln."
      },
    {
       "question": "Vilken åtgärd är *första* steget i 'Rädda-Larma-Varna-Släck'-principen vid brand?",
          "answers":[
            {"text": "Larma.", "incorrectReasoning": "Rädda kommer före larma."},
            {"text":"Varna.", "incorrectReasoning": "Rädda kommer före varna."},
            {"text": "Släck.", "incorrectReasoning": "Släck kommer sist."},
            {"text": "Rädda.", "incorrectReasoning": null}
          ],
          "correctAnswer": 3,
          "shortReasoning": "Rädda först.",
          "longReasoning": "Vid en brand ska man agera enligt principen 'Rädda-Larma-Varna-Släck'. Det första och viktigaste steget är att *rädda* de personer som är i omedelbar fara, *innan* man larmar, varnar andra eller försöker släcka branden."
      },
      {
        "question": "Vilken typ av strålning kan ge 'solbränna'?",
        "answers": [
          { "text": "Infraröd strålning.", "incorrectReasoning": "IR-strålning är värmestrålning." },
          { "text": "Radiovågor.", "incorrectReasoning": "Radiovågor ger inte solbränna." },
          { "text": "Ultraviolett strålning.", "incorrectReasoning": null },
          { "text": "Mikrovågor.", "incorrectReasoning": "Mikrovågor används i mikrovågsugnar, inte för solbränna." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "UV-strålning ger solbränna.",
        "longReasoning": "Ultraviolett (UV) strålning från solen eller från artificiella källor som svetslågor är det som orsakar solbränna (hudrodnad och inflammation). Överexponering för UV-strålning ökar också risken för hudcancer."
      },
      {
        "question": "Vad är ett 'smittämne'?",
        "answers":[
        {"text": "Ett ämne som luktar illa.", "incorrectReasoning": "Lukt är inte direkt relaterat till smitta."},
        {"text":"Ett ämne som kan orsaka sjukdom, t.ex. virus, bakterier eller svampar.", "incorrectReasoning":null},
        {"text": "Ett ämne som är farligt att röra vid.", "incorrectReasoning": "Detta kan vara farliga kemikalier, men inte nödvändigtvis smittämnen."},
        {"text":"Ett ämne som är förbjudet att använda.", "incorrectReasoning": "Förbud kan bero på andra saker än smitta."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Smittämnen är sjukdomsframkallande mikroorganismer.",
        "longReasoning": "Ett smittämne är en mikroorganism (virus, bakterie, svamp eller parasit) som kan orsaka infektion eller sjukdom hos en människa, djur eller växt."
        },
          {
        "question":"Hur kan smittämnen *inte* spridas?",
         "answers":[
         {"text":"Genom direktkontakt med en smittad person.", "incorrectReasoning": "Direktkontakt är en vanlig smittväg."},
         {"text": "Genom förorenad mat eller vatten.", "incorrectReasoning":"Detta är en vanlig smittväg."},
         {"text": "Genom insektsbett.", "incorrectReasoning": "Detta är en vanlig smittväg i vissa delar av världen."},
         {"text": "Genom tankeöverföring", "incorrectReasoning":null}
         ],
         "correctAnswer": 3,
         "shortReasoning": "Tankeöverföring är ingen känd smittväg.",
         "longReasoning": "Smittämnen kan spridas på många sätt, bland annat genom direktkontakt (hudkontakt, kyssar), indirekt kontakt (förorenade föremål), luftburen smitta (droppar eller aerosoler), via förorenad mat eller vatten, och via insekter (t.ex. myggor, fästingar). Tankeöverföring är *inte* en vetenskapligt erkänd smittväg."
        },
       {
            "question": "Varför är god handhygien så viktigt på arbetsplatser?",
            "answers": [
              { "text": "För att händerna ska lukta gott.", "incorrectReasoning": "Lukt är inte det primära skälet." },
              { "text": "För att förhindra spridning av smittämnen.", "incorrectReasoning": null },
              { "text": "För att det ser trevligt ut.", "incorrectReasoning": "Utseende är inte det primära skälet." },
              { "text": "För att händerna ska bli starkare.", "incorrectReasoning": "Handhygien stärker inte händerna." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "God handhygien minskar smittspridning.",
            "longReasoning": "God handhygien, framför allt regelbunden och noggrann handtvätt med tvål och vatten, är en av de viktigaste åtgärderna för att förhindra spridning av smittämnen (bakterier, virus, etc.) på arbetsplatser, i skolor och i samhället i stort. Händerna är en vanlig smittväg."
        },
        {
         "question":"Vad menas med 'farliga ämnen' i arbetsmiljösammanhang?",
        "answers":[
        {"text": "Ämnen som luktar illa.", "incorrectReasoning":"Lukt är inte alltid en indikation på fara."},
        {"text": "Ämnen som kan orsaka skada på hälsan, t.ex. genom inandning, hudkontakt eller förtäring.", "incorrectReasoning": null},
        {"text": "Ämnen som är dyra.", "incorrectReasoning": "Kostnad är inte relevant för farligheten."},
        {"text":"Ämnen som är svåra att få tag på.", "incorrectReasoning":"Tillgång är inte relevant för farligheten."}
            ],
        "correctAnswer": 1,
        "shortReasoning": "Farliga ämnen kan skada hälsan.",
        "longReasoning":"Farliga ämnen är kemiska ämnen, blandningar eller material som, på grund av sina inneboende egenskaper (t.ex. giftighet, frätande verkan, brandfarlighet), kan orsaka skada på människors hälsa, miljön eller egendom vid hantering, användning eller exponering."
        },
       {
        "question": "Vad är *inte* ett exempel på ett farligt ämne som nämns i texten?",
         "answers":[
         {"text":"Lacknafta", "incorrectReasoning": "Lacknafta nämns som ett lösningsmedel."},
         {"text": "Etylenglykol", "incorrectReasoning":"Etylenglykol nämns som ett exempel."},
         {"text": "Syrgas", "incorrectReasoning": null},
         {"text": "Styren", "incorrectReasoning":"Styren nämns som en risk vid upphettning av plast."}
         ],
         "correctAnswer": 2,
         "shortReasoning": "Syrgas är nödvändigt för livet och inte farligt i sig.",
         "longReasoning": "Texten nämner lacknafta, etylenglykol, styren, toluen, metanol, etanol och aceton som exempel på farliga ämnen eller ämnen som ingår i farliga produkter. Syrgas är visserligen nödvändigt för förbränning och kan i *höga koncentrationer* utgöra en brandrisk, men det är inte ett *giftigt* eller *frätande* ämne i sig."
        },
       {
        "question": "Hur ska kemiska produkter vara märkta enligt gällande regler?",
        "answers": [
        {"text": "Med enbart produktnamnet.", "incorrectReasoning":"Märkningen måste vara mer omfattande."},
        {"text":"Med symboler, riskfraser och skyddsfraser enligt ett internationellt system.", "incorrectReasoning": null},
        {"text": "Med enbart tillverkarens namn.", "incorrectReasoning": "Märkningen måste vara mer omfattande."},
        {"text":"Med enbart varningssymboler", "incorrectReasoning":"Det krävs även textinformation"}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Kemikalier ska märkas med farosymboler och text.",
        "longReasoning": "Kemiska produkter ska vara märkta enligt ett internationellt harmoniserat system (GHS/CLP). Märkningen ska innehålla farosymboler (piktogram), signalord (t.ex. 'Fara', 'Varning'), faroangivelser (som beskriver faran) och skyddsangivelser (som ger råd om hur man hanterar produkten säkert)."
        },
        {
       "question": "Vad ska finnas på en arbetsplats där kemiska produkter hanteras?",
       "answers":[
        {"text": "En lista över alla anställdas favoritkemikalier.", "incorrectReasoning":"Det är inte relevant."},
        {"text": "En förteckning över de kemikalier som hanteras.", "incorrectReasoning": null},
        {"text": "En lista över alla leverantörer.", "incorrectReasoning":"Det är inte det primära."},
        {"text": "En prislista över kemikalierna.", "incorrectReasoning": "Prislistan är inte relevant för säkerheten."}
       ],
       "correctAnswer": 1,
       "shortReasoning": "Förteckning över kemikalier.",
       "longReasoning": "På en arbetsplats där kemiska produkter hanteras ska det finnas en aktuell förteckning över dessa produkter. Förteckningen ska göra det lätt att identifiera vilka kemikalier som finns, var de förvaras och vilka risker de är förknippade med."
        },
    {
        "question": "Vad menas med 'ergonomi'?",
        "answers": [
            { "text": "Läran om ekonomisk hushållning.", "incorrectReasoning": "Detta är en del av ekonomi, inte ergonomi." },
            { "text": "Läran om anpassning av arbete och miljö till människans behov och förutsättningar.", "incorrectReasoning": null },
            { "text": "Läran om hur man sparar energi.", "incorrectReasoning": "Detta är en del av miljöteknik, inte ergonomi." },
            { "text": "Läran om hur man kommunicerar effektivt.", "incorrectReasoning": "Detta är en del av kommunikationsvetenskap, inte ergonomi." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Ergonomi = anpassning av arbetet till människan.",
        "longReasoning": "Ergonomi är läran om hur man anpassar arbete, verktyg, maskiner och arbetsmiljö till människans fysiska och psykiska förutsättningar. Syftet är att skapa en säker, hälsosam och effektiv arbetsmiljö, och att förebygga belastningsskador och andra arbetsrelaterade besvär."
    },
    {
     "question": "Vad innebär *belastnings*ergonomi?",
     "answers":[
     {"text": "Att anpassa belysningen så man ser bra", "incorrectReasoning":"Detta är synergonomi, en underkategori."},
     {"text": "Att anpassa ljudnivån så man hör bra.", "incorrectReasoning":"Detta handlar om buller."},
     {"text": "Att anpassa arbetsställningar och arbetsrörelser så att man undviker skador på muskler och leder.", "incorrectReasoning": null},
     {"text": "Att se till att man har rast ofta.", "incorrectReasoning": "Raster är viktigt, men detta beskriver inte *vad* belastningsergonomi är."}
     ],
     "correctAnswer": 2,
     "shortReasoning": "Belastningsergonomi handlar om att undvika felaktig belastning på kroppen.",
     "longReasoning": "Belastningsergonomi är den del av ergonomin som fokuserar på att anpassa arbetsställningar, arbetsrörelser, och den fysiska belastningen (t.ex. lyft, repetitiva rörelser) för att förebygga skador och besvär i rörelseorganen (muskler, leder, skelett, senor)."
    },
    {
     "question": "Varför är det viktigt att variera sin arbetsställning?",
     "answers":[
       {"text":"För att det är roligare.", "incorrectReasoning": "Variation kan göra arbetet roligare, men det primära skälet är hälsan."},
       {"text": "För att undvika statisk belastning och belastningsskador.", "incorrectReasoning":null},
       {"text":"För att man ska kunna använda olika verktyg.", "incorrectReasoning": "Verktygsanvändning kan kräva variation, men det är inte det grundläggande skälet."},
       {"text": "För att chefen säger att man ska göra det.", "incorrectReasoning":"Variation är viktigt oavsett vad chefen säger."}
     ],
     "correctAnswer": 1,
     "shortReasoning": "Variation minskar risken för belastningsskador.",
     "longReasoning": "Att variera sin arbetsställning är viktigt för att undvika statisk belastning, vilket innebär att samma muskler och leder belastas under lång tid i samma position. Statisk belastning kan leda till trötthet, smärta och på sikt belastningsskador."
    },
    {
    "question": "Vad är *inte* ett exempel på en åtgärd för att förbättra belastningsergonomin vid en datorarbetsplats?",
    "answers":[
      {"text": "Att ha en justerbar stol.", "incorrectReasoning": "Justerbar stol är bra för ergonomin."},
      {"text": "Att ha ett höj- och sänkbart bord.", "incorrectReasoning": "Höj- och sänkbart bord är bra för variation."},
      {"text": "Att ta regelbundna pauser och röra på sig.", "incorrectReasoning": "Pauser och rörelse är bra för att minska statisk belastning."},
      {"text": "Att ha en fast och oföränderlig arbetsställning hela dagen.", "incorrectReasoning":null}
    ],
    "correctAnswer": 3,
    "shortReasoning": "Variation är nyckeln, inte en fast ställning.",
    "longReasoning": "En fast och oföränderlig arbetsställning hela dagen är *dåligt* ur belastningsergonomisk synpunkt. De andra alternativen – justerbar stol, höj- och sänkbart bord, och regelbundna pauser – är alla exempel på *bra* åtgärder för att förbättra belastningsergonomin och minska risken för belastningsskador vid datorarbete."
    },
    {
       "question": "Vad är *inte* en del av det *termiska klimatet* inomhus?",
        "answers":[
        {"text": "Luftens temperatur.", "incorrectReasoning":"Temperatur är en del av det termiska klimatet."},
        {"text":"Luftfuktighet.", "incorrectReasoning":"Luftfuktighet påverkar hur vi upplever temperaturen."},
        {"text": "Lufthastighet (drag).", "incorrectReasoning": "Drag påverkar värmeavgivningen och därmed det termiska klimatet."},
        {"text": "Ljusstyrka.", "incorrectReasoning": null}
        ],
        "correctAnswer":3,
        "shortReasoning": "Ljusstyrka är inte en del av *termiskt* klimat.",
        "longReasoning": "Det termiska klimatet inomhus handlar om de faktorer som påverkar vår värmebalans och hur vi upplever temperaturen. Detta inkluderar luftens temperatur, luftfuktighet, luftrörelser (drag) och värmestrålning från omgivande ytor. Ljusstyrka och belysning är *visuella* faktorer, inte *termiska*."
    },
    {
        "question":"Vad kallas det när man mäter de faktorer som ingår i det termiska klimatet?",
        "answers":[
        {"text":"Termisk mätning", "incorrectReasoning":"Detta är ett generellt begrepp."},
        {"text":"Klimatmätning.", "incorrectReasoning":null},
        {"text":"Temperaturmätning", "incorrectReasoning":"Temperaturmätning är *en* del av klimatmätningen, men inte allt."},
        {"text":"Växthusgasmätning", "incorrectReasoning": "Detta är relaterat till global uppvärmning, inte inomhusklimat."}
        ],
        "correctAnswer":1,
        "shortReasoning": "Klimatmätning.",
        "longReasoning": "När man mäter de faktorer som ingår i det termiska klimatet, såsom lufttemperatur, luftfuktighet, lufthastighet (drag) och värmestrålning, kallas det för en klimatmätning. Detta görs för att bedöma om inomhusklimatet är behagligt och hälsosamt."
    },
    {
        "question": "Vilket påstående om ljus och åldrande är korrekt?",
        "answers": [
          { "text": "Äldre personer behöver mindre ljus än yngre.", "incorrectReasoning": "Äldre behöver *mer* ljus." },
          { "text": "Yngre personer behöver mer ljus än äldre.", "incorrectReasoning": "Äldre behöver mer ljus." },
          { "text": "Ljusbehovet är detsamma oavsett ålder.", "incorrectReasoning": "Ljusbehovet förändras med åldern." },
          { "text": "Äldre personer behöver *betydligt* mer ljus än yngre.", "incorrectReasoning": null }
        ],
        "correctAnswer": 3,
        "shortReasoning": "Äldre behöver mer ljus.",
        "longReasoning": "Ljusbehovet ökar med stigande ålder. En 60-åring behöver, enligt texten, minst dubbelt så mycket ljus som en 40-åring för att uppfatta synintryck på samma sätt. Detta beror bland annat på att ögats lins stelnar och pupillens förmåga att anpassa sig till olika ljusförhållanden minskar."
    },
    {
     "question": "Vilken är den *första* åtgärden man bör vidta vid en brand, enligt 'Rädda-Larma-Varna-Släck'-principen?",
     "answers":[
     {"text":"Larma räddningstjänsten.", "incorrectReasoning": "Det kommer efter att ha räddat de som är i fara."},
     {"text": "Varna andra i närheten.", "incorrectReasoning": "Det kommer efter att ha räddat de som är i fara."},
     {"text": "Försöka släcka branden.", "incorrectReasoning": "Det kommer sist, efter att ha räddat, larmat och varnat."},
     {"text": "Rädda personer som är i omedelbar fara.", "incorrectReasoning": null}
     ],
     "correctAnswer": 3,
     "shortReasoning": "Rädda först.",
     "longReasoning":"Vid en brand ska man agera enligt ordningsföljden 'Rädda-Larma-Varna-Släck'. Det *första* och viktigaste steget är att *rädda* de personer som befinner sig i omedelbar fara och få ut dem till en säker plats. Först *därefter* ska man larma räddningstjänsten, varna andra och, om det är möjligt och säkert, försöka släcka branden."
    }
    ]
  },
  {
    name: "Utan el stannar Sverige",
    source: "./pdf/Arbetsmiljö och säkerhet - Faktabok.pdf",
    questions: [
      {
          "question": "Vilka är de två största källorna till elproduktion i Sverige idag?",
          "answers": [
              { "text": "Vindkraft och solenergi.", "incorrectReasoning": "Dessa är växande, men inte de största." },
              { "text": "Vattenkraft och kärnkraft.", "incorrectReasoning": null },
              { "text": "Kol och olja.", "incorrectReasoning": "Dessa används i mindre utsträckning i Sverige." },
              { "text": "Naturgas och biobränslen.", "incorrectReasoning": "Dessa bidrar, men inte mest." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Vattenkraft och kärnkraft.",
          "longReasoning": "Texten anger att vattenkraft och kärnkraft står för cirka 94% av Sveriges totala elbehov, vilket gör dem till de två dominerande energikällorna."
      },
      {
          "question": "Varför transporteras el med hög spänning i stamnätet?",
          "answers": [
              { "text": "För att göra elen starkare.", "incorrectReasoning": "Styrkan (strömmen) är inte det primära, utan minskade förluster." },
              { "text": "För att minska förlusterna i ledningarna.", "incorrectReasoning": null },
              { "text": "För att göra elen säkrare.", "incorrectReasoning": "Högspänning är farligare, men förlusterna minskar." },
              { "text": "För att det är billigare.", "incorrectReasoning": "Kostnaden är inte den direkta anledningen." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Hög spänning minskar energiförluster.",
          "longReasoning": "El transporteras med hög spänning i stamnätet (och i viss mån regionnäten) för att minska energiförlusterna under överföringen. Högre spänning innebär lägre strömstyrka för samma effekt, och därmed mindre förluster i form av värme i ledningarna."
      },
      {
          "question": "Vilken spänning används i stamnätet?",
          "answers": [
              { "text": "230 V", "incorrectReasoning": "Detta är spänningen i vanliga vägguttag." },
              { "text": "400 V", "incorrectReasoning": "Detta är spänningen för vissa starkströmsapparater." },
              { "text": "20-130 kV", "incorrectReasoning": "Detta är spänningen i regionnäten." },
              { "text": "400 kV", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "400 kV i stamnätet.",
          "longReasoning": "I det svenska stamnätet, som är elens 'motorvägar', används en spänning på 400 kV (kilovolt) för att effektivt transportera stora mängder energi över långa avstånd."
      },
      {
          "question": "Vilken spänning används normalt i vanliga vägguttag i svenska hem?",
          "answers": [
              { "text": "12 V", "incorrectReasoning": "Detta är en vanlig spänning för klenspänning, t.ex. i bilar." },
              { "text": "230 V", "incorrectReasoning": null },
              { "text": "400 V", "incorrectReasoning": "Detta är en trefasspänning för starkare apparater." },
              { "text": "1000 V", "incorrectReasoning": "Detta är en mycket hög spänning, inte för hushållsbruk." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "230 V i vanliga vägguttag.",
          "longReasoning": "Den normala spänningen i vanliga vägguttag i svenska hem (och de flesta europeiska länder) är 230 V (volt). Detta är en enfasspänning som används för de flesta hushållsapparater."
      },
         {
          "question": "Vad kallas de ledningar som distribuerar el från stamnätet till regionnät?",
          "answers": [
            { "text": "Motorvägar.", "incorrectReasoning": "Detta är en liknelse, inte det faktiska namnet." },
            { "text": "Länsvägar.", "incorrectReasoning": "Detta är en liknelse för distributionsnätet, men fel nivå." },
            { "text": "Riksvägar.", "incorrectReasoning": null },
            { "text": "Elkablar.", "incorrectReasoning": "Detta är en generell term, inte den specifika benämningen." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "Elens 'riksvägar'.",
          "longReasoning": "Texten använder liknelsen 'riksvägar' för att beskriva de ledningar som överför el från stamnätet (som liknas vid motorvägar) till regionnäten. Dessa ledningar har en spänning på 20-130 kV."
      },
      {
      "question": "Vem äger elnätet i Sverige?",
      "answers": [
      {"text": "Staten.", "incorrectReasoning":"Elnätet kan ägas av staten, men också av andra."},
      {"text": "Kommunerna.", "incorrectReasoning":"Elnätet kan ägas av kommuner, men också av andra."},
      {"text":"Privata företag", "incorrectReasoning":"Elnätet kan ägas av privata företag men också av andra."},
      {"text":"Staten, kommunerna eller privata företag.", "incorrectReasoning": null}
          ],
      "correctAnswer": 3,
      "shortReasoning": "Både stat, kommun och privat.",
      "longReasoning": "Elnätet i Sverige kan ägas av staten, kommuner eller privata företag. Oavsett ägande krävs tillstånd (koncession) för att driva elnät."
      },
      {
      "question": "Vad är en 'nätägare'?",
      "answers": [
      {"text": "Den som tillverkar el.", "incorrectReasoning": "Detta är elproducenten."},
      {"text":"Den som äger och driver elnätet och ansvarar för att elen transporteras.", "incorrectReasoning": null},
      {"text":"Den som säljer el till konsumenterna.", "incorrectReasoning": "Detta är elleverantören."},
      {"text": "Den som använder el.", "incorrectReasoning": "Detta är abonnenten/konsumenten."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Nätägaren äger och driver elnätet.",
      "longReasoning": "Nätägaren är det företag eller den organisation som äger och driver elnätet inom ett visst geografiskt område. Nätägaren ansvarar för att elen transporteras från produktionskällan till konsumenterna, och tar betalt för denna tjänst (nätavgift)."
       },
      {
          "question": "Vad är en 'energi/elleverantör'?",
          "answers": [
            { "text": "Den som tillverkar el.", "incorrectReasoning": "Detta är elproducenten, som kan vara samma som elleverantören men inte alltid." },
            { "text": "Den som äger elnätet.", "incorrectReasoning": "Detta är nätägaren." },
            { "text": "Den som säljer el till konsumenterna.", "incorrectReasoning": null },
            { "text": "Den som installerar elmätare.", "incorrectReasoning": "Detta görs oftast av nätägaren." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "Energileverantören säljer el.",
          "longReasoning": "Energileverantören (eller elleverantören) är det företag som säljer el till slutkonsumenterna (abonnenterna). Man kan välja elleverantör fritt, till skillnad från nätägare som är bunden till det geografiska området."
      },
      {
          "question": "Vem betalar man nätavgiften till?",
          "answers": [
            { "text": "Elproducenten.", "incorrectReasoning": "Elproducenten säljer el, men äger inte nödvändigtvis nätet." },
            { "text": "Energileverantören.", "incorrectReasoning": "Energileverantören säljer el, nätägaren äger nätet." },
            { "text": "Nätägaren.", "incorrectReasoning": null },
            { "text": "Staten.", "incorrectReasoning": "Staten kan vara nätägare, men oftast är det ett företag." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "Nätavgiften betalas till nätägaren.",
          "longReasoning": "Nätavgiften betalas till nätägaren, det företag eller den organisation som äger och driver elnätet i det område där man bor eller har sin verksamhet. Nätavgiften täcker kostnaderna för drift, underhåll och utbyggnad av elnätet."
      },
          {
          "question": "Vem ansvarar för att elanläggningen i en hyresrätt är säker?",
          "answers": [
            { "text": "Hyresgästen.", "incorrectReasoning": "Hyresgästen har ett visst ansvar, men inte det övergripande." },
            { "text": "Hyresvärden/ägaren.", "incorrectReasoning": null },
            { "text": "Elleverantören.", "incorrectReasoning": "Elleverantören säljer el, men ansvarar inte för anläggningen." },
            { "text": "Ingen, det är upp till var och en.", "incorrectReasoning": "Det finns alltid ett ansvar." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Hyresvärden/ägaren ansvarar.",
          "longReasoning": "I en hyresrätt är det i grunden fastighetsägaren/hyresvärden som ansvarar för att elanläggningen är säker. Men eftersom hyresgästen 'råder' över lägenheten, har hyresgästen ett ansvar att anmäla fel och brister till värden."
        },
      {
      "question": "Vilka tre faror nämns specifikt i samband med el?",
      "answers":[
      {"text": "Brandrisk, risk for strömavbrott, risk för höga elpriser.", "incorrectReasoning": "Strömavbrott och elpriser är inte direkta faror."},
      {"text": "Risk för strömgenomgång, risk för ljusbågar, risk för brand.", "incorrectReasoning": null},
      {"text":"Risk för kortslutning, risk for överbelastning, risk för fukt.", "incorrectReasoning":"Detta är riskfaktorer, men inte de *faror* som nämns."},
      {"text":"Risk för statisk elektricitet, risk för magnetfält, risk för radiovågor.", "incorrectReasoning": "Detta är andra typer av risker, inte de tre huvudfarorna med el."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Strömgenomgång, ljusbågar, brand.",
      "longReasoning": "De tre huvudsakliga farorna som nämns i samband med el är: 1. Risk för *strömgenomgång* genom kroppen, vilket kan leda till hjärtstillestånd och inre skador. 2. Risk för *ljusbågar*, som kan uppstå vid kortslutning eller dålig kontakt och ge brännskador och brand. 3. Risk för *brand* orsakad av felaktiga elinstallationer, överbelastning eller ljusbågar."
      },
      {
          "question": "Vad är det som i första hand avgör hur farlig en strömgenomgång genom kroppen är?",
          "answers": [
            { "text": "Spänningen.", "incorrectReasoning": "Spänningen är viktig, men strömstyrkan och tiden är avgörande." },
            { "text": "Strömstyrkan och hur lång tid strömmen påverkar kroppen.", "incorrectReasoning": null },
            { "text": "Om det är likström eller växelström.", "incorrectReasoning": "Båda kan vara farliga." },
            { "text": "Vilken väg strömmen tar genom kroppen.", "incorrectReasoning": "Strömvägen är viktig, men strömstyrkan och tiden är de primära faktorerna." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Strömstyrka och tid.",
          "longReasoning": "Det är *strömstyrkan* (hur mycket ström som går genom kroppen) och *tiden* (hur länge strömmen påverkar kroppen) som i första hand avgör hur farlig en strömgenomgång är. Även små strömmar kan vara dödliga om de passerar hjärtat under tillräckligt lång tid."
      },
     {
          "question": "Vad är en 'ljusbåge'?",
          "answers": [
            { "text": "En typ av lampa.", "incorrectReasoning": "En ljusbåge är inte en lampa." },
            { "text": "En elektrisk urladdning genom luften, som kan uppstå vid kortslutning eller dålig kontakt.", "incorrectReasoning": null },
            { "text": "En typ av säkring.", "incorrectReasoning": "En ljusbåge är en oönskad händelse, inte en komponent." },
            { "text": "En metod för att svetsa.", "incorrectReasoning": "Ljusbågar används vid svetsning, men detta är en generell definition." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Ljusbåge = elektrisk urladdning.",
          "longReasoning": "En ljusbåge är en kraftig elektrisk urladdning som sker genom luften (eller annan gas) mellan två ledare med spänningsskillnad. Ljusbågen uppstår när isolationsförmågan i luften bryts ner, och den kännetecknas av starkt ljus, hög värme och ofta ett knastrande ljud. Ljusbågar kan uppstå vid kortslutning, dålig kontakt eller vid arbete under spänning."
      },
      {
      "question": "Vad är en vanlig orsak till att ljusbågar uppstår i elanläggningar?",
      "answers":[
      {"text": "För hög spänning.", "incorrectReasoning": "Hög spänning kan öka risken, men dålig kontakt är en vanligare direkt orsak."},
      {"text": "För låg spänning.", "incorrectReasoning": "Låg spänning orsakar inte ljusbågar."},
      {"text":"Dålig kontakt.", "incorrectReasoning": null},
      {"text": "För mycket fukt i luften.", "incorrectReasoning": "Fukt kan öka risken för överslag, men dålig kontakt är en vanligare direkt orsak."}
      ],
      "correctAnswer": 2,
      "shortReasoning": "Dålig kontakt är en vanlig orsak.",
      "longReasoning": "En vanlig orsak till att ljusbågar uppstår i elanläggningar är dålig kontakt mellan ledare, t.ex. i uttag, strömbrytare eller kopplingsdosor. Dålig kontakt ger ökat motstånd, vilket leder till värmeutveckling och i värsta fall en ljusbåge."
      },
      {
         "question": "Vad är *inte* ett exempel på en skyddsåtgärd för att göra elanläggningar säkrare?",
          "answers": [
            { "text": "Skyddsjordning.", "incorrectReasoning": "Skyddsjordning är en viktig skyddsåtgärd." },
            { "text": "Jordfelsbrytare.", "incorrectReasoning": "Jordfelsbrytare är en viktig skyddsåtgärd." },
            { "text": "Dubbelkvadratmärke.", "incorrectReasoning": "Dubbelkvadratmärket visar att produkten är extraisolerad" },
            { "text": "Att använda så hög spänning som möjligt.", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "Hög spänning ökar risken, inte minskar den.",
          "longReasoning": "Att använda *så hög spänning som möjligt* är *inte* en skyddsåtgärd. Tvärtom ökar högre spänning risken för allvarliga skador vid elolyckor. Skyddsjordning, jordfelsbrytare, extra isolering (dubbelkvadratmärke) och petskyddade uttag är alla exempel på *skyddsåtgärder* som minskar riskerna med el."
      },
      {
      "question": "Vad är syftet med skyddsjordning?",
      "answers":[
          {"text": "Att göra apparaten snyggare.", "incorrectReasoning": "Skyddsjordning har inget med utseendet att göra."},
          {"text": "Att leda bort farlig ström till jord vid fel i en apparat, så att säkringen löser ut.", "incorrectReasoning": null},
          {"text": "Att öka apparatens effekt.", "incorrectReasoning": "Skyddsjordning påverkar inte effekten."},
          {"text": "Att minska energiförbrukningen.", "incorrectReasoning":"Skyddsjordning har inget med energiförbrukning att göra."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Skyddsjordning leder bort felström.",
      "longReasoning": "Syftet med skyddsjordning är att skydda människor från farliga strömgenomgångar vid fel i en elektrisk apparat. Om ett fel uppstår så att metalldelar i apparaten blir spänningsförande, ska strömmen ledas till jord via skyddsledaren (grön/gul kabel). Detta gör att säkringen (eller jordfelsbrytaren) löser ut och bryter strömmen, vilket förhindrar att någon får en farlig stöt."
      },
        {
          "question": "Vad är funktionen hos en jordfelsbrytare?",
          "answers": [
            { "text": "Att skydda mot överbelastning.", "incorrectReasoning": "Detta är säkringens funktion." },
            { "text": "Att bryta strömmen snabbt om en liten ström går fel väg, t.ex. genom en människa till jord.", "incorrectReasoning": null },
            { "text": "Att mäta spänningen i elnätet.", "incorrectReasoning": "Detta görs med en voltmeter." },
            { "text": "Att omvandla växelström till likström.", "incorrectReasoning": "Detta görs med en likriktare." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Jordfelsbrytare bryter vid felström.",
          "longReasoning": "En jordfelsbrytare känner av om en liten ström går fel väg, t.ex. genom en människa till jord. Om felströmmen överstiger ett visst värde (vanligtvis 30 mA) bryter jordfelsbrytaren strömmen mycket snabbt (inom millisekunder). Detta ger ett mycket bra skydd mot farliga strömgenomgångar."
        },
         {
      "question": "Vad menas med att en apparat är dubbelisolerad?",
      "answers":[
          {"text":"Att den har extra tjocka sladdar.", "incorrectReasoning": "Sladdtjocklek har inget med dubbelisolering att göra."},
          {"text": "Att den har två lager isolering, så att även om den inre isoleringen går sönder finns det ett extra skydd.", "incorrectReasoning": null},
          {"text": "Att den är avsedd för utomhusbruk.", "incorrectReasoning":"Dubbelisolering är en skyddsåtgärd, inte en indikation på användningsområde."},
          {"text": "Att den är extra energisnål.", "incorrectReasoning": "Energisnålhet har inget med dubbelisolering att göra."}
       ],
      "correctAnswer": 1,
      "shortReasoning": "Dubbelisolering = två lager isolering.",
      "longReasoning": "En dubbelisolerad apparat har två oberoende lager av isolering mellan spänningsförande delar och berörbara delar. Detta ger ett extra skydd mot elchock, även om den ena isoleringen skulle gå sönder. Dubbelisolerade apparater är märkta med en dubbelkvadrat-symbol."
      },
        {
              "question": "Vad ska man *först* göra vid en elolycka?",
              "answers": [
                { "text": "Springa och hämta hjälp.", "incorrectReasoning": "Man ska inte lämna den skadade ensam i första hand." },
                { "text": "Bryta strömmen.", "incorrectReasoning": null },
                { "text": "Ge första hjälpen.", "incorrectReasoning": "Första hjälpen kommer efter att strömmen är bruten." },
                { "text": "Ringa en elektriker.", "incorrectReasoning": "Det är inte det första man ska göra." }
              ],
              "correctAnswer": 1,
              "shortReasoning": "Bryt strömmen först!",
              "longReasoning": "Vid en elolycka är det *absolut viktigaste* att först bryta strömmen till den skadade. Detta kan göras genom att dra ur stickproppen, slå av strömbrytaren eller, om det inte går, slå ifrån huvudströmbrytaren i elcentralen. Man ska *aldrig* röra vid den skadade innan strömmen är bruten, eftersom man då själv riskerar att få strömgenomgång."
          },
      {
      "question": "Vilka tre saker ska man kontrollera hos en person som varit med om en elolycka (efter att strömmen är bruten)?",
      "answers":[
          {"text": "Puls, kroppstemperatur och blodtryck.", "incorrectReasoning": "Kroppstemperatur och blodtryck är mindre akuta."},
          {"text": "Medvetande, andning och puls.", "incorrectReasoning": null},
          {"text":"Hörsel, syn och tal.", "incorrectReasoning": "Detta är inte de primära kontrollerna."},
          {"text": "Om personen är hungrig, törstig eller fryser.", "incorrectReasoning":"Detta är inte de primära kontrollerna."}
          ],
      "correctAnswer": 1,
      "shortReasoning": "Medvetande, andning, puls.",
      "longReasoning": "Efter att ha brutit strömmen vid en elolycka ska man kontrollera den skadades: 1. *Medvetande* (är personen vaken och svarar på tilltal?). 2. *Andning* (andas personen?). 3. *Puls* (har personen puls?). Dessa tre faktorer är avgörande för att bedöma hur allvarligt tillståndet är och vilka åtgärder som ska vidtas."
      },
      {
          "question": "Vad ska man göra om en person som varit med om en elolycka *inte* andas, men *har* puls?",
          "answers": [
            { "text": "Ge hjärtmassage.", "incorrectReasoning": "Hjärtmassage ges om det *inte* finns någon puls." },
            { "text": "Ge mun-mot-mun-metoden (konstgjord andning).", "incorrectReasoning": null },
            { "text": "Ge personen något att dricka.", "incorrectReasoning": "Man ska inte ge något att äta eller dricka till en person som inte andas." },
            { "text": "Vänta på ambulansen.", "incorrectReasoning": "Man måste agera direkt om personen inte andas." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Ge konstgjord andning (mun-mot-mun).",
          "longReasoning": "Om en person som varit med om en elolycka inte andas, men har puls, ska man omedelbart påbörja konstgjord andning (mun-mot-mun-metoden eller annan inblåsningsmetod) för att tillföra syre till lungorna. Samtidigt ska man larma 112."
      },
  {
          "question": "Vad ska man göra om en person som varit med om en elolycka *varken* andas *eller* har puls?",
          "answers": [
            { "text": "Ge enbart mun-mot-mun-metoden.", "incorrectReasoning": "Både hjärt-lungräddning behövs." },
            { "text": "Ge enbart hjärtmassage.", "incorrectReasoning": "Både hjärt-lungräddning behövs" },
            { "text": "Ge hjärt-lungräddning (HLR), dvs. kombination av inblåsningar och bröstkompressioner.", "incorrectReasoning": null },
            { "text": "Vänta på ambulansen.", "incorrectReasoning": "Man måste agera direkt." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "Ge hjärt-lungräddning (HLR).",
          "longReasoning": "Om en person som varit med om en elolycka varken andas eller har puls ska man omedelbart påbörja hjärt-lungräddning (HLR). HLR innebär en kombination av inblåsningar (konstgjord andning) och bröstkompressioner för att försöka få igång andningen och blodcirkulationen. Samtidigt ska man larma 112."
        },
  {
          "question": "Vad ska man *alltid* göra med en person som varit medvetslös efter en elolycka?",
          "answers": [
            { "text": "Ge personen något att dricka.", "incorrectReasoning": "Det är inte det viktigaste, och kan vara farligt." },
            { "text": "Se till att personen kommer till läkare för kontroll.", "incorrectReasoning": null },
            { "text": "Ge personen något att äta.", "incorrectReasoning": "Det är inte det viktigaste, och kan vara farligt." },
            { "text": "Fråga ut personen om vad som hände.", "incorrectReasoning": "Det är inte det viktigaste." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Alltid läkarkontroll efter medvetslöshet.",
          "longReasoning": "En person som har varit medvetslös efter en elolycka ska *alltid* undersökas av läkare, även om personen verkar må bra efteråt. Detta beror på att elolyckor kan ge inre skador som inte syns direkt, och komplikationer kan uppstå senare."
  },
  {
   "question": "Varför anges arbetsmiljölagen vara tillämplig för *alla* som genomgår utbildning, från förskoleklass till högskola?",
   "answers":[
   {"text": "För att försvåra för eleverna.", "incorrectReasoning":"Syftet är att skydda, inte försvåra."},
   {"text":"För att ge alla en likvärdig arbetsmiljö, oavsett ålder eller sysselsättning", "incorrectReasoning": null},
   {"text":"För att spara pengar åt staten", "incorrectReasoning":"Arbetsmiljö kostar, men syftar till att minska kostnader på sikt."},
   {"text":"För att lärarna ska få mer makt", "incorrectReasoning": "Lagen handlar om skydd, inte maktfördelning"}
   ],
   "correctAnswer": 1,
   "shortReasoning": "Alla har rätt till en säker och hälsosam (arbets)miljö, även i skolan.",
   "longReasoning": "Arbetsmiljölagen gäller inte bara anställda, utan alla som genomgår utbildning, från förskoleklass till och med högskolan, omfattas. Detta innebär att de har rätt till en säker och hälsosam studiemiljö, och att skolan har samma skyldigheter gentemot elever som en arbetsgivare har gentemot sina anställda när det gäller arbetsmiljön."
  },
  {
      "question": "Vad menas med att 'råda över' en elanläggning i en hyresrätt?",
      "answers":[
      {"text": "Att man får göra vad man vill med elen.", "incorrectReasoning":"Hyresgästen har inte rätt att göra farliga ändringar."},
      {"text":"Att man är elektriker.", "incorrectReasoning": "Rådighet handlar om ansvar, inte yrke."},
      {"text": "Att man som hyresgäst har det dagliga ansvaret för att anmäla fel och brister.", "incorrectReasoning": null},
      {"text": "Att man äger lägenheten.", "incorrectReasoning":"Ägande och rådighet är inte samma sak i detta fall."}
      ],
      "correctAnswer": 2,
      "shortReasoning":"Hyresgästen har ansvar för att anmäla fel.",
      "longReasoning": "Även om fastighetsägaren har det grundläggande ansvaret för elanläggningens säkerhet i en hyresrätt, så 'råder' hyresgästen över lägenheten i det dagliga. Detta innebär att hyresgästen har ett ansvar att vara uppmärksam på fel och brister i elanläggningen och anmäla dessa till hyresvärden."
  
  },{
    "question": "Varför är det farligt att äta en klocka?",
      "answers": [
          { "text": "För att det är tidskrävande.", "incorrectReasoning": "Det är inte tiden som är farlig." },
          { "text": "För att det är svårt att smälta.", "incorrectReasoning": "Det är inte smältbarheten som är farlig." },
          { "text": "För att det kan bli tidsbrist.", "incorrectReasoning": "Det är inte tidsbrist som är farlig." },
          { "text": "För att det kan bli farligt med tiden.", "incorrectReasoning": null }
      ],
      "correctAnswer": 3,
      "shortReasoning": "Det kan bli farligt med tiden.",
      "longReasoning": "Att äta en klocka är farligt för att det kan bli farligt med tiden. Klockan innehåller ofta små batterier som kan läcka syra, vilket kan skada magen och tarmarna."
  },
  
  ]
  }, {
    name: "Toleranser",
    source: "./pdf/Toleranser Grundläggande begrepp Fakta.pdf",
    questions: [
      {
          "question": "Vad anger en dimensionstolerans på en ritning?",
          "answers": [
              { "text": "Den exakta storleken på en detalj.", "incorrectReasoning": "En tolerans anger en tillåten avvikelse, inte ett exakt mått." },
              { "text": "Den tillåtna avvikelsen från ett angivet mått.", "incorrectReasoning": null },
              { "text": "Materialet som detaljen ska tillverkas av.", "incorrectReasoning": "Materialet anges separat på ritningen." },
              { "text": "Verktyget som ska användas vid tillverkningen.", "incorrectReasoning": "Verktygsval är en separat process." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Tolerans = tillåten avvikelse.",
          "longReasoning": "En dimensionstolerans anger den tillåtna avvikelsen från ett specificerat mått (basmåttet) på en ritning. Den definierar inom vilka gränser det verkliga måttet på den tillverkade detaljen får ligga för att detaljen ska vara godkänd."
      },
      {
          "question": "Vad är basmåttet i toleranssammanhang?",
          "answers": [
              { "text": "Det största tillåtna måttet.", "incorrectReasoning": "Detta är det övre gränsmåttet." },
              { "text": "Det minsta tillåtna måttet.", "incorrectReasoning": "Detta är det undre gränsmåttet." },
              { "text": "Det mått från vilket toleransen utgår.", "incorrectReasoning": null },
              { "text": "Det uppmätta måttet på en färdig detalj.", "incorrectReasoning": "Det uppmätta måttet jämförs med toleransgränserna." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "Basmåttet är referensmåttet.",
          "longReasoning": "Basmåttet är det nominella mått som anges på ritningen, och från vilket de tillåtna avvikelserna (toleranserna) definieras. Det är referenspunkten för toleransområdet."
      },
      {
          "question": "Vad är noll-linjen i toleranssammanhang?",
          "answers": [
              { "text": "En linje som markerar mitten av toleransområdet.", "incorrectReasoning": "Detta är fallet vid symmetrisk tolerans, men inte alltid." },
              { "text": "En linje som representerar basmåttet.", "incorrectReasoning": null },
              { "text": "En linje som markerar det största tillåtna måttet.", "incorrectReasoning": "Detta är det övre gränsmåttet." },
              { "text": "En linje som markerar det minsta tillåtna måttet.", "incorrectReasoning": "Detta är det undre gränsmåttet." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Noll-linjen = basmåttet.",
          "longReasoning": "Noll-linjen är en referenslinje i toleranssammanhang som representerar basmåttet. Toleransområdet, de övre och undre gränsmåtten, och avmåtten definieras i förhållande till noll-linjen."
      },
      {
          "question": "Vad menas med gränsmått?",
          "answers": [
            { "text": "Det största och minsta tillåtna måttet på en detalj.", "incorrectReasoning": null },
            { "text": "Det mått som anges på ritningen.", "incorrectReasoning": "Detta är basmåttet." },
            { "text": "Det uppmätta måttet på en färdig detalj.", "incorrectReasoning": "Det uppmätta måttet jämförs med gränsmåtten." },
            { "text": "Ett mått som inte får överskridas.", "incorrectReasoning": "Detta är *ett* gränsmått, men det finns både övre och undre." }
          ],
          "correctAnswer": 0,
          "shortReasoning": "Gränsmått = största och minsta tillåtna mått.",
          "longReasoning": "Gränsmåtten definierar de tillåtna gränserna för ett mått. Det finns ett *övre gränsmått* (största tillåtna mått) och ett *undre gränsmått* (minsta tillåtna mått). En detalj är godkänd om dess mått ligger inom dessa gränser."
        },
      {
          "question": "Vad är toleransgränser?",
          "answers": [
            { "text": "Samma sak som gränsmått.", "incorrectReasoning": null },
            { "text": "Samma sak som basmått.", "incorrectReasoning": "Toleransgränser definieras *utifrån* basmåttet." },
            { "text": "Samma sak som noll-linjen.", "incorrectReasoning": "Toleransgränser definieras *utifrån* noll-linjen (basmåttet)." },
            { "text": "Samma sak som toleransvidden", "incorrectReasoning": "Toleransvidden är skillnaden *mellan* toleransgränserna." }
          ],
          "correctAnswer": 0,
          "shortReasoning": "Toleransgränser = gränsmått.",
          "longReasoning": "Toleransgränser och gränsmått är synonymer. De avser det övre och undre tillåtna måttet, alltså gränserna för toleransområdet."
        },
      {
      "question": "Vad är toleransområdet?",
      "answers": [
      { "text": "Området mellan noll-linjen och det övre gränsmåttet.", "incorrectReasoning": "Detta beskriver bara *en del* av toleransområdet (om det är positivt)." },
      { "text": "Området mellan det minsta och största tillåtna måttet.", "incorrectReasoning": null },
      { "text": "Området runt basmåttet.", "incorrectReasoning": "Detta är en för vag beskrivning." },
      { "text": "Samma sak som toleransvidden.", "incorrectReasoning": "Toleransvidden är *storleken* på toleransområdet." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Toleransområde = mellan minsta och största tillåtna mått.",
      "longReasoning": "Toleransområdet är det område inom vilket det verkliga måttet på en detalj måste ligga för att vara godkänt. Det definieras av det övre och undre gränsmåttet (toleransgränserna)."
      },
         {
          "question": "Vad är toleransvidd?",
          "answers": [
            { "text": "Samma sak som toleransområdet.", "incorrectReasoning": "Toleransområdet är *intervallet*, toleransvidden är *storleken* på intervallet." },
            { "text": "Skillnaden mellan det övre och undre gränsmåttet.", "incorrectReasoning": null },
            { "text": "Samma sak som basmåttet.", "incorrectReasoning": "Basmåttet är referenspunkten, inte skillnaden." },
            { "text": "Samma sak som avmåttet.", "incorrectReasoning": "Avmåttet är skillnaden mellan basmått och *ett* gränsmått." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Toleransvidd = skillnaden mellan gränsmåtten.",
          "longReasoning": "Toleransvidden är storleken på toleransområdet, alltså skillnaden mellan det övre och undre gränsmåttet. Det anger hur mycket måttet får variera."
      },
   {
          "question": "Vad innebär det om toleransområdet är placerat symmetriskt kring noll-linjen?",
          "answers": [
            { "text": "Att det övre och undre gränsmåttet är lika stora.", "incorrectReasoning": "Gränsmåtten är lika stora *till beloppet*, men med olika tecken." },
            { "text": "Att det övre och undre avmåttet är lika stora, men med olika tecken (+/-).", "incorrectReasoning": null },
            { "text": "Att toleransområdet ligger helt ovanför noll-linjen.", "incorrectReasoning": "Detta är en ensidig positiv tolerans." },
            { "text": "Att toleransområdet ligger helt under noll-linjen.", "incorrectReasoning": "Detta är en ensidig negativ tolerans." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Symmetrisk tolerans = lika stora avvikelser uppåt och neråt.",
          "longReasoning": "Om toleransområdet är placerat symmetriskt kring noll-linjen (basmåttet) innebär det att det övre och undre avmåttet är lika stora, men med motsatta tecken (plus och minus). Exempel: 20 ± 0.1 mm."
      },
    {
      "question": "Vad innebär det om en tolerans är angiven som +0.2 och -0.1?",
      "answers": [
          { "text": "Att toleransen är symmetrisk.", "incorrectReasoning": "Avmåtten är olika stora, alltså är toleransen *inte* symmetrisk." },
          { "text": "Att toleransen är osymmetrisk.", "incorrectReasoning": null },
          { "text": "Att toleransen är ensidig.", "incorrectReasoning": "Ensidig tolerans har bara avmått åt *ett* håll (antingen + eller -)." },
          { "text": "Att måttet inte får avvika alls.", "incorrectReasoning": "Det finns angivna avmått." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Olika stora avmått = osymmetrisk tolerans.",
      "longReasoning": "En tolerans som anges med olika stora positiva och negativa avmått (t.ex. +0.2 och -0.1) är *osymmetrisk*. Toleransområdet är inte jämnt fördelat kring noll-linjen (basmåttet)."
    },
    {
        "question": "Vad är ett 'avmått'?",
        "answers":[
          {"text": "Samma sak som basmåttet.", "incorrectReasoning":"Basmåttet är referenspunkten, avmåttet är *skillnaden*."},
          {"text": "Skillnaden mellan basmåttet och ett gränsmått.", "incorrectReasoning": null},
          {"text": "Samma sak som toleransvidden.", "incorrectReasoning": "Toleransvidden är skillnaden mellan *gränsmåtten*."},
          {"text": "Samma sak som gränsmåttet.", "incorrectReasoning": "Gränsmåtten *beräknas* med hjälp av avmåtten."}
          ],
          "correctAnswer": 1,
          "shortReasoning": "Avmått = skillnad mellan basmått och gränsmått.",
          "longReasoning": "Ett avmått är skillnaden mellan basmåttet (det nominella måttet) och ett av gränsmåtten (det övre eller undre tillåtna måttet). Det finns alltså ett *övre avmått* och ett *undre avmått*."
    },
    {
      "question":"Hur beräknas det övre gränsmåttet?",
      "answers":[
        {"text": "Basmått minus det undre avmåttet", "incorrectReasoning":"Detta skulle ge det *undre* gränsmåttet, inte det övre."},
        {"text":"Basmått plus det övre avmåttet.", "incorrectReasoning": null},
        {"text": "Basmått gånger toleransvidden", "incorrectReasoning": "Detta stämmer inte."},
        {"text": "Det övre avmåttet minus det undre avmåttet", "incorrectReasoning":"Detta är toleransvidden."}
      ],
      "correctAnswer": 1,
      "shortReasoning":"Övre gränsmått = basmått + övre avmått.",
      "longReasoning":"Det övre gränsmåttet beräknas genom att addera det övre avmåttet till basmåttet. Exempel: Om basmåttet är 20 mm och det övre avmåttet är +0.1 mm, blir det övre gränsmåttet 20 + 0.1 = 20.1 mm."
    },
    {
    "question":"Hur beräknas det undre gränsmåttet?",
    "answers":[
    {"text": "Basmått plus det undre avmåttet", "incorrectReasoning":"Basmått plus ett *negativt* undre avmått blir korrekt."},
    {"text": "Basmått minus det övre avmåttet", "incorrectReasoning": "Detta skulle inte ge rätt resultat."},
    {"text": "Basmått plus det övre avmåttet", "incorrectReasoning":"Detta skulle ge det *övre* gränsmåttet."},
    {"text": "Basmått minus det positiva talet av det undre avmåttet.", "incorrectReasoning": null}
    ],
    "correctAnswer": 3,
    "shortReasoning": "Undre gränsmått = basmått - undre avmått (om negativt).",
    "longReasoning":"Det undre gränsmåttet beräknas genom att addera basmåttet och det undre avmåttet, *men*, om det undre avmåttet anges med ett negativt tal, vilket är det vanliga, *så blir det i praktiken en subtraktion*. Exempel: Om basmåttet är 20 mm och det undre avmåttet är -0.1 mm, blir det undre gränsmåttet 20 + (-0.1) = 20 - 0.1 = 19.9 mm. Alternativ formulering som ger *samma* matematiska resultat: basmått *minus* det *positiva talet* av det undre avmåttet."
    },
    {
      "question":"Vad är ett lägesavmått?",
       "answers": [
        {"text": "Ett avmått som anger hur mycket en detalj får väga.", "incorrectReasoning": "Detta har med vikt, inte läge, att göra."},
        {"text": "Ett avmått som anger var på ritningen måttet finns.", "incorrectReasoning": "Detta har inget med toleranser att göra."},
        {"text": "Ett avmått som anger hur mycket en detaljs position får avvika från det nominella läget.", "incorrectReasoning": null},
        {"text": "Ett avmått som alltid är positivt.", "incorrectReasoning":"Lägesavmått kan vara både positiva och negativa."}
       ],
       "correctAnswer": 2,
       "shortReasoning":"Lägesavmått = tillåten positionsavvikelse.",
       "longReasoning": "Ett lägesavmått anger hur mycket en detaljs *position* (läge) får avvika från det nominella (ideala) läget som anges på ritningen. Det kan till exempel handla om avvikelsen för ett håls centrumlinje från dess specificerade position."
    },
    {
      "question":"Vad innebär 'överdimension'?",
      "answers":[
        {"text": "Att detaljen är för liten.", "incorrectReasoning":"Överdimension betyder att den är för *stor*."},
        {"text": "Att detaljen är för stor.", "incorrectReasoning": null},
        {"text": "Att detaljen har rätt mått.", "incorrectReasoning":"Överdimension innebär en avvikelse från det nominella måttet."},
        {"text": "Att detaljen är för tung.", "incorrectReasoning": "Överdimension handlar om mått, inte vikt."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Överdimension = för stor.",
      "longReasoning": "Överdimension innebär att det verkliga måttet på en detalj är *större* än basmåttet (och ligger *ovanför* toleransområdet, om det finns ett sådant). Det är en positiv avvikelse."
    },
    {
      "question":"Vad innebär 'underdimension'?",
      "answers":[
      {"text": "Att detaljen är för stor.", "incorrectReasoning": "Underdimension betyder att den är för *liten*."},
      {"text": "Att detaljen är för liten.", "incorrectReasoning":null},
      {"text":"Att detaljen har rätt mått.", "incorrectReasoning": "Underdimension innebär en avvikelse."},
      {"text":"Att detaljen är för lätt.", "incorrectReasoning": "Underdimension handlar om mått, inte vikt."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Underdimension = för liten.",
      "longReasoning":"Underdimension innebär att det verkliga måttet på en detalj är *mindre* än basmåttet (och ligger *under* toleransområdet, om det finns ett sådant). Det är en negativ avvikelse."
    },
   {
     "question": "Om en tolerans anges som 20 +0.2 / -0.1 mm, vad är då det *övre* gränsmåttet?",
     "answers":[
       {"text": "19.9 mm", "incorrectReasoning": "Detta är det *undre* gränsmåttet."},
       {"text": "20.0 mm", "incorrectReasoning": "Detta är basmåttet."},
       {"text": "20.1 mm", "incorrectReasoning": "Detta är basmåttet plus det *undre* avmåttet."},
       {"text": "20.2 mm", "incorrectReasoning": null}
     ],
     "correctAnswer": 3,
     "shortReasoning": "20 + 0.2 = 20.2 mm",
     "longReasoning": "Det övre gränsmåttet beräknas genom att addera basmåttet (20 mm) och det *övre* avmåttet (+0.2 mm). Alltså: 20 + 0.2 = 20.2 mm."
   },
   {
      "question": "Om en tolerans anges som 20 +0.2 / -0.1 mm, vad är då det *undre* gränsmåttet?",
        "answers":[
         {"text": "19.8 mm", "incorrectReasoning": "Detta är basmåttet minus *två gånger* det undre avmåttet."},
         {"text": "19.9 mm", "incorrectReasoning":null},
         {"text":"20.0 mm", "incorrectReasoning": "Detta är basmåttet."},
         {"text": "20.1 mm", "incorrectReasoning": "Detta är basmåttet plus det *undre* avmåttet (men med omvänt tecken)."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "20 + (-0.1) = 20 - 0.1 = 19.9 mm",
        "longReasoning": "Det undre gränsmåttet beräknas genom att addera basmåttet (20 mm) och det *undre* avmåttet (-0.1 mm). Alltså: 20 + (-0.1) = 20 - 0.1 = 19.9 mm."
    },
   {
    "question": "Om en tolerans anges som 15 +0.1 / -0.2, vad är då *toleransvidden*?",
      "answers":[
      {"text": "0.1 mm", "incorrectReasoning": "Detta är det *övre* avmåttet."},
      {"text": "0.2 mm", "incorrectReasoning":"Detta är det *undre* avmåttet (till beloppet)."},
      {"text": "0.3 mm", "incorrectReasoning": null},
      {"text": "15 mm", "incorrectReasoning": "Detta är basmåttet."}
      ],
      "correctAnswer": 2,
      "shortReasoning": "0.1 + 0.2 = 0.3 mm",
      "longReasoning": "Toleransvidden är skillnaden mellan det övre och undre gränsmåttet. I detta fall är det övre gränsmåttet 15 + 0.1 = 15.1 mm, och det undre gränsmåttet 15 - 0.2 = 14.8 mm. Toleransvidden blir då 15.1 - 14.8 = 0.3 mm.  Ett enklare sätt är att addera de *absoluta* värdena av de övre och undre avmåtten: 0.1 + 0.2 = 0.3 mm."
    },
    {
   "question": "Vad är *basmåttet* för en detalj om toleransen anges som 10 +0 / -0.3?",
    "answers":[
      {"text": "0 mm", "incorrectReasoning":"Detta är inte basmåttet, utan anger en ensidig tolerans *nedåt*."},
      {"text": "0.3 mm", "incorrectReasoning": "Detta är toleransvidden."},
      {"text": "9.7 mm", "incorrectReasoning": "Detta är det *undre* gränsmåttet."},
      {"text": "10 mm", "incorrectReasoning": null}
   ],
   "correctAnswer": 3,
   "shortReasoning": "Basmåttet är 10 mm.",
   "longReasoning": "Basmåttet är det mått som anges *före* toleransangivelsen. I detta fall är basmåttet 10 mm. Toleransen +0 / -0.3 anger att detaljen får vara exakt 10 mm (övre gränsmått = basmått + 0 = 10 mm), eller upp till 0.3 mm mindre (undre gränsmått= basmått - 0.3 = 9.7mm)."
  },
  {
  "question": "Vad kallas det när en tolerans är angiven som ett basmått följt av ± och ett avmått, t.ex. 25 ± 0.2?",
  "answers":[
  {"text": "Ensidig tolerans.", "incorrectReasoning": "Ensidig tolerans har bara avmått åt *ett* håll."},
  {"text":"Symmetrisk tolerans.", "incorrectReasoning": null},
  {"text": "Osymmetrisk tolerans.", "incorrectReasoning": "Osymmetrisk tolerans har *olika* stora avvikelser uppåt och neråt."},
  {"text": "Lägestolerans.", "incorrectReasoning":"Lägestoleranser anger position, inte storlek."}
  ],
  "correctAnswer": 1,
  "shortReasoning": "± = symmetrisk tolerans.",
  "longReasoning": "När en tolerans anges som ett basmått följt av ± och ett avmått (t.ex. 25 ± 0.2 mm) kallas det för en *symmetrisk tolerans*. Det innebär att toleransområdet är jämnt fördelat kring basmåttet, med lika stora tillåtna avvikelser uppåt och neråt."
  },
   {
          "question": "Vad är skillnaden mellan en *symmetrisk* och en *osymmetrisk* tolerans?",
          "answers": [
            { "text": "En symmetrisk tolerans har ett basmått, en osymmetrisk har inget basmått.", "incorrectReasoning": "Båda har basmått." },
            { "text": "En symmetrisk tolerans har lika stora avvikelser uppåt och neråt från basmåttet, medan en osymmetrisk tolerans har olika stora avvikelser.", "incorrectReasoning": null },
            { "text": "En symmetrisk tolerans gäller för runda detaljer, en osymmetrisk för kantiga.", "incorrectReasoning": "Toleransens form har inget med detaljens form att göra." },
            { "text": "Det är ingen skillnad, de betyder samma sak.", "incorrectReasoning": "Det finns en tydlig skillnad i hur avmåtten är fördelade." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Symmetrisk: lika avvikelser. Osymmetrisk: olika avvikelser.",
          "longReasoning": "En *symmetrisk tolerans* har lika stora tillåtna avvikelser uppåt (+) och neråt (-) från basmåttet (t.ex. 20 ± 0.1 mm). En *osymmetrisk tolerans* har olika stora tillåtna avvikelser uppåt och neråt (t.ex. 20 +0.2 / -0.1 mm)."
      },
      {
        "question": "Vad betyder det om toleransområdet ligger helt *ovanför* noll-linjen?",
          "answers": [
            {"text": "Att detaljen måste vara exakt lika med basmåttet", "incorrectReasoning":"Detta skulle innebära *ingen* tolerans."},
            {"text":"Att detaljen måste vara större än basmåttet (överdimension).", "incorrectReasoning": null},
            {"text": "Att detaljen måste vara mindre än basmåttet (underdimension).", "incorrectReasoning": "Då skulle toleransområdet ligga *under* noll-linjen."},
            {"text": "Att det inte spelar någon roll om detaljen är större eller mindre.", "incorrectReasoning":"Om toleransområdet ligger *helt* ovanför, måste detaljen vara större."}
            ],
            "correctAnswer": 1,
            "shortReasoning": "Toleransområde över noll-linjen = överdimension.",
            "longReasoning": "Om *hela* toleransområdet ligger *ovanför* noll-linjen innebär det att både det övre och det undre gränsmåttet är större än basmåttet. Detaljen måste alltså vara *större* än basmåttet för att vara godkänd (överdimension)."
      },
       {
              "question": "Vad betyder det om en tolerans anges som 20 +0,2 / +0,1 mm?",
              "answers": [
                { "text": "Att detaljen får vara högst 0,2 mm mindre än 20 mm.", "incorrectReasoning": "Båda avmåtten är positiva, alltså *större* än basmåttet." },
                { "text": "Att detaljen måste vara mellan 19,8 och 19,9 mm.", "incorrectReasoning": "Båda avmåtten är positiva." },
                { "text": "Att detaljen måste vara mellan 20,1 och 20,2 mm.", "incorrectReasoning": null },
                { "text": "Att detaljen får vara högst 0,1 mm större än 20 mm.", "incorrectReasoning": "Det övre avmåttet är +0.2 mm." }
              ],
              "correctAnswer": 2,
              "shortReasoning": "Båda avmåtten positiva = överdimension.",
              "longReasoning": "Toleransen 20 +0.2 / +0.1 mm innebär att *båda* avmåtten är positiva. Det *undre* gränsmåttet är 20 + 0.1 = 20.1 mm, och det *övre* gränsmåttet är 20 + 0.2 = 20.2 mm. Detaljen måste alltså vara *större* än basmåttet (20 mm) för att vara godkänd."
          },
    {
        "question":"Vad betyder beteckningen '2xϕ8+0.1' på ritningen, där ϕ står för diameter?",
         "answers":[
            {"text":"Två hål med diameter 8.1mm.", "incorrectReasoning":"Hålets storlek kan variera."},
            {"text":"Två hål med diameter mellan 8 och 8,1mm", "incorrectReasoning": null},
            {"text":"Två hål med diameter större än 8.1 mm.", "incorrectReasoning": "Toleransen anger *både* övre och undre gräns."},
            {"text": "Ett hål med diameter 8 mm och ett hål med diameter 8.1 mm.", "incorrectReasoning":"2x betyder två *likadana* hål."}
         ],
         "correctAnswer": 1,
         "shortReasoning": "Två hål, diameter mellan 8 och 8.1 mm.",
         "longReasoning": "Beteckningen '2xϕ8+0.1' betyder att det finns *två* hål (2x) med ett basmått på 8 mm i diameter (ϕ8). Toleransen +0.1 anger att hålen får vara upp till 0.1 mm större än basmåttet. Hålens diameter ska alltså ligga *mellan* 8 mm (undre gränsmått) och 8 + 0.1 = 8.1 mm (övre gränsmått)."
    },
    {
     "question": "Vad är SS-ISO-standard?",
     "answers":[
      {"text": "En svensk standard för svetsprocedurer.", "incorrectReasoning": "SS-ISO handlar om toleranser, inte svetsning."},
      {"text":"En internationell standard för dimensionstoleranser och passningar.", "incorrectReasoning": null},
      {"text": "En standard för ytjämnhet.", "incorrectReasoning":"Ytjämnhet är en separat standard, även om det hänger ihop med toleranser."},
      {"text": "En standard för materialbeteckningar.", "incorrectReasoning":"Materialbeteckningar är en separat standard."}
     ],
      "correctAnswer": 1,
      "shortReasoning": "SS-ISO = internationell standard för toleranser.",
      "longReasoning": "SS-ISO-standard är en internationell standard (ISO) som har antagits som svensk standard (SS) och som specificerar system för dimensionstoleranser och passningar. Den definierar begrepp, beteckningar, toleransklasser och hur toleranser ska anges på ritningar."
    },
    {
       "question": "Vad hittar man i tabellerna i en verkstadshandbok, relaterat till toleranser?",
        "answers":[
        {"text": "Priser på olika material.", "incorrectReasoning": "Priser är inte relevant för toleranser."},
        {"text":"Värden för toleranser och passningar enligt SS-ISO-standard.", "incorrectReasoning": null},
        {"text":"Telefonnummer till leverantörer.", "incorrectReasoning": "Leverantörsinformation är inte relevant för toleranser."},
        {"text":"Svetsprocedurer.", "incorrectReasoning": "Svetsprocedurer är en separat fråga."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Verkstadshandboken innehåller toleranstabeller.",
        "longReasoning": "Verkstadshandböcker (och andra tekniska handböcker) innehåller ofta tabeller som listar värden för toleranser och passningar enligt SS-ISO-standarden. Dessa tabeller är nödvändiga för att tolka toleransbeteckningar på ritningar och för att välja lämpliga toleranser vid konstruktion och tillverkning."
  
    },
    {
          "question": "Vad betyder 'ISO' i sammanhanget 'SS-ISO-standard'?",
          "answers": [
            { "text": "Inget, det är bara en del av beteckningen.", "incorrectReasoning": "ISO har en specifik betydelse." },
            { "text": "International Organization for Standardization.", "incorrectReasoning": null },
            { "text": "Inre Svensk Organisation.", "incorrectReasoning": "ISO är en *internationell* organisation." },
            { "text": "Industriell Standardisering och Ordningsföljd.", "incorrectReasoning": "Detta är inte en korrekt förklaring." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "ISO = International Organization for Standardization.",
          "longReasoning": "ISO står för International Organization for Standardization, en världsomspännande organisation som utvecklar och publicerar internationella standarder inom en mängd olika områden, inklusive teknik, industri och tillverkning."
     },
  {
      "question": "Vad representerar 'SS' i 'SS-ISO standard'?",
      "answers":[
          {"text":"Super Standard.", "incorrectReasoning": "'SS' representerar Svensk Standard."},
          {"text":"Swedish Standard", "incorrectReasoning": null},
          {"text": "Special Steel.", "incorrectReasoning":"'SS' har ingenting med material att göra i detta sammanhang"},
          {"text":"Standard System.", "incorrectReasoning":"Det är inte rätt betydelse"}
          ],
        "correctAnswer": 1,
        "shortReasoning": "'SS' representerar en Svensk Standard",
        "longReasoning": "I kontexten av 'SS-ISO-standard' representerar 'SS' Swedish Standard, alltså Svensk Standard, och indikerar att den aktuella ISO-standarden, som är en internationell standard har blivit antagen och implementerad som en del av det Svenska Standardiseringssystemet."
  }
  ]
  },{
    name: "Automation",
    source: "./pdf/Automation - Fakta.pdf",
    questions: [
      {
        "question": "Nämn tre av de '10 goda skäl att automatisera' som listas i texten.",
        "answers": [
          { "text": "Öka operatörskostnader, försämra produktkvalitet, minska flexibiliteten.", "incorrectReasoning": "Dessa är motsatsen till fördelarna med automation." },
          { "text": "Reducera operatörskostnader, förbättra produktkvalitet, öka flexibiliteten.", "incorrectReasoning": null },
          { "text": "Minska produktionsutfallet, öka kassationen, försämra arbetsmiljön.", "incorrectReasoning": "Dessa är motsatsen till fördelarna med automation." },
          { "text": "Öka personalomsättningen, öka kapitalkostnaderna, öka utrymmesbehovet.", "incorrectReasoning": "Dessa är motsatsen till fördelarna med automation." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Kostnadsminskning, kvalitetsförbättring, ökad flexibilitet.",
        "longReasoning": "Några av de '10 goda skäl att automatisera' som nämns är att reducera operatörskostnader, förbättra produktkvaliteten och konsekvensen, förbättra arbetskvalitén för de anställda, öka produktionsutfallet, öka flexibiliteten i tillverkningen, reducera kassation och öka avkastningen, följa säkerhetsregler och förbättra arbetsplatsens hälsa och säkerhet, reducera personalomsättningen och svårigheten att rekrytera nya medarbetare, reducera kapitalkostnader (lager och ledtider) samt spara utrymme i dyra produktionslokaler."
      },
      {
        "question": "Vad är en fördel med robotautomation jämfört med att flytta produktionen utomlands till låglöneländer?",
        "answers": [
          { "text": "Robotautomation är alltid dyrare.", "incorrectReasoning": "Robotautomation kan vara kostnadseffektivt." },
          { "text": "Robotautomation gör att man kan behålla produktionen i Sverige.", "incorrectReasoning": null },
          { "text": "Robotautomation kräver mer personal.", "incorrectReasoning": "Robotautomation minskar ofta personalbehovet för monotona uppgifter." },
          { "text": "Robotautomation minskar produktiviteten.", "incorrectReasoning": "Robotautomation ökar ofta produktiviteten." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Behålla produktionen i Sverige.",
        "longReasoning": "Texten anger att robotautomation kan vara ett bättre alternativ än att flytta produktionen till länder med lägre löner. Genom automation kan företag behålla produktionen i Sverige och ändå vara konkurrenskraftiga."
      },
     {
        "question": "Vad karaktäriserar moderna styr- och processystem?",
        "answers":[
        {"text": "De är baserade på mekaniska reläer.", "incorrectReasoning": "Moderna system är datorbaserade."},
        {"text": "De använder kraftfulla datorer och avancerad programvara.", "incorrectReasoning": null},
        {"text": "De är enkla att programmera utan förkunskaper.", "incorrectReasoning": "De kan vara komplexa och kräva specialkunskaper."},
        {"text": "De används enbart för att styra maskiner, inte processer.", "incorrectReasoning": "De kan styra både maskiner och processer."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Datorer och avancerad programvara.",
        "longReasoning": "Moderna styr- och processystem är uppbyggda kring kraftfulla datorer och avancerad programvara. De kan ha tusentals mät-, kontroll- och reglerpunkter och används för att styra, reglera och övervaka komplexa processer och maskiner."
      },
       {
            "question": "Vad menas med en 'fältbuss' i automationssammanhang?",
            "answers": [
              { "text": "En buss som transporterar personal till fabriken.", "incorrectReasoning": "Detta är en vanlig buss, inte en fältbuss." },
              { "text": "Ett kommunikationsnätverk som kopplar samman olika styrsystem och komponenter.", "incorrectReasoning": null },
              { "text": "En typ av robot.", "incorrectReasoning": "En fältbuss är ett nätverk, inte en robot." },
              { "text": "En typ av sensor.", "incorrectReasoning": "En fältbuss är ett nätverk, inte en sensor." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Kommunikationsnätverk för automation.",
            "longReasoning": "En fältbuss är ett industriellt kommunikationsnätverk som används för att koppla samman olika styrsystem, sensorer, manöverdon och andra komponenter i ett automationssystem. Det möjliggör datautbyte och styrning i realtid."
          },
      {
            "question": "Vad är ett exempel på en tillämpning av luftcylindrar inom automation?",
            "answers": [
              { "text": "Att kyla ned processer.", "incorrectReasoning": "Luftcylindrar används för rörelse, inte kylning." },
              { "text": "Att skapa ett vakuum.", "incorrectReasoning": "Vakuumpumpar används för vakuum." },
                {"text": "Att öppna tunga luckor.","incorrectReasoning":null},
              { "text": "Att mäta temperatur.", "incorrectReasoning": "Temperaturgivare/sensorer används för temperaturmätning." }
            ],
            "correctAnswer": 2,
            "shortReasoning": "Öppna luckor, flytta material, etc.",
            "longReasoning": "Luftcylindrar är en vanlig komponent inom automation och används för att åstadkomma linjära rörelser. Exempel på tillämpningar är att öppna och stänga luckor, förflytta material, pressa ihop detaljer, eller förbättra arbetsställningar."
        },
     {
          "question": "Vad är en 'sensor' i automationssammanhang?",
            "answers": [
                {"text": "En typ av motor.", "incorrectReasoning": "En sensor känner av, en motor skapar rörelse."},
                {"text": "En enhet som detekterar och reagerar på någon form av stimuli, t.ex. läge, ljus eller tryck.", "incorrectReasoning": null},
                {"text": "En typ av datorprogram.", "incorrectReasoning": "En sensor är en fysisk komponent."},
                {"text": "En typ av robot.", "incorrectReasoning": "En sensor är en delkomponent, inte en hel robot."}
            ],
            "correctAnswer": 1,
            "shortReasoning": "Sensor = detektor.",
            "longReasoning": "En sensor är en enhet som detekterar en fysikalisk storhet eller ett tillstånd (t.ex. läge, temperatur, tryck, ljus, ljud) och omvandlar detta till en signal som kan läsas av, bearbetas och användas i ett styrsystem."
        },
        {
            "question": "Vad är en 'induktiv givare'?",
            "answers": [
              { "text": "En givare som mäter temperatur.", "incorrectReasoning": "Induktiva givare mäter läge/närvaro, inte temperatur." },
              { "text": "En givare som detekterar metallföremål beröringsfritt.", "incorrectReasoning": null },
              { "text": "En givare som mäter ljus.", "incorrectReasoning": "Detta är en optisk givare/fotocell." },
              { "text": "En givare som mäter tryck.", "incorrectReasoning": "Detta är en tryckgivare." }
            ],
            "correctAnswer": 1,
            "shortReasoning": "Induktiv givare = metalldetektor.",
            "longReasoning": "En induktiv givare är en typ av sensor som används för att detektera närvaron av metallföremål utan fysisk kontakt. Den fungerar genom att skapa ett elektromagnetiskt fält och detektera förändringar i detta fält när ett metallföremål kommer inom räckvidd."
          },
        {
            "question":"Vad är en fördel med en 'kapacitiv givare' jämfört med en induktiv givare?",
            "answers":[
                {"text":"Kapacitiva givare är billigare.", "incorrectReasoning": "Priset nämns inte som en specifik fördel."},
                {"text":"Kapacitiva givare kan detektera icke-metalliska material.", "incorrectReasoning": null},
                {"text":"Kapacitiva givare är mindre känsliga för störningar.", "incorrectReasoning":"Detta är inte en generell fördel."},
                {"text":"Kapacitiva givare har längre räckvidd.", "incorrectReasoning": "Detta är inte en generell fördel."}
              ],
              "correctAnswer": 1,
              "shortReasoning": "Detekterar även icke-metalliska material.",
              "longReasoning": "En kapacitiv givare kan, till skillnad från en induktiv givare, detektera *både* metalliska *och* icke-metalliska material, som trä, papper, plast, glas och vätskor. Detta gör dem användbara i fler applikationer."
        },
       {
        "question": "Vad mäter en 'termoelement'?",
        "answers":[
         {"text": "Tryck.", "incorrectReasoning":"Termoelement mäter temperatur."},
         {"text":"Ljus.", "incorrectReasoning":"Termoelement mäter temperatur."},
         {"text":"Läge.", "incorrectReasoning":"Termoelement mäter temperatur."},
         {"text": "Temperatur.", "incorrectReasoning":null}
        ],
        "correctAnswer": 3,
        "shortReasoning": "Termoelement mäter temperatur.",
        "longReasoning": "Ett termoelement är en typ av temperaturgivare som utnyttjar Seebeckeffekten. Den består av två olika metalltrådar som är sammanfogade i ena änden. När temperaturdifferens uppstår mellan ändarna skapas en spänning som är proportionell mot temperaturskillnaden."
      },
    {
            "question": "Vad är en 'fotocell'?",
            "answers": [
              { "text": "En typ av batteri.", "incorrectReasoning": "En fotocell reagerar på ljus, den är inte en energikälla." },
              { "text": "En typ av ljuskälla.", "incorrectReasoning": "En fotocell är en ljussensor, inte en ljuskälla." },
              { "text": "En ljuskänslig sensor.", "incorrectReasoning": null },
              { "text": "En typ av motor.", "incorrectReasoning": "En fotocell är en sensor, inte en motor." }
            ],
            "correctAnswer": 2,
            "shortReasoning": "Fotocell = ljussensor.",
            "longReasoning": "En fotocell är en ljuskänslig sensor som reagerar på ljus (synligt ljus, infrarött ljus, ultraviolett ljus) och omvandlar det till en elektrisk signal. Fotoceller används i en mängd olika tillämpningar, t.ex. för att detektera närvaro/frånvaro av objekt, mäta ljusstyrka eller styra belysning."
        },
        {
       "question": "Vad är skillnaden mellan en NC-styrd och en CNC-styrd maskin?",
         "answers": [
            {"text": "NC-maskiner är nyare än CNC-maskiner.", "incorrectReasoning":"CNC är en vidareutveckling av NC."},
            {"text": "CNC-maskiner har en inbyggd dator som tillåter programmering och redigering direkt vid maskinen.", "incorrectReasoning": null},
            {"text": "NC-maskiner styrs med en dator, medan CNC-maskiner styrs med hålkort.", "incorrectReasoning":"Det är tvärtom."},
            {"text": "Det är ingen skillnad, det är bara olika namn.", "incorrectReasoning": "Det finns en teknisk skillnad."}
         ],
         "correctAnswer": 1,
         "shortReasoning": "CNC har datorstyrning, NC har inte.",
         "longReasoning": "NC (Numerical Control) maskiner är en äldre typ av automatiskt styrda maskiner som styrs med hjälp av hålkort eller hålremsor. CNC (Computer Numerical Control) maskiner är en vidareutveckling av NC-tekniken, där en inbyggd dator (ofta en mikrodator) styr maskinens rörelser. CNC-maskiner tillåter programmering och redigering av program direkt vid maskinen, lagring av flera program och ofta mer avancerade funktioner."
        },
        {
        "question": "Vad står DNC för inom automation?",
        "answers":[
         {"text": "Direct Numerical Control.", "incorrectReasoning": null},
         {"text": "Digital Network Control.", "incorrectReasoning":"Det korrekta svaret är Direct Numerical Control."},
         {"text": "Data Numerical Code.", "incorrectReasoning": "Det korrekta svaret är Direct Numerical Control."},
         {"text":"Direct Network Command", "incorrectReasoning":"Det korrekta svaret är Direct Numerical Control."}
        ],
         "correctAnswer": 0,
         "shortReasoning": "DNC = Direct Numerical Control.",
         "longReasoning": "DNC står för Direct Numerical Control och innebär att en central dator används för att styra och övervaka flera NC- eller CNC-maskiner. Detta möjliggör centraliserad programhantering, övervakning och samordning av produktionen."
        },
      {
        "question": "Vad menas med PBB inom produktion?",
        "answers":[
        {"text": "Personlig skyddsutrustning.", "incorrectReasoning":"PBB har en annan betydelse inom produktion."},
        {"text": "Produktion med begränsad bemanning.", "incorrectReasoning": null},
        {"text": "Programmerbar logisk styrenhet.", "incorrectReasoning": "Detta är PLC (Programmable Logic Controller)."},
        {"text": "Produktionsberedning.", "incorrectReasoning": "PBB har en annan betydelse inom produktion."}
        ],
         "correctAnswer": 1,
         "shortReasoning": "PBB = Produktion med Begränsad Bemanning.",
         "longReasoning": "PBB står för Produktion med Begränsad Bemanning. Det innebär att man strävar efter att köra produktionsutrustning, t.ex. CNC-maskiner, med minsta möjliga personalinsats, och i vissa fall helt obemannat under delar av dygnet (t.ex. nattetid). Detta kräver ofta hög grad av automation och tillförlitlig utrustning."
       },
       {
          "question": "Vilken av följande funktioner är *inte* typiskt sett en del av utrustningen för PBB (Produktion med Begränsad Bemanning) i en CNC-fleroperationsmaskin?",
          "answers":[
            {"text":"Pallettmagasin för automatisk frammatning av arbetsstycken.", "incorrectReasoning": "Detta är vanligt för PBB."},
            {"text":"Automatisk verktygsväxling.", "incorrectReasoning": "Detta är en grundläggande funktion i CNC-maskiner, och extra viktigt för PBB."},
            {"text":"Skärkraftsövervakning för verktyg.", "incorrectReasoning": "Detta är viktigt for att upptäcka verktygsbrott/slitage."},
            {"text": "Manuell inmatning av programkod via knappsats.", "incorrectReasoning": null}
            ],
            "correctAnswer": 3,
            "shortReasoning":"Manuell inmatning av programkod är motsatsen till PBB.",
            "longReasoning": "PBB (Produktion med Begränsad Bemanning) syftar till att minimera behovet av manuell övervakning och ingrepp. Manuellt inmatande av programkod vid maskinen är *inte* en typisk funktion för PBB. Istället strävar man efter att ladda program automatiskt, ofta via ett nätverk (DNC). De andra alternativen (palettmagasin, automatisk verktygsväxling, skärkraftsövervakning, automatiskt mätsystem) är alla exempel på funktioner och utrustning som *stödjer* PBB."
        },
        {
        "question": "Vad är en robotarm?",
        "answers": [
        {"text":"En del av en skyddsdräkt.", "incorrectReasoning": "En robotarm är en del av en robot."},
        {"text": "En mekanisk arm som kan programmeras för att utföra olika uppgifter.", "incorrectReasoning": null},
        {"text":"En typ av datormus.", "incorrectReasoning":"En robotarm är en fysisk mekanism, inte en datormus."},
        {"text": "En typ av sensor.", "incorrectReasoning":"En robotarm kan ha sensorer, men är i sig inte en sensor."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Programmerbar mekanisk arm.",
        "longReasoning": "En robotarm är en mekanisk arm, ofta med flera leder, som kan programmeras för att utföra olika uppgifter, t.ex. att flytta, gripa, montera, svetsa eller måla. Robotarmar används ofta inom industrin för att automatisera repetitiva, tunga eller farliga arbetsmoment."
        },
        {
       "question": "Vad innebär 'Teach-in' programmering av en robot?",
       "answers":[
        {"text": "Att man skriver robotprogrammet på en dator.", "incorrectReasoning": "Detta är 'offline'-programmering."},
        {"text": "Att man fysiskt för roboten genom de önskade rörelserna, och att roboten registrerar dessa.", "incorrectReasoning":null},
        {"text": "Att man använder röstkommandon för att styra roboten.", "incorrectReasoning": "Röststyrning är en annan teknik."},
        {"text": "Att roboten lär sig själv genom att observera mänskliga arbetare.", "incorrectReasoning":"Detta är en mer avancerad teknik som inte beskrivs här."}
       ],
       "correctAnswer": 1,
       "shortReasoning": "Teach-in = fysiskt lära roboten rörelser.",
       "longReasoning": "'Teach-in' programmering är en metod för att programmera industrirobotar där man *manuellt* (ofta med hjälp av en kontrollpanel eller joystick) för robotarmen genom de önskade rörelserna och positionerna. Roboten registrerar och sparar dessa rörelser, och kan sedan upprepa dem automatiskt."
       },
        {
       "question": "Vad innebär 'Off-line' programmering av en robot?",
       "answers":[
        {"text": "Att man programmerar roboten genom att fysiskt flytta den.", "incorrectReasoning": "Detta är 'teach-in'-programmering."},
        {"text": "Att man skapar robotprogrammet i en dator, ofta med hjälp av CAD/CAM-system, och sedan överför programmet till roboten.", "incorrectReasoning": null},
        {"text": "Att man stänger av roboten under programmeringen.", "incorrectReasoning": "Off-line syftar på att programmeringen sker *utanför* själva robotcellen."},
        {"text": "Att man använder röstkommandon.", "incorrectReasoning": "Röststyrning är en annan teknik."}
       ],
       "correctAnswer": 1,
       "shortReasoning": "Off-line = programmering vid dator.",
       "longReasoning": "'Off-line' programmering innebär att man skapar och simulerar robotprogrammet i en dator, *utan* att använda själva roboten. Ofta används CAD/CAM-system eller speciell robotprogrammeringsmjukvara. När programmet är färdigt överförs det till robotens styrsystem."
      },
      {
        "question": "Vilken typ av sensor detekterar *alla* metaller beröringsfritt?",
        "answers": [
          { "text": "Kapacitiv givare.", "incorrectReasoning": "Kapacitiva givare detekterar även icke-metalliska material." },
          { "text": "Induktiv givare.", "incorrectReasoning": null },
          { "text": "Fotocell.", "incorrectReasoning": "Fotoceller detekterar ljus, inte specifikt metaller." },
          { "text": "Termoelement.", "incorrectReasoning": "Termoelement mäter temperatur." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Induktiv givare.",
        "longReasoning": "Induktiva givare är sensorer som är speciellt utformade för att detektera *alla* typer av metaller (järn, stål, aluminium, koppar, mässing, etc.) utan fysisk kontakt. De fungerar genom att skapa ett elektromagnetiskt fält och detektera förändringar i detta fält när ett metallföremål kommer inom räckvidd."
      },
    {
        "question": "Vilken typ av sensor kan, förutom metaller, *också* detektera andra material som trä, papper och plast?",
        "answers": [
          { "text": "Induktiv givare.", "incorrectReasoning": "Induktiva givare detekterar *endast* metaller." },
          { "text": "Magnetgivare.", "incorrectReasoning": "Magnetgivare detekterar magneter, inte nödvändigtvis alla material." },
          { "text": "Kapacitiv givare.", "incorrectReasoning": null },
          { "text": "Termoelement.", "incorrectReasoning": "Termoelement mäter temperatur." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "Kapacitiv givare.",
        "longReasoning": "Kapacitiva givare är sensorer som kan detektera *både* metalliska *och* icke-metalliska material, såsom trä, papper, plast, glas, vätskor och livsmedel. De fungerar genom att mäta förändringar i kapacitans (förmågan att lagra elektrisk laddning) när ett föremål kommer nära sensorn."
    },
    {
     "question": "Vad används en *resistiv potentiometer* till?",
     "answers":[
       {"text":"Att mäta temperatur.", "incorrectReasoning":"Resistiva potentiometrar används för lägesmätning."},
       {"text": "Att mäta ljus.", "incorrectReasoning":"Detta görs med en fotocell/ljussensor."},
       {"text":"Att mäta läge.", "incorrectReasoning":null},
       {"text": "Att mäta tryck.", "incorrectReasoning":"Tryck mäts med tryckgivare, eller ibland belastningssensorer."}
     ],
     "correctAnswer": 2,
     "shortReasoning": "Lägesmätning.",
     "longReasoning": "En resistiv potentiometer är en typ av lägessensor. Den består av ett resistivt element (ofta en bana eller tråd) och en rörlig släpkontakt. När släpkontakten rör sig längs det resistiva elementet, ändras resistansen, och denna förändring kan användas för att bestämma läget."
    },
    {
        "question": "Vad mäter en accelerometer?",
        "answers": [
          { "text": "Temperatur.", "incorrectReasoning": "Temperatur mäts med temperaturgivare." },
          { "text": "Ljus.", "incorrectReasoning": "Ljus mäts med ljussensorer/fotoceller." },
          { "text": "Läge.", "incorrectReasoning": "Läge kan mätas med potentiometrar, men accelerometrar mäter *förändring* i rörelse." },
          { "text": "Acceleration.", "incorrectReasoning": null }
        ],
        "correctAnswer": 3,
        "shortReasoning": "Accelerometer mäter acceleration.",
        "longReasoning": "En accelerometer är en sensor som mäter acceleration, dvs. förändring av hastighet över tid. Den kan användas för att detektera rörelse, vibrationer, stötar och lutning."
    },
     {
        "question": "Vad är *inte* en typisk arbetsuppgift som kan utföras av en industrirobot, enligt texten?",
        "answers":[
          {"text": "Svetsning.", "incorrectReasoning": "Svetsning är en vanlig robotapplikation."},
          {"text": "Montering.", "incorrectReasoning":"Montering är en vanlig robotapplikation."},
          {"text":"Programmering av andra robotar.", "incorrectReasoning": null},
          {"text":"Lackering.", "incorrectReasoning": "Lackering (målning) är en vanlig robotapplikation."}
        ],
        "correctAnswer": 2,
        "shortReasoning": "Robotar programmeras av människor, inte av andra robotar (ännu).",
        "longReasoning": "Texten nämner svetsning, lackering, plockning och montering som exempel på uppgifter som industrirobotar kan utföra. Även om robotar i *framtiden* kanske kan programmera andra robotar, är det *inte* en typisk uppgift för dagens industrirobotar. Programmering utförs av *människor*, antingen genom 'teach-in' eller 'off-line'-programmering."
    },
        {
         "question": "Vad är skillnaden på 'teach-in' och 'off-line' programmering av robotar?",
           "answers":[
            {"text": "Teach-in är snabbare, off-line är långsammare.", "incorrectReasoning":"Hastigheten är inte den primära skillnaden."},
            {"text":"Teach-in görs genom att fysiskt styra roboten, off-line görs i en dator.", "incorrectReasoning": null},
            {"text": "Teach-in används bara för enkla uppgifter, off-line för komplexa.", "incorrectReasoning":"Båda kan användas för olika komplexitetsgrad."},
            {"text": "Det är ingen skillnad, de betyder samma sak.", "incorrectReasoning": "Det finns en tydlig skillnad i tillvägagångssätt."}
           ],
           "correctAnswer": 1,
           "shortReasoning": "Teach-in = vid roboten, off-line = vid datorn.",
           "longReasoning": "Vid 'teach-in'-programmering styr man *fysiskt* roboten genom de önskade rörelserna och positionerna, och roboten sparar dessa i sitt minne. Vid 'off-line'-programmering skapar man robotprogrammet i en *dator*, ofta med hjälp av simuleringsprogram eller CAD/CAM-system, och överför sedan programmet till roboten."
        },
    {
      "question": "Vad kallas en samling av sammankopplade maskiner, robotar, sensorer och styrsystem inom automation?",
      "answers":[
        {"text": "En robotcell.", "incorrectReasoning": "En robotcell är en del av ett större system."},
        {"text": "Ett automationssystem.", "incorrectReasoning": null},
        {"text": "En produktionslinje.", "incorrectReasoning": "En produktionslinje kan vara automatiserad, men begreppet är bredare."},
        {"text": "En fabrik.", "incorrectReasoning":"En fabrik kan innehålla flera automationssystem."}
      ],
        "correctAnswer": 1,
      "shortReasoning": "Automationssystem.",
      "longReasoning": "Ett automationssystem är en samling av sammankopplade maskiner, robotar, sensorer, styrsystem (PLC, datorer) och andra komponenter som är utformade för att automatisera en eller flera processer, t.ex. inom tillverkning, montering eller materialhantering. 'Produktionscell' är en *del* av ett större system, men 'automationssystem' är det bredare begreppet."
    },
    {
        "question": "Vad av nedanstående är *inte* en fördel som kan uppnås genom automation, enligt texten?",
        "answers":[
        {"text":"Förbättrad arbetsmiljö.", "incorrectReasoning": "Automation kan minska riskfyllda och monotona arbetsuppgifter."},
        {"text":"Ökad flexibilitet.", "incorrectReasoning": "Automation kan göra det lättare att ställa om produktionen."},
        {"text":"Ökad materialåtgång.", "incorrectReasoning": null},
        {"text": "Jämnare kvalitet.", "incorrectReasoning":"Automation kan minska variationer och ge jämnare kvalitet."}
        ],
        "correctAnswer": 2,
        "shortReasoning": "Ökad materialåtgång är *inte* en fördel.",
        "longReasoning": "Automation kan potentiellt *minska* materialåtgången genom att minska spill, kassation och fel. De andra alternativen (förbättrad arbetsmiljö, ökad flexibilitet och jämnare kvalitet) är alla *fördelar* som nämns i texten i samband med automation."
    },
    {
        "question": "Vad betyder 'NC' i samband med äldre verktygsmaskiner?",
        "answers":[
        {"text": "Numerical Control", "incorrectReasoning": null},
        {"text":"Network Control", "incorrectReasoning":"Det korrekta är Numerical Control."},
        {"text": "New Computer", "incorrectReasoning": "Det korrekta är Numerical Control."},
        {"text": "No Control", "incorrectReasoning":"Det korrekta är Numerical Control."}
        ],
        "correctAnswer": 0,
        "shortReasoning": "NC = Numerical Control.",
        "longReasoning": "NC står för Numerical Control, och är en äldre typ av styrsystem för verktygsmaskiner där programinstruktioner lagrades på hålkort eller hålremsor. Maskinen läste instruktionerna sekventiellt och utförde motsvarande rörelser."
    },
    {
        "question": "Vad skiljer en 'CNC'-maskin från en äldre 'NC'-maskin?",
        "answers": [
          { "text": "CNC-maskiner är alltid större.", "incorrectReasoning": "Storleken är inte den avgörande skillnaden." },
          { "text": "CNC-maskiner har en inbyggd dator som möjliggör programmering och redigering direkt vid maskinen.", "incorrectReasoning": null },
          { "text": "CNC-maskiner kan bara utföra en typ av operation.", "incorrectReasoning": "CNC-maskiner är ofta mer flexibla." },
          { "text": "NC-maskiner är mer exakta.", "incorrectReasoning": "CNC-maskiner är generellt sett mer exakta." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "CNC = datorstyrning.",
        "longReasoning": "Den största skillnaden mellan NC (Numerical Control) och CNC (Computer Numerical Control) maskiner är att CNC-maskiner har en *inbyggd dator*. Detta möjliggör programmering, redigering och lagring av program direkt vid maskinen, samt ger ofta mer avancerade funktioner och flexibilitet."
    }
    ]
  }, {
    name: "Kvalitet - från grunden",
    source: "./pdf/Kvalitet - från grunden.pdf",
    questions: [
      {
          "question": "Vad menas med 'rätt kvalitet' enligt boken?",
          "answers": [
              { "text": "Högsta möjliga kvalitet oavsett kostnad.", "incorrectReasoning": "Rätt kvalitet handlar om att uppfylla krav, inte att maximera kvaliteten till varje pris." },
              { "text": "Att produkten tillfredsställer kundens/användarens krav, behov, önskemål och förväntningar.", "incorrectReasoning": null },
              { "text": "Att produkten är felfri.", "incorrectReasoning": "Rätt kvalitet kan innebära felfrihet, men det är bredare än så." },
              { "text": "Att produkten är billigast möjliga.", "incorrectReasoning": "Rätt kvalitet handlar om att uppfylla krav, inte att minimera priset." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Rätt kvalitet = uppfylla kundens krav.",
          "longReasoning": "Boken definierar 'rätt kvalitet' som att produkten (vara eller tjänst) tillfredsställer användarens eller kundens krav, behov, önskemål och förväntningar. Det handlar alltså inte om absolut högsta möjliga kvalitet, utan om att uppfylla de *specifika* krav som ställs."
      },
      {
          "question": "Varför är 'rätt kvalitet' viktigt för företag?",
          "answers": [
            { "text": "För att det är lag på det.", "incorrectReasoning": "Det finns lagar om produktsäkerhet, men 'rätt kvalitet' är bredare." },
            { "text": "För att det leder till nöjda kunder, konkurrenskraft och lönsamhet.", "incorrectReasoning": null },
            { "text": "För att det gör produkterna dyrare.", "incorrectReasoning": "Rätt kvalitet kan leda till *ökad* lönsamhet, inte nödvändigtvis högre pris." },
            { "text": "För att det minskar behovet av marknadsföring.", "incorrectReasoning": "Marknadsföring behövs fortfarande, men rätt kvalitet kan ge *bättre* marknadsföring." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Nöjda kunder, konkurrenskraft, lönsamhet.",
          "longReasoning": "Att leverera 'rätt kvalitet' är avgörande för företags överlevnad och framgång. Det leder till nöjda kunder, stärker företagets konkurrenskraft på marknaden, och bidrar till ökad lönsamhet genom minskade kostnader för fel, reklamationer och förlorade kunder."
        },
        {
          "question": "Vad är skillnaden mellan en 'intern kund' och en 'extern kund'?",
          "answers":[
          {"text":"En 'intern kund' är en chef, en 'extern kund' är en anställd.", "incorrectReasoning":"Både chefer och anställda kan vara interna kunder. Externa kunder är utanför organisationen."},
          {"text": "En 'intern kund' finns inom samma företag/organisation, en 'extern kund' finns utanför.", "incorrectReasoning": null},
          {"text": "En 'intern kund' köper varor, en 'extern kund' köper tjänster.", "incorrectReasoning": "Kundrelationen definieras av var mottagaren finns, inte typen av produkt."},
          {"text": "Det är ingen skillnad, de betyder samma sak.", "incorrectReasoning":"Det finns en tydlig skillnad."}
          ],
          "correctAnswer": 1,
          "shortReasoning": "Intern kund = inom företaget. Extern kund = utanför.",
          "longReasoning": "En *intern kund* är en person eller avdelning inom samma företag eller organisation som tar emot en produkt (material, information, tjänst) från en annan del av företaget. En *extern kund* är en person eller organisation *utanför* företaget som köper eller använder företagets produkter."
        },
      {
          "question": "Vad är ett 'kvalitetssystem'?",
          "answers": [
            { "text": "En samling datorprogram för att rita produkter.", "incorrectReasoning": "Detta är CAD-program, inte ett kvalitetssystem." },
            { "text": "Ett system av regler, rutiner och metoder för att styra verksamheten så att produkterna får rätt kvalitet.", "incorrectReasoning": null },
            { "text": "En metod för att kontrollera produkternas vikt.", "incorrectReasoning": "Detta är en del av kvalitetskontrollen, men inte hela kvalitetssystemet." },
            { "text": "En lista över alla anställda i företaget.", "incorrectReasoning": "Detta är en personalförteckning, inte ett kvalitetssystem." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Regler och rutiner för att styra kvaliteten.",
          "longReasoning": "Ett kvalitetssystem är ett formaliserat system av regler, rutiner, metoder och anvisningar som beskriver hur ett företag ska organisera, leda och styra sin verksamhet för att säkerställa att produkterna (varor eller tjänster) uppfyller de specificerade kraven och har rätt kvalitet."
        },
        {
        "question":"Vad är syftet med en 'kvalitetshandbok'?",
         "answers":[
          {"text":"Att vara en snygg bok att visa upp för kunderna.", "incorrectReasoning": "Den har ett praktiskt syfte, inte bara ett estetiskt."},
          {"text":"Att samla alla dokument som rör företagets kvalitetssystem på ett ställe.", "incorrectReasoning":null},
          {"text":"Att vara en instruktionsbok för hur man använder företagets datorer.", "incorrectReasoning":"Det är en separat manual."},
          {"text": "Att vara en prislista över företagets produkter.", "incorrectReasoning": "Prislistor är separata dokument."}
         ],
         "correctAnswer": 1,
         "shortReasoning": "Samla kvalitetsdokumentationen.",
         "longReasoning": "Kvalitetshandboken är ett centralt dokument (eller en samling dokument) i ett kvalitetssystem. Den beskriver företagets kvalitetspolicy, organisation, rutiner, metoder och ansvar för att säkerställa att produkterna uppfyller kraven. Den fungerar som en referens och vägledning för alla anställda."
        },
         {
              "question": "Vad innebär 'certifiering' av ett kvalitetssystem?",
              "answers": [
                { "text": "Att företaget har fått ett diplom för bra produkter.", "incorrectReasoning": "Certifiering handlar om *systemet*, inte enskilda produkter." },
                { "text": "Att en oberoende organisation har granskat och godkänt företagets kvalitetssystem enligt en viss standard.", "incorrectReasoning": null },
                { "text": "Att företaget har anställt en kvalitetschef.", "incorrectReasoning": "Det är en intern åtgärd, inte en certifiering." },
                { "text": "Att företaget har fått ett pris för bästa kvalitet.", "incorrectReasoning": "Priser är inte samma sak som certifiering." }
              ],
              "correctAnswer": 1,
              "shortReasoning": "Oberoende granskning och godkännande av systemet.",
              "longReasoning": "Certifiering av ett kvalitetssystem innebär att en oberoende, ackrediterad organisation (certifieringsorgan) har granskat företagets kvalitetssystem och funnit att det uppfyller kraven i en viss standard, t.ex. ISO 9001. Certifikatet är ett bevis på att systemet är implementerat och följs."
          },
        {
      "question": "Vad är 'SS-EN ISO 9001:2000'?",
      "answers":[
       {"text": "En svensk standard for miljbledningssystem.", "incorrectReasoning": "Detta är ISO 14001."},
       {"text": "En internationell standard för kvalitetssystem.", "incorrectReasoning": null},
       {"text": "En standard for produktsäkerhet.", "incorrectReasoning":"Det finns andra standarder för produktsäkerhet."},
       {"text": "En standard för svetsprocedurer.", "incorrectReasoning": "Det finns andra standarder for svetsning."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Internationell standard för kvalitetssystem.",
      "longReasoning": "SS-EN ISO 9001:2000 är en internationell standard (ISO) som har antagits som europeisk standard (EN) och svensk standard (SS). Den specificerar krav på ett ledningssystem för kvalitet, dvs. hur en organisation ska styra sin verksamhet för att säkerställa att produkterna uppfyller kundernas och andra intressenters krav och förväntningar. (Observera att detta är en äldre version; den nuvarande versionen är ISO 9001:2015)."
    },
    {
      "question":"Vad är en 'revision' i kvalitetssammanhang?",
      "answers":[
        {"text":"En ekonomisk granskning.", "incorrectReasoning": "Detta är en finansiell revision."},
        {"text":"En genomgång for att kontrollera att kvalitetssystemet foljs.", "incorrectReasoning": null},
        {"text": "En anställningsintervju.", "incorrectReasoning": "Detta är en rekryteringsprocess."},
        {"text": "En produktutvecklingsprocess.", "incorrectReasoning": "Detta är en del av verksamheten, men inte en revision."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Kontroll av att systemet följs.",
      "longReasoning": "En revision i kvalitetssammanhang är en systematisk och oberoende granskning för att bedöma om ett företags kvalitetssystem (eller delar av det) uppfyller de krav som ställs, och om det tillämpas effektivt. Revisioner kan vara interna (utförs av företaget självt) eller externa (utförs av kunder eller certifieringsorgan)."
    },
    {
      "question":"Vad menas med att en revision är 'opartisk'?",
      "answers":[
      {"text": "Att revisorn är anställd av företaget.", "incorrectReasoning":"Detta kan skapa en intressekonflikt."},
      {"text": "Att revisorn inte har några personliga eller ekonomiska kopplingar till det som granskas.", "incorrectReasoning": null},
      {"text": "Att revisorn är kund till företaget.", "incorrectReasoning":"Detta kan skapa en intressekonflikt."},
      {"text":"Att revisionen sker utanför arbetstid.", "incorrectReasoning": "Tidpunkten är inte avgörande for opartiskheten."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Opartisk = oberoende och objektiv.",
      "longReasoning": "En opartisk revision innebär att den som utför revisionen (revisorn) är oberoende och objektiv i förhållande till det som granskas. Revisorn får inte ha några personliga eller ekonomiska intressen i företaget eller vara involverad i den verksamhet som granskas. Detta för att säkerställa att revisionen blir rättvis och trovärdig."
      },
       {
          "question": "Vad innebär 'styrning mot målvärde' i produktionen?",
          "answers": [
            { "text": "Att man bara kontrollerar att produkterna ligger inom toleransgränserna.", "incorrectReasoning": "Detta är kontroll, inte styrning mot målvärde." },
            { "text": "Att man strävar efter att producera produkter som ligger så nära ett specifikt idealvärde som möjligt.", "incorrectReasoning": null },
            { "text": "Att man sätter upp ett mål för hur många produkter som ska tillverkas per dag.", "incorrectReasoning": "Detta är en produktionskvantitet, inte ett kvalitetsmål." },
            { "text": "Att man bara fokuserar på att minska kostnaderna.", "incorrectReasoning": "Kostnadsminskning kan vara en följd, men målvärdesstyrning fokuserar på kvalitet." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Sträva efter idealvärdet, inte bara toleransgränserna.",
          "longReasoning": "Styrning mot målvärde innebär att man i produktionen inte bara fokuserar på att hålla sig *inom* toleransgränserna, utan att man aktivt strävar efter att producera produkter vars egenskaper ligger så *nära* ett specifikt idealvärde (målvärde) som möjligt. Detta kräver en kontinuerlig övervakning och justering av processen."
      },
      {
        "question":"Vad är ett 'histogram'?",
        "answers":[
          {"text": "En tabell med siffror.", "incorrectReasoning": "Ett histogram är en *grafisk* representation."},
          {"text": "En typ av flödesschema.", "incorrectReasoning": "Flödesscheman visar processer, inte frekvensfördelningar."},
          {"text":"Ett stapeldiagram där staplarnas höjd visar frekvensen av värden inom olika intervall.", "incorrectReasoning": null},
          {"text": "En kurva som visar trender över tid.", "incorrectReasoning":"Detta kan vara ett linjediagram, inte ett histogram."}
        ],
        "correctAnswer": 2,
        "shortReasoning": "Histogram = stapeldiagram som visar frekvensfördelning.",
        "longReasoning": "Ett histogram är en typ av stapeldiagram som används för att visa *frekvensfördelningen* av en uppsättning data. Data delas in i intervall (klasser), och höjden på varje stapel motsvarar antalet observationer (eller frekvensen) inom det intervallet."
       },
        {
      "question": "Vad är ett 'Pareto-diagram'?",
       "answers":[
       {"text": "Ett diagram som visar hur en process flödar.", "incorrectReasoning":"Detta är ett flödesschema."},
       {"text": "Ett stapeldiagram där staplarna är ordnade efter storlek, från den största till den minsta.", "incorrectReasoning": null},
       {"text": "Ett diagram som visar trender över tid.", "incorrectReasoning": "Detta kan vara ett linjediagram."},
       {"text":"Ett cirkeldiagram.", "incorrectReasoning": "Cirkeldiagram visar andelar, inte rangordning."}
       ],
       "correctAnswer": 1,
       "shortReasoning": "Pareto-diagram = stapeldiagram i storleksordning.",
       "longReasoning": "Ett Pareto-diagram är en typ av stapeldiagram som används för att visualisera och prioritera problem eller orsaker. Staplarna är ordnade i fallande ordning efter storlek (frekvens, kostnad, etc.), vilket gör det lätt att identifiera de 'vitala få' faktorer som står för den största delen av problemet (enligt Pareto-principen, 80/20-regeln)."
        },
       {
      "question": "Vad visar ett 'sambandsdiagram' (korrelationsdiagram)?",
        "answers": [
         {"text": "Hur en process är uppbyggd.", "incorrectReasoning": "Detta visas i ett flödesschema."},
         {"text": "Hur ofta olika fel uppträder.", "incorrectReasoning": "Detta visas i ett Pareto-diagram eller histogram."},
         {"text":"Hur två variabler förhåller sig till varandra.", "incorrectReasoning": null},
         {"text": "Trender över tid.", "incorrectReasoning": "Detta kan visas i ett linjediagram."}
        ],
        "correctAnswer": 2,
        "shortReasoning": "Sambandsdiagram visar samband mellan variabler.",
        "longReasoning": "Ett sambandsdiagram (eller korrelationsdiagram) är en grafisk metod för att visa *relationen* mellan två variabler. Varje punkt i diagrammet representerar ett par av mätvärden, och mönstret av punkter kan indikera om det finns ett positivt samband, ett negativt samband eller inget samband alls."
       },
       {
           "question": "Vad är en 'normalfördelningskurva'?",
            "answers": [
             {"text": "En kurva som visar hur ofta olika fel uppträder.", "incorrectReasoning":"Detta kan visas i ett Pareto-diagram."},
             {"text":"En klockformad kurva som visar hur mätvärden ofta fördelar sig runt ett medelvärde.", "incorrectReasoning": null},
             {"text": "En kurva som visar trender över tid.", "incorrectReasoning":"Detta kan visas i ett linjediagram."},
             {"text": "En kurva som visar hur två variabler förhåller sig till varandra.", "incorrectReasoning": "Detta visas i ett sambandsdiagram."}
            ],
            "correctAnswer": 1,
            "shortReasoning": "Klockformad kurva som visar vanlig fördelning.",
            "longReasoning": "En normalfördelningskurva (även kallad Gausskurva) är en klockformad, symmetrisk kurva som beskriver hur mätvärden ofta fördelar sig runt ett medelvärde. Många naturliga och industriella processer ger mätvärden som är ungefär normalfördelade."
        },
        {
          "question":"Vad är en 'styrgräns' i ett styrdiagram?",
          "answers":[
          {"text": "Samma sak som en toleransgräns.", "incorrectReasoning":"Styrgränser är *besluts*gränser, inte toleransgränser."},
          {"text": "En gräns som anger när man ska justera processen.", "incorrectReasoning": null},
          {"text":"Det största tillåtna värdet.", "incorrectReasoning": "Detta är det övre gränsmåttet, inte en styrgräns."},
          {"text": "Det minsta tillåtna värdet.", "incorrectReasoning": "Detta är det undre gränsmåttet, inte en styrgräns."}
          ],
          "correctAnswer": 1,
          "shortReasoning": "Styrgräns = gräns för när åtgärd ska vidtas.",
          "longReasoning": "I ett styrdiagram används styrgränser (övre och undre) för att avgöra när en process är 'under kontroll' (stabil) eller om det finns tecken på att något har förändrats och att processen behöver justeras. Styrgränser är *inte* samma sak som toleransgränser. Styrgränserna är *beslutsgränser* som används för att styra processen, medan toleransgränserna anger de tillåtna värdena för produkten."
      },
          {
              "question": "Vilken av följande förkortningar används *inte* i boken 'Kvalitet från grunden'?",
              "answers": [
                { "text": "FMEA", "incorrectReasoning": "FMEA nämns på sidan 70." },
                { "text": "QFD", "incorrectReasoning": "QFD nämns på sidan 70." },
                { "text": "SS-EN ISO 9001:2000", "incorrectReasoning": "Denna standard nämns flera gånger." },
                { "text": "CNC", "incorrectReasoning": null }
              ],
              "correctAnswer": 3,
              "shortReasoning": "CNC nämns inte.",
              "longReasoning": "Boken nämner FMEA (Failure Mode and Effect Analysis) och QFD (Quality Function Deployment) som exempel på metoder för kvalitetsarbete, och SS-EN ISO 9001:2000 som en viktig standard för kvalitetssystem. CNC (Computer Numerical Control) nämns inte i denna bok om toleranser och kvalitet."
          }
  ]
  }, {
    name: "Skärteknik",
    source: "./pdf/SKÄRTEKNIK.pdf",
    questions: [
      {
          "question": "Vilka tre huvudgrupper av faktorer påverkar valet av skärverktyg och skärdata?",
          "answers": [
              { "text": "Material, maskin, och operatör.", "incorrectReasoning": "Operatören är viktig, men dessa är bredare kategorier." },
              { "text": "Arbetsstyckets material, skäreggens geometri och skärverktygets material/sort.", "incorrectReasoning": null },
              { "text": "Pris, tillgänglighet och leveranstid.", "incorrectReasoning": "Detta är inköpsfaktorer, inte bearbetningsfaktorer." },
              { "text": "Färg, form och vikt.", "incorrectReasoning": "Dessa är estetiska faktorer, inte bearbetningsfaktorer." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Material, skärgeometri, skärverktygsmaterial.",
          "longReasoning": "De tre övergripande faktorer som *först* måste identifieras för att bestämma ett materials bearbetbarhet är: 1. Arbetsstyckets material (metallurgisk/mekanisk klassificering). 2. Skäreggens mikro- och makrogeometri. 3. Skärverktygets material/sort (t.ex. belagd hårdmetall, keramik)."
      },
      {
          "question": "Vilken är den vanligaste ISO-huvudgruppen för material inom skärande bearbetning?",
          "answers": [
              { "text": "ISO M (Rostfritt stål).", "incorrectReasoning": "Rostfritt stål är en viktig grupp, men inte den *vanligaste*." },
              { "text": "ISO K (Gjutjärn).", "incorrectReasoning": "Gjutjärn är en viktig grupp, men inte den *vanligaste*." },
              { "text": "ISO P (Stål).", "incorrectReasoning": null },
              { "text": "ISO N (Aluminium).", "incorrectReasoning": "Aluminium är en viktig grupp, men inte den *vanligaste*." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "ISO P (Stål) är vanligast.",
          "longReasoning": "ISO P (Stål) är troligtvis den största materialgruppen inom skärande bearbetning, med en stor variation av olika komponenttyper och applikationer."
      },
      {
          "question": "Vilken ISO-huvudgrupp innehåller material som ofta ger långa, sega spånor vid bearbetning?",
          "answers": [
              { "text": "ISO K (Gjutjärn).", "incorrectReasoning": "Gjutjärn ger ofta korta, spröda spånor." },
              { "text": "ISO N (Aluminium).", "incorrectReasoning": "Aluminium kan ge långa spånor, men stål är mer känt för det." },
              { "text": "ISO P (Stål).", "incorrectReasoning": null },
              { "text": "ISO H (Härdade material).", "incorrectReasoning": "Härdade material ger ofta korta spånor." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "ISO P (Stål), speciellt lågkolhaltiga stål.",
          "longReasoning": "ISO P (Stål) är känt för att generellt ge långa, sega spånor vid bearbetning, särskilt lågkolhaltiga stål. Högkolhaltiga stål tenderar att vara sprödare och ge kortare spånor."
      },
        {
          "question":"Vilken ISO-huvudgrupp kännetecknas av material som ofta ger pulveraktig spånbildning?",
          "answers": [
            {"text": "ISO P (Stål).", "incorrectReasoning": "Stål ger oftast långa, sega spånor, i synnerhet låglegerat."},
            {"text": "ISO M (Rostfritt stål).", "incorrectReasoning": "Rostfritt stål har varierande spånbildning."},
            {"text": "ISO K (Gjutjärn).", "incorrectReasoning": null},
            {"text": "ISO N (Aluminium).", "incorrectReasoning": "Aluminium ger oftare sega spånor."}
          ],
          "correctAnswer": 2,
          "shortReasoning": "ISO K (Gjutjärn).",
          "longReasoning":"ISO K (Gjutjärn) är känt för att spånbildningen kan variera kraftigt, från pulveraktigt (särskilt grått gjutjärn) till långa spånor. Detta beror på gjutjärnets sammansättning och struktur."
        },
      {
          "question": "Vilket material kräver *inte* nödvändigtvis stor effekt per mm³ vid bearbetning, men kan ändå kräva hög effekt på grund av höga bearbetningshastigheter?",
          "answers": [
              { "text": "ISO P (Stål).", "incorrectReasoning": "Stål kräver ofta relativt hög effekt per mm³." },
              { "text": "ISO M (Rostfritt stål).", "incorrectReasoning": "Rostfritt stål kräver ofta relativt hög effekt per mm³." },
              { "text": "ISO K (Gjutjärn).", "incorrectReasoning": "Gjutjärn kräver ofta lägre effekt per mm³." },
              { "text": "ISO N (Aluminium).", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "ISO N (Aluminium).",
          "longReasoning": "ISO N (Aluminium) kräver relativt *låg* effekt per mm³ material som avverkas. Men eftersom aluminium ofta bearbetas med *mycket höga* skärhastigheter och avverkningshastigheter, kan den totala effektförbrukningen ändå bli hög."
        },
      {
          "question": "Vilken ISO-huvudgrupp innehåller material som ofta bildar långa, rödglödande spånor vid bearbetning?",
          "answers": [
              { "text": "ISO P (Stål).", "incorrectReasoning": "Vissa stål kan ge rödglödande spånor, men detta är mer typiskt för härdade stål." },
              { "text": "ISO M (Rostfritt stål).", "incorrectReasoning": "Rostfritt stål ger inte typiskt rödglödande spånor." },
              { "text": "ISO K (Gjutjärn).", "incorrectReasoning": "Gjutjärn ger inte typiskt rödglödande spånor." },
              { "text": "ISO H (Härdade stål).", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "ISO H (Härdade stål).",
          "longReasoning": "ISO H (Härdade material, ofta stål) kännetecknas av att de vid bearbetning ofta bildar långa, rödglödande spånor. Detta beror på den höga temperaturen som genereras vid bearbetning av hårda material."
      },
      {
          "question": "Vad är *inte* en egenskap hos obelagd hårdmetall?",
          "answers": [
              { "text": "Används i medelsvåra/svåra applikationer i P,K, Al och S", "incorrectReasoning": "Detta stämmer." },
              { "text": "Bra kombination av slitstyrka och seghet", "incorrectReasoning": "Detta stämmer." },
              { "text": "Ger skarpa skäreggar", "incorrectReasoning": "Detta stämmer." },
              { "text": "Stor del av det totala sortprogrammet", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "Obelagd hårdmetall utgör en liten del av sortprogrammet.",
          "longReasoning": "Obelagd hårdmetall har bra kombination av slitstyrka/seghet, och ger vassa skäreggar, och lämpar sig för vissa applikationer, men representerar en *liten* del av det totala sortprogrammet. De flesta hårdmetallverktyg idag är belagda."
      },
      {
         "question": "Vilken typ av beläggningsteknik, CVD eller PVD, ger generellt *tunnare* beläggningar?",
          "answers": [
              { "text": "CVD.", "incorrectReasoning": "CVD ger tjockare beläggningar." },
              { "text": "PVD.", "incorrectReasoning": null },
              { "text": "De ger lika tjocka beläggningar.", "incorrectReasoning": "PVD ger tunnare beläggningar." },
              { "text": "Det beror på materialet.", "incorrectReasoning": "PVD ger generellt tunnare skikt, oavsett material." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "PVD ger tunnare beläggningar.",
          "longReasoning": "PVD (Physical Vapor Deposition) är en beläggningsmetod som generellt ger *tunnare* beläggningar (2-6 mikrometer) jämfört med CVD (Chemical Vapor Deposition, 4-20 mikrometer). PVD-beläggningar används ofta på verktyg som kräver vassa eggar."
      },
      {
     "question": "Vad är en fördel med CVD-beläggningar?",
      "answers":[
      {"text": "De ger vassare skäreggar.", "incorrectReasoning": "Detta är en fördel med PVD."},
      {"text":"De kan göras mycket tjocka, vilket ger god slitstyrka.", "incorrectReasoning": null},
      {"text": "De är lämpliga för höga skärhastigheter.", "incorrectReasoning":"Både CVD och PVD kan användas vid höga hastigheter, men detta är ingen unik fördel med CVD."},
      {"text": "De kan användas på lödda spetsar.", "incorrectReasoning": "Detta är en fördel med PVD."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "CVD ger tjocka, slitstarka beläggningar.",
      "longReasoning": "En fördel med CVD (Chemical Vapor Deposition) är att det kan ge *tjocka* och jämna beläggningar (4-20 mikrometer), vilket ger mycket god slitstyrka. CVD-processen sker vid höga temperaturer (800-1000°C)."
   },
  {
    "question":"Vad står 'CBN' för?",
   "answers":[
    {"text": "En typ av keramik.", "incorrectReasoning": "CBN är inte en keramik."},
      {"text":"En typ av hårdmetall.", "incorrectReasoning": "CBN är inte en hårdmetall."},
      {"text": "Kubisk bornitrid.", "incorrectReasoning": null},
      {"text": "En typ av beläggning.", "incorrectReasoning":"CBN är ett *material*, inte en beläggningsteknik."}
   ],
   "correctAnswer": 2,
   "shortReasoning": "CBN = Kubisk Bornitrid.",
   "longReasoning": "CBN står för Kubisk Bornitrid, ett *superhårt* material (näst efter diamant) som används i skärverktyg för bearbetning av hårda material, t.ex. härdat stål och gjutjärn."
  },
  {
      "question": "Vilken typ av skärverktygsmaterial beskrivs som 'extremt slitstarkt, men känsligt för urflisning'?",
        "answers": [
          {"text": "Snabbstål.", "incorrectReasoning":"Snabbstål är inte extremt slitstarkt."},
          {"text":"Hårdmetall.", "incorrectReasoning": "Hårdmetall är slitstarkt, men inte lika känsligt for urflisning som diamant."},
          {"text": "Keramik.", "incorrectReasoning": "Keramik är hårt och slitstarkt men inte lika känsligt."},
          {"text": "Polykristallin diamant.", "incorrectReasoning": null}
          ],
          "correctAnswer": 3,
          "shortReasoning": "Polykristallin diamant.",
          "longReasoning": "Polykristallin diamant (PCD) är extremt slitstarkt, men också känsligt för urflisning (att små bitar av materialet bryts loss). Det används främst för bearbetning av icke-järnhaltiga material och mycket nötande material."
  },
  {
      "question": "Vilken skärförslitningstyp beskrivs som 'stora lokala skador vid maximalt skärdjup'?",
      "answers":[
          {"text": "Fasförslitning.", "incorrectReasoning":"Fasförslitning är en jämn förslitning längs flankytan."},
          {"text": "Gropförslitning", "incorrectReasoning":"Gropförslitning sker på spånytan."},
          {"text": "Strålförslitning.", "incorrectReasoning": null},
          {"text":"Flagning.", "incorrectReasoning":"Flagning är mindre, ytliga skador."}
      ],
      "correctAnswer": 2,
      "shortReasoning": "Strålförslitning.",
      "longReasoning": "Strålförslitning kännetecknas av stora, lokala skador (urgröpningar) som uppstår vid det maximala skärdjupet. Det kan orsakas av kemisk förslitning, vidhäftning eller värme, och är vanligt vid bearbetning av material som ger deformationshärdning."
  
  },
   {
          "question": "Vad är den primära orsaken till *gropförslitning* på ett skärverktyg?",
          "answers": [
            { "text": "För låg skärhastighet.", "incorrectReasoning": "Låg hastighet brukar *minska* gropförslitning." },
            { "text": "Kontakt mellan spånan och skärets spånyta.", "incorrectReasoning": null },
            { "text": "För hög matning.", "incorrectReasoning": "Hög matning kan bidra, men är inte den primära orsaken." },
            { "text": "För litet skärdjup.", "incorrectReasoning": "Litet skärdjup brukar *minska* gropförslitning." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Spånans kontakt med spånytan.",
          "longReasoning": "Gropförslitning uppstår på skärverktygets *spånyta* (den yta som spånan glider mot) och orsakas av en kombination av kemisk förslitning (diffusion) och nötning från spånan. Hög temperatur och tryck i kontaktytan mellan spåna och skär bidrar till gropförslitning."
   },
    {
      "question":"Vad är *inte* en rekommenderad åtgärd vid gropförslitning?",
       "answers":[
        {"text": "Sänka skärhastigheten.", "incorrectReasoning": "Detta är en rekommenderad åtgärd."},
        {"text":"Välja ett skär med rätt geometri.", "incorrectReasoning": "Detta är en rekommenderad åtgärd."},
        {"text": "Använda en slitstarkare beläggning.", "incorrectReasoning": "Detta är en rekommenderad åtgärd."},
        {"text": "Öka skärhastigheten", "incorrectReasoning":null}
      ],
      "correctAnswer": 3,
      "shortReasoning": "Ökad skärhastighet ökar gropförslitningen.",
      "longReasoning": "För att minska gropförslitning rekommenderas att *sänka* skärhastigheten, välja ett skär med en geometri som är bättre anpassad för materialet och applikationen, samt att använda en slitstarkare beläggning. Att *öka* skärhastigheten skulle förvärra problemet."
    },
      {
         "question": "Vilken typ av förslitning kännetecknas av små, vinkelräta sprickor mot egglinjen?",
          "answers": [
            { "text": "Fasförslitning.", "incorrectReasoning": "Fasförslitning är en jämn förslitning." },
            { "text": "Gropförslitning.", "incorrectReasoning": "Gropförslitning är en urgröpning på spånytan." },
            { "text": "Flagning.", "incorrectReasoning": "Flagning är små urbrott." },
            { "text": "Kamsprickor (värmesprickor).", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "Kamsprickor = vinkelräta sprickor.",
          "longReasoning": "Kamsprickor (även kallade värmesprickor) är små sprickor som bildas *vinkelrätt* mot skäreggen. De orsakas av snabba temperaturväxlingar i skäret (termisk chock)."
  
      },
    {
     "question": "Vilken åtgärd rekommenderas *inte* vid kamsprickor/värmesprickor?",
      "answers":[
      {"text": "Använda en segare skärsort.", "incorrectReasoning": "Segare sorter är mer motståndskraftiga mot sprickbildning."},
      {"text": "Använda rikligt med skärvätska, eller ingen alls.", "incorrectReasoning": "Antingen konstant kylning *eller* torr bearbetning rekommenderas."},
      {"text":"Minska matningen", "incorrectReasoning":"Detta är *inte* en rekommenderad åtgärd"},
      {"text": "Undvika temperaturväxlingar", "incorrectReasoning": "Temperaturväxlingar är *orsaken* till problemet."}
      ],
      "correctAnswer": 2,
      "shortReasoning": "Att minska matningen hjälper inte mot kamsprickor.",
      "longReasoning":"För att undvika kamsprickor (värmesprickor) bör man undvika snabba temperaturväxlingar. Det innebär att man antingen ska använda skärvätska *konstant och rikligt*, eller *inte alls* (torr bearbetning). Att använda en segare skärsort kan också hjälpa. Att minska matningen har ingen direkt positiv effekt."
    },
     {
         "question": "Vilken av följande förslitningstyper är *inte* primärt orsakad av mekanisk påverkan?",
         "answers": [
           { "text": "Fasförslitning.", "incorrectReasoning": "Fasförslitning orsakas av nötning (mekanisk)." },
           { "text": "Flagning.", "incorrectReasoning": "Flagning är små urbrott (mekanisk)." },
           { "text": "Strålförslitning.", "incorrectReasoning": "Strålförslitning kan orsakas av kemisk förslitning, värme och deformation." },
           { "text": "Brott.", "incorrectReasoning": "Brott orsakas av för hög belastning (mekanisk)." }
         ],
         "correctAnswer": 2,
         "shortReasoning": "Strålförslitning.",
         "longReasoning": "Fasförslitning (nötning), flagning (små urbrott) och brott (stor spricka/brott) är alla primärt orsakade av *mekanisk* påverkan (krafter, nötning). Strålförslitning är en mer komplex förslitningstyp som kan orsakas av en kombination av *kemisk* förslitning (diffusion), *värme* och *deformation*."
     },
      {
      "question": "Vad är den vanligaste orsaken till 'flagning' på ett skärverktyg?",
      "answers":[
          {"text": "För hög skärhastighet.", "incorrectReasoning": "Hög hastighet kan bidra, men är inte den vanligaste direkta orsaken."},
          {"text": "För låg matning.", "incorrectReasoning":"Låg matning är sällan orsaken."},
          {"text":"Vidhäftande belastning (material som fastnar på skäret).", "incorrectReasoning": null},
          {"text": "För stort skärdjup.", "incorrectReasoning": "Stort skärdjup kan bidra, men är inte den vanligaste direkta orsaken."}
      ],
      "correctAnswer": 2,
      "shortReasoning": "Vidhäftning (material som fastnar).",
      "longReasoning": "Flagning (små urbrott ur skäreggen) orsakas oftast av *vidhäftande belastning*. Detta innebär att material från arbetsstycket fastnar (kletar fast) på skäreggen och sedan dras loss, varvid små bitar av skärmaterialet följer med."
      },
       {
      "question": "Vad kan *inte* bidra till att orsaka *plastisk deformation* av ett skärverktyg?",
        "answers":[
         {"text": "Höga skärkrafter.", "incorrectReasoning":"Höga krafter kan deformera skäret."},
         {"text":"Höga temperaturer.", "incorrectReasoning":"Hög temperatur gör materialet mjukare och mer benäget att deformeras."},
         {"text":"För låg skärhastighet.", "incorrectReasoning": null},
         {"text": "Användning av ett skär med for låg varmhårdhet.", "incorrectReasoning":"Låg varmhårdhet gör skäret mer känsligt for deformation vid höga temperaturer."}
        ],
        "correctAnswer": 2,
        "shortReasoning": "Låg skärhastighet orsakar *inte* plastisk deformation.",
        "longReasoning": "Plastisk deformation (permanent formförändring) av ett skärverktyg orsakas av en kombination av *höga* skärkrafter och *höga* temperaturer. Att använda ett skärverktyg med för *låg* varmhårdhet (förmåga att behålla hårdheten vid höga temperaturer) ökar risken for plastisk deformation. För *låg* skärhastighet bidrar *inte* till plastisk deformation; tvärtom kan *hög* skärhastighet öka temperaturen och därmed risken."
      },
      {
          "question": "Vilken bokstav används för att beteckna stål i ISO-systemet för materialgrupper?",
          "answers": [
              { "text": "M", "incorrectReasoning": "M står för rostfritt stål." },
              { "text": "K", "incorrectReasoning": "K står för gjutjärn." },
              { "text": "P", "incorrectReasoning": null },
              { "text": "N", "incorrectReasoning": "N står för aluminium." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "P",
          "longReasoning": "Inom ISO-systemet för indelning av material i huvudgrupper betecknas stål med bokstaven P."
      },
      {
          "question": "Vilken bokstav används för att beteckna rostfritt stål i ISO-systemet?",
          "answers": [
            { "text": "P", "incorrectReasoning": "P står för olegerat stål och stål." },
            { "text": "K", "incorrectReasoning": "K står för gjutjärn." },
            { "text": "M", "incorrectReasoning": null },
            { "text": "S", "incorrectReasoning": "S står för varmhållfasta superlegeringar." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "M",
          "longReasoning": "Inom ISO-systemet för indelning av material i huvudgrupper betecknas rostfritt stål med bokstaven M."
      },
        {
          "question": "Vilken bokstav används för att beteckna gjutjärn i ISO-systemet?",
          "answers": [
            { "text": "P", "incorrectReasoning": "P står för olegerat stål och stål." },
            { "text": "N", "incorrectReasoning": "N står för aluminium." },
            { "text": "H", "incorrectReasoning": "H står för härdat stål" },
            { "text": "K", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "K",
          "longReasoning": "Inom ISO-systemet för indelning av material i huvudgrupper betecknas gjutjärn med bokstaven K."
        },
      {
          "question": "Vilken bokstav används för att beteckna aluminium i ISO-systemet?",
          "answers": [
              { "text": "N", "incorrectReasoning": null },
              { "text": "S", "incorrectReasoning": "S står för varmhållfasta superlegeringar." },
              { "text": "H", "incorrectReasoning": "H står för härdat stål." },
              { "text": "M", "incorrectReasoning": "M står för rostfritt stål." }
          ],
          "correctAnswer": 0,
          "shortReasoning": "N",
          "longReasoning": "Inom ISO-systemet för indelning av material i huvudgrupper betecknas aluminium med bokstaven N."
      },
      {
          "question": "Vilken bokstav används för att beteckna varmhållfasta superlegeringar i ISO-systemet?",
          "answers": [
            { "text": "S", "incorrectReasoning": null },
            { "text": "H", "incorrectReasoning": "H står för härdade material." },
            { "text": "M", "incorrectReasoning": "M står för rostfritt stål." },
            { "text": "K", "incorrectReasoning": "K står för gjutjärn." }
          ],
          "correctAnswer": 0,
          "shortReasoning": "S",
          "longReasoning": "Inom ISO-systemet för indelning av material i huvudgrupper betecknas varmhållfasta superlegeringar med bokstaven S."
        },
          {
          "question": "Vilken bokstav används för att beteckna härdade material i ISO-systemet?",
          "answers": [
              { "text": "P", "incorrectReasoning": "P står för stål." },
              { "text": "K", "incorrectReasoning": "K står för gjutjärn." },
              { "text": "S", "incorrectReasoning": "S står för varmhållfasta superlegeringar." },
              { "text": "H", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "H",
          "longReasoning": "Inom ISO-systemet för indelning av material i huvudgrupper betecknas härdade material (ofta stål) med bokstaven H."
      },
      {
      "question": "Vad är den engelska förkortningen för 'Material Class'?",
      "answers":[
          {"text": "MC", "incorrectReasoning": null},
          {"text": "MA", "incorrectReasoning":"MC är korrekt"},
          {"text": "CL", "incorrectReasoning": "MC är korrekt."},
          {"text": "MT", "incorrectReasoning": "MC är korrekt."}
      ],
      "correctAnswer": 0,
      "shortReasoning": "MC",
      "longReasoning": "Den engelska förkortningen för 'Material Class', alltså materialklass, är MC. Dessa koder används för att strukturera information om material i skärande bearbetning."
      },
   {
      "question": "Vad beskriver de två första delarna av en fullständig MC-kod (förutom huvudgruppen)?",
      "answers":[
      {"text": "Materialundergruppen och tillverkningsprocessen.", "incorrectReasoning": null},
      {"text":"Tillverkningsprocessen och hårdheten.", "incorrectReasoning": "Den *sista* delen beskriver behandlingen, inte hårdheten direkt."},
      {"text": "Materialundergruppen och hårdheten.", "incorrectReasoning":"Den *sista* delen beskriver behandlingen, inte hårdheten direkt."},
      {"text":"Hårdheten och den kemiska sammansättningen.", "incorrectReasoning": "MC-koden fokuserar på materialgrupp och bearbetningsegenskaper."}
      ],
      "correctAnswer": 0,
      "shortReasoning": "Materialundergrupp och tillverkningsprocess.",
      "longReasoning": "En fullständig MC-kod (Material Class) ger detaljerad information om materialet. Efter bokstaven som anger huvudgruppen (P, M, K, N, S, H), anger de följande delarna i koden: materialundergruppen (mer specifik typ inom huvudgruppen), tillverkningsprocessen (smitt, valsat, etc.), och den slutliga behandlingen (t.ex. anlöpt, härdat)."
      },
     {
      "question": "Vad är den huvudsakliga komponenten i obelagd hårdmetall?",
      "answers": [
        { "text": "Titan (Ti).", "incorrectReasoning": "Titan kan finnas i hårdmetall, men volframkarbid är vanligast." },
        { "text": "Kobolt (Co).", "incorrectReasoning": "Kobolt är bindemedlet, inte huvudkomponenten." },
        { "text": "Volframkarbid (WC).", "incorrectReasoning": null },
        { "text": "Aluminiumoxid (Al2O3).", "incorrectReasoning": "Detta är vanligt i keramiska skär." }
      ],
      "correctAnswer": 2,
      "shortReasoning": "Volframkarbid (WC).",
      "longReasoning": "Obelagd hårdmetall består huvudsakligen av *volframkarbid (WC)*, som är ett mycket hårt och slitstarkt material. Volframkarbidkornen binds samman av ett bindemedel, oftast kobolt."
     },
    {
        "question":"Vilka två metoder används för att applicera beläggningar på hårdmetallskär?",
        "answers":[
          {"text": "PVD och CVD.", "incorrectReasoning":null},
          {"text": "Slipning och polering.", "incorrectReasoning":"Detta är ytbehandlingsmetoder, inte beläggningsmetoder."},
          {"text":"Lödning och svetsning", "incorrectReasoning": "Detta är sammanfogningsmetoder, inte beläggningsmetoder."},
          {"text": "Målning och lackering.", "incorrectReasoning":"Detta är ytbehandlingsmetoder, inte beläggning för skärverktyg."}
          ],
          "correctAnswer": 0,
          "shortReasoning": "PVD och CVD.",
          "longReasoning": "De två huvudmetoderna för att applicera beläggningar på hårdmetallskär är PVD (Physical Vapor Deposition) och CVD (Chemical Vapor Deposition). Dessa metoder skiljer sig åt i hur beläggningsmaterialet deponeras på skärytan."
    },
  {
       "question":"Vad är 'Cermet' för typ av skärverktygsmaterial?",
        "answers":[
          {"text": "En typ av snabbstål.", "incorrectReasoning": "Cermet är inte snabbstål."},
          {"text":"En kombination av keramik och metall.", "incorrectReasoning": null},
          {"text": "En ren keramik.", "incorrectReasoning":"Cermet är en *kombination* av keramik och metall."},
          {"text": "En typ av plast.", "incorrectReasoning":"Cermet är ett hårt, slitstarkt material, inte en plast."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Keramik + metall.",
        "longReasoning": "Cermet är en typ av skärverktygsmaterial som är en *kombination* av *keramik* och *metall*. Ordet 'cermet' är en sammansättning av dessa två ord. Cermets kombinerar hårdheten och slitstyrkan hos keramik med segheten hos metall (ofta kobolt)."
  
  },
   {
        "question":"Vilket material är *inte* en vanlig huvudkomponent i oxidkeramer?",
          "answers":[
              {"text": "Aluminiumoxid (Al2O3).", "incorrectReasoning": "Detta är den *vanligaste* komponenten."},
              {"text": "Kiselnitrid (Si3N4).", "incorrectReasoning": "Detta är en komponent i *nitrid*-keramer, inte oxidkeramer."},
              {"text": "Volframkarbid (WC).", "incorrectReasoning": null},
              {"text": "Zirkoniumdioxid (ZrO2).", "incorrectReasoning": "Detta nämns inte alls i detta material, aluminiumoxid är korrekt."}
            ],
          "correctAnswer": 2,
          "shortReasoning": "Volframkarbid är inte i oxidkeramer.",
          "longReasoning": "Oxidkeramer är skärverktygsmaterial som främst består av aluminiumoxid (Al2O3). Kiselnitrid (Si3N4) är en *annan* typ av keramik (en nitridkeramik). Volframkarbid (WC) är en hårdmetall, *inte* en keramik."
    },
    {
      "question": "Vilken typ av skärverktygsmaterial består av hårda partiklar bundna av kobolt?",
      "answers": [
        { "text": "Snabbstål.", "incorrectReasoning": "Snabbstål är en legering, inte en komposit med bindemedel." },
        { "text": "Hårdmetall.", "incorrectReasoning": null },
        { "text": "Keramik.", "incorrectReasoning": "Keramer har normalt inga metalliska bindemedel." },
        { "text": "Cermet.", "incorrectReasoning": "Cermet kan ha kobolt som bindemedel, men basen är titanföreningar, inte volframkarbid." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Hårdmetall.",
      "longReasoning": "Hårdmetall är ett kompositmaterial som består av hårda partiklar (oftast volframkarbid, WC) som är sammanbundna av ett metalliskt bindemedel, vanligen kobolt (Co). Denna kombination ger hög hårdhet och slitstyrka."
    },
    {
      "question": "Vilket av följande är *inte* en vanlig beståndsdel i hårdmetall?",
      "answers":[
      {"text":"Volframkarbid (WC).", "incorrectReasoning": "Detta är den vanligaste komponenten."},
      {"text":"Kobolt (Co).", "incorrectReasoning": "Detta är ett vanligt bindemedel."},
      {"text":"Titan (Ti).", "incorrectReasoning": "Titankarbid (TiC) är vanligt."},
      {"text": "Aluminiumoxid (Al2O3).", "incorrectReasoning": null}
      ],
      "correctAnswer": 3,
      "shortReasoning": "Aluminiumoxid är inte en vanlig hårdmetallkomponent.",
      "longReasoning": "Hårdmetall består vanligen av volframkarbid (WC), titankarbid (TiC), tantalkarbid (TaC) och niobkarbid (NbC) som hårda partiklar, och kobolt (Co) som bindemedel. Aluminiumoxid (Al2O3) är en *keramik*, inte en typisk beståndsdel i hårdmetall."
    },
  {
        "question": "Vad är den huvudsakliga skillnaden mellan PVD- och CVD-beläggningar på skärverktyg?",
          "answers": [
            { "text": "PVD ger tjockare beläggningar.", "incorrectReasoning": "CVD ger tjockare beläggningar." },
            { "text": "CVD-processen sker vid lägre temperatur.", "incorrectReasoning": "PVD sker vid lägre temperatur." },
            { "text": "PVD ger tunnare beläggningar och vassare eggar.", "incorrectReasoning": null },
            { "text": "CVD kan användas på lödda spetsar.", "incorrectReasoning": "PVD är lämpligare för lödda spetsar." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "PVD: tunnare, vassare. CVD: tjockare.",
          "longReasoning": "PVD (Physical Vapor Deposition) och CVD (Chemical Vapor Deposition) är två olika beläggningstekniker. PVD-processen sker vid lägre temperaturer (ca 500°C) och ger tunnare beläggningar (2-6 µm) med möjlighet till vassare eggar. CVD-processen sker vid högre temperaturer (800-1000°C) och ger tjockare, jämnare beläggningar (4-20 µm) med bättre slitstyrka."
  },
   {
      "question": "Vilken typ av skärverktygsmaterial är känt för sin höga kemiska stabilitet och används ofta vid finbearbetning med krav på snäva toleranser?",
       "answers": [
        {"text":"Snabbstål (HSS).", "incorrectReasoning": "Snabbstål är inte känt för kemisk stabilitet vid höga temperaturer."},
        {"text":"Obelagd hårdmetall.", "incorrectReasoning":"Obelagd hårdmetall är inte lika kemiskt stabilt som cermet."},
        {"text": "Cermet.", "incorrectReasoning": null},
        {"text": "Keramik.", "incorrectReasoning":"Vissa keramiker har god kemisk stabilitet, men cermet nämns specifikt i detta sammanhang."}
       ],
       "correctAnswer": 2,
       "shortReasoning": "Cermet.",
       "longReasoning": "Cermet är ett skärverktygsmaterial som kombinerar keramiska och metalliska egenskaper. De är kända för sin höga kemiska stabilitet, hårdhet och slitstyrka, och används ofta vid finbearbetning där det krävs snäva toleranser och bra ytjämnhet."
    },
   {
        "question":"Vad är *inte* en typ av keramiska skärverktyg?",
         "answers": [
          {"text": "Oxidkeramer (CA).", "incorrectReasoning": "Detta är en typ av keramik."},
          {"text": "Nitridkeramer (CN).", "incorrectReasoning": "Detta är en typ av keramik."},
          {"text": "Belagda keramer (CC).", "incorrectReasoning":"Detta är en typ av keramik"},
          {"text": "Volframkarbid (WC)", "incorrectReasoning": null}
         ],
         "correctAnswer": 3,
         "shortReasoning": "Volframkarbid är en hårdmetall, inte en keramik.",
         "longReasoning":"Oxidkeramer (CA, oftast baserade på aluminiumoxid), nitridkeramer (CN, ofta baserade på kiselnitrid) och belagda keramer (CC) är alla typer av *keramiska* skärverktygsmaterial. Volframkarbid (WC) är den vanligaste komponenten i *hårdmetall*, inte keramik."
      },
  {
         "question": "Vilket skärverktygsmaterial beskrivs som 'superhårt' och lämpligt för bearbetning av *härdade* material?",
          "answers": [
              { "text": "Snabbstål (HSS).", "incorrectReasoning": "Snabbstål är inte lämpligt för bearbetning av härdade material." },
              { "text": "Hårdmetall.", "incorrectReasoning": "Vissa hårdmetallsgrader kan användas, men CBN är bättre lämpat." },
              { "text": "Keramik.", "incorrectReasoning": "Vissa keramiker kan användas, men CBN är bättre lämpat." },
              { "text": "Kubisk bornitrid (CBN).", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "Kubisk bornitrid (CBN).",
          "longReasoning": "Kubisk bornitrid (CBN) är ett *superhårt* material (näst efter diamant) som är speciellt lämpligt för bearbetning av *härdade* material, som härdat stål och hårda gjutjärn. CBN har hög varmhårdhet och slitstyrka."
      },
      {
      "question": "Vilket skärverktygsmaterial är *bäst* lämpat för bearbetning av aluminium med hög avverkningshastighet?",
       "answers": [
        {"text": "Hårdmetall.", "incorrectReasoning": "Hårdmetall kan användas, men det finns bättre alternativ."},
        {"text":"Keramik.", "incorrectReasoning": "Keramik är inte optimalt för aluminium."},
        {"text":"Polykristallin diamant (PCD).", "incorrectReasoning": null},
        {"text": "Snabbstål.", "incorrectReasoning": "Snabbstål är inte lämpligt för höga avverkningshastigheter i aluminium."}
       ],
       "correctAnswer": 2,
       "shortReasoning": "Polykristallin diamant (PCD).",
       "longReasoning": "Polykristallin diamant (PCD) är det bästa valet för bearbetning av aluminium och andra icke-järnmetaller vid *höga* avverkningshastigheter. PCD har extremt hög slitstyrka och låg friktion, vilket ger lång livslängd och bra ytfinhet. Dock är PCD *inte* lämpligt för bearbetning av järnhaltiga material, eftersom det reagerar kemiskt med järn vid höga temperaturer."
      },
    {
          "question": "Vilken av följande förslitningstyper uppstår på skärets *spånyta*?",
          "answers": [
            { "text": "Fasförslitning.", "incorrectReasoning": "Fasförslitning sker på *flankytan*." },
            { "text": "Gropförslitning.", "incorrectReasoning": null },
            { "text": "Kamsprickor.", "incorrectReasoning": "Kamsprickor uppstår vinkelrätt mot eggen." },
            { "text": "Plastisk deformation.", "incorrectReasoning": "Plastisk deformation påverkar hela eggen, inte bara spånytan." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Gropförslitning.",
          "longReasoning": "Gropförslitning är en typ av förslitning som uppstår på skärverktygets *spånyta*, alltså den yta där spånan från bearbetningen glider mot skäret. Det bildas en urgröpning (grop) på spånytan."
    },
    {
      "question": "Vilket av följande är *inte* en parameter som ingår i en fullständig MC-kod för ett material?",
      "answers":[
      {"text": "Huvudmaterialgrupp (t.ex. P, M, K).", "incorrectReasoning": "Detta är den första delen av koden."},
      {"text": "Materialundergrupp.", "incorrectReasoning": "Detta specificerar materialet ytterligare."},
      {"text": "Tillverkningsprocess.", "incorrectReasoning": "Detta anger hur materialet har framställts (smitt, valsat, etc.)."},
      {"text": "Skärverktygets tillverkare.", "incorrectReasoning": null}
      ],
      "correctAnswer": 3,
      "shortReasoning": "MC-koden beskriver *materialet*, inte verktyget.",
      "longReasoning": "En fullständig MC-kod (Material Class) för ett material i arbetsstycket innehåller information om: huvudmaterialgruppen (P, M, K, N, S eller H), materialundergruppen (mer specifik typ inom huvudgruppen), tillverkningsprocessen (smitt, valsat, gjutet, etc.) och materialets slutliga behandling (t.ex. härdat, anlöpt).  MC-koden innehåller *inte* information om *skärverktyget* eller dess tillverkare."
    },
    {
       "question":"Vilken kombination av bokstäver används för att beteckna en 'belagd hårdmetall'?",
       "answers":[
       {"text": "HW", "incorrectReasoning": "Detta betyder 'obelagd hårdmetall'."},
       {"text": "HC", "incorrectReasoning":null},
       {"text": "HT", "incorrectReasoning":"Detta betyder 'cermet'."},
       {"text": "DP", "incorrectReasoning": "Detta betyder 'diamant'."}
       ],
       "correctAnswer": 1,
       "shortReasoning": "HC.",
       "longReasoning": "HC används för att beteckna 'belagd hårdmetall'. HW betyder 'obelagd hårdmetall'. HT betyder 'cermet', och DP 'diamant'."
    },
    {
      "question":"Ungefär vid vilken temperatur sker CVD-beläggning?",
        "answers":[
        {"text": "Rumstemperatur.", "incorrectReasoning": "CVD kräver höga temperaturer."},
        {"text":"500°C.", "incorrectReasoning": "Detta är typiskt för PVD, inte CVD."},
        {"text":"800-1000°C.", "incorrectReasoning": null},
        {"text":"1500°C.", "incorrectReasoning": "Detta är för högt för CVD."}
        ],
       "correctAnswer": 2,
       "shortReasoning": "800-1000°C.",
       "longReasoning": "CVD (Chemical Vapor Deposition) är en beläggningsprocess som sker vid höga temperaturer, typiskt mellan 800 och 1000 grader Celsius. Vid dessa temperaturer reagerar gaser och bildar ett fast skikt på skärverktygets yta."
    },
     {
        "question":"Vilket av följande är ett exempel på en *kemisk* förslitningsmekanism på ett skärverktyg?",
        "answers":[
          {"text": "Flagning.", "incorrectReasoning": "Flagning är mekanisk."},
          {"text":"Vidhäftning/Löseggsbildning.", "incorrectReasoning": "Detta är en kombination av mekanisk och kemisk förslitning."},
          {"text":"Gropförslitning/Diffusion.", "incorrectReasoning": null},
          {"text": "Brott.", "incorrectReasoning":"Brott är mekaniskt."}
         ],
         "correctAnswer": 2,
         "shortReasoning": "Gropförslitning (diffusion).",
         "longReasoning": "Gropförslitning är en typ av förslitning som till stor del beror på *kemiska* reaktioner (diffusion) mellan skärmaterialet och arbetsmaterialet vid höga temperaturer. Atomer från skärmaterialet diffunderar in i spånan, vilket försvagar skäreggen och skapar en urgröpning (grop) på spånytan. Även vidhäftning är delvis en kemisk process."
    },
  {
      "question":"Vilken av följande förslitningstyper är INTE i första hand orsakad av mekaniska faktorer?",
      "answers":[
          {"text": "Fasförslitning.", "incorrectReasoning":"Fasförslitning orsakas av nötning och är mekanisk."},
          {"text":"Plastisk deformation.", "incorrectReasoning": null},
          {"text":"Flagning", "incorrectReasoning":"Flagning orsakas av att material vidhäftar och slits loss."},
          {"text": "Brott", "incorrectReasoning":"Brott orsakas av för hög mekanisk last."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Plastisk deformation.",
      "longReasoning": "Plastisk deformation uppstår när skäreggen deformeras permanent på grund av för HÖG TEMPERATUR, snarare än endast de mekaniska krafterna i sig."
  }
  ]
  }, {
    name: "Produktionsteknik",
    source: "./pdf/Produktionteknik, Produktionsprocessen - Faktabok (sökbar) - komprimerad.pdf",
    questions: [
      {
          "question": "Vad beskrivs traditionellt som 'länken mellan konstruktion och produktion'?",
          "answers": [
              { "text": "Kvalitetskontroll.", "incorrectReasoning": "Kvalitetskontroll är en *del* av processen, men inte hela länken." },
              { "text": "Produktionsteknik.", "incorrectReasoning": null },
              { "text": "Marknadsföring.", "incorrectReasoning": "Marknadsföring är relaterat, men inte den direkta länken." },
              { "text": "Inköp.", "incorrectReasoning": "Inköp är en stödjande funktion, inte länken." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Produktionsteknik.",
          "longReasoning": "Produktionsteknik beskrivs traditionellt som länken mellan konstruktion och produktion. Det handlar om att ta fram tillverkningsunderlag (beredning) utifrån ritningar och specifikationer, och att optimera tillverkningsprocessen."
      },
      {
          "question": "Vilka är de *två* huvudsakliga aktiviteterna som innefattas i begreppet 'produktionsteknik' enligt boken?",
          "answers": [
            { "text": "Produktutveckling och marknadsföring.", "incorrectReasoning": "Marknadsföring ingår inte i produktionsteknik." },
            { "text": "Inköp och försäljning.", "incorrectReasoning": "Detta är kommersiella aktiviteter, inte produktionstekniska." },
            { "text": "Produktionsberedning och förbättring av tillverkningsprocessen.", "incorrectReasoning": null },
            { "text": "Design och kvalitetskontroll.", "incorrectReasoning": "Design är en del av produktframtagning, men kvalitetskontroll är bara en *del* av produktionsprocessen." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "Beredning och processförbättring.",
          "longReasoning": "Produktionsteknik omfattar, enligt boken, två huvudsakliga aktiviteter: *Produktionsberedning* (att förbereda för tillverkning, både av nya produkter och vid införande av ny utrustning) och *kontinuerlig förbättring* av tillverkningsprocessen (rationalisering och kvalitetsarbete)."
        },
      {
          "question": "Vad är det övergripande målet med produktionsteknik, enligt definitionen i boken?",
          "answers": [
              { "text": "Att tillverka så många produkter som möjligt.", "incorrectReasoning": "Kvantitet är inte det enda målet." },
              { "text": "Att använda så lite material som möjligt.", "incorrectReasoning": "Materialbesparing är viktigt, men inte det enda målet." },
              { "text": "Att möjliggöra kostnadseffektiv tillverkning med hög kvalitet och korta ledtider.", "incorrectReasoning": null },
              { "text": "Att helt automatisera tillverkningen.", "incorrectReasoning": "Automation kan vara ett *medel*, men inte det övergripande *målet*." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "Kostnadseffektivitet, hög kvalitet, korta ledtider.",
          "longReasoning": "Produktionsteknik definieras i boken som 'att ta fram lösningar och metoder som möjliggör kostnadseffektiv tillverkning med hög kvalitet och korta ledtider'. Det handlar alltså om en kombination av effektivitet, kvalitet och snabbhet."
      },
      {
          "question": "Vad kallades Frederick Winslow Taylors principer för rationell arbetsledning?",
          "answers": [
              { "text": "Fordism.", "incorrectReasoning": "Fordism bygger på Taylors principer, men är inte samma sak." },
              { "text": "Taylorism.", "incorrectReasoning": null },
              { "text": "Lean Production.", "incorrectReasoning": "Lean Production är en senare utveckling." },
              { "text": "Scientific Management.", "incorrectReasoning": "Detta var den engelska termen, Taylorismen är den vedertagna i detta sammanhang." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Taylorism.",
          "longReasoning": "Frederick Winslow Taylors principer för rationell arbetsledning, som betonade arbetsdelning, specialisering, tidsstudier och standardisering, kom att kallas 'Taylorism'."
      },
      {
        "question": "Vad innebar 'specialisering' enligt Taylors principer?",
          "answers": [
            { "text": "Att varje arbetare utförde alla moment i tillverkningen.", "incorrectReasoning": "Detta är motsatsen till specialisering." },
            { "text": "Att varje arbetare utförde ett begränsat antal moment, eller till och med ett enda moment, i tillverkningsprocessen.", "incorrectReasoning": null },
            { "text": "Att arbetarna roterade mellan olika arbetsuppgifter.", "incorrectReasoning": "Rotation kan förekomma, men specialisering handlar om att fokusera på ett begränsat område." },
            { "text": "Att arbetarna själva fick bestämma hur arbetet skulle utföras.", "incorrectReasoning": "Taylorismen betonade *styrning* och standardisering, inte arbetarnas självbestämmande." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Specialisering = arbetsdelning, fokus på få moment.",
          "longReasoning": "Specialisering, enligt Taylors principer, innebar en långtgående arbetsdelning där varje arbetare utförde ett *begränsat* antal moment, eller till och med ett *enda* moment, i tillverkningsprocessen. Detta ansågs öka effektiviteten genom att arbetarna blev skickligare på just sina specifika uppgifter."
      },
     {
      "question": "Vad var MTM, som utvecklades under och efter andra världskriget?",
      "answers":[
          {"text": "En metod för att mäta materialåtgång.", "incorrectReasoning": "MTM handlar om tidsåtgång och metodstudier."},
          {"text": "Ett system för att bestämma tidsåtgången för arbetsmoment genom att dela upp dem i grundrörelser.", "incorrectReasoning": null},
          {"text": "En metod för att mäta produkters kvalitet.", "incorrectReasoning": "MTM handlar inte direkt om kvalitetsmätning."},
          {"text":"En metod för att planera produktionsflöden.", "incorrectReasoning": "MTM kan användas som *underlag* för planering, men är inte en planeringsmetod i sig."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "MTM = Metod-Tid-Mätning, för tidsstudier.",
      "longReasoning": "MTM (Metod-Tid-Mätning) är ett elementartidssystem, vilket innebär att det är en metod för att bestämma tidsåtgången för olika arbetsmoment genom att dela upp dem i mycket små, väldefinierade grundrörelser (t.ex. 'sträcka', 'gripa', 'flytta') och tilldela varje grundrörelse en standardtid."
     },
      {
          "question": "Vad innebar det att 'balansera' arbetet vid löpande band?",
          "answers": [
            { "text": "Att alla arbetare hade exakt samma lön.", "incorrectReasoning": "Balansering handlar om arbetsinnehåll, inte lön." },
            { "text": "Att fördela arbetsuppgifterna så att varje station längs bandet tog ungefär lika lång tid.", "incorrectReasoning": null },
            { "text": "Att se till att bandet rörde sig med konstant hastighet.", "incorrectReasoning": "Konstant hastighet är viktigt, men balansering handlar om arbetsfördelningen." },
            { "text": "Att alla arbetare hade samma fysiska styrka.", "incorrectReasoning": "Balansering handlar om tidsåtgång, inte fysisk styrka." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Balansering = lika lång tid vid varje station.",
          "longReasoning": "Att 'balansera' arbetet vid ett löpande band (eller en monteringslina) innebär att man fördelar arbetsuppgifterna på de olika stationerna längs bandet så att varje station tar ungefär *lika lång tid* att utföra. Detta för att undvika flaskhalsar och maximera genomströmningen."
      },
    {
     "question": "Vilket av följande var *inte* en konsekvens/kritik av det löpande bandet och den långt drivna specialiseringen?",
      "answers": [
        {"text":"Monotona och oergonomiska arbetsuppgifter.", "incorrectReasoning": "Detta var en vanlig kritik."},
        {"text": "Hög personalomsättning och sjukfrånvaro.", "incorrectReasoning": "Detta var vanliga problem." },
        {"text": "Arbetarna fick stor frihet att utforma sitt eget arbete.", "incorrectReasoning":null},
        {"text":"Systemet var sårbart för störningar.", "incorrectReasoning": "Detta var en nackdel med det löpande bandet."}
      ],
      "correctAnswer": 2,
      "shortReasoning": "Löpande band gav *inte* stor frihet.",
      "longReasoning": "Det löpande bandet och den långt drivna specialiseringen kritiserades för att skapa monotona, oergonomiska och utarmande arbetsuppgifter, vilket ledde till hög personalomsättning, sjukfrånvaro och bristande motivation. Arbetarna hade *liten* frihet att påverka sitt eget arbete."
    },
       {
          "question": "Vad kännetecknar en 'flödesgrupp' i produktionen?",
          "answers": [
            { "text": "Att alla maskiner av samma typ är grupperade tillsammans.", "incorrectReasoning": "Detta är en *funktionell* verkstad, inte en flödesgrupp." },
            { "text": "Att en grupp maskiner och medarbetare tillsammans tillverkar en produkt eller produktfamilj.", "incorrectReasoning": null },
            { "text": "Att produkterna rör sig längs ett löpande band.", "incorrectReasoning": "Flödesgrupper kan ha ett flöde, men inte nödvändigtvis ett löpande band." },
            { "text": "Att alla arbetare utför samma moment.", "incorrectReasoning": "Flödesgrupper innebär ofta *bredare* arbetsuppgifter." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Flödesgrupp = maskiner och personal för en produkt/familj.",
          "longReasoning": "En flödesgrupp är en produktionsenhet där en grupp maskiner och medarbetare är organiserade för att tillsammans tillverka en *hel produkt* eller en *familj av liknande produkter*. Detta skiljer sig från en funktionell verkstad, där maskiner av samma typ är grupperade tillsammans."
      },
   {
          "question": "Vad är en 'transferlina'?",
          "answers": [
              { "text": "En flexibel produktionslina som lätt kan ställas om.", "incorrectReasoning": "Transferlinor är *stela*, inte flexibla." },
              { "text": "En produktionslina med manuell montering.", "incorrectReasoning": "Transferlinor är oftast mekaniserade." },
              { "text": "En produktionslina med en fast transportanordning och bearbetningsstationer i sekvens.", "incorrectReasoning": null },
              { "text": "En grupp av fristående maskiner.", "incorrectReasoning": "Transferlinor är *integrerade* system." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "Transferlina = fast, sekventiell produktionslina.",
          "longReasoning": "En transferlina är en typ av produktionslina som kännetecknas av en *fast* (oftast mekaniserad) transportanordning som flyttar produkterna (eller fixturer med produkter) mellan ett antal *fasta* bearbetningsstationer i en *bestämd sekvens*. Transferlinor är effektiva för massproduktion, men inflexibla och svåra att ställa om."
      },
   {
      "question": "Vad kännetecknar en 'omställbar lina' jämfört med en traditionell transferlina?",
      "answers": [
        { "text": "Den är långsammare.", "incorrectReasoning": "Omställbara linor kan vara snabba, men är framförallt mer flexibla." },
        { "text": "Den är mindre flexibel.", "incorrectReasoning": "Omställbara linor är *mer* flexibla." },
        { "text": "Den kan hantera flera produktvarianter.", "incorrectReasoning": null },
        { "text": "Den kräver mer manuellt arbete.", "incorrectReasoning": "Omställbara linor är ofta automatiserade." }
      ],
      "correctAnswer": 2,
      "shortReasoning": "Omställbar lina = flexibel, kan hantera varianter.",
      "longReasoning": "En omställbar lina, till skillnad från en traditionell (stel) transferlina, är utformad för att kunna hantera *flera olika produktvarianter*. Detta kan innebära att maskinerna är CNC-styrda, att fixturer och verktyg kan bytas snabbt och automatiskt, och att linan kan programmeras om för olika produktionssekvenser."
  },
     {
      "question":"Vad kännetecknar en *funktionell* verkstad?",
       "answers":[
         {"text": "Att produkterna rör sig i ett bestämt flöde genom verkstaden.", "incorrectReasoning": "Detta beskriver en flödesorienterad verkstad."},
         {"text": "Att maskiner av samma typ är grupperade tillsammans.", "incorrectReasoning": null},
         {"text": "Att varje arbetsgrupp tillverkar en komplett produkt.", "incorrectReasoning": "Detta beskriver en flödesgrupp eller produktverkstad."},
         {"text": "Att verkstaden är specialiserad på en enda produkttyp.", "incorrectReasoning": "Funktionell verkstad kan hantera många olika produkter."}
       ],
       "correctAnswer": 1,
       "shortReasoning": "Funktionell verkstad = maskiner grupperade efter typ.",
       "longReasoning": "I en funktionell verkstad är maskiner och utrustning grupperade efter *funktion* eller *typ*, t.ex. svarvar för sig, fräsmaskiner för sig, borrmaskiner för sig. Produkterna rör sig mellan de olika avdelningarna beroende på vilka operationer som behövs, vilket kan leda till ett komplext och ibland ineffektivt materialflöde."
     },
    {
       "question": "Vad är en nackdel med funktionella verkstäder?",
        "answers": [
         {"text": "De är för enkla att planera.", "incorrectReasoning": "Funktionella verkstäder kan vara *svåra* att planera."},
         {"text":"De ger för korta ledtider.", "incorrectReasoning": "Funktionella verkstäder har ofta *långa* ledtider."},
         {"text": "De kan leda till långa ledtider, stora mellanlager och komplicerad planering.", "incorrectReasoning":null},
         {"text": "De är för specialiserade på en enda produkttyp.", "incorrectReasoning": "Funktionella verkstäder är ofta flexibla, men ineffektiva."}
        ],
        "correctAnswer": 2,
        "shortReasoning": "Långa ledtider, stora lager, svårplanerade.",
        "longReasoning": "Funktionella verkstäder kan vara flexibla och hantera många olika produkter, men de har ofta nackdelar som långa och osäkra ledtider (genomloppstider), stora mellanlager (material i arbete), komplicerad planering och styrning, och svårigheter att överblicka hela produktionsflödet."
    },
    {
      "question":"Vad är 'Lean Production'?",
      "answers":[
        {"text": "En metod for att banta personalstyrkan.", "incorrectReasoning": "Lean handlar om att eliminera slöseri, inte nödvändigtvis personal."},
        {"text":"Ett produktionssystem som fokuserar på att eliminera slöseri och skapa värde för kunden.", "incorrectReasoning": null},
        {"text": "En typ av maskin.", "incorrectReasoning":"Lean är ett *sätt att tänka* och organisera produktionen."},
        {"text":"En metod for att enbart tillverka billiga produkter.", "incorrectReasoning": "Lean handlar om värde, inte bara pris."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Lean = eliminera slöseri, skapa värde.",
        "longReasoning": "Lean Production (även kallat Toyotas Produktionssystem) är en filosofi och en uppsättning principer för att organisera och styra produktionen. Det centrala är att *eliminera alla former av slöseri* (aktiviteter som inte tillför värde för kunden) och att skapa ett *effektivt flöde* av material och information genom hela produktionsprocessen."
      },
    {
    "question":"Vad betyder 'värdeskapande operativ tid'?",
    "answers":[
      {"text":"Den tid då maskinen är igång.", "incorrectReasoning":"Maskinen kan vara igång utan att skapa värde (t.ex. vid omställningar)."},
      {"text": "Den tid då produkten faktiskt bearbetas och förädlas.", "incorrectReasoning": null},
      {"text": "Den tid då personalen är på jobbet.", "incorrectReasoning":"Personalen kan vara på jobbet utan att maskinen producerar."},
      {"text":"Den tid då företaget tjänar pengar.", "incorrectReasoning": "Detta är ett resultat, inte en definition av tiden."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Tid då produkten bearbetas.",
      "longReasoning": "Värdeskapande operativ tid är den tid då en produkt *faktiskt bearbetas och förädlas* i en maskin eller process. Det är den tid då värde *tillförs* produkten. I OEE-modellen är det den tid som återstår efter att man dragit bort alla förluster (planerade stopp, omställningstider, taktförluster, kvalitetsförluster)."
    },
      {
      "question": "Vad är OEE (Overall Equipment Effectiveness)?",
         "answers": [
           {"text": "Ett mått på hur bra en maskin fungerar.", "incorrectReasoning":"OEE är ett mått på *utrustningens effektivitet*, vilket är bredare."},
           {"text":"Ett mått på utrustningens totala effektivitet, som tar hänsyn till tillgänglighet, prestanda och kvalitet.", "incorrectReasoning": null},
           {"text": "Ett mått på operatörens skicklighet.", "incorrectReasoning": "OEE mäter utrustningens effektivitet, inte operatörens."},
           {"text": "Ett mått på företagets lönsamhet.", "incorrectReasoning": "Lönsamhet är ett bredare begrepp."}
         ],
         "correctAnswer": 1,
         "shortReasoning": "OEE = total utrustningseffektivitet.",
         "longReasoning": "OEE (Overall Equipment Effectiveness) är ett nyckeltal som används för att mäta den *totala effektiviteten* hos en produktionsutrustning (maskin, lina, cell). OEE tar hänsyn till tre huvudfaktorer: *tillgänglighet* (hur mycket av den planerade tiden som utrustningen faktiskt är i drift), *prestanda* (hur snabbt utrustningen producerar jämfört med ideal hastighet) och *kvalitet* (hur stor andel av de producerade enheterna som är felfria)."
      },
    {
     "question": "Vilka tre faktorer ingår i beräkningen av OEE?",
      "answers":[
        {"text":"Pris, leveranstid och design.", "incorrectReasoning": "Detta är viktiga faktorer, men inte de som ingår i OEE-beräkningen."},
        {"text":"Tillgänglighet, prestanda och kvalitet.", "incorrectReasoning": null},
        {"text": "Hastighet, precision och noggrannhet.", "incorrectReasoning":"Detta är delar av prestanda och kvalitet, men inte de tre huvudfaktorerna."},
        {"text": "Materialåtgång, energiförbrukning och personalstyrka.", "incorrectReasoning": "Detta är resursförbrukning, inte OEE-faktorer."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Tillgänglighet, prestanda, kvalitet.",
      "longReasoning": "OEE (Overall Equipment Effectiveness) beräknas genom att multiplicera tre faktorer: *Tillgänglighet* (hur stor del av den planerade tiden som utrustningen faktiskt är i drift), *Prestanda* (hur snabbt utrustningen producerar i förhållande till sin ideala hastighet), och *Kvalitet* (hur stor andel av de producerade enheterna som är felfria)."
    },
    {
    "question": "Vad är ett realistiskt mål för OEE i världsklass, enligt texten?",
     "answers":[
      {"text": "50%", "incorrectReasoning": "Detta är för lågt."},
      {"text": "67%", "incorrectReasoning": "Detta är vad texten kallar 'Best of the Best' - alltså vad maskinen *redan visat sig klara*, inte målet"},
      {"text": "85%", "incorrectReasoning": null},
      {"text": "100%", "incorrectReasoning": "100% är 'OEE-visionen', inte det realistiska målet."}
     ],
     "correctAnswer": 2,
     "shortReasoning": "85% är ett bra mål.",
     "longReasoning": "Texten anger att ett OEE-värde på 85% (eller högre) ofta betraktas som ett realistiskt mål i världsklass, även om det finns företag som strävar efter ännu högre värden. 100% är den teoretiska maxgränsen, men är i praktiken mycket svår att uppnå under längre perioder."
    },
    {
     "question":"Vad menas med 'ställtider' i produktionen?",
      "answers":[
       {"text": "Den tid det tar att tillverka en produkt.", "incorrectReasoning": "Detta är cykeltiden eller genomloppstiden."},
       {"text": "Den tid det tar att ställa om en maskin från en produkt till en annan.", "incorrectReasoning": null},
       {"text": "Den tid det tar att reparera en maskin.", "incorrectReasoning": "Detta är reparationstid."},
       {"text": "Den tid det tar att leverera en produkt.", "incorrectReasoning": "Detta är leveranstiden."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Omställningstid mellan produkter.",
      "longReasoning": "Ställtider (eller omställningstider) är den tid det tar att ställa om en maskin eller produktionslina från att tillverka *en* typ av produkt till att tillverka en *annan* typ av produkt. Detta kan innefatta byte av verktyg, fixturer, program, inställningar, etc."
     },
    {
     "question": "Vad är SMED?",
      "answers": [
       {"text": "En typ av material.", "incorrectReasoning": "SMED är en metod, inte ett material."},
       {"text": "En metod för att minska ställtider.", "incorrectReasoning": null},
       {"text":"En typ av maskin.", "incorrectReasoning": "SMED är en metod, inte en maskin."},
       {"text": "En typ av kvalitetskontroll.", "incorrectReasoning":"SMED handlar om effektivitet, inte direkt kvalitetskontroll (även om det kan förbättra kvaliteten)." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "SMED = metod för att minska ställtider.",
      "longReasoning": "SMED (Single-Minute Exchange of Die) är en metod som utvecklades av Shigeo Shingo inom Toyota Production System. Syftet med SMED är att *drastiskt minska* omställningstiderna (ställtiderna) i produktionen, helst till under 10 minuter (single-digit minutes). Detta görs genom att systematiskt analysera omställningsprocessen och omvandla interna ställmoment (som kräver att maskinen står stilla) till externa ställmoment (som kan göras medan maskinen är igång)."
    },
  {
      "question": "Vad är det *första* steget i SMED-metoden?",
      "answers": [
        { "text": "Att mekanisera omställningen.", "incorrectReasoning": "Mekanisering är ett senare steg." },
        { "text": "Att eliminera justeringar.", "incorrectReasoning": "Detta är ett senare steg." },
        { "text": "Att separera inre och yttre ställtid.", "incorrectReasoning": null },
        { "text": "Att parallellisera operationer.", "incorrectReasoning": "Detta är ett senare steg." }
      ],
      "correctAnswer": 2,
      "shortReasoning": "Separera inre och yttre ställtid.",
      "longReasoning": "Det första steget i SMED-metoden är att *separera* de moment i omställningsprocessen som måste utföras när maskinen står *stilla* (*inre* ställtid) från de moment som kan utföras medan maskinen är *igång* (*yttre* ställtid). Detta är grunden för att sedan kunna omvandla inre ställtid till yttre ställtid."
    },
     {
    "question": "Vad är *inte* ett steg i den klassiska SMED-metodiken?",
     "answers":[
      {"text": "Separera inre och yttre ställtid.", "incorrectReasoning": "Detta är ett grundläggande steg."},
      {"text": "Gör om inre ställtid till yttre.", "incorrectReasoning": "Detta är ett centralt steg."},
      {"text": "Eliminera alla ställtider.", "incorrectReasoning": null},
      {"text": "Minimera inre och yttre ställtid.", "incorrectReasoning": "Detta är ett viktigt mål."}
     ],
     "correctAnswer": 2,
     "shortReasoning": "SMED syftar till att *minimera*, inte *eliminera*, ställtider.",
     "longReasoning": "SMED-metodiken handlar om att *reducera* ställtiderna, inte att *eliminera* dem helt. De centrala stegen är att: 1. Separera inre och yttre ställtid. 2. Omvandla så mycket som möjligt av den inre ställtiden till yttre ställtid. 3. Minimera både den inre och den yttre ställtiden genom att effektivisera och standardisera arbetsmomenten."
    },
   {
    "question": "Vad innebär 'parallellgruppering' av tillverkningen?",
      "answers": [
      {"text": "Att alla maskiner står på en lång rad.", "incorrectReasoning":"Detta är en linjeproduktion/transferlina, inte parallellgruppering."},
      {"text": "Att flera grupper arbetar oberoende av varandra med samma eller liknande uppgifter.", "incorrectReasoning": null},
      {"text":"Att alla arbetare utför samma moment.", "incorrectReasoning":"Detta är specialisering, inte parallellgruppering."},
      {"text": "Att alla produkter tillverkas i en enda stor maskin.", "incorrectReasoning": "Parallellgruppering innebär *flera* grupper."}
     ],
      "correctAnswer": 1,
      "shortReasoning": "Parallella, oberoende grupper.",
      "longReasoning": "Parallellgruppering (eller parallella flöden) innebär att man organiserar tillverkningen i *flera oberoende grupper* (celler, linor) som kan utföra samma eller liknande arbetsuppgifter *parallellt*. Detta ökar flexibiliteten, minskar sårbarheten för störningar och kan förbättra arbetsmiljön."
    },
     {
          "question": "Vad är en 'produktverkstad'?",
          "answers": [
            { "text": "En verkstad där man bara tillverkar en enda produkt.", "incorrectReasoning": "En produktverkstad kan tillverka en *familj* av produkter." },
            { "text": "En verkstad som har alla nödvändiga maskiner och resurser för att tillverka en produkt eller produktfamilj från råmaterial till färdig produkt.", "incorrectReasoning": null },
            { "text": "En verkstad där man bara utför prototyptillverkning.", "incorrectReasoning": "Produktverkstäder kan användas för serieproduktion." },
            { "text": "En verkstad där maskinerna är grupperade efter funktion (t.ex. svarvar, fräsar).", "incorrectReasoning": "Detta är en *funktionell* verkstad." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Komplett verkstad för en produkt/familj.",
          "longReasoning": "En produktverkstad är en produktionsenhet som är organiserad och utrustad för att kunna tillverka en *komplett produkt* eller en *familj av liknande produkter*, från råmaterial (eller halvfabrikat) till färdig produkt. Den innehåller alla nödvändiga maskiner, verktyg och kompetenser för att utföra alla steg i tillverkningsprocessen."
      },
     {
        "question": "Vad är skillnaden mellan begreppen maskin och utrustning?",
        "answers":[
        {"text": "Det är ingen skillnad.", "incorrectReasoning": "Det finns en skillnad, se boken."},
        {"text": "En maskin är en anordning som omvandlar en typ av energi till en annan.", "incorrectReasoning":"Detta är en definition av maskin, men inte hela förklaringen"},
        {"text": "Utrustning är ett vidare begrepp som inkluderar maskiner, verktyg och andra hjälpmedel", "incorrectReasoning": null},
        {"text":"Utrustning är ett hjälpmedel medans en maskin sköter sig själv.", "incorrectReasoning": "Det är en skillnad men inte den som åsyftas i detta sammanhang."}
        ],
       "correctAnswer": 2,
       "shortReasoning": "Utrustning är ett vidare begrepp som inkluderar maskiner och verktyg med mera.",
       "longReasoning": "En maskin är en anordning med rörliga delar som omvandlar energi och utför ett specifikt arbete, till exempel en svarv, fräs eller borrmaskin. Utrustning är ett vidare begrepp som innefattar *både* maskiner *och* andra typer av hjälpmedel som används i produktionen, t.ex. verktyg, fixturer, mätinstrument och transportanordningar."
    },
    {
      "question":"Vad betyder förkortningen 'TPM'?",
       "answers":[
       {"text": "Total Productive Manufacturing", "incorrectReasoning":"Det korrekta svaret är 'Total Productive Maintenance'."},
       {"text":"Total Production Management", "incorrectReasoning": "Det korrekta svaret är 'Total Productive Maintenance'."},
       {"text": "Total Productive Maintenance.", "incorrectReasoning": null},
       {"text": "Technical Process Management", "incorrectReasoning": "Det korrekta svaret är 'Total Productive Maintenance'."}
       ],
       "correctAnswer": 2,
       "shortReasoning": "TPM = Total Productive Maintenance.",
       "longReasoning": "TPM står för Total Productive Maintenance, vilket är en strategi för underhåll och förbättring av produktionsutrustning. TPM syftar till att maximera utrustningens effektivitet genom att involvera *alla* anställda i förebyggande underhåll, felavhjälpning och ständiga förbättringar."
     },
  {
      "question": "Vilket av följande är *inte* ett av de tre grundläggande elementen i TPM, enligt boken?",
       "answers":[
        {"text": "Operatörsunderhåll.", "incorrectReasoning": "Detta *är* ett grundläggande element."},
        {"text": "Förbättringsgrupper.", "incorrectReasoning":"Detta *är* ett grundläggande element."},
        {"text": "Processuppföljning.", "incorrectReasoning": "Detta *är* ett grundläggande element."},
        {"text": "Investeringskalkylering.", "incorrectReasoning":null}
       ],
       "correctAnswer": 3,
       "shortReasoning": "Investeringskalkylering är inte ett TPM-element.",
       "longReasoning": "De tre grundläggande elementen i TPM (Total Productive Maintenance) är, enligt boken: *Operatörsunderhåll* (att operatörerna själva utför enklare underhåll och förebyggande åtgärder), *Förbättringsgrupper* (tvärfunktionella grupper som arbetar med ständiga förbättringar), och *Processuppföljning* (att mäta och analysera utrustningens prestanda). Investeringskalkylering är en *ekonomisk* process, inte en specifik del av TPM-filosofin."
    },{
      "question": "Vad innebär 'operatörsunderhåll' inom TPM?",
      "answers": [
        { "text": "Att operatörerna får betald semester.", "incorrectReasoning": "Detta är en personalfråga, inte specifikt för TPM." },
        { "text": "Att operatörerna själva utför enklare underhållsuppgifter på sina maskiner.", "incorrectReasoning": null },
        { "text": "Att operatörerna programmerar maskinerna.", "incorrectReasoning": "Programmering är en separat uppgift." },
        { "text": "Att operatörerna ansvarar för inköp av nya maskiner.", "incorrectReasoning": "Inköp är en separat funktion." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Operatörer utför enklare underhåll.",
      "longReasoning": "Operatörsunderhåll inom TPM innebär att operatörerna, de som använder maskinerna dagligen, själva utför enklare underhållsuppgifter, som rengöring, inspektion, smörjning och enklare justeringar. Detta frigör underhållspersonal för mer kvalificerade uppgifter och ökar operatörernas engagemang och kunskap om utrustningen."
    },
    {
    "question":"Vad är syftet med att använda 'förbättringsgrupper' inom TPM?",
      "answers":[
       {"text": "Att minska antalet anställda.", "incorrectReasoning":"Förbättringsgrupper syftar till att *förbättra*, inte att minska personalstyrkan."},
       {"text":"Att identifiera och lösa problem i produktionen genom tvärfunktionellt samarbete.", "incorrectReasoning": null},
       {"text": "Att kontrollera operatörernas närvaro.", "incorrectReasoning": "Närvarokontroll är en separat fråga."},
       {"text": "Att fördela arbetsuppgifterna.", "incorrectReasoning":"Arbetsfördelning kan vara en del av gruppens arbete, men det är inte huvudsyftet."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Tvärfunktionella grupper löser problem.",
      "longReasoning": "Förbättringsgrupper (eller Kaizen-grupper) inom TPM är tvärfunktionella grupper som består av operatörer, underhållspersonal, tekniker och andra relevanta personer. Syftet är att utnyttja gruppens samlade kunskap och erfarenhet för att identifiera, analysera och lösa problem i produktionen, och att genomföra ständiga förbättringar."
    },
     {
          "question": "Vad står OEE för?",
          "answers": [
            { "text": "Overall Equipment Efficiency.", "incorrectReasoning": "Det korrekta är Overall Equipment Effectiveness" },
            { "text": "Overall Efficiency Evaluation.", "incorrectReasoning": "Det korrekta är Overall Equipment Effectiveness" },
            { "text": "Operating Equipment Evaluation.", "incorrectReasoning": "Det korrekta är Overall Equipment Effectiveness." },
            { "text": "Overall Equipment Effectiveness.", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "OEE = Overall Equipment Effectiveness.",
          "longReasoning": "OEE står för Overall Equipment Effectiveness (på svenska: total utrustningseffektivitet). Det är ett nyckeltal som används för att mäta hur effektivt en produktionsutrustning (maskin, lina, cell) utnyttjas."
        },
        {
      "question": "Vilka tre faktorer ingår i beräkningen av OEE?",
      "answers":[
          {"text":"Tillgänglighet, anläggningstid och kvalitet.", "incorrectReasoning":"Anläggningstid är inte en av de tre faktorerna."},
          {"text":"Tillgänglighet, prestanda och kvalitet.", "incorrectReasoning": null},
          {"text": "Arbetstid, maskintid och produktionstid.", "incorrectReasoning":"Detta är relaterade begrepp, men inte de tre OEE-faktorerna."},
          {"text": "Planerad tid, verklig tid och stopptid.", "incorrectReasoning":"Detta är relaterade begrepp, men inte de tre OEE-faktorerna."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Tillgänglighet, prestanda, kvalitet.",
      "longReasoning": "OEE (Overall Equipment Effectiveness) beräknas genom att multiplicera tre faktorer: *Tillgänglighet* (hur stor del av den planerade tiden som utrustningen faktiskt är i drift), *Prestanda* (hur snabbt utrustningen producerar i förhållande till sin ideala hastighet) och *Kvalitet* (hur stor andel av de producerade enheterna som är felfria). OEE = Tillgänglighet x Prestanda x Kvalitet."
    },
    {
      "question": "Vad menas med 'tillgänglighet' i OEE-sammanhang?",
       "answers":[
          {"text": "Hur många timmar en maskin är bemannad.", "incorrectReasoning":"Detta är bemanningstid, inte tillgänglighet."},
          {"text":"Hur stor del av den planerade produktionstiden som maskinen faktiskt är i drift.", "incorrectReasoning": null},
          {"text": "Hur många produkter som tillverkas per timme.", "incorrectReasoning":"Detta är produktionshastighet/prestanda."},
          {"text": "Hur många dagar per år som maskinen är i drift.", "incorrectReasoning": "Detta är en form av tillgänglighet, men OEE fokuserar på den *planerade* tiden."}
       ],
       "correctAnswer": 1,
       "shortReasoning": "Tillgänglighet = Drifttid / Planerad tid.",
       "longReasoning": "Tillgänglighet, i OEE-sammanhang, är ett mått på hur stor del av den *planerade* produktionstiden som en maskin eller utrustning faktiskt är *i drift*. Den tar hänsyn till oplanerade stopp, t.ex. på grund av haverier, omställningar, materialbrist eller andra störningar."
      },
       {
          "question": "Vad menas med 'prestanda' i OEE-sammanhang?",
          "answers": [
            { "text": "Hur många timmar en maskin är igång.", "incorrectReasoning": "Detta är drifttid, relaterat till tillgänglighet." },
            { "text": "Hur snabbt maskinen producerar i förhållande till sin ideala hastighet.", "incorrectReasoning": null },
            { "text": "Hur många felaktiga produkter som tillverkas.", "incorrectReasoning": "Detta är relaterat till kvalitet, inte prestanda." },
            { "text": "Hur mycket material som används.", "incorrectReasoning": "Detta är materialåtgång, inte prestanda." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Prestanda = verklig hastighet / ideal hastighet.",
          "longReasoning": "Prestanda, i OEE-sammanhang, är ett mått på hur *snabbt* en maskin eller utrustning producerar i förhållande till sin *ideala* (teoretiska) hastighet. Den tar hänsyn till taktförluster och småstopp som minskar produktionshastigheten."
      },
      {
      "question": "Vad menas med 'kvalitet' i OEE-sammanhang?",
      "answers":[
      {"text":"Hur många produkter som tillverkas.", "incorrectReasoning": "Detta är produktionsvolym, inte kvalitet."},
      {"text":"Hur snygga produkterna är.", "incorrectReasoning": "Utseende kan vara en kvalitetsaspekt, men OEE fokuserar på *fel*."},
      {"text": "Hur stor andel av de producerade enheterna som är felfria.", "incorrectReasoning":null},
      {"text": "Hur mycket material som går åt.", "incorrectReasoning": "Detta är materialåtgång."}
      ],
      "correctAnswer": 2,
      "shortReasoning": "Kvalitet = felfria produkter / totalt antal produkter.",
      "longReasoning": "Kvalitet, i OEE-sammanhang, är ett mått på hur stor andel av de *producerade enheterna* som är *felfria* (uppfyller kvalitetskraven). Det tar hänsyn till kassationer och omarbetningar."
      },
      {
         "question": "Vad är ett vanligt sätt att visualisera sambandet mellan vinstmarginal, omsättningshastighet och avkastning på totalt kapital?",
          "answers": [
            { "text": "Ett Pareto-diagram.", "incorrectReasoning": "Pareto-diagram används för att prioritera problem." },
            { "text": "Ett histogram.", "incorrectReasoning": "Histogram visar frekvensfördelningar." },
            { "text": "Ett styrdiagram.", "incorrectReasoning": "Styrdiagram används för processkontroll." },
            { "text": "Ett DuPont-schema.", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "DuPont-schemat.",
          "longReasoning": "DuPont-schemat (eller DuPont-modellen) är ett sätt att visualisera och analysera sambandet mellan vinstmarginal, omsättningshastighet (kapitalomsättningshastighet) och avkastning på totalt kapital (eller räntabilitet). Det visar hur dessa faktorer samverkar för att påverka företagets lönsamhet."
      },
    {
       "question": "Vad avses vanligen med 'extern redovisning'?",
        "answers":[
         {"text": "Redovisning av företagets interna kostnader.", "incorrectReasoning": "Detta är intern redovisning."},
         {"text": "Redovisning till skattemyndigheten och andra externa intressenter, t.ex. årsredovisning.", "incorrectReasoning": null},
         {"text": "Redovisning av försäljningssiffror till säljarna.", "incorrectReasoning":"Detta är en intern rapport."},
         {"text": "Redovisning av produktionsresultat till produktionsledningen.", "incorrectReasoning": "Detta är intern redovisning."}
        ],
        "correctAnswer": 1,
        "shortReasoning": "Extern redovisning = till myndigheter, etc.",
        "longReasoning": "Extern redovisning är den redovisning som ett företag är skyldigt att göra till externa intressenter, framför allt till Skatteverket och Bolagsverket. Detta inkluderar årsredovisningen (med resultaträkning, balansräkning och förvaltningsberättelse) som är en offentlig handling."
    },
     {
     "question": "Vilket av följande dokument ingår *inte* i en årsredovisning?",
        "answers":[
         {"text":"Förvaltningsberättelse.", "incorrectReasoning":"Förvaltningsberättelsen ingår."},
         {"text": "Resultaträkning.", "incorrectReasoning": "Resultaträkningen ingår."},
         {"text": "Balansräkning.", "incorrectReasoning": "Balansräkningen ingår."},
         {"text": "Produktionsplan.", "incorrectReasoning": null}
        ],
        "correctAnswer": 3,
        "shortReasoning": "Produktionsplan är inte en del av årsredovisningen.",
        "longReasoning": "En årsredovisning ska innehålla: förvaltningsberättelse (en beskrivning av verksamheten och viktiga händelser), resultaträkning (visar företagets intäkter och kostnader under räkenskapsåret), balansräkning (visar företagets tillgångar, skulder och eget kapital vid räkenskapsårets slut) och revisionsberättelse (revisorns uttalande om årsredovisningen). En *produktionsplan* är ett *internt* dokument och ingår *inte* i årsredovisningen."
     },
     {
          "question": "Vad visar en *resultaträkning*?",
          "answers": [
            { "text": "Företagets tillgångar och skulder.", "incorrectReasoning": "Detta visas i balansräkningen." },
            { "text": "Företagets intäkter och kostnader under en viss period, och resultatet (vinst eller förlust).", "incorrectReasoning": null },
            { "text": "Företagets kassaflöde.", "incorrectReasoning": "Kassaflödesanalys är en separat rapport." },
            { "text": "Företagets produktionsplan.", "incorrectReasoning": "Produktionsplaner är interna dokument." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Intäkter, kostnader och resultat (vinst/förlust).",
          "longReasoning": "Resultaträkningen är en finansiell rapport som visar företagets *intäkter*, *kostnader* och *resultat* (vinst eller förlust) under en viss period, oftast ett räkenskapsår. Den ger en bild av företagets lönsamhet."
      },
      {
          "question": "Vad visar en *balansräkning*?",
          "answers": [
            { "text": "Företagets intäkter och kostnader under en viss period.", "incorrectReasoning": "Detta visas i resultaträkningen." },
            { "text": "Företagets tillgångar, skulder och eget kapital vid en viss tidpunkt.", "incorrectReasoning": null },
            { "text": "Företagets kassaflöde.", "incorrectReasoning": "Kassaflödesanalys är en separat rapport." },
            { "text": "Företagets produktionsplan.", "incorrectReasoning": "Produktionsplaner är interna dokument." }
          ],
          "correctAnswer": 1,
          "shortReasoning": "Tillgångar, skulder och eget kapital.",
          "longReasoning": "Balansräkningen är en finansiell rapport som visar företagets *tillgångar*, *skulder* och *eget kapital* vid en *viss tidpunkt* (vanligtvis vid räkenskapsårets slut). Den ger en ögonblicksbild av företagets finansiella ställning."
      },
       {
      "question":"Vad kallas den *första* delen i produktframtagningsprocessen?",
       "answers":[
         {"text": "Konstruktion.", "incorrectReasoning": "Konstruktion kommer senare."},
         {"text": "Tillverkning.", "incorrectReasoning": "Tillverkning är det sista steget."},
         {"text": "Definition av produktkoncept.", "incorrectReasoning": null},
         {"text": "Processberedning", "incorrectReasoning":"Detta kommer senare."}
       ],
       "correctAnswer": 2,
       "shortReasoning": "Definition av produktkoncept.",
       "longReasoning": "Den första aktiviteten i produktframtagningsprocessen är att definiera *produktkonceptet*. Detta utgår från produktplanen, som i sin tur baseras på marknadsanalyser, kundbehov och företagets strategi. Produktkonceptet beskriver produktens tänkta egenskaper, funktion och målgrupp."
      },
   {
      "question":"Vad är syftet med *Concurrent Engineering* (CE)?",
      "answers":[
      {"text": "Att göra alla moment i produktframtagningen samtidigt.", "incorrectReasoning":"Detta är en förenkling, CE handlar om *integrerat* arbete."},
      {"text": "Att förkorta ledtiden och förbättra samarbetet genom att integrera olika faser i produktframtagningen.", "incorrectReasoning": null},
      {"text":"Att göra produkten så billig som möjligt.", "incorrectReasoning": "Kostnad är en faktor, men CE handlar om en helhetssyn."},
      {"text": "Att enbart fokusera på produktens design.", "incorrectReasoning": "CE involverar alla delar av produktframtagningen."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Integrera produktutveckling och tillverkning.",
      "longReasoning": "Concurrent Engineering (CE), eller parallell produktframtagning, är en arbetsmetodik som syftar till att *förkorta ledtiden* och *förbättra kvaliteten* i produktframtagningen genom att *integrera* de olika faserna (konstruktion, processberedning, tillverkning) och låta dem arbeta *parallellt* och i nära samarbete, istället för sekventiellt."
     },
     {
          "question": "Vad är *inte* en av de tre huvudingredienserna i Concurrent Engineering, enligt boken?",
          "answers": [
            { "text": "Organisation som stödjer tvärfunktionellt arbete.", "incorrectReasoning": "Detta *är* en ingrediens." },
            { "text": "Effektiva hjälpmetoder.", "incorrectReasoning": "Detta *är* en ingrediens." },
            { "text": "Informationssystem för integrerat informationsflöde.", "incorrectReasoning": "Detta *är* en ingrediens." },
            { "text": "Detaljerade ritningar.", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "Detaljerade ritningar är en *produkt* av arbetet, inte en *ingrediens*.",
          "longReasoning": "De tre huvudingredienserna i Concurrent Engineering (CE) är: 1. En *organisation* som stödjer tvärfunktionellt samarbete och integrerat arbete. 2. *Effektiva hjälpmetoder* (verktyg, tekniker) för produktutveckling. 3. *Informationssystem* som möjliggör ett integrerat informationsflöde mellan de olika faserna och aktörerna. Detaljerade ritningar är *inte* en av dessa ingredienser i sig, utan snarare en *produkt* eller ett *resultat* av arbetet."
        },
      {
      "question": "Vad står DFA för?",
      "answers":[
      {"text": "Design For Assembly.", "incorrectReasoning": null},
      {"text":"Design For All.", "incorrectReasoning":"DFA har en specifik betydelse inom produktionsteknik."},
      {"text":"Digital Factory Automation.", "incorrectReasoning":"Detta är en annan förkortning."},
      {"text": "Detailed Factory Analysis.", "incorrectReasoning": "Detta är inte en vedertagen förkortning."}
      ],
      "correctAnswer": 0,
      "shortReasoning": "DFA = Design For Assembly.",
      "longReasoning": "DFA står för Design For Assembly, vilket är en metod för att utforma produkter så att de blir enklare och billigare att montera. Det handlar om att minska antalet delar, förenkla monteringsrörelserna och utforma detaljerna så att de är lätta att gripa, orientera och passa in."
      },
       {
          "question": "Vad ingår i en DFA-analys?",
          "answers": [
            { "text": "Att analysera produktens färg och form.", "incorrectReasoning": "Detta är estetiska aspekter, inte primärt DFA." },
            { "text": "Att beräkna produktens vikt.", "incorrectReasoning": "Vikt är en faktor, men DFA fokuserar på monterbarhet." },
            { "text": "Att ställa frågor om produkten och dess komponenter, bedöma dem och ge förbättringsförslag.", "incorrectReasoning": null },
            { "text": "Att testa produkten i en vindtunnel.", "incorrectReasoning": "Detta är aerodynamiska tester, inte DFA." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "Frågor, bedömning, förbättringsförslag.",
          "longReasoning": "En DFA-analys (Design For Assembly) innebär att man systematiskt går igenom en produkt (eller en virtuell modell av produkten) och ställer frågor om dess *monterbarhet*. Man analyserar antalet detaljer, monteringsriktningar, gripbarhet, orientering, inpassning och andra faktorer som påverkar hur lätt eller svårt det är att montera produkten. Utifrån analysen ger man sedan *förbättringsförslag*."
      },
      {
          "question": "Vad är *inte* ett typiskt mål med en DFA-analys?",
          "answers": [
            { "text": "Att minska antalet detaljer i produkten.", "incorrectReasoning": "Detta *är* ett vanligt mål." },
            { "text": "Att minska antalet monteringsriktningar.", "incorrectReasoning": "Detta *är* ett vanligt mål." },
            { "text": "Att underlätta gripning, orientering och inpassning av detaljer.", "incorrectReasoning": "Detta *är* ett vanligt mål." },
            { "text": "Att öka produktens vikt.", "incorrectReasoning": null }
          ],
          "correctAnswer": 3,
          "shortReasoning": "DFA syftar *inte* till att öka vikten.",
          "longReasoning": "Målen med en DFA-analys är att förenkla monteringen och minska monteringskostnaderna. Detta uppnås typiskt genom att: *minska* antalet detaljer och unika komponenter, *minska* antalet monteringsriktningar, *underlätta* gripning, orientering och inpassning av detaljer, och *standardisera* komponenter och processer. Att *öka* produktens vikt är *inte* ett mål med DFA, snarare tvärtom."
      },
      {
         "question": "Vad är *inte* ett exempel på en DFX-metod?",
          "answers":[
           {"text": "DFM (Design For Manufacturing).", "incorrectReasoning": "DFM är en DFX-metod."},
           {"text": "DFA (Design For Assembly).", "incorrectReasoning": "DFA är en DFX-metod."},
           {"text":"DFS (Design For Service).", "incorrectReasoning":"DFS är en DFX-metod"},
           {"text": "DFP (Design For Price)", "incorrectReasoning":null}
          ],
          "correctAnswer": 3,
          "shortReasoning": "DFP nämns inte i listan, övriga gör det.",
          "longReasoning": "DFX står för Design For X, där X kan representera olika aspekter av produktens livscykel eller egenskaper. Exempel som nämns är DFM (Design For Manufacturing, tillverkning), DFA (Design For Assembly, montering), DFS (Design For Service, service) och DFR (Design For Recycling, återvinning). Det nämns inget om Design for Price, även om det säkert finns."
      },
     {
        "question": "Vad är en 'virtuell prototyp'?",
        "answers":[
        {"text": "En fysisk modell av produkten.", "incorrectReasoning": "En virtuell prototyp är *digital*, inte fysisk."},
        {"text": "En ritning av produkten.", "incorrectReasoning":"En ritning kan vara 2D, en virtuell prototyp är oftast 3D."},
        {"text": "En datormodell av produkten.", "incorrectReasoning": null},
        {"text":"En beskrivning av produktens funktion.", "incorrectReasoning": "Detta är en specifikation, inte en prototyp."}
        ],
       "correctAnswer": 2,
       "shortReasoning": "Datormodell av produkten.",
       "longReasoning": "En virtuell prototyp är en *digital modell* av produkten, oftast en tredimensionell (3D) CAD-modell, som kan användas för att visualisera, analysera och testa produkten *innan* en fysisk prototyp har byggts. Detta sparar tid och kostnader i produktutvecklingsprocessen."
      },
   {
      "question": "Vad är 'DMU' i produkutvecklingssammanhang?",
       "answers":[
       {"text": "Digital Manufacturing Unit.", "incorrectReasoning":"Detta är inte den korrekta betydelsen."},
       {"text":"Design and Manufacturing Unit.", "incorrectReasoning": "Detta är inte den korrekta betydelsen."},
       {"text": "Digital Mock-Up.", "incorrectReasoning": null},
       {"text": "Detailed Manufacturing Update", "incorrectReasoning": "Detta är inte den korrekta betydelsen."}
       ],
       "correctAnswer": 2,
       "shortReasoning": "DMU = Digital Mock-Up.",
       "longReasoning": "DMU står för Digital Mock-Up, vilket är en digital representation (oftast en 3D-modell) av en produkt. DMU används för att visualisera, analysera och simulera produkten och dess funktioner, inklusive montering, innan en fysisk prototyp tillverkas."
   },
  {
    "question":"Vilken av följande fördelar ger *inte* DMU (Digital Mock-Up) enligt texten?",
     "answers":[
       {"text": "Möjlighet att visualisera och analysera produkten innan den byggs fysiskt.", "incorrectReasoning": "Detta *är* en fördel med DMU."},
       {"text":"Möjlighet att simulera monteringssekvenser.", "incorrectReasoning": "Detta *är* en fördel med DMU."},
       {"text": "Minskat behov av fysiska prototyper.", "incorrectReasoning": "Detta *är* en fördel med DMU."},
       {"text": "Minskat behov av reservdelar.", "incorrectReasoning": null}
      ],
     "correctAnswer": 3,
     "shortReasoning": "DMU handlar om utvecklingsprocessen, inte reservdelar.",
     "longReasoning": "DMU (Digital Mock-Up) ger en rad fördelar i produktutvecklingsprocessen, bland annat: möjlighet att *visualisera och analysera* produkten innan den byggs fysiskt, möjlighet att *simulera monteringssekvenser*, möjlighet att göra *DFA-analyser* (Design For Assembly) och därmed *minskat behov av fysiska prototyper*. Att *minska behovet av reservdelar* är *inte* en direkt fördel med DMU i utvecklingsfasen."
   },
   {
    "question": "Vad är 'OLP' i robotsammanhang?",
     "answers":[
      {"text": "On-Line Programming.", "incorrectReasoning":"Detta innebär programmering *vid* roboten."},
      {"text": "Off-Line Programming.", "incorrectReasoning": null},
      {"text":"Object Linking and Positioning.", "incorrectReasoning":"Detta är inte en vedertagen förkortning inom robotteknik."},
      {"text": "Optimal Laser Positioning.", "incorrectReasoning":"Detta är inte en vedertagen förkortning inom robotteknik."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "OLP = Off-Line Programming.",
      "longReasoning": "OLP står för Off-Line Programming, vilket innebär att man programmerar en robot (t.ex. en industrirobot) *utanför* själva robotcellen, oftast med hjälp av en dator och simuleringsprogram. Programmet överförs sedan till robotens styrsystem."
   },
   {
     "question":"Vad är en fördel med off-line programmering (OLP) av robotar?",
     "answers":[
       {"text": "Det kräver ingen dator.", "incorrectReasoning":"OLP görs på en dator."},
       {"text": "Det är snabbare än teach-in programmering.", "incorrectReasoning": "OLP kan vara snabbare *i längden*, men den initiala programmeringen kan ta tid."},
       {"text":"Man kan programmera roboten utan att stoppa produktionen.", "incorrectReasoning": null},
       {"text": "Det kräver ingen kunskap om robotprogrammering.", "incorrectReasoning": "OLP kräver kunskap, men gör det möjligt att utnyttja CAD-data."}
      ],
     "correctAnswer": 2,
     "shortReasoning": "Programmering utan produktionsstopp.",
     "longReasoning": "En stor fördel med off-line programmering (OLP) av robotar är att man kan skapa och testa robotprogram *utan att behöva stoppa produktionen*. Programmet skapas och simuleras i en dator, och kan sedan överföras till roboten när det är klart."
  },
   {
      "question":"Vad är 'processorientering'?",
      "answers":[
          {"text": "Att fokusera på enskilda arbetsuppgifter.", "incorrectReasoning":"Processorientering fokuserar på *flödet*."},
          {"text": "Att organisera arbetet utifrån flödet av aktiviteter som skapar värde för kunden.", "incorrectReasoning": null},
          {"text": "Att dela upp arbetet i så små delar som möjligt.", "incorrectReasoning": "Detta är specialisering, inte processorientering."},
          {"text": "Att fokusera på att maximera vinsten.", "incorrectReasoning": "Vinst är ett *resultat*, inte definitionen av processorientering."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Fokus på flödet och värdeskapandet.",
      "longReasoning": "Processorientering innebär att man organiserar och styr verksamheten utifrån de *processer* som skapar värde för kunden. En process är en kedja av aktiviteter som omvandlar input (t.ex. material, information) till output (produkter, tjänster). Istället för att fokusera på enskilda funktioner eller avdelningar, fokuserar man på *flödet* av aktiviteter genom hela organisationen."
  },
   {
      "question": "Vad är en 'kärnprocess' i ett företag?",
      "answers": [
          {"text":"En process som är enkel att utföra.", "incorrectReasoning": "Kärnprocesser kan vara komplexa."},
          {"text": "En process som inte är så viktig.", "incorrectReasoning": "Kärnprocesser är *avgörande* för verksamheten."},
          {"text": "En process som direkt bidrar till att skapa värde för kunden och förverkliga företagets affärsidé.", "incorrectReasoning":null},
          {"text": "En process som bara utförs av chefer.", "incorrectReasoning": "Kärnprocesser involverar ofta många medarbetare."}
      ],
      "correctAnswer": 2,
      "shortReasoning": "Kärnprocess = skapar värde för kunden.",
      "longReasoning": "Kärnprocesser är de processer i ett företag som *direkt* bidrar till att skapa värde för kunden och förverkliga företagets affärsidé. De är de mest centrala och värdeskapande processerna. Exempel är produktutveckling, tillverkning och försäljning."
  },
  {
          "question": "Vad är en 'stödprocess' i ett företag?",
          "answers": [
            { "text": "En process som inte är viktig.", "incorrectReasoning": "Stödprocesser är viktiga för att kärnprocesserna ska fungera." },
            { "text": "En process som utförs av externa leverantörer.", "incorrectReasoning": "Stödprocesser kan vara interna eller externa." },
            { "text": "En process som stöder kärnprocesserna så att de kan fungera effektivt.", "incorrectReasoning": null },
            { "text": "En process som bara utförs av chefer.", "incorrectReasoning": "Stödprocesser involverar ofta många medarbetare." }
          ],
          "correctAnswer": 2,
          "shortReasoning": "Stödprocess = stöder kärnprocesserna.",
          "longReasoning": "Stödprocesser är processer som *inte* direkt skapar värde för kunden, men som är *nödvändiga* för att kärnprocesserna ska fungera effektivt. Exempel på stödprocesser är inköp, personaladministration, IT-support, underhåll och ekonomistyrning."
      },
  {
      "question": "Vad är 'målnedbrytning'?",
      "answers": [
         {"text":"Att ta bort orealistiska mål.", "incorrectReasoning": "Målnedbrytning handlar om att *konkretisera* mål, inte ta bort dem."},
         {"text": "Att bryta ner övergripande mål till mer konkreta delmål på lägre nivåer i organisationen.", "incorrectReasoning": null},
         {"text":"Att sätta upp nya mål varje år.", "incorrectReasoning": "Målsättning är en del, men målnedbrytning handlar om hierarkin."},
         {"text": "Att mäta hur väl man har uppnått målen.", "incorrectReasoning": "Detta är måluppföljning, inte nedbrytning."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Övergripande mål -> konkreta delmål.",
      "longReasoning": "Målnedbrytning är en process där man bryter ner företagets övergripande mål (som ofta är visionära och långsiktiga) till mer *konkreta* och *mätbara* delmål på lägre nivåer i organisationen (avdelningar, grupper, individer). Detta gör målen mer relevanta och begripliga för de anställda, och det blir tydligare hur var och en kan bidra till att uppnå de övergripande målen."
  },{
    "question": "Vad är en 'kvalitetspolicy'?",
    "answers": [
      { "text": "En lista över alla kvalitetskontroller.", "incorrectReasoning": "Detta är en del av kvalitetssystemet, men inte policyn." },
      { "text": "Ett dokument som beskriver företagets övergripande inriktning och åtaganden när det gäller kvalitet.", "incorrectReasoning": null },
      { "text": "En detaljerad beskrivning av alla arbetsmoment.", "incorrectReasoning": "Detta är arbetsinstruktioner." },
      { "text": "En lista över alla leverantörer.", "incorrectReasoning": "Detta är en leverantörsförteckning." }
    ],
    "correctAnswer": 1,
    "shortReasoning": "Kvalitetspolicy = övergripande kvalitetsinriktning.",
    "longReasoning": "En kvalitetspolicy är ett formellt dokument, oftast fastställt av företagsledningen, som uttrycker företagets *övergripande inriktning, mål och åtaganden* när det gäller kvalitet. Den fungerar som en ledstjärna för kvalitetsarbetet och ska vara känd och förstådd av alla anställda."
  },
   {
        "question": "Vad står TQM för?",
        "answers": [
          { "text": "Total Quality Management.", "incorrectReasoning": null },
          { "text": "Technical Quality Measurement.", "incorrectReasoning": "Det korrekta svaret är Total Quality Management." },
          { "text": "Time and Quality Management.", "incorrectReasoning": "Det korrekta svaret är Total Quality Management" },
          { "text": "Top Quality Manufacturing.", "incorrectReasoning": "Det korrekta svaret är Total Quality Management." }
        ],
        "correctAnswer": 0,
        "shortReasoning": "TQM = Total Quality Management.",
        "longReasoning": "TQM står för Total Quality Management (på svenska ofta kallat 'övergripande kvalitetsstyrning' eller 'totalkvalitet'). Det är en ledningsfilosofi som betonar ständiga förbättringar, kundfokus, allas delaktighet och processorientering för att uppnå hög kvalitet i alla delar av en organisations verksamhet."
      },
    {
      "question":"Vilken av följande punkter är *inte* en av grundpelarna i TQM?",
      "answers":[
        {"text": "Arbeta med processer.", "incorrectReasoning":"Detta *är* en grundpelare."},
        {"text": "Arbeta med ständiga förbättringar", "incorrectReasoning": "Detta *är* en grundpelare."},
        {"text":"Basera beslut på order från ledningen", "incorrectReasoning":null},
        {"text": "Låt alla vara delaktiga.", "incorrectReasoning": "Detta *är* en grundpelare."}
        ],
        "correctAnswer": 2,
        "shortReasoning": "TQM betonar faktabaserade beslut, inte order.",
        "longReasoning": "De fyra grundpelarna i TQM (Total Quality Management) är: 1. Arbeta med *processer*. 2. Arbeta med *ständiga förbättringar*. 3. *Basera beslut på fakta*. 4. *Låt alla vara delaktiga*. Att basera beslut enbart på *order från ledningen* strider mot TQM-principen om allas delaktighet och faktabaserade beslut."
    },
     {
        "question": "Vad är det *viktigaste* för att TQM-arbetet ska lyckas, enligt boken?",
        "answers": [
          { "text": "Att ha den senaste tekniken.", "incorrectReasoning": "Teknik är en möjliggörare, men inte det viktigaste." },
          { "text": "Att ha detaljerade instruktioner.", "incorrectReasoning": "Instruktioner är viktiga, men inte det *viktigaste*." },
          { "text": "Att alla anställda är utbildade.", "incorrectReasoning": "Utbildning är viktigt, men inte det *viktigaste*." },
          { "text": "Att kunden alltid sätts i centrum.", "incorrectReasoning": null }
        ],
        "correctAnswer": 3,
        "shortReasoning": "Kundfokus är centralt i TQM.",
        "longReasoning": "Enligt boken är den *viktigaste* faktorn för att TQM-arbetet ska lyckas att *kunden alltid sätts i centrum*. Alla aktiviteter och förbättringar ska syfta till att öka kundvärdet och tillfredsställa kundens behov och förväntningar."
    },
    {
        "question": "Vad är *inte* ett exempel på en åtgärd som kan minska ställtiderna i produktionen (SMED)?",
        "answers": [
          { "text": "Att förbereda verktyg och fixturer medan maskinen är igång.", "incorrectReasoning": "Detta är att omvandla inre ställtid till yttre." },
          { "text": "Att använda snabbfästen och standardiserade fixturer.", "incorrectReasoning": "Detta minskar den inre ställtiden." },
           {"text": "Att öka partistorlekarna", "incorrectReasoning": null},
          { "text": "Att parallellisera arbetsmoment.", "incorrectReasoning": "Detta kan minska den totala ställtiden." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "Ökade partistorlekar minskar *inte* ställtiden *per detalj*.",
        "longReasoning": "Att *öka partistorlekarna* minskar visserligen den *totala* omställningstiden i förhållande till det totala antalet producerade detaljer (eftersom man behöver ställa om mer sällan), men det minskar *inte* själva *ställtiden* (tiden det tar att ställa om maskinen). SMED handlar om att *minimera* själva omställningstiden, oavsett partistorlek. De andra alternativen är alla exempel på SMED-åtgärder."
      },
  {
        "question": "Vad är en 'flödesgrupp'?",
        "answers": [
          { "text": "En grupp maskiner och medarbetare som tillsammans tillverkar en hel produkt eller produktfamilj.", "incorrectReasoning": null },
          { "text": "En grupp maskiner av samma typ (t.ex. alla svarvar).", "incorrectReasoning": "Detta är en *funktionell* indelning." },
          { "text": "En grupp medarbetare som har samma chef.", "incorrectReasoning": "Detta är en organisatorisk indelning, inte en produktionsmässig." },
          { "text": "En grupp produkter som liknar varandra.", "incorrectReasoning": "Detta är en produktfamilj, men flödesgruppen är en *produktionsenhet*." }
        ],
        "correctAnswer": 0,
        "shortReasoning": "Maskiner och personal för att tillverka en produkt/familj.",
        "longReasoning": "En flödesgrupp är en produktionsenhet (en grupp av maskiner och medarbetare) som är organiserad för att *tillsammans* tillverka en *hel produkt* eller en *familj* av liknande produkter. Detta skiljer sig från en funktionell verkstad, där maskinerna är grupperade efter typ."
      },
{
 "question": "Vad är en 'produktverkstad'?",
 "answers": [
  {"text": "En verkstad där man tillverkar alla möjliga sorters produkter.", "incorrectReasoning":"En produktverkstad är specialiserad på en produkt/familj."},
  {"text":"En verkstad som har alla resurser som krävs för att tillverka en specifik produkt, eller produktfamilj, från råmaterial till färdig produkt.", "incorrectReasoning": null},
  {"text": "En verkstad där maskinerna är grupperade efter funktion (t.ex. svarvar, fräsmaskiner).", "incorrectReasoning":"Detta är en *funktionell* verkstad."},
  {"text": "En verkstad som är öppen för allmänheten.", "incorrectReasoning": "En produktverkstad är en intern produktionsenhet."}
  ],
  "correctAnswer": 1,
  "shortReasoning": "Komplett verkstad för en produkt/familj.",
  "longReasoning": "En produktverkstad är en produktionsenhet som är organiserad och utrustad för att kunna tillverka en *specifik produkt* eller en *familj* av liknande produkter, *från råmaterial (eller halvfabrikat) till färdig produkt*. Den innehåller alla nödvändiga maskiner, verktyg och kompetenser för att utföra *alla* steg i tillverkningsprocessen för den produkten/familjen. Produktverkstäder kan organiseras med eller utan flödesgrupper."
},
{
    "question":"Vad är en 'transferlina'?",
    "answers":[
    {"text": "En flexibel produktionslina som kan ställas om for olika produkter.", "incorrectReasoning": "Transferlinor är stela, inte flexibla."},
    {"text": "En produktionslina med manuell hantering av produkterna.", "incorrectReasoning": "Transferlinor har oftast en fast transportanordning."},
    {"text": "En produktionslina med en fast transportanordning där produkterna bearbetas i en bestämd sekvens.", "incorrectReasoning":null},
    {"text":"En produktionslina där alla arbetar med samma moment.", "incorrectReasoning":"Transferlinor har oftast en arbetsfördelning."}
    ],
    "correctAnswer": 2,
    "shortReasoning": "Transferlina = fast, sekventiell produktionslina.",
    "longReasoning": "En transferlina är en typ av produktionslina som kännetecknas av en *fast* (oftast mekaniserad) transportanordning som flyttar produkterna (eller fixturer med produkterna) mellan ett antal *fasta* bearbetningsstationer i en *bestämd sekvens*. Transferlinor är effektiva för massproduktion av *en* produkt eller ett *fåtal* varianter, men är *inte* flexibla."
 },
{
        "question": "Vad är skillnaden mellan 'stela linor' och 'omställbara linor'?",
        "answers": [
          { "text": "Stela linor är långsammare än omställbara linor.", "incorrectReasoning": "Hastigheten är inte den primära skillnaden." },
          { "text": "Stela linor är avsedda för en enda produkttyp, medan omställbara linor kan hantera flera produktvarianter.", "incorrectReasoning": null },
          { "text": "Stela linor har manuell hantering, medan omställbara linor är automatiserade.", "incorrectReasoning": "Båda kan vara automatiserade." },
          { "text": "Det är ingen skillnad, de betyder samma sak.", "incorrectReasoning": "Det finns en tydlig skillnad i flexibilitet." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Stel lina = en produkt. Omställbar lina = flera varianter.",
        "longReasoning": "En *stel lina* (t.ex. en traditionell transferlina) är utformad för att tillverka *en enda produkttyp* eller ett *mycket begränsat* antal varianter. Den är oftast mycket effektiv för sin specifika uppgift, men svår och dyr att ställa om till andra produkter. En *omställbar lina* är mer *flexibel* och kan hantera *flera olika produktvarianter*. Detta kan uppnås genom att använda CNC-styrda maskiner, snabba verktygsbyten, flexibla fixturer och programmerbara styrsystem."
      },
{
"question": "Vad kännetecknar en *funktionell* verkstad?",
 "answers":[
  {"text": "Att alla arbetar med samma uppgift.", "incorrectReasoning": "Detta är specialisering, inte funktionell organisation."},
  {"text":"Att maskiner och utrustning är grupperade efter *typ* av operation (svarvning, fräsning, etc.).", "incorrectReasoning": null},
  {"text":"Att produkterna rör sig i ett fast, linjärt flöde.", "incorrectReasoning": "Detta beskriver en lina/transferlina."},
  {"text":"Att verkstaden är organiserad för att tillverka en enda produkt.", "incorrectReasoning": "Detta är en produktverkstad, inte en funktionell verkstad."}
 ],
 "correctAnswer": 1,
 "shortReasoning": "Funktionell verkstad = maskiner grupperade efter typ.",
 "longReasoning": "I en funktionell verkstad är maskiner och utrustning grupperade efter *funktion* eller *typ*. Det finns alltså en avdelning för svarvning, en för fräsning, en för borrning, osv. Produkterna rör sig mellan de olika avdelningarna beroende på vilka operationer som behövs, vilket kan leda till ett komplext materialflöde."
},
{
   "question": "Vad av följande är en fördel med en *flödesgrupp* jämfört med en funktionell verkstad?",
    "answers": [
       {"text":"Kortare ledtider och minskad kapitalbindning.", "incorrectReasoning": null},
       {"text":"Högre maskinutnyttjande.", "incorrectReasoning": "Maskinutnyttjandet kan vara högre i en funktionell verkstad, men flödesgrupper ger andra fördelar."},
       {"text":"Enklare att hantera ett stort antal olika produkter.", "incorrectReasoning": "Funktionella verkstäder är ofta bättre på att hantera stor variation, men flödesgrupper är bättre på sitt specifika produktområde."},
       {"text":"Mindre behov av planering.", "incorrectReasoning":"Planering behövs i båda fallen, men den blir *annorlunda* i en flödesgrupp."}
    ],
    "correctAnswer": 0,
    "shortReasoning": "Flödesgrupper ger kortare ledtider.",
    "longReasoning": "Flödesgrupper, där maskiner och personal är organiserade för att tillverka en *hel produkt* eller *produktfamilj*, ger ofta *kortare ledtider* (genomloppstider) och *minskad kapitalbindning* (mindre material i arbete) jämfört med funktionella verkstäder. Detta beror på att materialflödet blir enklare och rakare, och att man undviker köbildning mellan olika avdelningar."
  },
{
    "question": "Vad menas med 'Concurrent Engineering' (CE)?",
    "answers":[
        {"text": "Att alla arbetar samtidigt med samma uppgift.", "incorrectReasoning":"Detta är inte definitionen av CE."},
        {"text": "Att arbeta med flera projekt samtidigt.", "incorrectReasoning": "Detta är multitasking, inte CE."},
        {"text": "Att integrera produktutveckling och tillverkningsförberedelser så att de sker parallellt och i samverkan.", "incorrectReasoning": null},
        {"text": "Att använda datorer i produktutvecklingen.", "incorrectReasoning": "Datorstöd är en *del* av CE, men inte hela konceptet."}
    ],
    "correctAnswer": 2,
    "shortReasoning": "CE = parallellt och integrerat arbete.",
    "longReasoning": "Concurrent Engineering (CE), eller parallell produktframtagning, är en arbetsmetodik som innebär att olika faser i produktutvecklingen (konstruktion, processberedning, tillverkning) sker *parallellt* och i *nära samverkan*, istället för sekventiellt. Detta syftar till att förkorta ledtider, minska risken för sena ändringar och förbättra produktkvaliteten."
},
 {
   "question": "Vad står 'DFA' för?",
   "answers":[
     {"text": "Design For Automation.", "incorrectReasoning":"Detta är *inte* den vedertagna betydelsen av DFA."},
     {"text": "Design For Assembly.", "incorrectReasoning": null},
     {"text":"Detailed Flow Analysis.", "incorrectReasoning":"Detta är inte en vedertagen förkortning."},
     {"text": "Digital Factory Automation.", "incorrectReasoning":"Detta är inte den vedertagna betydelsen."}
   ],
   "correctAnswer": 1,
   "shortReasoning": "DFA = Design For Assembly.",
   "longReasoning": "DFA står för Design For Assembly, vilket är en metod för att utforma produkter så att de blir *enklare och billigare att montera*. Det handlar om att minska antalet delar, förenkla monteringsrörelserna och utforma detaljerna så att de är lätta att gripa, orientera och passa in."
},
 {
    "question":"Vad är syftet med en DFA-analys?",
    "answers":[
     {"text": "Att göra produkten snyggare.", "incorrectReasoning": "DFA handlar om monterbarhet, inte estetik."},
     {"text": "Att göra produkten billigare att tillverka genom att förenkla monteringen.", "incorrectReasoning": null},
     {"text":"Att göra produkten starkare.", "incorrectReasoning": "Detta är en annan designaspekt, inte DFA."},
     {"text": "Att göra produkten lättare.", "incorrectReasoning":"Viktminskning kan vara en *effekt* av DFA, men inte huvudsyftet."}
     ],
    "correctAnswer": 1,
    "shortReasoning": "Förenkla montering, minska kostnader.",
    "longReasoning": "Syftet med en DFA-analys (Design For Assembly) är att *förenkla* monteringen av en produkt och därmed *minska* monteringstiden och kostnaderna. Detta görs genom att systematiskt analysera produkten och dess delar, och identifiera möjligheter att minska antalet delar, förenkla monteringsrörelser och förbättra detaljernas utformning för enklare hantering."
 },
{
   "question":"Vilka frågor ställs i en DFA analys?",
    "answers": [
    {"text": "Om produkten är snygg.", "incorrectReasoning": "Detta är inte en relevant fråga i DFA"},
    {"text":"Om produkten har rätt färg.", "incorrectReasoning": "Färg är oviktigt i DFA."},
    {"text": "Om produkten och om de komponenter som ingår i produkten, bedömningskriterier och förbättringsförslag.", "incorrectReasoning": null},
    {"text": "Om produkten är stark.", "incorrectReasoning":"Detta är inte relevant i DFA."}
    ],
    "correctAnswer": 2,
    "shortReasoning": "Frågor om montering och förbättringsförslag.",
    "longReasoning": "I en DFA-analys ställs frågor till produkten och om de komponenter som ingår i produkten, frågorna kan röra bedömningskriterier och förbättringsförslag, samt beröra produktens monteringsegenskaper."
},
 {
  "question":"Vad menas med 'modularisering' av produkter?",
    "answers":[
    {"text":"Att göra produkterna så små som möjligt.", "incorrectReasoning": "Modularisering handlar om *uppbyggnad*, inte storlek."},
    {"text": "Att dela upp produkten i standardiserade, utbytbara moduler.", "incorrectReasoning": null},
    {"text": "Att tillverka produkten av ett enda material.", "incorrectReasoning": "Modularisering handlar om *funktionella* enheter, inte material."},
    {"text": "Att göra produkten så komplicerad som möjligt.", "incorrectReasoning":"Modularisering syftar till att *förenkla*, inte komplicera."}
  ],
 "correctAnswer": 1,
  "shortReasoning": "Modularisering = dela upp i utbytbara moduler.",
 "longReasoning": "Modularisering innebär att man delar upp en produkt i ett antal *standardiserade*, *utbytbara* moduler. Varje modul har en väldefinierad funktion och gränssnitt mot andra moduler. Detta gör det möjligt att skapa många olika produktvarianter genom att kombinera olika moduler, och att snabbt anpassa produkten till ändrade kundbehov."
 },
 {
 "question": "Vad är en 'kärnprocess' i ett företag?",
   "answers":[
    {"text":"En process som bara cheferna utför.", "incorrectReasoning": "Kärnprocesser involverar ofta många medarbetare."},
    {"text": "En process som direkt bidrar till att skapa värde för kunden.", "incorrectReasoning": null},
    {"text": "En process som inte är så viktig.", "incorrectReasoning":"Kärnprocesser är *avgörande* för verksamheten."},
    {"text": "En process som bara utförs en gång.", "incorrectReasoning": "Kärnprocesser är *återkommande*."}
   ],
   "correctAnswer": 1,
   "shortReasoning": "Kärnprocess = skapar värde för kunden.",
   "longReasoning": "En kärnprocess är en process som *direkt* bidrar till att skapa värde för kunden och förverkliga företagets affärsidé. Exempel på kärnprocesser är produktutveckling, tillverkning och försäljning. De är de mest centrala processerna i företaget."
},
{
  "question": "Vad *ingår* i produktframtagningsprocessen?",
  "answers":[
   {"text":"Enbart konstruktion av produkten.", "incorrectReasoning": "Produktframtagning är en bredare process."},
   {"text": "Alla aktiviteter från idé till serieproduktion, inklusive utveckling, beredning och tillverkning.", "incorrectReasoning": null},
   {"text": "Enbart tillverkning av produkten.", "incorrectReasoning":"Produktframtagning börjar *innan* tillverkningen."},
   {"text": "Enbart marknadsföring och försäljning av produkten.", "incorrectReasoning": "Detta är *efter* produktframtagningen."}
  ],
 "correctAnswer": 1,
 "shortReasoning": "Idé -> utveckling -> beredning -> produktion.",
 "longReasoning": "Produktframtagningsprocessen omfattar *alla* aktiviteter som krävs för att ta en produkt från *idé* till *serieproduktion*. Detta inkluderar (i stora drag): definition av produktkoncept, konstruktion (på system- och detaljnivå), processberedning (planering av tillverkningsprocessen) och tillverkning."
},
  {
    "question":"Vad är en viktig skillnad mellan en traditionell (sekventiell) produktframtagningsprocess och Concurrent Engineering (CE)?",
      "answers":[
        {"text": "I CE sker allting samtidigt.", "incorrectReasoning": "Det är en förenkling. CE handlar om *parallellt* arbete och *integration*."},
        {"text":"I traditionell produktframtagning sker faserna efter varandra, i CE sker de mer parallellt och i samverkan.", "incorrectReasoning": null},
        {"text": "CE är bara en teoretisk modell, medan traditionell produktframtagning är det som används i praktiken.", "incorrectReasoning": "CE används i praktiken."},
        {"text":"Det är ingen skillnad, de betyder samma sak.", "incorrectReasoning": "Det finns en tydlig skillnad i arbetsmetodik."}
      ],
      "correctAnswer": 1,
      "shortReasoning": "Sekventiell = efter varandra. CE = parallellt/integrerat.",
      "longReasoning": "I en *traditionell* (sekventiell) produktframtagningsprocess sker de olika faserna (konstruktion, processberedning, tillverkning) *efter varandra*, med lite samverkan. I *Concurrent Engineering (CE)* sker dessa faser mer *parallellt* och i *nära samverkan*, vilket förkortar ledtider och minskar risken för sena ändringar."
  },
  {
   "question":"Vad är *inte* en av de tre huvudingredienserna i Concurrent Engineering (CE)?",
     "answers": [
      {"text": "En organisation som stödjer tvärfunktionellt samarbete.", "incorrectReasoning":"Detta *är* en ingrediens."},
      {"text": "Effektiva hjälpmetoder (verktyg) för produktutveckling.", "incorrectReasoning": "Detta *är* en ingrediens."},
      {"text": "Informationssystem som möjliggör ett integrerat informationsflöde.", "incorrectReasoning":"Detta *är* en ingrediens."},
      {"text": "En hierarkisk organisation med tydliga chefsroller.", "incorrectReasoning":null}
     ],
     "correctAnswer": 3,
     "shortReasoning": "CE kräver tvärfunktionellt samarbete, inte hierarki.",
     "longReasoning": "De tre huvudingredienserna i Concurrent Engineering (CE) är: 1. En *organisation* som stödjer tvärfunktionellt samarbete och integrerat arbete mellan olika avdelningar och kompetenser. 2. *Effektiva hjälpmetoder* och verktyg (t.ex. CAD, CAM, CAE, DFA, FMEA). 3. *Informationssystem* som möjliggör ett integrerat informationsflöde mellan de olika faserna och aktörerna. En *strikt hierarkisk* organisation med tydliga chefsroller är *inte* en av dessa ingredienser, utan snarare något som kan *motverka* det tvärfunktionella samarbetet som CE bygger på."
  },
 {
  "question":"Vad är en 'process' i företagssammanhang?",
   "answers":[
   {"text": "En enstaka arbetsuppgift.", "incorrectReasoning": "En process består av *flera* aktiviteter."},
   {"text": "En kedja av aktiviteter som omvandlar input till output och skapar värde för kunden.", "incorrectReasoning": null},
   {"text": "En avdelning inom företaget.", "incorrectReasoning": "En avdelning kan vara *ansvarig* för en process, men processen är *aktiviteterna*."},
   {"text": "En typ av maskin.", "incorrectReasoning": "Maskiner är *resurser* som används i processer."}
   ],
   "correctAnswer": 1,
   "shortReasoning": "Process = kedja av aktiviteter som skapar värde.",
   "longReasoning": "En process är en *kedja av aktiviteter* som är sammankopplade och som *omvandlar input* (t.ex. material, information, beställningar) till *output* (produkter, tjänster, resultat) som skapar *värde för kunden*. Processer sträcker sig ofta tvärs över traditionella avdelningsgränser inom ett företag."
},
 {
 "question": "Vad menas med 'processorientering'?",
  "answers": [
  {"text": "Att fokusera på enskilda arbetsuppgifter.", "incorrectReasoning": "Processorientering handlar om *helheten* och *flödet*."},
  {"text": "Att organisera och styra verksamheten utifrån de processer som skapar värde för kunden.", "incorrectReasoning":null},
  {"text": "Att ha detaljerade instruktioner för varje arbetsmoment.", "incorrectReasoning":"Instruktioner är viktiga, men processorientering handlar om ett *övergripande* perspektiv."},
  {"text": "Att enbart fokusera på slutprodukten.", "incorrectReasoning": "Processorientering handlar om *hur* produkten skapas, inte bara resultatet."}
  ],
  "correctAnswer": 1,
  "shortReasoning": "Fokus på processerna, inte funktionerna.",
  "longReasoning": "Processorientering innebär att man organiserar, leder och styr verksamheten utifrån de *processer* (kedjor av aktiviteter) som skapar värde för kunden. Istället för att fokusera på enskilda funktioner eller avdelningar (t.ex. inköp, produktion, försäljning), fokuserar man på *flödet* av aktiviteter genom hela organisationen."
},
{
   "question": "Vad är en 'mätpunkt' i en process?",
   "answers":[
    {"text": "En person som utför mätningar.", "incorrectReasoning": "Detta är en mättekniker, inte en mätpunkt."},
    {"text":"En specifik punkt i processen där man mäter en eller flera egenskaper för att styra och kontrollera processen.", "incorrectReasoning": null},
    {"text": "Ett mätinstrument.", "incorrectReasoning": "Mätinstrument *används* vid mätpunkten, men är inte själva mätpunkten."},
    {"text":"En toleransgräns.", "incorrectReasoning": "Toleransgränser anger *tillåtna* värden, mätpunkter är där man *mäter*."}
   ],
   "correctAnswer": 1,
   "shortReasoning": "Mätpunkt = där man mäter i processen.",
   "longReasoning": "En mätpunkt är en *specifik punkt* i en process där man *mäter* en eller flera egenskaper (variabler) hos produkten, processen eller materialet. Mätpunkterna väljs utifrån vad som är kritiskt för att styra och kontrollera processen och säkerställa att slutresultatet uppfyller kraven."
  },
{
    "question":"Vad är skillnaden mellan 'styrning' och 'kontroll' i produktionen?",
    "answers": [
        { "text": "Styrning är förebyggande, kontroll är efterkontroll.", "incorrectReasoning": "Detta är en viktig skillnad." },
        { "text": "Styrning syftar till att hålla processen nära ett målvärde, medan kontroll syftar till att se till att produkten ligger inom toleransgränserna.", "incorrectReasoning": null },
        { "text": "Styrning är mer detaljerad än kontroll.", "incorrectReasoning": "Båda kan vara detaljerade, men de har olika syften." },
		{ "text": "Styrning görs av chefer, kontroll görs av operatörer.", "incorrectReasoning": "Både chefer och operatörer kan vara involverade i både styrning och kontroll." }
    ],
    "correctAnswer": 1,
    "shortReasoning": "Styrning: nära målvärde. Kontroll: inom tolerans.",
    "longReasoning": "*Styrning* syftar till att *aktivt påverka* processen så att den producerar resultat som ligger så *nära ett specifikt målvärde* som möjligt. Man justerar kontinuerligt processparametrar för att minimera avvikelser från målvärdet. *Kontroll* syftar till att *verifiera* att produkten eller processen uppfyller de *specificerade kraven* (t.ex. att måtten ligger inom toleransgränserna). Man jämför det faktiska resultatet med de tillåtna gränserna och godkänner eller underkänner produkten."
 },
 {
  "question": "Vad är ett 'styrdiagram'?",
  "answers":[
  {"text": "En ritning av produkten.", "incorrectReasoning": "Styrdiagram visar *processdata*, inte produktens utseende."},
   {"text": "Ett diagram som används för att följa upp och styra en process, med övre och undre styrgränser.", "incorrectReasoning":null},
   {"text":"En lista över alla anställda.", "incorrectReasoning":"Detta är en personalförteckning."},
   {"text":"En instruktion för hur man startar en maskin.", "incorrectReasoning": "Detta är en arbetsinstruktion, inte ett styrdiagram."}
  ],
  "correctAnswer": 1,
  "shortReasoning": "Styrdiagram = processövervakning över tid.",
  "longReasoning": "Ett styrdiagram är ett diagram som används för att *följa upp och styra en process över tid*. Man mäter regelbundet en eller flera variabler (t.ex. mått, temperatur) och plottar in värdena i diagrammet. Styrdiagrammet har en *centrallinje* (ofta målvärdet) och *övre och undre styrgränser*. Styrgränserna är *inte* toleransgränser, utan *beslutsgränser* som anger när man ska agera och justera processen."
 },
 {
    "question":"Vad är en normalfördelningskurva?",
     "answers":[
     {"text": "En kurva som visar hur ofta olika fel uppträder.", "incorrectReasoning": "Detta är en annan typ av diagram."},
     {"text":"En klockformad kurva som visar hur mätvärden ofta fördelar sig runt ett medelvärde.", "incorrectReasoning": null},
     {"text": "En kurva som visar trender over tid.", "incorrectReasoning":"Detta är en annan typ av diagram."},
     {"text": "En kurva som används för att styra en maskin.", "incorrectReasoning": "Styrdiagram används for styrning, men normalfördelningskurvan är en statistisk fördelning."}
     ],
    "correctAnswer": 1,
    "shortReasoning": "Klockformad kurva, vanlig fördelning.",
    "longReasoning": "En normalfördelningskurva (även kallad Gausskurva) är en klockformad, symmetrisk kurva som beskriver hur mätvärden ofta fördelar sig runt ett medelvärde. Många naturliga och industriella processer ger mätvärden som är ungefär normalfördelade."
 },{
  "question": "Vad är 'Pareto-principen' (80/20-regeln)?",
  "answers": [
    { "text": "Att 80 % av produkterna är felfria.", "incorrectReasoning": "Detta är en specifik tillämpning, inte den generella principen." },
    { "text": "Att 20 % av orsakerna ofta står för 80 % av effekterna.", "incorrectReasoning": null },
    { "text": "Att 80 % av arbetstiden går åt till planering.", "incorrectReasoning": "Detta är en specifik tillämpning, inte den generella principen." },
    { "text": "Att man ska arbeta 80 % av tiden och vila 20 %.", "incorrectReasoning": "Detta är inte innebörden av Pareto-principen." }
  ],
  "correctAnswer": 1,
  "shortReasoning": "80/20-regeln = få orsaker, stor effekt.",
  "longReasoning": "Pareto-principen, även kallad 80/20-regeln, är en generell princip som säger att i många situationer så står en *liten andel* av orsakerna (ca 20 %) för en *stor andel* av effekterna (ca 80 %). Exempel: 20% av kunderna står för 80% av intäkterna, 20% av felorsakerna står för 80% av felen, etc. Principen är inte exakt, men en användbar tumregel."
},
{
"question":"Vad används ett *Pareto-diagram* till?",
 "answers":[
  {"text": "Att visa hur en process flödar.", "incorrectReasoning": "Detta görs med ett flödesschema."},
  {"text": "Att visa trender över tid.", "incorrectReasoning":"Detta görs med ett tidsseriediagram."},
  {"text": "Att prioritera problem eller orsaker, genom att visa vilka som är mest betydelsefulla.", "incorrectReasoning": null},
  {"text":"Att visa hur mätvärden är fördelade.", "incorrectReasoning":"Detta görs med ett histogram."}
 ],
 "correctAnswer": 2,
 "shortReasoning": "Pareto-diagram = prioritera problem.",
 "longReasoning": "Ett Pareto-diagram är en typ av stapeldiagram som används för att *prioritera* problem, orsaker eller feltyper. Staplarna, som representerar *frekvensen* eller *kostnaden* för de olika problemen, är ordnade i *fallande ordning* från vänster till höger. Detta gör det visuellt tydligt vilka problem som är *mest betydelsefulla* och bör åtgärdas först (enligt Pareto-principen)."
},
{
"question": "Vad är skillnaden mellan *kroniska* och *sporadiska* störningar i produktionen?",
"answers":[
  {"text": "Kroniska störningar är allvarligare än sporadiska.", "incorrectReasoning": "Allvarlighetsgraden är inte den definierande skillnaden."},
  {"text": "Kroniska störningar är återkommande, medan sporadiska störningar är mer sällsynta och oförutsägbara.", "incorrectReasoning":null},
  {"text": "Kroniska störningar orsakas av maskinfel, medan sporadiska störningar orsakas av mänskliga fel.", "incorrectReasoning":"Orsaken kan variera."},
  {"text": "Det är ingen skillnad, de betyder samma sak.", "incorrectReasoning": "Det finns en tydlig skillnad i frekvens och förutsägbarhet."}
],
"correctAnswer": 1,
"shortReasoning": "Kroniska = återkommande. Sporadiska = sällsynta.",
"longReasoning": "*Kroniska störningar* är problem eller fel som uppträder *återkommande* och *regelbundet*. De är ofta mindre, men eftersom de inträffar ofta kan de ha stor sammanlagd effekt. *Sporadiska störningar* är mer *sällsynta* och *oförutsägbara* händelser, som kan vara allvarliga men som inte inträffar regelbundet."
},
{
"question":"Vad menas med 'styrning mot målvärde'?",
"answers": [
  {"text": "Att man bara kontrollerar att produkterna är inom tolerans.", "incorrectReasoning": "Detta är traditionell kontroll, inte målstyrning."},
  {"text": "Att man kontinuerligt justerar processen för att ligga så nära ett idealvärde som möjligt.", "incorrectReasoning": null},
  {"text": "Att man sätter upp ett produktionsmål för dagen.", "incorrectReasoning": "Detta är en del av planeringen, men inte specifikt målstyrning."},
  {"text":"Att man kontrollerar produkten först efter att hela partiet är tillverkat", "incorrectReasoning": "Målstyrning innebär *kontinuerlig* justering."}
  ],
  "correctAnswer": 1,
  "shortReasoning": "Kontinuerlig justering mot idealvärdet.",
  "longReasoning": "Styrning mot målvärde innebär att man, istället för att enbart acceptera alla produkter som ligger inom toleransgränserna, *kontinuerligt* strävar efter att *minimera avvikelsen* från ett *idealt värde* (målvärdet). Man justerar processen löpande för att komma så nära målvärdet som möjligt."
},
{
  "question": "Vad kallas en förteckning över *alla* moment som ingår i en tillverkningsprocess, med tidsangivelser för varje moment?",
  "answers":[
   {"text":"En ritning.", "incorrectReasoning":"En ritning visar *produkten*, inte processen."},
   {"text": "En operationslista.", "incorrectReasoning": null},
   {"text":"En materiallista.", "incorrectReasoning": "En materiallista visar *material*, inte moment."},
   {"text":"En kvalitetsplan.", "incorrectReasoning": "En kvalitetsplan är mer övergripande."}
  ],
  "correctAnswer": 1,
  "shortReasoning": "Operationslista.",
  "longReasoning": "En operationslista (eller operationsföljd) är ett dokument som listar *alla* de moment (operationer) som ingår i tillverkningsprocessen för en viss produkt eller detalj, i den *ordning* de ska utföras. Den anger också *tidsåtgången* (stycktid, ställtid) för varje operation, och ofta även vilka *maskiner* och *verktyg* som ska användas. Operationslistan är ett centralt underlag för produktionsplanering och kalkylering."
},
{
"question": "Vad menas med 'stycktid'?",
  "answers":[
  {"text":"Den tid det tar att ställa om en maskin.", "incorrectReasoning": "Detta är ställtiden."},
  {"text": "Den tid det tar att tillverka *en* detalj.", "incorrectReasoning":null},
  {"text":"Den totala tiden det tar att tillverka ett parti.", "incorrectReasoning": "Detta är den totala produktionstiden."},
  {"text": "Den tid det tar att kontrollera en detalj.", "incorrectReasoning":"Detta är kontrolltiden."}
  ],
  "correctAnswer": 1,
  "shortReasoning": "Stycktid = tid per detalj.",
  "longReasoning": "Stycktid är den tid det tar att *tillverka en enskild detalj* (eller utföra en operation på en detalj). Det är alltså tiden per styck, exklusive ställtid."
},
{
  "question": "Vad menas med 'ställtid'?",
   "answers":[
      {"text": "Den tid det tar att tillverka en detalj.", "incorrectReasoning":"Detta är stycktiden."},
      {"text": "Den tid det tar att förbereda en maskin för en ny produktionsomgång.", "incorrectReasoning": null},
      {"text": "Den tid det tar att transportera material.", "incorrectReasoning": "Detta är transporttid."},
      {"text":"Den tid det tar att kontrollera en detalj.", "incorrectReasoning":"Detta är kontrolltid."}
   ],
   "correctAnswer": 1,
   "shortReasoning": "Ställtid = förberedelsetid för ny produkt.",
   "longReasoning": "Ställtid (eller omställningstid) är den tid det tar att *förbereda* en maskin eller produktionslina för att börja tillverka en *ny* typ av produkt eller detalj. Detta kan inkludera byte av verktyg, fixturer, program, inställningar, rengöring, etc. Ställtiden är oberoende av hur *många* detaljer som sedan tillverkas."
},
{
"question":"Vad är en 'produktkalkyl'?",
 "answers":[
  {"text": "En ritning av produkten.", "incorrectReasoning": "En ritning visar produkten, men inte kostnaderna."},
  {"text": "En beräkning av produktens kostnader och/eller försäljningspris.", "incorrectReasoning": null},
  {"text": "En lista över alla material som ingår i produkten.", "incorrectReasoning": "Detta är en materiallista/stycklista."},
  {"text": "En instruktion för hur produkten ska tillverkas.", "incorrectReasoning": "Detta är en operationslista/arbetsinstruktion."}
  ],
  "correctAnswer": 1,
  "shortReasoning": "Produktkalkyl = kostnadsberäkning.",
  "longReasoning": "En produktkalkyl är en beräkning av *kostnaderna* för att tillverka en produkt, och/eller en beräkning av det *försäljningspris* som behövs för att täcka kostnaderna och ge önskad vinst. En produktkalkyl kan göras i förväg (förkalkyl) för att bedöma lönsamheten, eller i efterhand (efterkalkyl) för att se hur det faktiskt gick."
},
{
  "question": "Vad är skillnaden mellan 'direkta' och 'indirekta' kostnader i en produktkalkyl?",
   "answers": [
     {"text": "Direkta kostnader är fasta, indirekta kostnader är rörliga.", "incorrectReasoning": "Detta är en annan typ av kostnadsindelning."},
     {"text": "Direkta kostnader kan direkt hänföras till en specifik produkt, medan indirekta kostnader är gemensamma för flera produkter.", "incorrectReasoning": null},
     {"text": "Direkta kostnader är materialkostnader, indirekta kostnader är lönekostnader.", "incorrectReasoning":"Både material och löner kan vara direkta eller indirekta."},
     {"text": "Direkta kostnader är stora, indirekta kostnader är små.", "incorrectReasoning":"Storleken är inte det avgörande."}
   ],
   "correctAnswer": 1,
   "shortReasoning": "Direkta = kopplade till specifik produkt. Indirekta = gemensamma.",
   "longReasoning": "*Direkta kostnader* är kostnader som kan *direkt hänföras* till en *specifik produkt* (eller order, eller kostnadsbärare). Exempel: direkt material (som ingår i produkten), direkt lön (för arbete som utförs på just den produkten). *Indirekta kostnader* (även kallade *omkostnader*) är kostnader som är *gemensamma* för *flera* produkter eller aktiviteter, och som inte direkt kan hänföras till en specifik produkt. Exempel: lokalhyra, administration, maskinunderhåll, indirekt material (förbrukningsmaterial)."
},
{
  "question":"Vad av följande är exempel på en *direkt* kostnad för en tillverkad produkt?",
   "answers": [
      {"text": "Hyra för fabrikslokalen.", "incorrectReasoning": "Detta är en indirekt kostnad (omkostnad)."},
      {"text": "Lön till företagets VD.", "incorrectReasoning":"Detta är en indirekt kostnad (administrationskostnad)."},
      {"text":"Kostnaden för materialet som ingår i produkten.", "incorrectReasoning": null},
      {"text": "Kostnaden för elförbrukningen i fabriken.", "incorrectReasoning": "Detta är en indirekt kostnad som fördelas."}
   ],
  "correctAnswer": 2,
  "shortReasoning": "Direkt material.",
  "longReasoning": "Kostnaden för det *material som ingår i produkten* (råmaterial, komponenter) är en *direkt kostnad*. Den kan direkt hänföras till den specifika produkten. De andra alternativen är exempel på *indirekta kostnader* (omkostnader) som är gemensamma för flera produkter och måste fördelas på något sätt."
},
{
  "question":"Vad är en 'omkostnad'?",
    "answers":[
    {"text": "Samma sak som en direkt kostnad.", "incorrectReasoning": "Omkostnader är *indirekta* kostnader."},
    {"text": "En kostnad som inte är nödvändig.", "incorrectReasoning": "Omkostnader är nödvändiga, även om man vill minimera dem."},
    {"text":"En kostnad som är gemensam för flera produkter eller aktiviteter.", "incorrectReasoning": null},
    {"text": "En kostnad som är lägre än budgeterat.", "incorrectReasoning":"Detta är en positiv avvikelse, inte en definition av omkostnad."}
    ],
    "correctAnswer": 2,
    "shortReasoning": "Omkostnad = gemensam kostnad.",
    "longReasoning": "En omkostnad (eller indirekt kostnad) är en kostnad som *inte* direkt kan hänföras till en specifik produkt eller order, utan som är *gemensam* för flera produkter, aktiviteter eller avdelningar. Exempel på omkostnader är hyra för lokaler, administration, maskinunderhåll, städning, och löner till personal som inte arbetar direkt med produktionen."
  },
{
      "question": "Vad menas med 'material i arbete' (MIA)?",
      "answers": [
        { "text": "Material som har levererats till företaget, men ännu inte använts.", "incorrectReasoning": "Detta är råmateriallager." },
        { "text": "Material som håller på att bearbetas, eller som ligger mellan operationer i tillverkningsprocessen.", "incorrectReasoning": null },
        { "text": "Färdiga produkter som väntar på leverans.", "incorrectReasoning": "Detta är färdigvarulager." },
        { "text": "Material som har kasserats på grund av fel.", "incorrectReasoning": "Detta är kasserat material." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "MIA = material under bearbetning.",
      "longReasoning": "Material i arbete (MIA) är material (råmaterial, komponenter, halvfabrikat) som har *påbörjats bearbetning* i tillverkningsprocessen, men som *ännu inte är färdiga produkter*. Det är alltså material som befinner sig *mellan* olika operationer eller bearbetningssteg. MIA utgör en form av lager och binder kapital."
    },
{
     "question": "Vad är en 'flaskhals' i en produktionsprocess?",
      "answers": [
          { "text": "En maskin som är trasig.", "incorrectReasoning": "En trasig maskin kan vara en flaskhals, men det är inte definitionen." },
          { "text": "En resurs (maskin, arbetsstation) vars kapacitet begränsar hela processens kapacitet.", "incorrectReasoning": null },
          { "text": "En produkt som är svår att tillverka.", "incorrectReasoning": "Flaskhalsen är en *begränsning i processen*, inte produkten." },
          { "text": "En brist på material.", "incorrectReasoning": "Materialbrist kan *orsaka* en flaskhals, men är inte definitionen." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Flaskhals = begränsande resurs.",
      "longReasoning": "En flaskhals i en produktionsprocess är en resurs (maskin, arbetsstation, avdelning) vars *kapacitet* är *lägre* än efterfrågan på den resursen. Flaskhalsen begränsar därmed hela processens kapacitet och genomströmning, precis som en flaskhals begränsar flödet av vätska."
},
 {
     "question":"Vad menas med 'Lean Production'?",
     "answers": [
        {"text":"Att tillverka produkter med så låg vikt som möjligt", "incorrectReasoning":"Detta är en möjlig tolkning, men inte kärnan i Lean Production."},
        {"text": "Att tillverka produkter med så få anställda som möjligt.", "incorrectReasoning":"Detta kan vara en *effekt* av Lean, men inte huvudsyftet."},
        {"text":"Ett produktionssystem som fokuserar på att eliminera slöseri och skapa ett effektivt flöde.", "incorrectReasoning":null},
        {"text": "Att använda så lite material som möjligt.", "incorrectReasoning": "Detta är en del av Lean, men inte hela konceptet."}
     ],
     "correctAnswer": 2,
     "shortReasoning": "Lean Production = eliminera slöseri, effektivisera.",
     "longReasoning": "Lean Production (eller 'lean manufacturing', 'mager produktion') är en filosofi och en uppsättning principer för att organisera och styra produktionen. Det centrala är att *eliminera alla former av slöseri* (aktiviteter som inte tillför värde för kunden) och att skapa ett *effektivt flöde* av material och information genom hela produktionsprocessen. Lean Production härstammar från Toyota Production System (TPS)."
 },
{
     "question": "Vad är *inte* en typisk egenskap/fördel med Lean Production, jämfört med traditionell massproduktion?",
      "answers": [
       {"text":"Kortare ledtider.", "incorrectReasoning": "Lean Production strävar efter korta ledtider."},
       {"text": "Mindre lager.", "incorrectReasoning":"Lean Production strävar efter minimala lager."},
       {"text": "Högre flexibilitet.", "incorrectReasoning": "Lean Production kan vara mycket flexibelt."},
       {"text": "Större slöseri.", "incorrectReasoning": null}
      ],
      "correctAnswer": 3,
      "shortReasoning": "Lean Production minskar slöseri.",
      "longReasoning": "Lean Production syftar till att *minimera* alla former av slöseri (t.ex. överproduktion, väntetider, transporter, lager, defekter). De andra alternativen (kortare ledtider, lägre lager, högre flexibilitet) är alla typiska *fördelar* och egenskaper hos Lean Production jämfört med traditionell massproduktion."
},
{
  "question":"Vilken av följande förkortningar står INTE för 'Design For...'?",
  "answers":[
   {"text":"DFA", "incorrectReasoning": "Design For Assembly."},
   {"text":"DFM", "incorrectReasoning": "Design For Manufacturing."},
   {"text":"DFS", "incorrectReasoning": "Design For Service."},
   {"text": "CNC", "incorrectReasoning": null}
  ],
  "correctAnswer": 3,
  "shortReasoning": "CNC är en typ av maskinstyrning.",
  "longReasoning": "DFA (Design For Assembly), DFM (Design For Manufacturing) och DFS (Design for Service) är alla exempel på 'Design For X'-metoder, där X representerar en viss aspekt av produktens livscykel eller egenskaper. CNC (Computer Numerical Control) är en teknik för att styra verktygsmaskiner med datorer, inte en 'Design For...'-metod."
 },
 {
"question":"Vad står 'CAD' för?",
  "answers":[
    {"text": "Computer-Aided Design.", "incorrectReasoning": null},
    {"text": "Computer-Assisted Drawing.", "incorrectReasoning": "CAD är mer än bara ritning."},
    {"text":"Central Automated Drafting.", "incorrectReasoning":"Det korrekta är Computer-Aided Design."},
    {"text":"Cost Analysis and Design", "incorrectReasoning": "Det korrekta är Computer-Aided Design."}
  ],
   "correctAnswer": 0,
   "shortReasoning": "CAD = Computer-Aided Design.",
   "longReasoning": "CAD står för Computer-Aided Design, alltså datorstödd konstruktion. CAD-system används för att skapa, modifiera, analysera och optimera tekniska ritningar och modeller, oftast i 3D."
},
 {
    "question": "Vad står 'CAM' för?",
     "answers":[
      {"text": "Computer-Aided Manufacturing.", "incorrectReasoning": null},
      {"text":"Computer-Assisted Machining.", "incorrectReasoning":"CAM är bredare än bara bearbetning."},
      {"text":"Central Automated Manufacturing.", "incorrectReasoning":"Det korrekta är Computer-Aided Manufacturing."},
      {"text": "Cost Analysis and Manufacturing", "incorrectReasoning": "Det korrekta är Computer-Aided Manufacturing."}
     ],
     "correctAnswer": 0,
     "shortReasoning": "CAM = Computer-Aided Manufacturing.",
     "longReasoning": "CAM står för Computer-Aided Manufacturing, alltså datorstödd tillverkning. CAM-system används för att bereda (förbereda) konstruktioner för tillverkning, t.ex. genom att generera NC-kod (program för CNC-maskiner) från en CAD-modell."
  },
 {
  "question":"Vad är en viktig skillnad mellan en *ritning* och en *operationslista* (arbetsberedning)?",
    "answers": [
      {"text": "Ritningen visar *produkten*, operationslistan visar *processen*.", "incorrectReasoning": null},
      {"text":"Ritningen är gjord för hand, operationslistan är gjord i dator.", "incorrectReasoning": "Båda kan göras antingen för hand eller i dator."},
      {"text": "Ritningen är hemlig, operationslistan är offentlig.", "incorrectReasoning":"Sekretess beror på företaget, inte på dokumenttypen."},
      {"text": "Ritningen innehåller mått, operationslistan innehåller tider.", "incorrectReasoning": "Båda kan innehålla både mått och tider, men fokus är olika."}
     ],
   "correctAnswer": 0,
   "shortReasoning": "Ritning = produkt. Operationslista = process.",
   "longReasoning": "En *ritning* (konstruktionsritning) är en grafisk representation av *produkten* eller detaljen som ska tillverkas. Den visar produktens form, dimensioner, toleranser, material och andra specifikationer. En *operationslista* (eller arbetsberedning) beskriver *tillverkningsprocessen*, dvs. de steg (operationer) som ska utföras för att tillverka produkten. Den anger i vilken ordning operationerna ska göras, vilka maskiner och verktyg som ska användas, och tidsåtgången för varje operation."
},
  {
   "question":"Vad är ett exempel på information som kan finnas i ett *artikelregister* i ett affärssystem (ERP)?",
     "answers": [
      {"text":"En lista över alla anställda.", "incorrectReasoning": "Detta är en personalförteckning."},
      {"text": "En lista över alla kunder.", "incorrectReasoning": "Detta är ett kundregister."},
      {"text": "Information om leverantörer, priser och ledtider för artiklar.", "incorrectReasoning": null},
      {"text": "En ritning av produkten.", "incorrectReasoning": "Ritningar hanteras oftast separat, t.ex. i ett PDM-system."}
   ],
    "correctAnswer": 2,
    "shortReasoning": "Artikelregister = information om artiklar.",
    "longReasoning": "Ett artikelregister (eller artikeldatabas) i ett affärssystem (ERP-system) innehåller information om de *artiklar* som företaget hanterar (köper, tillverkar, säljer). Detta kan inkludera artikelnummer, benämningar, leverantörer, priser, ledtider, lagersaldon, produktstrukturer, etc."
  },
   {
  "question": "Vad är en 'operationslista' (även kallad arbetsberedning)?",
     "answers": [
        {"text": "En ritning av produkten.", "incorrectReasoning": "En ritning visar *produkten*, inte hur den ska tillverkas."},
        {"text": "En lista över alla anställda som arbetar med produkten.", "incorrectReasoning":"Detta är en personalförteckning."},
        {"text": "En detaljerad beskrivning av de arbetsmoment (operationer) som krävs för att tillverka produkten.", "incorrectReasoning": null},
        {"text": "En lista över alla material som ingår i produkten.", "incorrectReasoning":"Detta är en materiallista/stycklista."}
      ],
      "correctAnswer": 2,
      "shortReasoning": "Operationslista = beskrivning av tillverkningsprocessen.",
      "longReasoning": "En operationslista (eller arbetsberedning) är ett dokument som i detalj beskriver de *arbetsmoment (operationer)* som krävs för att tillverka en produkt eller en del av en produkt. Den anger i vilken *ordning* operationerna ska utföras, vilka *maskiner och verktyg* som ska användas, och ofta även *tidsåtgången* för varje operation."
   },
 {
    "question": "Vad är *inte* ett vanligt användningsområde för ett *styrdiagram*?",
     "answers": [
      {"text": "Att följa upp en process över tid.", "incorrectReasoning": "Detta är ett huvudsyfte med styrdiagram."},
      {"text":"Att upptäcka om en process är 'stabil' eller om det finns tecken på avvikelser.", "incorrectReasoning": "Detta är ett huvudsyfte med styrdiagram."},
      {"text": "Att fatta beslut om när man ska justera en process.", "incorrectReasoning":"Styrgränserna i diagrammet används för detta."},
      {"text": "Att rita en snygg bild av produkten.", "incorrectReasoning": null}
     ],
     "correctAnswer": 3,
     "shortReasoning": "Styrdiagram används för *processövervakning*, inte produktavbildning.",
     "longReasoning": "Styrdiagram används för att *övervaka och styra processer över tid*. De används *inte* för att rita bilder av *produkten*. De andra alternativen är alla vanliga användningsområden för styrdiagram: att följa upp en process, upptäcka avvikelser och fatta beslut om justeringar."
 },
  {
      "question": "Vad är skillnaden mellan en 'styrgräns' och en 'toleransgräns'?",
      "answers": [
        { "text": "Det är ingen skillnad, de betyder samma sak.", "incorrectReasoning": "De har olika syften." },
        { "text": "Styrgränser används för att styra processen, toleransgränser anger tillåtna värden för produkten.", "incorrectReasoning": null },
        { "text": "Styrgränser är bredare än toleransgränser.", "incorrectReasoning": "Styrgränser är oftast *snävare* än toleransgränser." },
        { "text": "Toleransgränser används för att styra processen, styrgränser anger tillåtna värden för produkten.", "incorrectReasoning": "Det är tvärtom." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Styrgräns = process. Toleransgräns = produkt.",
      "longReasoning": "Styrgränser och toleransgränser är *inte* samma sak. *Toleransgränser* anger de *tillåtna värdena* för en produktegenskap (t.ex. ett mått). *Styrgränser* används i *styrdiagram* för att *övervaka och styra en process*. Styrgränserna sätts oftast *snävare* än toleransgränserna, så att man kan upptäcka och korrigera avvikelser *innan* produkterna blir felaktiga."
  },
      {
      "question": "Vad är syftet med en *efterkalkyl*?",
      "answers": [
          { "text": "Att beräkna kostnaderna i förväg, innan produktionen startar.", "incorrectReasoning": "Detta är en *för*kalkyl." },
          { "text": "Att jämföra de faktiska kostnaderna med de planerade kostnaderna, efter att produktionen är avslutad.", "incorrectReasoning": null },
          { "text": "Att bestämma försäljningspriset.", "incorrectReasoning": "Försäljningspriset kan påverkas av kalkylen, men efterkalkylen görs *efter* produktionen." },
          { "text": "Att planera inköp av material.", "incorrectReasoning": "Detta görs i förväg, innan produktionen." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Efterkalkyl = jämföra faktiska och planerade kostnader.",
      "longReasoning": "En efterkalkyl görs *efter* att produktionen är avslutad. Syftet är att jämföra de *faktiska* kostnaderna (och intäkterna) med de *planerade* kostnaderna (och intäkterna) som beräknades i *för*kalkylen. Detta ger underlag för att utvärdera hur väl produktionen har fungerat, och för att förbättra framtida kalkyler och beslut."
  },
{
  "question":"Vad är den huvudsakliga skillnaden mellan 'styrning' och 'kontroll' i produktionen?",
    "answers":[
      {"text": "Styrning är mer detaljerad än kontroll.", "incorrectReasoning": "Båda kan vara detaljerade, men har olika syften."},
      {"text": "Styrning syftar till att hålla processen nära ett *målvärde*, medan kontroll syftar till att se till att produkten ligger inom *toleransgränser*.", "incorrectReasoning": null},
      {"text": "Styrning görs av chefer, kontroll görs av operatörer.", "incorrectReasoning": "Båda kan utföras av olika personer."},
      {"text": "Styrning är förebyggande, kontroll är en efterhandskontroll.", "incorrectReasoning": "Det stämmer bra, men det finns en tydligare skillnad i fokus."}
     ],
    "correctAnswer": 1,
    "shortReasoning": "Styrning: mot målvärde. Kontroll: inom tolerans.",
    "longReasoning": "Den huvudsakliga skillnaden är *fokus*. *Styrning* (eller *processstyrning*) syftar till att *aktivt påverka* processen så att den producerar resultat som ligger så *nära ett specifikt målvärde* (idealvärde) som möjligt. Man justerar *kontinuerligt* processparametrar för att minimera avvikelser. *Kontroll* syftar till att *verifiera* att produkten (eller processen) uppfyller de *specificerade kraven* (t.ex. att måtten ligger inom *toleransgränserna*). Man jämför det faktiska resultatet med de tillåtna gränserna, och godkänner eller underkänner."
},
{
"question":"Vad menas med begreppet 'kapitalbindning'?",
 "answers":[
 {"text": "Att man har lånat pengar.", "incorrectReasoning": "Lån kan vara en *orsak* till kapitalbindning, men inte definitionen."},
 {"text":"Att pengar är 'bundna' i t.ex. lager, material i arbete och utrustning, och inte kan användas till annat.", "incorrectReasoning":null},
 {"text":"Att man har sparat pengar på banken.", "incorrectReasoning":"Sparande är en form av kapitalanvändning, men kapitalbindning i detta sammanhang handlar om produktionsprocessen."},
 {"text": "Att man har betalat alla sina skulder.", "incorrectReasoning":"Detta är motsatsen till kapitalbindning."}
 ],
"correctAnswer": 1,
"shortReasoning": "Kapital bundet i produktionen.",
"longReasoning": "Kapitalbindning innebär att företagets pengar (kapital) är 'bundna' i olika tillgångar som *inte* omedelbart kan användas för andra ändamål. Exempel på kapitalbindning i produktionen är: *lager* av råmaterial, halvfabrikat och färdiga produkter, *material i arbete* (produkter som påbörjats men inte avslutats), och investeringar i *maskiner och utrustning*. Hög kapitalbindning kan vara negativt eftersom det minskar företagets likviditet och handlingsutrymme."
}
]
  },
  {
    "name": "Mätteknik del A",
    "source": "",
    "questions": [
      {
        "question": "Vad kallas det att själv jämföra mätvärden mot en känd referens?",
        "answers": [
          { "text": "Kalibrering", "incorrectReasoning": "Kalibrering är en bredare term, egenkontroll är en enklare form av kalibrering." },
          { "text": "Egenkontroll", "incorrectReasoning": null },
          { "text": "Justering", "incorrectReasoning": "Justering syftar oftast på att ändra ett instruments visning, inte bara jämföra." },
          { "text": "Verifiering", "incorrectReasoning": "Verifiering är mer formellt och omfattande än enkel egenkontroll." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Egenkontroll definieras som att själv jämföra mätvärden mot en känd referens.",
        "longReasoning": "Enligt texten definieras egenkontroll som just handlingen att själv jämföra mätvärden med en känd referens för att säkerställa noggrannhet. Det är en grundläggande form av kvalitetskontroll och kalibrering."
      },
      {
        "question": "Vilka industrier omfattas av processindustrin enligt texten?",
        "answers": [
          { "text": "Bara livsmedelsindustri och läkemedelsindustri", "incorrectReasoning": "Processindustrin omfattar många fler industrier än bara livsmedel och läkemedel." },
          { "text": "Alla industriföretag som förvandlar resurser till nya produkter", "incorrectReasoning": null },
          { "text": "Endast tillverkningsindustrin av maskiner", "incorrectReasoning": "Maskintillverkning är inte den primära fokusen för processindustrin." },
          { "text": "Bara företag som hanterar kemikalier", "incorrectReasoning": "Kemikaliehantering är en del, men inte hela processindustrin." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Processindustrin definieras som alla företag som omvandlar resurser till produkter.",
        "longReasoning": "Texten beskriver processindustrin som omfattande alla industriföretag som förvandlar råmaterial och resurser till nya produkter. Exempel som papper, massa, stål, gruvbrytning, läkemedel, kemi och petroleum nämns."
      },
      {
        "question": "Vilken typ av I/O-signaler är vanligast inom processindustrin enligt texten?",
        "answers": [
          { "text": "Digitala I/O", "incorrectReasoning": "Analoga I/O, särskilt 4-20 mA strömslingor, är vanligare för analoga signaler." },
          { "text": "Analoga I/O", "incorrectReasoning": null },
          { "text": "Pulser", "incorrectReasoning": "Pulser nämns som förekommande, men inte som den vanligaste typen av I/O." },
          { "text": "Trådlösa signaler", "incorrectReasoning": "Trådlösa signaler nämns inte i texten och är inte den traditionellt vanligaste typen." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Analoga I/O, särskilt 4-20 mA strömslingor, nämns som vanliga.",
        "longReasoning": "Texten anger att de flesta I/O inom processindustrin är analoga eller digitala, och att analoga I/O-signaler ofta använder 0-10 V eller 4-20 mA strömslinga, där 4-20 mA strömslinga beskrivs som 'kanske vanligast'."
      },
      {
        "question": "Varför var 4-20 mA strömslingor populära inom processindustrin?",
        "answers": [
          { "text": "De var billigare än 0-10V", "incorrectReasoning": "Texten nämner inte kostnaden som anledning till popularitet." },
          { "text": "De var enklare att installera", "incorrectReasoning": "Texten nämner inte installationsenkelt som anledning." },
          { "text": "De kunde enkelt styra hydraulik", "incorrectReasoning": null },
          { "text": "De var mer exakta än 0-10V", "incorrectReasoning": "Texten nämner inte precision som anledning." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "Texten nämner att 4-20 mA strömslingor enkelt kunde styra hydraulik.",
        "longReasoning": "Enligt texten var 4-20 mA strömslingor populära inom processindustrin eftersom de 'enkelt kan styra hydraulik'.  Även om de nu används bredare, var deras initiala popularitet kopplad till hydraulstyrning."
      },
      {
        "question": "Vad är en audiofrekvens?",
        "answers": [
          { "text": "En frekvens som är för hög för att höras", "incorrectReasoning": "Audiofrekvenser är hörbara frekvenser." },
          { "text": "En periodisk vibration vars frekvens är hörbar för människor", "incorrectReasoning": null },
          { "text": "En frekvens under 20 Hz", "incorrectReasoning": "Frekvenser under 20 Hz är infraljud, inte audiofrekvenser." },
          { "text": "En frekvens över 20 000 Hz", "incorrectReasoning": "Frekvenser över 20 000 Hz är ultraljud, inte audiofrekvenser." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Audiofrekvens definieras som en hörbar periodisk vibration.",
        "longReasoning": "Texten definierar audiofrekvens (ljudfrekvens eller hörbar frekvens) som 'en periodisk vibration vars frekvens är hörbar för den genomsnittliga människan'."
      },
      {
        "question": "Vilken enhet används för frekvens?",
        "answers": [
          { "text": "Volt (V)", "incorrectReasoning": "Volt är en enhet för spänning." },
          { "text": "Ampere (A)", "incorrectReasoning": "Ampere är en enhet för ström." },
          { "text": "Hertz (Hz)", "incorrectReasoning": null },
          { "text": "Watt (W)", "incorrectReasoning": "Watt är en enhet för effekt." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "Hertz (Hz) är SI-enheten för frekvens.",
        "longReasoning": "Texten anger att 'SI-enheten för frekvens är hertz (Hz)'. Detta är den internationella standardenheten för att mäta frekvens."
      },
      {
        "question": "Vad är det allmänt accepterade standardhörselområdet för människor?",
        "answers": [
          { "text": "1 Hz till 10 000 Hz", "incorrectReasoning": "Det nedre gränsen är för låg, och övre gränsen är för låg." },
          { "text": "20 Hz till 20 000 Hz", "incorrectReasoning": null },
          { "text": "100 Hz till 100 000 Hz", "incorrectReasoning": "Både nedre och övre gränserna är för höga." },
          { "text": "1000 Hz till 30 000 Hz", "incorrectReasoning": "Både nedre och övre gränserna är för höga." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Standardhörselområdet är 20 Hz till 20 000 Hz.",
        "longReasoning": "Texten anger att 'Det allmänt accepterade standardhörselområdet för människor är 20 till 20 000 Hz'."
      },
      {
        "question": "Vad kallas ljudfrekvenser över 20 kHz?",
        "answers": [
          { "text": "Infraljud", "incorrectReasoning": "Infraljud är frekvenser under 20 Hz." },
          { "text": "Hörbart ljud", "incorrectReasoning": "Hörbart ljud ligger inom 20 Hz - 20 kHz." },
          { "text": "Ultradljud", "incorrectReasoning": null },
          { "text": "Mellanljud", "incorrectReasoning": "Mellanljud är inte ett standardterm inom akustik i detta sammanhang." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "Ljudfrekvenser över 20 kHz kallas ultraljud.",
        "longReasoning": "Texten avslutar audiofrekvensavsnittet med 'Ljudfrekvenser över 20 kHz kallas ultraljud'."
      },
      {
        "question": "Vad är reglerteknik?",
        "answers": [
          { "text": "En metod för att manuellt styra en process", "incorrectReasoning": "Reglerteknik är automatiserad styrning, inte manuell." },
          { "text": "En uppsättning metoder för att styra en aktuator baserat på mätvärden", "incorrectReasoning": null },
          { "text": "Enbart styrning av temperatur", "incorrectReasoning": "Reglerteknik är bredare än bara temperaturstyrning." },
          { "text": "Enbart styrning inom industrin", "incorrectReasoning": "Reglerteknik tillämpas även utanför industrin." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Reglerteknik definieras som metoder för att styra aktuatorer baserat på mätvärden.",
        "longReasoning": "Texten definierar reglerteknik som 'en uppsättning metoder för att styra en aktuator baserat på mätvärden från en eller flera sensorer, så att en fysisk storhet når nära ett önskat börvärde'."
      },
      {
        "question": "Vad är ett enkelt exempel på ett reglersystem som nämns i texten?",
        "answers": [
          { "text": "En diskmaskin", "incorrectReasoning": "Diskmaskiner nämns inte som exempel på reglersystem i texten." },
          { "text": "En termostat", "incorrectReasoning": null },
          { "text": "En mobiltelefon", "incorrectReasoning": "Mobiltelefoner nämns inte som exempel på reglersystem i texten." },
          { "text": "En TV", "incorrectReasoning": "TV-apparater nämns inte som exempel på reglersystem i texten." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Termostaten är exemplet på ett reglersystem i texten.",
        "longReasoning": "Texten ger exemplet 'Ett enkelt exempel på ett reglersystem är en termostat, där värmetillförseln styrs (med en on/off-regulator) så att temperaturen i en lokal ska uppnå det börvärde som användaren har ställt in'."
      },
      {
        "question": "Vad kallas det centrala begreppet inom reglerteknik som innebär att använda mätvärden för att styra systemet?",
        "answers": [
          { "text": "Framkoppling", "incorrectReasoning": "Framkoppling är motsatsen, styrning utan återkoppling." },
          { "text": "Återkoppling", "incorrectReasoning": null },
          { "text": "Manuell styrning", "incorrectReasoning": "Manuell styrning är inte ett begrepp inom reglerteknik i denna kontext." },
          { "text": "Sekvensstyrning", "incorrectReasoning": "Sekvensstyrning är en annan typ av styrning, inte centralt för återkoppling." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Återkoppling är det centrala begreppet inom reglerteknik.",
        "longReasoning": "Texten betonar att 'Ett centralt begrepp inom reglerteknik är återkoppling. Att använda sig av återkoppling benämns ofta reglering...'"
      },
      {
        "question": "Vad benämns motsatsen till reglering, alltså att inte använda återkoppling?",
        "answers": [
          { "text": "Styrning", "incorrectReasoning": null },
          { "text": "Reglering", "incorrectReasoning": "Reglering använder återkoppling." },
          { "text": "Egenkontroll", "incorrectReasoning": "Egenkontroll är jämförelse med referens, inte styrningstyp." },
          { "text": "Kalibrering", "incorrectReasoning": "Kalibrering är noggrannhetsjustering, inte styrningstyp." }
        ],
        "correctAnswer": 0,
        "shortReasoning": "Styrning är motsatsen till reglering och använder inte återkoppling.",
        "longReasoning": "Texten fortsätter '...och motsatsen - att inte använda sig av återkoppling - benämns ofta styrning'."
      },
      {
        "question": "Vad beskriver reglerfel inom reglerteknik?",
        "answers": [
          { "text": "Skillnaden mellan börvärde och ärvärde", "incorrectReasoning": null },
          { "text": "Skillnaden mellan två börvärden", "incorrectReasoning": "Reglerfel handlar om skillnaden mellan bör- och ärvärde." },
          { "text": "Skillnaden mellan två ärvärden", "incorrectReasoning": "Reglerfel handlar om skillnaden mellan bör- och ärvärde." },
          { "text": "Börvärdet i sig", "incorrectReasoning": "Börvärdet är målet, inte felet." }
        ],
        "correctAnswer": 0,
        "shortReasoning": "Reglerfel är skillnaden mellan börvärde och ärvärde.",
        "longReasoning": "Texten definierar 'Reglerfel är ett begrepp inom reglerteknik som beskriver skillnaden mellan det börvärde systemet skall hålla och det ärvärde systemet de facto håller'."
      },
      {
        "question": "Vad är börvärdet i exemplet med klimatanläggningen i en bil?",
        "answers": [
          { "text": "Den aktuella temperaturen i kupén", "incorrectReasoning": "Detta är ärvärdet, inte börvärdet." },
          { "text": "Den önskade kupétemperaturen inställd av föraren", "incorrectReasoning": null },
          { "text": "Temperaturen utanför bilen", "incorrectReasoning": "Utetemperaturen är inte börvärdet." },
          { "text": "Motortemperaturen", "incorrectReasoning": "Motortemperaturen är inte börvärdet för kupén." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Börvärdet är den önskade temperaturen inställd av föraren.",
        "longReasoning": "I exemplet med klimatanläggningen beskriver texten 'Börvärdet är det värde som föraren valt som önskad kupétemperatur'."
      },
      {
        "question": "Vad är ärvärdet i exemplet med klimatanläggningen i en bil?",
        "answers": [
          { "text": "Den önskade kupétemperaturen", "incorrectReasoning": "Detta är börvärdet." },
          { "text": "Temperaturen i kupén som systemet faktiskt uppnår", "incorrectReasoning": null },
          { "text": "Temperaturen utanför bilen", "incorrectReasoning": "Utetemperaturen är inte ärvärdet för kupén." },
          { "text": "Motortemperaturen", "incorrectReasoning": "Motortemperaturen är inte ärvärdet för kupén." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Ärvärdet är den faktiska temperaturen i kupén.",
        "longReasoning": "I samma exempel förklaras att 'temperaturen i kupén (ärvärdet) hamnar så nära börvärdet som möjligt'."
      },
      {
        "question": "Vad är en allmän benämning för börvärdet?",
        "answers": [
          { "text": "Ärvärde", "incorrectReasoning": "Ärvärde är den faktiska mätningen, inte målet." },
          { "text": "Reglerfel", "incorrectReasoning": "Reglerfel är skillnaden mellan bör- och ärvärde." },
          { "text": "Referenssignal", "incorrectReasoning": null },
          { "text": "Styrsignal", "incorrectReasoning": "Styrsignal är mer generellt och kan syfta på olika signaler." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "Referenssignal är en allmän benämning för börvärdet.",
        "longReasoning": "Texten avslutar reglerteknikdelen med 'Börvärdet benämns ofta r(t) eller SP (från SetPoint). En mer allmän benämning är referenssignal'."
      },
      {
        "question": "Vad kallas differensen mellan börvärdet och ärvärdet y(t)?",
        "answers": [
          { "text": "Tröghetsfaktor", "incorrectReasoning": "Tröghetsfaktor är relaterat till tid, inte skillnaden mellan värden." },
          { "text": "Regleravvikelse eller reglerfel", "incorrectReasoning": null },
          { "text": "Tidskonstant", "incorrectReasoning": "Tidskonstant är relaterat till tid, inte skillnaden mellan värden." },
          { "text": "Börvärde", "incorrectReasoning": "Börvärde är målvärdet, inte differensen." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Differensen kallas regleravvikelse eller reglerfel.",
        "longReasoning": "Texten definierar 'Differensen mellan börvärdet och ärvärdet y(t), kallas för regleravvikelse eller reglerfel'."
      },
      {
        "question": "Vad är tröghetsfaktor och tidskonstant ett mått på?",
        "answers": [
          { "text": "Hur snabbt ett system reagerar", "incorrectReasoning": "Det är ett mått på hur *lång* tid det tar." },
          { "text": "Hur lång tid en process tar", "incorrectReasoning": null },
          { "text": "Skillnaden mellan bör- och ärvärde", "incorrectReasoning": "Detta är reglerfel, inte tröghetsfaktor." },
          { "text": "Systemets noggrannhet", "incorrectReasoning": "Tröghetsfaktor handlar om tid, inte noggrannhet." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Tröghetsfaktor/tidskonstant är ett mått på processtid.",
        "longReasoning": "Texten förklarar 'Tröghetsfaktor och tidskonstant är ett mått på hur lång tid en process tar'."
      },
      {
        "question": "Vad händer i exemplet med den varma ugnen när man öppnar den?",
        "answers": [
          { "text": "Givaren visar direkt den nya temperaturen", "incorrectReasoning": "Det tar en stund innan givaren reagerar." },
          { "text": "Det tar en stund innan givaren visar att temperaturen har sjunkit", "incorrectReasoning": null },
          { "text": "Temperaturen i ugnen ökar direkt", "incorrectReasoning": "Temperaturen sjunker när ugnen öppnas." },
          { "text": "Givaren slutar fungera", "incorrectReasoning": "Givaren slutar inte fungera." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Givaren reagerar inte omedelbart på temperaturändringen.",
        "longReasoning": "Exemplet med ugnen illustrerar tröghetsfaktor: 'Tänk dig att du öppnar en varm ugn, det kommer att ta en stund innan givaren i ugnen känner av temperaturförändringen och visar att temperaturen har sjunkit'."
      },
      {
        "question": "Vad är en ytjämnhetsmätare även känd som?",
        "answers": [
          { "text": "En termometer", "incorrectReasoning": "Termometer mäter temperatur." },
          { "text": "En Ra-mätare", "incorrectReasoning": null },
          { "text": "En tryckgivare", "incorrectReasoning": "Tryckgivare mäter tryck." },
          { "text": "En flödesmätare", "incorrectReasoning": "Flödesmätare mäter flöde." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Ytjämnhetsmätare kallas även Ra-mätare.",
        "longReasoning": "Texten inleder ytjämnhetsmätaravsnittet med 'En ytjämnhetmätare, även känd som en Ra-mätare...'"
      },
      {
        "question": "Vad mäter en ytjämnhetsmätare?",
        "answers": [
          { "text": "Endast färgen på en yta", "incorrectReasoning": "Färg mäts inte av en ytjämnhetsmätare." },
          { "text": "Objektets ytstruktur och egenskaper", "incorrectReasoning": null },
          { "text": "Endast temperaturen på en yta", "incorrectReasoning": "Temperatur mäts inte av en ytjämnhetsmätare." },
          { "text": "Endast hårdheten på en yta", "incorrectReasoning": "Hårdhet mäts inte av en ytjämnhetsmätare." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Ytjämnhetsmätare mäter ytstruktur och egenskaper.",
        "longReasoning": "Texten fortsätter '...är ett instrument som mäter objektets ytstruktur och egenskaper...'"
      },
      {
        "question": "Vilka typer av mätning kan en ytjämnhetsmätare använda?",
        "answers": [
          { "text": "Endast beröringsmätning", "incorrectReasoning": "Den kan även mäta utan beröring." },
          { "text": "Beröring eller utan beröring", "incorrectReasoning": null },
          { "text": "Endast optisk mätning", "incorrectReasoning": "Beröringsmätning är också möjlig." },
          { "text": "Endast ultraljudsmätning", "incorrectReasoning": "Ultraljud nämns inte som metod för ytjämnhetsmätning i texten." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Ytjämnhetsmätare kan använda både beröring och beröringsfri mätning.",
        "longReasoning": "Texten specificerar '...antingen genom beröring eller utan beröring'."
      },
      {
        "question": "Ge exempel på parametrar som en ytjämnhetsmätare kan mäta.",
        "answers": [
          { "text": "Endast Ra", "incorrectReasoning": "Det finns flera parametrar, inte bara Ra." },
          { "text": "Ra, Rz, Rv, Rp, Rt", "incorrectReasoning": null },
          { "text": "Endast temperatur och tryck", "incorrectReasoning": "Dessa är inte ytjämnhetsparametrar." },
          { "text": "Endast flöde och nivå", "incorrectReasoning": "Dessa är inte ytjämnhetsparametrar." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Exempel på parametrar är Ra, Rz, Rv, Rp, Rt.",
        "longReasoning": "Texten nämner 'Mätning av ytjämnhet med hjälp av en ytjämnhetsmätare innefattar vanligtvis flera parametrar, såsom Ra, Rz, Rv, Rp, Rt och andra'."
      },
      {
        "question": "Varför är det viktigt att mäta ytjämnhet?",
        "answers": [
          { "text": "Enbart för att se bra ut", "incorrectReasoning": "Ytjämnhet har funktionella och prestandamässiga skäl." },
          { "text": "För att säkerställa att ytan är jämn och fri från oönskade defekter", "incorrectReasoning": null },
          { "text": "Enbart för att minska friktion", "incorrectReasoning": "Det finns fler anledningar än bara friktion." },
          { "text": "Enbart för att öka passformen", "incorrectReasoning": "Det finns fler anledningar än bara passform." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Ytjämnhet säkerställer jämnhet och defektfrihet för korrekt funktion.",
        "longReasoning": "Texten förklarar 'Man mäter ytjämnheten för att säkerställa att ytan på komponenten är tillräckligt jämn och fri från oönskade ojämnheter, defekter eller avvikelser'."
      },
      {
        "question": "Vilka aspekter av en komponents funktion kan påverkas av ojämnheter?",
        "answers": [
          { "text": "Endast färgen", "incorrectReasoning": "Färgen påverkas inte av ytjämnhet i denna kontext." },
          { "text": "Rörelse, passform, friktion och försegling", "incorrectReasoning": null },
          { "text": "Endast temperaturen", "incorrectReasoning": "Temperaturen påverkas inte direkt av ytjämnhet." },
          { "text": "Endast vikten", "incorrectReasoning": "Vikten påverkas inte av ytjämnhet." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Ojämnheter kan påverka rörelse, passform, friktion och försegling.",
        "longReasoning": "Texten anger 'Ojämnheter kan påverka komponentens rörelse, passform, friktion eller försegling, vilket kan leda till nedsatt funktion eller prestanda'."
      },
      {
        "question": "Vad är ytjämnhet även känt som?",
        "answers": [
          { "text": "Ythårdhet", "incorrectReasoning": "Ythårdhet är ett annat begrepp." },
          { "text": "Ytfinhet, ytstruktur, ytråhet och topografi", "incorrectReasoning": null },
          { "text": "Ytfärg", "incorrectReasoning": "Ytfärg är ett annat begrepp." },
          { "text": "Ytvikt", "incorrectReasoning": "Ytvikt är inte ett relevant begrepp i detta sammanhang." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Ytjämnhet är känt som ytfinhet, ytstruktur, ytråhet och topografi.",
        "longReasoning": "Texten förklarar 'Ytjämnhet, även känd som ytfinhet, ytstruktur, ytråhet och topografi...'"
      },
      {
        "question": "Vilka tre parametrar används ofta för att beskriva ytjämnheten på ett objekt?",
        "answers": [
          { "text": "Längd, bredd och höjd", "incorrectReasoning": "Dessa är dimensioner, inte ytjämnhetsparametrar." },
          { "text": "P-Profil, W-Profil och R-Profil", "incorrectReasoning": null },
          { "text": "Ra, Rz och Rt", "incorrectReasoning": "Dessa är specifika värden inom R-profil, men inte de övergripande profiltyperna." },
          { "text": "Temperatur, tryck och flöde", "incorrectReasoning": "Dessa är inte ytjämnhetsparametrar." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "P-Profil, W-Profil och R-Profil är de tre parametrarna.",
        "longReasoning": "Texten nämner 'När man beskriver ytjämnheten på ett objekt används ofta tre parametrar: P-Profil, W-Profil och R-Profil'."
      },
      {
        "question": "Vad står R-Profil för?",
        "answers": [
          { "text": "Primär profil", "incorrectReasoning": "Detta är P-Profil." },
          { "text": "Ytjämnhetsprofil", "incorrectReasoning": null },
          { "text": "Vågighetsprofil", "incorrectReasoning": "Detta är W-Profil." },
          { "text": "Referensprofil", "incorrectReasoning": "Referensprofil nämns inte i texten." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "R-Profil står för Ytjämnhetsprofil.",
        "longReasoning": "Texten förklarar 'R-Profil - Ytjämnhetsprofil som är den mest vanliga förekommande parametern'."
      },
      {
        "question": "Vad är OFP en förkortning för?",
        "answers": [
          { "text": "Oförstörande provning", "incorrectReasoning": null },
          { "text": "Förstörande provning", "incorrectReasoning": "FP står för förstörande provning." },
          { "text": "Optisk fiber provning", "incorrectReasoning": "Detta är inte relevant i kontexten." },
          { "text": "Oorganisk fysikalisk provning", "incorrectReasoning": "Detta är inte relevant i kontexten." }
        ],
        "correctAnswer": 0,
        "shortReasoning": "OFP står för Oförstörande provning.",
        "longReasoning": "Texten introducerar 'OFP (Oförstörande provning) är metoder...'"
      },
      {
        "question": "Vad är syftet med oförstörande provning?",
        "answers": [
          { "text": "Att förstöra produkten för att testa gränsen", "incorrectReasoning": "Detta är syftet med förstörande provning." },
          { "text": "Att avläsa material- eller produktegenskaper utan att skada produkten", "incorrectReasoning": null },
          { "text": "Att mäta produktens dimensioner", "incorrectReasoning": "Dimensioner mäts inte specifikt med OFP." },
          { "text": "Att öka produktens hållbarhet", "incorrectReasoning": "OFP testar, inte förbättrar, hållbarhet." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "OFP syftar till att testa utan att skada produkten.",
        "longReasoning": "Texten beskriver 'OFP (Oförstörande provning) är metoder för att avläsa material- eller produktegenskaper utan att skada produkten som provas'."
      },
      {
        "question": "I vilka situationer är oförstörande provning särskilt viktig?",
        "answers": [
          { "text": "Endast för billiga produkter", "incorrectReasoning": "OFP är viktigare för dyra och säkerhetskritiska produkter." },
          { "text": "För produkter med höga säkerhetskrav", "incorrectReasoning": null },
          { "text": "Endast för enkla konstruktioner", "incorrectReasoning": "OFP kan vara viktigt även för komplexa konstruktioner." },
          { "text": "För alla typer av produkter", "incorrectReasoning": "Även om användbart generellt, är det *särskilt* viktigt för säkerhetskritiska produkter." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "OFP är viktigt för produkter med höga säkerhetskrav.",
        "longReasoning": "Texten nämner 'Det handlar om att prova så kvaliteten är rätt i till exempel svetsen, materialet eller den övergripande konstruktionen för produkter med höga säkerhetskrav'."
      },
      {
        "question": "Vilka metoder används ofta för att kontrollera svetsar om de innehåller sprickor?",
        "answers": [
          { "text": "Endast visuell kontroll", "incorrectReasoning": "Visuell kontroll kan missa inre sprickor." },
          { "text": "Penetrantprovning och magnetpulverprovning", "incorrectReasoning": null },
          { "text": "Endast hårdhetsprovning", "incorrectReasoning": "Hårdhetsprovning detekterar inte sprickor direkt." },
          { "text": "Endast dragprovning", "incorrectReasoning": "Dragprovning är förstörande." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Penetrantprovning och magnetpulverprovning är metoder för sprickdetektering.",
        "longReasoning": "Texten ger exempel 'För att kontrollera om svetsen innehåller sprickor används ofta penetrantprovning och magnetpulverprovning'."
      },
      {
        "question": "Ge exempel på oförstörande provningsmetoder som nämns i texten.",
        "answers": [
          { "text": "Endast visuell kontroll", "incorrectReasoning": "Det finns flera exempel." },
          { "text": "Visuell kontroll, ultraljudsprovning, röntgenprovning, penetrantprovning, magnetpulverprovning", "incorrectReasoning": null },
          { "text": "Endast dragprovning och slagprovning", "incorrectReasoning": "Dessa är förstörande." },
          { "text": "Endast hårdhetsprovning och makroprovning", "incorrectReasoning": "Hårdhetsprovning kan vara förstörande beroende på metod." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Texten listar flera exempel på OFP-metoder.",
        "longReasoning": "Texten ger en punktlista över exempel 'Exempel på oförstörande provning är: Visuell kontroll, Ultraljudsprovning, Röntgenprovning, Penetrantprovning, Magnetpulverprovning'."
      },
      {
        "question": "Vad står FP för inom provning?",
        "answers": [
          { "text": "Oförstörande provning", "incorrectReasoning": "Detta är OFP." },
          { "text": "Förstörande provning", "incorrectReasoning": null },
          { "text": "Funktionsprovning", "incorrectReasoning": "Funktionsprovning är inte specifikt FP." },
          { "text": "Formprovning", "incorrectReasoning": "Formprovning är inte relevant i denna kontext." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "FP står för Förstörande provning.",
        "longReasoning": "Texten introducerar 'Förstörande provning (FP) innebär metoder...'"
      },
      {
        "question": "Vad är syftet med förstörande provning?",
        "answers": [
          { "text": "Att testa utan att skada produkten", "incorrectReasoning": "Detta är syftet med oförstörande provning." },
          { "text": "Att fastställa mekaniska egenskaper genom att förstöra produkten", "incorrectReasoning": null },
          { "text": "Att mäta ytjämnheten", "incorrectReasoning": "Ytjämnhet mäts med andra metoder." },
          { "text": "Att kontrollera sprickor", "incorrectReasoning": "Sprickkontroll kan göras med OFP." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "FP syftar till att fastställa mekaniska egenskaper genom förstörelse.",
        "longReasoning": "Texten beskriver 'Förstörande provning (FP) innebär metoder för att kunna fastställa mekaniska egenskaper som styrka, seghet och hårdhet. Vill man veta att ett material verkligen håller, måste man först försöka förstöra det'."
      },
      {
        "question": "Ge exempel på mekaniska egenskaper som fastställs med förstörande provning.",
        "answers": [
          { "text": "Endast färg", "incorrectReasoning": "Färg är inte en mekanisk egenskap som testas med FP." },
          { "text": "Styrka, seghet och hårdhet", "incorrectReasoning": null },
          { "text": "Endast ytjämnhet", "incorrectReasoning": "Ytjämnhet mäts inte med FP." },
          { "text": "Endast densitet", "incorrectReasoning": "Densitet är inte primärt testat med FP." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Exempel på mekaniska egenskaper är styrka, seghet och hårdhet.",
        "longReasoning": "Texten nämner '...mekaniska egenskaper som styrka, seghet och hårdhet'."
      },
      {
        "question": "Ge exempel på förstörande provningsmetoder som nämns i texten.",
        "answers": [
          { "text": "Endast dragprovning", "incorrectReasoning": "Det finns fler exempel." },
          { "text": "Dragprovning, slagprovning, hårdhetsprovning, makro- & mikroprovning", "incorrectReasoning": null },
          { "text": "Endast ultraljudsprovning", "incorrectReasoning": "Ultraljudsprovning är oförstörande." },
          { "text": "Endast penetrantprovning", "incorrectReasoning": "Penetrantprovning är oförstörande." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Texten listar flera exempel på FP-metoder.",
        "longReasoning": "Texten ger en punktlista över exempel 'Exempel på förstörande provning är: Dragprovning, Slagprovning, Hårdhetsprovning, Makro- & mikroprovning'."
      },
      {
        "question": "Vilket pH-värde ska dricksvatten ha enligt texten?",
        "answers": [
          { "text": "Mellan 5 och 7", "incorrectReasoning": "Detta är för surt." },
          { "text": "Mellan 7 och 9", "incorrectReasoning": null },
          { "text": "Mellan 9 och 11", "incorrectReasoning": "Detta kan vara för basiskt." },
          { "text": "Mellan 11 och 13", "incorrectReasoning": "Detta är för basiskt." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Dricksvatten ska ha pH-värde mellan 7 och 9.",
        "longReasoning": "Texten anger 'Dricksvatten ska ha ett pH-värde mellan 7 och 9'."
      },
      {
        "question": "Vad klassas vatten som om pH-värdet är lägre än 7?",
        "answers": [
          { "text": "Hårt vatten", "incorrectReasoning": "Hårt vatten har högre pH." },
          { "text": "Mjukt vatten", "incorrectReasoning": null },
          { "text": "Neutralt vatten", "incorrectReasoning": "Neutralt vatten har pH 7." },
          { "text": "Basiskt vatten", "incorrectReasoning": "Basiskt vatten har högre pH." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Vatten med pH under 7 klassas som mjukt.",
        "longReasoning": "Texten fortsätter 'Är värdet lägre än 7 klassas det som mjukt vatten...'"
      },
      {
        "question": "Vad klassas vatten som om pH-värdet är över 9?",
        "answers": [
          { "text": "Mjukt vatten", "incorrectReasoning": "Mjukt vatten har lägre pH." },
          { "text": "Hårt vatten", "incorrectReasoning": null },
          { "text": "Neutralt vatten", "incorrectReasoning": "Neutralt vatten har pH 7." },
          { "text": "Surt vatten", "incorrectReasoning": "Surt vatten har lägre pH." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Vatten med pH över 9 klassas som hårt.",
        "longReasoning": "Texten fortsätter '...och över 9 som hårt vatten'."
      },
      {
        "question": "Vad kan orsaka surt vatten enligt texten?",
        "answers": [
          { "text": "Kalcium", "incorrectReasoning": "Kalcium orsakar hårt vatten." },
          { "text": "Regn som tar sig ner i brunnen", "incorrectReasoning": null },
          { "text": "Djupt borrade brunnar", "incorrectReasoning": "Djupt borrade brunnar minskar risken för surt vatten." },
          { "text": "Varmvattenberedare", "incorrectReasoning": "Varmvattenberedare påverkar utfällning, inte direkt pH-värdet på detta sätt." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Surt vatten kan orsakas av regn i brunnar.",
        "longReasoning": "Texten anger 'Surt vatten kan orsakas av exempelvis regn som tar sig ner i brunnen...'"
      },
      {
        "question": "Vad kommer hårt vatten ifrån enligt texten?",
        "answers": [
          { "text": "Regnvatten", "incorrectReasoning": "Regnvatten kan orsaka surt vatten." },
          { "text": "Kalcium", "incorrectReasoning": null },
          { "text": "Djupt borrade brunnar", "incorrectReasoning": "Dessa minskar risken för surt vatten." },
          { "text": "Mjukt vatten", "incorrectReasoning": "Mjukt vatten har lågt pH." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Hårt vatten kommer från kalcium.",
        "longReasoning": "Texten anger '...och hårt vatten kommer från kalcium'."
      },
      {
        "question": "Hur ofta rekommenderas vattenanalys för hushåll med egen brunn?",
        "answers": [
          { "text": "Varje år", "incorrectReasoning": "Vart tredje år rekommenderas." },
          { "text": "Vart tredje år", "incorrectReasoning": null },
          { "text": "Vart femte år", "incorrectReasoning": "Vart tredje år rekommenderas." },
          { "text": "Vart tionde år", "incorrectReasoning": "Vart tredje år rekommenderas oftare." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Vattenanalys rekommenderas vart tredje år.",
        "longReasoning": "Texten rekommenderar 'Hushåll med egen brunn rekommenderas genomföra en vattenanalys vart tredje år för att säkerställa vattenkvaliteten'."
      },
      {
        "question": "Vad mäter en vattenanalys gällande pH-värde?",
        "answers": [
          { "text": "Endast vätejoner", "incorrectReasoning": "Den mäter balansen mellan två joner." },
          { "text": "Balansen mellan vätejoner och hydroxidjoner", "incorrectReasoning": null },
          { "text": "Endast hydroxidjoner", "incorrectReasoning": "Den mäter balansen mellan två joner." },
          { "text": "Endast mineraler i vattnet", "incorrectReasoning": "Mineraler är inte direkt relaterat till pH-värde på detta sätt." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Vattenanalys mäter balansen mellan väte- och hydroxidjoner.",
        "longReasoning": "Texten förklarar 'En vattenanalys mäter balansen i vattnet mellan vätejoner och hydroxidjoner'."
      },
      {
        "question": "Vad innebär ett pH-värde på 7 i vatten?",
        "answers": [
          { "text": "Surt vatten", "incorrectReasoning": "Surt vatten har pH under 7." },
          { "text": "Neutralt vatten", "incorrectReasoning": null },
          { "text": "Basiskt vatten", "incorrectReasoning": "Basiskt vatten har pH över 7." },
          { "text": "Hårt vatten", "incorrectReasoning": "Hårt vatten har pH över 9." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "pH 7 innebär neutralt vatten.",
        "longReasoning": "Texten anger 'Blir värdet 7 är vattnet neutralt vilket är vad vi strävar efter i dricksvatten'."
      },
      {
        "question": "Vad kan orsaka förändring av pH-värdet i vatten över tid?",
        "answers": [
          { "text": "Endast kokning", "incorrectReasoning": "Kokning påverkar inte pH-värdet på detta sätt." },
          { "text": "Exempelvis regnvatten som tränger in", "incorrectReasoning": null },
          { "text": "Endast frysning", "incorrectReasoning": "Frysning påverkar inte pH-värdet på detta sätt." },
          { "text": "Endast solljus", "incorrectReasoning": "Solljus påverkar inte pH-värdet på detta sätt." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Regnvatten kan förändra pH-värdet över tid.",
        "longReasoning": "Texten ger exemplet 'Ett pH-värde i vatten kan förändras över tid då exempelvis regnvatten börjar att tränga in'."
      },
      {
        "question": "Är det viktigt att kontrollera pH-värdet i spabadet?",
        "answers": [
          { "text": "Nej, det är inte viktigt", "incorrectReasoning": "Det är viktigt för spabad och kranvatten." },
          { "text": "Ja, det är viktigt", "incorrectReasoning": null },
          { "text": "Bara om vattnet ser grumligt ut", "incorrectReasoning": "pH-värdet är viktigt även om vattnet ser klart ut." },
          { "text": "Bara om det luktar illa", "incorrectReasoning": "pH-värdet är viktigt även utan dålig lukt." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "pH-värdet är viktigt att kontrollera i spabad.",
        "longReasoning": "Texten nämner 'Många kontrollerar pH-värdet i spabadet...'"
      },
      {
        "question": "Är det viktigt att kontrollera pH-värdet i kranvattnet?",
        "answers": [
          { "text": "Nej, det är inte viktigt", "incorrectReasoning": "Det är viktigt för spabad och kranvatten." },
          { "text": "Ja, det är viktigt", "incorrectReasoning": null },
          { "text": "Bara om vattnet smakar konstigt", "incorrectReasoning": "pH-värdet är viktigt även utan konstig smak." },
          { "text": "Bara om man har egen brunn", "incorrectReasoning": "Även kommunalt vatten kan ha problem med pH-värdet." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "pH-värdet är viktigt att kontrollera även i kranvattnet.",
        "longReasoning": "Texten fortsätter '...det är viktigt att även göra det när det kommer till ditt kranvatten'."
      },
      {
        "question": "Vad orsakar hårt vatten med pH över 7?",
        "answers": [
          { "text": "Minskat slitage på hushållsprodukter", "incorrectReasoning": "Hårt vatten ökar slitaget." },
          { "text": "Slitage på hushållsprodukter", "incorrectReasoning": null },
          { "text": "Ingen påverkan på hushållsprodukter", "incorrectReasoning": "Hårt vatten påverkar hushållsprodukter." },
          { "text": "Ökad livslängd på hushållsprodukter", "incorrectReasoning": "Hårt vatten minskar livslängden." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Hårt vatten orsakar slitage på hushållsprodukter.",
        "longReasoning": "Texten anger 'Vatten som har ett pH-värde över 7 är hårt och orsakar slitage på hushållsprodukter'."
      },
      {
        "question": "Vid vilket pH-värde blir vatten hälsofarligt för människor?",
        "answers": [
          { "text": "Över 7", "incorrectReasoning": "Hälsofarligt blir det vid högre pH, över 10.5." },
          { "text": "Över 10,5", "incorrectReasoning": null },
          { "text": "Över 12", "incorrectReasoning": "Över 10.5 är hälsofarligt enligt texten." },
          { "text": "Över 14", "incorrectReasoning": "Över 10.5 är hälsofarligt enligt texten." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Vatten blir hälsofarligt vid pH över 10,5.",
        "longReasoning": "Texten fortsätter 'Det är dessutom hälsofarligt för människan om pH-värdet överstiger 10,5'."
      },
      {
        "question": "Vilka delar av kroppen kan ta skada av vatten med för högt pH-värde?",
        "answers": [
          { "text": "Endast huden", "incorrectReasoning": "Även ögon och slemhinnor kan skadas." },
          { "text": "Ögon och slemhinnor", "incorrectReasoning": null },
          { "text": "Endast magen", "incorrectReasoning": "Ögon och slemhinnor nämns som exempel." },
          { "text": "Endast levern", "incorrectReasoning": "Levern nämns inte i texten." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Ögon och slemhinnor kan skadas av för högt pH-värde.",
        "longReasoning": "Texten specificerar 'Då kan både ögon och slemhinnor ta skada'."
      },
      {
        "question": "Vad kan man installera om en vattenanalys visar för högt pH-värde?",
        "answers": [
          { "text": "Ett pH-höjande filter", "incorrectReasoning": "Man vill sänka pH-värdet vid för högt pH." },
          { "text": "Ett avhärdningsfilter", "incorrectReasoning": null },
          { "text": "Ett kalkfilter", "incorrectReasoning": "Avhärdningsfilter är mer specifikt." },
          { "text": "Ett mekaniskt filter", "incorrectReasoning": "Mekaniskt filter påverkar inte pH-värdet direkt." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Avhärdningsfilter kan installeras vid för högt pH-värde.",
        "longReasoning": "Texten föreslår 'Visar en vattenanalys att det är ett högt pH-värde finns effektiva avhärdningsfilter att installera...'"
      },
      {
        "question": "Vad är ett tecken på för högt pH-värde i vatten?",
        "answers": [
          { "text": "Gröna beläggningar", "incorrectReasoning": "Gröna beläggningar är tecken på surt vatten." },
          { "text": "Vita kalkutfällningar", "incorrectReasoning": null },
          { "text": "Blå beläggningar", "incorrectReasoning": "Blå beläggningar nämns inte i texten." },
          { "text": "Röda beläggningar", "incorrectReasoning": "Röda beläggningar nämns inte i texten." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Vita kalkutfällningar är ett tecken på högt pH-värde.",
        "longReasoning": "Texten ger tecknet 'Börjar det finnas vita kalkutfällningar på tallrikar eller i vattenkokaren är det sannolikt ett högt pH-värde'."
      },
      {
        "question": "Vad är ett tecken på för lågt pH-värde i vatten (surt vatten)?",
        "answers": [
          { "text": "Vita kalkutfällningar", "incorrectReasoning": "Vita kalkutfällningar är tecken på högt pH-värde." },
          { "text": "Gröna beläggningar", "incorrectReasoning": null },
          { "text": "Svarta beläggningar", "incorrectReasoning": "Svarta beläggningar nämns inte i texten." },
          { "text": "Gula beläggningar", "incorrectReasoning": "Gula beläggningar nämns inte i texten." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Gröna beläggningar är ett tecken på surt vatten (lågt pH).",
        "longReasoning": "Texten ger tecknet 'Ett surt vatten är väldigt aggressivt och bildar gröna beläggningar...'"
      },
      {
        "question": "Var bildas kalkutfällningar framförallt vid högt pH-värde?",
        "answers": [
          { "text": "På kalla ytor", "incorrectReasoning": "De bildas framförallt där vatten värms." },
          { "text": "På platser där vatten värms", "incorrectReasoning": null },
          { "text": "På platser med stillastående vatten", "incorrectReasoning": "Värme är den avgörande faktorn enligt texten." },
          { "text": "På platser med rinnande vatten", "incorrectReasoning": "Värme är den avgörande faktorn enligt texten." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Kalkutfällningar bildas framförallt där vatten värms.",
        "longReasoning": "Texten preciserar 'Framförallt bildas dessa fällningar på de platser där vatten värms - som en varmvattenberedare'."
      },
      {
        "question": "Vad är avdunstning?",
        "answers": [
          { "text": "Övergång från fast form till flytande form", "incorrectReasoning": "Detta är smältning." },
          { "text": "Övergång från flytande form till gasform", "incorrectReasoning": null },
          { "text": "Övergång från gasform till flytande form", "incorrectReasoning": "Detta är kondensation." },
          { "text": "Övergång från fast form till gasform", "incorrectReasoning": "Detta är sublimering." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Avdunstning är övergång från flytande till gasform.",
        "longReasoning": "Texten definierar 'Vid avdunstning övergår vatten från flytande form till gasform, det vill säga vattenånga'."
      },
      {
        "question": "Vad händer med vattennivån i en kastrull vid kokning på grund av avdunstning?",
        "answers": [
          { "text": "Vattennivån ökar", "incorrectReasoning": "Avdunstning minskar vattennivån." },
          { "text": "Vattennivån sjunker", "incorrectReasoning": null },
          { "text": "Vattennivån förblir konstant", "incorrectReasoning": "Avdunstning minskar vattennivån." },
          { "text": "Vattennivån varierar slumpmässigt", "incorrectReasoning": "Avdunstning minskar vattennivån systematiskt." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Avdunstning gör att vattennivån sjunker vid kokning.",
        "longReasoning": "Texten exemplifierar 'När du kokar en kastrull med vatten sjunker vattennivån med tiden, vilket innebär att avdunstningen ökar ju varmare vattnet blir'."
      },
      {
        "question": "Vad är toleranser inom teknikritningar?",
        "answers": [
          { "text": "Exakta mått som alltid måste följas", "incorrectReasoning": "Toleranser tillåter avvikelser från exakta mått." },
          { "text": "Tillåtna avvikelser från angivna mått", "incorrectReasoning": null },
          { "text": "Minsta möjliga mått", "incorrectReasoning": "Toleranser anger både minsta och största tillåtna mått." },
          { "text": "Största möjliga mått", "incorrectReasoning": "Toleranser anger både minsta och största tillåtna mått." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Toleranser är tillåtna avvikelser från mått.",
        "longReasoning": "Texten förklarar 'Mått på ritning kan inte alltid vara exakta i förhållande till verkligheten. Så länge utförandet håller sig inom ett visst toleransområde kan det ändå godkännas vid en besiktning. Det finns därför normer för hur stora avvikelser från de angivna måtten får vara'."
      },
      {
        "question": "Varför används toleranser inom teknikritningar?",
        "answers": [
          { "text": "För att göra ritningarna mer exakta", "incorrectReasoning": "Toleranser tillåter avvikelser, gör inte ritningarna mer exakta i absolut mening." },
          { "text": "För att hantera verklighetens variationer i tillverkning", "incorrectReasoning": null },
          { "text": "För att minska kostnaden för tillverkning", "incorrectReasoning": "Toleranser kan indirekt minska kostnaden genom att tillåta viss variation." },
          { "text": "För att göra ritningarna enklare att läsa", "incorrectReasoning": "Toleranser gör inte ritningarna enklare att läsa nödvändigtvis." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Toleranser hanterar variationer i tillverkning.",
        "longReasoning": "Texten motiverar 'Mått på ritning kan inte alltid vara exakta i förhållande till verkligheten. Så länge utförandet håller sig inom ett visst toleransområde kan det ändå godkännas vid en besiktning.'"
      },
      {
        "question": "Vad är toleransläge?",
        "answers": [
          { "text": "Den totala toleransvidden", "incorrectReasoning": "Detta är toleransgrad." },
          { "text": "Var toleransen börjar utifrån basmåttet", "incorrectReasoning": null },
          { "text": "Det maximala måttfelet", "incorrectReasoning": "Detta är en aspekt av toleranser, men inte toleransläge specifikt." },
          { "text": "Hur produkten ska besiktigas", "incorrectReasoning": "Besiktning är en separat process." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Toleransläge anger var toleransen börjar från basmåttet.",
        "longReasoning": "Texten definierar 'Toleransläge anger var tolerans börjar utifrån basmåttet...'"
      },
      {
        "question": "Vad är toleransgrad?",
        "answers": [
          { "text": "Var toleransen börjar", "incorrectReasoning": "Detta är toleransläge." },
          { "text": "Toleransvidden, hur stor måttavvikelsen får vara", "incorrectReasoning": null },
          { "text": "Basmåttet", "incorrectReasoning": "Basmåttet är referensmåttet." },
          { "text": "Det minsta tillåtna måttet", "incorrectReasoning": "Det minsta måttet är en del av toleransvidden." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Toleransgrad anger toleransvidden.",
        "longReasoning": "Texten definierar '...och toleransgrad anger toleransvidden, alltså hur stor måttavvikelsen får vara'."
      },
      {
        "question": "Vad hjälper toleranser oss att veta?",
        "answers": [
          { "text": "Hur exakt produkten är", "incorrectReasoning": "Toleranser anger tillåten avvikelse, inte exakthet i sig." },
          { "text": "När produkten är godkänd", "incorrectReasoning": null },
          { "text": "Hur billig produkten är att tillverka", "incorrectReasoning": "Kostnad är inte direkt relaterat till toleranser i denna mening." },
          { "text": "Hur snabbt produkten kan tillverkas", "incorrectReasoning": "Tillverkningstid är inte direkt relaterat till toleranser i denna mening." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Toleranser hjälper oss veta när en produkt är godkänd.",
        "longReasoning": "Texten avslutar toleransavsnittet med 'Toleranser hjälper oss att veta när produkten är godkänd'."
      },
      {
        "question": "Varför känner vi inte luftens vikt?",
        "answers": [
          { "text": "Luften är viktlös", "incorrectReasoning": "Luften har vikt, men vi upplever det inte så." },
          { "text": "Vi är nedsänkta i luften", "incorrectReasoning": null },
          { "text": "Luften har ingen densitet", "incorrectReasoning": "Luften har densitet." },
          { "text": "Luften utövar inget tryck", "incorrectReasoning": "Luften utövar tryck." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Vi känner inte luftens vikt eftersom vi är nedsänkta i den.",
        "longReasoning": "Texten förklarar 'Även om det kan verka som om luften är tung stämmer inte det. Vi känner inte till luftens vikt eftersom vi är nedsänkta i den'."
      },
      {
        "question": "Vad erbjuder luften motstånd mot?",
        "answers": [
          { "text": "Endast vatten", "incorrectReasoning": "Luften erbjuder motstånd även till andra rörelser." },
          { "text": "Rörelse genom den, som att gå, springa eller åka fordon", "incorrectReasoning": null },
          { "text": "Endast ljud", "incorrectReasoning": "Luften erbjuder motstånd till fysisk rörelse, inte bara ljud." },
          { "text": "Endast ljus", "incorrectReasoning": "Luften erbjuder motstånd till fysisk rörelse, inte ljus i denna mening." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Luften erbjuder motstånd mot rörelse genom den.",
        "longReasoning": "Texten exemplifierar 'Luft erbjuder motstånd när vi går, springer eller åker i ett fordon...'"
      },
      {
        "question": "Vilket medium är svårare att röra sig i, luft eller vatten, enligt texten?",
        "answers": [
          { "text": "Luft", "incorrectReasoning": "Vatten är svårare att röra sig i." },
          { "text": "Vatten", "incorrectReasoning": null },
          { "text": "Båda är lika svåra", "incorrectReasoning": "Vatten är svårare än luft." },
          { "text": "Det beror på temperaturen", "incorrectReasoning": "Generellt är vatten svårare än luft oavsett temperatur i detta sammanhang." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Vatten är svårare att röra sig i än luft.",
        "longReasoning": "Texten jämför 'Vattentätheten är mycket högre än luftens, det är därför det är svårare för oss att röra oss i vatten'."
      },
      {
        "question": "Vad definieras atmosfärstryck som?",
        "answers": [
          { "text": "Luftens temperatur", "incorrectReasoning": "Atmosfärstryck är inte temperatur." },
          { "text": "Kraften som utövas av atmosfärsluft på jordytan", "incorrectReasoning": null },
          { "text": "Luftens densitet", "incorrectReasoning": "Densitet är relaterat till tryck, men inte definitionen av tryck." },
          { "text": "Luftens hastighet", "incorrectReasoning": "Hastighet är inte tryck." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Atmosfärstryck är kraften från atmosfärsluften på jordytan.",
        "longReasoning": "Texten definierar 'Därför kan vi definiera atmosfärstryck som den kraft som utövas av atmosfärsluft på jordytan'."
      },
      {
        "question": "Hur påverkas lufttrycket av höjden över havet?",
        "answers": [
          { "text": "Lufttrycket ökar med höjden", "incorrectReasoning": "Lufttrycket minskar med höjden." },
          { "text": "Lufttrycket minskar med höjden", "incorrectReasoning": null },
          { "text": "Lufttrycket är konstant oavsett höjd", "incorrectReasoning": "Lufttrycket varierar med höjden." },
          { "text": "Lufttrycket varierar slumpmässigt med höjden", "incorrectReasoning": "Lufttrycket minskar systematiskt med höjden." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Lufttrycket minskar ju högre upp man kommer.",
        "longReasoning": "Texten förklarar 'Ju högre höjd på jordytan i förhållande till havsnivån, desto lägre lufttryck'."
      },
      {
        "question": "Varför är lufttrycket lägre på ett berg än vid havsytan?",
        "answers": [
          { "text": "Luften är kallare på berget", "incorrectReasoning": "Temperaturen är inte den primära orsaken." },
          { "text": "Luftmängden ovanför är mindre på berget", "incorrectReasoning": null },
          { "text": "Luften är tätare på berget", "incorrectReasoning": "Luften är tunnare på berget." },
          { "text": "Gravitationen är svagare på berget", "incorrectReasoning": "Gravitationen varierar inte signifikant på dessa höjder." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Mindre luftmängd ovanför på högre höjd ger lägre tryck.",
        "longReasoning": "Texten exemplifierar 'Till exempel på ett berg är luftmängden i den högsta delen mindre än på en strand på grund av höjdskillnaden'."
      },
      {
        "question": "Vad jämförs allt tryck med enligt texten?",
        "answers": [
          { "text": "Vattentrycket", "incorrectReasoning": "Atmosfärstrycket är referensen." },
          { "text": "Atmosfärstrycket", "incorrectReasoning": null },
          { "text": "Vakuum", "incorrectReasoning": "Atmosfärstrycket är referensen." },
          { "text": "Marktrycket", "incorrectReasoning": "Marktrycket är inte den allmänna referensen." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Allt tryck jämförs med atmosfärstrycket.",
        "longReasoning": "Texten avslutar lufttrycksavsnittet med 'Allt tryck jämförs med atmosfärstrycket'."
      }
    ]
  }, {
    "name": "Mätteknik del B",
    "source": "",
    "questions": [
      {
        "question": "Vad är mätteknik en nödvändighet för, enligt texten?",
        "answers": [
          { "text": "Endast för att göra ritningar", "incorrectReasoning": "Mätteknik handlar om kontroll och jämförelse, inte ritningar." },
          { "text": "För att kontrollera, jämföra och säkerställa detaljers överensstämmelse med krav", "incorrectReasoning": null },
          { "text": "Endast för att välja material", "incorrectReasoning": "Mätteknik handlar om kontroll och jämförelse, inte materialval." },
          { "text": "Endast för att förbättra produkters utseende", "incorrectReasoning": "Mätteknik handlar om funktionella krav, inte enbart utseende." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Mätteknik säkerställer överensstämmelse med konstruktionskrav.",
        "longReasoning": "Texten anger tydligt: 'Mätteknik är en nödvändighet för att kunna kontrollera, jämföra och säkerställa att detaljer stämmer överens med de konstruktionskrav och specifikationer som ställs.'"
      },
        {
          "question": "Vilka är några av de vedertagna arbetssätten vid kontroll och jämförelse av detaljer?",
        "answers": [
        { "text": "Endast funktionskontroll och okulär kontroll", "incorrectReasoning": "Fler metoder nämns, inklusive tolkning, oförstörande och förstörande kontroll." },
        { "text": "Funktionskontroll, tolkning, okulär kontroll, oförstörande kontroll, förstörande kontroll", "incorrectReasoning": null },
        { "text": "Endast oförstörande kontroll och förstörande kontroll", "incorrectReasoning": "Fler metoder nämns, inklusive funktionskontroll, tolkning och okulär kontroll." },
        { "text": "Endast visuell inspektion", "incorrectReasoning": "Visuell inspektion är en del av okulär kontroll, men det finns fler metoder." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Texten listar fem vedertagna arbetssätt.",
        "longReasoning": "Texten ger en punktlista: 'De vedertagna arbetssätt som används vid kontroll och jämförelse av detaljer är: •Funktionskontroll •Tolkning •Okulär kontroll •Oförstörande kontroll •Förstörande kontroll.'"
      },
      {
        "question": "Varför är det viktigt att sköta om mätdon?",
        "answers": [
          { "text": "För att de ska se bra ut", "incorrectReasoning": "Skötsel handlar om funktion, inte utseende." },
          { "text": "För att undvika skador och defekter som kan leda till försämrad produktkvalitet", "incorrectReasoning": null },
          { "text": "För att de ska hålla för evigt", "incorrectReasoning": "Inga verktyg håller för evigt, men korrekt skötsel förlänger livslängden." },
          { "text": "För att spara pengar", "incorrectReasoning": "Även om det indirekt kan spara pengar, är den primära anledningen att bibehålla mätnoggrannheten." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Skador på mätdon kan försämra produktkvaliteten.",
        "longReasoning": "Texten anger: 'Det är viktigt att de olika mätdonen hanteras och sköts på ett sådant sätt så att det inte uppstår skador eller andra defekter på dessa, då detta kan leda till en försämrad kvalitet på produkter som produceras och som eventuellt måste kasseras.'"
      },
     {
        "question": "Vad är det alltid viktigt att göra innan mätning?",
        "answers":[
            { "text": "Rengöra mätdonet", "incorrectReasoning": "Rengöring är viktigt men inställningskontroll är det *alltid* viktiga *innan* mätning"},
            {"text": "Göra en inställningskontroll (kalibrering) av mätdonet", "incorrectReasoning":null},
            {"text": "Välja rätt mätdon", "incorrectReasoning": "Det är viktigt, men inställningskontrollen är det första steget"},
            {"text": "Slipa mätdonet", "incorrectReasoning": "Man ska inte slipa mätdon på detta sättet."}
        ],
         "correctAnswer": 1,
        "shortReasoning": "Inställningskontroll (kalibrering) är alltid viktigt innan mätning.",
        "longReasoning": "Texten förtydligar 'Innan mätning är det alltid viktigt att göra en inställningskontroll (kalibrering) av mätdonet för att försäkra sig om att det visar rätt mätvärde...'"
      },
      {
        "question": "Vad ska man göra om mätdonet inte visar rätt mätvärde vid inställningskontrollen?",
        "answers": [
          { "text": "Kasta mätdonet", "incorrectReasoning": "Mätdonet ska justeras, inte kastas." },
          { "text": "Justera mätdonet", "incorrectReasoning": null },
          { "text": "Använda ett annat mätdon", "incorrectReasoning": "Det felaktiga mätdonet bör justeras." },
          { "text": "Ignorera felet", "incorrectReasoning": "Felaktiga mätningar leder till felaktiga resultat." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Mätdonet måste justeras om det inte visar rätt värde.",
        "longReasoning": "Texten avslutar meningen: '...om så inte är fallet måste mätdonet justeras'."
      },
      {
          "question": "Vad ska man göra med arbetsstycket innan mätning for bästa resultat?",
          "answers":[
              {"text": "Värma upp det", "incorrectReasoning": "Värme kan påverka mätresultat, rengöring är viktigare"},
              {"text": "Kyla ner det", "incorrectReasoning": "Kyla kan påverka mätresultatet, rengöring är viktigare"},
              {"text": "Göra rent det från smuts och grader", "incorrectReasoning": null},
              {"text": "Måla det", "incorrectReasoning": "Att måla det kommer att lägga till dimensioner och påverka resultatet"}
          ],
          "correctAnswer":2,
          "shortReasoning": "Arbetsstycket ska vara rent från smuts och grader.",
          "longReasoning": "Texten säger 'För att få ett så noga mätresultat som möjligt ska man vara noga med att göra rent arbetsstycket från smuts och grader'."
      },
      {
          "question": "Vart ska man placera mätdonet om man behöver lägga ifrån sig det?",
          "answers":[
              {"text": "På golvet", "incorrectReasoning": "Golvet kan vara smutsigt och det finns risk för skador"},
              {"text": "På ett hårt underlag", "incorrectReasoning": "Hårda underlag kan skada mätdonet"},
              {"text": "På ett mjukt och rent underlag, t.ex. en gummiplatta eller i mätdonets etui", "incorrectReasoning":null},
              {"text": "I en verktygslåda", "incorrectReasoning": "Det kan finnas andra verktyg som kan skada mätdonet"}
          ],
          "correctAnswer":2,
          "shortReasoning": "Placera det på ett mjukt och rent underlag.",
          "longReasoning":"Texten säger: 'Om man behöver lägga ifrån sig mätdonet mellan mätningarna ska det placeras på ett mjukt och rent underlag t ex en gummiplatta eller i mätdonets etui...'"
      },
      {
          "question": "Vad ska man göra med mätdonet efter mätningen?",
          "answers":[
              {"text":"Lägga det direkt i verktygslådan", "incorrectReasoning": "Det ska rengöras först"},
              {"text":"Lämna det på arbetsbänken", "incorrectReasoning": "Det finns risk för skador"},
              {"text":"Rengöra det noggrant och lägga det i sitt etui", "incorrectReasoning":null},
              {"text":"Slipa det", "incorrectReasoning": "Man ska inte slipa mätdon rutinmässigt."}
          ],
          "correctAnswer":2,
          "shortReasoning":"Rengör och lägg det i sitt etui.",
          "longReasoning": "Texten säger 'Efter mätning ska mätdonet rengöras noggrant och läggas i sitt etui.'"
      },
        {
        "question": "Varför kan det bildas rost på mätdonet?",
        "answers": [
          { "text": "På grund av slitage", "incorrectReasoning": "Slitage orsakar inte direkt rost." },
          { "text": "På grund av hög luftfuktighet eller handsvett", "incorrectReasoning": null },
          { "text": "På grund av smuts", "incorrectReasoning": "Smuts kan bidra, men fukt är den primära orsaken." },
          { "text": "På grund av felaktig användning", "incorrectReasoning": "Felaktig användning kan leda till skador, men fukt är den primära orsaken till rost." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Hög luftfuktighet eller handsvett kan orsaka rost.",
        "longReasoning": "Texten förklarar: 'På grund av hög luftfuktighet eller handsvett kan det bildas rost på mätdonet...'"
      },
      {
        "question": "Vad bör man göra för att undvika rost på mätdonet?",
        "answers": [
          { "text": "Förvara det i vatten", "incorrectReasoning": "Vatten ökar risken för rost." },
          { "text": "Fetta in det efter mätningen", "incorrectReasoning": null },
          { "text": "Slipa det regelbundet", "incorrectReasoning": "Slipning tar bort material och är inte lämpligt." },
          { "text": "Förvara det utomhus", "incorrectReasoning": "Utomhusmiljö ökar risken för rost." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Fetta in mätdonet efter mätning för att undvika rost.",
        "longReasoning": "Texten rekommenderar: '...för att undvika detta bör mätdonen fettas in efter mätningen'."
      },
        {
        "question": "Vad leder mätfel till?",
        "answers":[
          {"text": "Noggrannare resultat", "incorrectReasoning": "Mätfel leder till *o*noggranna resultat"},
          {"text": "Ökad osäkerhet", "incorrectReasoning":null},
          {"text": "Snabbare mätningar", "incorrectReasoning": "Mätfel har inget med hastighet att göra"},
          {"text": "Mindre materialåtgång", "incorrectReasoning":"Mätfel har inget med materialåtgång att göra"}
        ],
        "correctAnswer": 1,
        "shortReasoning":"Mätfel leder till osäkerhet.",
        "longReasoning":"Texten säger: 'Vid mätning förekommer ofta fel, detta leder till en osäkerhet...'"
      },
      {
        "question": "Hur noggrant bör mätdonet vara i förhållande till toleransen på detaljen?",
        "answers": [
          { "text": "Lika noggrant", "incorrectReasoning": "Mätdonet bör vara betydligt noggrannare." },
          { "text": "10 gånger noggrannare, men 5 gånger räcker i praktiken", "incorrectReasoning": null },
          { "text": "Mindre noggrant", "incorrectReasoning": "Mätdonet måste vara noggrannare än toleransen." },
          { "text": "Det spelar ingen roll", "incorrectReasoning": "Noggrannheten är avgörande för tillförlitliga mätningar." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Mätdonet bör vara 10 gånger (helst) eller 5 gånger noggrannare.",
        "longReasoning": "Texten anger: 'Noggrannheten på mätdonet ska vara 10 gånger noggrannare än toleransen på detaljen, detta kan dok vara svårt att uppnå, så i praktiken räcker det med 5 gånger noggrannare en angiven tolerans.'"
      },
      {
        "question": "Vad kallas fel som uppstår på grund av yttre förhållanden?",
        "answers": [
          { "text": "Systematiska fel", "incorrectReasoning": "Systematiska fel beror på mätdonets inbyggda tolerans." },
          { "text": "Tillfälliga fel", "incorrectReasoning": null },
          { "text": "Mätfel", "incorrectReasoning": "Mätfel är ett övergripande begrepp." },
          { "text": "Avläsningsfel", "incorrectReasoning": "Avläsningsfel är en *typ* av tillfälligt fel." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Fel orsakade av yttre förhållanden kallas tillfälliga fel.",
        "longReasoning": "Texten definierar: 'Tillfälliga fel kallas de fel som uppstår på grund av yttre förhållanden...'"
      },
      {
        "question": "Ge exempel på tillfälliga fel.",
        "answers":[
            {"text": "Endast trötthet hos den som mäter", "incorrectReasoning": "Fler orsaker nämns"},
            {"text": "Trötthet, smuts, temperaturskillnader, avläsningsfel, felaktig hantering", "incorrectReasoning":null},
            {"text":"Endast felaktig hantering", "incorrectReasoning": "Fler orsaker nämns"},
            {"text": "Endast mätdonets inbyggda tolerans", "incorrectReasoning": "Detta är ett systematiskt fel"}
        ],
        "correctAnswer": 1,
        "shortReasoning":"Exempel är trötthet, smuts, temperaturskillnader, avläsningsfel och felaktig hantering.",
        "longReasoning": "Texten ger en punktlista över exempel: '• trötthet hos den som mäter, •smuts eller grader på mätdon eller mätobjekt •temperaturskillnader mellan mätdon och mätobjekt •avläsningsfel på mätdonet •mätdonet hanteras felaktigt'"
      },
      {
          "question": "Vad är ett systematiskt fel?",
          "answers":[
              {"text": "Fel som uppstår av misstag", "incorrectReasoning": "Det är ett tillfälligt fel"},
              {"text": "Fel som uppstår på grund av yttre förhållanden", "incorrectReasoning":"Det är ett tillfälligt fel"},
              {"text": "Fel som uppstår på grund av mätdonets inbyggda tolerans", "incorrectReasoning":null},
              {"text":"Fel som uppstår vid avläsning", "incorrectReasoning":"Det är en typ av tillfälligt fel"}
          ],
          "correctAnswer": 2,
          "shortReasoning": "Systematiskt fel beror på mätdonets inbyggda tolerans.",
          "longReasoning": "Texten säger: 'På grund av mätdonets inbyggda tolerans uppstår fel vid upprepade mätningar.'"
      },
      {
        "question": "Vad är ett *parallaxfel*?",
        "answers": [
          { "text": "Ett fel orsakat av smuts", "incorrectReasoning": "Smuts är en orsak till tillfälliga fel, inte specifikt parallaxfel." },
          { "text": "Ett fel som uppstår om man inte tittar rakt framifrån på mätdonets skala", "incorrectReasoning": null },
          { "text": "Ett fel orsakat av temperatur", "incorrectReasoning": "Temperatur är en orsak till tillfälliga fel, inte specifikt parallaxfel." },
          { "text": "Ett fel orsakat av felaktig hantering", "incorrectReasoning": "Felaktig hantering är en orsak till tillfälliga fel, inte specifikt parallaxfel." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Parallaxfel uppstår om man inte tittar rakt på skalan.",
        "longReasoning": "Texten förklarar: 'Vid avläsning av ett mätinstrument är det viktigt att titta på mätdonets skala rakt framifrån, i annat fall uppstår ett parallaxfel.'"
      },
      {
        "question": "Vilken referenstemperatur används normalt vid mätning?",
        "answers": [
          { "text": "0°C", "incorrectReasoning": "0°C är inte standard referenstemperatur." },
          { "text": "20°C", "incorrectReasoning": null },
          { "text": "100°C", "incorrectReasoning": "100°C är för hög temperatur." },
          { "text": "Rumstemperatur", "incorrectReasoning": "Rumstemperatur kan variera; 20°C är standard." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Referenstemperaturen är 20°C.",
        "longReasoning": "Texten anger: '...och man har då satt en referenstemperatur vid 20°C'."
      },
      {
        "question": "Vad ska mätarmen på en vippindikator vara i förhållande till mätobjektet för att undvika hävarmsfel?",
        "answers": [
          { "text": "Vinkelrät", "incorrectReasoning": "Mätarmen ska vara parallell, inte vinkelrät." },
          { "text": "Parallell", "incorrectReasoning": null },
          { "text": "I 45 graders vinkel", "incorrectReasoning": "Mätarmen ska vara parallell." },
          { "text": "Det spelar ingen roll", "incorrectReasoning": "Vinkeln är viktig för noggrann mätning." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Mätarmen ska vara parallell mot mätobjektet.",
        "longReasoning": "Texten förklarar: 'Vid mätning med vippindikator ska vippindikatorns mätarm vara parallell mot mätobjektet för att undvika mätfel...'"
      },
          {
        "question": "Hur mycket får mätarmen på en vippindikator vinklas, som mest, om det är trångt?",
        "answers": [
          { "text": "5°", "incorrectReasoning": "15 grader är tillåtet" },
          { "text": "10°", "incorrectReasoning": "15 grader är tillåtet" },
          { "text": "15°", "incorrectReasoning": null },
          { "text": "30°", "incorrectReasoning": "Det är för mycket, max 15 grader" }
        ],
        "correctAnswer": 2,
        "shortReasoning": "Mätarmen får vinklas upp till 15°.",
        "longReasoning": "Texten säger 'Därför kan man tillåta att mätarmen vinklas uppemot 15° för att komma åt den yta man vill mäta med ett acceptabelt mätfel som resultat.'"
      },
        {
        "question": "Vad bör mätdon som används genomgå?",
        "answers":[
            {"text": "Regelbunden slipning", "incorrectReasoning": "Mätdon ska inte slipas, utan kontrolleras/kalibreras"},
            {"text": "Kontinuerlig användning", "incorrectReasoning":"Regelbunden användning leder till slitage"},
            {"text": "Kontroll och godkännande", "incorrectReasoning": null},
            {"text": "Ingen åtgärd behövs", "incorrectReasoning":"Mätdon slits och måste kontrolleras"}
        ],
        "correctAnswer":2,
        "shortReasoning": "De bör vara kontrollerade och godkända.",
        "longReasoning": "Texten börjar med: 'De mätdon som används bör vara kontrollerade och godkända.'"
      },
      {
        "question": "Vad kallas det när mätdon kontrolleras regelbundet?",
        "answers":[
            {"text": "Justering", "incorrectReasoning": "Justering är en del av kalibreringen"},
            {"text": "Reparation", "incorrectReasoning":"Reparation görs vid skada, inte regelbundet"},
            {"text": "Kalibrering", "incorrectReasoning": null},
            {"text": "Slitage", "incorrectReasoning":"Slitage är det som händer *utan* kalibrering"}
        ],
        "correctAnswer": 2,
        "shortReasoning":"Regelbunden kontroll kallas kalibrering.",
        "longReasoning": "Texten säger: 'Därför är det viktigt att mätdonen kalibreras (kontrolleras).'"
      },
        {
        "question": "Vad ska företag skapa för kalibreringen?",
        "answers":[
            {"text": "Inga regler, det är upp till var och en", "incorrectReasoning": "Regler och rutiner behövs"},
            {"text":"En generell beskrivning", "incorrectReasoning": "Regler och rutiner behövs"},
            {"text": "Regler och rutiner för hur kalibreringen ska ske", "incorrectReasoning": null},
            {"text":"En prislista för kalibrering", "incorrectReasoning": "Priset är inte relevant här"}
        ],
        "correctAnswer":2,
        "shortReasoning": "Företag ska skapa regler och rutiner för kalibrering.",
        "longReasoning":"Texten säger 'Denna kontroll bör ske regelbundet och det är viktigt att företagen själva skapar regler och rutiner för hur detta ska ske.'"
      },
          {
        "question":"Vad måste referensmätdon som används vid kalibrering ha?",
        "answers":[
            {"text":"Samma noggrannhet som mätdonen som ska kalibreras", "incorrectReasoning": "De måste ha *större* noggrannhet"},
            {"text":"Mindre noggrannhet", "incorrectReasoning":"De måste vara noggrannare"},
            {"text": "Större noggrannhet än de mätdon som ska kalibreras", "incorrectReasoning":null},
            {"text": "Det spelar ingen roll", "incorrectReasoning":"Noggrannheten hos referensmätdonet är avgörande"}
        ],
         "correctAnswer": 2,
        "shortReasoning":"Referensmätdon måste ha större noggrannhet.",
        "longReasoning": "Texten anger: 'De referensmätdon som används vid kalibrering måste ha en större noggrannhet än de mätdon som ska kalibreras.'"
      },
      {
          "question":"Vilket längdmått används inom tillverkningsindustrin?",
          "answers":[
              {"text":"Tum", "incorrectReasoning": "Millimeter används i Sverige"},
              {"text":"Fot", "incorrectReasoning":"Millimeter används"},
              {"text":"Millimeter", "incorrectReasoning": null},
              {"text":"Meter", "incorrectReasoning":"Meter är för stort, millimeter används"}
          ],
        "correctAnswer": 2,
        "shortReasoning":"Millimeter är längdmåttet inom tillverkningsindustrin.",
        "longReasoning":"Texten säger 'Inom tillverkningsindustrin används millimeter som längdmått...'"
      },
      {
        "question": "Vad menas med längdmått på en detalj?",
        "answers":[
            {"text":"Endast längden", "incorrectReasoning": "Fler dimensioner inkluderas"},
            {"text":"Endast bredden", "incorrectReasoning":"Fler dimensioner inkluderas"},
            {"text":"Längd, bredd, höjd samt diameter", "incorrectReasoning":null},
            {"text":"Endast diametern", "incorrectReasoning": "Fler dimensioner inkluderas"}
        ],
        "correctAnswer":2,
        "shortReasoning":"Längd, bredd, höjd och diameter.",
        "longReasoning": "Texten förklarar: '...med längdmått menar man längd, bredd, höjd samt diameter på en detalj.'"
      },
       {
        "question": "Hur många mikrometer (µm) är en millimeter?",
        "answers": [
          { "text": "10", "incorrectReasoning": "Det är 1000 µm." },
          { "text": "100", "incorrectReasoning": "Det är 1000 µm." },
          { "text": "1000", "incorrectReasoning": null },
          { "text": "10000", "incorrectReasoning": "Det är 1000 µm." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "1 mm = 1000 µm.",
        "longReasoning": "Texten anger: 'En millimeter = 1,0 mm = 1000 μm'"
      },
      {
        "question": "Hur många mikrometer (µm) är en tiondels millimeter?",
        "answers": [
          { "text": "1", "incorrectReasoning": "Det är 100 µm." },
          { "text": "10", "incorrectReasoning": "Det är 100 µm." },
          { "text": "100", "incorrectReasoning": null },
          { "text": "1000", "incorrectReasoning": "Det är 100 µm." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "0,1 mm = 100 µm.",
        "longReasoning": "Texten anger: 'En tiondels millimeter = 0,1 mm = 100 μm'"
      },
      {
        "question": "Hur många mikrometer (µm) är en hundradels millimeter?",
        "answers":[
          { "text": "1", "incorrectReasoning": "Det är 10 µm."},
          {"text": "10", "incorrectReasoning": null},
          {"text": "100", "incorrectReasoning": "Det är 10 µm."},
          {"text":"1000", "incorrectReasoning": "Det är 10 µm"}
        ],
         "correctAnswer": 1,
        "shortReasoning": "0,01 mm = 10 µm.",
        "longReasoning": "Texten anger: 'En hundradels millimeter = 0,01 mm = 10 μm'"
    
      },
        {
        "question": "Vad utläses 1 µm som?",
        "answers": [
          { "text": "En millimeter", "incorrectReasoning": "Det utläses som en mikrometer." },
          { "text": "En centimeter", "incorrectReasoning": "Det utläses som en mikrometer." },
          { "text": "En mikrometer", "incorrectReasoning": null },
          { "text": "En nanometer", "incorrectReasoning": "Det utläses som en mikrometer." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "1 µm utläses som en mikrometer.",
        "longReasoning": "Texten anger: '1 µm utläses som 1 mikrometer'"
      },
      {
        "question": "Vad är grundenheten för vinklar inom tillverkningsindustrin?",
        "answers":[
          {"text": "Radianer", "incorrectReasoning": "Grader används"},
          {"text": "Grader", "incorrectReasoning":null},
          {"text":"Procent", "incorrectReasoning": "Grader används"},
          {"text":"Minuter", "incorrectReasoning": "Minuter är en del av en grad"}
        ],
        "correctAnswer":1,
        "shortReasoning": "Grundenheten för vinklar är grader (°).",
        "longReasoning": "Texten säger: 'Grundenheten för vinklar inom tillverkningsindustrin är grader (°) ett helt varv är 360°...'"
      },
      {
          "question": "Hur många grader är ett helt varv?",
          "answers":[
              {"text": "90°", "incorrectReasoning": "Det är en rät vinkel"},
              {"text": "180°", "incorrectReasoning":"Det är en halv cirkel"},
              {"text": "360°", "incorrectReasoning":null},
              {"text": "270°", "incorrectReasoning": "Det är tre fjärdedelar av en cirkel"}
          ],
        "correctAnswer": 2,
        "shortReasoning": "Ett helt varv är 360°.",
        "longReasoning": "Som nämnts ovan: '...ett helt varv är 360°...'"
      },
       {
        "question": "Hur många grader är en rät vinkel?",
        "answers": [
          { "text": "45°", "incorrectReasoning": "En rät vinkel är 90°." },
          { "text": "90°", "incorrectReasoning": null },
          { "text": "180°", "incorrectReasoning": "En rät vinkel är 90°." },
          { "text": "360°", "incorrectReasoning": "En rät vinkel är 90°." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "En rät vinkel är 90°.",
        "longReasoning": "Texten fortsätter: '...medans en rät vinkel är 90°.'"
      },
        {
        "question": "Hur skriver man en vinkel på 30 grader?",
        "answers":[
          {"text": "30", "incorrectReasoning": "Man behöver enheten, grader"},
          {"text": "30´", "incorrectReasoning":"Det är 30 minuter, inte grader"},
          {"text": "30°", "incorrectReasoning":null},
          {"text":"30 sek", "incorrectReasoning":"Det är sekunder, inte hela grader"}
        ],
          "correctAnswer": 2,
        "shortReasoning": "En vinkel på 30 grader skrivs 30°.",
        "longReasoning":"Texten säger: 'Skrivs en vinkeln som ett siffervärde skrivs det som t ex 30°.'"
      },
      {
        "question": "Vad kan man använda för att ange delar av en grad?",
        "answers": [
          { "text": "Endast decimaltal", "incorrectReasoning": "Minuter kan också användas." },
          { "text": "Decimaltal eller minuter", "incorrectReasoning": null },
          { "text": "Endast minuter", "incorrectReasoning": "Decimaltal kan också användas." },
          { "text": "Endast sekunder", "incorrectReasoning": "Sekunder används för delar av minuter." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Delar av en grad kan anges med decimaltal eller minuter.",
        "longReasoning": "Texten anger: 'När delar av en grad beskrivs kan man antingen använda decimaltal eller minuter.'"
      },
       {
          "question": "Hur många minuter (′) är en grad (°)?",
          "answers":[
            {"text":"1", "incorrectReasoning":"Det är 60 minuter"},
            {"text":"10", "incorrectReasoning":"Det är 60 minuter"},
            {"text":"60", "incorrectReasoning":null},
            {"text": "100", "incorrectReasoning": "Det är 60 minuter"}
          ],
          "correctAnswer": 2,
          "shortReasoning": "1° = 60′",
          "longReasoning": "Texten säger '...innebär det att 1°(grad) = 60′ (minuter)...'"
       },
       {
           "question": "Hur många sekunder (′′) är en minut (′)?",
           "answers":[
               {"text":"1", "incorrectReasoning": "Det är 60 sekunder"},
               {"text":"10", "incorrectReasoning": "Det är 60 sekunder"},
               {"text": "60", "incorrectReasoning": null},
               {"text": "100", "incorrectReasoning": "Det är 60 sekunder"}
           ],
           "correctAnswer": 2,
           "shortReasoning": "1′ = 60′′",
           "longReasoning":"Texten fortsätter: '...och vid noggrannare beskrivning av en grad används även sekunder då 1'(minut) = 60′′(sekunder).'"
       },
       {
        "question": "Hur omvandlar man minuter till decimalgrader?",
        "answers": [
          { "text": "Multiplicerar med 60", "incorrectReasoning": "Man dividerar med 60." },
          { "text": "Dividerar med 60", "incorrectReasoning": null },
          { "text": "Adderar 60", "incorrectReasoning": "Man dividerar med 60." },
          { "text": "Subtraherar 60", "incorrectReasoning": "Man dividerar med 60." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Minuter till decimalgrader: dividera med 60.",
        "longReasoning": "Texten anger: 'För att omvandla minuter till decimalgrader divideras minuten med 60.'"
      },
      {
        "question": "Hur omvandlar man decimalgrader till minuter?",
        "answers": [
          { "text": "Dividerar med 60", "incorrectReasoning": "Man multiplicerar med 60." },
          { "text": "Multiplicerar med 60", "incorrectReasoning": null },
          { "text": "Adderar 60", "incorrectReasoning": "Man multiplicerar med 60." },
          { "text": "Subtraherar 60", "incorrectReasoning": "Man multiplicerar med 60." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Decimalgrader till minuter: multiplicera med 60.",
        "longReasoning": "Texten anger: 'För att omvandla decimalgrad till minuter multipliceras decimalgraden med 60.'"
      },
      {
        "question": "Vad är 30' (30 minuter) i decimalgrader?",
        "answers": [
          { "text": "0,3°", "incorrectReasoning": "30 / 60 = 0,5" },
          { "text": "0,5°", "incorrectReasoning": null },
          { "text": "3,0°", "incorrectReasoning": "30 / 60 = 0,5" },
          { "text": "30°", "incorrectReasoning": "Det är redan angivet i minuter, inte decimalgrader." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "30' = 0,5°",
        "longReasoning": "Texten ger exemplet: 'Dividera för att omvandla till decimalform: 30′ ÷ 60 = 0,5°'"
      },
        {
        "question": "Vad är 0,20° i minuter?",
        "answers":[
            {"text": "2´", "incorrectReasoning": "0.20 * 60 = 12"},
            {"text": "12´", "incorrectReasoning": null},
            {"text":"20´", "incorrectReasoning": "0.20 * 60 = 12"},
            {"text": "200´", "incorrectReasoning": "0.20 * 60 = 12"}
        ],
        "correctAnswer":1,
        "shortReasoning": "0.20° = 12′",
        "longReasoning": "Texten ger exemplet: 'Multiplicera för att omvandla till minuter: 0,20° X 60 = 12´'"
        },
      {
        "question": "Vad motsvarar 6' (6 minuter) i decimalgrader?",
        "answers": [
          { "text": "0,01°", "incorrectReasoning": "Det är 0,1°." },
          { "text": "0,1°", "incorrectReasoning": null },
          { "text": "0,6°", "incorrectReasoning": "Det är 0,1°." },
          { "text": "6°", "incorrectReasoning": "Det är 0,1°." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "6' = 0,1°",
        "longReasoning": "Texten ger exemplet: '6΄ = 0,1°'"
      },
      {
        "question": "Vad motsvarar 1°18' i decimalgrader?",
        "answers": [
          { "text": "1,18°", "incorrectReasoning": "18 / 60 = 0,3.  1 + 0,3 = 1,3" },
          { "text": "1,3°", "incorrectReasoning": null },
          { "text": "1,8°", "incorrectReasoning": "18 / 60 = 0,3.  1 + 0,3 = 1,3" },
          { "text": "11,8°", "incorrectReasoning": "18 / 60 = 0,3.  1 + 0,3 = 1,3" }
        ],
        "correctAnswer": 1,
        "shortReasoning": "1°18' = 1,3°",
        "longReasoning": "Texten ger exemplet: '1°18′ = 1,3°'"
      },
      {
        "question": "Vad motsvarar 5°30' i decimalgrader?",
        "answers":[
          { "text": "5,03°", "incorrectReasoning": "30 / 60 = 0.5" },
          {"text": "5,3°", "incorrectReasoning": "30 / 60 = 0.5"},
          {"text":"5,5°", "incorrectReasoning":null},
          {"text": "53°", "incorrectReasoning": "30 / 60 = 0.5"}
        ],
         "correctAnswer": 2,
        "shortReasoning": "5°30' = 5,5°",
        "longReasoning": "Texten ger exemplet: '5°30′ = 5,5°'"
      },
       {
        "question": "Vad motsvarar 7°33' i decimalgrader?",
        "answers":[
          {"text":"7,33°", "incorrectReasoning": "33/60 = 0.55"},
          {"text":"7,35°", "incorrectReasoning": "33/60 = 0.55"},
          {"text":"7,55°", "incorrectReasoning":null},
          {"text":"73,3°", "incorrectReasoning": "33/60 = 0.55"}
        ],
        "correctAnswer":2,
        "shortReasoning": "7°33' = 7,55°",
        "longReasoning": "Texten ger exemplet: '7°33′ = 7,55°'"
      },
        {
        "question": "Vad motsvarar 10°24' i decimalgrader?",
        "answers":[
            {"text":"1,024°", "incorrectReasoning": "24 / 60 = 0.4, alltså 10.4"},
            {"text": "10,24°", "incorrectReasoning": "24 / 60 = 0.4"},
            {"text": "10,4°", "incorrectReasoning":null},
            {"text": "102,4°", "incorrectReasoning": "24 / 60 = 0.4"}
        ],
         "correctAnswer": 2,
        "shortReasoning":"10°24' = 10,4°",
        "longReasoning": "Texten ger exemplet: '10°24′ = 10,4°'"
      },
        {
          "question":"Vad motsvarar 13°54' i decimalgrader?",
          "answers":[
            {"text": "1,354°", "incorrectReasoning": "54 / 60 = 0.9, alltså 13.9"},
            {"text":"13,54°", "incorrectReasoning": "54 / 60 = 0.9"},
            {"text": "13,9°", "incorrectReasoning": null},
            {"text":"135,4°", "incorrectReasoning": "54 / 60 = 0.9"}
          ],
           "correctAnswer": 2,
          "shortReasoning": "13°54' = 13,9°",
          "longReasoning": "Texten ger exemplet: '13°54′ = 13,9°'"
        },
      {
        "question": "Hur delas mekaniska mätdon upp?",
        "answers": [
          { "text": "Endast i fasta mätdon", "incorrectReasoning": "De delas upp i fasta och visande mätdon." },
          { "text": "Fasta mätdon och visande mätdon", "incorrectReasoning": null },
          { "text": "Endast i visande mätdon", "incorrectReasoning": "De delas upp i fasta och visande mätdon." },
          { "text": "I stora och små mätdon", "incorrectReasoning": "Uppdelningen är fasta/visande, inte storlek." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Mekaniska mätdon delas upp i fasta och visande.",
        "longReasoning": "Texten anger: 'Mekaniska mätdon uppdelas i fasta mätdon och visande mätdon.'"
      },
      {
        "question": "Vad kännetecknar fasta mätdon?",
        "answers": [
          { "text": "De har en rörlig skala", "incorrectReasoning": "Fasta mätdon har *inga* rörliga delar." },
          { "text": "De har en fast mätdel eller kontur", "incorrectReasoning": null },
          { "text": "De visar ett aktuellt mätvärde", "incorrectReasoning": "Detta är kännetecknande för *visande* mätdon." },
          { "text": "De är alltid digitala", "incorrectReasoning": "Fasta mätdon är inte digitala." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Fasta mätdon har en fast mätdel eller kontur.",
        "longReasoning": "Texten beskriver: 'De fasta mätdonen har en fast mätdel eller kontur som används vid kontroll och jämförelse mot ett speciellt mått eller profil.'"
      },
       {
        "question": "Varför har fasta mätdon ofta hög noggrannhet?",
        "answers": [
          { "text": "De är gjorda av dyra material", "incorrectReasoning": "Noggrannheten beror på avsaknaden av rörliga delar." },
          { "text": "De saknar rörliga delar", "incorrectReasoning": null },
          { "text": "De är elektroniska", "incorrectReasoning": "Fasta mätdon är inte elektroniska." },
          { "text": "De är lätta att använda", "incorrectReasoning": "Användarvänlighet påverkar inte i sig noggrannheten." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Fasta mätdon saknar rörliga delar, vilket ger hög noggrannhet.",
        "longReasoning": "Texten anger: 'Fasta mätdon har ofta en hög noggrannhet eftersom den saknar rörliga delar.'"
      },
        {
        "question":"Ge exempel på fasta mätdon.",
        "answers":[
          {"text":"Endast tolkar", "incorrectReasoning":"Fler exempel ges"},
          {"text":"Tolkar, passbitar, mallar och vinkelhake", "incorrectReasoning":null},
          {"text":"Endast skjutmått och mikrometrar", "incorrectReasoning": "Dessa är visande mätdon"},
          {"text":"Endast mätklockor", "incorrectReasoning": "Dessa är visande mätdon"}
        ],
          "correctAnswer": 1,
        "shortReasoning":"Exempel är tolkar, passbitar, mallar och vinkelhake.",
        "longReasoning":"Texten ger exemplen: 'Olika typer av fasta mätdon är tolkar, passbitar, mallar och vinkelhake.'"
      },
        {
        "question": "Vad kännetecknar visande mätdon?",
        "answers": [
          { "text": "De har inga rörliga delar", "incorrectReasoning": "Visande mätdon *har* rörliga delar." },
          { "text": "De visar ett aktuellt mätvärde", "incorrectReasoning": null },
          { "text": "De används endast för att mäta längd", "incorrectReasoning": "De kan mäta olika storheter." },
          { "text": "De är mindre noggranna än fasta mätdon", "incorrectReasoning": "Noggrannheten kan variera." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Visande mätdon visar ett aktuellt mätvärde.",
        "longReasoning": "Texten beskriver: 'De visande mätdonen är generellt mer användbara, då de visar ett aktuellt mätvärde för det specifika måttet.'"
      },
      {
        "question": "Ge exempel på visande mätdon.",
        "answers":[
          {"text":"Endast skjutmått", "incorrectReasoning":"Fler exempel ges"},
            {"text": "Höjdmått, klockor, skjutmått, mikrometrar, indikatorer, vinkelmätare", "incorrectReasoning":null},
          {"text":"Endast tolkar och passbitar", "incorrectReasoning":"Dessa är fasta mätdon"},
          {"text": "Endast mallar och vinkelhakar", "incorrectReasoning":"Dessa är fasta mätdon"}
        ],
        "correctAnswer": 1,
        "shortReasoning":"Exempel är höjdmått, klockor, skjutmått, mikrometrar, indikatorer, vinkelmätare.",
        "longReasoning":"Texten ger exemplen 'Olika typer av visande mätdon är höjdmått, klockor, skjutmått, mikrometrar, indikatorer, vinkelmätare.'"
      },
      {
        "question": "Vad används en håltolk till?",
        "answers": [
          { "text": "Att mäta längder", "incorrectReasoning": "Håltolkar används för hål." },
          { "text": "Att kontrollera hål", "incorrectReasoning": null },
          { "text": "Att mäta vinklar", "incorrectReasoning": "Håltolkar används för hål." },
          { "text": "Att mäta gängor", "incorrectReasoning": "Gängtolkar används för gängor." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Håltolkar används för kontroll av hål.",
        "longReasoning": "Texten anger: 'Håltolk är ett fast mätdon för kontroll av hål...'"
      },
      {
        "question": "Vad har en håltolk ofta för sidor?",
        "answers": [
          { "text": "En slät sida och en räfflad sida", "incorrectReasoning": "Den har sidor för min- och maxtolerans." },
          { "text": "En sida med mintolerans (\"GÅ\") och en sida med maxtolerans (\"STOPP\")", "incorrectReasoning": null },
          { "text": "En sida för längdmätning och en sida för breddmätning", "incorrectReasoning": "Den har sidor för min- och maxtolerans." },
          { "text": "En sida för invändig mätning och en sida för utvändig mätning", "incorrectReasoning": "Den har sidor för min- och maxtolerans." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Håltolkar har ofta en \"GÅ\"-sida (min) och en \"STOPP\"-sida (max).",
        "longReasoning": "Texten beskriver: 'Men de har ofta en sida med mintolerans \"GÅ\" och en sida med maxtolerans \"STOPP\".'"
      },
        {
        "question":"Vad innebär det om \"GÅ\"-sidan på en håltolk går i hålet men inte \"STOPP\"-sidan?",
        "answers":[
          {"text": "Hålet är för litet", "incorrectReasoning": "Då är hålet godkänt"},
          {"text": "Hålet är för stort", "incorrectReasoning": "Då skulle båda sidor gå i"},
          {"text":"Hålet är godkänt", "incorrectReasoning": null},
          {"text":"Hålet är ovalt", "incorrectReasoning": "Det kan man inte veta med en håltolk"}
        ],
        "correctAnswer": 2,
        "shortReasoning": "Om \"GÅ\" går men inte \"STOPP\", är hålet godkänt.",
        "longReasoning":"Texten förklarar: '• Går \"GÅ” men inte \"STOPP” är hålet godkänt'"
      },
       {
        "question": "Vad innebär det om varken \"GÅ\"- eller \"STOPP\"-sidan på en håltolk går i hålet?",
        "answers": [
          { "text": "Hålet är godkänt", "incorrectReasoning": "Då är hålet för litet." },
          { "text": "Hålet är för litet", "incorrectReasoning": null },
          { "text": "Hålet är för stort", "incorrectReasoning": "Då skulle \"GÅ\"-sidan gå i." },
          { "text": "Hålet är ovalt", "incorrectReasoning": "Håltolken visar inte ovalitet." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Om varken \"GÅ\" eller \"STOPP\" går i, är hålet för litet.",
        "longReasoning": "Texten anger: '• Varken \"GÅ\"- eller \"STOPP\" är hålet för litet'"
      },
      {
        "question": "Vad innebär det om både \"GÅ\"- och \"STOPP\"-sidan på en håltolk går i hålet?",
        "answers":[
          {"text": "Hålet är för litet", "incorrectReasoning":"Då skulle ingen av sidorna gå i"},
          {"text": "Hålet är godkänt", "incorrectReasoning":"Då skulle bara \"GÅ\"-sidan gå i"},
          {"text":"Hålet är för stort", "incorrectReasoning":null},
          {"text":"Hålet är ovalt", "incorrectReasoning": "Det kan man inte veta med en håltolk"}
        ],
        "correctAnswer": 2,
        "shortReasoning": "Om både \"GÅ\" och \"STOPP\" går i, är hålet för stort.",
        "longReasoning": "Texten förklarar: '• Både \"GÅ\"- och \"STOPP\" är hålet för stort'"
      },
      {
          "question": "Vad brukar finnas markerat på en håltolk?",
          "answers":[
              {"text":"Tillverkarens namn", "incorrectReasoning": "Storlek och tolerans är viktigast"},
              {"text":"Materialet", "incorrectReasoning": "Storlek och tolerans är viktigast"},
              {"text":"Storlek och tolerans", "incorrectReasoning":null},
              {"text": "Datum för tillverkning", "incorrectReasoning":"Storlek och tolerans är viktigast"}
          ],
        "correctAnswer": 2,
        "shortReasoning": "Storlek och tolerans är markerat på håltolken.",
        "longReasoning":"Bildtexten anger: 'Här är storlek och tolerans uppmärkt på tolken'"
      },
      {
        "question": "Vad visar den röda ringen på en håltolk?",
        "answers":[
          {"text": "GÅ-sidan", "incorrectReasoning":"Den visar stoppsidan"},
          {"text": "Tillverkaren", "incorrectReasoning": "Den visar stoppsidan"},
          {"text":"Stoppsidan", "incorrectReasoning":null},
          {"text": "Materialet", "incorrectReasoning":"Den visar stoppsidan"}
        ],
         "correctAnswer": 2,
        "shortReasoning":"Den röda ringen visar stoppsidan.",
        "longReasoning": "Bildtexten förklarar 'Den röda ringen visar stoppsidan'"
      },
      {
        "question": "Vad används en gängtolk till?",
        "answers": [
          { "text": "Att mäta längder", "incorrectReasoning": "Gängtolkar används för gängor." },
          { "text": "Att kontrollera invändiga gängor", "incorrectReasoning": null },
          { "text": "Att mäta vinklar", "incorrectReasoning": "Gängtolkar används för gängor." },
          { "text": "Att kontrollera hål", "incorrectReasoning": "Håltolkar används för hål." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Gängtolkar används för kontroll av invändiga gängor.",
        "longReasoning": "Texten anger: 'Gängtolk är ett fast mätdon för kontroll av invändiga gängor...'"
      },
       {
        "question": "Vad har en gängtolk ofta för sidor?",
        "answers": [
          { "text": "En slät sida och en räfflad sida", "incorrectReasoning": "Den har sidor för min- och maxtolerans." },
          { "text": "En mintoleranssida (\"GÅ\") och en maxtoleranssida (\"STOPP\")", "incorrectReasoning": null },
          { "text": "En sida för längdmätning och en sida för breddmätning", "incorrectReasoning": "Den har sidor för min- och maxtolerans." },
          { "text": "En sida för invändig mätning och en sida för utvändig mätning", "incorrectReasoning": "Den har sidor för min- och maxtolerans." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Gängtolkar har ofta en \"GÅ\"-sida (min) och en \"STOPP\"-sida (max).",
        "longReasoning": "Texten beskriver: 'Gängtolkar har ofta en mintoleranssida \"GÅ\", och en maxtoleranssida \"STOPP\".'"
      },
      {
          "question": "Hur många varv ska \"STOPP\"-sidan på en gängtolk gå att gänga i ett godkänt gängat hål?",
          "answers":[
            {"text":"Hela vägen", "incorrectReasoning":"Då är gängan för stor, \"STOPP\" ska bara gå i ca 2 varv"},
            {"text": "Inte alls", "incorrectReasoning":"Då är gängen för liten, \"STOPP\" ska gå i ca 2 varv"},
            {"text":"Ca 2 varv", "incorrectReasoning": null},
            {"text":"Det spelar ingen roll", "incorrectReasoning": "Det är viktigt för att veta om toleransen är rätt"}
          ],
          "correctAnswer": 2,
          "shortReasoning": "\"STOPP\"-sidan ska gå i ca 2 varv.",
          "longReasoning": "Texten säger: '...\"GÅ\"-sidan gå att gänga i helt medans \"STOPP\"-sidan ska gå att gänga i ca 2 varv.'"
      },
       {
        "question": "Vad markeras på gängtolken?",
        "answers": [
          { "text": "Endast tillverkaren", "incorrectReasoning": "Storlek och tolerans är viktigast." },
          { "text": "Endast materialet", "incorrectReasoning": "Storlek och tolerans är viktigast." },
          { "text": "Storlek och tolerans på gängan", "incorrectReasoning": null },
          { "text": "Endast datum för tillverkning", "incorrectReasoning": "Storlek och tolerans är viktigast." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "Storlek och tolerans på gängan markeras.",
        "longReasoning": "Bildtexten anger: 'Här är storlek och tolerans på gängan markerad'"
      },
      {
        "question": "Hur kan stoppsidan på en gängtolk vara markerad?",
        "answers":[
          {"text":"Med en blå ring", "incorrectReasoning": "Text eller röd ring används"},
          {"text":"Med text eller en röd ring", "incorrectReasoning":null},
          {"text":"Med en grön ring", "incorrectReasoning": "Text eller röd ring används"},
          {"text":"Med en gul ring", "incorrectReasoning": "Text eller röd ring används"}
        ],
          "correctAnswer": 1,
        "shortReasoning":"Stoppsidan kan markeras med text eller en röd ring.",
        "longReasoning": "Bildtexterna anger: 'Här är stoppsidan markerad med text' och 'Här är stoppsidan markerad med en röd ring'"
      },
      {
        "question": "Vad används en gängring till?",
        "answers": [
          { "text": "Att mäta längder", "incorrectReasoning": "Gängringar används för gängor." },
          { "text": "Att kontrollera utvändiga gängor", "incorrectReasoning": null },
          { "text": "Att mäta vinklar", "incorrectReasoning": "Gängringar används för gängor." },
          { "text": "Att kontrollera hål", "incorrectReasoning": "Håltolkar används för hål." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Gängringar används för kontroll av utvändiga gängor.",
        "longReasoning": "Texten anger: 'Gängringen är ett fast mätdon som används för att kontrollera utvändiga gängor.'"
      },
       {
        "question": "Hur många ringar använder man vid kontroll av en utvändig gänga med gängringar?",
        "answers": [
          { "text": "En", "incorrectReasoning": "Man använder två ringar, en för min- och en för maxtolerans." },
          { "text": "Två", "incorrectReasoning": null },
          { "text": "Tre", "incorrectReasoning": "Man använder två ringar." },
          { "text": "Fyra", "incorrectReasoning": "Man använder två ringar." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Man använder två gängringar: \"GÅ\" och \"STOPP\".",
        "longReasoning": "Texten beskriver: 'Vid kontroll av en utvändig gänga använder man två ringar, en med mintolerans \"GÅ\" och en med maxtolerans \"STOPP\"...'"
      },
      {
          "question":"Vad ska hända med \"GÅ\"-ringen vid kontroll av en utvändig gänga?",
          "answers":[
              {"text":"Den ska inte gå att gänga på", "incorrectReasoning": "Den *ska* gå att gänga på helt"},
              {"text":"Den ska gå att gänga på ca 2 varv", "incorrectReasoning": "Det gäller \"STOPP\"-ringen"},
              {"text": "Den ska gå att gänga på helt", "incorrectReasoning":null},
              {"text":"Det spelar ingen roll", "incorrectReasoning":"Det är avgörande för att veta om toleransen är rätt"}
          ],
          "correctAnswer": 2,
          "shortReasoning": "\"GÅ\"-ringen ska gå att gänga på helt.",
          "longReasoning": "Texten säger: '...\"GÅ\"-ringen ska gå att gänga på helt medans \"STOPP\"-ringen ska gå att gänga på ca 2 varv.'"
      },
      {
          "question": "Vad brukar vara markerat på en gängring?",
          "answers":[
            {"text":"Tillverkarens namn", "incorrectReasoning":"Storlek och tolerans är viktigast"},
            {"text":"Materialet", "incorrectReasoning":"Storlek och tolerans är viktigast"},
            {"text":"Storlek och tolerans på gängan", "incorrectReasoning":null},
            {"text":"Datum för tillverkningen", "incorrectReasoning":"Storlek och tolerans är viktigast"}
          ],
          "correctAnswer": 2,
        "shortReasoning":"Storlek och tolerans är markerat på gängringen.",
        "longReasoning": "Bildtexten anger: 'Här är storlek och tolerans på gängan markerad'"
      },
      {
        "question": "Hur markeras \"STOPP\"-ringen på en gängring?",
        "answers": [
          { "text": "Med en blå prick", "incorrectReasoning": "En röd prick används." },
          { "text": "Med en grön prick", "incorrectReasoning": "En röd prick används." },
          { "text": "Med en röd prick", "incorrectReasoning": null },
          { "text": "Med en gul prick", "incorrectReasoning": "En röd prick används." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "\"STOPP\"-ringen markeras med en röd prick.",
        "longReasoning": "Bildtexten anger: 'Här är \"STOPP\"-ringen markerad med en röd prick'"
      },
      {
        "question": "Vad är ett annat namn för haktolk?",
        "answers": [
          { "text": "Skjutmått", "incorrectReasoning": "Skjutmått är ett annat mätverktyg." },
          { "text": "Mikrometer", "incorrectReasoning": "Mikrometer är ett annat mätverktyg." },
          { "text": "Toleranshaktolk", "incorrectReasoning": null },
          { "text": "Passbit", "incorrectReasoning": "Passbitar är ett annat mätverktyg." }
        ],
        "correctAnswer": 2,
        "shortReasoning": "Haktolk kallas ibland toleranshaktolk.",
        "longReasoning": "Texten anger: 'Haktolken som ibland kallas toleranshaktolk...'"
      },
      {
          "question":"Vad kan mätklackarna på en haktolk vara?",
          "answers":[
            {"text":"Endast sfäriska", "incorrectReasoning":"De kan vara både sfäriska och plana"},
            {"text": "Endast plana", "incorrectReasoning": "De kan vara både sfäriska och plana"},
            {"text":"Sfäriska och plana", "incorrectReasoning":null},
            {"text":"Varken sfäriska eller plana", "incorrectReasoning":"Det måste de vara"}
          ],
        "correctAnswer": 2,
        "shortReasoning":"Mätklackarna kan vara sfäriska eller plana.",
        "longReasoning":"Texten säger '...dessa mätklackar kan vara både sfäriska och plana.'"
      },
      {
          "question":"Hur ställer man in en ställbar haktolk?",
          "answers":[
            {"text": "Med en skruvmejsel", "incorrectReasoning": "Man använder passbitar"},
            {"text": "Med en hammare", "incorrectReasoning": "Det ska man inte göra"},
            {"text": "Med hjälp av passbitar", "incorrectReasoning":null},
            {"text": "Den behöver inte ställas in", "incorrectReasoning":"Den *måste* ställas in"}
          ],
          "correctAnswer":2,
          "shortReasoning":"En ställbar haktolk ställs in med passbitar.",
          "longReasoning": "Texten säger: 'Vid användning av en ställbar haktolk är det viktigt att tolken är rätt inställd och visar rätt värde. Om så inte är fallet måste tolken kallibreras, vilket sker med hjälp av passbitar...'"
      },
        {
        "question": "Hur ska man använda en haktolk vid mätning?",
        "answers": [
          { "text": "Pressa tolken hårt över detaljen", "incorrectReasoning": "Man ska låta tolken 'falla' med sin egen tyngd." },
          { "text": "Låta tolken \"falla\" med sin egen tyngd över mätobjektet", "incorrectReasoning": null },
          { "text": "Slå tolken mot detaljen", "incorrectReasoning": "Man ska *inte* slå med en haktolk." },
          { "text": "Använda så mycket kraft som möjligt", "incorrectReasoning": "Man ska använda minimal kraft." }
        ],
        "correctAnswer": 1,
        "shortReasoning": "Låt haktolken \"falla\" med sin egen tyngd.",
        "longReasoning": "Texten betonar: 'Vid mätning med haktolk är det viktigt att inte använda för stor kraft och pressa tolken över detaljen utan att man låter tolken \"falla\" med sin egen tyngd över mätobjektet.'"
      },
      {
        "question": "Vad indikerar det om \"GÅ\"-mätklacken på en haktolk går över detaljen, men inte \"STOPP\"-mätklacken?",
        "answers":[
          {"text":"Detaljen är för stor", "incorrectReasoning":"Då är detaljen godkänd"},
          {"text": "Detaljen är för liten", "incorrectReasoning": "Då skulle båda gå över"},
          {"text":"Detaljen är godkänd", "incorrectReasoning":null},
          {"text":"Detaljen är oval", "incorrectReasoning":"Haktolken indikerar inte ovalitet på detta sättet"}
        ],
      "correctAnswer": 2,
      "shortReasoning": "Detaljen är godkänd.",
      "longReasoning": "Texten säger: '•\"GÅ\"- men inte \"STOPP\"-mätklacken är den godkänd.'"
    },
    {
      "question": "Vad indikerar det om både \"GÅ\"- och \"STOPP\"-mätklacken på en haktolk går över detaljen?",
      "answers": [
        { "text": "Detaljen är godkänd", "incorrectReasoning": "Då är detaljen för liten." },
        { "text": "Detaljen är för liten", "incorrectReasoning": null },
        { "text": "Detaljen är för stort", "incorrectReasoning": "Då skulle ingen av mätklackarna gå över." },
        { "text": "Detaljen är oval", "incorrectReasoning": "Haktolken indikerar inte ovalitet på detta sättet." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Detaljen är för liten.",
      "longReasoning": "Texten anger: '•Både \"GÅ\"- och \"STOPP\"-mätklacken är den för liten.'"
    },
      {
      "question":"Vad indikerar det om varken \"GÅ\"- eller \"STOPP\"-mätklacken på en haktolk går över detaljen?",
      "answers":[
        {"text": "Detaljen är för liten", "incorrectReasoning":"Då är detaljen för stor"},
        {"text":"Detaljen är godkänd", "incorrectReasoning": "Då är detaljen för stor"},
        {"text":"Detaljen är för stor", "incorrectReasoning":null},
        {"text":"Detaljen är oval", "incorrectReasoning": "Haktolken indikerar inte ovalitet"}
      ],
        "correctAnswer": 2,
      "shortReasoning": "Detaljen är för stor.",
      "longReasoning": "Texten säger: '•Varken \"GÅ\"-mätklacken är detaljen för stor.'"
    },
    {
      "question": "Vad kallas den del av haktolken som ofta är gjord av ett värmeisolerande material?",
      "answers":[
          {"text":"Mätklack", "incorrectReasoning":"Mätklacken är den del som är i kontakt med detaljen"},
          {"text":"Stoppklack", "incorrectReasoning": "Stoppklacken är en del av mätklacken"},
          {"text": "Isolerplatta", "incorrectReasoning":null},
          {"text": "Handtag", "incorrectReasoning": "Isolerplattan är specifik för värmeisolering"}
      ],
      "correctAnswer": 2,
      "shortReasoning":"Isolerplatta",
      "longReasoning": "Bildtexten anger 'Isolerplatta'"
    },
      {
      "question":"Vad är passbitar?",
      "answers":[
          {"text": "Runda block av trä", "incorrectReasoning":"Rektangulära block av keramik eller stål"},
          {"text":"Rektangulära block tillverkade av keramik eller stål med stor noggrannhet", "incorrectReasoning": null},
          {"text": "Verktyg för att slipa metall", "incorrectReasoning":"De är precisionsblock"},
          {"text":"Verktyg för att mäta vinklar", "incorrectReasoning": "Vinkelhakar/mätare används för vinklar"}
      ],
      "correctAnswer": 1,
      "shortReasoning":"Passbitar är noggrant tillverkade rektangulära block.",
      "longReasoning":"Texten definierar: 'Passbitar är ett rektangulärt block tillverkat av keramik eller stål som är tillverkade med stor noggrannhet.'"
    },
    {
      "question": "Vilka noggrannhetsgrader finns för passbitar?",
      "answers": [
        { "text": "Endast grad 0 och 1", "incorrectReasoning": "Det finns fler grader: 2, 1, 0 och 00(K)." },
        { "text": "Grad 2, 1, 0 och 00(K)", "incorrectReasoning": null },
        { "text": "Endast grad 2", "incorrectReasoning": "Det finns fler grader." },
        { "text": "A, B, C och D", "incorrectReasoning": "Det är 2, 1, 0, 00(K) som gäller." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Noggrannhetsgrader: 2, 1, 0 och 00(K).",
      "longReasoning": "Texten listar: 'Passbitar finns med olika noggrannhet och är graderade enlig följande system: Noggrannhetssgrad 2: ... Noggrannhetssgrad 1: ... Noggrannhetssgrad 0: ... Noggrannhetssgrad 00(K): ...'"
    },
    {
      "question": "Vad används passbitar med noggrannhetsgrad 2 till?",
      "answers":[
        {"text": "För laboratorieändamål", "incorrectReasoning":"Det är grad 00(K)"},
        {"text": "Som master för kontroll av andra passbitar", "incorrectReasoning": "Det är grad 0"},
        {"text":"För verkstads- och inställningsmått, samt kontroll av vippindikatorer", "incorrectReasoning":null},
        {"text":"För inställning av mätmaskiner", "incorrectReasoning": "Det är grad 0"}
      ],
      "correctAnswer": 2,
      "shortReasoning": "Verkstadsbruk, inställning och kontroll av vippindikatorer.",
      "longReasoning": "Texten anger: 'Noggrannhetssgrad 2: Lämpade for verkstads- och inställningsmått, för kontroll av vippindikatorer och mätur samt i stället för fasta hakmått.'"
    },
      {
      "question": "Vad används passbitar med noggrannhetsgrad 1 till?",
      "answers":[
        {"text":"Endast för verkstadsbruk", "incorrectReasoning":"De används för mer noggranna arbeten"},
        {"text": "För kontroll av avsyningsmått och tolkar, samt inställning av längdmätinstrument", "incorrectReasoning":null},
        {"text":"Endast i laboratoriemiljö", "incorrectReasoning":"Det är grad 00(K)"},
        {"text":"För att mäta vinklar", "incorrectReasoning":"De används för längdmätning"}
      ],
      "correctAnswer":1,
      "shortReasoning":"Kontroll av mått/tolkar, inställning av längdmätinstrument.",
      "longReasoning":"Texten beskriver användningsområden: 'Noggrannhetssgrad 1: För kontroll av avsyningsmått och tolkar, inställning av längdmätinstrument samt noggrannare avsyningsarbete i mätrum.'"
    },
    {
      "question": "Vad används passbitar med noggrannhetsgrad 0 till?",
      "answers":[
        {"text":"För grovmätning", "incorrectReasoning": "De används för *hög* noggrannhet"},
        {"text": "Som master för kontroll av verkstadspassbitar och inställning av mätinstrument", "incorrectReasoning": null},
        {"text":"För att mäta vinklar", "incorrectReasoning":"De används för längdmätning"},
        {"text":"För att slipa verktyg", "incorrectReasoning":"De är precisionsinstrument, inte slipverktyg"}
      ],
       "correctAnswer": 1,
      "shortReasoning":"Master för kontroll och inställning av mätinstrument/maskiner.",
      "longReasoning": "Texten anger: 'Noggrannhetssgrad 0: Som master för kontroll av verkstadspassbitar. För inställning av mätinstrument och mätmaskiner med hög noggrannhet.'"
    },
    {
        "question":"Vad används passbitar med noggrannhetssgrad 00(K) till?",
        "answers":[
            {"text": "För allmän verkstadsanvändning", "incorrectReasoning": "Denna grad är för laboratoriebruk"},
            {"text": "För att kontrollera andra passbitar", "incorrectReasoning":"Det är grad 0"},
            {"text":"För laboratorieändamål och som absolutmått", "incorrectReasoning":null},
            {"text": "För att mäta gängor", "incorrectReasoning":"Denna grad är för längdmätning"}
        ],
        "correctAnswer":2,
        "shortReasoning": "Laboratorieändamål och absolutmått.",
        "longReasoning": "Texten säger 'Noggrannhetssgrad 00(K): För laboratorieändamål och som absolutmått.'"
    },
     {
      "question": "Vad är speciellt med ytorna på en passbit?",
      "answers": [
        { "text": "De är grova", "incorrectReasoning": "De är mycket noggrant bearbetade." },
        { "text": "De är ojämna", "incorrectReasoning": "De är mycket noggrant bearbetade." },
        { "text": "Två parallella sidor är bearbetade med mycket hög måttriktighet", "incorrectReasoning": null },
        { "text": "De är magnetiska", "incorrectReasoning": "Måttriktigheten är det viktiga." }
      ],
      "correctAnswer": 2,
      "shortReasoning": "Två parallella sidor är mycket noggrant bearbetade.",
      "longReasoning": "Texten anger: 'På passbiten är två parallella sidor bearbetade med mycket hög måttriktighet.'"
    },
    {
      "question":"Vad innehåller en passbitssats?",
      "answers":[
          {"text":"Passbitar av samma tjocklek", "incorrectReasoning": "De är av *olika* tjocklek"},
          {"text":"Passbitar av olika tjocklek", "incorrectReasoning": null},
          {"text":"Verktyg för att slipa passbitar", "incorrectReasoning": "En passbitssats innehåller *endast* passbitar"},
          {"text":"Enbart passbitar av högsta noggrannhet", "incorrectReasoning":"En sats innehåller olika tjocklekar"}
      ],
        "correctAnswer": 1,
      "shortReasoning": "En passbitssats innehåller passbitar av olika tjocklek.",
      "longReasoning": "Texten förklarar: 'En passbitssats är en låda med passbitar där alla är olika tjocka...'"
    },
    {
      "question": "Hur kan man skapa ett mätdon med stor noggrannhet med hjälp av passbitar?",
      "answers": [
        { "text": "Genom att slipa dem", "incorrectReasoning": "Man ska *inte* slipa passbitar." },
        { "text": "Genom att löda ihop dem", "incorrectReasoning": "Man ska *inte* löda ihop passbitar." },
        { "text": "Genom att sammanfoga olika passbitar", "incorrectReasoning": null },
        { "text": "Genom att mäta dem med ett skjutmått", "incorrectReasoning": "Man *använder* passbitar för att skapa mått." }
      ],
      "correctAnswer": 2,
      "shortReasoning": "Genom att sammanfoga olika passbitar.",
      "longReasoning": "Texten fortsätter: '...genom att sammanfoga olika passbitar skapas ett mätdon med stor noggrannhet som möjliggör kontroll av olika mått.'"
    },
      {
      "question": "Hur bygger man ihop passbitar till måttet 27,86 mm (enligt exemplet)?",
      "answers":[
          {"text": "Slumpar ihop bitar tills det blir rätt", "incorrectReasoning":"Man ska välja bitar systematiskt"},
          {"text": "Börjar med den största biten", "incorrectReasoning":"Man börjar med den *minsta* biten, sista decimalen"},
          {"text":"Börjar med den minsta decimalen, och adderar bitar tills man når måttet", "incorrectReasoning":null},
          {"text": "Använder enbart en passbit", "incorrectReasoning": "Det krävs flera för att nå 27.86mm"}
      ],
      "correctAnswer": 2,
      "shortReasoning":"Börja med minsta decimalen (1,06mm) och addera.",
      "longReasoning": "Texten ger en steg-för-steg-beskrivning: '•Börja med en bit som har måttet av den sista decimalen, i vårat ex. blir det en bit med måttet 1,06mm. •Nästa bit 1,80mm. •Nästa bit 5,00mm. •Nästa bit 20,00mm. •20,00+5,00+1,80+1,06=27,86mm'"
    },
    {
      "question": "Vad används mallar till?",
      "answers": [
        { "text": "Att mäta längder", "incorrectReasoning": "Mallar används för profiler." },
        { "text": "Att kontrollera profiler", "incorrectReasoning": null },
        { "text": "Att mäta vinklar", "incorrectReasoning": "Mallar används för profiler." },
        { "text": "Att mäta gängor", "incorrectReasoning": "Det finns speciella gängmallar, men generellt används mallar för profiler" }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Mallar används för kontroll av profiler.",
      "longReasoning": "Texten anger: 'Mallar används för kontroll av profiler.'"
    },
    {
      "question": "Hur sker avläsning med mallar?",
      "answers":[
        {"text":"Genom att mäta med en linjal", "incorrectReasoning": "Man gör en *syn*jämförelse"},
        {"text": "Genom att väga mallen", "incorrectReasoning":"Man gör en synjämförelse"},
        {"text":"Genom synjämförelse mellan mallen och profilen", "incorrectReasoning":null},
        {"text": "Genom att använda en mikrometer", "incorrectReasoning": "Man gör en synjämförelse"}
      ],
        "correctAnswer": 2,
      "shortReasoning":"Avläsning sker genom synjämförelse.",
      "longReasoning": "Texten beskriver: 'Avläsning sker genom synjämförelse mellan mallen och profilen.'"
    },
     {
      "question": "Hur kan man underlätta avläsningen med mallar?",
      "answers": [
        { "text": "Genom att använda ett förstoringsglas", "incorrectReasoning": "Ljus eller vitt papper nämns i texten." },
        { "text": "Genom att blöta mallen", "incorrectReasoning": "Det hjälper inte, och kan skada mallen." },
        { "text": "Genom att hålla mallen och profilen mot en ljuskälla eller lägga ett vitt papper bakom", "incorrectReasoning": null },
        { "text": "Genom att använda en mörk bakgrund", "incorrectReasoning": "Ljus bakgrund (vitt papper) rekommenderas." }
      ],
      "correctAnswer": 2,
      "shortReasoning": "Använd ljuskälla eller vitt papper bakom.",
      "longReasoning": "Texten anger: 'För att underlätta vid jämförelse kan mallen och profilen hålls upp mot en ljuskälla eller genom att lägga ett vitt papper bakom.'"
    },
    {
        "question":"Ge exempel på olika typer av mallar.",
        "answers":[
          {"text": "Endast radiemallar", "incorrectReasoning": "Fler exempel ges"},
          {"text": "Radiemall, gängmall, borr slipmall", "incorrectReasoning": null},
          {"text": "Endast gängmallar", "incorrectReasoning":"Fler exempel ges"},
          {"text":"Endast vinkelmallar", "incorrectReasoning": "Vinkelhakar används för vinklar"}
        ],
      "correctAnswer":1,
      "shortReasoning":"Exempel: radiemall, gängmall, borr slipmall.",
      "longReasoning":"Bildtexterna anger: 'Radiemall: För kontroll av ut- och invändiga radier.', 'Gängmall: För kontroll av utvändiga gängor.', 'Gängmall: Används vid riggning av maskin vid gängning', 'Borr slipmall: Används vid slipning av borr.'"
    },
    {
      "question":"Vad används en radiemall till?",
      "answers":[
        {"text":"Att mäta längder", "incorrectReasoning":"Den används för radier"},
        {"text": "Att kontrollera gängor", "incorrectReasoning": "Det finns speciella gängmallar"},
        {"text":"Att kontrollera ut- och invändiga radier", "incorrectReasoning":null},
        {"text": "Att slipa borrar", "incorrectReasoning": "Borrslipmall används för det"}
      ],
       "correctAnswer": 2,
      "shortReasoning":"Radiemall används för ut- och invändiga radier.",
      "longReasoning":"Bildtexten anger: 'Radiemall: För kontroll av ut- och invändiga radier.'"
    },
    {
      "question":"Vad används en gängmall till (de två exemplen i bilden)?",
      "answers":[
          {"text": "Endast för att kontrollera utvändiga gängor", "incorrectReasoning": "En används också för riggning vid gängning"},
          {"text": "För kontroll av utvändiga gängor, och för riggning vid gängning", "incorrectReasoning":null},
          {"text":"Endast för att mäta längder", "incorrectReasoning": "Gängmallar är för gängor"},
          {"text":"Endast för att mäta vinklar", "incorrectReasoning": "Gängmallar är för gängor"}
      ],
       "correctAnswer": 1,
      "shortReasoning": "Kontrollera utvändiga gängor och riggning vid gängning.",
      "longReasoning": "Bildtexterna anger: 'Gängmall: För kontroll av utvändiga gängor.' och 'Gängmall: Används vid riggning av maskin vid gängning'"
    },
    {
        "question":"Vad används en borr slipmall till?",
        "answers":[
            {"text":"Att mäta vinklar", "incorrectReasoning": "Den används för att slipa borrar"},
            {"text":"Att kontrollera gängor", "incorrectReasoning": "Den används för att slipa borrar"},
            {"text":"Att slipa borrar", "incorrectReasoning":null},
            {"text":"Att mäta längder", "incorrectReasoning":"Den används för att slipa borrar"}
        ],
        "correctAnswer": 2,
        "shortReasoning":"Borr slipmall används för slipning av borrar.",
        "longReasoning": "Bildtexten säger: 'Borr slipmall: Används vid slipning av borr.'"
    },
    {
      "question": "Vad används en vinkelhake till?",
      "answers": [
        { "text": "Att mäta längder", "incorrectReasoning": "Vinkelhakar används för vinklar." },
        { "text": "Att kontrollera vinklar", "incorrectReasoning": null },
        { "text": "Att mäta gängor", "incorrectReasoning": "Vinkelhakar används för vinklar." },
        { "text": "Att kontrollera hål", "incorrectReasoning": "Håltolkar används för hål." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Vinkelhakar används för kontroll av vinklar.",
      "longReasoning": "Texten anger: 'Vinkelhaken är ett fast mätobjekt för kontroll av vinklar.'"
    },
    {
      "question":"Hur kontrollerar man en vinkel med en vinkelhake?",
      "answers":[
          {"text": "Genom att mäta längden på sidorna", "incorrectReasoning": "Man gör en *syn*jämförelse"},
          {"text": "Genom synjämförelse mellan vinkelhaken och mätobjektet", "incorrectReasoning": null},
          {"text": "Genom att väga vinkelhaken", "incorrectReasoning": "Man gör en synjämförelse"},
          {"text": "Genom att använda en linjal", "incorrectReasoning": "Man gör en synjämförelse med vinkelhaken"}
      ],
       "correctAnswer": 1,
      "shortReasoning": "Genom synjämförelse med mätobjektet.",
      "longReasoning": "Texten säger: 'Genom synjämförelse mellan vinkelhaken och mätobjektet konstaterar man om vinkeln är mindre, lika med eller större än 90 grader.'"
    },
        {
        "question": "Hur vet man om en vinkel är 90 grader med en vinkelhake?",
        "answers":[
          {"text":"Om det syns en ljusspringa", "incorrectReasoning":"Då är den *inte* 90 grader"},
          {"text": "Om man inte ser något ljus alls mellan vinkelhake och objekt", "incorrectReasoning":null},
          {"text":"Det går inte att veta", "incorrectReasoning": "Man kan se om det finns en ljusspringa"},
          {"text":"Om vinkelhaken vibrerar", "incorrectReasoning": "Ljusspringa är det som indikerar avvikelse"}
        ],
        "correctAnswer":1,
        "shortReasoning": "Ingen ljusspringa = 90 grader.",
        "longReasoning":"Texten säger: '...ser man inget ljus alls är vinkeln 90°'"
    },
    {
        "question":"Vad ska man göra för att lättare se om det finns en ljusspringa mellan vinkelhaken och mätobjektet?",
        "answers":[
            {"text":"Använda ett mörkt rum", "incorrectReasoning":"Ljus underlättar"},
            {"text":"Hålla upp mot en ljuskälla eller lägga ett vitt papper bakom.", "incorrectReasoning": null},
            {"text": "Blöta vinkelhaken", "incorrectReasoning": "Det hjälper inte, och kan skada"},
            {"text":"Använda en färgad lampa", "incorrectReasoning":"Vitt ljus/papper är bäst"}
        ],
          "correctAnswer": 1,
        "shortReasoning": "Håll mot ljuskälla eller använd vitt papper.",
        "longReasoning": "Texten förklarar: 'Håll en vinkelhake \"dikt an\" mot ett mätobjekt och sedan upp mot en ljuskälla eller lägga ett vitt papper bakom.'"
    },
      {
      "question": "Vad ska ligga \"dikt an\" mot varandra vid användning av vinkelhake?",
      "answers":[
        {"text":"Vinkelhakens handtag och mätobjektet", "incorrectReasoning": "Det är ytorna som ska vara i kontakt"},
        {"text": "Två vinkelhakar", "incorrectReasoning":"Det ska vara vinkelhaken och mätobjektet"},
        {"text":"Dessa ytor (på vinkelhake och objekt) ska ligga \"dikt an\"", "incorrectReasoning":null},
        {"text": "Vinkelhaken och en linjal", "incorrectReasoning":"Linjal behövs inte"}
      ],
       "correctAnswer": 2,
      "shortReasoning": "Vinkelhakens och mätobjektets ytor ska ligga \"dikt an\".",
      "longReasoning": "Bildtexten anger: 'Dessa ytor ligger \"dikt an\" mot vinkelhaken'"
    },
    {
        "question": "Vad indikerar en ljusspalt mellan vinkelhake och detalj när den uppmätta vinkeln är mindre än 90 grader?",
          "answers":[
              {"text": "Att vinkeln är exakt 90 grader", "incorrectReasoning":"Då skulle det inte finnas någon ljusspalt"},
              {"text":"Att vinkeln är större eller mindre än 90 grader", "incorrectReasoning": null},
              {"text": "Att vinkelhaken är trasig", "incorrectReasoning": "Ljusspalten indikerar vinkelavvikelse"},
              {"text": "Att mätningen är felaktig", "incorrectReasoning": "Ljusspalten *visar* felet, men orsakas av vinkelavvikelsen"}
          ],
          "correctAnswer": 1,
          "shortReasoning": "En ljusspalt indikerar att vinkeln är större eller mindre än 90 grader.",
          "longReasoning": "Bildtexten tillsammans med förklarande texten ger svaret."
    },
    {
      "question": "Ge exempel på visande mätdon.",
      "answers":[
          {"text":"Endast passbitar", "incorrectReasoning":"Passbitar är ett fast mätdon"},
          {"text": "Höjdmått, klockor, skjutmått, mikrometrar, indikatorer, vinkelmätare", "incorrectReasoning":null},
          {"text":"Endast vinkelhakar", "incorrectReasoning": "Vinkelhakar kan vara fasta"},
          {"text":"Endast mallar", "incorrectReasoning": "Mallar är fasta"}
      ],
        "correctAnswer": 1,
      "shortReasoning": "Exempel är höjdmått, klockor, skjutmått, mikrometrar, etc.",
      "longReasoning": "Texten upprepar: 'Olika typer av visande mätdon är höjdmått, klockor, skjutmått, mikrometrar, indikatorer, vinkelmätare.'"
    },
    {
        "question": "Vad används en höjdmätare till?",
        "answers":[
          {"text": "Att mäta längder", "incorrectReasoning": "Den används för höjdskillnader"},
          {"text": "Att mäta höjdskillnader mellan ytor eller objekt", "incorrectReasoning": null},
          {"text":"Att mäta vinklar", "incorrectReasoning":"Den används för höjder"},
          {"text":"Att mäta gängor", "incorrectReasoning": "Den används för höjder"}
        ],
         "correctAnswer": 1,
        "shortReasoning":"Höjdmätare mäter höjdskillnader.",
        "longReasoning":"Texten säger: 'Höjdmätare är ett visande mätdon som används för att mäta höjdskillnader mellan olika ytor eller objekt.'"
    },
    {
      "question":"Vad används ofta tillsammans med en höjdmätare?",
      "answers":[
        {"text":"En linjal", "incorrectReasoning":"Vippindikator eller mätur används"},
        {"text":"En vinkelhake", "incorrectReasoning": "Vippindikator eller mätur används"},
        {"text":"En vippindikator eller ett mätur", "incorrectReasoning":null},
        {"text": "En passbit", "incorrectReasoning": "Passbitar kan användas som referens, men vippindikator/mätur används för själva mätningen"}
      ],
       "correctAnswer": 2,
      "shortReasoning":"Vippindikator eller mätur används ofta med höjdmätare.",
      "longReasoning": "Texten anger: 'Till höjdmätaren används ofta en vippindikator eller ett mätur.'"
    },
      {
      "question":"Vad innebär det att \"nollställa\" höjdmätaren vid mätning mellan likvända ytor?",
      "answers":[
        {"text": "Att förstöra höjdmätaren", "incorrectReasoning": "Nollställa innebär att sätta en referenspunkt."},
        {"text": "Att ställa höjdmätaren mot en yta som referens", "incorrectReasoning":null},
        {"text": "Att mäta höjden på höjdmätaren", "incorrectReasoning":"Det är inte syftet"},
        {"text": "Att slipa höjdmätaren", "incorrectReasoning":"Man ska inte slipa en höjdmätare"}
      ],
        "correctAnswer": 1,
      "shortReasoning": "Nollställa är att sätta en referenspunkt mot en yta.",
      "longReasoning": "Texten förklarar: 'Vid mätning mellan likvända ytor \"nollställs\" höjdmätaren mot en yta...'"
    },
      {
        "question":"Vad kallas det när man mäter skillnaden mellan två objekt med en höjdmätare, genom att först nollställa mot ett referensobjekt?",
        "answers":[
          {"text":"Direkt mätning", "incorrectReasoning": "Det kallas *indirekt* mätning"},
          {"text": "Absolut mätning", "incorrectReasoning": "Det kallas indirekt mätning"},
          {"text":"Indirekt mätning", "incorrectReasoning":null},
          {"text":"Relativ mätning", "incorrectReasoning": "Indirekt mätning är mer specifikt i detta fall"}
        ],
        "correctAnswer": 2,
        "shortReasoning": "Det kallas indirekt mätning.",
        "longReasoning": "Texten avslutar beskrivningen med: 'Detta sätt att mäta kallas för indirekt mätning.'"
      },
      {
      "question": "Vad är de vanligaste typerna av mätklockor?",
      "answers": [
        { "text": "Endast digitala klockor", "incorrectReasoning": "Mätur och vippindikator nämns." },
        { "text": "Mätur och vippindikator", "incorrectReasoning": null },
        { "text": "Endast analoga klockor", "incorrectReasoning": "Mätur och vippindikator är de vanligaste." },
        { "text": "Endast skjutmått", "incorrectReasoning": "Skjutmått är inte en typ av klocka." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Mätur och vippindikator är de vanligaste.",
      "longReasoning": "Texten anger: 'Inom verkstadsindustrin används ofta klockor, de vanligaste är mätur och vippindikator.'"
    },
    {
      "question":"Vad är en fördel med en vippindikator?",
      "answers":[
        {"text": "Den är billig", "incorrectReasoning": "Funktionen, inte priset, nämns som fördel"},
        {"text":"Den är digital", "incorrectReasoning":"Vippindikatorer är oftast analoga"},
        {"text":"Den är ett utmärkt hjälpmedel vid uppriktning av detaljer", "incorrectReasoning":null},
        {"text": "Den är stor och robust", "incorrectReasoning":"Funktionen är fördelen"}
      ],
      "correctAnswer": 2,
      "shortReasoning":"Vippindikatorer är bra för uppriktning.",
      "longReasoning": "Texten säger: 'Exempel på detta är vippindikatorn som är ett utmärkt hjälpmedel när detaljer och ämnen ska riktas upp eller kontrolleras.'"
    },
    {
      "question": "Vad kan man mäta med en vippindikator förutom uppriktning?",
      "answers": [
        { "text": "Endast temperatur", "incorrectReasoning": "Rundhet nämns." },
        { "text": "Endast vinklar", "incorrectReasoning": "Rundhet nämns." },
        { "text": "Rundhet på detaljer", "incorrectReasoning": null },
        { "text": "Endast längder", "incorrectReasoning": "Rundhet nämns." }
      ],
      "correctAnswer": 2,
      "shortReasoning": "Vippindikatorer kan mäta rundhet.",
      "longReasoning": "Texten fortsätter: 'Ett annat användningsområde för vippindikatorn är att mäta rundhet på detaljer i en så kallade rundhetsmätare.'"
    },
    {
      "question": "Vad innebär det att en vippindikator är symmetrisk?",
      "answers":[
        {"text":"Att den har en rund urtavla", "incorrectReasoning":"Symmetrin handlar om skalan"},
        {"text": "Att den har lika många visare på båda sidor", "incorrectReasoning": "Det handlar om skalans gradering"},
        {"text":"Att skalan är lika fördelad kring 0", "incorrectReasoning":null},
        {"text": "Att den är gjord av metall", "incorrectReasoning": "Symmetrin handlar om skalan"}
      ],
       "correctAnswer": 2,
      "shortReasoning":"Skalan är lika fördelad kring 0.",
      "longReasoning": "Texten beskriver: 'Vippindikatorn är symetrisk d.v.s. att skalan är lika fördelad kring 0.'"
    },
    {
        "question": "Vilken tolerans har vippindikatorklockan i exemplet?",
        "answers":[
            {"text":"1 mm", "incorrectReasoning": "Toleransen är 0.01 mm"},
            {"text":"0.1 mm", "incorrectReasoning": "Toleransen är 0.01 mm"},
            {"text": "0,01 mm", "incorrectReasoning": null},
            {"text": "0.001 mm", "incorrectReasoning": "Toleransen är 0.01 mm"}
        ],
      "correctAnswer": 2,
        "shortReasoning": "Vippindikatorklockan har en tolerans på 0,01 mm.",
        "longReasoning":"Texten anger: 'Just denna klocka har en tolerans på 0,01mm.'"
  
    },
      {
          "question": "Vilken tolerans/noggranhet har mäturet i bilden?",
          "answers":[
              {"text":"1 mm", "incorrectReasoning": "Toleransen är 0.01 mm"},
              {"text":"0.1 mm", "incorrectReasoning":"Toleransen är 0.01 mm"},
              {"text":"0,01 mm", "incorrectReasoning": null},
              {"text":"0.001 mm", "incorrectReasoning": "Toleransen är 0.01 mm"}
          ],
          "correctAnswer": 2,
          "shortReasoning":"Mäturet har en tolerans på 0,01 mm.",
          "longReasoning": "Bildtexten och bilden anger: 'Här ses ett mätur med en tolerans på 0,01mm.'"
      },
    {
      "question": "Vad är ett skjutmått?",
      "answers": [
        { "text": "Ett fast mätdon", "incorrectReasoning": "Skjutmått är *visande* mätdon." },
        { "text": "Ett visande mätinstrument för direkt mätning", "incorrectReasoning": null },
        { "text": "Ett verktyg för att slipa metall", "incorrectReasoning": "Skjutmått är ett mätinstrument." },
        { "text": "Ett verktyg för att mäta vinklar", "incorrectReasoning": "Även om vissa skjutmått *kan* mäta vinklar, är det inte deras primära funktion." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Skjutmått är ett visande mätinstrument för direkt mätning.",
      "longReasoning": "Texten definierar: 'Skjutmåttet är ett visande mätinstrument för direkt mätning...'"
    },
     {
      "question": "Vilka skalor finns vanligtvis på ett skjutmått?",
      "answers": [
        { "text": "Endast för millimeter", "incorrectReasoning": "Ofta finns skalor för både mm och tum." },
        { "text": "Endast för tum", "incorrectReasoning": "Ofta finns skalor för både mm och tum." },
        { "text": "För millimeter och tum", "incorrectReasoning": null },
        { "text": "Endast för grader", "incorrectReasoning": "Grader används för vinklar, inte längder på skjutmått." }
      ],
      "correctAnswer": 2,
      "shortReasoning": "Skjutmått har ofta skalor för mm och tum.",
      "longReasoning": "Texten anger: 'På skjutmåttet är det vanligt att det finns skalor graderade både för mm och tum.'"
    },
    {
        "question": "Vilka typer av skjutmått finns det?",
        "answers":[
            {"text": "Endast analoga", "incorrectReasoning":"Det finns både analoga och digitala"},
            {"text":"Endast digitala", "incorrectReasoning": "Det finns både analoga och digitala"},
            {"text": "Analoga, digitala och med visarverk (urtavla)", "incorrectReasoning": null},
            {"text":"Endast de med nonieskala", "incorrectReasoning":"Det finns fler typer"}
        ],
      "correctAnswer": 2,
      "shortReasoning": "Analoga, digitala och med visarverk.",
      "longReasoning":"Texten säger: 'För noggrannare mätningar finns digitala skjutmått och skjutmått med visarverk (urtavla).'"
    },
    {
      "question":"Vilka sätt kan man mäta med ett skjutmått?",
      "answers":[
          {"text": "Endast utvändigt", "incorrectReasoning": "Man kan mäta utvändigt, invändigt och djup"},
          {"text": "Endast invändigt", "incorrectReasoning":"Man kan mäta utvändigt, invändigt och djup"},
          {"text": "Utvändigt, invändigt och djupmätning", "incorrectReasoning": null},
          {"text": "Endast vinkelmätning", "incorrectReasoning":"Vinkelmätning är inte standardsättet"}
      ],
        "correctAnswer": 2,
      "shortReasoning":"Utvändigt, invändigt och djup.",
      "longReasoning": "Texten listar: 'Olika sätt att mäta med skjutmåttet är: •Utvändig mätning (frånvända ytor) •Invändig mätning (motvända ytor) •Djupmätning (likvända ytor).'"
    },
      {
        "question":"Var på mätskänklarna ska man mäta vid utvändig mätning med skjutmått?",
        "answers":[
            {"text":"Längst ut på spetsarna", "incorrectReasoning": "Det finns risk för mätfel, använd 'eggarna' där"},
            {"text":"Så långt in som möjligt", "incorrectReasoning": null},
            {"text": "Det spelar ingen roll", "incorrectReasoning":"Det är viktigt för noggrannheten"},
            {"text":"Mitt på", "incorrectReasoning": "Så långt in som möjligt är bäst"}
        ],
      "correctAnswer": 1,
        "shortReasoning": "Mät så långt in på mätskänklarna som möjligt.",
        "longReasoning":"Texten säger: 'Vid mätning av utvändiga ytor ska man i möjligaste mån mäta långt in på mätskänklarna för att undvika mätfel.'"
      },
      {
      "question": "Vad är viktigt vid djupmätning med skjutmåttets mätsticka?",
      "answers":[
        {"text":"Att hålla skjutmåttet snett", "incorrectReasoning":"Det ska hållas *vinkelrätt*"},
        {"text":"Att trycka hårt", "incorrectReasoning":"Man ska vara försiktig"},
        {"text": "Att hålla skjutmåttet vinkelrätt mot mätobjektet", "incorrectReasoning":null},
        {"text":"Att använda mycket olja", "incorrectReasoning": "Vinkelrätt läge är det viktiga"}
      ],
        "correctAnswer": 2,
      "shortReasoning": "Håll skjutmåttet vinkelrätt vid djupmätning.",
      "longReasoning": "Texten betonar: 'Vid mätning av djup (höjder) med skjutmåttets mätsticka är det viktigt att mätdonet hålls vinkelrätt mot mätobjektet för att få ett så rättvist mätresultat som möjligt.'"
    },
    {
      "question":"Vad bör man göra innan man börjar mäta med ett skjutmått?",
      "answers":[
        {"text":"Slipa det", "incorrectReasoning": "Man ska *inte* slipa ett skjutmått"},
        {"text":"Olja in det ordentligt", "incorrectReasoning":"Kontrollera nollställningen först"},
        {"text": "Kontrollera att skalorna stämmer överens och är på noll", "incorrectReasoning":null},
        {"text":"Värma upp det", "incorrectReasoning": "Kontroll av nollställning är det viktiga"}
      ],
        "correctAnswer": 2,
      "shortReasoning": "Kontrollera nollställningen.",
      "longReasoning":"Texten anger: 'Innan mätning bör man \"trycka” ihop skjutmåttet för att kontrollera att skalorna stämmer överens och är på noll och därigenom visar rätt värde.'"
    },
    {
      "question": "Vilka delar har ett analogt skjutmått för avläsning?",
      "answers":[
          {"text": "Endast en skala för millimeter", "incorrectReasoning":"Den har skala för mm, tum och nonieskalor"},
          {"text": "En skala för millimeter, en för tum, och nonieskalor", "incorrectReasoning": null},
          {"text": "Endast en digital display", "incorrectReasoning":"Det är ett *digitalt* skjutmått"},
          {"text":"Endast en skala för tum", "incorrectReasoning": "Den har skala för mm, tum och nonieskalor"}
      ],
      "correctAnswer": 1,
      "shortReasoning":"Skala för mm, tum och nonieskalor.",
      "longReasoning": "Bilden och bildtexten visar detta. 'Skala för avläsning i tum med nonie', 'Skala för avläsning i mm. med nonie'"
    },
      {
      "question": "Var avläser man hela millimetrar på ett skjutmått med nonieskala?",
      "answers":[
          {"text": "Där nonieskalans nollinje möter millimeterskalan", "incorrectReasoning":null},
        {"text": "Där nonieskalans sista linje möter millimeterskalan", "incorrectReasoning":"Vid nollinjen"},
        {"text": "Mitt på nonieskalan", "incorrectReasoning": "Vid nonieskalans nollinje"},
        {"text":"Det går inte att avläsa hela millimeter", "incorrectReasoning": "Det gör man vid nonieskalans nollinje"}
      ],
       "correctAnswer": 0,
      "shortReasoning":"Vid nonieskalans nollinje.",
      "longReasoning": "Texten förklarar: '...avläsningen av hela millimetrar sker vid nonieskalans nollinje...'"
    },
    {
      "question": "Var avläser man tiondels millimetrar på ett skjutmått med nonieskala?",
      "answers": [
        { "text": "Där nonieskalans nollinje möter millimeterskalan", "incorrectReasoning": "Där avläser man *hela* millimeter." },
        { "text": "Där någon av linjerna på nonieskalan sammanfaller med en linje på millimeterskalan", "incorrectReasoning": null },
        { "text": "Längst till höger på nonieskalan", "incorrectReasoning": "Där linjerna sammanfaller." },
        { "text": "Det går inte att avläsa tiondelar", "incorrectReasoning": "Det är syftet med nonieskalan." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Där linjer på nonie- och millimeterskalan sammanfaller.",
      "longReasoning": "Texten fortsätter: '...medans avläsning av nonieskalan sker där någon av linjerna för hela millimetrar sammanfaller med en linje på nonieskalan.'"
    },
    {
        "question": "Hur avläser man ett digitalt skjutmått?",
      "answers":[
          {"text":"Med en nonieskala", "incorrectReasoning": "Digitala skjutmått har ingen nonieskala"},
          {"text": "Med en mikrometerskala", "incorrectReasoning": "Digitala skjutmått har en display"},
          {"text":"På en display", "incorrectReasoning": null},
          {"text": "Med en linjal", "incorrectReasoning": "Digitala skjutmått har en display"}
      ],
      "correctAnswer": 2,
        "shortReasoning": "På en display.",
        "longReasoning": "Texten säger: 'På ett digitalt skjutmått finns ingen nonieskala, utan där läser man av mätvärdet på displayen.'"
    },
    {
      "question": "Hur avläser man ett skjutmått med visarverk (urtavla)?",
      "answers": [
        { "text": "Med en nonieskala", "incorrectReasoning": "Visarverk har en urtavla, inte nonieskala." },
        { "text": "På urtavlan", "incorrectReasoning": null },
        { "text": "Med en mikrometerskala", "incorrectReasoning": "Visarverk har en urtavla." },
        { "text": "Med en linjal", "incorrectReasoning": "Visarverk har en urtavla." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "På urtavlan.",
      "longReasoning": "Texten förklarar: 'På ett skjutmått med visarverk (urtavla) avläser man tiondels och hundradels millimetrar på urtavlan.'"
    },
    {
        "question":"Vad visar bilderna för värden 5.5, 9.75, och 15.9mm?",
        "answers":[
            {"text": "Avläsning av tid", "incorrectReasoning": "Det är avläsning av skjutmått"},
            {"text":"Avläsning av skjutmått", "incorrectReasoning": null},
            {"text": "Inställning av en maskin", "incorrectReasoning":"Det är avläsning av skjutmått"},
            {"text":"Rita en teknisk ritning", "incorrectReasoning":"Det är avläsning av skjutmått"}
        ],
        "correctAnswer": 1,
        "shortReasoning":"Bilderna visar avläsning av ett skjutmått.",
        "longReasoning": "Bildtexterna anger: 'Här visas måttet 5,5mm', 'Här visas måttet 9,75mm', 'Här visas måttet 15,9mm'"
    },
    {
      "question": "Vad är en mikrometer (bygelmätskruv)?",
      "answers": [
        { "text": "Ett fast mätdon", "incorrectReasoning": "Mikrometern är ett *visande* mätdon." },
        { "text": "Ett visande mätdon för noggrann mätning", "incorrectReasoning": null },
        { "text": "Ett verktyg för att slipa metall", "incorrectReasoning": "Mikrometern är ett mätinstrument." },
        { "text": "Ett verktyg för att mäta vinklar", "incorrectReasoning": "Vinkelmätare används för vinklar." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Mikrometern är ett visande mätdon för noggrann mätning.",
      "longReasoning": "Texten definierar: 'Mikrometern eller bygelmätskruven som den ibland kallas är ett visande mätdon för noggrann mätning.'"
    },
      {
        "question":"Ge exempel på vad mikrometrar kan användas till.",
        "answers":[
            {"text": "Endast utvändig mätning", "incorrectReasoning": "Det finns mikrometrar för flera typer av mätning"},
              {"text": "Utvändig mätning, invändig mätning, djupmätning, kuggmätning, gängmätning", "incorrectReasoning": null},
            {"text": "Endast invändig mätning", "incorrectReasoning": "Det finns mikrometrar för flera typer av mätning"},
            {"text":"Endast vinkelmätning", "incorrectReasoning":"Det finns mikrometrar för flera typer av mätning, vinklar mäts med andra instrument"}
        ],
         "correctAnswer": 1,
        "shortReasoning": "Utvändig, invändig, djup-, kugg- och gängmätning.",
        "longReasoning": "Texten listar: 'Det finns mikrometrar b.la. för utvändig mätning, invändig mätning, djupmätning, kuggmätning, gängmätning.'"
      },
      {
      "question":"Vad är viktigt för att uppnå ett rättvist mätresultat med en mikrometer?",
      "answers":[
        {"text":"Att använda mycket kraft", "incorrectReasoning":"Man ska använda *friktionsskruven* för rätt tryck"},
        {"text":"Att mäta snabbt", "incorrectReasoning": "Noggrannhet, inte hastighet, är viktigt"},
        {"text":"Att mättrycket mellan mätdon och mätobjekt är rätt (använd friktionsskruven)", "incorrectReasoning":null},
        {"text":"Att olja in mikrometern rikligt", "incorrectReasoning": "Rätt mättryck är det viktiga"}
      ],
      "correctAnswer": 2,
      "shortReasoning":"Använd friktionsskruven för rätt mättryck.",
      "longReasoning": "Texten anger: 'För att uppnå ett rättvist mätresultat är det viktigt att mättrycket mellan mätdon och mätobjekt är rätt, detta uppnår man genom att använda mikrometerns friktionsskruv.'"
    },
    {
        "question": "Vad bör man göra innan man mäter med en mikrometer?",
          "answers":[
              {"text": "Slipa den", "incorrectReasoning": "Man ska *inte* slipa en mikrometer"},
              {"text":"Måla den", "incorrectReasoning":"Det kommer att påverka mätresultatet"},
              {"text":"Kontrollera att den visar rätt värde", "incorrectReasoning":null},
              {"text":"Demontera den", "incorrectReasoning": "Man ska kontrollera, inte demontera"}
          ],
          "correctAnswer": 2,
          "shortReasoning": "Kontrollera mikrometern innan mätning.",
          "longReasoning": "Texten säger: 'Innan mätning bör mikrometern kontrolleras, detta för att förvissa sig om att den visar rätt värde.'"
    },
    {
      "question": "Hur kontrollerar man en mindre mikrometer (0-25 mm)?",
      "answers": [
        { "text": "Genom att mäta ett långt föremål", "incorrectReasoning": "Man skruvar ihop den och kontrollerar nollställningen." },
        { "text": "Genom att skruva ihop den och kontrollera att skalorna visar noll", "incorrectReasoning": null },
        { "text": "Genom att jämföra med ett skjutmått", "incorrectReasoning": "Man kontrollerar nollställningen." },
        { "text": "Genom att väga den", "incorrectReasoning": "Man kontrollerar nollställningen." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Skruva ihop och kontrollera nollställningen.",
      "longReasoning": "Texten beskriver: 'Vid kontroll av mindre mikrometrar (0-25mm) skruvas de ihop för att se att skalorna stämmer överens och visar noll.'"
    },
    {
      "question": "Hur kontrollerar man större mikrometrar?",
      "answers": [
        { "text": "Genom att skruva ihop dem", "incorrectReasoning": "Större mikrometrar kan inte skruvas ihop helt." },
        { "text": "Med hjälp av ett referensmätobjekt eller en passbit", "incorrectReasoning": null },
        { "text": "Genom att jämföra med ett skjutmått", "incorrectReasoning": "Referensmätobjekt/passbit är mer exakt." },
        { "text": "Genom att väga dem", "incorrectReasoning": "Man använder referensmätobjekt/passbit." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "Använd referensmätobjekt eller passbit.",
      "longReasoning": "Texten anger: 'De större mikrometrarna kontrolleras med hjälp av det referensmätobjektet som följer med mikrometern, eller en lämplig passbit.'"
    },
       {
        "question":"Vad gör man om mikrometern inte visar rätt värde vid kontrollmätning?",
        "answers":[
          {"text": "Kasserar den", "incorrectReasoning":"Den ska kalibreras/justeras"},
          {"text": "Använder den ändå", "incorrectReasoning":"Det kommer att ge felaktiga resultat"},
          {"text":"Kalibrerar/justerar den", "incorrectReasoning":null},
          {"text": "Slipar den", "incorrectReasoning": "Man ska *inte* slipa en mikrometer"}
        ],
          "correctAnswer": 2,
        "shortReasoning": "Kalibrera/justera mikrometern.",
        "longReasoning": "Texten förklarar: 'Stämmer inte mikrometern vid kontrollmätning kalibreras den genom att mättrumman vrids tills skalorna stämmer överens och visar noll.'"
      },
      {
          "question": "Vad kallas den del av mikrometern som man vrider på för att justera den?",
          "answers":[
              {"text": "Mätkolv", "incorrectReasoning": "Mätkolven rör sig, men mättrumman justeras"},
              {"text":"Skänkelhylsa", "incorrectReasoning": "Skänkelhylsan är fast"},
              {"text": "Mättrumma", "incorrectReasoning":null},
              {"text": "Låsning", "incorrectReasoning": "Låsningen används för att låsa mätkolven"}
          ],
          "correctAnswer": 2,
          "shortReasoning": "Mättrumman.",
          "longReasoning": "Texten säger: '...kalibreras den genom att mättrumman vrids...'"
      },
      {
      "question": "Vad är en viktig detalj på en mikrometer för utvändig gängmätning?",
      "answers":[
          {"text":"Att den har en lång mätskänk", "incorrectReasoning":"Utbytbara mätspetsar är det viktiga"},
          {"text": "Att den har en digital display", "incorrectReasoning": "Utbytbara mätspetsar är det viktiga"},
          {"text":"Att mätspetsarna är utbytbara", "incorrectReasoning":null},
          {"text": "Att den är gjord av ett speciellt material", "incorrectReasoning": "Utbytbara mätspetsar är det viktiga"}
      ],
        "correctAnswer": 2,
      "shortReasoning":"Utbytbara mätspetsar.",
      "longReasoning":"Texten förklarar: 'För att anpassa mikrometern efter storlek och stigning (P) för olika gängor är mätspetsarna längst ut på mätkolvarna utbytbara.'"
    },
      {
      "question":"Vad, förutom mikrometer med utbytbara spetsar, kan användas för att kontrollera utvändiga gängor?",
      "answers":[
          {"text": "En linjal", "incorrectReasoning":"Gängtrådar nämns"},
          {"text": "En vinkelhake", "incorrectReasoning":"Gängtrådar nämns"},
          {"text": "En mikrometer och speciella gängtrådar", "incorrectReasoning": null},
          {"text": "Ett skjutmått", "incorrectReasoning":"Gängtrådar, tillsammans med mikrometer, är mer exakt"}
      ],
        "correctAnswer": 2,
      "shortReasoning": "Mikrometer och gängtrådar.",
      "longReasoning": "Texten säger: 'Kontroll av utvändiga gängor går även att göra med hjälp av en mikrometer och speciella gängtrådar.'"
    },
    {
      "question":"Varför är det viktigt att låsa mätkolven på en mikrometer innan man tar bort den från arbetsstycket?",
      "answers":[
          {"text": "För att inte tappa bort mikrometern", "incorrectReasoning": "Det handlar om att bibehålla mätvärdet"},
          {"text": "För att inte skada mikrometern", "incorrectReasoning":"Det handlar om att bibehålla mätvärdet"},
        {"text":"För att inte ändra mätkolvens läge och därmed mätvärdet", "incorrectReasoning":null},
          {"text":"För att det är enklare att avläsa då", "incorrectReasoning":"Det handlar om att *bibehålla* mätvärdet"}
      ],
        "correctAnswer": 2,
      "shortReasoning":"För att inte ändra mätvärdet.",
      "longReasoning":"Texten förklarar: '...är det viktigt att låsa fast mätkolven med sin låsning. Detta för att inte ändra mätkolvens läge när mikrometern tas bort från arbetsstycket vid avläsning.'"
    },
    {
        "question": "Var på mikrometern finns millimeterskalorna?",
          "answers":[
              {"text": "På mätkolven", "incorrectReasoning": "De finns på skänkelhylsan"},
              {"text": "På mättrumman", "incorrectReasoning": "Där finns hundradelarna"},
              {"text":"På skänkelhylsan", "incorrectReasoning": null},
              {"text":"På låsningen", "incorrectReasoning":"De finns på skänkelhylsan"}
          ],
          "correctAnswer": 2,
          "shortReasoning": "Millimeterskalorna finns på skänkelhylsan.",
          "longReasoning": "Texten anger: 'På mikrometerns skänkelhylsa finns två millimeterskalor och en nollinje graderade.'"
    },
    {
          "question":"Hur många millimeterskalor finns det på en mikrometers skänkelhylsa?",
          "answers":[
            {"text":"En", "incorrectReasoning": "Det finns *två* skalor, förskjutna 0.5mm"},
            {"text": "Två", "incorrectReasoning":null},
              {"text": "Tre", "incorrectReasoning": "Det finns två"},
              {"text":"Ingen", "incorrectReasoning": "Det finns två"}
          ],
      "correctAnswer": 1,
          "shortReasoning": "Det finns två millimeterskalor.",
          "longReasoning":"Texten anger: 'På mikrometerns skänkelhylsa finns två millimeterskalor och en nollinje graderade.'"
    },
    {
      "question":"Vad är speciellt med de två millimeterskalorna på mikrometerns skänkelhylsa?",
      "answers":[
        {"text":"De är identiska", "incorrectReasoning":"De är förskjutna 0.5 mm"},
          {"text": "En är för millimeter och en för tum", "incorrectReasoning": "Båda är för millimeter, men förskjutna"},
        {"text":"En av skalorna är förskjuten 0.5mm för att visa halva millimetrar", "incorrectReasoning":null},
        {"text":"De visar olika färger", "incorrectReasoning": "Förskjutningen är det viktiga"}
      ],
        "correctAnswer": 2,
      "shortReasoning":"En skala är förskjuten 0,5 mm för halva millimetrar.",
      "longReasoning": "Texten förklarar: 'En av dessa skalor är förskjuten 0.5mm där man läser av halva millimetrar.'"
    },
    {
      "question": "Hur många graderade streck finns det runt mättrumman på en standardmikrometer?",
      "answers": [
        { "text": "10", "incorrectReasoning": "Det finns 50 eller 100 streck." },
        { "text": "50 (eller i vissa fall 100)", "incorrectReasoning": null },
        { "text": "100", "incorrectReasoning": "Vissa har 50, andra 100." },
        { "text": "25", "incorrectReasoning": "Det finns 50 eller 100 streck." }
      ],
      "correctAnswer": 1,
      "shortReasoning": "50 (eller i vissa fall 100).",
      "longReasoning": "Texten anger: 'Runt mättrumman finns 50 streck jämt graderat där varje streck motsvarar 0,01mm. Det finns även mikrometrar med större noggrannhet, dessa har då fler streck graderade runt mättrumman.' Vilket i nästa sektion förtydligas vara 100 streck på innermikrometer."
    },
      {
        "question":"Vad motsvarar varje streck på mättrumman på en standardmikrometer (med 50 streck)?",
        "answers":[
          {"text": "1 mm", "incorrectReasoning": "Varje streck motsvarar 0.01 mm"},
          {"text": "0.1 mm", "incorrectReasoning": "Varje streck motsvarar 0.01 mm"},
          {"text": "0,01 mm", "incorrectReasoning":null},
          {"text":"0.001 mm", "incorrectReasoning": "Varje streck motsvarar 0.01 mm"}
        ],
         "correctAnswer": 2,
        "shortReasoning":"0,01 mm.",
        "longReasoning": "Texten säger: 'Runt mättrumman finns 50 streck jämt graderat där varje streck motsvarar 0,01mm.'"
      },
      {
          "question": "Var läser man av hundradelar på en standardmikrometer?",
          "answers":[
              {"text": "På skänkelhylsan", "incorrectReasoning":"Hundradelar läses på mättrumman"},
              {"text":"På mätkolven", "incorrectReasoning": "Hundradelar läses på mättrumman"},
              {"text":"På mättrumman", "incorrectReasoning": null},
              {"text":"På låsningen", "incorrectReasoning": "Hundradelar läses på mättrumman"}
          ],
          "correctAnswer": 2,
          "shortReasoning": "På mättrumman.",
          "longReasoning":"Bildtexten i sektionen om avläsning anger: 'Avläsning av hundradelar sker på mättrumman'"
      },
     {
      "question": "Vad ska man vara extra uppmärksam på vid avläsning av en mikrometer?",
      "answers": [
        { "text": "Att inte tappa bort den", "incorrectReasoning": "Risken för felavläsning av hela/halva mm är viktigare." },
        { "text": "Att inte skada den", "incorrectReasoning": "Risken för felavläsning är det som betonas." },
        { "text": "Risken att läsa av fel på hela och halva millimetrar", "incorrectReasoning": null },
        { "text": "Att inte använda för mycket kraft", "incorrectReasoning": "Det är viktigt, men risken för felavläsning betonas specifikt." }
      ],
      "correctAnswer": 2,
      "shortReasoning": "Var uppmärksam på risken för felavläsning av hela/halva mm.",
      "longReasoning": "Texten varnar: 'OBS! var uppmärksam på risken att läsa av fel på hela och halva millimetrar.'"
    },
    {
        "question": "Vad är den korrekta avläsningen i det första exemplet (9,00 mm)?",
          "answers":[
              {"text": "8,00 mm", "incorrectReasoning": "Mättrumman är vid 9:e linjen, och 0.00"},
              {"text": "9,00 mm", "incorrectReasoning": null},
              {"text":"9,50 mm", "incorrectReasoning":"Mättrumman är vid 9:e linjen, och 0.00"},
              {"text":"10,00 mm", "incorrectReasoning": "Mättrumman är vid 9:e linjen, och 0.00"}
          ],
          "correctAnswer": 1,
          "shortReasoning":"9,00 mm",
          "longReasoning":"Bilden och förklarande texten visar detta. 'Vi får måttet 9 + 0,00 = 9,00 mm.'"
    },
    {
      "question":"Vad är den korrekta avläsningen i det andra exemplet (5,20 mm)?",
      "answers":[
        {"text": "5,00 mm", "incorrectReasoning": "Mättrumman visar 0.20"},
        {"text":"5,10 mm", "incorrectReasoning": "Mättrumman visar 0.20"},
        {"text": "5,20 mm", "incorrectReasoning": null},
        {"text": "5,50 mm", "incorrectReasoning": "Mättrumman visar 0.20"}
      ],
    "correctAnswer": 2,
      "shortReasoning":"5,20 mm",
    "longReasoning": "Bilden och förklarande text visar detta. 'Vi får måttet 5 + 0,20 = 5,20 mm.'"
  },
   {
    "question": "Vad är den korrekta avläsningen i det tredje exemplet (7,55 mm)?",
    "answers": [
      { "text": "7,00 mm", "incorrectReasoning": "7 hela mm + 0,5 mm + 0,05 mm" },
      { "text": "7,05 mm", "incorrectReasoning": "7 hela mm + 0,5 mm + 0,05 mm" },
      { "text": "7,50 mm", "incorrectReasoning": "7 hela mm + 0,5 mm + 0,05 mm" },
      { "text": "7,55 mm", "incorrectReasoning": null }
    ],
    "correctAnswer": 3,
    "shortReasoning": "7,55 mm",
    "longReasoning": "Bilden och förklarande text visar detta. 'Vi får måttet 7 + 0,5 + 0,05 = 7,55 mm.'"
  },
  {
    "question": "Vad är den korrekta avläsningen i det fjärde exemplet (12,07mm)?",
    "answers":[
      {"text": "12,00 mm", "incorrectReasoning": "Mättrumman visar 0.07"},
      {"text": "12,07 mm", "incorrectReasoning":null},
      {"text": "12,70 mm", "incorrectReasoning":"Mättrumman visar 0.07"},
      {"text": "12,77 mm", "incorrectReasoning": "Mättrumman visar 0.07"}
    ],
     "correctAnswer": 1,
    "shortReasoning":"12,07 mm",
    "longReasoning": "Bilden och förklarande text visar detta. 'Vi får måttet 12 + 0,07 = 12,07 mm.'"
  },
    {
      "question": "Vad är den korrekta avläsningen i det femte exemplet (15.78 mm)?",
        "answers":[
            {"text": "15,00 mm", "incorrectReasoning": "Se bilden och läs texten"},
            {"text": "15,28 mm", "incorrectReasoning": "Man måste också addera de 0.5 mm"},
            {"text":"15,78 mm", "incorrectReasoning": null},
            {"text":"15,87 mm", "incorrectReasoning": "Se bilden och läs texten"}
        ],
        "correctAnswer": 2,
        "shortReasoning": "15,78 mm",
        "longReasoning": "Bilden och förklarande text visar detta. 'Vi får måttet 15 + 0,5 + 0,28 = 15,78 mm.'"
    },
  {
    "question": "Vad används en djupmikrometer till?",
    "answers": [
      { "text": "Att mäta utvändiga diametrar", "incorrectReasoning": "Djupmikrometrar mäter djup/avstånd." },
      { "text": "Att mäta djup eller avstånd mellan likvända ytor", "incorrectReasoning": null },
      { "text": "Att mäta gängor", "incorrectReasoning": "Djupmikrometrar mäter djup/avstånd." },
      { "text": "Att mäta vinklar", "incorrectReasoning": "Djupmikrometrar mäter djup/avstånd." }
    ],
    "correctAnswer": 1,
    "shortReasoning": "Djupmikrometrar mäter djup/avstånd.",
    "longReasoning": "Texten anger: 'Djupmikrometern är ett visande mätdon som används för att mäta djup eller avstånd mellan likvända ytor.'"
  },
    {
      "question": "Vad är speciellt med mätkolven på vissa djupmikrometrar?",
      "answers":[
        {"text": "Den är alltid fast", "incorrectReasoning": "På vissa kan den bytas"},
        {"text": "Den är gjord av plast", "incorrectReasoning": "Funktionen, inte materialet, är det viktiga"},
        {"text": "Den kan vara utbytbar", "incorrectReasoning":null},
        {"text":"Den är alltid digital", "incorrectReasoning": "Det finns analoga djupmikrometrar"}
      ],
       "correctAnswer": 2,
      "shortReasoning":"Mätkolven kan vara utbytbar.",
      "longReasoning":"Texten säger: 'På vissa djupmikrometrar går det att byta den rörliga mätkolven...'"
    },
    {
      "question": "Varför är mätkolven utbytbar på vissa djupmikrometrar?",
      "answers":[
        {"text": "För att det är billigare", "incorrectReasoning": "Det handlar om anpassning till olika mått"},
        {"text":"För att den slits snabbt", "incorrectReasoning": "Det handlar om anpassning till olika mått"},
        {"text":"För att anpassa mikrometern till olika avstånd och djup", "incorrectReasoning":null},
        {"text": "För att den är lätt att tappa bort", "incorrectReasoning":"Det handlar om anpassning"}
      ],
      "correctAnswer": 2,
      "shortReasoning": "För anpassning till olika avstånd och djup.",
      "longReasoning": "Texten förklarar: '...detta för att anpassa mikrometern mellan likvända ytor och hål med varierande avstånd och djup.'"
    },
   {
    "question": "Hur hålls mätskänkeln på en djupmikrometer vid mätning?",
    "answers": [
      { "text": "Löst mot mätobjektet", "incorrectReasoning": "Den ska hållas *fast*." },
      { "text": "Fast mot mätobjektet så att anslagsytan ligger plant", "incorrectReasoning": null },
      { "text": "I luften ovanför mätobjektet", "incorrectReasoning": "Den ska hållas *mot* mätobjektet." },
      { "text": "Det spelar ingen roll", "incorrectReasoning": "Korrekt positionering är avgörande." }
    ],
    "correctAnswer": 1,
    "shortReasoning": "Mätskänkeln hålls fast, anslagsytan plant.",
    "longReasoning": "Texten anger: 'Vid mätning med djupmikrometer hålls mätskänkeln fast mot mätobjektet så anslagsytan ligger plant mot mätobjektet...'"
  },
   {
    "question": "Hur kontrollerar man nollställningen på en djupmikrometer för små mått (0-25 mm)?",
    "answers": [
      { "text": "Genom att mäta ett långt föremål", "incorrectReasoning": "Man mäter mot ett *plant* underlag." },
      { "text": "Genom att mäta mot ett plan och kontrollera att skalorna visar noll", "incorrectReasoning": null },
      { "text": "Genom att jämföra med ett skjutmått", "incorrectReasoning": "Man mäter mot ett plant underlag." },
      { "text": "Genom att väga den", "incorrectReasoning": "Man mäter mot ett plant underlag." }
    ],
    "correctAnswer": 1,
    "shortReasoning": "Mät mot ett plan, kontrollera nollställning.",
    "longReasoning": "Texten beskriver: 'Vid inställningskontroll av mikrometrar för små mått (0-25mm) mäter man med mikrometern mot ett plan för att sedan konstatera om skalorna stämmer överens och visar noll.'"
  },
  {
    "question":"Hur justerar man en djupmikrometer som inte visar rätt vid kontrollmätning?",
    "answers":[
      {"text":"Genom att slipa mätkolven", "incorrectReasoning": "Man vrider på skänkelhylsan"},
      {"text": "Genom att byta ut mätkolven", "incorrectReasoning":"Man justerar genom att vrida på skänkelhylsan"},
        {"text":"Genom att vrida skänkelhylsan tills skalorna stämmer överens", "incorrectReasoning": null},
      {"text":"Genom att olja in den", "incorrectReasoning": "Man vrider på skänkelhylsan"}
    ],
    "correctAnswer": 2,
    "shortReasoning": "Justera genom att vrida skänkelhylsan.",
    "longReasoning":"Texten säger: 'Stämmer inte måttet på mikrometern vid kontrollmätning justeras den genom att skänkelhylsan vrids tills skalorna stämmer överens.'"
  },
  {
    "question": "Hur är skalorna på en djupmikrometer graderade jämfört med en vanlig mikrometer?",
    "answers": [
      { "text": "På samma sätt", "incorrectReasoning": "De är graderade åt *motsatt* håll." },
      { "text": "Åt motsatt håll", "incorrectReasoning": null },
      { "text": "Med en annan enhet", "incorrectReasoning": "De är graderade åt motsatt håll." },
      { "text": "Det finns ingen skala", "incorrectReasoning": "Det *finns* skalor, men de är omvända." }
    ],
    "correctAnswer": 1,
    "shortReasoning": "Skalorna är graderade åt motsatt håll.",
    "longReasoning": "Texten anger: 'På mikrometrar anpassade för mätning mellan likvända ytor är skalorna på skänkelhylsan och mättrumman graderade åt motsatthåll än på övriga mikrometrar.'"
  },
  {
    "question":"Var är skalan för avläsning av HELA millimetrar placerad på en djupmikrometer?",
    "answers":[
      {"text":"Över nollinjen", "incorrectReasoning": "Den är *under* nollinjen"},
      {"text":"Under nollinjen", "incorrectReasoning":null},
      {"text":"På mättrumman", "incorrectReasoning":"Det är hundradelarna"},
      {"text": "Det finns ingen sådan skala", "incorrectReasoning": "Den finns, under nollinjen"}
    ],
     "correctAnswer": 1,
    "shortReasoning":"Under nollinjen.",
    "longReasoning": "Bildtexten förklarar: 'Skala för avläsning av hela millimetrar placerad under nollinjen'"
  },
    {
        "question":"Var är skalan för avläsning av HALVA millimetrar placerad på en djupmikrometer?",
        "answers":[
            {"text":"Under nollinjen", "incorrectReasoning":"Den är *över* nollinjen"},
            {"text": "Över nollinjen", "incorrectReasoning":null},
            {"text":"På mättrumman", "incorrectReasoning": "Det är hundradelarna"},
            {"text": "Det finns ingen sådan skala", "incorrectReasoning": "Den finns, över nollinjen"}
        ],
        "correctAnswer": 1,
        "shortReasoning":"Över nollinjen.",
        "longReasoning": "Bildtexten förklarar: 'Skala för avläsning av halva millimetrar placerad över nollinjen'"
    },
    {
        "question": "Vad är korrekt avläsning i det första exemplet med djupmikrometern (11,80 mm)?",
        "answers":[
            {"text": "11,00 mm", "incorrectReasoning": "Se bild och text, 11 + 0.5 + 0.3"},
            {"text": "11,30 mm", "incorrectReasoning": "Se bild och text, 11 + 0.5 + 0.3"},
            {"text":"11,50 mm", "incorrectReasoning": "Se bild och text, 11 + 0.5 + 0.3"},
            {"text": "11,80 mm", "incorrectReasoning": null}
        ],
        "correctAnswer": 3,
        "shortReasoning":"11,80 mm",
        "longReasoning": "Bilden och förklarande text visar detta. 'Vi får måttet 11 + 0,50 + 0,30 = 11,80 mm.'"
    },
     {
    "question": "Vad är korrekt avläsning i det andra exemplet med djupmikrometern (13,00 mm)?",
    "answers":[
      {"text": "12,00 mm", "incorrectReasoning": "Se bild och text"},
      {"text": "12,50 mm", "incorrectReasoning": "Se bild och text"},
      {"text": "13,00 mm", "incorrectReasoning":null},
      {"text": "13,50 mm", "incorrectReasoning": "Se bild och text"}
    ],
      "correctAnswer": 2,
    "shortReasoning":"13,00 mm",
    "longReasoning":"Bilden och förklarande text visar detta. 'Vi får måttet 13 + 0 = 13,00 mm.'"
  },
    {
    "question":"Vad är korrekt avläsning i det tredje exemplet med djupmikrometer (16,17 mm)?",
        "answers":[
            {"text": "16,00 mm", "incorrectReasoning": "Se bild och text"},
            {"text": "16,07 mm", "incorrectReasoning": "Se bild och text"},
            {"text":"16,17 mm", "incorrectReasoning": null},
            {"text": "16,70 mm", "incorrectReasoning": "Se bild och text"}
        ],
         "correctAnswer": 2,
        "shortReasoning": "16,17 mm",
        "longReasoning":"Bilden och förklarande text visar detta. 'Vi får måttet 16 + 0,17 = 16,17 mm.'"
    },
   {
      "question":"Vad är korrekt avläsning i det fjärde exemplet med djupmikrometer (16,72 mm)?",
      "answers":[
        {"text": "16,00 mm", "incorrectReasoning": "Se bild och text"},
        {"text": "16,22 mm", "incorrectReasoning": "Se bild och text, glöm inte +0.5"},
          {"text": "16,50 mm", "incorrectReasoning": "Se bild och text"},
        {"text": "16,72 mm", "incorrectReasoning": null}
      ],
       "correctAnswer": 3,
      "shortReasoning":"16,72 mm",
      "longReasoning":"Bilden och förklarande text visar detta. 'Vi får måttet 16 + 0,5 + 0,22 = 16,72 mm.'"
    },
    {
        "question":"Vad är ett annat namn för en innermikrometer?",
        "answers":[
          {"text": "Yttermikrometer", "incorrectReasoning": "Det mäter *in*vändigt"},
            {"text":"Djupmikrometer", "incorrectReasoning": "Det är ett annat instrument"},
            {"text":"Trepunktsmikrometer", "incorrectReasoning": null},
            {"text": "Skjutmått", "incorrectReasoning": "Det är ett annat instrument"}
        ],
       "correctAnswer": 2,
        "shortReasoning": "Trepunktsmikrometer.",
        "longReasoning": "Texten anger: 'Innermikrometer eller trepunktsmikrometer är ett visande mätdon för mätning av hål.'"
    },
   {
    "question": "Vad är speciellt med en innermikrometer/trepunktsmikrometer?",
    "answers": [
      { "text": "Den har bara en mätklack", "incorrectReasoning": "Den har *tre* mätklackar." },
      { "text": "Den har två mätklackar", "incorrectReasoning": "Den har *tre* mätklackar." },
      { "text": "Den har tre mätklackar och är självcentrerande", "incorrectReasoning": null },
      { "text": "Den mäter utvändigt", "incorrectReasoning": "Den mäter *in*vändigt." }
    ],
    "correctAnswer": 2,
    "shortReasoning": "Tre mätklackar, självcentrerande.",
    "longReasoning": "Texten beskriver: 'Innermikrometrar...men alla har tre mätklackar och är därmed självcentrerande.'"
  },
  {
      "question": "Hur många graderade streck finns det runt mättrumman på innermikrometern i exemplet?",
        "answers":[
          {"text": "10", "incorrectReasoning": "Det finns 100"},
          {"text": "50", "incorrectReasoning":"Det finns 100"},
          {"text":"100", "incorrectReasoning": null},
            {"text":"20", "incorrectReasoning":"Det finns 100"}
        ],
        "correctAnswer": 2,
        "shortReasoning":"100 streck",
        "longReasoning": "Texten säger: 'Runt mättrumman finns 100 streck graderade...'"
  },
    {
    "question": "Vad motsvarar varje streck på mättrumman på innermikrometern i exemplet?",
    "answers":[
      {"text": "1 mm", "incorrectReasoning": "Varje streck är 0.005 mm"},
      {"text":"0.1 mm", "incorrectReasoning": "Varje streck är 0.005 mm"},
        {"text": "0,005 mm", "incorrectReasoning": null},
      {"text":"0.01 mm", "incorrectReasoning": "Varje streck är 0.005 mm"}
    ],
      "correctAnswer": 2,
    "shortReasoning": "0,005 mm.",
    "longReasoning": "Texten säger: '...dessa streck är jämt fördelade och varje streck motsvarar 0,005mm...'"
  },
   {
    "question":"Vad är korrekt avläsning i det första exemplet med innermikrometer (25,10 mm)?",
    "answers":[
      {"text": "25,00 mm", "incorrectReasoning": "Se bild och text"},
      {"text":"25,01 mm", "incorrectReasoning": "Se bild och text"},
      {"text":"25,10 mm", "incorrectReasoning":null},
      {"text": "25,11 mm", "incorrectReasoning": "Se bild och text"}
    ],
    "correctAnswer": 2,
    "shortReasoning": "25,10 mm",
    "longReasoning":"Bilden och förklarande text visar detta. 'Vi får måttet 25 + 0,10 = 25,10 mm.'"
   },
  {
    "question": "Vad är korrekt avläsning i det andra exemplet med innermikrometer (26,40 mm)?",
    "answers":[
      {"text": "26,00 mm", "incorrectReasoning": "Se bild och text"},
      {"text": "26,04 mm", "incorrectReasoning": "Se bild och text"},
      {"text":"26,40 mm", "incorrectReasoning": null},
      {"text": "26,44 mm", "incorrectReasoning": "Se bild och text"}
    ],
      "correctAnswer": 2,
    "shortReasoning": "26,40 mm",
    "longReasoning": "Bilden och förklarande text visar detta. 'Vi får måttet 26 + 0,40 = 26,40 mm.'"
  },
    {
        "question":"Vad är korrekt avläsning i det tredje exemplet med innermikrometer (26,635 mm)?",
        "answers":[
          {"text": "26,000 mm", "incorrectReasoning": "Se bild och text, glöm inte +0.5"},
            {"text": "26,135 mm", "incorrectReasoning": "Se bild och text, glöm inte +0.5"},
          {"text": "26,500 mm", "incorrectReasoning":"Se bild och text"},
            {"text": "26,635 mm", "incorrectReasoning": null}
        ],
         "correctAnswer": 3,
        "shortReasoning": "26,635 mm",
        "longReasoning": "Bilden och förklarande text visar detta. 'Vi får måttet 26 + 0,5 + 0,135 = 26,635 mm.'"
    },
  {
    "question": "Vad är en indikator?",
    "answers": [
      { "text": "Ett fast mätdon", "incorrectReasoning": "Indikatorer är *visande* mätdon." },
      { "text": "Ett visande mätdon för kontroll av hål eller axlar", "incorrectReasoning": null },
      { "text": "Ett verktyg för att slipa metall", "incorrectReasoning": "Indikatorer är mätinstrument." },
      { "text": "Ett verktyg för att mäta vinklar", "incorrectReasoning": "Vinkelmätare används för vinklar." }
    ],
    "correctAnswer": 1,
    "shortReasoning": "Indikator är ett visande mätdon för hål/axlar.",
    "longReasoning": "Texten definierar: 'Indikator är ett visande mätdon för kontroll av hål eller axlar.'"
  },
  {
    "question":"Vad är ofta utbytbart på en indikator?",
    "answers":[
      {"text":"Hela indikatorn", "incorrectReasoning": "Mätkolv och ibland mätur är utbytbara"},
        {"text":"Mätkolven och i vissa fall mäturet", "incorrectReasoning": null},
      {"text":"Endast handtaget", "incorrectReasoning":"Mätkolv och ibland mätur är utbytbara"},
      {"text":"Ingenting", "incorrectReasoning": "Mätkolv är alltid utbytbar"}
    ],
     "correctAnswer": 1,
    "shortReasoning":"Mätkolv och ibland mätur.",
    "longReasoning": "Texten anger: 'Indikatorns ena mätkolv är utbytbar för att kunna anpassas efter olika storlekar på mätobjekten, det är också vanligt att det går att byta mätur och därigenom variera noggrannheten på indikatorn.'"
  },
   {
    "question": "Hur kalibrerar man en indikator?",
    "answers": [
      { "text": "Genom att slipa den", "incorrectReasoning": "Man ska *inte* slipa en indikator." },
      { "text": "Genom att väga den", "incorrectReasoning": "Man kalibrerar genom mätning i mätring/axel." },
      { "text": "Genom mätning i en lämplig mätring eller på en axel, och nollställa vid vändpunkten", "incorrectReasoning": null },
      { "text": "Genom att jämföra med ett skjutmått", "incorrectReasoning": "Mätring/axel är mer exakt." }
    ],
    "correctAnswer": 2,
    "shortReasoning": "Kalibrering: mät i ring/axel, nollställ vid vändpunkt.",
    "longReasoning": "Texten beskriver: 'Innan mätning måste indikatorn kalibreras, detta sker genom mätning i en lämplig mätring eller axel, pendla med indikatorn i mätringen eller över axeln och observera när mätklockan \"vänder\". Vändningen sker vid det största måttet och där ska klockan nollställas.'"
  },
    {
      "question":"Vad är en fördel med att använda en hålindikator jämfört med en trepunktsmikrometer vid hålmätning?",
      "answers":[
        {"text":"Den är billigare", "incorrectReasoning":"Förmågan att upptäcka ovalitet är fördelen"},
        {"text": "Den är snabbare", "incorrectReasoning":"Förmågan att upptäcka ovalitet är fördelen"},
          {"text":"Den kan enkelt upptäcka om hålet är ovalt", "incorrectReasoning": null},
        {"text":"Den är enklare att använda", "incorrectReasoning":"Förmågan att upptäcka ovalitet är fördelen"}
      ],
      "correctAnswer": 2,
      "shortReasoning":"Hålindikatorn upptäcker enkelt ovalitet.",
      "longReasoning": "Texten förklarar: 'Vid mätning av hål med en hålindikator är det enkelt att upptäcka om hålet är ovala till skillnad från mätning med trepunktsmikrometern, då man mäter över två punkter med hålindikatorn.'"
    },
    {
    "question": "Vad används en gradskiva till?",
    "answers":[
        {"text": "Att mäta längder noggrant", "incorrectReasoning":"Den används för vinklar, med 1 grads noggranhet"},
        {"text":"Att mäta vinklar med 1° noggrannhet", "incorrectReasoning": null},
        {"text":"Att mäta gängor", "incorrectReasoning": "Den används för vinklar"},
        {"text": "Att väga detaljer", "incorrectReasoning": "Den används för vinklar"}
    ],
       "correctAnswer": 1,
    "shortReasoning":"Mäta vinklar med 1° noggrannhet.",
    "longReasoning": "Texten säger: 'Med en gradskiva mäter man vinklar med 1° noggrannhet.'"
  },
  {
      "question": "Vad används en vinkelmätare med nonieskala till?",
      "answers":[
        {"text": "Att mäta längder", "incorrectReasoning":"Den används för vinklar"},
          {"text": "Att mäta vinklar med högre noggrannhet än en gradskiva", "incorrectReasoning": null},
        {"text":"Att mäta gängor", "incorrectReasoning": "Den används för vinklar"},
        {"text": "Att väga detaljer", "incorrectReasoning":"Den används för vinklar"}
      ],
    "correctAnswer": 1,
      "shortReasoning": "Mäta vinklar med hög noggrannhet.",
      "longReasoning": "Texten säger: 'Vinkelmätare med nonieskala är ett mätdon med större noggrannhet än gradskivan och som mäter vinklar med 5′ ≈ 0,1° noggrannhet.'"
    },
  {
    "question":"Vilken noggrannhet har en vinkelmätare med nonieskala, enligt texten?",
    "answers":[
      {"text":"1°", "incorrectReasoning": "Den har högre noggrannhet, 5'"},
      {"text": "0.5°", "incorrectReasoning":"Den har högre noggrannhet, 5'"},
      {"text": "5' (cirka 0,1°)", "incorrectReasoning": null},
        {"text": "10'", "incorrectReasoning":"Noggrannheten är 5'"}
    ],
      "correctAnswer": 2,
    "shortReasoning": "5' (cirka 0,1°).",
    "longReasoning":"Texten anger: '...och som mäter vinklar med 5′ ≈ 0,1° noggrannhet.'"
  },
  {
    "question": "Hur avläser man en vinkel med en gradskiva?",
    "answers": [
      { "text": "Där gradskivans mittpunkt möter detaljen", "incorrectReasoning": "Man ser var klingans nollmarkering möter gradskivan." },
      { "text": "Där klingans nollmarkering sammanfaller med någon av gradskivans linjer", "incorrectReasoning": null },
      { "text": "Genom att väga gradskivan", "incorrectReasoning": "Man gör en visuell avläsning." },
      { "text": "Genom att använda en nonieskala", "incorrectReasoning": "Gradskivor har ingen nonieskala." }
    ],
    "correctAnswer": 1,
    "shortReasoning": "Där klingans nollmarkering möter gradskivan.",
    "longReasoning": "Texten förklarar: '...vinkeln avläses där klingans nollmarkering sammanfaller med någon av gradskivans linjer.'"
  },
  {
    "question": "Vad ska ligga \"dikt an\" vid avläsning av en gradskiva?",
    "answers":[
        {"text": "Gradskivans mittpunkt och detaljens kant", "incorrectReasoning": "Anslag och klinga ska ligga dikt an."},
        {"text": "Gradskivans anslag och klinga mot mätobjektet", "incorrectReasoning": null},
        {"text": "Två gradskivor mot varandra", "incorrectReasoning": "Det är gradskivan och mätobjektet"},
        {"text": "Gradskivan och en linjal", "incorrectReasoning": "Anslag och klinga mot objektet"}
    ],
    "correctAnswer": 1,
    "shortReasoning":"Anslag och klinga mot mätobjektet.",
    "longReasoning":"Bildtexten anger: 'Gradskivans anslag och klinga ligger \"dikt an\" mot mätobjektet'"
  },
    {
        "question": "Vad visar de olika bilderna med gradskivor för vinklar?",
        "answers":[
            {"text":"90°, 45°, 60°", "incorrectReasoning": "Se bilderna och bildtexterna"},
            {"text": "90°, 96°, 42°", "incorrectReasoning": null},
            {"text": "45°, 60°, 90°", "incorrectReasoning": "Se bilderna och bildtexterna"},
            {"text": "Alla visar 90°", "incorrectReasoning": "Se bilderna och bildtexterna"}
        ],
        "correctAnswer": 1,
        "shortReasoning":"90°, 96°, 42°",
        "longReasoning": "Bildtexterna anger: 'Gradskivan visar 90°' , 'Gradskivan visar 96°' och 'Gradskivan visar 42°'"
    },
   {
      "question":"Vilka delar har en vinkelmätare med nonieskala, som visas i bilden?",
      "answers":[
          {"text":"Endast en skala och en klinga", "incorrectReasoning": "Den har flera delar"},
            {"text": "Nonieskala, gradskala, låsskruvar, förstoringsglas, fininställningsskruv, anslag, klinga", "incorrectReasoning": null},
          {"text": "Endast en nonieskala och en gradskala", "incorrectReasoning": "Den har flera delar"},
          {"text": "Endast en klinga och ett anslag", "incorrectReasoning": "Den har flera delar"}
      ],
    "correctAnswer": 1,
      "shortReasoning": "Nonieskala, gradskala, låsskruvar, etc.",
      "longReasoning":"Bilden och bildtexterna visar: 'Nonieskala', 'Låsskruv för gradskala', 'Förstoringsglas för avläsning av nonieskala', 'Gradskala', 'Fininställningsskruv', 'Klinga', 'Låsskruv för klinga', 'Anslag'"
    },
    {
    "question": "Var sker avläsningen av hela grader på en vinkelmätare med nonieskala?",
    "answers": [
      { "text": "Där nonieskalans mittlinje möter gradskalan", "incorrectReasoning": "Vid nonieskalans *noll*inje." },
      { "text": "Vid noll på nonieskalan", "incorrectReasoning": null },
      { "text": "Där nonieskalans sista linje möter gradskalan", "incorrectReasoning": "Vid nonieskalans nollinje." },
      { "text": "Det går inte att avläsa hela grader", "incorrectReasoning": "Det gör man vid nonieskalans nollinje." }
    ],
    "correctAnswer": 1,
    "shortReasoning": "Vid noll på nonieskalan.",
    "longReasoning": "Texten anger: 'Avläsning av hela grader sker vid noll på nonieskalan...'"
  },  {
    "question": "Var sker avläsningen av delar av grader (minuter) på en vinkelmätare med nonieskala?",
    "answers": [
      { "text": "Där nonieskalans nollinje möter gradskalan", "incorrectReasoning": "Där avläser man *hela* grader." },
      { "text": "Där någon av nonieskalans linjer sammanfaller med en linje på gradskivan", "incorrectReasoning": null },
      { "text": "Längst till höger på nonieskalan", "incorrectReasoning": "Där linjerna sammanfaller." },
      { "text": "Det går inte att avläsa minuter", "incorrectReasoning": "Det är syftet med nonieskalan." }
    ],
    "correctAnswer": 1,
    "shortReasoning": "Där linjer på nonie- och gradskalan sammanfaller.",
    "longReasoning": "Texten fortsätter: '...och delar av grader där någon av nonieskalans linjer sammanfaller med en linje på gradskivan.'"
  },
 {
    "question": "Vilken sida av nonieskalan ska man använda om vinkelvärdet ökar åt höger på gradskivan?",
    "answers":[
      {"text": "Den vänstra", "incorrectReasoning":"Den *högra* nonieskalan"},
      {"text": "Den högra", "incorrectReasoning":null},
      {"text": "Det spelar ingen roll", "incorrectReasoning": "Rätt sida är viktig för korrekt avläsning"},
      {"text": "Man kan inte veta", "incorrectReasoning":"Texten förklarar vilken sida"}
    ],
    "correctAnswer": 1,
     "shortReasoning": "Den högra nonieskalan.",
    "longReasoning":"Texten säger: 'Sker ökningen av vinkelvärdet åt höger på gradskivan sker avläsningen av delar av graden på den högra nonieskalan...'"
  },
    {
     "question": "Hur många bågminuter är nonieskalan ofta graderad i?",
        "answers":[
            {"text": "10 bågminuter", "incorrectReasoning": "Den är ofta graderad i 60 bågminuter"},
              {"text": "30 bågminuter", "incorrectReasoning":"Den är ofta graderad i 60 bågminuter"},
            {"text":"60 bågminuter", "incorrectReasoning": null},
            {"text": "100 bågminuter", "incorrectReasoning": "Den är ofta graderad i 60 bågminuter"}
        ],
      "correctAnswer": 2,
        "shortReasoning":"60 bågminuter",
        "longReasoning": "Texten anger: 'Nonieskalan är ofta graderad i 60 bågminuter med 5' delning.'"
    },
   {
    "question":"Vad är 6°15' för vinkel (enligt första exemplet)?",
    "answers":[
        {"text": "Sex grader och noll minuter", "incorrectReasoning":"Se bild och text"},
        {"text": "Sex grader och femton minuter", "incorrectReasoning": null},
        {"text": "Sextiofem grader", "incorrectReasoning": "Se bild och text"},
        {"text": "Sex grader och fem minuter", "incorrectReasoning":"Se bild och text"}
    ],
     "correctAnswer": 1,
    "shortReasoning":"Sex grader och femton minuter.",
    "longReasoning":"Bilden och förklarande text visar: 'Vi får vinkeln 6°15′'"
  },
  {
    "question":"Vad är 10°30' för vinkel (enligt andra exemplet)?",
    "answers":[
        {"text":"Tio grader", "incorrectReasoning":"Se bild och text"},
          {"text": "Tio grader och trettio minuter", "incorrectReasoning": null},
        {"text": "Trettio grader", "incorrectReasoning":"Se bild och text"},
        {"text":"Ett grader", "incorrectReasoning": "Se bild och text"}
    ],
    "correctAnswer": 1,
    "shortReasoning":"Tio grader och trettio minuter.",
    "longReasoning":"Bilden och förklarande text visar: 'Vi får vinkeln 10°30′'"
  },
  {
      "question":"Vad är 16°45' för vinkel (enligt tredje exemplet)?",
      "answers":[
        {"text": "Sextiofem grader", "incorrectReasoning": "Se bild och text"},
        {"text": "Ett grader", "incorrectReasoning":"Se bild och text"},
        {"text":"Sexton grader och fyrtiofem minuter", "incorrectReasoning":null},
        {"text": "Sexton grader", "incorrectReasoning": "Se bild och text"}
      ],
      "correctAnswer": 2,
    "shortReasoning":"Sexton grader och fyrtiofem minuter.",
    "longReasoning": "Bilden och förklarande text visar: 'Vi får vinkeln 16°45′'"
  },
  {
    "question": "Vad är ett mätprotokoll?",
    "answers": [
      { "text": "En typ av mätdon", "incorrectReasoning": "Det är en *handling* som dokumenterar mätningar." },
      { "text": "En ritning", "incorrectReasoning": "Det är en *handling* som dokumenterar mätningar." },
      { "text": "En handling som dokumenterar mätresultat och relevant information", "incorrectReasoning": null },
      { "text": "En instruktionsbok för mätdon", "incorrectReasoning": "Det är en dokumentation av *mätresultat*." }
    ],
    "correctAnswer": 2,
    "shortReasoning": "Ett mätprotokoll dokumenterar mätresultat.",
    "longReasoning": "Texten definierar: 'Ett mätprotokoll är en handling där det ska framgå information om en eller flera tillverkade detaljer.'"
  },
  {
    "question":"Ge exempel på information som bör finnas i ett mätprotokoll.",
    "answers":[
      {"text": "Endast ritningsnummer", "incorrectReasoning":"Mycket mer information behövs"},
        {"text": "Ritningsnummer, mätvärden, material, kontrollant, datum, mätdon, temperatur, luftfuktighet", "incorrectReasoning":null},
        {"text": "Endast kontrollantens namn", "incorrectReasoning": "Mycket mer information behövs"},
        {"text":"Endast datum", "incorrectReasoning": "Mycket mer information behövs"}
    ],
      "correctAnswer": 1,
    "shortReasoning":"Ritningsnummer, mätvärden, material, kontrollant, etc.",
    "longReasoning": "Texten ger en punktlista: '• Detaljens ritningsnummer, detaljnummer. • Mätvärden för de mått som efterfrågas på respektive detalj eller detaljer. • Vilket material detaljen är tillverkad i. • Namn på den som utfört kontrollen. • Ort och datum. • Vilka eller vilket typ av mätdon som används. • Vid vilken temperatur mätningen är utförd. • Aktuell luftfuktighet vid mätningen.'"
  },
  {
    "question":"Vad är syftet att ange vilket mätdon som använts i mätprotokollet?",
        "answers":[
            {"text":"Det spelar ingen roll", "incorrectReasoning":"Olika mätdon har olika noggrannhet"},
            {"text":"För att visa vilket märke som är bäst", "incorrectReasoning":"Det handlar om transparens"},
            {"text":"För transparens och spårbarhet av mätresultat", "incorrectReasoning": null},
            {"text": "För att göra reklam", "incorrectReasoning": "Det handlar om transparens"}
        ],
        "correctAnswer": 2,
        "shortReasoning": "För transparens och spårbarhet.",
        "longReasoning":"Att ange mätdon, temperatur, luftfuktighet, etc. ger en fullständig bild av mätförhållandena, vilket är viktigt för spårbarhet och om man behöver undersöka avvikelser."
  }
]
  }
]