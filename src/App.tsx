import React from 'react';
import { Mail, MapPin, Download, ExternalLink, BookOpen, Users, Award, FileText, Linkedin, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <a href="#" className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Dr. Teaka Sowaprux
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">About</a>
              <a href="#research" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Research</a>
              <a href="#publications" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Publications</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Banner */}
      <div className="md:hidden bg-gray-50 border-b border-gray-200 sticky top-16 z-40">
        <div className="px-4 py-3">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            <a href="#about" className="flex-shrink-0 px-3 py-2 text-xs font-medium text-gray-600 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              About
            </a>
            <a href="#research" className="flex-shrink-0 px-3 py-2 text-xs font-medium text-gray-600 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              Research
            </a>
            <a href="#publications" className="flex-shrink-0 px-3 py-2 text-xs font-medium text-gray-600 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              Publications
            </a>
            <a href="#contact" className="flex-shrink-0 px-3 py-2 text-xs font-medium text-gray-600 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-64 h-80 md:w-96 md:h-128 mx-auto mb-6 overflow-hidden rounded-lg shadow-sm">
                <img 
                  src="/IMG_3581.JPG" 
                  alt="Dr. Teaka Sowaprux" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Dr. Teaka Sowaprux
            </h1>
            <p className="text-xl text-gray-600 mb-2 font-light">Lecturer</p>
            <p className="text-lg text-gray-500 mb-8">Department of English, Faculty of Arts • Chulalongkorn University</p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-light">
        I research English-Medium Instruction (EMI) classrooms, language pedagogy, and plurilingual education.
            </p>
            <div className="mt-8">
              <a 
                href="/(2025, July) Teaka Sowaprux.pdf" 
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm border-b border-gray-300 hover:border-gray-900"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-light text-gray-900 mb-12">About</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 font-light">
         I am currently a lecturer at Chulalongkorn University. My research focuses on English-Medium Instruction (EMI), specifically within medical classrooms. I earned my PhD from Chulalongkorn University and hold both a BA and MA from Stanford University.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 font-light">
         I study how medical teachers, particularly those for whom English is not their first language, adapt and deliver complex medical information through EMI. I'm particularly interested in analyzing their language use to better understand how to enhance their linguistic awareness and improve teaching effectiveness.

            </p>
            <p className="text-gray-700 leading-relaxed mb-8 font-light">
 Currently, my work includes:<br/>
1. Developing strategies to help medical teachers improve their English language proficiency for teaching medical content.<br/>
2. Leveraging large language models (LLMs) to capture and analyze teachers' speech in EMI classrooms, with the goal of providing targeted and effective feedback for language development.
            </p>
                 <p className="text-gray-700 leading-relaxed mb-8 font-light">
I teach both undergraduate and graduate students topics in applied linguistics and research methods, as well as language skills classes focusing on academic writing and reading.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-900 font-medium">Ph.D. English as an International Language</p>
                  <p className="text-gray-600 text-sm">Chulalongkorn University, 2024</p>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">M.A. Sociology</p>
                  <p className="text-gray-600 text-sm">Stanford University, 2011</p>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">B.A. International Relations</p>
                  <p className="text-gray-600 text-sm">Stanford University, 2010</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Research Areas</h3>
              <div className="space-y-2">
                <p className="text-gray-700">English Language Teaching</p>
                <p className="text-gray-700">English-Medium Instruction (EMI)</p>
                <p className="text-gray-700">Qualitative Research Methods</p>
                <p className="text-gray-700">Discourse Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-light text-gray-900 mb-12">Research</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">English Language Teaching</h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Investigating effective pedagogical approaches for teaching English as a foreign language, 
                with particular focus on developing communicative competence and language skills in Thai 
                university contexts. This research examines how students acquire and develop English 
                proficiency through various instructional methods and materials.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">English-Medium Instruction (EMI)</h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Examining the implementation and effectiveness of English-Medium Instruction in Thai 
                higher education, particularly in medical education contexts. This research focuses on 
                how non-native English speaking instructors adapt their teaching practices and language 
                use to deliver complex academic content effectively through English.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Qualitative Research Methods</h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Applying qualitative research methodologies to investigate language learning and teaching 
                phenomena, including ethnographic approaches, discourse analysis, and case study methods. 
                This work contributes to understanding the complex social and cultural factors that 
                influence language education in multilingual contexts.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Discourse Analysis</h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Analyzing spoken and written discourse in educational settings to understand how language 
                is used for teaching and learning purposes. This research examines classroom interactions, 
                teacher talk, and student responses to identify patterns that can inform more effective 
                language instruction and EMI practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-light text-gray-900 mb-12">Selected Publications</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Analyzing EMI medical classroom discourse to identify language strategies for teachers: an application of the 'English-for-teaching' framework
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">T. Sowaprux</span>, J. Wudthayagorn, T. Jirasevijinda
              </p>
              <p className="text-sm text-gray-500 mb-2">
                LEARN Journal: Language Education and Acquisition Research Network, 2025, 18(1), 914-938
              </p>
              <p className="text-gray-700 text-sm leading-relaxed font-light">
                This study analyzes discourse patterns in English-Medium Instruction medical classrooms 
                to identify effective language strategies that can help non-native English speaking 
                teachers improve their instructional delivery.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Re-examining Productive-Skills Anxiety Constructs in Online Instructional Contexts Involving Thai Undergraduates Following the COVID-19 Pandemic
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">T. Sowaprux</span>, C. Piamsai
              </p>
              <p className="text-sm text-gray-500 mb-2">
                PASAA, 2023, 65(1), 1-31
              </p>
              <p className="text-gray-700 text-sm leading-relaxed font-light">
                This research examines how the shift to online learning during COVID-19 affected 
                Thai undergraduate students' anxiety levels in productive language skills, 
                particularly speaking and writing in English.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Review of Professionalizing Your English Language Teaching
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">T. Sowaprux</span>
              </p>
              <p className="text-sm text-gray-500 mb-2">
                RELC Journal, 2023, 54(3), 907-909
              </p>
              <p className="text-gray-700 text-sm leading-relaxed font-light">
                A scholarly review examining contemporary approaches to professional development 
                in English language teaching, with implications for teacher training and 
                continuing education programs.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-light text-gray-900 mb-12">Contact</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a href="mailto:teaka.s@chula.ac.th" className="text-gray-700 hover:text-gray-900 transition-colors">
                    teaka.s@chula.ac.th
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div className="text-gray-700">
                    <p>Department of English</p>
                    <p>Faculty of Arts</p>
                    <p>Chulalongkorn University</p>
                    <p>Bangkok 10330, Thailand</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/tsowaprux/" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://orcid.org/0000-0003-0361-123X" className="text-gray-400 hover:text-gray-600 transition-colors flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span className="text-sm">ORCID: 0000-0003-0361-123X</span>
                </a>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 font-light">
                Feel free to reach out for collaboration opportunities or academic discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm font-light">
            © 2024 Dr. Teaka Sowaprux
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;