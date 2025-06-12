'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const speakers = [
    {
      name: "우수연",
      role: "GDGoC Alumni (GDSC 1st LEAD)",
      company: "IBM",
      topic: "AI 활용하기",
      image: "/speakers/WO.webp"
    },
    {
      name: "오인규",
      role: "GDGoC Alumni (GDSC 21-22)",
      company: "Naver Labs",
      topic: "지연평가와 함수형 프로그래밍",
      image: "/speakers/OH.webp"
    },
    {
      name: "나상우",
      role: "GDGoC Alumni (GDSC 2nd LEAD)",
      company: "Toss Bank",
      topic: "똑똑한 취준",
      image: "/speakers/NA.webp"
    },
    {
      name: "이종민",
      role: "GDGoC Soongsil 24",
      company: "컴퓨터학부",
      topic: "홀로 서버 개발을 찍어먹어보며!!!",
      image: "/images/speakers/speaker3.jpg"
    },
    {
      name: "안은소",
      role: "GDGoC Soongsil 24",
      company: "컴퓨터학부",
      topic: "개발자도 할 수 있는 디자인 시스템",
      image: "/images/speakers/speaker4.jpg"
    },
    {
      name: "한재찬",
      role: "GDGoC Soongsil 24",
      company: "글로벌미디어학부",
      topic: "기존 기술은 어떻게 바뀔까? : GraphQL을 예시로",
      image: "/images/speakers/speaker5.jpg"
    }
  ];

  const schedule = [
    { time: "13:00 - 13:30", event: "등록 및 키노트 - 여는세션", type: "registration" },
    { time: "13:30 - 14:30", event: "첫 번째 세션 - 안은소, 오인규", type: "session" },
    { time: "14:30 - 14:40", event: "Break Time", type: "break" },
    { time: "14:40 - 15:40", event: "두 번째 세션 - 이종민, 우수연", type: "session" },
    { time: "15:40 - 15:50", event: "Break Time", type: "break" },
    { time: "15:50 - 16:50", event: "세 번째 세션 - 한재찬, 나상우", type: "session" },
    { time: "16:50 - 17:00", event: "Break Time", type: "break" },
    { time: "17:00 - 17:30", event: "패널 Q&A", type: "panel" },
    { time: "17:30 - 18:00", event: "Closing & 럭키드로우", type: "networking" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-500 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-tl from-red-300 to-green-500 opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-white-400 opacity-60" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-green-400/15 rounded-full blur-lg animate-pulse delay-500" />
        
        <div className={`relative z-10 text-center px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Google Developer Groups on Campus
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            2nd Open
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              SSUmall
            </span>
            <br />
            Seminar
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            학생 개발자들을 위한 특별한 세미나
            <br />
            <span className="text-yellow-300">함께 성장하고, 미래를 그려보세요</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={() => window.open('https://forms.gle/HC1X8ivwfg5pe8kW7', '_blank')}
            >
              사전 신청하기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              size="lg"
              className="border-white/30 text-white hover:bg-black/50 text-lg px-8 py-6 rounded-full font-medium backdrop-blur-sm"
              onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
            >
              자세히 보기
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 text-white">
              <Calendar className="w-8 h-8 mb-3 mx-auto text-yellow-300" />
              <h3 className="font-semibold mb-2">날짜</h3>
              <p>2025년 6월 21일 (토)</p>
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 text-white">
              <Clock className="w-8 h-8 mb-3 mx-auto text-green-300" />
              <h3 className="font-semibold mb-2">시간</h3>
              <p>13:00 - 18:00</p>
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 text-white">
              <MapPin className="w-8 h-8 mb-3 mx-auto text-blue-400" />
              <h3 className="font-semibold mb-2">장소</h3>
              <p>숭실대 베어드홀 5층 대회의실</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="details" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SSUmall Seminar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SSUmall Seminar는 Google Developer Groups on Campus Soongsil University의 
              대표적인 활입니다. 숭실대학교 SSU에서 가져오기도 하였지만, 
              Small(스몰)이라는 뜻도 가지고 있습니다. 이는 어떤 자그마한 내용을 공유해도 
              큰 가치를 지닌다는 뜻입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">행사 목표</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  학생 개발자들을 위해 GDGoC Soongsil의 Alumni와 Member분들이 나누어주는
                  SSUmall Seminar의 이야기를 공유하는 것입니다.
                </p>
                <div className="flex items-center gap-3 text-blue-600">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">학생 개발자 대상</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-400 via-green-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">특별한 경험</h3>
                <p className="leading-relaxed">
                  학생 개발자들을 위해 GDGoC Soongsil의 Alumni와 
                  Member들로부터 나누어주는 구글, 커리어, 미래, 
                  개발자 커뮤니티에 대한 다양한 이야기들을 접해 만나볼게요!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">참가자 혜택</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Alumni 강연</h4>
                    <p className="text-gray-600">업계 최고 전문가들의 실무 경험 공유</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">네트워킹</h4>
                    <p className="text-gray-600">동료 개발자들과의 소중한 인맥 형성</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">커리어 이정표</h4>
                    <p className="text-gray-600">개발자 커리어 패스에 대한 구체적 조언</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Speaker
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Open SSUmall Seminar의 Speaker를 소개합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-lg" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                    <p className="text-blue-600 font-medium mb-1">{speaker.role}</p>
                    <p className="text-gray-600 mb-4">{speaker.company}</p>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-900">발표 주제</p>
                      <p className="text-sm text-gray-600 mt-1">{speaker.topic}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              행사 일정
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 transform md:-translate-x-px" />
              
              {schedule.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-2 border-blue-500 rounded-full transform -translate-x-1/2 z-10" />
                  
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                            item.type === 'session' ? 'bg-blue-100 text-blue-800' :
                            item.type === 'break' ? 'bg-green-100 text-green-800' :
                            item.type === 'panel' ? 'bg-purple-100 text-purple-800' :
                            item.type === 'networking' ? 'bg-pink-100 text-pink-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {item.time}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.event}</h3>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-400 via-yellow to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              서둘러서 신청하세요!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            제한된 좌석으로 선착순 마감됩니다. 
          </p>
          
          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 text-xl px-12 py-6 rounded-full font-bold transform hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={() => window.open('https://forms.gle/HC1X8ivwfg5pe8kW7', '_blank')}
            >
              사전 신청하기
              <ExternalLink className="ml-2 w-6 h-6" />
            </Button>
            
            <p className="text-white/80 text-sm">
              * 사전 신청은 Google Forms를 통해 진행됩니다
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Google Developer Groups on Campus</h3>
            <h4 className="text-xl mb-6">Soongsil University</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h5 className="font-semibold mb-2">행사 정보</h5>
                <p className="text-gray-400 text-sm">2nd Open SSUmall Seminar</p>
                <p className="text-gray-400 text-sm">2025.06.21 (토) 13:00-18:00</p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">장소</h5>
                <p className="text-gray-400 text-sm">숭실대학교</p>
                <p className="text-gray-400 text-sm">베어드홀 5층 대회의실</p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">주최</h5>
                <p className="text-gray-400 text-sm">GDGoC Soongsil</p>
                <p className="text-gray-400 text-sm">Google for Developers</p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 Google Developer Groups on Campus Soongsil University. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}