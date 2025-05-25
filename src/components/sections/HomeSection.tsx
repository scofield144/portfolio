
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { educationData, aboutData } from '@/lib/data';

export function HomeSection() {
  return (
    <section id="about-me" className="space-y-8">
      {/* Education */}
      <div>
        <h3 className="text-xl font-heading text-foreground mb-4 flex items-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">
          <span role="img" aria-label="books stack" className="mr-2 text-3xl">📚</span>
          Education
        </h3>
        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-background/50 hover:shadow-md transition-shadow border border-border/50">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  {edu.emojiIcon && <span role="img" aria-label={edu.degree} className="text-3xl text-primary mt-1 flex-shrink-0">{edu.emojiIcon}</span>}
                  <div>
                    <h4 className="font-heading font-semibold text-base text-primary">{edu.institution}</h4>
                    <p className="text-muted-foreground text-sm">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="bg-border" />

      {/* Other About Items */}
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {aboutData.map((item, index) => (
          <Card key={index} className="bg-background/50 hover:shadow-md transition-shadow border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center hover:scale-105 motion-safe:transition-transform motion-safe:duration-200 ease-in-out">
                {item.emojiIcon && <span role="img" aria-label={item.title} className="mr-2 text-3xl text-accent">{item.emojiIcon}</span>}
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 text-sm leading-relaxed">{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
