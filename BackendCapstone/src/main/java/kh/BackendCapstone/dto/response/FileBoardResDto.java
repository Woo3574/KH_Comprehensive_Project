package kh.BackendCapstone.dto.response;


import kh.BackendCapstone.constant.FileCategory;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class FileBoardResDto {
    // 리스트에 담을 내용
    private Long univId;
    private String univName; // 대학명
    private String univDept; // 학과명
    private String univImg; // 대학 로고
    private Long memberId;
    private String memberName; // 이름
    private String memberEmail; // 이메일 추가
    private int price; // 가격
    private Long fileBoardId; // 파일보드 ID 추가
    private String fileTitle; // 파일 제목
    private FileCategory fileCategory;
    private LocalDateTime regDate; // 작성일
    
    // 상세정보에만 담을 내용
    private String mainFile;
    private String preview;
    private String summary;
}