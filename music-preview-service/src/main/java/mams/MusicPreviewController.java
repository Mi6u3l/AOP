package mams;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;;

@RestController
public class MusicPreviewController {
    @GetMapping("/music")
    public String preview() {
      return "{ \"trackUrl\" : \"https://p.scdn.co/mp3-preview/ca3db3ddff60b12668c2b1c762219e4775a04b2f\" }";
    }
}