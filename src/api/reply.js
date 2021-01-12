import { request, authRequest } from '@/utils/request';

export function getReplies(topicId, data) {
  return authRequest('topics/' + topicId + '/replies', {
    data: data
  });
}
