<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* server/status/base.twig */
class __TwigTemplate_4546ac5fcb3879f5b16d3d7a21e1d9b8b495c30e8a2c92ed9effd654633f4c6e extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<div class=\"container-fluid\">
  <div class=\"row\">
    <ul class=\"nav nav-pills m-2\">
      <li class=\"nav-item\">
        <a href=\"";
        // line 5
        echo PhpMyAdmin\Url::getFromRoute("/server/status");
        echo "\" class=\"nav-link";
        echo (((0 === twig_compare(($context["active"] ?? null), "status"))) ? (" active") : (""));
        echo "\">
          ";
echo _gettext("Server");
        // line 7
        echo "        </a>
      </li>
      <li class=\"nav-item\">
        <a href=\"";
        // line 10
        echo PhpMyAdmin\Url::getFromRoute("/server/status/processes");
        echo "\" class=\"nav-link";
        echo (((0 === twig_compare(($context["active"] ?? null), "processes"))) ? (" active") : (""));
        echo "\">
          ";
echo _gettext("Processes");
        // line 12
        echo "        </a>
      </li>
      <li class=\"nav-item\">
        <a href=\"";
        // line 15
        echo PhpMyAdmin\Url::getFromRoute("/server/status/queries");
        echo "\" class=\"nav-link";
        echo (((0 === twig_compare(($context["active"] ?? null), "queries"))) ? (" active") : (""));
        echo "\">
          ";
echo _gettext("Query statistics");
        // line 17
        echo "        </a>
      </li>
      <li class=\"nav-item\">
        <a href=\"";
        // line 20
        echo PhpMyAdmin\Url::getFromRoute("/server/status/variables");
        echo "\" class=\"nav-link";
        echo (((0 === twig_compare(($context["active"] ?? null), "variables"))) ? (" active") : (""));
        echo "\">
          ";
echo _gettext("All status variables");
        // line 22
        echo "        </a>
      </li>
      <li class=\"nav-item\">
        <a href=\"";
        // line 25
        echo PhpMyAdmin\Url::getFromRoute("/server/status/monitor");
        echo "\" class=\"nav-link";
        echo (((0 === twig_compare(($context["active"] ?? null), "monitor"))) ? (" active") : (""));
        echo "\">
          ";
echo _gettext("Monitor");
        // line 27
        echo "        </a>
      </li>
      <li class=\"nav-item\">
        <a href=\"";
        // line 30
        echo PhpMyAdmin\Url::getFromRoute("/server/status/advisor");
        echo "\" class=\"nav-link";
        echo (((0 === twig_compare(($context["active"] ?? null), "advisor"))) ? (" active") : (""));
        echo "\">
          ";
echo _gettext("Advisor");
        // line 32
        echo "        </a>
      </li>
    </ul>
  </div>

  ";
        // line 37
        $this->displayBlock('content', $context, $blocks);
        // line 38
        echo "</div>
";
    }

    // line 37
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
    }

    public function getTemplateName()
    {
        return "server/status/base.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  125 => 37,  120 => 38,  118 => 37,  111 => 32,  104 => 30,  99 => 27,  92 => 25,  87 => 22,  80 => 20,  75 => 17,  68 => 15,  63 => 12,  56 => 10,  51 => 7,  44 => 5,  38 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "server/status/base.twig", "/ptldesign/www/dbeditor/templates/server/status/base.twig");
    }
}
