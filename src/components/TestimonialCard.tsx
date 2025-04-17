
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="bg-white shadow-lg border-none rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="relative">
            <div className="text-[120px] font-serif text-gray-100 absolute -top-10 -left-4">"</div>
            <p className="text-gray-600 text-lg leading-relaxed relative z-10 mb-8">
              {quote}
            </p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900">{author}</h3>
            <p className="text-gray-500">{position}</p>
            {company && <p className="text-gray-500">{company}</p>}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
