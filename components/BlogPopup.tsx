'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BlogPopupProps {
  posts: any[];
}

export default function BlogPopup({ posts }: BlogPopupProps) {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const openPost = (post: any) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closePost}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${selectedPost.gradient} p-6 text-white`}>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">{selectedPost.category}</span>
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">{selectedPost.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-white/80 mt-2">
                      <span>{selectedPost.date}</span>
                      <span>·</span>
                      <span>{selectedPost.readTime} okuma</span>
                    </div>
                  </div>
                  <button
                    onClick={closePost}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
                <div
                  className="space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mb-4 [&>h2]:leading-tight [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:text-gray-700 [&>li]:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 flex justify-between items-center">
                <button
                  onClick={closePost}
                  className="px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Kapat
                </button>
                <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Paylaş
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
