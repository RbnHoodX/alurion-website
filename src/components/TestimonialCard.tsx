
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
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white border-none rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="flex-shrink-0">
              <div className="relative">
                <span className="absolute -top-6 left-0 text-9xl text-alurion-accent/20">"</span>
                <Avatar className="h-24 w-24 border-4 border-alurion-secondary/20">
                  {image ? (
                    <AvatarImage src={image} alt={author} />
                  ) : (
                    <AvatarFallback className="bg-alurion-primary text-xl text-white">
                      {initials}
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>
            </div>
            
            <div className="flex-1">
              <blockquote className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                {quote}
              </blockquote>
              <div>
                <h3 className="font-semibold text-xl text-alurion-primary">{author}</h3>
                <p className="text-gray-600">{position}</p>
                {company && <p className="text-gray-600">{company}</p>}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
