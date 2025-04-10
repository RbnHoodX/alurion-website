
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company?: string;
  image?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  image,
  delay = 0,
}) => {
  const initials = author
    .split(' ')
    .map((name) => name[0])
    .join('');

  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: delay * 0.1 }}
    >
      <Card className="bg-white border border-alurion-accent/30 rounded-2xl overflow-hidden h-full shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-6">
            <Avatar className="h-14 w-14 border-2 border-alurion-accent">
              {image ? (
                <AvatarImage src={image} alt={author} />
              ) : (
                <AvatarFallback className="bg-alurion-primary text-white">
                  {initials}
                </AvatarFallback>
              )}
            </Avatar>
            <div className="ml-4">
              <h3 className="font-bold text-lg text-alurion-primary">{author}</h3>
              <p className="text-sm text-gray-500">{position}</p>
              {company && <p className="text-sm text-gray-500">{company}</p>}
            </div>
            <div className="ml-auto flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className="w-5 h-5 text-alurion-accent" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>
          <div className="relative mb-4">
            <svg 
              className="absolute top-0 left-0 transform -translate-y-6 w-12 h-12 text-alurion-accent opacity-20"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
            </svg>
            <p className="text-gray-600 italic text-lg px-2">{quote}</p>
          </div>
          <div className="mt-auto">
            <div className="h-1 w-16 bg-alurion-accent rounded-full"></div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
