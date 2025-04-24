
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
      <Card className="bg-white border-none rounded-3xl overflow-hidden h-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
        <CardContent className="p-8 flex flex-col h-full">
          {/* Stars at the top of quote with label */}
          <div className="flex items-center mb-6 gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-amber-400 fill-amber-400"
                  strokeWidth={1}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">(5.0)</span>
          </div>
          
          {/* Quote */}
          <div className="relative mb-8">
            <svg 
              className="absolute top-0 left-0 transform -translate-y-4 w-8 h-8 text-alurion-accent opacity-20"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
            </svg>
            <p className="text-gray-600 text-lg leading-relaxed">{quote}</p>
          </div>
          
          {/* Author info at bottom */}
          <div className="mt-auto flex items-center">
            <Avatar className="h-12 w-12 border-2 border-alurion-secondary/20">
              {image ? (
                <AvatarImage src={image} alt={author} />
              ) : (
                <AvatarFallback className="bg-alurion-primary text-white">
                  {initials}
                </AvatarFallback>
              )}
            </Avatar>
            <div className="ml-4">
              <h3 className="font-medium text-alurion-primary">{author}</h3>
              <p className="text-sm text-gray-500">{position}</p>
              {company && <p className="text-sm text-gray-500">{company}</p>}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
