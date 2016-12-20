package com.consoft.unistrapg.repository.search;

import com.consoft.unistrapg.domain.Student;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Student entity.
 */
public interface StudentSearchRepository extends ElasticsearchRepository<Student, Long> {
}
